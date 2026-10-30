/* POST /api/coach — one coaching round on one stage (1–6).
   GET  /api/coach — public config for the UI ({ access_required, mock }).
   Contract: coach-framework/spec/03-architecture.md. */
const fw = require("./_lib/framework.js");
const {
  isMock, accessCodes, checkAccess, overLimit, truncateDeep, createMessage,
  sendError, handleApiError, logCall, clientIp,
} = require("./_lib/common.js");

const MAX_ROUNDS = 3;

function buildSystem(stage) {
  let system =
    fw.COACH_SYSTEM +
    "\n\n# CURRENT STAGE\n" + fw.STAGE_GUIDES[stage] +
    "\n\n# RUBRIC FOR THIS STAGE\n" + fw.RUBRIC[stage] +
    "\n\n" + fw.CALIBRATION;
  if (stage === 6) {
    const skills = fw.CATALOG.skills.map(({ signals, ...s }) => ({ ...s, signals }));
    system += "\n\n# SKILLS CATALOG\n" + JSON.stringify({ sessions: fw.CATALOG.sessions, skills });
  }
  return system;
}

const clip = (s, n) => (typeof s === "string" ? s.slice(0, n) : "");

// Keep the model's reply inside the published contract, whatever it returned.
function normalise(raw, stage, brief) {
  const rubric = fw.CRITERIA[stage];
  const byId = new Map((Array.isArray(raw.criteria) ? raw.criteria : []).map((c) => [c && c.id, c]));
  const criteria = rubric.map((r) => {
    const c = byId.get(r.id) || {};
    const status = ["met", "partial", "missing"].includes(c.status) ? c.status : "partial";
    return { id: r.id, status, note: clip(c.note, 200) };
  });

  const personalData = (brief.inputs || []).some((i) => i && (i.personal_data === "yes" || i.personal_data === "not_sure"));
  const requiredMissing = criteria.some((c) => {
    const r = rubric.find((x) => x.id === c.id);
    return r.required && (!r.conditional || personalData) && c.status === "missing";
  });

  const skillIds = new Set(fw.CATALOG.skills.map((s) => s.id));
  const listOf = (v) => (Array.isArray(v) ? v : []);
  return {
    stage,
    verdict: requiredMissing ? "needs_work" : "ready",
    criteria,
    strength: clip(raw.strength, 200),
    feedback: clip(raw.feedback, 700),
    questions: listOf(raw.questions).filter((q) => typeof q === "string" && q.trim()).slice(0, 2).map((q) => clip(q, 250)),
    improved_since_last: clip(raw.improved_since_last, 200),
    red_flags: listOf(raw.red_flags)
      .filter((f) => f && typeof f.message === "string")
      .map((f) => ({
        type: ["personal_data", "not_own_work", "too_big", "no_sample", "other"].includes(f.type) ? f.type : "other",
        message: clip(f.message, 300),
      })),
    suggested_skills: stage === 6
      ? listOf(raw.suggested_skills).filter((s) => s && skillIds.has(s.id)).slice(0, 2).map((s) => ({ id: s.id, reason: clip(s.reason, 250) }))
      : [],
    uncovered_needs: stage === 6
      ? listOf(raw.uncovered_needs).filter((s) => s && s.skill).slice(0, 2).map((s) => ({ skill: clip(s.skill, 100), reason: clip(s.reason, 250) }))
      : [],
  };
}

function mockResponse(stage, round) {
  const rubric = fw.CRITERIA[stage];
  return {
    stage,
    verdict: "ready",
    criteria: rubric.map((r, i) => ({ id: r.id, status: i === rubric.length - 1 && round === 1 ? "partial" : "met", note: "mock" })),
    strength: "You named one specific task that you do yourself.",
    feedback: `(Practice mode: no AI was called.) This is where the coach's feedback for stage ${stage}, round ${round} appears. It quotes your words and asks at most two questions.`,
    questions: round < 3 ? ["Think of the last time this happened. What exactly went wrong, and when did you notice?"] : [],
    improved_since_last: round > 1 ? "You added a real example." : "",
    red_flags: [],
    suggested_skills: stage === 6 ? [{ id: "dq-checks", reason: "You said errors are found after sharing; automatic checks target exactly that." }] : [],
    uncovered_needs: [],
  };
}

module.exports = async (req, res) => {
  if (req.method === "GET") {
    return res.status(200).json({ access_required: accessCodes().length > 0, mock: isMock() });
  }
  if (req.method !== "POST") return sendError(res, 405, "Method not allowed");

  const body = req.body || {};
  const stage = Number(body.stage);
  const round = Number(body.round);
  const sessionId = String(body.session_id || "").slice(0, 64);

  if (!checkAccess(body.access_code)) return sendError(res, 403, "That cohort code isn't recognised. Check it with your instructor.");
  if (!(stage >= 1 && stage <= 6)) return sendError(res, 400, "Unknown stage.");
  if (!(round >= 1)) return sendError(res, 400, "Bad round number.");
  if (round > MAX_ROUNDS) return sendError(res, 429, "Good enough to move on. You can refine this later in the course.");
  if (!sessionId || !body.brief || typeof body.brief !== "object") return sendError(res, 400, "Bad request.");
  if (overLimit(sessionId, clientIp(req))) return sendError(res, 429, "You've reached the coaching limit for this session. Move on — you can refine this later in the course.");

  if (isMock()) return res.status(200).json(mockResponse(stage, round));

  const brief = truncateDeep(body.brief);
  // Send the learner's state without the coaching history (that goes in previous_feedback).
  const { coaching, flags, skills_history, ...briefForModel } = brief;
  const previous = truncateDeep(Array.isArray(body.previous_feedback) ? body.previous_feedback.slice(-2) : []);

  const started = Date.now();
  try {
    const msg = await createMessage({
      model: process.env.COACH_MODEL || "claude-opus-5-5",
      max_tokens: 4000,
      output_config: { effort: "low", format: { type: "json_schema", schema: fw.COACH_SCHEMA } },
      system: buildSystem(stage),
      messages: [{
        role: "user",
        content:
          `<learner_brief>\n${JSON.stringify(briefForModel)}\n</learner_brief>\n` +
          `<previous_feedback>\n${JSON.stringify(previous)}\n</previous_feedback>\n` +
          `Coach stage ${stage}, round ${round}.`,
      }],
    });

    logCall("coach", {
      session_id: sessionId, stage, round, ms: Date.now() - started, model: msg.model,
      stop: msg.stop_reason, in: msg.usage && msg.usage.input_tokens, out: msg.usage && msg.usage.output_tokens,
    });

    if (msg.stop_reason === "refusal") return sendError(res, 502, "The coach couldn't respond to this answer. Try rewording it, or move on.");
    const text = msg.content.filter((b) => b.type === "text").map((b) => b.text).join("");
    let raw;
    try { raw = JSON.parse(text); } catch { return sendError(res, 502, "The coach's reply was incomplete. Your answer is saved. Try again."); }
    return res.status(200).json(normalise(raw, stage, briefForModel));
  } catch (err) {
    return handleApiError(res, err);
  }
};
