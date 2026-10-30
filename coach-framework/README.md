# AMPLIFY Problem Coach

Live at `amplify-course.com/problem-coach/`. A learner describes one real work task in seven short stages. After each stage, an AI coach asks one or two questions; it never writes the answer for them. At the end, the coach writes a **Problem Brief & Requirements** document and maps every skill the problem needs to the AMPLIFY 2027 sessions. Skills the course doesn't teach are marked **Not covered in the course**.

## Where things live

| Path | What it is |
|---|---|
| `problem-coach/` | The page: `index.html`, `coach.css`, `coach.js` (no build step) |
| `problem-coach/catalog.js` | Generated: the skills catalog and rubric IDs the browser needs |
| `api/coach.js` | `POST /api/coach`: one coaching round. `GET` returns `{ access_required, mock }` |
| `api/brief.js` | `POST /api/brief`: writes the Markdown brief |
| `api/_lib/framework.js` | Generated: prompts, rubric and schema, bundled for the functions only |
| `coach-framework/` | Source of truth for prompts, rubric, schemas, template and the **skills catalog** (not deployed) |
| `scripts/build-coach-framework.mjs` | Regenerates the two generated files |

## Change the course alignment or prompts

1. Edit `coach-framework/schema/skills-catalog.json`. Each skill has `sessions` (1–8) and `coverage`: `covered`, `partial` or `not_covered`, plus a `coverage_note`. To edit prompts, change the files in `coach-framework/prompts/`.
2. Run `npm run build:coach`.
3. Commit the source and generated files together.

## Environment variables (Vercel project `amplify`)

| Var | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | yes | Course Claude API key. It stays server-side and is never sent to the browser. |
| `ACCESS_CODES` | recommended | Comma-separated cohort codes, e.g. `AMP-2027`. When set, learners must enter one on the welcome screen. When unset, the coach is open to anyone with the URL. |
| `COACH_MODEL` | no | Default `claude-opus-5-5`. Set `claude-haiku-5-5` to cut coaching cost about 40×. |
| `BRIEF_MODEL` | no | Default `claude-opus-5-5`. |
| `MAX_CALLS_PER_SESSION` | no | Default `30`. |
| `COACH_MOCK` | no | `1` returns canned replies with no API calls, for demos and testing. |

Cost estimate on Opus 5.5: a coaching call is about 4k tokens in and under 1k out, roughly $0.03. A learner makes at most 18 coaching calls and 1 brief call, so about $0.25–0.70 per learner.

## Run locally

```bash
npm install
COACH_MOCK=1 npm run dev:coach          # http://localhost:8130/problem-coach/
ANTHROPIC_API_KEY=... npm run dev:coach # real coach
```

## Differences from the original framework spec

- **Structured outputs instead of a forced tool call.** Current Claude models reject `tool_choice: {type: "tool"}`. The coach therefore uses `output_config.format` with the response schema. The route also validates the reply and clamps it to the contract: rubric IDs, two questions at most, field lengths. It recomputes `verdict` from the required criteria.
- **Course alignment.** The catalog gained `sessions` and `coverage`, and four new skills: reusable skills, connectors, data-to-action decisions and automation. The stage-6 coach can also return `uncovered_needs`, meaning skills the problem needs that no catalog entry describes. The brief's section 8 now reads "Skills plan and course alignment" and includes a "Not covered in the course" list.
- **Rate limits are in-memory** per warm function instance. That is enough for a pilot. Move to Vercel KV / Upstash if abuse appears.
- Refusals fall back server-side (`fallbacks: "default"`). Learner text is never logged; logs hold only session ID, stage, round, latency and token counts.
