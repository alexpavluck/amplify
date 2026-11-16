# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: prospective Cohort 2 applicants.** Staff of national NTD (neglected tropical disease) programmes in Ministries of Health, mostly in the WHO African Region. They know the diseases, the data and the decisions well, and they want to use agentic AI on real programme work. They apply as a pair from the same country. The site's main job right now is to help the right people understand the course, judge whether they can commit, and prepare a strong problem statement before applications open in December 2026.

**Secondary:**
- Enrolled learners, who use the site as the course home: session details, interactive session modules (sessions 1 and 2), short courses and setup guides.
- People who nominate staff or support the course: national programme managers and partners. Cohort 2 is funded by the Gates Foundation and Sightsavers.

## Product Purpose

AMPLIFY is a free, live, online course that teaches NTD programme leaders to build and maintain AI solutions for their own work. Each participant brings one real, recurring task from their programme. Every session either sharpens that task or teaches the AI skill needed to solve it. Participants finish by presenting a working solution to their peers.

Success means participants leave with a working solution to a real task and the skills to keep it running after the course ends, without depending on a vendor or a short-term project.

## Positioning

- **Specific to NTD programmes.** General AI courses use examples unrelated to NTD work. AMPLIFY teaches with nationally reported NTD data available from WHO (ESPEN) and with real programme tasks.
- **Problem-first.** The application starts with a problem statement about the applicant's work, not about AI. The course is built around that problem.
- **Built to last.** It builds national capacity to create and maintain solutions, unlike vendor tools delivered through short-term projects that are hard to sustain.
- **Peer-led continuity.** Five Cohort 1 alumni return as peer mentors for Cohort 2.

## Operating Context

- **Cohort 2 (2027):** 8 live online sessions, every 2 weeks, over about 4 months, starting winter/spring 2027. Taught in English and French. Free; all fees are covered. Places are limited and selection is competitive among invited country pairs. Attendance and assignments are mandatory: "a build-along course, not a webinar series."
- **Session arc:** Foundations (setup, prompting, chat vs agents, skills) → Knowledge & connectors (notebooks/RAG, connectors) → Decisions & content (data-to-action, office documents) → Visualisation & showcase (dashboards, maps, group presentations).
- **Rituals:** homework between sessions, posted and discussed on the course Slack; feedback in pairs and small groups; a final presentation and a one-page reflection.
- **Tools:** Claude Teams (AMPLIFY workspace), Slack, notebooks, connectors (Google Drive, email, custom programme-data connectors), plus short courses on OpenRouter, GitHub and Vercel.
- **Problem statement:** written for the application, using four problem areas: data management and analysis, communication, knowledge management, project management. It covers the task, how often it happens, what happened last time, what went wrong, and what "better" would look like.
- **Cohort 1 (2026):** ran March–September 2026 with 16 participants from 7 countries (Burkina Faso, Côte d'Ivoire, DR Congo, Ethiopia, Ghana, South Sudan, Togo). It had seven monthly modules in English and French, all built on free tiers of AI tools. Each participant was nominated by their national programme as its AI focal point.

## Capabilities and Constraints

- Static HTML/CSS/JS site in `amplify-site/`, with a small serverless API (`api/prompt.js`, Anthropic SDK) that powers the Prompt Coach in the session 1 module. Hosted on Vercel; pushing to `main` deploys amplify-course.com.
- Routes: `/` (home: course, sessions hub, problem statement, Cohort 1, Cohort 2, short courses), `/course-1/`, `/course-2/` (interactive session modules), `/shortcourses/*`, `/country-selection/`. Flyers are PDFs in `flyers/`.
- **Bilingual parity is required.** Every user-facing change ships in English and French with equal quality. French copy for the home page lives in `i18n/home-fr.js`. More languages are planned for a second training in Q3 2027.
- Terminology: "AMPLIFY" (always uppercase), "session", "cohort", "short course", "interactive learning module", "problem statement", "peer mentors", "country pairs", "NTD programme" (British spelling throughout).
- Open: the Cohort 2 application form and process details (opening December 2026); the "Student profiles" section (marked coming soon).

## Brand Commitments

- Name: AMPLIFY. Tagline: "Making AI work for NTD programme leaders."
- Logo assets exist (`favicon.svg`, `apple-touch-icon.png`, and the logo on the home page).
- Voice: plain, direct and concrete. Speaks to the reader as "you" and favours real programme examples over AI hype. Honest about the commitment required.
- Headings never end with a period, in English or French.
- Short-course submissions are invited from partners by email to the course lead.

## Evidence on Hand

Use only facts already published on the site:
- Cohort 1 facts: 16 participants, 7 countries with per-country counts, dates, monthly modules in EN/FR, free-tier tools, nominated AI focal points.
- Slides from Cohort 1 Module 2 (Prompting & Data Literacy, April 2026), shown on the home page.
- Five Cohort 1 alumni returning as peer mentors.
- Funders for Cohort 2: Gates Foundation and Sightsavers.
- The illustrative problem statement example (labelled as illustrative, abridged from the form).

**Do not fabricate:** participant quotes or testimonials, student projects or profiles, outcome metrics (completion rates, time saved), additional partners or endorsements, or application details not yet decided.

## Product Principles

1. **The learner's problem is the centre.** Every surface should connect back to the real task the participant brings.
2. **NTD-specific over generic.** Use real programme examples, data and vocabulary, not generic AI-course material.
3. **Honest about commitment.** Make the workload, selection and expectations clear so the right people apply.
4. **Equal in both languages.** English and French are both first-class; neither is a translation afterthought.
5. **Built to outlast the course.** Favour skills and tools participants can maintain themselves, at little or no cost.

## Accessibility & Inclusion

- English and French must be fully equivalent, including headings, labels, modules and downloadable flyers.
- No other product-specific accessibility standard has been set yet.
