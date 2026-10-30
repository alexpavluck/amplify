/* POST /api/brief — compose the Problem Brief & Requirements (Markdown),
   aligned to the AMPLIFY course plan in the skills catalog. */
const fw = require("./_lib/framework.js");
const {
  isMock, checkAccess, overLimit, truncateDeep, createMessage,
  sendError, handleApiError, logCall, clientIp,
} = require("./_lib/common.js");

// The writer only needs the last coaching round of each stage, minus internal notes.
function lastRounds(coaching) {
  const out = {};
  for (const [stage, rounds] of Object.entries(coaching || {})) {
    const last = Array.isArray(rounds) ? rounds[rounds.length - 1] : null;
    if (!last) continue;
    out[stage] = {
      verdict: last.verdict,
      red_flags: last.red_flags,
      suggested_skills: last.suggested_skills,
      uncovered_needs: last.uncovered_needs,
    };
  }
  return out;
}

function courseCatalog() {
  const sessions = Object.fromEntries(fw.CATALOG.sessions.map((s) => [s.n, s.title]));
  return fw.CATALOG.skills.map((s) => ({
    id: s.id,
    skill: s.skill,
    sessions: s.sessions.map((n) => `Session ${n}: ${sessions[n]}`),
    coverage: s.coverage,
    coverage_note: s.coverage_note,
  }));
}

function mockBrief(brief) {
  const m = brief.meta || {};
  return `# Problem Brief & Requirements\n\n**Learner:** ${m.name || "Not provided"}\n\n## 1. Summary\n\n(Practice mode: no AI was called. Your real brief appears here.)\n\n## 8. Skills plan and course alignment\n\n| Skill | Why this problem needs it | Where in AMPLIFY | Already have? |\n|---|---|---|---|\n| Data quality checks | Errors found late | Partly: session 5 | No |\n\n### Not covered in the course\n\n- **Extract data from photos and PDFs**: inputs arrive as photos of paper forms.\n`;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return sendError(res, 405, "Method not allowed");
  const body = req.body || {};
  const sessionId = String(body.session_id || "").slice(0, 64);

  if (!checkAccess(body.access_code)) return sendError(res, 403, "That cohort code isn't recognised. Check it with your instructor.");
  if (!sessionId || !body.brief || typeof body.brief !== "object") return sendError(res, 400, "Bad request.");
  if (overLimit(sessionId, clientIp(req))) return sendError(res, 429, "You've reached the limit for this session. Download your progress and try again later.");

  const brief = truncateDeep(body.brief);
  if (isMock()) return res.status(200).json({ markdown: mockBrief(brief) });

  const { coaching, skills_history, ...rest } = brief;
  const learner = { ...rest, coach_results: lastRounds(coaching) };

  const started = Date.now();
  try {
    const msg = await createMessage({
      model: process.env.BRIEF_MODEL || "claude-opus-5-5",
      max_tokens: 12000,
      output_config: { effort: "medium" },
      system: fw.BRIEF_WRITER,
      messages: [{
        role: "user",
        content:
          `<learner_brief>\n${JSON.stringify(learner)}\n</learner_brief>\n` +
          `<course_catalog>\n${JSON.stringify(courseCatalog())}\n</course_catalog>\n` +
          `Today's date: ${new Date().toISOString().slice(0, 10)}. Write the document.`,
      }],
    });

    logCall("brief", {
      session_id: sessionId, ms: Date.now() - started, model: msg.model, stop: msg.stop_reason,
      in: msg.usage && msg.usage.input_tokens, out: msg.usage && msg.usage.output_tokens,
    });

    if (msg.stop_reason === "refusal") return sendError(res, 502, "The coach couldn't write this brief. Check your answers for anything unusual and try again.");
    const markdown = msg.content.filter((b) => b.type === "text").map((b) => b.text).join("").trim();
    if (!markdown) return sendError(res, 502, "The brief came back empty. Try again.");
    return res.status(200).json({ markdown, truncated: msg.stop_reason === "max_tokens" });
  } catch (err) {
    return handleApiError(res, err);
  }
};
