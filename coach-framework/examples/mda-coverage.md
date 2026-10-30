# Worked example: MDA coverage report

Illustrative. It shows what one coaching exchange should look like, and what the final brief looks like from a reasonably complete form. Use it to test the prompts: run this learner's drafts through `/api/coach` and compare.

---

## Stage 2 (Inputs), round 1

**Learner draft**

| what | from | format | how_often | personal_data |
|---|---|---|---|---|
| District data | Districts | Excel | Yearly | no |

**Expected CoachResponse**

```json
{
  "stage": 2,
  "verdict": "needs_work",
  "criteria": [
    { "id": "I1_named", "status": "partial", "note": "'District data' is not a named document" },
    { "id": "I2_format", "status": "met" },
    { "id": "I3_source", "status": "partial", "note": "'Districts' - which role sends it?" },
    { "id": "I4_variation", "status": "missing" },
    { "id": "I5_personal", "status": "met" }
  ],
  "feedback": "You've told us the data comes from districts once a year. That's a good start. Right now 'district data' could mean many things. Name the document or form, as your colleagues would call it.",
  "questions": [
    "What exactly do the districts send: a treatment summary, a register, a DHIS2 export?",
    "Do all districts send it the same way, or do some send photos, paper or phone calls?"
  ],
  "red_flags": []
}
```

What the coach does right here: it quotes "district data", asks two questions, doesn't rewrite the row, and doesn't ask how many rows or how many people.

**What a coach should NOT say**

> "Great start! To improve, consider listing: 1) the number of districts, 2) the number of rows per file, 3) who compiles the data, 4) previous attempts to standardise the template, 5) …"

That is five questions, generic praise, and three of the five items are on the deferred list.

## Stage 2, round 2

**Learner revision**

| what | from | format | how_often | personal_data |
|---|---|---|---|---|
| MDA treatment summary (treated + total population) | District NTD focal persons, 38 districts | Excel by email (~25), photos of paper forms on WhatsApp (~9), phone (~4) | After each MDA round, once a year | no |

Expected: `verdict: "ready"`, I1–I3 and I5 `met`, I4 `met` (mixed formats named), `improved_since_last` notes the named document and the format split, no questions or one optional question.

---

## Resulting brief (excerpt)

# Problem Brief & Requirements

**Learner:** A. Example · **Country:** Example · **Role:** National NTD data officer
**Cohort:** AMP-EX-2027 · **Date:** 2027-01-20 · **Version:** 1

## 1. Summary

Each year I compile district MDA treatment data into the coverage section of the national LF and oncho report. Data arrives in three formats, and errors are found late, once after numbers had already been shared with a partner. Better means errors are caught within days of the data arriving and the report takes one week instead of three.

## 3. Inputs

| What | From | Format | How often | Personal data? |
|---|---|---|---|---|
| MDA treatment summary (treated + total population) | District NTD focal persons (38 districts) | Excel by email (~25), WhatsApp photos of paper forms (~9), phone (~4) | After each MDA round | No |

## 4. Outputs

| What | For whom | Format | Deadline / frequency | Used for |
|---|---|---|---|---|
| Coverage table by district + 2 charts | Programme manager | Word report section | February, yearly | National technical meeting; partner drug planning |

## 5. Where it gets hard

**Hardest step:** Retyping numbers from photos and checking totals against last year.

**Recent example:** After the 2025 round, one district reported 112% coverage. I only noticed when building the chart, after the numbers had gone to a partner.

**Consequence:** A correction had to be sent, and the report was three weeks late.

## 6. Success measures

| Measure | Today | Target |
|---|---|---|
| Time to finish the coverage section | 3 weeks | 1 week |
| Obvious errors caught before data is shared | Found by chance | Flagged within days of arrival |

## 8. Skills plan

| Skill | Why this problem needs it | Already have? |
|---|---|---|
| Clean, standardise and merge data | Three input formats and two template versions | No |
| Extract data from images and PDFs | ~9 districts send photos of paper forms | No |
| Automatic data quality flags | The 112% coverage error was found too late | No |
| Clear charts and maps | Two charts in the report | Yes |

## 10. Open questions for design

1. How many versions of the district Excel template are in circulation?
2. Could districts send photos in a consistent way (one page per photo, whole form visible)?
3. Which checks matter most: coverage over 100%, big changes from last year, missing districts?

## 11. Coach flags

None
