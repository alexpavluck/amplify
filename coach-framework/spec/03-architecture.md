# 03 — Architecture (Vercel + Claude API)

## Shape

```
Browser (static SPA)                       Vercel Functions (Node)               Anthropic
───────────────────                        ───────────────────────               ─────────
form state ─ localStorage (autosave)
"Check my answer" ──POST /api/coach──────► check access code
                                           assemble system prompt
                                           (coach-system + stage guide
                                            + rubric rows [+ skills catalog])
                                           messages.create, forced tool ───────► Claude
                       ◄── CoachResponse ── validate against schema ◄──────────
"Generate brief"  ──POST /api/brief──────► brief-writer prompt + template ─────► Claude
                       ◄── { markdown } ──
export .md / .docx (client side)
```

- **No database in v1.** The browser holds state (`schema/brief.schema.json`) in localStorage and saves on every change. "Download progress" / "Load progress" (JSON file) covers switching devices.
- **Prompts live server-side.** Bundle the `prompts/`, `spec/02-rubric.md` rows and `schema/` files into the functions at build time. The browser sends data only, never prompt text.
- **The API key** stays in Vercel env vars and is never shipped to the client.

## Environment variables

| Var | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Claude API key |
| `COACH_MODEL` | Model for coaching calls: a fast, low-cost tier |
| `BRIEF_MODEL` | Model for the final brief: a stronger tier (one call per learner) |
| `ACCESS_CODES` | Comma-separated cohort codes, e.g. `AMP-NG-2027,AMP-CM-2027` |
| `MAX_CALLS_PER_SESSION` | Hard cap, e.g. `30` |

Put model IDs in env vars, not in code, so you can change them without a redeploy.

## API contract

### `POST /api/coach`

Request:
```json
{
  "access_code": "AMP-NG-2027",
  "session_id": "uuid-from-browser",
  "stage": 2,
  "round": 1,
  "brief": { "...": "full BriefState so far" },
  "previous_feedback": [ { "...": "CoachResponse from earlier rounds of THIS stage only" } ]
}
```

Response: a `CoachResponse` (`schema/coach-response.schema.json`).

Rules enforced in the route, not just in the prompt:
- reject if `access_code` is not in `ACCESS_CODES`
- reject if `round > 3`
- reject if the session has made more than `MAX_CALLS_PER_SESSION` calls (in-memory counter is fine for a pilot; use Upstash/Vercel KV for production)
- truncate any single field over ~2,000 characters before sending

### `POST /api/brief`

Request: `{ access_code, session_id, brief }`
Response: `{ "markdown": "..." }`

## Prompt assembly (coach)

```
system =
  prompts/coach-system.md
  + "\n\n# CURRENT STAGE\n" + stage block from prompts/stage-guides.md
  + "\n\n# RUBRIC FOR THIS STAGE\n" + rubric rows for this stage (from spec/02)
  + (stage 6 only) "\n\n# SKILLS CATALOG\n" + schema/skills-catalog.json

user message =
  "<learner_brief>\n" + JSON.stringify(brief) + "\n</learner_brief>\n" +
  "<previous_feedback>\n" + JSON.stringify(previous_feedback) + "\n</previous_feedback>\n" +
  "Coach stage " + stage + ", round " + round + "."
```

The learner's text is wrapped in tags and the system prompt says to treat it as data. This guards against a learner (accidentally or not) typing instructions into a field.

Send the **whole** brief, not just the current stage, so the coach can connect inputs to outputs and spot contradictions. It stays small: a complete brief is usually under 2,000 tokens.

## Reference route (TypeScript, Vercel)

A sketch, not production code. Its job is to fix the forced-tool pattern.

```ts
// api/coach.ts
import Anthropic from "@anthropic-ai/sdk";
import coachSchema from "../schema/coach-response.schema.json";
import { buildCoachSystem } from "../lib/prompts"; // reads prompt files at build time

const client = new Anthropic(); // reads ANTHROPIC_API_KEY

export async function POST(req: Request) {
  const body = await req.json();
  const codes = (process.env.ACCESS_CODES ?? "").split(",");
  if (!codes.includes(body.access_code)) return new Response("Forbidden", { status: 403 });
  if (body.round > 3) return new Response("Round limit", { status: 429 });

  const msg = await client.messages.create({
    model: process.env.COACH_MODEL!,
    max_tokens: 800,
    system: buildCoachSystem(body.stage),
    tools: [{
      name: "submit_feedback",
      description: "Return coaching feedback for the current stage.",
      input_schema: coachSchema as Anthropic.Tool.InputSchema,
    }],
    tool_choice: { type: "tool", name: "submit_feedback" },
    messages: [{
      role: "user",
      content:
        `<learner_brief>\n${JSON.stringify(body.brief)}\n</learner_brief>\n` +
        `<previous_feedback>\n${JSON.stringify(body.previous_feedback ?? [])}\n</previous_feedback>\n` +
        `Coach stage ${body.stage}, round ${body.round}.`,
    }],
  });

  const block = msg.content.find((b) => b.type === "tool_use");
  if (!block || block.type !== "tool_use") return new Response("No feedback", { status: 502 });
  // validate block.input against coachSchema (e.g. with ajv) before returning
  return Response.json(block.input);
}
```

`/api/brief` follows the same pattern without tools: system = `prompts/brief-writer.md` + `templates/requirements-doc.md`, user = the brief JSON, and the response is the Markdown text.

## Low connectivity

- The form works fully offline. Only "Check my answer" and "Generate brief" need a connection.
- If a coach call fails, keep the learner's text, show "Couldn't reach the coach. Your answer is saved. Try again or move on.", and do **not** count the failed round.
- Keep the page light: no web fonts loaded at runtime, no large framework if you can avoid it. A coaching response is under 1 KB.
- Generating the .docx happens in the browser (the `docx` npm package), so no second round-trip is needed.

## Privacy and logging

- First-screen notice: what is sent, to whom, and "don't enter personal or patient information".
- **Don't log learner text** in function logs. Log only `session_id`, `stage`, `round`, latency and token counts.
- Optional client-side check: before sending, look for patterns like phone numbers or long lists of capitalised names and warn the learner. This is a nudge, not a guarantee.
- Confirm with whoever owns data governance that sending learner work text to the Claude API is acceptable for non-Sightsavers participants.

## Call budget per learner

6 coached stages × max 3 rounds + 1 brief = **19 calls maximum**. Most learners will need about 8–10. Each coaching call is roughly 3–4k input tokens (system prompt + brief) and under 800 output. Use these figures with current pricing to estimate cohort cost.

## Later (not v1)

- Facilitator view: Supabase table keyed by `meta.cohort`, with the learner explicitly choosing "Share with my facilitator".
- Revisit stage 6 after each module (already supported by `skills_history`).
- A cohort summary: which skills are most needed across all briefs, to help tune the module plan.
