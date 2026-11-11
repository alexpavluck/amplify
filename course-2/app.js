/* AMPLIFY 2027 · Interactive learning session 2 — Chat vs agents & prompts to skills.
   Mirrors course-1/app.js architecture: localStorage state, EN/FR dictionary,
   quizzes, live builder, scroll-based "sections read" tracking, HTML export file. */
"use strict";

const bi = (en, fr) => ({ en, fr });

/* ---------------------------------------------------------------- dictionary */
const DICT = {
en: {
  "brand.title": "AMPLIFY 2027",
  "brand.tagline": "Interactive learning session 2 · Chat vs agents — Sightsavers",
  "nav.ring": "skill checks",
  "nav.idea": "The big idea", "nav.which": "Which Claude?", "nav.skills": "Prompts to skills",
  "nav.problem": "Your problem", "nav.homework": "Homework",
  "nav.checks": "Skill checks",

  "hero.kicker": "Sightsavers · Cohort 2 · 2027",
  "hero.title": "Interactive learning session 2 — Chat, Cowork or Code?",
  "hero.lead": "All three run the same Claude models — none is \"smarter\". What changes is where Claude can act, and how long it keeps going without you. This class you learn to pick the right hands for the job, and to stop retyping your best prompts by turning them into skills.",
  "hero.chip.freq": "Every 2 weeks", "hero.chip.dur": "90 minutes", "hero.chip.meet": "Google Meet",
  "hero.chip.count": "Class 2 of 8",
  "hero.note": "This page is part of the course. Everything here is interactive — switch languages at the top, pass the two skill checks, build a skill, and answer the questions about your own problem. Your progress is saved in your browser only.",

  "idea.h2": "1 · Same brain, different hands",
  "idea.lead": "The question is never \"which one is best\" — it is who does the follow-through work: you, or Claude.",
  "idea.chat.t": "Chat — talks it through with you",
  "idea.chat.d": "Think, draft, explain, analyse uploaded files, make quick artifacts. Can use connectors (MCP). You carry the results back to where the work lives.",
  "idea.chat.a": "Like a consultant on the phone.",
  "idea.cowork.t": "Cowork — works in your files",
  "idea.cowork.d": "Runs in the Claude desktop app. Reads, creates and reorganises files in a folder you choose, across documents, spreadsheets and slides. Plans, acts and checks while you do something else.",
  "idea.cowork.a": "Like an assistant at your desk.",
  "idea.code.t": "Code — builds and runs things",
  "idea.code.d": "A tab in the desktop app, or the command line. Writes and runs scripts, builds web pages and automations that rerun next month without starting over. Awareness level for this course — no coding needed.",
  "idea.code.a": "Like an engineer with keys to the workshop.",
  "idea.pole.t": "Read it like an ivermectin dose pole",
  "idea.pole.d": "The medicine is the same, and the dose goes up with the size of the job. Chat makes you the courier. Cowork does the errand. Code builds a machine that runs the errand again.",
  "idea.mcp.t": "One plug, three sockets",
  "idea.mcp.d": "Connectors (MCP) are shared plumbing: the same connector works in Chat, Cowork and Code. What differs is what the tool does with the data — an answer, a document on disk, or a pipeline that reruns. You will connect them yourself in session 4.",
  "idea.safe.t": "A word of safety",
  "idea.safe.d": "Cowork and Code change files. Practise on copies, never on real programme data — and when either tool asks permission before acting, read the whole message before you allow it.",

  "which.h2": "2 · Which Claude for the job?",
  "which.lead": "Two skill checks, straight from the live class. First: guess which tool produced each real output. Then: pick a tool for twelve programme scenarios — some have more than one defensible answer.",
  "q.guess.t": "Skill check 1 — Guess the Claude",
  "q.guess.sub": "Each output below came from one tool in the live class. Which one? Most people credit Chat for everything — that wrong guess is the point.",
  "q.pick.t": "Skill check 2 — Pick your Claude",
  "q.pick.sub": "A programme task lands on your desk. Which tool do you open? Items marked as debates have more than one defensible answer — the explanation says why.",

  "skills.h2": "3 · Turn a prompt into a skill",
  "skills.lead": "You already know the pattern from session 1: refine a prompt until it reliably gives you what you want. A skill is that refined prompt, saved with a name and a trigger so Claude can use it again — and again — without being re-taught.",
  "skills.what.t": "What a skill is",
  "skills.what.d": "A skill is a small folder with a SKILL.md file inside: a name, a one-line description of when to use it, and the instructions that follow. Claude loads it when its job matches the description, so good descriptions matter more than clever instructions.",
  "sb.t": "Skill builder — draft your first skill",
  "sb.hint": "Fill the three parts and watch the SKILL.md file assemble. Three sentences of instructions beat three paragraphs.",
  "sb.l1": "N", "sb.l2": "W", "sb.l3": "I",
  "sb.name": "Name", "sb.name.ph": "monthly-district-report",
  "sb.when": "When to use it", "sb.when.ph": "When I need to merge district reports into the national template…",
  "sb.body": "Instructions", "sb.body.ph": "1. Check every district is present and spelled as in the master list…",
  "sb.copy": "Copy SKILL.md",
  "sb.empty": "(fill the three parts on the left)",
  "skills.make.t": "Make one from a prompt you already have",
  "skills.make.s1": "Open your Claude project and reread your session 1 problem statement.",
  "skills.make.s2": "Find one step in that problem you repeat every week or month — that repetition is your skill candidate.",
  "skills.make.s3": "Take the prompt you use for it, fill the builder above, and copy the result.",
  "skills.make.s4": "In Claude, ask: \"Save this as a skill called [name]\" and paste your SKILL.md. Then run the task once using the skill.",
  "skills.borrow.t": "Borrow before you build",
  "skills.borrow.d": "Skills are shared — search GitHub and the Claude skills directories for someone else's before writing your own. Read the SKILL.md first: a skill is instructions to an AI, so only use one whose instructions you could defend if asked. The red lines from session 1 still apply: never put restricted data into an untrusted skill.",

  "problem.h2": "4 · Your problem — which Claude, which skill?",
  "problem.lead": "Take the problem statement you drafted in session 1 and look at it with this session's eyes. Open answers — your instructors read them, so write for them.",
  "app.stmt.t": "Your problem statement from session 1",
  "app.stmt.hint": "Paste in your problem statement.",
  "app.stmt.l": "Problem statement",
  "app.q1.t": "Question 1",
  "app.q1.q": "Which Claude would you use for this problem — and why?",
  "app.q1.legend": "Pick a tool",
  "app.tool.chat": "Chat", "app.tool.cowork": "Cowork", "app.tool.code": "Code",
  "app.q1.why": "Why — what about the problem (files? repetition? one-off thinking?) points at that tool?",
  "app.q2.t": "Question 2",
  "app.q2.q": "Would a skill help? If so, for what?",
  "app.q2.l": "Is there a repeating step in your problem a skill could take on? Name the step, or say honestly if nothing repeats yet.",

  "ex.t": "Download your session 2 file",
  "ex.d": "Your instructors review this file and give you feedback on Slack. It shows that you read the page, passed the skill checks, and what you answered above.",
  "ex.s1": "Question 1 · Which Claude",
  "ex.s2": "Question 2 · Skills",
  "ex.name": "Your name", "ex.name.ph": "First and last name",
  "ex.missing": "Some questions aren't finished yet — the file will show them as incomplete.",
  "ex.btn": "Download my session 2 file",
  "ex.note": "Saves a web page (.html). Open it in any browser to check it, then post it on Slack as your homework.",
  "ex.done": "done", "ex.todo": "not finished",
  "ex.toast": "Session 2 file downloaded.",

  "seen.label": "Full page · all sections read",
  "seen.full": "all sections read",
  "seen.sections": "sections read",
  "seen.rep.note": "Marked automatically as each section of this learning page is scrolled through.",
  "seen.rep.count": "Sections read",
  "skill.rep.completed": "completed",

  "rep.title": "Session 2 file",
  "rep.sub": "Interactive learning session 2 — Chat vs agents & prompts to skills",
  "rep.student": "Student", "rep.date": "Exported", "rep.empty": "(not filled in)",
  "rep.review": "Session 2 review",
  "rep.problem": "Your problem",
  "rep.stmt": "Problem statement",
  "rep.q1": "Which Claude for this problem — and why?",
  "rep.why": "Why",
  "rep.q2": "Would a skill help? If so, for what?",
  "rep.skill": "Skill drafted in the builder",
  "rep.foot": "Created on amplify-course.com. Post this file on Slack as your session 2 homework.",

  "homework.h2": "5 · Homework — due before Class 3",
  "homework.sub": "Three steps, all on Slack or in your Claude project.",
  "hw.1.t": "Post your session 2 file",
  "hw.1.d": "Upload it to your private channel, titled FirstNameLastName_Assignment2.",
  "hw.2.t": "Run your skill once",
  "hw.2.d": "Use the skill you drafted on your real problem, in your project, and post one line in the module channel about what worked or didn't.",
  "hw.3.t": "Reply to one classmate",
  "hw.3.d": "If their tool choice surprises you, say why — the debate is the exercise.",

  "faq.h": "Quick answers",
  "faq.q1": "Do I need a paid plan or special access?",
  "faq.a1": "Chat works on what you already have. Cowork and Code need a Pro, Max, Team or Enterprise plan — check yours before class and flag it in your Slack channel if it is missing.",
  "faq.q2": "Do I need to know how to code?",
  "faq.a2": "No. Claude Code is awareness-level on this course: you should know what it is for and what it can build, but you will never be asked to write code yourself.",
  "faq.q3": "Can I work in French?",
  "faq.a3": "Yes. Write your answers in whichever language you think in; instructors read both. (This page toggles with EN/FR at the top.)",

  "ft.credit": "AMPLIFY 2027 · Sightsavers · Cohort 2",
  "ft.note": "This page is a plain HTML file with no backend — your answers stay in your browser until you download them.",
  "ft.link0": "← Back to AMPLIFY", "ft.link1": "Session 1 page",
  "ft.link2": "Download Claude", "ft.link3": "Slack Help Center",

  "toast.copy": "Copied to clipboard.",
  "toast.quiz": "Skill check passed.",
  "q.try": "Try again — the right answer makes sense once you think about who does the follow-through.",
  "quiz.pass": "Skill check passed ✓",

  "tool.chat": "Chat", "tool.cowork": "Cowork", "tool.code": "Code", "tool.any": "Any of them",
},

fr: {
  "brand.title": "AMPLIFY 2027",
  "brand.tagline": "Session d'apprentissage interactive 2 · Chat vs agents — Sightsavers",
  "nav.ring": "tests",
  "nav.idea": "L'idée clé", "nav.which": "Quel Claude ?", "nav.skills": "Prompts → skills",
  "nav.problem": "Votre problème", "nav.homework": "Devoirs",
  "nav.checks": "Tests",

  "hero.kicker": "Sightsavers · Cohorte 2 · 2027",
  "hero.title": "Session d'apprentissage interactive 2 — Chat, Cowork ou Code ?",
  "hero.lead": "Les trois font tourner les mêmes modèles Claude — aucun n'est « plus intelligent ». Ce qui change, c'est où Claude peut agir, et combien de temps il continue sans vous. Dans ce cours, vous apprenez à choisir les bonnes mains pour la tâche, et à cesser de retaper vos meilleurs prompts en les transformant en skills.",
  "hero.chip.freq": "Toutes les 2 semaines", "hero.chip.dur": "90 minutes", "hero.chip.meet": "Google Meet",
  "hero.chip.count": "Cours 2 sur 8",
  "hero.note": "Cette page fait partie du cours. Tout est interactif — changez de langue en haut, réussissez les deux tests, construisez une skill et répondez aux questions sur votre propre problème. Votre progression est enregistrée uniquement dans ce navigateur.",

  "idea.h2": "1 · Même cerveau, mains différentes",
  "idea.lead": "La question n'est jamais « lequel est le meilleur » — c'est qui fait le travail de suivi : vous, ou Claude.",
  "idea.chat.t": "Chat — réfléchit avec vous",
  "idea.chat.d": "Penser, rédiger, expliquer, analyser des fichiers téléversés, créer des artifacts rapides. Peut utiliser des connecteurs (MCP). C'est vous qui rapportez les résultats là où le travail se fait.",
  "idea.chat.a": "Comme un consultant au téléphone.",
  "idea.cowork.t": "Cowork — travaille dans vos fichiers",
  "idea.cowork.d": "Fonctionne dans l'application de bureau Claude. Lit, crée et réorganise des fichiers dans un dossier que vous choisissez — documents, tableurs et diapositives. Planifie, agit et vérifie pendant que vous faites autre chose.",
  "idea.cowork.a": "Comme un assistant à votre bureau.",
  "idea.code.t": "Code — construit et exécute",
  "idea.code.d": "Un onglet de l'application de bureau, ou la ligne de commande. Écrit et exécute des scripts, construit des pages web et des automatisations qui se relancent le mois prochain sans repartir de zéro. Niveau sensibilisation pour ce cours — aucun code à écrire.",
  "idea.code.a": "Comme un ingénieur avec les clés de l'atelier.",
  "idea.pole.t": "Lisez-le comme une dose-tige à ivermectine",
  "idea.pole.d": "Le médicament est le même, et la dose augmente avec la taille de la tâche. Chat fait de vous le coursier. Cowork fait la course. Code construit une machine qui refera la course.",
  "idea.mcp.t": "Une prise, trois socles",
  "idea.mcp.d": "Les connecteurs (MCP) sont une plomberie partagée : le même connecteur fonctionne dans Chat, Cowork et Code. Ce qui diffère, c'est ce que l'outil fait des données — une réponse, un document sur le disque, ou un pipeline qui se relance. Vous les connecterez vous-même à la session 4.",
  "idea.safe.t": "Un mot de prudence",
  "idea.safe.d": "Cowork et Code modifient des fichiers. Entraînez-vous sur des copies, jamais sur de vraies données de programme — et quand l'un des deux demande une permission avant d'agir, lisez le message en entier avant d'autoriser.",

  "which.h2": "2 · Quel Claude pour la tâche ?",
  "which.lead": "Deux tests, tirés du cours en direct. D'abord : devinez quel outil a produit chaque résultat réel. Ensuite : choisissez un outil pour douze scénarios de programme — certains ont plus d'une réponse défendable.",
  "q.guess.t": "Test 1 — Devinez le Claude",
  "q.guess.sub": "Chaque résultat ci-dessous vient d'un seul outil en classe. Lequel ? La plupart des gens créditent Chat pour tout — c'est justement le piège.",
  "q.pick.t": "Test 2 — Choisissez votre Claude",
  "q.pick.sub": "Une tâche de programme arrive sur votre bureau. Quel outil ouvrez-vous ? Les items marqués comme débats ont plus d'une réponse défendable — l'explication dit pourquoi.",

  "skills.h2": "3 · Transformez un prompt en skill",
  "skills.lead": "Vous connaissez déjà la méthode depuis la session 1 : affinez un prompt jusqu'à ce qu'il donne fiablement ce que vous voulez. Une skill, c'est ce prompt affiné, enregistré avec un nom et un déclencheur pour que Claude puisse le réutiliser — encore et encore — sans nouvelle explication.",
  "skills.what.t": "Qu'est-ce qu'une skill",
  "skills.what.d": "Une skill est un petit dossier contenant un fichier SKILL.md : un nom, une description d'une ligne indiquant quand l'utiliser, et les consignes à suivre. Claude la charge quand sa tâche correspond à la description — une bonne description compte donc plus que des consignes astucieuses.",
  "sb.t": "Constructeur de skill — rédigez votre première",
  "sb.hint": "Remplissez les trois parties et regardez le fichier SKILL.md s'assembler. Trois phrases de consignes valent mieux que trois paragraphes.",
  "sb.l1": "N", "sb.l2": "Q", "sb.l3": "I",
  "sb.name": "Nom", "sb.name.ph": "rapport-mensuel-district",
  "sb.when": "Quand l'utiliser", "sb.when.ph": "Quand je dois fusionner les rapports des districts dans le modèle national…",
  "sb.body": "Consignes", "sb.body.ph": "1. Vérifier que chaque district est présent et orthographié comme dans la liste de référence…",
  "sb.copy": "Copier le SKILL.md",
  "sb.empty": "(remplissez les trois parties à gauche)",
  "skills.make.t": "Fabriquez-en une à partir d'un prompt existant",
  "skills.make.s1": "Ouvrez votre projet Claude et relisez votre énoncé de problème de la session 1.",
  "skills.make.s2": "Repérez une étape de ce problème que vous répétez chaque semaine ou chaque mois — cette répétition est votre candidate.",
  "skills.make.s3": "Prenez le prompt que vous utilisez pour elle, remplissez le constructeur ci-dessus, puis copiez le résultat.",
  "skills.make.s4": "Dans Claude, demandez : « Enregistre ceci comme une skill nommée [nom] » et collez votre SKILL.md. Lancez ensuite la tâche une fois en utilisant la skill.",
  "skills.borrow.t": "Empruntez avant de construire",
  "skills.borrow.d": "Les skills se partagent — cherchez sur GitHub et dans les répertoires de skills Claude celle de quelqu'un d'autre avant d'écrire la vôtre. Lisez d'abord le SKILL.md : une skill est un jeu de consignes pour une IA, n'utilisez que celles que vous pourriez défendre si on vous les demandait. Les lignes rouges de la session 1 restent valables : jamais de données sensibles dans une skill non fiable.",

  "problem.h2": "4 · Votre problème — quel Claude, quelle skill ?",
  "problem.lead": "Reprenez l'énoncé de problème rédigé à la session 1 et regardez-le avec les yeux de cette session. Réponses ouvertes — vos formateurs les lisent, écrivez donc pour eux.",
  "app.stmt.t": "Votre énoncé de problème de la session 1",
  "app.stmt.hint": "Collez votre énoncé de problème.",
  "app.stmt.l": "Énoncé de problème",
  "app.q1.t": "Question 1",
  "app.q1.q": "Quel Claude utiliseriez-vous pour ce problème — et pourquoi ?",
  "app.q1.legend": "Choisissez un outil",
  "app.tool.chat": "Chat", "app.tool.cowork": "Cowork", "app.tool.code": "Code",
  "app.q1.why": "Pourquoi — qu'est-ce dans le problème (des fichiers ? de la répétition ? une réflexion ponctuelle ?) qui pointe vers cet outil ?",
  "app.q2.t": "Question 2",
  "app.q2.q": "Une skill aiderait-elle ? Si oui, pour quoi ?",
  "app.q2.l": "Y a-t-il une étape répétitive dans votre problème qu'une skill pourrait prendre en charge ? Nommez l'étape, ou dites honnêtement si rien ne se répète encore.",

  "ex.t": "Téléchargez votre fichier session 2",
  "ex.d": "Vos formateurs examinent ce fichier et vous font un retour sur Slack. Il montre que vous avez lu la page, réussi les tests, et ce que vous avez répondu ci-dessus.",
  "ex.s1": "Question 1 · Quel Claude",
  "ex.s2": "Question 2 · Skills",
  "ex.name": "Votre nom", "ex.name.ph": "Prénom et nom",
  "ex.missing": "Certaines questions ne sont pas terminées — le fichier les indiquera comme incomplètes.",
  "ex.btn": "Télécharger mon fichier session 2",
  "ex.note": "Enregistre une page web (.html). Ouvrez-la dans n'importe quel navigateur pour la vérifier, puis publiez-la sur Slack comme devoir.",
  "ex.done": "terminé", "ex.todo": "à finir",
  "ex.toast": "Fichier session 2 téléchargé.",

  "seen.label": "Page entière · toutes les sections",
  "seen.full": "toutes les sections lues",
  "seen.sections": "sections lues",
  "seen.rep.note": "Marqué automatiquement au fil du défilement de chaque section de cette page.",
  "seen.rep.count": "Sections lues",
  "skill.rep.completed": "terminés",

  "rep.title": "Fichier session 2",
  "rep.sub": "Session d'apprentissage interactive 2 — Chat vs agents & prompts → skills",
  "rep.student": "Participant·e", "rep.date": "Exporté le", "rep.empty": "(non rempli)",
  "rep.review": "Revue de la session 2",
  "rep.problem": "Votre problème",
  "rep.stmt": "Énoncé de problème",
  "rep.q1": "Quel Claude pour ce problème — et pourquoi ?",
  "rep.why": "Pourquoi",
  "rep.q2": "Une skill aiderait-elle ? Si oui, pour quoi ?",
  "rep.skill": "Skill rédigée dans le constructeur",
  "rep.foot": "Créé sur amplify-course.com. Publiez ce fichier sur Slack comme devoir de la session 2.",

  "homework.h2": "5 · Devoirs — à rendre avant le cours 3",
  "homework.sub": "Trois étapes, sur Slack ou dans votre projet Claude.",
  "hw.1.t": "Publiez votre fichier session 2",
  "hw.1.d": "Téléversez-le dans votre canal privé, sous le nom PrénomNom_Devoir2.",
  "hw.2.t": "Lancez votre skill une fois",
  "hw.2.d": "Utilisez la skill que vous avez rédigée sur votre vrai problème, dans votre projet, puis postez une ligne dans le canal du module sur ce qui a marché ou non.",
  "hw.3.t": "Répondez à un camarade",
  "hw.3.d": "Si son choix d'outil vous surprend, dites pourquoi — le débat est l'exercice.",

  "faq.h": "Réponses rapides",
  "faq.q1": "Faut-il un abonnement payant ou un accès spécial ?",
  "faq.a1": "Chat fonctionne avec ce que vous avez déjà. Cowork et Code demandent un forfait Pro, Max, Team ou Enterprise — vérifiez le vôtre avant le cours et signalez-le dans votre canal Slack s'il manque.",
  "faq.q2": "Faut-il savoir coder ?",
  "faq.a2": "Non. Claude Code est au niveau sensibilisation dans ce cours : vous devez savoir à quoi il sert et ce qu'il peut construire, mais on ne vous demandera jamais d'écrire du code vous-même.",
  "faq.q3": "Puis-je travailler en français ?",
  "faq.a3": "Oui. Rédigez vos réponses dans la langue dans laquelle vous pensez ; les formateurs lisent les deux. (Cette page bascule avec EN/FR en haut.)",

  "ft.credit": "AMPLIFY 2027 · Sightsavers · Cohorte 2",
  "ft.note": "Cette page est un simple fichier HTML sans serveur — vos réponses restent dans votre navigateur jusqu'au téléchargement.",
  "ft.link0": "← Retour à AMPLIFY", "ft.link1": "Page de la session 1",
  "ft.link2": "Télécharger Claude", "ft.link3": "Aide Slack",

  "toast.copy": "Copié dans le presse-papiers.",
  "toast.quiz": "Test réussi.",
  "q.try": "Réessayez — la bonne réponse devient évidente quand on pense à qui fait le suivi.",
  "quiz.pass": "Test réussi ✓",

  "tool.chat": "Chat", "tool.cowork": "Cowork", "tool.code": "Code", "tool.any": "Les trois",
},
};

/* ---------------------------------------------------------------- quizzes */
const QUIZZES = {
guess: {
  title: "q.guess.t", sub: "q.guess.sub",
  questions: [
    { q: bi("A WhatsApp reminder to community drug distributors about MDA day, in Swahili and English.", "Un rappel WhatsApp aux distributeurs communautaires de médicaments pour le jour de la TDM, en swahili et en anglais."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 0,
      expl: bi("Chat. Pure drafting — nothing needs to touch a file.", "Chat. Pure rédaction — rien ne touche à un fichier.") },
    { q: bi("400 phone photos of tally sheets, renamed District_Village_Date.jpg and sorted into district folders.", "400 photos de fiches de pointage prises au téléphone, renommées District_Village_Date.jpg et triées dans des dossiers par district."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 1,
      expl: bi("Cowork. It works directly on files in a local folder, so you don't drag anything anywhere.", "Cowork. Il agit directement sur les fichiers d'un dossier local — rien à glisser nulle part.") },
    { q: bi("A plain-language poster explaining ivermectin side effects for a community meeting.", "Une affiche en langage simple expliquant les effets secondaires de l'ivermectine pour une réunion communautaire."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 0,
      expl: bi("Chat. Made as an in-chat artifact — Chat makes visual things too.", "Chat. Réalisée en artifact dans la conversation — Chat sait aussi faire du visuel.") },
    { q: bi("A stock reconciliation workbook built from 12 district Excel files, plus a Word memo listing the errors it found.", "Un classeur de rapprochement des stocks construit à partir de 12 fichiers Excel de district, plus une note Word listant les erreurs trouvées."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 1,
      expl: bi("Cowork. It opens many files, reconciles them and saves new documents next to them.", "Cowork. Il ouvre de nombreux fichiers, les rapproche et enregistre de nouveaux documents à côté.") },
    { q: bi("A script that checks every new ODK submission for coverage over 100% and posts an alert in the team's Slack.", "Un script qui vérifie chaque nouvelle soumission ODK pour les couvertures supérieures à 100 % et poste une alerte dans le Slack de l'équipe."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 2,
      expl: bi("Code. A program that runs again and again without anyone asking.", "Code. Un programme qui tourne encore et encore sans que personne ne le demande.") },
    { q: bi("A coverage dashboard web page that rebuilds itself every Monday from the shared drive.", "Une page web de tableau de bord de couverture qui se reconstruit chaque lundi à partir du lecteur partagé."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 2,
      expl: bi("Code. Building, running and scheduling are Code's home ground.", "Code. Construire, exécuter et planifier, c'est son terrain.") },
    { q: bi("A summary of LF endemicity and MDA status for three countries, pulled live from ESPEN.", "Une synthèse de l'endémie LF et du statut TDM de trois pays, extraite en direct d'ESPEN."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code"), bi("Any of them","Les trois")], correct: 3,
      expl: bi("Trick question: any of them. With an MCP connector, even Chat can pull live data — connectors are shared plumbing.", "Piège : les trois. Avec un connecteur MCP, même Chat peut extraire des données en direct — les connecteurs sont une plomberie partagée.") },
  ],
},
pick: {
  title: "q.pick.t", sub: "q.pick.sub",
  questions: [
    { q: bi("Draft a radio script for parents about why school children are taking praziquantel.", "Rédiger un script radio pour les parents expliquant pourquoi les écoliers prennent du praziquantel."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 0,
      expl: bi("Chat. Drafting only, no files involved.", "Chat. De la rédaction pure, aucun fichier en jeu.") },
    { q: bi("Rename and sort 400 tally-sheet photos from a phone dump into district folders.", "Renommer et trier 400 photos de fiches de pointage, vidées d'un téléphone, dans des dossiers par district."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 1,
      expl: bi("Cowork. A file errand on your own machine.", "Cowork. Une course de fichiers sur votre propre machine.") },
    { q: bi("Every Monday, pull new ODK submissions, flag villages under 65%, and email the district focal person.", "Chaque lundi, extraire les nouvelles soumissions ODK, signaler les villages sous 65 % et envoyer un courriel au point focal de district."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 2,
      expl: bi("Code. It recurs, it's scheduled, and it runs without you.", "Code. C'est récurrent, planifié, et ça tourne sans vous.") },
    { q: bi("Explain the difference between epidemiological and programme coverage to a new data officer.", "Expliquer la différence entre couverture épidémiologique et couverture programme à un nouveau chargé de données."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 0,
      expl: bi("Chat. Teaching and explaining.", "Chat. Enseigner et expliquer.") },
    { q: bi("Combine 14 district Excel workbooks with different layouts into one provincial summary and a Word memo. (Debate)", "Fusionner 14 classeurs Excel de district aux mises en page différentes en une synthèse provinciale et une note Word. (Débat)"),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 1,
      expl: bi("Cowork for a one-off — it reads and merges files in place. If you must do it every quarter, Code starts to win: write the merger once, rerun forever.", "Cowork en ponctuel — il lit et fusionne les fichiers sur place. Si c'est tous les trimestres, Code prend l'avantage : écrire la fusion une fois, la relancer pour toujours.") },
    { q: bi("Make a shareable trachoma TT surgery backlog dashboard the team can open on their phones. (Debate)", "Créer un tableau de bord partageable du backlog chirurgical TT, consultable sur téléphone. (Débat)"),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 0,
      expl: bi("Chat artifact for a quick snapshot. Choose Code if it must stay live and update itself.", "Artifact Chat pour une photo instantanée. Choisissez Code s'il doit rester en ligne et se mettre à jour seul.") },
    { q: bi("Pull ESPEN endemicity data for three countries and compare where MDA needs to scale up. (Debate)", "Extraire les données d'endémie ESPEN de trois pays et comparer où la TDM doit monter en puissance. (Débat)"),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code"), bi("Any of them","Les trois")], correct: 3,
      expl: bi("Any, with a connector — choose by what you need next: an answer, a report, or a pipeline.", "Les trois, avec un connecteur — choisissez selon ce qu'il vous faut ensuite : une réponse, un rapport ou un pipeline.") },
    { q: bi("Turn a 60-page Joint Application Package guidance PDF into a one-page checklist.", "Transformer un guide PDF de 60 pages (Joint Application Package) en une page de checklist."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 0,
      expl: bi("Chat. Upload it and ask.", "Chat. Téléversez et demandez.") },
    { q: bi("Check the stock ledger arithmetic in all 12 district files on your laptop and fix the errors.", "Vérifier les calculs des registres de stock dans les 12 fichiers de district sur votre ordinateur, et corriger les erreurs."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 1,
      expl: bi("Cowork. It reads, checks and edits many files in place.", "Cowork. Il lit, vérifie et corrige de nombreux fichiers sur place.") },
    { q: bi("Build and test a small tool that turns ivermectin dose-pole height bands into tablet counts for a mobile form.", "Construire et tester un petit outil qui convertit les hauteurs de la dose-tige à ivermectine en nombres de comprimés pour un formulaire mobile."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 2,
      expl: bi("Code. Software that needs building and testing.", "Code. Un logiciel à construire et à tester.") },
    { q: bi("Prepare slides for the provincial review from the cleaned data folder. (Debate)", "Préparer les diapositives de la revue provinciale à partir du dossier de données nettoyées. (Débat)"),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 1,
      expl: bi("Cowork, because the data lives in a folder. Chat is fine if you upload a summary instead.", "Cowork, car les données vivent dans un dossier. Chat convient si vous téléversez un résumé à la place.") },
    { q: bi("Brainstorm why oncho coverage dropped in one district this year.", "Réfléchir à pourquoi la couverture oncho a baissé dans un district cette année."),
      opts: [bi("Chat","Chat"), bi("Cowork","Cowork"), bi("Code","Code")], correct: 0,
      expl: bi("Chat. A thinking partner.", "Chat. Un partenaire de réflexion.") },
  ],
},
};
const QUIZ_IDS = Object.keys(QUIZZES);

/* ---------------------------------------------------------------- state */
const LS_KEY = "c2_state_v1";
const DEFAULTS = () => ({
  lang: "en",
  quizzes: { guess: {}, pick: {} },
  sb: { name: "", when: "", body: "" },
  apply: { name: "", statement: "", tool: "", why: "", skills: "" },
  seen: {},
});
let S = DEFAULTS();

function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { /* private mode */ }
}
function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    S = Object.assign(DEFAULTS(), raw);
    S.sb = Object.assign(DEFAULTS().sb, (raw && raw.sb) || {});
    S.apply = Object.assign(DEFAULTS().apply, (raw && raw.apply) || {});
    S.seen = Object.assign({}, (raw && raw.seen) || {});
    S.quizzes = {};
    for (const id of Object.keys(QUIZZES)) S.quizzes[id] = Object.assign({}, raw && raw.quizzes && raw.quizzes[id]);
  } catch { S = DEFAULTS(); }
}

// session 1 lives on the same site/origin — reuse the student's name and problem statement
function fromSession1() {
  try {
    const c1 = JSON.parse(localStorage.getItem("c1_state_v2") || "{}");
    const s = (c1 && c1.seed) || {};
    return { name: String(s.name || "").trim(), statement: String(s.statement || "").trim() };
  } catch { return { name: "", statement: "" }; }
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
async function copyText(txt) {
  try { await navigator.clipboard.writeText(txt); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = txt; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch {}
    ta.remove();
  }
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

/* ---------------------------------------------------------------- nav skill-checks chip + ring */
function quizPassed(id) {
  return QUIZZES[id].questions.every((_, i) => S.quizzes[id][i]);
}
function skillChecks() {
  const passed = QUIZ_IDS.filter(quizPassed).length;
  return { passed, total: QUIZ_IDS.length };
}
function updateNavChecks() {
  const n = skillChecks();
  const el = $("#nav-checks");
  el.textContent = t("nav.checks") + " " + n.passed + "/" + n.total;
  el.classList.toggle("done", n.passed === n.total);
}
function updateRings() {
  const n = skillChecks();
  const frac = n.total ? n.passed / n.total : 0;
  const C = 2 * Math.PI * 17;
  const ring = $("#ring-fg");
  if (ring) { ring.style.strokeDasharray = C; ring.style.strokeDashoffset = C * (1 - frac); }
  const label = $("#ring-label");
  if (label) label.textContent = n.passed + "/" + n.total;
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
        '<p class="q-expl' + (answered ? " show" : "") + '">' + esc(v(q.expl)) + "</p>" +
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
      const btn = e.target.closest(".q-opt"); if (!btn || btn.disabled) return;
      const item = e.target.closest(".q-item"); if (!item) return;
      const i = +item.dataset.q, j = +btn.dataset.opt;
      const q = QUIZZES[id].questions[i];
      if (j === q.correct) {
        S.quizzes[id][i] = 1;
        save();
        renderQuiz(id);
        updateNavChecks();
        updateRings();
        if (quizPassed(id)) showToast("✓ " + t("toast.quiz"));
      } else {
        btn.classList.add("wrong");
        item.querySelector(".q-try").classList.add("show");
        setTimeout(() => btn.classList.remove("wrong"), 600);
      }
    });
  });
}

/* ---------------------------------------------------------------- skill builder */
function skillMd() {
  const s = S.sb;
  const name = s.name.trim() || "my-skill";
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "my-skill";
  const when = s.when.trim() || "…";
  const body = s.body.trim() || "…";
  return "---\nname: " + slug + "\ndescription: " + when + "\n---\n\n# " + slug + "\n\n" + body + "\n";
}
function renderBuilder() {
  const out = $("#builder-out"); if (!out) return;
  const s = S.sb;
  const filled = s.name.trim() && s.when.trim() && s.body.trim();
  out.textContent = filled ? skillMd() : t("sb.empty");
}
function wireBuilder() {
  [["sb-name", "name"], ["sb-when", "when"], ["sb-body", "body"]].forEach(([id, k]) => {
    const inp = $("#" + id); if (!inp) return;
    inp.value = S.sb[k] || "";
    inp.addEventListener("input", () => { S.sb[k] = inp.value; save(); renderBuilder(); });
  });
  const copy = $("#builder-copy");
  if (copy) copy.addEventListener("click", async () => {
    await copyText(skillMd());
    showToast(t("toast.copy"));
  });
}

/* ---------------------------------------------------------------- your problem (open answers) */
const appVal = (k) => String(S.apply[k] || "").trim();
function appStepsDone() {
  return [
    !!S.apply.tool && !!appVal("why"),
    !!appVal("skills"),
  ];
}
function setupAppFromState() {
  $$("[data-app]").forEach((el) => {
    const k = el.dataset.app;
    if (el.type === "radio") el.checked = S.apply[k] === el.value;
    else el.value = S.apply[k] || "";
  });
}
function renderApp() {
  const done = appStepsDone();
  $$("[data-app-status]").forEach((el) => {
    const ok = done[+el.dataset.appStatus - 1];
    el.classList.toggle("ok", ok);
    el.querySelector(".st").textContent = ok ? "✓ " + t("ex.done") : t("ex.todo");
  });
  $("#app-missing").hidden = done.every(Boolean);
  const pageLi = $("[data-seen-page]");
  if (pageLi) {
    const pg = pageSeenData();
    pageLi.classList.toggle("ok", pg.complete);
    pageLi.querySelector(".st").textContent = pg.complete ? "✓ " + t("seen.full") : pg.seen + "/" + pg.total + " " + t("seen.sections");
  }
}
function wireApp() {
  const root = $("#problem"); if (!root) return;
  root.addEventListener("input", (e) => {
    const el = e.target.closest("[data-app]"); if (!el) return;
    S.apply[el.dataset.app] = el.value;
    save();
    renderApp();
  });
  root.addEventListener("change", (e) => {
    const el = e.target.closest("input[type=radio][data-app]"); if (!el) return;
    S.apply[el.dataset.app] = el.value;
    save();
    renderApp();
  });
  $("#app-export").addEventListener("click", exportSessionFile);
}

/* ---------------------------------------------------------------- page tracking */
function pageSections() {
  return $$("section.section[id]");
}
function pageSeenData() {
  const list = pageSections().map((sec) => ({
    id: sec.id,
    title: ((sec.querySelector("h2") || {}).textContent || sec.id).replace(/^\s*\d+\s*·\s*/, "").trim(),
    seen: !!S.seen[sec.id],
  }));
  const n = list.filter((x) => x.seen).length;
  return { sections: list, total: list.length, seen: n, complete: list.length > 0 && n === list.length };
}
function wirePageSeen() {
  const secs = pageSections();
  if (!secs.length) return;
  const stats = {};
  const MIN_DWELL = 900;
  let ticking = false, lastT = 0;
  function check() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const vh = window.innerHeight, now = performance.now();
      const dt = lastT ? Math.min(now - lastT, 2000) : 0;
      lastT = now;
      let dirty = false, pending = false;
      secs.forEach((sec) => {
        if (S.seen[sec.id]) return;
        const st = stats[sec.id] || (stats[sec.id] = { top: false, bottom: false, ms: 0 });
        const r = sec.getBoundingClientRect();
        const inView = r.top < vh && r.bottom > 0;
        if (inView) st.ms += dt;
        if (r.top >= 0 && r.top < vh) st.top = true;
        if (r.bottom > -40 && r.bottom <= vh + 120) st.bottom = true;
        if (st.top && st.bottom && st.ms >= MIN_DWELL) { S.seen[sec.id] = 1; dirty = true; }
        else if (inView) pending = true;
      });
      if (dirty) { save(); renderApp(); }
      if (pending && !check._t) check._t = setTimeout(() => { check._t = null; check(); }, 250);
    });
  }
  window.addEventListener("scroll", check, { passive: true });
  check();
}

/* ---------------------------------------------------------------- session file export */
function sessionFileData() {
  const a = S.apply, done = appStepsDone();
  return {
    format: "amplify-session-file", version: 1, session: 2,
    exportedAt: new Date().toISOString(), lang: S.lang,
    student: { name: a.name.trim() },
    stepsComplete: { tool: done[0], skills: done[1] },
    problem: {
      statement: appVal("statement"),
      tool: a.tool || null,
      why: appVal("why"),
      skills: appVal("skills"),
    },
    skill: { name: S.sb.name.trim(), when: S.sb.when.trim(), body: S.sb.body.trim(), md: skillMd() },
    page: pageSeenData(),
    skillChecks: skillChecks(),
  };
}
function sessionFileHtml(d) {
  const val = (x) => x ? '<div class="v">' + esc(x) + "</div>" : '<div class="v empty">' + esc(t("rep.empty")) + "</div>";
  const row = (label, x) => '<div class="row"><div class="k">' + esc(label) + "</div>" + val(x) + "</div>";
  const status = (ok) => '<span class="badge ' + (ok ? "ok" : "todo") + '">' + esc(ok ? "✓ " + t("ex.done") : t("ex.todo")) + "</span>";
  const date = new Date(d.exportedAt).toLocaleString(d.lang === "fr" ? "fr-FR" : "en-GB", { dateStyle: "long", timeStyle: "short" });
  const toolLabel = d.problem.tool ? t("app.tool." + d.problem.tool) : "";
  const skillDraft = (d.skill.name && d.skill.body)
    ? '<div class="row"><div class="k">' + esc(t("rep.skill")) + ' ("' + esc(d.skill.name) + '")</div>' +
      '<details><summary>SKILL.md</summary><pre>' + esc(d.skill.md) + "</pre></details></div>"
    : "";
  const json = JSON.stringify(d).replace(/</g, "\\u003c");
  return '<!doctype html><html lang="' + d.lang + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
    "<title>AMPLIFY 2027 · " + esc(t("rep.title")) + (d.student.name ? " · " + esc(d.student.name) : "") + "</title><style>" +
    ":root{--fg:#1d2433;--muted:#5d6678;--line:#dfe3ea;--accent:#2f55d4;--soft:#eef2fc;--ok:#1f7a4d;--warn:#a35a00}" +
    "*{box-sizing:border-box}body{margin:0;background:#f4f6f9;color:var(--fg);font:15px/1.55 system-ui,-apple-system,Segoe UI,sans-serif}" +
    "main{max-width:760px;margin:0 auto;padding:32px 16px 48px}header{border-bottom:2px solid var(--accent);padding-bottom:14px;margin-bottom:20px}" +
    ".eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}h1{margin:4px 0 2px;font-size:26px}" +
    ".meta{color:var(--muted);font-size:14px}.final{background:var(--soft);border:1px solid var(--accent);border-radius:10px;padding:14px 16px;margin:0 0 20px}" +
    ".final .k{font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--accent);font-weight:700}.final p{margin:6px 0 0;font-size:17px}" +
    "section{background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 16px;margin:0 0 14px}" +
    "h2{font-size:17px;margin:0 0 10px;display:flex;justify-content:space-between;gap:10px;align-items:baseline;flex-wrap:wrap}" +
    ".badge{font-size:12px;font-weight:600;padding:2px 10px;border-radius:999px}.badge.ok{background:#e3f4ea;color:var(--ok)}.badge.todo{background:#fdf0dd;color:var(--warn)}" +
    ".row{padding:8px 0;border-top:1px dotted var(--line)}.row:first-of-type{border-top:0}.k{font-size:13px;color:var(--muted);font-weight:600}" +
    ".v{white-space:pre-wrap;overflow-wrap:anywhere}.v.empty{color:var(--warn);font-style:italic}" +
    "details{margin-top:8px;font-size:13px;color:var(--muted)}pre{white-space:pre-wrap;background:#f4f6f9;border-radius:8px;padding:10px;font:13px/1.5 inherit}" +
    "footer{color:var(--muted);font-size:13px;margin-top:20px}@media print{body{background:#fff}details{display:none}}" +
    "</style></head><body><main><header><div class=\"eyebrow\">AMPLIFY 2027 · " + esc(t("rep.sub")) + "</div>" +
    "<h1>" + esc(t("rep.title")) + "</h1><div class=\"meta\">" + esc(t("rep.student")) + ": <strong>" + esc(d.student.name || t("rep.empty")) + "</strong> · " +
    esc(t("rep.date")) + ": " + esc(date) + "</div></header>" +
    (d.problem.statement
      ? '<div class="final"><div class="k">' + esc(t("rep.stmt")) + "</div><p>" + esc(d.problem.statement) + "</p></div>"
      : "") +
    "<section><h2>1 · " + esc(t("rep.review")) + status(d.page.complete && d.skillChecks.passed >= d.skillChecks.total) + "</h2>" +
    '<div class="meta">' + esc(t("seen.rep.note")) + "</div>" +
    row(t("seen.rep.count"), d.page.seen + "/" + d.page.total) +
    row(t("nav.checks"), d.skillChecks.passed + "/" + d.skillChecks.total + " " + t("skill.rep.completed")) + "</section>" +
    "<section><h2>2 · " + esc(t("rep.problem")) + status(d.stepsComplete.tool && d.stepsComplete.skills) + "</h2>" +
    row(t("rep.stmt"), d.problem.statement) +
    row(t("rep.q1"), toolLabel) + row(t("rep.why"), d.problem.why) +
    row(t("rep.q2"), d.problem.skills) +
    skillDraft + "</section>" +
    "<footer>" + esc(t("rep.foot")) + "</footer></main>" +
    '<script type="application/json" id="amplify-session-data">' + json + "</script></body></html>";
}
function exportSessionFile() {
  const d = sessionFileData();
  const slug = d.student.name.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "") || "student";
  const blob = new Blob([sessionFileHtml(d)], { type: "text/html;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "AMPLIFY-session2-file-" + slug + ".html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  showToast(t("ex.toast"));
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
  QUIZ_IDS.forEach(renderQuiz);
  renderBuilder();
  renderApp();
  updateNavChecks();
}

function init() {
  load();
  $("#lang-en").addEventListener("click", () => setLang("en"));
  $("#lang-fr").addEventListener("click", () => setLang("fr"));
  // session 1 hand-off: name + problem statement, only if the student hasn't typed their own yet
  const c1 = fromSession1();
  if (c1.name && !appVal("name")) S.apply.name = c1.name;
  if (c1.statement && !appVal("statement")) S.apply.statement = c1.statement;
  applyI18n();
  setupAppFromState();
  wireApp();
  wireBuilder();
  wireQuizzes();
  wireScroll();
  wirePageSeen();
  renderDynamic();
  updateRings();
}

init();
