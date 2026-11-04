/* AMPLIFY 2027 · Course 1 — Foundations.
   Static page logic: EN/FR i18n, setup checklist, three skill-check quizzes,
   Claude UI hotspots, problem-statement self-check, prompt builder. No backend. */
"use strict";

/* ---------------------------------------------------------------- i18n dict */
const DICT = {
en: {
  "brand.title": "AMPLIFY 2027",
  "brand.tagline": "Course 1 · Foundations — Sightsavers",
  "nav.setup": "Course setup", "nav.slack": "Slack", "nav.claude": "Claude",
  "nav.problem": "Your problem", "nav.prompt": "Perfect prompt", "nav.homework": "Homework",
  "nav.checks": "Skill checks",

  "hero.kicker": "Sightsavers · Cohort 2 · 2027",
  "hero.title": "Course 1 — Foundations",
  "hero.lead": "Welcome to AMPLIFY. Over four months you will take one real problem from your own work and build a working AI-assisted solution to it — ending with a group presentation. This first class gets you set up on the tools, shows you how the course runs, and teaches the habit everything else is built on: writing prompts that get you what you actually want.",
  "hero.chip.freq": "Every 2 weeks", "hero.chip.dur": "90 minutes",
  "hero.chip.meet": "Google Meet", "hero.chip.count": "Class 1 of 8",
  "hero.note": "This page is part of the course. Everything here is interactive — switch languages at the top, tick the setup checklist, pass the three skill checks, and build your first prompt. Your progress is saved in your browser only.",

  "setup.h2": "1 · How the course runs",
  "setup.lead": "Four months, eight classes, one growing project. Know the rules of the road before we start.",
  "setup.meet.t": "We meet on Google Meet",
  "setup.meet.d": "Every two weeks, 90 minutes, live. You must have a Google account and be signed in — captions and live interpretation only work when you are. Join five minutes early to test your mic and camera.",
  "setup.slack.t": "Everything else happens on Slack",
  "setup.slack.d": "Materials, questions, homework, feedback — all on Slack. No email. No WhatsApp. If you write to us anywhere else, we will point you back here.",
  "setup.rhythm.t": "Every class, the same rhythm",
  "setup.rhythm.i1": "A student presents the last class's homework (10 min)",
  "setup.rhythm.i2": "The week's topic, with hands-on practice",
  "setup.rhythm.i3": "A worked \"instructor problem\" demo",
  "setup.rhythm.i4": "Your next homework assignment",
  "setup.hw.t": "Homework is not optional — it is how you stay in the course",
  "setup.hw.d": "A homework assignment follows every class. Each one practices the topics we just covered and applies them to your own project. Every class opens with a student presenting their solution. You will all present during the course — homework is your ticket to the showcase.",
  "setup.banned.label": "Tools we leave at the door:",
  "setup.banned.slack": "Slack only ✓",
  "setup.chk.t": "Set up before Class 1",
  "setup.chk.hint": "Tick as you go — progress is saved on this device and shows in the ring at the top.",
  "chk.meet": "My Google account works — I can sign in and join a Google Meet test call",
  "chk.slack": "I joined the AMPLIFY Slack workspace",
  "chk.intro": "I posted my introduction on #all-amplify",
  "chk.app": "The Claude desktop app is installed on my computer",
  "chk.login": "I can log in to Claude with my Teams account",
  "chk.project": "I opened the Projects link and found my project",

  "slack.h2": "2 · Slack — where the course lives",
  "slack.lead": "Slack does three jobs in this course: support, community, and homework. Learn your way around and you will never wait for an email reply.",
  "slack.support.t": "Support",
  "slack.support.d": "Stuck on homework, a prompt, or an install? Ask on Slack — instructors answer there first, and a classmate may beat them to it.",
  "slack.community.t": "The AMPLIFY community",
  "slack.community.d": "Your cohort, your instructors, and the wider AMPLIFY network. Share what you try, what breaks, and what works — in English or French.",
  "slack.homework.t": "Homework — in, out, and back",
  "slack.homework.d": "You get each assignment, submit your work, and receive instructor feedback — all in Slack, all findable later.",
  "slack.channels.t": "Your map of the workspace",
  "slack.channels.h1": "Channel", "slack.channels.h2": "What it is", "slack.channels.h3": "Use it for",
  "chan.all.what": "The whole cohort and instructors",
  "chan.all.when": "Introductions, questions that help everyone, wins, articles — and your Week 1 homework post",
  "chan.mod.what": "One channel per class",
  "chan.mod.when": "Slides, homework templates, and recordings for that class",
  "chan.priv.name": "your-name (private channel)",
  "chan.priv.what": "Only you and the instructors",
  "chan.priv.when": "Homework submissions, feedback, and anything personal or sensitive",
  "slack.etiquette.t": "House rules: post publicly by default (your question helps a colleague), reply in threads, both languages are welcome everywhere, and @mention only when you need someone specific.",
  "slack.flow.t": "How homework flows",
  "slack.flow.s1t": "Get it", "slack.flow.s1d": "The assignment is posted in the module channel after class.",
  "slack.flow.s2t": "Do it", "slack.flow.s2d": "Work on it in your Claude project, on your own problem.",
  "slack.flow.s3t": "Submit it", "slack.flow.s3d": "Upload the file to your private channel, titled FirstNameLastName_Assignment1.",
  "slack.flow.s4t": "Get feedback", "slack.flow.s4d": "Instructors reply in a thread — feedback stays attached to your work, not lost in a chat.",

  "claude.h2": "3 · Claude — your AI teammate",
  "claude.lead": "Every student gets a Claude Teams account. Today you only need three things: install, log in, and find Projects. In Class 2 we compare Chat, Cowork, and Code (the CLI) — the right tool for the job.",
  "claude.s1.t": "Accept the Teams invite",
  "claude.s1.d": "Your instructor sent you an invite to the AMPLIFY Claude Teams plan. Accept it with the email you gave us — that account is your course login.",
  "claude.s2.t": "Install the desktop app",
  "claude.s2.d": "Get the app for macOS or Windows from",
  "claude.s2.link": "claude.ai/download",
  "claude.s2.d2": "Mobile apps exist too — install whatever you like.",
  "claude.s3.t": "Log in and look around",
  "claude.s3.d": "Open the app, log in with your Teams account, and spend ten minutes clicking around. The map below shows you what matters.",
  "claude.rule.t": "The project rule: do your project work inside your project",
  "claude.rule.d": "We create one project for every student. Open it from Projects in the sidebar and start there whenever you touch your course problem — your files, context, and best prompts stay together, so Claude gets better every week. Working on something else? The main workspace is fine.",
  "claude.next.t": "Coming in Class 2 — the right tool for the job",
  "claude.chat.d": "Ask, think, draft. A conversation in a window — what you used today.",
  "claude.cowork.d": "Hand Claude a whole task: it works in your files and apps, then reports back.",
  "claude.code.d": "Claude works directly in your terminal and project files — power tools for real builds.",
  "claude.next.note": "For today: be logged in, find Projects, poke around. Familiar beats perfect — we go deep next class.",
  "red.t": "Red lines — what never goes into Claude (or any public AI tool)",
  "red.l1": "Patient names, phone numbers, or registers that identify people",
  "red.l2": "Passwords, API keys, or credentials of any kind",
  "red.l3": "Unpublished strategy documents or confidential drafts",
  "red.safe": "Safe: published guidelines, public programme data, anonymised aggregate numbers, your own drafts.",

  "mock.t": "Find your way around — click the pulsing dots",
  "mock.side.search": "Search chats…", "mock.side.new": "+ New chat",
  "mock.side.chat1": "LF coverage table draft",
  "mock.side.chat2": "Week 1 homework questions",
  "mock.side.chat3": "Summary of programme guideline",
  "mock.side.projects": "▸ Projects",
  "mock.side.settings": "⚙ Settings (Claude Teams)",
  "mock.spot.search.t": "Search",
  "mock.spot.search.d": "Every conversation you've had is searchable here — months from now you'll find that prompt you half-remember.",
  "mock.spot.new.t": "New chat",
  "mock.spot.new.d": "A fresh conversation. Use this in the main workspace for quick, non-project questions.",
  "mock.spot.projects.t": "Projects — your course home",
  "mock.spot.projects.d": "One project per student, created by your instructors. Your problem, files, and reusable prompts live here. Start here for all project work.",
  "mock.spot.chat.t": "The conversation",
  "mock.spot.chat.d": "Where you prompt. Paste context, attach files, and iterate — P-T-C-F-I lives here.",
  "mock.chat.user": "Summarize this year's district coverage data for the national review…",
  "mock.chat.bot": "Here is a district-level coverage table. Two districts show coverage above 100%…",
  "mock.hint": "(Illustration — the real app looks a little different, but the parts are these.)",

  "problem.h2": "4 · Your problem — a starting draft",
  "problem.lead": "You don't need a perfect problem statement to start. You need something real enough to try today's prompting on — and honest enough to improve. Every class in AMPLIFY sharpens the same problem, so today's draft is the raw material, not the final answer.",
  "problem.why.t": "Why “fuzzy problem” → fuzzy everything",
  "problem.why.hint": "AI is a prediction engine: it fills every gap you leave with its best guess. A crisp problem stops the guessing.",
  "problem.why.b1t": "No boundary",
  "problem.why.b1d": "Without one named task, every prompt drifts. “Help with data” could mean cleaning, checking, writing, or plotting — Claude has to guess.",
  "problem.why.b2t": "No verdict",
  "problem.why.b2d": "If you can't say what “done” looks like (a table for the review, by Friday, flags over 100%), you can't tell if the output is right.",
  "problem.why.b3t": "No loop",
  "problem.why.b3d": "A real occasion (“last year District X reported 112%”) gives you something to check. Without it, there is nothing to iterate on — the I in P-T-C-F-I has nowhere to land.",
  "problem.gtg.t": "What “good enough for today” looks like",
  "problem.gtg.hint": "If you can say these three things, you can start. The Problem Coach helps you deepen each one later.",
  "problem.gtg.i1": "One named task you actually do — e.g. “compile 38 district MDA files into the national report,” not “data management.”",
  "problem.gtg.i2": "One real occasion — the last time you did it, what arrived, what went wrong.",
  "problem.gtg.i3": "One consequence or number — how late, how long, what the error cost.",
  "problem.gtg.foot": "That's it. Bring that to class and to Slack. We do not grade polish on Day 1 — we grade honesty and specificity.",
  "problem.sharpen.t": "It sharpens every class — you don't have to get it all now",
  "problem.sharpen.d": "Class 1 you name it. Class 2 you learn to prompt it. Classes 3–4 you connect it to your real data. Classes 5–7 you build the checks, the dashboard, and the pitch. Class 8 you present. Each layer reveals what you were missing — so we keep the problem statement draft and revisit it. Perfection now would just hide the next lesson.",
  "problem.strip1": "1 · Name it",
  "problem.strip2": "2 · Prompt it",
  "problem.strip3": "3–4 · Connect data",
  "problem.strip4": "5–8 · Build & pitch",
  "pb.t": "Shape it with the Problem Coach",
  "pb.d": "The AMPLIFY Problem Coach is a friendly AI coach that lives at amplify-course.com/problem-coach. You write each section in your own words; it asks the follow-ups, scores you gently against a rubric, and you leave with a requirements brief mapped to the course sessions — including the skills the course doesn't cover.",
  "pb.meta": "~25 min · saves as you go · export a Word/PDF brief for your homework post · works in English or French · your words never leave the coach without your click.",
  "pb.cta": "Open the Problem Coach →",
  "pb.hint": "Already filled the old Problem Statement Form? Paste those answers into the Coach — it will tell you what is course-ready and what to deepen first.",

  "prompt.h2": "5 · The art of the perfect prompt — the core skill of the course",
  "prompt.lead": "Before any tool matters, this matters. AI does not read your mind — vague in, vague out. Think of Claude as a brilliant new colleague who has never seen your programme: it needs direction, context, and a clear definition of \"done\". This section is the meat of Class 1. Take your time here.",
  "prompt.why.t": "Why prompting is the whole game",
  "prompt.why.p1": "A large language model doesn't “know” your districts, your template versions, or your deadline. It predicts the most plausible next words given what you gave it. When you leave a gap — no audience, no format, no check — it fills it with a confident guess. That's where hallucinations and generic waffle come from.",
  "prompt.chain1": "You omit detail",
  "prompt.chain2": "Model guesses",
  "prompt.chain3": "Sounds right, isn't",
  "prompt.chain4": "You ship it",
  "prompt.chain5": "Rework later",
  "prompt.why.p2": "Prompting is specifying just enough reality that the model doesn't need to invent. Persona tells it whose judgment to use; Task names the verb; Context gives the facts it cannot know; Format says what “done” looks like; Iterate is your safety net — the check you own, not the model.",
  "prompt.why.c1t": "Persona = lens",
  "prompt.why.c1d": "\"As an NTD M&E officer\" is not flattery — it steers tone, vocabulary, and what to prioritise (coverage thresholds, not generic advice).",
  "prompt.why.c2t": "Context = facts you hold",
  "prompt.why.c2d": "Audience, purpose, constraints, the data you actually have. The model never has these unless you give them.",
  "prompt.why.c3t": "Iterate = trust",
  "prompt.why.c3d": "The only reliable anti-hallucination step is yours: \"flag anything over 100%; ask me before finalising.\" Build it into the prompt.",
  "pt.P.t": "Persona",
  "pt.P.d": "Who is asking? Give the AI an expert perspective to think from.",
  "pt.P.e": "\"You are an NTD monitoring & evaluation officer…\"",
  "pt.T.t": "Task",
  "pt.T.d": "What exactly should be done? One clear verb: summarize, compare, draft, check.",
  "pt.T.e": "\"Summarize coverage by district for 2025.\"",
  "pt.C.t": "Context",
  "pt.C.d": "Why and for whom? Audience, purpose, constraints, what data you have.",
  "pt.C.e": "\"For the national programme review; aggregate district data only.\"",
  "pt.F.t": "Format",
  "pt.F.d": "How should it look? Table, bullets, one page, formal French…",
  "pt.F.e": "\"A table plus three bullets, formal.\"",
  "pt.I.t": "Iterate",
  "pt.I.d": "Was it right? Evaluate, refine, run again. Good prompting is a loop, not a wish.",
  "pt.I.e": "\"Flag coverage over 100%; ask me before finalizing.\"",
  "worked.t": "A worked example — colour-coded",
  "worked.note": "Spot the parts: persona → task → context → format → iterate. Still room to improve — \"easy-to-read format\" is vague. Say what columns you want.",
  "ba.t": "Same request, two prompts — see the difference",
  "ba.bad.label": "✗ Vague", "ba.good.label": "✓ Structured",
  "ph.t": "Three phrases worth memorizing",
  "ph.1": "\"Think through this with me step by step.\"",
  "ph.2": "\"That's helpful, but I need it specific to my context: …\"",
  "ph.3": "\"Ask me questions to clarify my goal and surface my assumptions — don't decide for me.\"",
  "pb2.t": "Prompt builder — write your first structured prompt",
  "pb2.hint": "Fill the five parts, watch your prompt assemble, then copy it into Claude and iterate. The defaults are just ideas — your real task beats any example.",
  "pb2.ph.P": "You are an NTD M&E officer…",
  "pb2.ph.T": "Summarize MDA coverage by district for 2025…",
  "pb2.ph.C": "For the national programme review; I have aggregate district data…",
  "pb2.ph.F": "A one-page table plus three bullets, formal…",
  "pb2.ph.I": "Flag coverage over 100% or under 65%; ask me before finalizing…",
  "pb2.copy": "Copy prompt",
  "sk.t": "Could we build a skill for the perfect prompt?",
  "sk.d": "Yes — and that is exactly the plan. A skill is a saved, reusable set of instructions you can call on demand instead of retyping. The builder above is the draft of that skill: the P-T-C-F-I anatomy plus your house rules. Today you learn it by hand.",
  "sk.d2": "In Class 2 we turn your best prompts into a real skill, hunt for existing skills (they are shared, for example, on GitHub), and you learn to tell reusable prompts from one-offs. Homework prep: bring one task you repeat every week — that is your first skill candidate.",

  
  "lab.t": "Lab — watch the output sharpen as you add detail",
  "lab.hint": "Start vague. Layer P-T-C-F-I one tap at a time and watch the mock output go from generic to usable. (No AI call — just the mechanics.)",
  "lab.chip.P": "Persona",
  "lab.chip.T": "Task",
  "lab.chip.C": "Context",
  "lab.chip.F": "Format",
  "lab.chip.I": "Iterate",
  "lab.preview.prompt": "Your prompt now:",
  "lab.output.none": "No prompt yet — add a layer above.",
  "autopsy.t": "Autopsy — three real prompts from the field",
  "autopsy.hint": "Open a case, spot what's missing, check your eye against the coach's. No typing — just diagnosis.",
  "pb2.coach": "Coach my prompt →",
  "coach.head": "AI coach feedback",
  "coach.verdict.strong": "Strong prompt",
  "coach.verdict.decent": "Decent — one fix would sharpen it",
  "coach.verdict.needs_work": "Needs work",
  "coach.rewrite.t": "Suggested rewrite",
  "coach.use": "Use this draft",
  "coach.loading": "Checking…",
  "coach.error": "Couldn't reach the coach — try again. Your prompt is still copied below.",
  "coach.offline": "Offline demo — heuristic feedback (no AI call).",
  "free.t": "Try it on any prompt — paste what you'd actually send",
  "free.hint": "Not using the builder? Paste a real prompt from your work (or draft one from scratch) and get the same P-T-C-F-I diagnosis. AI-backed when online; heuristic offline.",
  "free.ph": "Paste or write your prompt here — e.g. 'Summarize this district report for the review meeting…'",
  "free.cta": "Check this prompt",
  "sk.t": "Could we build a skill for the perfect prompt?",

  
  "acar.t": "Problems outlive prompts — get the problem right first",
  "acar.d": "\"Prompt engineering focuses on crafting the optimal textual input... In contrast, problem formulation emphasizes defining the problem by delineating its focus, scope, and boundaries.\" Your three-sentence draft in this section is problem formulation — the part that doesn't expire when the model changes. P-T-C-F-I in the next section is how you turn that formulated problem into language the model can act on.",
  "acar.cite": "— O. A. Acar, Harvard Business Review (2023), via MIT Sloan: ",
  "ptypes.t": "Six prompt types you'll meet (beyond P-T-C-F-I)",
  "ptypes.hint": "P-T-C-F-I is how you compose. These are flavours you'll recognise on Slack, GitHub, and in the wild — most are just P-T-C-F-I done briefly. Spot which you already use.",
  "ptypes.h.type": "Type", "ptypes.h.when": "When to use", "ptypes.h.ex": "Example",
  "ptypes.zero.t": "Zero-shot", "ptypes.zero.d": "Simple instruction, no examples. Good for one-off summaries.", "ptypes.zero.ex": "\"Summarize this article in 5 bullets.\"",
  "ptypes.few.t": "Few-shot", "ptypes.few.badge": "Try this", "ptypes.few.d": "Give 2–3 examples of the form/tone you want, then ask for the next in the same style. Your best shortcut to consistency.", "ptypes.few.ex": "\"Here are 2 example district summaries. Write a third in the same style: [District A: ...] [District B: ...]\"",
  "ptypes.instr.t": "Instructional", "ptypes.instr.d": "Direct verb + constraints (write / compare / keep under X words).", "ptypes.instr.ex": "\"Write an executive summary. Keep it under 100 words, formal French.\"",
  "ptypes.role.t": "Role-based", "ptypes.role.d": "Persona on purpose — \"as an M&E officer...\" steers lens and vocabulary.", "ptypes.role.ex": "\"You are an MBA professor preparing a lecture outline...\"",
  "ptypes.ctx.t": "Contextual", "ptypes.ctx.d": "Background + audience before the ask. That is your C.", "ptypes.ctx.ex": "\"This is for community volunteers. Rephrase in simple language.\"",
  "ptypes.sys.t": "System / Meta", "ptypes.sys.d": "Behind-the-scenes rules for tone/scope (\"always cite sources, never guess\"). You won't write these in Class 1 — but you'll recognise them in skills.", "ptypes.sys.ex": "\"Always respond formally and cite real sources. Never guess.\"",
  "ptypes.foot": "Few-shot is the gem here: paste 2 good outputs you like, add \"write the next like these.\" We'll use it in Class 2 when you turn a prompt into a reusable skill.",

  "ps.keep": "Keep shaping it", "ps.ready": "Ready to post!",
  "homework.h2": "Homework — due before Class 2",
  "homework.sub": "Four steps, all on Slack. Class 2 opens with one of you presenting.",
  "hw.1.t": "Introduce yourself on #all-amplify",
  "hw.1.d": "Name, role, country — and one sentence on the problem you are working on.",
  "hw.2.t": "Post your problem",
  "hw.2.d": "Paste your problem statement — from the form, or exported from the Problem Coach.",
  "hw.3.t": "Reply to two classmates",
  "hw.3.d": "One thing you find interesting about their problem, and one question back.",
  "hw.4.t": "Run the prompt builder on a real task",
  "hw.4.d": "Pick something you actually did this week. Build the prompt, run it in Claude (inside your project), and note what changed.",
  "hw.note": "Submissions go to your private channel, titled FirstNameLastName_Assignment1. Homework is required to stay in the course.",

  "faq.h": "Quick answers",
  "faq.q1": "What if I miss a live class?",
  "faq.a1": "Watch the recording in the module channel, do the homework anyway, and ask on Slack. Don't disappear — the course moves every two weeks.",
  "faq.q2": "What if Claude gives me something wrong?",
  "faq.a2": "Treat it as a prompt problem first: iterate (the I in P-T-C-F-I is you). Verify every number against a source. If it keeps happening, post the prompt and output on Slack — debugging prompts is a group sport.",
  "faq.q3": "Can I work in French?",
  "faq.a3": "Yes. Write to Claude and on Slack in whichever language you think in; instructors read both. (This page toggles with EN/FR at the top.)",
  "faq.q4": "Where do I find everything?",
  "faq.a4": "One place: Slack. Slides, templates, recordings, and homework feedback all live there — this page is the only exception.",

  "ft.credit": "AMPLIFY 2027 · Sightsavers · Cohort 2",
  "ft.note": "This page is itself a Class 1 demo: a plain HTML file, no backend. View its source, and bring your questions to class.",
  "ft.link1": "Problem Coach", "ft.link2": "Download Claude",
  "ft.link3": "Slack Help Center", "ft.link4": "Google Meet Help",

  "quiz.channel.title": "Skill check — Where does it go?",
  "quiz.channel.sub": "Five messages just came in. Choose the right home for each.",
  "quiz.redline.title": "Skill check — Can this go in?",
  "quiz.redline.sub": "Five things someone wants to paste into Claude. Safe, or red line?",
  "quiz.problemWhy.title": "Skill check — Why the problem matters",
  "quiz.problemWhy.sub": "Two questions on why a crisp problem saves every other step.",
  "quiz.missing.title": "Skill check — What's missing?",
  "quiz.missing.sub": "Four prompts from the field. Which P-T-C-F-I element is missing?",
  "quiz.pass": "Skill check passed",
  "q.try": "Not quite — try again.",
  "toast.copy": "Prompt copied — paste it into Claude.",
  "toast.quiz": "Nice — one skill check down.",
},

fr: {
  "brand.title": "AMPLIFY 2027",
  "brand.tagline": "Cours 1 · Fondamentaux — Sightsavers",
  "nav.setup": "Organisation", "nav.slack": "Slack", "nav.claude": "Claude",
  "nav.problem": "Votre problème", "nav.prompt": "Prompt parfait", "nav.homework": "Devoirs",
  "nav.checks": "Tests",

  "hero.kicker": "Sightsavers · Cohorte 2 · 2027",
  "hero.title": "Cours 1 — Fondamentaux",
  "hero.lead": "Bienvenue à AMPLIFY. Pendant quatre mois, vous prendrez un problème réel de votre travail et vous lui construirez une solution assistée par IA — jusqu'à la présentation de groupe. Ce premier cours vous installe sur les outils, vous montre comment le cours fonctionne, et vous transmet l'habitude sur laquelle tout le reste repose : écrire des prompts qui vous donnent ce que vous voulez vraiment.",
  "hero.chip.freq": "Toutes les 2 semaines", "hero.chip.dur": "90 minutes",
  "hero.chip.meet": "Google Meet", "hero.chip.count": "Cours 1 sur 8",
  "hero.note": "Cette page fait partie du cours. Tout y est interactif — changez de langue en haut, cochez la liste d'installation, réussissez les trois tests de compétences, et construisez votre premier prompt. Votre progression est enregistrée uniquement dans votre navigateur.",

  "setup.h2": "1 · Comment fonctionne le cours",
  "setup.lead": "Quatre mois, huit cours, un projet qui grandit. Apprenez les règles de la route avant de commencer.",
  "setup.meet.t": "Nous nous retrouvons sur Google Meet",
  "setup.meet.d": "Toutes les deux semaines, 90 minutes, en direct. Vous devez avoir un compte Google et être connecté·e — les sous-titres et l'interprétation ne fonctionnent que si vous l'êtes. Rejoignez la réunion cinq minutes en avance pour tester votre micro et votre caméra.",
  "setup.slack.t": "Tout le reste se passe sur Slack",
  "setup.slack.d": "Supports, questions, devoirs, retours — tout sur Slack. Pas d'e-mail. Pas de WhatsApp. Si vous nous écrivez ailleurs, nous vous renverrons ici.",
  "setup.rhythm.t": "Chaque cours suit le même rythme",
  "setup.rhythm.i1": "Un·e étudiant·e présente les devoirs du cours précédent (10 min)",
  "setup.rhythm.i2": "Le sujet de la semaine, avec pratique",
  "setup.rhythm.i3": "Une démonstration du « problème de l'instructeur »",
  "setup.rhythm.i4": "Votre prochain devoir",
  "setup.hw.t": "Les devoirs ne sont pas facultatifs — c'est ainsi que vous restez dans le cours",
  "setup.hw.d": "Un devoir suit chaque cours. Chacun vous fait pratiquer les thèmes que nous venons de couvrir et vous les applique à votre propre projet. Chaque cours commence par la présentation des devoirs d'un·e étudiant·e. Vous présenterez tou·te·s au fil du cours — les devoirs sont votre billet pour la présentation finale.",
  "setup.banned.label": "Les outils qu'on laisse à la porte :",
  "setup.banned.slack": "Slack uniquement ✓",
  "setup.chk.t": "À préparer avant le cours 1",
  "setup.chk.hint": "Cochez au fur et à mesure — la progression est enregistrée sur cet appareil et apparaît dans l'anneau en haut.",
  "chk.meet": "Mon compte Google fonctionne — je peux me connecter et rejoindre un appel test Google Meet",
  "chk.slack": "J'ai rejoint l'espace Slack AMPLIFY",
  "chk.intro": "J'ai publié ma présentation sur #all-amplify",
  "chk.app": "L'application de bureau Claude est installée sur mon ordinateur",
  "chk.login": "Je peux me connecter à Claude avec mon compte Teams",
  "chk.project": "J'ai ouvert le lien Projects (Projets) et trouvé mon projet",

  "slack.h2": "2 · Slack — là où vit le cours",
  "slack.lead": "Slack a trois rôles dans ce cours : le soutien, la communauté et les devoirs. Apprenez à vous y repérer et vous n'attendrez jamais une réponse par e-mail.",
  "slack.support.t": "Soutien",
  "slack.support.d": "Bloqué·e sur un devoir, un prompt ou une installation ? Demandez sur Slack — les instructeurs y répondent en premier, et un·e camarade peut même les devancer.",
  "slack.community.t": "La communauté AMPLIFY",
  "slack.community.d": "Votre cohorte, vos instructeurs et le réseau AMPLIFY au sens large. Partagez ce que vous essayez, ce qui casse et ce qui marche — en anglais ou en français.",
  "slack.homework.t": "Devoirs — de l'assignation au retour",
  "slack.homework.d": "Vous recevez chaque devoir, vous remettez votre travail, et vous recevez les retours des instructeurs — tout sur Slack, tout retrouvable plus tard.",
  "slack.channels.t": "Votre carte de l'espace de travail",
  "slack.channels.h1": "Canal", "slack.channels.h2": "Ce que c'est", "slack.channels.h3": "Sert à",
  "chan.all.what": "Toute la cohorte et les instructeurs",
  "chan.all.when": "Présentations, questions utiles à tout le monde, réussites, articles — et votre publication de la semaine 1",
  "chan.mod.what": "Un canal par cours",
  "chan.mod.when": "Diapositives, modèles de devoirs et enregistrements de ce cours",
  "chan.priv.name": "votre-nom (canal privé)",
  "chan.priv.what": "Vous seul·e et les instructeurs",
  "chan.priv.when": "Remise des devoirs, retours, et tout ce qui est personnel ou sensible",
  "slack.etiquette.t": "Règles de la maison : publiez publiquement par défaut (votre question aide un·e collègue), répondez dans les fils, les deux langues sont bienvenues partout, et @mentionnez seulement quand vous avez besoin de quelqu'un en particulier.",
  "slack.flow.t": "Comment circulent les devoirs",
  "slack.flow.s1t": "Recevez", "slack.flow.s1d": "Le devoir est publié dans le canal du module après le cours.",
  "slack.flow.s2t": "Faites-le", "slack.flow.s2d": "Travaillez-y dans votre projet Claude, sur votre propre problème.",
  "slack.flow.s3t": "Rendez-le", "slack.flow.s3d": "Déposez le fichier dans votre canal privé, avec le titre PrenomNom_Devoir1.",
  "slack.flow.s4t": "Recevez le retour", "slack.flow.s4d": "Les instructeurs répondent dans un fil — le retour reste attaché à votre travail, pas perdu dans une messagerie.",

  "claude.h2": "3 · Claude — votre coéquipier IA",
  "claude.lead": "Chaque étudiant·e reçoit un compte Claude Teams. Aujourd'hui, trois choses suffisent : installer, se connecter, trouver Projects. Au cours 2, nous comparerons Chat, Cowork et Code (la CLI) — le bon outil pour la bonne tâche.",
  "claude.s1.t": "Acceptez l'invitation Teams",
  "claude.s1.d": "Votre instructeur vous a envoyé une invitation au plan Claude Teams d'AMPLIFY. Acceptez-la avec l'e-mail que vous nous avez donné — ce compte est votre identifiant pour le cours.",
  "claude.s2.t": "Installez l'application de bureau",
  "claude.s2.d": "Récupérez l'application pour macOS ou Windows sur",
  "claude.s2.link": "claude.ai/download",
  "claude.s2.d2": "Des applications mobiles existent aussi — installez ce que vous préférez.",
  "claude.s3.t": "Connectez-vous et explorez",
  "claude.s3.d": "Ouvrez l'application, connectez-vous avec votre compte Teams, et passez dix minutes à cliquer partout. La carte ci-dessous montre ce qui compte.",
  "claude.rule.t": "La règle du projet : le travail du projet se fait dans votre projet",
  "claude.rule.d": "Nous créons un projet pour chaque étudiant·e. Ouvrez-le depuis Projects dans la barre latérale et commencez là chaque fois que vous touchez à votre problème du cours — vos fichiers, votre contexte et vos meilleurs prompts restent ensemble, et Claude s'améliore chaque semaine. Autre chose à faire ? L'espace principal suffit.",
  "claude.next.t": "Au cours 2 — le bon outil pour la bonne tâche",
  "claude.chat.d": "Demander, réfléchir, rédiger. Une conversation dans une fenêtre — ce que vous avez utilisé aujourd'hui.",
  "claude.cowork.d": "Confiez une tâche entière à Claude : il travaille dans vos fichiers et vos applications, puis vous rend des comptes.",
  "claude.code.d": "Claude travaille directement dans votre terminal et vos fichiers de projet — des outils puissants pour de vraies constructions.",
  "claude.next.note": "Pour aujourd'hui : connectez-vous, trouvez Projects, explorez. Être à l'aise suffit — nous approfondissons au prochain cours.",
  "red.t": "Lignes rouges — ce qui ne va jamais dans Claude (ni dans aucun outil IA public)",
  "red.l1": "Noms de patients, numéros de téléphone ou registres qui identifient des personnes",
  "red.l2": "Mots de passe, clés API ou identifiants, quel qu'ils soient",
  "red.l3": "Documents stratégiques non publiés ou brouillons confidentiels",
  "red.safe": "Autorisé : directives publiées, données publiques du programme, chiffres agrégés anonymisés, vos propres brouillons.",

  "mock.t": "Repérez-vous — cliquez sur les points qui pulsent",
  "mock.side.search": "Rechercher des discussions…",
  "mock.side.new": "+ Nouvelle discussion",
  "mock.side.chat1": "Brouillon du tableau de couverture LF",
  "mock.side.chat2": "Questions sur le devoir de la semaine 1",
  "mock.side.chat3": "Résumé d'une directive publiée",
  "mock.side.projects": "▸ Projets",
  "mock.side.settings": "⚙ Paramètres (Claude Teams)",
  "mock.spot.search.t": "Recherche",
  "mock.spot.search.d": "Chaque conversation que vous avez eue est consultable ici — dans quelques mois, vous retrouverez ce prompt dont vous vous souvenez à moitié.",
  "mock.spot.new.t": "Nouvelle discussion",
  "mock.spot.new.d": "Une conversation neuve. Utilisez-la dans l'espace principal pour les questions rapides hors projet.",
  "mock.spot.projects.t": "Projects — votre maison pour le cours",
  "mock.spot.projects.d": "Un projet par étudiant·e, créé par vos instructeurs. Votre problème, vos fichiers et vos prompts réutilisables vivent ici. Commencez ici pour tout le travail de projet.",
  "mock.spot.chat.t": "La conversation",
  "mock.spot.chat.d": "Là où vous écrivez vos prompts. Collez du contexte, joignez des fichiers, et itérez — le P-T-C-F-I vit ici.",
  "mock.chat.user": "Résume les données de couverture des districts de cette année pour la revue nationale…",
  "mock.chat.bot": "Voici un tableau de couverture par district. Deux districts dépassent 100 % de couverture…",
  "mock.hint": "(Illustration — la vraie application est un peu différente, mais les éléments sont ceux-là.)",

  "problem.h2": "4 · Votre problème — un premier brouillon",
  "problem.lead": "Vous n'avez pas besoin d'un énoncé parfait pour commencer. Il vous faut quelque chose d'assez réel pour tester le prompting d'aujourd'hui — et d'assez honnête pour l'améliorer. Chaque cours d'AMPLIFY affine le même problème ; le brouillon d'aujourd'hui est la matière première, pas la réponse finale.",
  "problem.why.t": "Pourquoi « problème flou » → tout flou",
  "problem.why.hint": "L'IA est un moteur de prédiction : elle remplit chaque vide avec sa meilleure supposition. Un problème net arrête les suppositions.",
  "problem.why.b1t": "Pas de frontière",
  "problem.why.b1d": "Sans une tâche nommée, chaque prompt dérive. « Aide avec les données » peut vouloir dire nettoyer, vérifier, rédiger ou tracer — Claude doit deviner.",
  "problem.why.b2t": "Pas de verdict",
  "problem.why.b2d": "Si vous ne pouvez pas dire à quoi ressemble « terminé » (un tableau pour la revue, pour vendredi, signale >100 %), vous ne pouvez pas dire si la sortie est juste.",
  "problem.why.b3t": "Pas de boucle",
  "problem.why.b3d": "Une occasion réelle (« l'an dernier, le district X a rapporté 112 % ») vous donne de quoi vérifier. Sans elle, il n'y a rien à itérer — le I de P-T-C-F-I n'a nulle part où atterrir.",
  "problem.gtg.t": "À quoi ressemble « assez bien pour aujourd'hui »",
  "problem.gtg.hint": "Si vous pouvez dire ces trois choses, vous pouvez commencer. Le Coach de problème vous aidera à approfondir chacune ensuite.",
  "problem.gtg.i1": "Une tâche nommée que vous faites vraiment — ex. « compiler 38 fichiers MDA de district dans le rapport national », pas « gestion des données ».",
  "problem.gtg.i2": "Une occasion réelle — la dernière fois que vous l'avez fait, ce qui est arrivé, ce qui a échoué.",
  "problem.gtg.i3": "Une conséquence ou un chiffre — combien de retard, combien de temps, ce que l'erreur a coûté.",
  "problem.gtg.foot": "C'est tout. Apportez cela en cours et sur Slack. On ne note pas le poli au jour 1 — on note l'honnêteté et la précision.",
  "problem.sharpen.t": "Il s'affine à chaque cours — pas besoin de tout avoir maintenant",
  "problem.sharpen.d": "Cours 1 vous le nommez. Cours 2 vous apprenez à le prompter. Cours 3–4 vous le reliez à vos vraies données. Cours 5–7 vous construisez les contrôles, le tableau de bord et l'argumentaire. Cours 8 vous présentez. Chaque couche révèle ce qui manquait — nous gardons donc le brouillon et y revenons. Vouloir la perfection maintenant cacherait la prochaine leçon.",
  "problem.strip1": "1 · Le nommer",
  "problem.strip2": "2 · Le prompter",
  "problem.strip3": "3–4 · Relier les données",
  "problem.strip4": "5–8 · Construire & pitcher",
  "pb.t": "Façonnez-le avec le Coach de problème",
  "pb.d": "Le Coach de problème AMPLIFY est un coach IA bienveillant qui vit sur amplify-course.com/problem-coach. Vous écrivez chaque section avec vos mots ; il pose les relances, vous note doucement selon une rubrique, et vous repartez avec une note d'exigences reliée aux sessions du cours — y compris les compétences que le cours ne couvre pas.",
  "pb.meta": "~25 min · sauvegarde automatique · export Word/PDF pour votre devoir · en anglais ou en français · vos mots ne quittent le coach que si vous le décidez.",
  "pb.cta": "Ouvrir le Coach de problème →",
  "pb.hint": "Vous avez déjà rempli l'ancien formulaire ? Collez ces réponses dans le Coach — il vous dira ce qui est prêt pour le cours et quoi approfondir d'abord.",

  "prompt.h2": "5 · L'art du prompt parfait — la compétence clé du cours",
  "prompt.lead": "Avant qu'un outil ne compte, ceci compte. L'IA ne lit pas dans votre tête — vague en entrée, vague en sortie. Considérez Claude comme un·e collègue brillant·e qui n'a jamais vu votre programme : il lui faut une direction, du contexte et une définition claire de « terminé ». Cette section est le cœur du cours 1. Prenez-y le temps.",
  "prompt.why.t": "Pourquoi le prompting est tout le jeu",
  "prompt.why.p1": "Un grand modèle de langue ne « connaît » pas vos districts, vos versions de modèles ou votre date limite. Il prédit les prochains mots les plus plausibles vu ce que vous lui avez donné. Quand vous laissez un vide — pas de public, pas de format, pas de vérification — il le remplit avec une supposition confiante. C'est là que naissent les hallucinations et les discours génériques.",
  "prompt.chain1": "Vous omettez un détail",
  "prompt.chain2": "Le modèle devine",
  "prompt.chain3": "Semble juste, ne l'est pas",
  "prompt.chain4": "Vous l'expédiez",
  "prompt.chain5": "On retravaille plus tard",
  "prompt.why.p2": "Prompter, c'est donner juste assez de réalité pour que le modèle n'ait pas besoin d'inventer. Persona dit quel jugement adopter ; Task nomme le verbe ; Context donne les faits qu'il ne peut pas connaître ; Format dit à quoi ressemble « terminé » ; Iterate est votre filet — la vérification qui vous appartient, pas au modèle.",
  "prompt.why.c1t": "Persona = lentille",
  "prompt.why.c1d": "« En tant qu'agent S&E MNT » n'est pas de la flatterie — cela oriente le ton, le vocabulaire et quoi prioriser (seuils de couverture, pas conseils génériques).",
  "prompt.why.c2t": "Context = faits que vous détenez",
  "prompt.why.c2d": "Public, objectif, contraintes, données que vous avez vraiment. Le modèle ne les a jamais sauf si vous les donnez.",
  "prompt.why.c3t": "Iterate = confiance",
  "prompt.why.c3d": "La seule étape anti-hallucination fiable est la vôtre : « signale tout >100 % ; demande-moi avant de finaliser. » Intégrez-la au prompt.",
  "pt.P.t": "Persona",
  "pt.P.d": "Qui demande ? Donnez à l'IA un point de vue d'expert pour réfléchir.",
  "pt.P.e": "« Tu es un agent de suivi & évaluation des MNT… »",
  "pt.T.t": "Tâche",
  "pt.T.d": "Que faut-il faire exactement ? Un verbe clair : résumer, comparer, rédiger, vérifier.",
  "pt.T.e": "« Résume la couverture par district pour 2025. »",
  "pt.C.t": "Contexte",
  "pt.C.d": "Pourquoi et pour qui ? Public, objectif, contraintes, données en main.",
  "pt.C.e": "« Pour la revue nationale du programme ; données agrégées par district uniquement. »",
  "pt.F.t": "Format",
  "pt.F.d": "À quoi cela doit-il ressembler ? Tableau, puces, une page, français formel…",
  "pt.F.e": "« Un tableau et trois puces, formel. »",
  "pt.I.t": "Itérer",
  "pt.I.d": "C'était juste ? Évaluez, raffinez, relancez. Un bon prompt est une boucle, pas un vœu.",
  "pt.I.e": "« Signale les couvertures supérieures à 100 % ; demande-moi avant de finaliser. »",
  "worked.t": "Un exemple travaillé — en couleur",
  "worked.note": "Repérez les parties : persona → tâche → contexte → format → itération. On peut encore améliorer : « format facile à lire » reste vague. Dites quelles colonnes vous voulez.",
  "ba.t": "La même demande, deux prompts — voyez la différence",
  "ba.bad.label": "✗ Vague", "ba.good.label": "✓ Structuré",
  "ph.t": "Trois phrases à mémoriser",
  "ph.1": "« Réfléchis à ça avec moi, étape par étape. »",
  "ph.2": "« C'est utile, mais j'ai besoin que ce soit spécifique à mon contexte : … »",
  "ph.3": "« Pose-moi des questions pour clarifier mon objectif et faire émerger mes hypothèses — ne décide pas à ma place. »",
  "pb2.t": "Constructeur de prompts — écrivez votre premier prompt structuré",
  "pb2.hint": "Remplissez les cinq parties, regardez votre prompt s'assembler, puis copiez-le dans Claude et itérez. Les exemples ne sont que des idées — votre vraie tâche vaut mieux que n'importe quel exemple.",
  "pb2.ph.P": "Tu es un agent de suivi & évaluation des MNT…",
  "pb2.ph.T": "Résume la couverture CPM par district pour 2025…",
  "pb2.ph.C": "Pour la revue nationale du programme ; j'ai des données agrégées par district…",
  "pb2.ph.F": "Un tableau d'une page et trois puces, formel…",
  "pb2.ph.I": "Signale les couvertures supérieures à 100 % ou inférieures à 65 % ; demande-moi avant de finaliser…",
  "pb2.copy": "Copier le prompt",
  "sk.t": "Peut-on construire un skill pour le prompt parfait ?",
  "sk.d": "Oui — et c'est exactement le plan. Un skill est un ensemble d'instructions enregistré et réutilisable, appelable à la demande au lieu de retaper. Le constructeur ci-dessus en est l'ébauche : l'anatomie P-T-C-F-I plus vos règles de maison. Aujourd'hui, vous l'apprenez à la main.",
  "sk.d2": "Au cours 2, nous transformons vos meilleurs prompts en un vrai skill, nous cherchons des skills existants (ils sont partagés, par exemple, sur GitHub), et vous apprenez à distinguer les prompts réutilisables des prompts uniques. Préparation des devoirs : apportez une tâche que vous répétez chaque semaine — c'est votre premier candidat skill.",

  
  "lab.t": "Labo — voyez le résultat s'affiner à mesure que vous ajoutez du détail",
  "lab.hint": "Partez du vague. Ajoutez P-T-C-F-I un cran à la fois et voyez la sortie fictive passer du générique à l'utilisable. (Pas d'appel IA — juste la mécanique.)",
  "lab.chip.P": "Persona",
  "lab.chip.T": "Tâche",
  "lab.chip.C": "Contexte",
  "lab.chip.F": "Format",
  "lab.chip.I": "Itérer",
  "lab.preview.prompt": "Votre prompt maintenant :",
  "lab.output.none": "Pas encore de prompt — ajoutez une couche ci-dessus.",
  "autopsy.t": "Autopsie — trois vrais prompts du terrain",
  "autopsy.hint": "Ouvrez un cas, repérez ce qui manque, comparez à l'œil du coach. Pas de saisie — juste du diagnostic.",
  "pb2.coach": "Coacher mon prompt →",
  "coach.head": "Retour du coach IA",
  "coach.verdict.strong": "Prompt solide",
  "coach.verdict.decent": "Correct — un correctif l'affinerait",
  "coach.verdict.needs_work": "À retravailler",
  "coach.rewrite.t": "Réécriture suggérée",
  "coach.use": "Utiliser ce brouillon",
  "coach.loading": "Vérification…",
  "coach.error": "Impossible de joindre le coach — réessayez. Votre prompt est toujours ci-dessous.",
  "coach.offline": "Démo hors ligne — retour heuristique (pas d'appel IA).",
  "free.t": "Essayez sur n'importe quel prompt — collez ce que vous enverriez vraiment",
  "free.hint": "Vous n'utilisez pas le constructeur ? Collez un vrai prompt de votre travail et obtenez le même diagnostic P-T-C-F-I. Avec IA quand en ligne ; heuristique sinon.",
  "free.ph": "Collez ou écrivez votre prompt ici — ex. « Résume ce rapport de district pour la revue… »",
  "free.cta": "Vérifier ce prompt",
  "sk.t": "Peut-on construire un skill pour le prompt parfait ?",

  
  "acar.t": "Les problèmes survivent aux prompts — cadrer d'abord le problème",
  "acar.d": "\"Le prompt engineering consiste à rédiger l'entrée textuelle optimale... À l'inverse, la formulation du problème consiste à définir le problème en délimitant son objet, sa portée et ses limites.\" Votre brouillon de trois phrases dans cette section est de la formulation de problème — la partie qui ne périt pas quand le modèle change. P-T-C-F-I dans la section suivante est la façon de transformer ce problème formulé en langage que le modèle peut exécuter.",
  "acar.cite": "— O. A. Acar, Harvard Business Review (2023), via MIT Sloan : ",
  "ptypes.t": "Six types de prompts que vous croiserez (au-delà de P-T-C-F-I)",
  "ptypes.hint": "P-T-C-F-I est comment vous composez. Ce sont des saveurs que vous reconnaîtrez sur Slack, GitHub et ailleurs — la plupart ne sont que du P-T-C-F-I bref. Repérez ceux que vous utilisez déjà.",
  "ptypes.h.type": "Type", "ptypes.h.when": "Quand l'utiliser", "ptypes.h.ex": "Exemple",
  "ptypes.zero.t": "Zero-shot", "ptypes.zero.d": "Instruction simple, sans exemples. Idéal pour un résumé ponctuel.", "ptypes.zero.ex": "\"Résume cet article en 5 puces.\"",
  "ptypes.few.t": "Few-shot", "ptypes.few.badge": "Essayez", "ptypes.few.d": "Donnez 2–3 exemples de la forme/ton souhaité, puis demandez le suivant dans le même style. Votre meilleur raccourci vers la cohérence.", "ptypes.few.ex": "\"Voici 2 résumés de district exemples. Rédigez un troisième dans le même style : [District A : ...] [District B : ...]\"",
  "ptypes.instr.t": "Instructionnel", "ptypes.instr.d": "Verbe direct + contraintes (rédiger / comparer / en moins de X mots).", "ptypes.instr.ex": "\"Rédigez un résumé exécutif. Tenez en moins de 100 mots, français formel.\"",
  "ptypes.role.t": "Basé sur le rôle", "ptypes.role.d": "Persona à dessein — « en tant qu'agent S&E... » oriente la perspective et le vocabulaire.", "ptypes.role.ex": "\"Vous êtes un professeur de MBA préparant un plan de cours...\"",
  "ptypes.ctx.t": "Contextuel", "ptypes.ctx.d": "Contexte + public avant la demande. C'est votre C.", "ptypes.ctx.ex": "\"Ceci est pour des volontaires communautaires. Reformulez en langage simple.\"",
  "ptypes.sys.t": "Système / Méta", "ptypes.sys.d": "Règles en arrière-plan pour le ton/la portée (« toujours citer les sources, ne jamais deviner »). Vous n'écrirez pas cela en cours 1 — mais vous les reconnaîtrez dans les skills.", "ptypes.sys.ex": "\"Toujours répondre formellement et citer des sources réelles. Ne jamais deviner.\"",
  "ptypes.foot": "Le few-shot est la pépite : collez 2 bons résultats que vous aimez, ajoutez « rédige le suivant comme ceux-ci ». Nous l'utiliserons en cours 2 pour transformer un prompt en skill réutilisable.",

  "ps.keep": "Continuez à le façonner", "ps.ready": "Prêt à publier !",
  "homework.h2": "Devoirs — à rendre avant le cours 2",
  "homework.sub": "Quatre étapes, toutes sur Slack. Le cours 2 commence par la présentation de l'un ou de l'une d'entre vous.",
  "hw.1.t": "Présentez-vous sur #all-amplify",
  "hw.1.d": "Nom, rôle, pays — et une phrase sur le problème sur lequel vous travaillez.",
  "hw.2.t": "Publiez votre problème",
  "hw.2.d": "Collez votre énoncé du problème — du formulaire, ou exporté depuis le Coach de problème.",
  "hw.3.t": "Répondez à deux camarades",
  "hw.3.d": "Une chose qui vous intéresse dans leur problème, et une question en retour.",
  "hw.4.t": "Testez le constructeur de prompts sur une vraie tâche",
  "hw.4.d": "Choisissez quelque chose que vous avez vraiment fait cette semaine. Construisez le prompt, exécutez-le dans Claude (dans votre projet), et notez ce qui change.",
  "hw.note": "Les remises vont dans votre canal privé, avec le titre PrenomNom_Devoir1. Les devoirs sont obligatoires pour rester dans le cours.",

  "faq.h": "Réponses rapides",
  "faq.q1": "Que faire si je manque un cours en direct ?",
  "faq.a1": "Regardez l'enregistrement dans le canal du module, faites le devoir quand même, et demandez sur Slack. Ne disparaissez pas — le cours avance toutes les deux semaines.",
  "faq.q2": "Que faire si Claude me donne quelque chose de faux ?",
  "faq.a2": "Traitez-le d'abord comme un problème de prompt : itérez (le I du P-T-C-F-I, c'est vous). Vérifiez chaque chiffre à la source. Si cela persiste, publiez le prompt et le résultat sur Slack — déboguer les prompts est un sport d'équipe.",
  "faq.q3": "Puis-je travailler en français ?",
  "faq.a3": "Oui. Écrivez à Claude et sur Slack dans la langue dans laquelle vous pensez ; les instructeurs lisent les deux. (Cette page se bascule avec EN/FR en haut.)",
  "faq.q4": "Où trouver tout ?",
  "faq.a4": "À un seul endroit : Slack. Diapositives, modèles, enregistrements et retours sur les devoirs y vivent — cette page est la seule exception.",

  "ft.credit": "AMPLIFY 2027 · Sightsavers · Cohorte 2",
  "ft.note": "Cette page est elle-même une démo du cours 1 : un simple fichier HTML, sans serveur. Regardez son code source et apportez vos questions en classe.",
  "ft.link1": "Coach de problème", "ft.link2": "Télécharger Claude",
  "ft.link3": "Centre d'aide Slack", "ft.link4": "Aide Google Meet",

  "quiz.channel.title": "Test de compétences — Où va ce message ?",
  "quiz.channel.sub": "Cinq messages viennent d'arriver. Choisissez la bonne maison pour chacun.",
  "quiz.redline.title": "Test de compétences — Peut-on l'envoyer ?",
  "quiz.redline.sub": "Cinq choses que quelqu'un veut coller dans Claude. Autorisé, ou ligne rouge ?",
  "quiz.problemWhy.title": "Test — Pourquoi le problème compte",
  "quiz.problemWhy.sub": "Deux questions sur pourquoi un problème net sauve toutes les autres étapes.",
  "quiz.missing.title": "Test de compétences — Qu'est-ce qui manque ?",
  "quiz.missing.sub": "Quatre prompts du terrain. Quel élément du P-T-C-F-I manque ?",
  "quiz.pass": "Test réussi",
  "q.try": "Pas tout à fait — réessayez.",
  "toast.copy": "Prompt copié — collez-le dans Claude.",
  "toast.quiz": "Bravo — un test de compétences de moins.",
},
};

/* ---------------------------------------------------------------- data (bilingual) */
const L = () => S.lang;
const bi = (en, fr) => ({ en, fr });

const TIMELINE = [
  bi("Named", "Nommé"),
  bi("Sharper", "Affiné"),
  bi("Organized", "Organisé"),
  bi("Connected", "Connecté"),
  bi("Decisive", "Décisif"),
  bi("Pitched", "Argumenté"),
  bi("Presented", "Présenté"),
  bi("Reflected", "Repensé"),
];
const TIMELINE_D = [
  bi("You post it on Slack; the whole cohort knows what you're solving.", "Vous le publiez sur Slack ; toute la cohorte sait ce que vous résolvez."),
  bi("Refine it by prompting; find or build your first skill.", "Vous l'affinez avec des prompts ; vous trouvez ou construisez votre premier skill."),
  bi("A knowledge notebook gathers everything around it.", "Un carnet de connaissances rassemble tout ce qui l'entoure."),
  bi("Connectors reach your real data.", "Des connecteurs accèdent à vos données réelles."),
  bi("A data-to-action framework drives it.", "Un cadre « des données à l'action » le fait avancer."),
  bi("You draft the pitch of your solution.", "Vous rédigez l'argumentaire de votre solution."),
  bi("Showcase-ready, with dashboards.", "Prêt pour la présentation finale, avec des tableaux de bord."),
  bi("Blind spots closed; you know what comes next.", "Les angles morts sont comblés ; vous savez ce qui vient ensuite."),
];
const TL_CLASS = bi("Class", "Cours");
const TL_TODAY = bi("today", "aujourd'hui");

const WORKED = [
  ["P", bi("You are an NTD monitoring and evaluation officer.", "Tu es un agent de suivi et évaluation des maladies tropicales négligées (MNT).")],
  ["T", bi("I want to show the progress of our LF programme over the past 5 years.", "Je veux montrer les progrès de notre programme de filariose lymphatique sur les 5 dernières années.")],
  ["C", bi("I have data on baseline endemicity, MDA rounds by implementation unit (IU), coverage by IU and round, and total rounds with effective coverage. This is for the national programme review.", "J'ai des données sur l'endémicité de référence, les cycles de chimioprévention (CPM) par unité d'implémentation (UI), la couverture par UI et par cycle, et le nombre total de cycles avec couverture efficace. C'est pour la revue nationale du programme.")],
  ["F", bi("Produce a table showing year-by-year progress in an easy-to-read format, plus a dataset I can use for a map.", "Produis un tableau des progrès année par année, facile à lire, plus un jeu de données utilisable pour une carte.")],
  ["I", bi("Before finalizing, double-check that IU counts are consistent across years and flag anything that looks off.", "Avant de finaliser, revérifie que le nombre d'UI est cohérent d'une année à l'autre et signale tout ce qui semble étrange.")],
];

const BA_BAD_PROMPT = bi("How can AI help my NTD programme?", "Comment l'IA peut-elle aider mon programme MNT ?");
const BA_GOOD_PROMPT = [
  ["P", bi("You are an NTD M&E officer for the national programme.", "Tu es un agent de suivi & évaluation des MNT pour le programme national.")],
  ["T", bi("Summarize 2025 MDA coverage by district and flag districts below the 65% effective-coverage threshold.", "Résume la couverture CPM 2025 par district et signale les districts sous le seuil de couverture efficace de 65 %.")],
  ["C", bi("I have the district workbook with aggregate numbers. This goes to the annual programme review; no patient-level data.", "J'ai le classeur des districts avec des chiffres agrégés. C'est pour la revue annuelle du programme ; pas de données au niveau des patients.")],
  ["F", bi("One table: district, coverage %, flag. Then 3 bullets for the review. In French.", "Un tableau : district, couverture %, signal. Puis 3 puces pour la revue. En français.")],
  ["I", bi("Check every district against last year before finalizing; ask me if any number looks impossible.", "Compare chaque district à l'an dernier avant de finaliser ; demande-moi si un chiffre semble impossible.")],
];
const BA_GENERIC_TITLE = bi("Typical output", "Réponse typique");
const BA_GENERIC = [
  bi("\"AI can streamline your data workflows and automate your reporting…\"", "« L'IA peut fluidifier vos flux de données et automatiser votre reporting… »"),
  bi("\"Consider adopting a dashboard tool for insights…\"", "« Pensez à adopter un outil de tableau de bord pour vos analyses… »"),
  bi("Generic, unattributed — nothing about your districts, your data, or your report.", "Générique, sans source — rien sur vos districts, vos données ou votre rapport."),
];
const BA_GOOD_TITLE = bi("What the structured prompt gets you", "Ce que le prompt structuré vous obtient");
const BA_GOOD = [
  bi("A table of all districts, with the ones below 65% flagged — ready for the review.", "Un tableau de tous les districts, ceux sous 65 % signalés — prêt pour la revue."),
  bi("In French, in your programme's vocabulary, right length for one slide.", "En français, dans le vocabulaire de votre programme, à la bonne longueur pour une diapositive."),
  bi("Checked against last year: a 112% coverage district surfaced before it reached a partner.", "Vérifié par rapport à l'an dernier : un district à 112 % de couverture repéré avant d'atteindre un partenaire."),
];

const BUILDER_LABELS = {
  P: { label: bi("Persona:", "Persona :"), empty: bi("( Persona — who is asking? )", "( Persona — qui demande ? )") },
  T: { label: bi("Task:", "Tâche :"), empty: bi("( Task — what exactly? )", "( Tâche — quoi exactement ? )") },
  C: { label: bi("Context:", "Contexte :"), empty: bi("( Context — why and for whom? )", "( Contexte — pourquoi et pour qui ? )") },
  F: { label: bi("Format:", "Format :"), empty: bi("( Format — how should it look? )", "( Format — à quoi cela doit-il ressembler ? )") },
  I: { label: bi("Before finalizing:", "Avant de finaliser :"), empty: bi("( Iterate — your checks and loop )", "( Itérer — vos vérifications et votre boucle )") },
};


const LAB_BASE = bi("How can AI help my NTD programme?", "Comment l'IA peut-elle aider mon programme MNT ?");
const LAB_LAYERS = {
  P: bi("You are an NTD M&E officer for the national programme.", "Tu es un·e agent·e de S&E des MNT pour le programme national."),
  T: bi("Summarize 2025 MDA coverage by district and flag districts below 65%.", "Résume la couverture CPM 2025 par district et signale les districts sous 65 %."),
  C: bi("I have the district workbook with aggregate numbers. This goes to the annual review; no patient-level data.", "J'ai le classeur des districts avec des chiffres agrégés. C'est pour la revue annuelle ; pas de données patients."),
  F: bi("One table: district, coverage %, flag — then 3 bullets for the review. In French.", "Un tableau : district, couverture %, signal — puis 3 puces pour la revue. En français."),
  I: bi("Check every district against last year before finalising; ask me if any number looks impossible.", "Compare chaque district à l'an dernier avant de finaliser ; demande-moi si un chiffre semble impossible."),
};
const LAB_OUTPUTS = {
  0: bi(["Generic advice: \"AI can streamline your data…\"", "No district, no number, no table — nothing to ship."], ["Conseil générique : « L'IA peut fluidifier vos données… »", "Aucun district, aucun chiffre, aucun tableau — rien à livrer."]),
  1: bi(["A bit more focused, still guessing your format and thresholds.", "The model picks a tone but you still can't paste the result."], ["Un peu plus ciblé, mais le modèle devine encore votre format et vos seuils.", "Le modèle choisit un ton, mais vous ne pouvez toujours pas livrer le résultat."]),
  2: bi(["A table appears, but without context the numbers aren't trusted.", "You can see the shape of the answer, but will check everything by hand anyway."], ["Un tableau apparaît, mais sans contexte les chiffres ne sont pas fiables.", "Vous voyez la forme de la réponse, mais vous revérifierez tout à la main."]),
  3: bi(["Now the audience and purpose are clear — the answer uses your programme's language.", "Coverage thresholds appear, but format is still vague."], ["Le public et l'objectif sont clairs — la réponse utilise le langage de votre programme.", "Les seuils de couverture apparaissent, mais le format reste vague."]),
  4: bi(["Columns, language, and length match the review. Ready to paste near-final.", "Add the iterate check and it's shippable."], ["Colonnes, langue et longueur correspondent à la revue. Prêt à coller en quasi-définitif.", "Ajoutez la boucle de vérification et c'est livrable."]),
  5: bi(["Table + flags + 3 bullets, in French, verified against last year — flagged 112% before it reached a partner.", "Ship with confidence; the loop is built in."], ["Tableau + signaux + 3 puces, en français, vérifié vs l'an dernier — 112 % signalé avant d'atteindre un partenaire.", "Livrez en confiance ; la boucle est intégrée."]),
};

const AUTOPSY = [
  {
    q: bi("“Clean my data.”", "« Nettoie mes données. »"),
    prompt: bi("Clean my data. The file is attached.", "Nettoie mes données. Le fichier est joint."),
    missing: "T",
    why: bi("Persona is implied, but what does “clean” mean here? Deduplicate? Fix 112% coverage? Recode district names? No verb, no “done”. The model will pick the cheapest reading.", "Le persona est implicite, mais que veut dire « nettoyer » ? Dédupliquer ? Corriger 112 % de couverture ? Recoder les districts ? Pas de verbe, pas de « terminé ». Le modèle choisira la lecture la plus simple."),
    fix: bi("Add one verb and one check: “Find coverage >100% or <65%, flag the rows, and list what you changed before finalising.”", "Ajoutez un verbe et une vérification : « Trouve les couvertures >100 % ou <65 %, signale les lignes et liste ce que tu as changé avant de finaliser. »"),
  },
  {
    q: bi("“You are an NTD expert. I have 38 district Excel files, two templates, 9 WhatsApp photos, for the national review in 2 weeks.”", "« Tu es un expert MNT. J'ai 38 fichiers Excel de district, deux modèles, 9 photos WhatsApp, pour la revue nationale dans 2 semaines. »"),
    prompt: bi("You are an NTD expert. I have 38 district Excel files (two template versions), 9 WhatsApp photos of paper forms, phone call notes. This is for the national programme review in two weeks. Coverage thresholds are 65% effective, flag >100%.", "Tu es un expert MNT. J'ai 38 fichiers Excel de district (deux versions de modèle), 9 photos WhatsApp de fiches papier, des notes d'appels. C'est pour la revue nationale dans deux semaines. Seuils : 65 % efficace, signaler >100 %."),
    missing: "T",
    why: bi("Rich Persona + Context, but no Task — what should it actually do? Draft a plan? Build the table? List missing files? Without a verb, the model summarises and stops.", "Persona + Contexte riches, mais pas de tâche — que doit-il faire ? Rédiger un plan ? Construire le tableau ? Lister les fichiers manquants ? Sans verbe, le modèle résume et s'arrête."),
    fix: bi("Name the verb: “Compile a checklist of expected vs received files, then draft the coverage table shell I'll fill.”", "Nommez le verbe : « Dressez une checklist attendu vs reçu, puis ébauchez le squelette du tableau de couverture à remplir. »"),
  },
  {
    q: bi("“You are an NTD M&E officer for the Burkina Faso programme. Summarize 2025 MDA coverage by district. I have the district workbook. For the annual review, formal French. One table plus 3 bullets.”", "« Tu es un agent S&E des MNT du Burkina Faso. Résume la couverture CPM 2025 par district. J'ai le classeur des districts. Pour la revue annuelle, français formel. Un tableau plus 3 puces. »"),
    prompt: bi("You are an NTD M&E officer for the Burkina Faso national programme. Summarize 2025 MDA coverage by district. I have the district workbook with aggregate numbers. This goes to the annual programme review. Return one table (district, coverage %, flag) plus 3 bullets for the review, formal French.", "Tu es un agent S&E des MNT du Burkina Faso. Résume la couverture CPM 2025 par district. J'ai le classeur des districts avec des chiffres agrégés. C'est pour la revue annuelle. Rends un tableau (district, couverture %, signal) + 3 puces pour la revue, français formel."),
    missing: "I",
    why: bi("P-T-C-F all present — this already delivers. The missing piece is the safety net: no instruction to check 112% vs last year or to ask before finalising, so an error slides straight to the partner.", "P-T-C-F tous présents — ça délivre déjà. Il manque le filet de sécurité : pas d'instruction de vérifier 112 % vs l'an dernier ou de demander avant de finaliser, donc une erreur glisse jusqu'au partenaire."),
    fix: bi("Close the loop: “Before finalising, compare each district to 2024 and flag anything >100% or <65%; ask me if a number looks impossible.”", "Fermez la boucle : « Avant de finaliser, compare chaque district à 2024 et signale tout >100 % ou <65 % ; demande-moi si un chiffre semble impossible. »"),
  },
];


const CHAN_PRIV = bi("Your private channel", "Votre canal privé");
const SAFE_OPT = bi("Safe — paste away", "Autorisé — allez-y");
const REDLINE_OPT = bi("No — red line", "Non — ligne rouge");

const QUIZZES = {
channel: {
  title: "quiz.channel.title", sub: "quiz.channel.sub",
  questions: [
    { q: bi("You found a great article about AI in public health and want to share it with everyone.", "Vous avez trouvé un excellent article sur l'IA en santé publique et vous voulez le partager avec tout le monde."),
      opts: [bi("#all-amplify", "#all-amplify"), CHAN_PRIV, bi("#module-1", "#module-1")], correct: 0,
      expl: bi("Sharing helps the whole community — post it where everyone reads.", "Le partage aide toute la communauté — publiez là où tout le monde lit.") },
    { q: bi("You can't open the homework template posted this morning.", "Vous n'arrivez pas à ouvrir le modèle de devoir publié ce matin."),
      opts: [bi("#all-amplify", "#all-amplify"), CHAN_PRIV, bi("#module-1", "#module-1")], correct: 0,
      expl: bi("Probably not just you — post it publicly so anyone can help fast, and the answer helps everyone who hit the same problem.", "Ce n'est probablement pas que vous — publiez-le pour que n'importe qui aide vite, et la réponse servira à tous ceux qui ont le même problème.") },
    { q: bi("You want to submit Assignment 1.", "Vous voulez rendre le Devoir 1."),
      opts: [bi("#all-amplify", "#all-amplify"), CHAN_PRIV, bi("#module-1", "#module-1")], correct: 1,
      expl: bi("Homework uploads go to your private channel, titled FirstNameLastName_Assignment1 — not a public channel.", "Les devoirs se déposent dans votre canal privé, avec le titre PrenomNom_Devoir1 — pas dans un canal public.") },
    { q: bi("You have a question about your own report — it contains numbers that are not yet public.", "Vous avez une question sur votre propre rapport — il contient des chiffres pas encore publics."),
      opts: [bi("#all-amplify", "#all-amplify"), CHAN_PRIV, bi("#module-1", "#module-1")], correct: 1,
      expl: bi("Never paste unpublished or sensitive material in a public channel — that's a red line. Your private channel is you plus the instructors.", "Ne collez jamais de contenu non publié ou sensible dans un canal public — c'est une ligne rouge. Votre canal privé, c'est vous et les instructeurs.") },
    { q: bi("You missed the live class and want the recording.", "Vous avez manqué le cours en direct et vous voulez l'enregistrement."),
      opts: [bi("#all-amplify", "#all-amplify"), CHAN_PRIV, bi("#module-1", "#module-1")], correct: 2,
      expl: bi("Each class's slides, templates, and recordings live in its module channel.", "Les diapositives, modèles et enregistrements de chaque cours vivent dans son canal de module.") },
  ],
},
redline: {
  title: "quiz.redline.title", sub: "quiz.redline.sub",
  questions: [
    { q: bi("Anonymised district coverage numbers, downloaded from a public programme portal.", "Des chiffres de couverture par district anonymisés, téléchargés depuis un portail public du programme."),
      opts: [SAFE_OPT, REDLINE_OPT], correct: 0,
      expl: bi("Public, aggregate, anonymised — good to go.", "Public, agrégé, anonymisé — aucun problème.") },
    { q: bi("A photo of a paper treatment register with patient names.", "La photo d'un registre de traitement papier avec des noms de patients."),
      opts: [SAFE_OPT, REDLINE_OPT], correct: 1,
      expl: bi("Identifiable patient data — never, in any channel, in any tool.", "Données de patients identifiantes — jamais, dans aucun canal, dans aucun outil.") },
    { q: bi("Your password or API key.", "Votre mot de passe ou votre clé API."),
      opts: [SAFE_OPT, REDLINE_OPT], correct: 1,
      expl: bi("Credentials are never pasted anywhere — report a suspected leak to your instructor immediately.", "Les identifiants ne se collent nulle part — signalez immédiatement toute fuite suspectée à votre instructeur.") },
    { q: bi("Your national programme's draft strategic plan, not yet published.", "Le projet de plan stratégique national de votre programme, pas encore publié."),
      opts: [SAFE_OPT, REDLINE_OPT], correct: 1,
      expl: bi("Unpublished, confidential material — red line.", "Contenu confidentiel non publié — ligne rouge.") },
    { q: bi("A published programme guideline PDF.", "Le PDF d'une directive publiée."),
      opts: [SAFE_OPT, REDLINE_OPT], correct: 0,
      expl: bi("Published, public, safe.", "Publié, public, sans risque.") },
  ],
},
problemWhy: {
  title: "quiz.problemWhy.title", sub: "quiz.problemWhy.sub",
  questions: [
    { q: bi("Why does a vague problem make prompting harder?", "Pourquoi un problème vague rend-il le prompting plus difficile ?"),
      opts: [bi("The model already knows your programme", "Le modèle connaît déjà votre programme"), bi("The model fills your gaps with guesses — you can't iterate", "Le modèle remplit vos vides avec des suppositions — vous ne pouvez pas itérer"), bi("The model will ask you to call IT", "Le modèle vous demandera d'appeler l'IT")], correct: 1,
      expl: bi("An LLM predicts plausible next words; every gap you leave is a guess you have to fix later. A named task + one real occasion gives the model anchors and you a check.", "Un LLM prédit les prochains mots plausibles ; chaque vide est une supposition à corriger. Une tâche nommée + une occasion réelle donnent des ancres au modèle et une vérification à vous.") },
    { q: bi("What's “good enough for today”?", "Qu'est-ce qui est « assez bien pour aujourd'hui » ?"),
      opts: [bi("A polished three-page problem brief", "Une note de problème de trois pages polie"), bi("One named task + one real occasion + one number or consequence", "Une tâche nommée + une occasion réelle + un chiffre ou une conséquence"), bi("A solution idea like “we need a dashboard”", "Une idée de solution du type « il nous faut un tableau de bord »")], correct: 1,
      expl: bi("Three sentences you can actually say out loud. The Problem Coach deepens each one later; perfection now just hides the next lesson.", "Trois phrases que vous pouvez vraiment dire à voix haute. Le Coach approfondit ensuite ; la perfection maintenant cache la prochaine leçon.") },
  ],
},
missing: {
  title: "quiz.missing.title", sub: "quiz.missing.sub",
  questions: [
    { q: bi("\"Summarize this 20-page programme guideline in simple words for community volunteers, in three short paragraphs.\"", "« Résume cette directive de 20 pages en mots simples pour des agents communautaires, en trois courts paragraphes. »"),
      opts: [bi("Persona", "Persona"), bi("Task", "Tâche"), bi("Context", "Contexte"), bi("Format", "Format"), bi("Iterate", "Itérer")], correct: 0,
      expl: bi("Task, context, and format are there — but who should the AI be? Add a persona.", "La tâche, le contexte et le format sont là — mais qui l'IA doit-elle être ? Ajoutez un persona.") },
    { q: bi("\"You are an M&E officer. Turn this year's coverage data into a one-page table.\"", "« Tu es un agent de suivi & évaluation. Transforme les données de couverture de cette année en un tableau d'une page. »"),
      opts: [bi("Persona", "Persona"), bi("Task", "Tâche"), bi("Context", "Contexte"), bi("Format", "Format"), bi("Iterate", "Itérer")], correct: 2,
      expl: bi("Persona, task, and format are set — but why, for whom, and which data years? Context is missing.", "Persona, tâche et format sont là — mais pourquoi, pour qui, et quelles années de données ? Le contexte manque.") },
    { q: bi("\"You are an NTD expert. I have a pile of district Excel files about the 2025 MDA, and our annual review is in two weeks.\"", "« Tu es un expert des MNT. J'ai une pile de fichiers Excel des districts sur la CPM 2025, et notre revue annuelle est dans deux semaines. »"),
      opts: [bi("Persona", "Persona"), bi("Task", "Tâche"), bi("Context", "Contexte"), bi("Format", "Format"), bi("Iterate", "Itérer")], correct: 1,
      expl: bi("Rich persona and context — but no verb. What exactly should it do? State the task.", "Persona et contexte fournis — mais aucun verbe. Que doit-il faire exactement ? Énoncez la tâche.") },
    { q: bi("Claude's table looks off — the totals don't add up. You paste it straight into the national report anyway.", "Le tableau de Claude semble faux — les totaux ne correspondent pas. Vous le collez quand même tel quel dans le rapport national."),
      opts: [bi("Persona", "Persona"), bi("Task", "Tâche"), bi("Context", "Contexte"), bi("Format", "Format"), bi("Iterate", "Itérer")], correct: 4,
      expl: bi("Never ship unverified output. The loop is yours: go back, flag the issue, ask for a re-check.", "N'expédiez jamais un résultat non vérifié. La boucle est à vous : revenez, signalez le problème, demandez une revérification.") },
  ],
},
};

/* ---------------------------------------------------------------- state */
const LS_KEY = "c1_state_v2";
const DEFAULTS = () => ({
  lang: "en",
  checks: {},
  ps: {},
  quizzes: { channel: {}, redline: {}, missing: {}, problemWhy: {} },
  ba: "bad",
  builder: { P: "", T: "", C: "", F: "", I: "" },
  lab: { P: 0, T: 0, C: 1, F: 0, I: 0 },
  autopsy: 1,
});
let S = DEFAULTS();

function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { /* private mode */ }
}
function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    S = Object.assign(DEFAULTS(), raw);
    S.checks = Object.assign({}, (raw && raw.checks) || {});
    S.ps = Object.assign({}, (raw && raw.ps) || {});
    S.builder = Object.assign(DEFAULTS().builder, (raw && raw.builder) || {});
    S.lab = Object.assign(DEFAULTS().lab, (raw && raw.lab) || {});
    S.autopsy = raw && raw.autopsy ? raw.autopsy : 1;
    S.quizzes = {};
    for (const id of Object.keys(QUIZZES)) S.quizzes[id] = Object.assign({}, raw && raw.quizzes && raw.quizzes[id]);
  } catch { S = DEFAULTS(); }
}

/* ---------------------------------------------------------------- helpers */
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const t = (k) => (DICT[S.lang] && DICT[S.lang][k]) || DICT.en[k] || k;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const v = (b) => (typeof b === "string" ? b : b[S.lang] || b.en); // bilingual value

function showToast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("show"), 2000);
}

/* ---------------------------------------------------------------- i18n */
function applyI18n() {
  document.documentElement.lang = S.lang;
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  updateLangBtns();
  updateNavChecks();
  updateRings();
}
function updateLangBtns() {
  $("#lang-en").classList.toggle("active", S.lang === "en");
  $("#lang-fr").classList.toggle("active", S.lang === "fr");
  $("#lang-en").setAttribute("aria-pressed", S.lang === "en");
  $("#lang-fr").setAttribute("aria-pressed", S.lang === "fr");
}
function setLang(l) {
  S.lang = l;
  save();
  applyI18n();
  renderDynamic();
}

/* ---------------------------------------------------------------- setup checklist + rings */
const CHECK_IDS = ["meet", "slack", "intro", "app", "login", "project"];
function setupChecksFromState() {
  $$("#setup-checklist input[type=checkbox]").forEach((box) => {
    box.checked = !!S.checks[box.dataset.check];
  });
}
function wireChecklist() {
  $$("#setup-checklist input[type=checkbox]").forEach((box) => {
    box.addEventListener("change", () => {
      if (box.checked) S.checks[box.dataset.check] = 1;
      else delete S.checks[box.dataset.check];
      save();
      updateRings();
    });
  });
}
function updateRings() {
  const n = CHECK_IDS.filter((id) => S.checks[id]).length;
  const frac = n / CHECK_IDS.length;
  const small = $("#ring-fg"), big = $("#ring-fg-big");
  const cSmall = 2 * Math.PI * 17, cBig = 2 * Math.PI * 28;
  [ [small, cSmall], [big, cBig] ].forEach(([el, c]) => {
    if (!el) return;
    el.style.strokeDasharray = c;
    el.style.strokeDashoffset = c * (1 - frac);
  });
  const rl = $("#ring-label"); if (rl) rl.textContent = n + "/" + CHECK_IDS.length;
  const rlb = $("#ring-label-big"); if (rlb) rlb.textContent = n + "/" + CHECK_IDS.length;
  const mb = $("#map-bar"); if (mb) mb.style.width = (frac * 100) + "%";
}

/* ---------------------------------------------------------------- nav skill-checks chip */
const QUIZ_IDS = ["channel", "redline", "missing", "problemWhy"];
function quizPassed(id) {
  return QUIZZES[id].questions.every((_, i) => S.quizzes[id][i]);
}
function updateNavChecks() {
  const n = QUIZ_IDS.filter(quizPassed).length;
  const el = $("#nav-checks");
  el.textContent = t("nav.checks") + " " + n + "/" + QUIZ_IDS.length;
  el.classList.toggle("done", n === QUIZ_IDS.length);
}

/* ---------------------------------------------------------------- quizzes */
function renderQuiz(id) {
  const def = QUIZZES[id]; if (!def) return;
  const el = $("#quiz-" + id); if (!el) return;
  const st = S.quizzes[id];
  const done = def.questions.filter((_, i) => st[i]).length;
  const all = done === def.questions.length;
  el.innerHTML =
    '<div class="quiz-head"><div><h3>' + esc(t(def.title)) + '</h3>' +
    '<p class="hint">' + esc(t(def.sub)) + '</p></div>' +
    '<span class="score-chip' + (all ? " full" : "") + '">' + done + "/" + def.questions.length + "</span></div>" +
    '<div class="quiz-body">' +
    def.questions.map((q, i) => {
      const answered = !!st[i];
      return (
        '<div class="q-item' + (answered ? " q-done" : "") + '" data-q="' + i + '">' +
        '<p class="q-msg"><span class="q-n">Q' + (i + 1) + '</span> ' + esc(v(q.q)) + "</p>" +
        '<div class="q-opts">' +
        q.opts.map((o, j) =>
          '<button type="button" class="q-opt' + (answered && j === q.correct ? " correct" : "") + '"' +
          (answered ? " disabled" : "") + ' data-opt="' + j + '">' + esc(v(o)) + "</button>"
        ).join("") +
        "</div>" +
        '<p class="q-expl' + (answered ? " show" : "") + '">' + (answered ? esc(v(q.expl)) : esc(v(q.expl))) + "</p>" +
        '<p class="q-try">' + esc(t("q.try")) + "</p>" +
        "</div>"
      );
    }).join("") +
    '</div>' +
    '<div class="quiz-passed' + (all ? " show" : "") + '">✓ ' + esc(t("quiz.pass")) + "</div>";
}
function wireQuizzes() {
  QUIZ_IDS.forEach((id) => {
    const root = $("#quiz-" + id); if (!root) return;
    root.addEventListener("click", (e) => {
      const btn = e.target.closest(".q-opt");
      if (!btn || btn.disabled) return;
      const item = btn.closest(".q-item");
      const qIdx = +item.dataset.q;
      const optIdx = +btn.dataset.opt;
      const q = QUIZZES[id].questions[qIdx];
      if (S.quizzes[id][qIdx]) return;
      if (optIdx === q.correct) {
        S.quizzes[id][qIdx] = 1;
        save();
        renderQuiz(id);
        updateNavChecks();
        if (quizPassed(id)) showToast("✓ " + t("toast.quiz"));
      } else {
        btn.classList.add("wrong");
        item.classList.remove("q-wrong");
        void item.offsetWidth;           // restart the shake animation
        item.classList.add("q-wrong");
        item.querySelector(".q-try").style.display = "block";
      }
    });
  });
}

/* ---------------------------------------------------------------- timeline */
function renderTimeline() {
  const tl = $("#timeline"); if (!tl) return;
  tl.innerHTML = TIMELINE.map((verb, i) =>
    '<div class="tl-step' + (i === 0 ? " now" : "") + '">' +
    '<span class="tl-class">' + esc(v(TL_CLASS)) + " " + (i + 1) + (i === 0 ? " · " + esc(v(TL_TODAY)) : "") + "</span>" +
    '<p class="tl-verb">' + esc(v(verb)) + "</p>" +
    '<p class="tl-desc">' + esc(v(TIMELINE_D[i])) + "</p>" +
    "</div>"
  ).join("");
}

/* ---------------------------------------------------------------- worked example + before/after */
function promptLines(lines) {
  return lines.map(([k, txt]) =>
    '<p class="w-line w-' + k + '"><span class="w-tag">' + k + "</span> " + esc(v(txt)) + "</p>"
  ).join("");
}
function renderWorked() { $("#worked").innerHTML = promptLines(WORKED); }

function renderBA() {
  const good = S.ba === "good";
  $("#ba-bad").classList.toggle("active", !good);
  $("#ba-good").classList.toggle("active", good);
  $("#ba-prompt").className = "ba-prompt" + (good ? " good" : "");
  if (good) {
    $("#ba-prompt").innerHTML = promptLines(BA_GOOD_PROMPT);
    $("#ba-out").className = "ba-out focused";
    $("#ba-out").innerHTML =
      "<h4>" + esc(v(BA_GOOD_TITLE)) + "</h4><ul>" +
      BA_GOOD.map((x) => "<li>" + esc(v(x)) + "</li>").join("") + "</ul>";
  } else {
    $("#ba-prompt").textContent = v(BA_BAD_PROMPT);
    $("#ba-out").className = "ba-out generic";
    $("#ba-out").innerHTML =
      "<h4>" + esc(v(BA_GENERIC_TITLE)) + "</h4><ul>" +
      BA_GENERIC.map((x) => "<li>" + esc(v(x)) + "</li>").join("") + "</ul>";
  }
}
function wireBA() {
  $("#ba-bad").addEventListener("click", () => { S.ba = "bad"; save(); renderBA(); });
  $("#ba-good").addEventListener("click", () => { S.ba = "good"; save(); renderBA(); });
}

/* ---------------------------------------------------------------- self-check meter */
const PS_IDS = ["c1", "c2", "c3", "c4", "c5", "c6"];
function wireSelfCheck() {
  $$('input[data-ps]').forEach((box) => {
    box.addEventListener("change", () => {
      if (box.checked) S.ps[box.dataset.ps] = 1;
      else delete S.ps[box.dataset.ps];
      save();
      updatePsMeter();
    });
  });
}
function setupSelfCheckFromState() {
  const els = $$('input[data-ps]'); if (!els.length) return;
  els.forEach((box) => { box.checked = !!S.ps[box.dataset.ps]; });
}
function updatePsMeter() {
  const elScore = $("#ps-score"); if (!elScore) return;
  const n = PS_IDS.filter((id) => S.ps[id]).length;
  const full = n === PS_IDS.length;
  elScore.textContent = n + "/" + PS_IDS.length;
  elScore.classList.toggle("full", full);
  const elLabel = $("#ps-label"); if (elLabel) { elLabel.classList.toggle("full", full); elLabel.textContent = t(full ? "ps.ready" : "ps.keep"); }
  const firstMissing = PS_IDS.find((id) => !S.ps[id]);
  const specific = firstMissing && (DICT[S.lang]["ps.h." + firstMissing] || DICT.en["ps.h." + firstMissing]);
  const hint = $("#ps-hint"); if (hint) hint.textContent = full ? t("ps.h.done") : t(specific ? "ps.h." + firstMissing : "ps.h.generic");
}

/* ---------------------------------------------------------------- prompt builder */
function renderBuilderMeter() {
  const m = $("#builder-meter"); if (!m) return;
  const keys = ["P","T","C","F","I"];
  const filled = keys.filter((k) => (S.builder[k]||"").trim().length > 3).length;
  m.innerHTML = '<span class="meter-mini">' + filled + '/5 \u00b7 ' + (filled===5 ? t("ps.ready") : t("ps.keep")) + '</span>' + '<div class="meter-bar"><span style="width:'+ (filled/5*100) +'%"></span></div>';
}
function renderBuilderOut() {
  const out = $("#builder-out"); if (!out) return;
  renderBuilderMeter();
  const lines = ["P", "T", "C", "F", "I"].map((k) => {
    const val = (S.builder[k] || "").trim();
    const lab = v(BUILDER_LABELS[k].label);
    const empty = v(BUILDER_LABELS[k].empty);
    return (
      '<div class="b-l b-' + k + '"><span class="b-part">' + esc(lab) + "</span> " +
      (val ? esc(val) : '<span class="b-empty">' + esc(empty) + "</span>") +
      "</div>"
    );
  }).join("\n");
  out.innerHTML = lines + "\n";
}
function builderPlainText() {
  return ["P", "T", "C", "F", "I"]
    .map((k) => {
      const val = (S.builder[k] || "").trim();
      if (!val) return null;
      return v(BUILDER_LABELS[k].label) + " " + val;
    })
    .filter(Boolean)
    .join("\n\n");
}
function wireBuilder() {
  ["P", "T", "C", "F", "I"].forEach((k) => {
    const inp = $("#b-" + k);
    inp.value = S.builder[k] || "";
    inp.addEventListener("input", () => {
      S.builder[k] = inp.value;
      save();
      renderBuilderOut();
    });
  });
  $("#builder-copy").addEventListener("click", async () => {
    const text = builderPlainText();
    if (!text) return;
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) { /* fallback below */ }
    if (!ok) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      ta.remove();
    }
    showToast(ok ? t("toast.copy") : t("toast.copy"));
  });
}


/* ---------------------------------------------------------------- Prompt Lab */
function renderLab() {
  const chipRow = $("#lab-chips"); if (!chipRow) return;
  // reflect state onto chips
  $$("#lab-chips .lab-chip").forEach((b) => {
    const k = b.dataset.lab;
    b.classList.toggle("active", !!S.lab[k]);
  });
  const order = ["P","T","C","F","I"];
  const active = order.filter((k) => S.lab[k]);
  const parts = [];
  if (!active.length) parts.push(v(LAB_BASE));
  else {
    active.forEach((k) => parts.push(v(LAB_LAYERS[k])));
  }
  const txt = parts.join(" ");
  const built = $("#lab-built");
  const out = $("#lab-output");
  const pro = $("#lab-prompt-text");
  if (built) built.textContent = txt;
  if (pro) pro.textContent = txt;
  if (out) {
    const lvl = active.length;
    const lines = v(LAB_OUTPUTS[lvl] || LAB_OUTPUTS[5]);
    out.innerHTML = '<h4>' + esc(lvl >= 4 ? v(BA_GOOD_TITLE) : v(BA_GENERIC_TITLE)) + '</h4><ul>' + lines.map((x)=>"<li>"+esc(x)+"</li>").join("") + "</ul>";
    out.className = "lab-output " + (lvl >= 4 ? "focused" : lvl >= 2 ? "" : "generic");
  }
}
function wireLab() {
  const chips = $$("#lab-chips .lab-chip");
  if (!chips.length) return;
  chips.forEach((b) => {
    b.addEventListener("click", () => {
      const k = b.dataset.lab;
      S.lab[k] = S.lab[k] ? 0 : 1;
      save();
      renderLab();
    });
  });
  renderLab();
}

/* ---------------------------------------------------------------- Prompt Autopsy */
function renderAutopsy() {
  const pane = $("#autopsy-pane"); if (!pane) return;
  const idx = (S.autopsy || 1) - 1;
  const c = AUTOPSY[idx];
  if (!c) return;
  $$("#autopsy-tabs .au-tab").forEach((b) => {
    const on = +b.dataset.au === S.autopsy;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", String(on));
  });
  pane.innerHTML =
    '<div class="au-prompt"><span class="au-label">Prompt</span><p class="au-q">' + esc(v(c.prompt)) + '</p></div>' +
    '<div class="au-choices" role="group" aria-label="What is missing?">' +
    ["P","T","C","F","I"].map((ltr)=>
      '<button type="button" class="au-choice" data-pick="'+ltr+'"><span class="b-letter bl-'+ltr+'">'+ltr+'</span> '+esc(t("pt."+ltr+".t"))+'</button>'
    ).join("") +
    '</div><div class="au-feedback" id="au-feedback" hidden></div>';
  // wire choices
  $$(".au-choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pick = btn.dataset.pick;
      const fb = $("#au-feedback");
      const ok = pick === c.missing;
      fb.hidden = false;
      fb.className = "au-feedback " + (ok ? "ok" : "bad");
      fb.innerHTML = ok
        ? '<strong>✓ '+esc(t("quiz.pass"))+' — '+esc(c.missing)+' '+esc(t("pt."+c.missing+".t"))+'</strong><p>'+esc(v(c.why))+'</p><p class="au-fix"><em>'+esc(v(c.fix))+'</em></p>'
        : '<strong>✗ '+esc(t("q.try"))+' — '+esc(t("pt."+pick+".t"))+' is not the biggest gap here.</strong><p>'+esc(v(c.why))+'</p><p class="au-fix"><em>'+esc(v(c.fix))+'</em></p>';
      fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}
function wireAutopsy() {
  const tabs = $$("#autopsy-tabs .au-tab");
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      S.autopsy = +tab.dataset.au;
      save();
      renderAutopsy();
    });
  });
  renderAutopsy();
}

/* ---------------------------------------------------------------- Prompt coach (AI) */
let _promptBusy = false;
function scoreClass(s) { return s === 2 ? "good" : s === 1 ? "mid" : "bad"; }
function renderCoachPanel(panelId, data) {
  const pane = $("#" + panelId); if (!pane) return;
  if (!data) { pane.hidden = true; return; }
  pane.hidden = false;
  const verdictEl = pane.querySelector(".coach-verdict");
  const scoresEl = pane.querySelector(".coach-scores");
  const fbEl = pane.querySelector(".coach-feedback");
  const sugEl = pane.querySelector(".coach-suggestions");
  const rwEl = pane.querySelector("#coach-rewrite, #free-rewrite");
  const verdictKey = "coach.verdict." + data.verdict;
  if (verdictEl) { verdictEl.textContent = t(verdictKey); verdictEl.className = "coach-verdict v-" + data.verdict; }
  if (scoresEl) {
    scoresEl.innerHTML = ["P","T","C","F","I"].map((k) => {
      const sc = data.scores[k] ?? 0;
      return '<span class="ptcf-score s-'+scoreClass(sc)+'">'+k+' '+sc+'/2</span>';
    }).join("");
  }
  if (fbEl) fbEl.textContent = data.feedback || "";
  if (sugEl) sugEl.innerHTML = (data.suggestions || []).map((s)=>"<li>"+esc(s)+"</li>").join("");
  if (rwEl) rwEl.textContent = data.rewrite || "";
}

async function callPromptCoach(promptText, panelBase) {
  if (_promptBusy) return;
  const p = String(promptText || "").trim();
  if (!p) { showToast(t("coach.error")); return; }
  const btn = panelBase === "builder" ? $("#builder-coach") : $("#free-coach");
  const statusEl = $("#free-status");
  _promptBusy = true;
  if (btn) { btn.disabled = true; btn.textContent = t("coach.loading"); }
  if (statusEl) statusEl.textContent = t("coach.loading");
  try {
    const sid = (S._sid || (S._sid = Math.random().toString(36).slice(2,10), save(), S._sid));
    // try API, fall back to heuristic mock on failure
    let res, data;
    try {
      res = await fetch("/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: p, problem_hint: builderPlainText().slice(0,600), lang: S.lang, session_id: sid }),
      });
      data = await res.json();
    } catch (e) { res = null; }
    if (!res || !res.ok) {
      const errText = res ? (data && (data.error?.message || JSON.stringify(data).slice(0,200))) : 'no response';
      console.warn('prompt coach fallback:', res && res.status, errText);
      // heuristic locally (same as server mock)
      const heur = (() => {
        const s = p.toLowerCase(); const has=(re)=>re.test(s);
        const P = has(/you are|you're|act as|as an|expert|officer/)?1:0;
        const T = has(/summar|draft|compare|check|flag|write|create|extract|analyse|analyze|clean|compile|turn.*into/)? (s.length>60?2:1):0;
        const C = has(/for |because|so that|audience|review|report|district|data|programme|program/) ? (has(/for (the|my|our)/)?2:1):0;
        const F = has(/table|bullet|paragraph|format|in french|en fran|one page|slide|list/)?2:0;
        const I = has(/flag|check|verify|ask me|before final|double-check/)?2:0;
        const tot=P+T+C+F+I;
        return { scores:{P,T,C,F,I}, verdict: tot>=7?"strong":tot>=4?"decent":"needs_work", feedback: 'Heuristic check — "'+p.slice(0,48)+'" — '+(F?'format helps':'add format + a check so the model stops guessing')+'.', suggestions: [(["P","T","C","F","I"].filter((k)=>({P,T,C,F,I}[k]<2)).slice(0,2).join(" & ")||"Iterate")+' — name audience, verb, and what “done” looks like.'], rewrite: "You are an NTD M&E officer.\nTask: "+p.slice(0,120)+" [add audience + purpose].\nReturn: a table plus 3 bullets, in [English/French].\nBefore finalising, flag coverage >100% and ask me if a number looks off." };
      })();
      data = heur;
      if (statusEl) statusEl.textContent = t("coach.offline");
    } else {
      if (statusEl) statusEl.textContent = "";
      if (data && data.error) throw new Error(data.error.message || "coach error");
    }
    const panelId = panelBase === "builder" ? "builder-coach-panel" : "free-coach-panel";
    renderCoachPanel(panelId, data);
    const rwDetails = document.querySelector("#" + panelId + " .coach-rewrite");
    if (rwDetails && data.verdict !== "strong") rwDetails.open = true;
  } catch (err) {
    showToast(t("coach.error"));
  } finally {
    _promptBusy = false;
    if (btn) { btn.disabled = false; btn.textContent = panelBase === "builder" ? t("pb2.coach") : t("free.cta"); }
    if (statusEl && !statusEl.textContent.includes("Offline")) statusEl.textContent = "";
  }
}

function wirePromptCoach() {
  const bBtn = $("#builder-coach");
  if (bBtn) bBtn.addEventListener("click", async () => {
    const txt = builderPlainText() || ["P","T","C","F","I"].map((k)=>$("#b-"+k)?.value?.trim()).filter(Boolean).join(" \n");
    if (!txt || !txt.trim()) { showToast(t("coach.error")); return; }
    await callPromptCoach(txt, "builder");
  });
  const useBtn = $("#coach-use");
  if (useBtn) useBtn.addEventListener("click", () => {
    const src = $("#coach-rewrite"); if (!src || !src.textContent.trim()) return;
    // Fill builder fields naively: put whole rewrite into Task field for demo, or split if possible
    const txt = src.textContent.trim();
    // Try to parse blocks: Persona/Task/Context/Format/Before finalizing
    const mP = txt.match(/Persona:\s*([^\n]+)/i);
    const mT = txt.match(/Task:\s*([^\n]+)/i);
    const mC = txt.match(/Context:\s*([^\n]+)/i);
    const mF = txt.match(/Format:\s*([^\n]+)/i);
    const mI = txt.match(/Before finalizing:\s*([^\n]+)/i);
    if (mP) $("#b-P").value = S.builder.P = mP[1].trim();
    if (mT) $("#b-T").value = S.builder.T = mT[1].trim();
    if (mC) $("#b-C").value = S.builder.C = mC[1].trim();
    if (mF) $("#b-F").value = S.builder.F = mF[1].trim();
    if (mI) $("#b-I").value = S.builder.I = mI[1].trim();
    if (!mP && !mT && !mC) {
      // fallback: drop whole text into Task
      $("#b-T").value = S.builder.T = txt.slice(0,200);
    }
    save(); renderBuilderOut();
    showToast(t("toast.copy"));
  });
  const fBtn = $("#free-coach");
  if (fBtn) fBtn.addEventListener("click", async () => {
    const txt = $("#free-prompt")?.value || "";
    await callPromptCoach(txt, "free");
  });
}


/* ---------------------------------------------------------------- Claude UI hotspots */
function wireSpots() {
  const spots = $$(".spot");
  spots.forEach((s) => {
    s.setAttribute("aria-expanded", "false");
    s.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = s.classList.contains("open");
      spots.forEach((o) => { o.classList.remove("open"); o.setAttribute("aria-expanded", "false"); });
      if (!open) { s.classList.add("open"); s.setAttribute("aria-expanded", "true"); }
    });
  });
  document.addEventListener("click", () => {
    spots.forEach((o) => { o.classList.remove("open"); o.setAttribute("aria-expanded", "false"); });
  });
}

/* ---------------------------------------------------------------- scroll: progress bar + scrollspy */
function wireScroll() {
  const bar = $("#progress-bar");
  const links = $$(".map ol a, .mainnav a");
  const sections = links
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      let current = null;
      sections.forEach((sec) => {
        if (sec.getBoundingClientRect().top <= 120) current = sec.id;
      });
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------------------------------------------------------- init */
function renderDynamic() {
  renderTimeline();
  renderWorked();
  renderBA();
  renderBuilderOut();
  renderLab();
  renderAutopsy();
  updatePsMeter();
  QUIZ_IDS.forEach(renderQuiz);
  updateNavChecks();
}

function init() {
  load();
  // language buttons
  $("#lang-en").addEventListener("click", () => setLang("en"));
  $("#lang-fr").addEventListener("click", () => setLang("fr"));
  applyI18n();
  setupChecksFromState();
  setupSelfCheckFromState();
  wireChecklist();
  wireSelfCheck();
  wireBuilder();
  wireBA();
  wireLab();
  wireAutopsy();
  wirePromptCoach();
  wireSpots();
  wireQuizzes();
  wireScroll();
  renderDynamic();
  updateRings();
}

init();