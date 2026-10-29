/* AMPLIFY 2027 · Course 1 — Foundations.
   Static page logic: EN/FR i18n, setup checklist, three skill-check quizzes,
   Claude UI hotspots, problem-statement self-check, prompt builder. No backend. */
"use strict";

/* ---------------------------------------------------------------- i18n dict */
const DICT = {
en: {
  "brand.title": "AMPLIFY 2027",
  "brand.tagline": "Course 1 · Foundations — Sightsavers × ESPEN",
  "nav.setup": "Course setup", "nav.slack": "Slack", "nav.claude": "Claude",
  "nav.problem": "Your problem", "nav.prompt": "Perfect prompt", "nav.homework": "Homework",
  "nav.checks": "Skill checks",

  "hero.kicker": "Sightsavers × ESPEN · Cohort 2 · 2027",
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
  "red.safe": "Safe: published guidelines, public ESPEN data, anonymised aggregate numbers, your own drafts.",

  "mock.t": "Find your way around — click the pulsing dots",
  "mock.side.search": "Search chats…", "mock.side.new": "+ New chat",
  "mock.side.chat1": "LF coverage table draft",
  "mock.side.chat2": "Week 1 homework questions",
  "mock.side.chat3": "Summary of WHO guideline",
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

  "problem.h2": "4 · Your problem statement — the spine of the course",
  "problem.lead": "You came with a problem from the AMPLIFY Problem Statement Form. That problem is not a side assignment — it is the course. Every class adds one capability to it, and in Class 8 you present the working solution.",
  "problem.tl.t": "What your problem gains, class by class",
  "ps.t": "Is your problem statement course-ready?",
  "ps.hint": "The six checks from the form's final section. Tick what is true today.",
  "ps.hint0": "Tick what is true today — the meter updates as you go.",
  "ps.keep": "Keep shaping it", "ps.ready": "Ready to post!",
  "ps.c1": "Someone who has never worked in my programme could understand the task and why it matters",
  "ps.c2": "It describes a real occasion — not only what usually happens",
  "ps.c3": "It has numbers: how often, how long, how many districts or files",
  "ps.c4": "It says what goes wrong, and what that causes",
  "ps.c5": "It is my own work, and I can work on it during the course",
  "ps.c6": "An anonymised example is attached — or I explain why not",
  "ps.h.c1": "Start with question 4 of the form: walk us through the last time you did this task, step by step.",
  "ps.h.c2": "Recall one specific time — a real round, a real week — and write what actually happened, step by step.",
  "ps.h.c3": "Add numbers: how often you do it, how long it takes, how many districts or files.",
  "ps.h.c4": "Say what actually goes wrong, and what that costs — with one real moment.",
  "ps.h.c5": "Name the part that is yours — if it needs a colleague's data or approval, say exactly what you'll ask them for.",
  "ps.h.c6": "Attach an anonymised example file, or explain why you can't.",
  "ps.h.generic": "Read it out loud as if to a new colleague — every sentence should tell us something we can build on.",
  "ps.h.done": "Ready — post it on #all-amplify, and reply to two classmates.",
  "ws.weak.t": "A weak answer",
  "ws.weak.q": "\"Data management is a big challenge in our programme. Reports are often late and there are many errors. AI can help us improve data quality and efficiency.\"",
  "ws.weak.v": "Which data? Which report? How late? Nothing here to build a project on.",
  "ws.strong.t": "A strong answer (abridged)",
  "ws.strong.q": "\"Task: compile 38 district MDA treatment files into the national annual report — Excel files, WhatsApp photos, phone calls. It takes my data officer and me about three weeks a year. Last year one district reported 112% coverage and I only caught it after the chart went to a partner; we sent a correction and missed the deadline by three weeks.\"",
  "ws.strong.v": "A named task, real occasions, numbers, consequences — we can build on this.",
  "mvp.t": "Think minimum viable product",
  "mvp.d": "Your problem statement does not have to be perfect — it has to work, and you have to understand why and how it works. We sharpen it every single class; each one gets you one step closer to a solution.",
  "pb.t": "Not there yet? Use the Problem Builder",
  "pb.d": "The AMPLIFY Problem Builder is an AI coach for your statement: it critiques your draft, asks the follow-up questions, and scores your readiness. Export the result and paste it into the official form.",
  "pb.cta": "Open the Problem Builder →",

  "prompt.h2": "5 · The art of the perfect prompt",
  "prompt.lead": "Before any tool matters, this matters. AI does not read your mind — vague in, vague out. Think of Claude as a brilliant new colleague who has never seen your programme: it needs direction, context, and a clear definition of \"done\".",
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

  "homework.h2": "Homework — due before Class 2",
  "homework.sub": "Four steps, all on Slack. Class 2 opens with one of you presenting.",
  "hw.1.t": "Introduce yourself on #all-amplify",
  "hw.1.d": "Name, role, country — and one sentence on the problem you are working on.",
  "hw.2.t": "Post your problem",
  "hw.2.d": "Paste your problem statement — from the form, or exported from the Problem Builder.",
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

  "ft.credit": "AMPLIFY 2027 · Sightsavers × ESPEN · Cohort 2",
  "ft.note": "This page is itself a Class 1 demo: a plain HTML file, no backend. View its source, and bring your questions to class.",
  "ft.link1": "Problem Builder", "ft.link2": "Download Claude",
  "ft.link3": "Slack Help Center", "ft.link4": "Google Meet Help",

  "quiz.channel.title": "Skill check — Where does it go?",
  "quiz.channel.sub": "Five messages just came in. Choose the right home for each.",
  "quiz.redline.title": "Skill check — Can this go in?",
  "quiz.redline.sub": "Five things someone wants to paste into Claude. Safe, or red line?",
  "quiz.missing.title": "Skill check — What's missing?",
  "quiz.missing.sub": "Four prompts from the field. Which P-T-C-F-I element is missing?",
  "quiz.pass": "Skill check passed",
  "q.try": "Not quite — try again.",
  "toast.copy": "Prompt copied — paste it into Claude.",
  "toast.quiz": "Nice — one skill check down.",
},

fr: {
  "brand.title": "AMPLIFY 2027",
  "brand.tagline": "Cours 1 · Fondamentaux — Sightsavers × ESPEN",
  "nav.setup": "Organisation", "nav.slack": "Slack", "nav.claude": "Claude",
  "nav.problem": "Votre problème", "nav.prompt": "Prompt parfait", "nav.homework": "Devoirs",
  "nav.checks": "Tests",

  "hero.kicker": "Sightsavers × ESPEN · Cohorte 2 · 2027",
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
  "red.safe": "Autorisé : directives publiées, données publiques ESPEN, chiffres agrégés anonymisés, vos propres brouillons.",

  "mock.t": "Repérez-vous — cliquez sur les points qui pulsent",
  "mock.side.search": "Rechercher des discussions…",
  "mock.side.new": "+ Nouvelle discussion",
  "mock.side.chat1": "Brouillon du tableau de couverture LF",
  "mock.side.chat2": "Questions sur le devoir de la semaine 1",
  "mock.side.chat3": "Résumé de la directive OMS",
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

  "problem.h2": "4 · Votre énoncé du problème — la colonne vertébrale du cours",
  "problem.lead": "Vous êtes venu·e avec un problème tiré du formulaire AMPLIFY de description du problème. Ce problème n'est pas un devoir annexe — c'est le cours. Chaque cours y ajoute une capacité, et au cours 8, vous présentez la solution qui fonctionne.",
  "problem.tl.t": "Ce que votre problème gagne, cours après cours",
  "ps.t": "Votre énoncé est-il prêt pour le cours ?",
  "ps.hint": "Les six critères de la dernière section du formulaire. Cochez ce qui est vrai aujourd'hui.",
  "ps.hint0": "Cochez ce qui est vrai aujourd'hui — la jauge se met à jour au fur et à mesure.",
  "ps.keep": "Continuez à le façonner", "ps.ready": "Prêt à publier !",
  "ps.c1": "Quelqu'un qui n'a jamais travaillé dans mon programme peut comprendre la tâche et pourquoi elle compte",
  "ps.c2": "Il décrit une occasion réelle — pas seulement ce qui arrive d'habitude",
  "ps.c3": "Il contient des chiffres : à quelle fréquence, combien de temps, combien de districts ou de fichiers",
  "ps.c4": "Il dit ce qui échoue, et ce que cela entraîne",
  "ps.c5": "C'est mon propre travail, et je peux m'y consacrer pendant le cours",
  "ps.c6": "Un exemple anonymisé est joint — ou j'explique pourquoi ce n'est pas possible",
  "ps.h.c1": "Commencez par la question 4 du formulaire : racontez-nous la dernière fois que vous avez fait cette tâche, étape par étape.",
  "ps.h.c2": "Rappelez-vous une occasion précise — une vraie campagne, une vraie semaine — et écrivez ce qui s'est réellement passé, étape par étape.",
  "ps.h.c3": "Ajoutez des chiffres : à quelle fréquence, combien de temps, combien de districts ou de fichiers.",
  "ps.h.c4": "Dites ce qui échoue réellement et ce que cela coûte — avec un moment réel.",
  "ps.h.c5": "Nommez la partie qui est vôtre — s'il vous faut des données ou l'accord d'un collègue, dites exactement ce que vous lui demanderez.",
  "ps.h.c6": "Joignez un exemple anonymisé, ou expliquez pourquoi vous ne pouvez pas.",
  "ps.h.generic": "Lisez-le à voix haute comme à un·e nouveau·velle collègue — chaque phrase doit nous apprendre quelque chose d'exploitable.",
  "ps.h.done": "Prêt — publiez-le sur #all-amplify, et répondez à deux camarades.",
  "ws.weak.t": "Une réponse faible",
  "ws.weak.q": "« La gestion des données est un grand défi dans notre programme. Les rapports arrivent souvent en retard et il y a beaucoup d'erreurs. L'IA peut nous aider à améliorer la qualité et l'efficacité des données. »",
  "ws.weak.v": "Quelles données ? Quel rapport ? Combien de retard ? Rien sur quoi construire un projet.",
  "ws.strong.t": "Une réponse solide (abrégée)",
  "ws.strong.q": "« Tâche : compiler les fichiers de traitement CPM de 38 districts en un rapport national annuel — fichiers Excel, photos WhatsApp, appels. Il nous faut environ trois semaines par an avec un agent de données. L'an dernier, un district a rapporté 112 % de couverture et je ne l'ai repéré qu'après l'envoi du graphique à un partenaire ; nous avons envoyé une correction et dépassé la date limite de trois semaines. »",
  "ws.strong.v": "Une tâche nommée, des occasions réelles, des chiffres, des conséquences — on peut construire là-dessus.",
  "mvp.t": "Pensez « produit minimum viable »",
  "mvp.d": "Votre énoncé du problème n'a pas à être parfait — il doit fonctionner, et vous devez comprendre pourquoi et comment il fonctionne. Nous l'affinons à chaque cours ; chacun vous rapproche d'une solution.",
  "pb.t": "Ce n'est pas encore le cas ? Utilisez le Problem Builder",
  "pb.d": "L'AMPLIFY Problem Builder est un coach IA pour votre énoncé : il critique votre brouillon, pose les questions de suivi et note votre état de préparation. Exportez le résultat et collez-le dans le formulaire officiel.",
  "pb.cta": "Ouvrir le Problem Builder →",

  "prompt.h2": "5 · L'art du prompt parfait",
  "prompt.lead": "Avant qu'un outil ne compte, ceci compte. L'IA ne lit pas dans votre tête — vague en entrée, vague en sortie. Considérez Claude comme un·e collègue brillant·e qui n'a jamais vu votre programme : il lui faut une direction, du contexte et une définition claire de « terminé ».",
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

  "homework.h2": "Devoirs — à rendre avant le cours 2",
  "homework.sub": "Quatre étapes, toutes sur Slack. Le cours 2 commence par la présentation de l'un ou de l'une d'entre vous.",
  "hw.1.t": "Présentez-vous sur #all-amplify",
  "hw.1.d": "Nom, rôle, pays — et une phrase sur le problème sur lequel vous travaillez.",
  "hw.2.t": "Publiez votre problème",
  "hw.2.d": "Collez votre énoncé du problème — du formulaire, ou exporté depuis le Problem Builder.",
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

  "ft.credit": "AMPLIFY 2027 · Sightsavers × ESPEN · Cohorte 2",
  "ft.note": "Cette page est elle-même une démo du cours 1 : un simple fichier HTML, sans serveur. Regardez son code source et apportez vos questions en classe.",
  "ft.link1": "Problem Builder", "ft.link2": "Télécharger Claude",
  "ft.link3": "Centre d'aide Slack", "ft.link4": "Aide Google Meet",

  "quiz.channel.title": "Test de compétences — Où va ce message ?",
  "quiz.channel.sub": "Cinq messages viennent d'arriver. Choisissez la bonne maison pour chacun.",
  "quiz.redline.title": "Test de compétences — Peut-on l'envoyer ?",
  "quiz.redline.sub": "Cinq choses que quelqu'un veut coller dans Claude. Autorisé, ou ligne rouge ?",
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
    { q: bi("Anonymised district coverage numbers, downloaded from the public ESPEN portal.", "Des chiffres de couverture par district anonymisés, téléchargés depuis le portail public ESPEN."),
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
    { q: bi("A published WHO guideline PDF.", "Le PDF d'une directive OMS publiée."),
      opts: [SAFE_OPT, REDLINE_OPT], correct: 0,
      expl: bi("Published, public, safe.", "Publié, public, sans risque.") },
  ],
},
missing: {
  title: "quiz.missing.title", sub: "quiz.missing.sub",
  questions: [
    { q: bi("\"Summarize this 20-page WHO guideline in simple words for community volunteers, in three short paragraphs.\"", "« Résume cette directive OMS de 20 pages en mots simples pour des agents communautaires, en trois courts paragraphes. »"),
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
const LS_KEY = "c1_state_v1";
const DEFAULTS = () => ({
  lang: "en",
  checks: {},                                   // setup checklist ids → 1
  ps: {},                                      // self-check ids → 1
  quizzes: { channel: {}, redline: {}, missing: {} }, // q index → 1
  ba: "bad",
  builder: { P: "", T: "", C: "", F: "", I: "" },
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
  $("#ring-label").textContent = n + "/" + CHECK_IDS.length;
  $("#ring-label-big").textContent = n + "/" + CHECK_IDS.length;
}

/* ---------------------------------------------------------------- nav skill-checks chip */
const QUIZ_IDS = ["channel", "redline", "missing"];
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
  const def = QUIZZES[id];
  const st = S.quizzes[id];
  const done = def.questions.filter((_, i) => st[i]).length;
  const all = done === def.questions.length;
  const el = $("#quiz-" + id);
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
    $("#quiz-" + id).addEventListener("click", (e) => {
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
  $("#timeline").innerHTML = TIMELINE.map((verb, i) =>
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
  $$('input[data-ps]').forEach((box) => { box.checked = !!S.ps[box.dataset.ps]; });
}
function updatePsMeter() {
  const n = PS_IDS.filter((id) => S.ps[id]).length;
  const full = n === PS_IDS.length;
  $("#ps-score").textContent = n + "/" + PS_IDS.length;
  $("#ps-score").classList.toggle("full", full);
  $("#ps-label").classList.toggle("full", full);
  $("#ps-label").textContent = t(full ? "ps.ready" : "ps.keep");
  const firstMissing = PS_IDS.find((id) => !S.ps[id]);
  const specific = firstMissing && (DICT[S.lang]["ps.h." + firstMissing] || DICT.en["ps.h." + firstMissing]);
  $("#ps-hint").textContent = full ? t("ps.h.done") : t(specific ? "ps.h." + firstMissing : "ps.h.generic");
}

/* ---------------------------------------------------------------- prompt builder */
function renderBuilderOut() {
  const out = $("#builder-out");
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
  const links = $$(".mainnav a");
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
  wireSpots();
  wireQuizzes();
  wireScroll();
  renderDynamic();
  updateRings();
}

init();