# 02 — Rubric

The coach scores each criterion as `met`, `partial` or `missing`. **Required** criteria drive the verdict: all required at `met` or `partial` means `ready`. The `optional` criteria only shape the feedback.

Criterion IDs are referenced in `schema/coach-response.schema.json` and `prompts/stage-guides.md`. Keep them in sync.

---

## Stage 1 — Problem

| ID | Criterion | Req. |
|---|---|---|
| `P1_specific` | Names one specific task, not a general area | ✔ |
| `P2_recurring` | The task repeats (weekly, after each MDA, yearly…) | ✔ |
| `P3_owner` | The learner does the task themselves | ✔ |
| `P4_why` | Says who relies on the result or why it matters | |
| `P5_no_solution` | Describes the problem, not a solution ("we need an AI dashboard") | |

**Weak:** "Data management is a big challenge. Reports are late and have errors."
**Strong:** "Every year I compile district MDA treatment data into the coverage section of the national LF/oncho report. The programme manager presents it at the national technical meeting, and partners use it to plan drug orders."

---

## Stage 2 — Inputs

| ID | Criterion | Req. |
|---|---|---|
| `I1_named` | Each input is a named thing (not just "data") | ✔ |
| `I2_format` | Format given for each input | ✔ |
| `I3_source` | Where or who it comes from | ✔ |
| `I4_variation` | Notes whether formats or templates differ between sources | |
| `I5_personal` | Personal-data question answered | ✔ |

**Weak:** "District data."
**Strong:** "38 district treatment summaries. About 25 as Excel by email (two template versions in use), 9 as WhatsApp photos of paper forms, 4 by phone. Aggregate numbers only."

---

## Stage 3 — Outputs

| ID | Criterion | Req. |
|---|---|---|
| `O1_product` | A concrete product (table, report section, slide, map, list) | ✔ |
| `O2_audience` | A named recipient (role is fine) | ✔ |
| `O3_timing` | Deadline or frequency | |
| `O4_use` | What the recipient does with it | |

**Weak:** "Better reports."
**Strong:** "Coverage table by district and two charts (coverage trend, districts below 65%) in the Word annual report, for the programme manager, due in February before the technical meeting."

---

## Stage 4 — Gap and success

| ID | Criterion | Req. |
|---|---|---|
| `G1_located` | Says *where* between input and output it gets hard | ✔ |
| `G2_instance` | One real occasion, not only "usually" | ✔ |
| `G3_consequence` | Says what happened because of it | |
| `S1_observable` | Success measure the learner could actually observe | ✔ |
| `S2_baseline` | Gives a before → after (time, errors, lateness) | |

**Weak:** "It takes too long and there are errors. Success = better data quality."
**Strong:** "Retyping photo forms and checking totals. Last year a district reported 112% coverage, and I only saw it after sharing the chart with a partner. Better = obvious errors caught within days of arrival; report in 1 week instead of 3."

---

## Stage 5 — Fit and constraints

| ID | Criterion | Req. |
|---|---|---|
| `F1_own` | Own work, changeable during the course | ✔ |
| `F2_sample` | Anonymised sample obtainable (or a plan to get one) | ✔ |
| `F3_personal_safe` | If inputs contain personal data, a way to work on anonymised or aggregate data | ✔ (only if personal data = yes/not sure) |
| `F4_conditions` | Connectivity and tools stated | |

A `missing` here is a **red flag**, not a writing problem. The coach suggests narrowing the problem (e.g. "work only on the aggregate district totals"), not rewording.

---

## Stage 6 — Skills map

| ID | Criterion | Req. |
|---|---|---|
| `K1_linked` | Each ticked skill links to something in stages 2–4 | ✔ |
| `K2_gaps` | No obvious skill missing given the inputs/outputs | |
| `K3_self_assessed` | "Have" ticks present (self-assessment attempted) | |

The coach names at most **two** possibly-missing skills and explains each in one sentence tied to the learner's own inputs or outputs.

---

## Calibration notes

- **Bias toward `partial`.** A learner who wrote something real but thin is `partial`, not `missing`. `missing` means absent.
- **Don't punish brevity.** Two clear sentences can be fully `met`.
- **Spelling and grammar never count.** Many learners write in a second or third language.
- When unsure between `ready` and `needs_work`, choose `ready`, ask one optional question, and let the learner decide.
