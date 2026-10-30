# 01 — Coaching flow

Seven stages. Each stage is one card in the UI: a short prompt, one to four fields, a "Check my answer" button and a "Move on" button.

```
0 Welcome ─► 1 Problem ─► 2 Inputs ─► 3 Outputs ─► 4 Gap & success ─► 5 Fit & constraints ─► 6 Skills map ─► 7 Review & generate
             └──────────────── coached (max 3 rounds each) ─────────────────────────────┘     coached        brief writer
```

Stage 0 needs no AI. Stages 1–6 call `/api/coach`. Stage 7 calls `/api/brief`.

---

## Stage 0 — Welcome (no AI)

**Shows:** what the tool does, how long it takes (20–30 minutes), a data notice ("Do not type patient names or any information that identifies a person"), the access code field, and a language choice (EN/FR, which only sets the UI; the coach follows whatever language the learner writes in).

**Collects:** `meta.name`, `meta.country`, `meta.programme_role`, `meta.cohort`, `meta.locale`.

---

## Stage 1 — The problem

**Learner prompt:** *Think of one task you do yourself, again and again, that takes too long, goes wrong, or frustrates you. Describe it as if a new colleague were taking it over next month.*

**Fields:**
- `problem.task` — the task in a few words
- `problem.description` — 2–5 sentences: what it is, who it is for, why it matters
- `problem.area` — data management & analysis / communication / knowledge management / project management (+ optional second)

**Coach is looking for:** one specific, recurring task the learner owns. It is not looking for a programme-wide complaint.

---

## Stage 2 — Inputs

**Learner prompt:** *What do you start with? List everything that comes in before you can do this task.*

**Fields:** `inputs[]`, a repeatable row:
- `what` (e.g. district treatment summaries)
- `from` (who or what system sends it)
- `format` (Excel / DHIS2 export / paper / photo / PDF / email text / WhatsApp / other)
- `how_often`
- `personal_data` (yes / no / not sure)

**Coach is looking for:** concrete sources and formats, and whether formats differ between sources (that is often where the problem lives).

---

## Stage 3 — Outputs

**Learner prompt:** *What do you have to produce at the end, and who receives it?*

**Fields:** `outputs[]`, a repeatable row:
- `what` (e.g. coverage tables and two charts in the annual report)
- `for_whom`
- `format`
- `deadline_or_frequency`
- `used_for` (what decision or action the output supports)

**Coach is looking for:** a named product with a named recipient. "Better data" is not an output.

---

## Stage 4 — The gap and what "better" looks like

**Learner prompt:** *Between what comes in and what goes out, where does it get hard? Tell us about the last time it went wrong.*

**Fields:**
- `gap.hardest_step` — the step that is slowest, most error-prone or most frustrating
- `gap.recent_example` — one real occasion, 2–4 sentences
- `gap.consequence` — what happened because of it (one sentence)
- `success.measure` — how you would know it is better
- `success.baseline` and `success.target` (optional, e.g. "3 weeks" → "1 week")

**Coach is looking for:** a specific point in the input→output path, one real instance, and a measure the learner could actually observe.

---

## Stage 5 — Fit and constraints

Mostly yes/no, kept short on purpose. These are **gates**, not detail. If one fails, the project probably cannot work.

**Fields:**
- `fit.own_work` — Is this your own work, that you can change during the course? (y/n)
- `fit.recurring` — Will you do it again during or soon after the course? (y/n)
- `fit.sample_available` — Can you get an anonymised sample of the inputs? (yes / no / need permission)
- `constraints.connectivity` — reliable / unreliable / mostly offline
- `constraints.tools` — tools you have now (multi-select + free text)
- `constraints.permission` — Does anyone need to approve a change to how this is done? (free text, optional)

**Coach is looking for:** red flags. If `own_work` is no, `sample_available` is no, or inputs contain personal data, the coach raises it and suggests narrowing or swapping the problem. It does not refuse.

---

## Stage 6 — Skills map

**Learner prompt:** *Look at the list. Which of these would you need to solve your problem? Tick what you think you need, and mark what you can already do.*

**UI:** the skills from `schema/skills-catalog.json`, each shown as its **problem phrase** ("My data arrives in different formats"), not its module name. Two ticks per skill: *needed* and *I can already do this*.

**Fields:** `skills[]` = `{ id, needed, have, note }`

**Coach is looking for:** skills that obviously follow from stages 2–4 but were not ticked (e.g. inputs arrive as photos of paper forms but "extract data from images/PDFs" is unticked), and ticked skills with no link to the problem. This is the **only** stage where the coach may talk about AI approaches, and only to explain why a skill is relevant.

This is a first guess. The app should let learners reopen stage 6 at the end of each module (`skills_history[]` keeps each version).

---

## Stage 7 — Review and generate

The learner sees all answers on one screen and can edit any of them. "Generate my brief" calls `/api/brief`, which returns Markdown following `templates/requirements-doc.md`. They can download it as .md or .docx.

---

## Exit rules (every coached stage)

- The coach returns `verdict: "ready"` or `"needs_work"`.
- "Move on" is **always** enabled. The coach advises and never blocks.
- After **3** coaching rounds on a stage, the UI stops offering "Check my answer" and says: *"Good enough to move on. You can refine this later in the course."*
- If the learner moves on while required criteria are unmet, those criteria go into `flags[]` and appear in the brief's "Coach flags" section.

---

## Deferred detail: what the coach must NOT ask for

These are real questions, but they belong to design and iteration later in the course. Asking them now buries the learner in detail before they understand the problem.

- Exact step-by-step walkthroughs (more than 3–4 steps)
- How many people are involved, or their names
- Exact row counts, file sizes, number of columns
- Past attempts to fix it and why they failed
- Who has to approve changes, beyond the single optional field in stage 5
- Which AI tool, model or technique to use (until stage 6, and even then only at skill level)
- Budget, timeline or deployment plans

If the learner volunteers any of this, the coach keeps it (it goes into the brief) but never asks for more.
