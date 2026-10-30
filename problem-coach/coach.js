/* AMPLIFY Problem Coach — single-page app.
   State follows coach-framework/schema/brief.schema.json and lives in localStorage.
   Only "Check my answer" (/api/coach) and "Generate my brief" (/api/brief) need a connection. */
(function () {
  "use strict";

  const FW = window.COACH_FRAMEWORK;
  const CATALOG = FW.catalog;
  const CRITERIA = FW.criteria;
  const STORE_KEY = "amplify-problem-coach";
  const MAX_ROUNDS = 3;

  /* ───────────── i18n ───────────── */
  const T = {
    en: {
      skip: "Skip to content", "nav.sessions": "Sessions", "nav.problem": "Your problem",
      eyebrow: "AMPLIFY · Problem Coach",
      title: "Turn one real work problem into a brief you can build on.",
      "tools.save": "Download my progress", "tools.load": "Load saved progress", "tools.reset": "Start again",
      "foot.back": "Back to amplify-course.com",
      saved: "Saved on this device", step: "Step",
      stages: ["Welcome", "The problem", "Inputs", "Outputs", "Where it gets hard", "Fit & constraints", "Skills map", "Review & brief"],
      back: "Back", next: "Next", start: "Start",
      check: "Check my answer", checkAgain: "Check again", roundsLeft: (n) => `${n} of ${MAX_ROUNDS} checks left`,
      roundsDone: "Good enough to move on. You can refine this later in the course.",
      coachName: "Your coach", coachThinking: "Your coach is reading your answer…",
      coachIntro: "Write your answer first, then ask the coach to check it. The coach asks questions — it never writes your answer for you. You can move on at any time.",
      offlineErr: "Couldn't reach the coach. Your answer is saved. Try again or move on.",
      ready: "Ready to move on", needs_work: "Worth another look",
      whatWorks: "What works", improved: "Improved since last time", earlier: (n) => `Earlier feedback (${n})`,
      checklist: "Checklist", met: "met", partial: "partly", missing: "missing",
      redFlag: "Please look at this",
      piiWarn: "Your answer looks like it may contain a phone number or email address. Please remove anything that identifies a person before the coach reads it. Send anyway?",
      // welcome
      w_h: "Hello! Let's sharpen your problem together.",
      w_lead: "In about 20–30 minutes you'll describe one real task from your work — what comes in, what goes out, and where it gets hard. A friendly AI coach reads each part and asks a question or two to help you think it through. At the end you get a short requirements brief, mapped to the AMPLIFY sessions that will help you solve it.",
      w_p1t: "You write, the coach asks", w_p1d: "The coach never fills in the form for you. Your thinking is the point.",
      w_p2t: "Mapped to the course", w_p2d: "See which sessions teach the skills your problem needs — and which needs the course does not cover.",
      w_p3t: "A brief to keep", w_p3d: "Download it as Word or Markdown and bring it to Session 1.",
      w_name: "Your name", w_country: "Country", w_role: "Your role in the programme", w_rolehint: "e.g. M&E officer, national NTD programme",
      w_code: "Cohort code", w_codehint: "Your instructor gives you this code. It keeps the coach for course participants only.",
      w_dataT: "Before you start:", w_data: "Do not type patient names or anything that identifies a person. Use aggregate numbers and roles, not names.",
      w_sendT: "What is sent:", w_send: "When you click “Check my answer” or “Generate my brief”, your answers are sent to Anthropic's Claude AI through the AMPLIFY course account so it can coach you. Your answers are saved only in this browser — not on our servers.",
      w_agree: "I understand, and I won't enter personal or patient information.",
      w_needAgree: "Please tick the box to continue.",
      w_resume: "Welcome back — your answers are saved on this device.",
      w_mock: "Practice mode: the coach gives sample replies and no AI is called.",
      // stage 1
      s1_lead: "Think of one task you do yourself, again and again, that takes too long, goes wrong, or frustrates you. Describe it as if a new colleague were taking it over next month.",
      s1_task: "The task, in a few words", s1_taskhint: "e.g. “Compile district MDA treatment data for the annual coverage report”",
      s1_desc: "Describe it", s1_deschint: "2–5 sentences: what it is, who it is for, why it matters.",
      s1_area: "Which area is it mostly in?", s1_area2: "A second area (optional)", none: "None",
      areas: { data: "Data management & analysis", communication: "Communication", knowledge: "Knowledge management", project_management: "Project management" },
      // stage 2
      s2_lead: "What do you start with? List everything that comes in before you can do this task.",
      s2_item: "Input", s2_add: "+ Add another input", remove: "Remove",
      s2_what: "What comes in", s2_whathint: "e.g. district treatment summaries",
      s2_from: "From whom or which system", s2_fromhint: "e.g. district NTD focal persons, DHIS2", s2_format: "Format", s2_formatOther: "Describe the format",
      s2_often: "How often", s2_oftenhint: "e.g. after each MDA round",
      s2_pd: "Does it contain personal data (names, phone numbers, patient details)?",
      formats: { excel: "Excel", dhis2: "DHIS2 export", paper: "Paper", photo: "Photo", pdf: "PDF", email_text: "Email text", whatsapp: "WhatsApp", phone: "Phone call", other: "Other" },
      yes: "Yes", no: "No", not_sure: "Not sure", need_permission: "Need permission",
      // stage 3
      s3_lead: "What do you have to produce at the end, and who receives it?",
      s3_item: "Output", s3_add: "+ Add another output",
      s3_what: "What you produce", s3_whathint: "e.g. coverage table and two charts in the annual report",
      s3_for: "For whom", s3_forhint: "a role is fine, e.g. programme manager",
      s3_format: "Format", s3_formathint: "e.g. Word report, slides, Excel table, map",
      s3_when: "Deadline or frequency", s3_whenhint: "e.g. every February, before the technical meeting", s3_used: "What they use it for", s3_usedhint: "the decision or action it supports",
      // stage 4
      s4_lead: "Between what comes in and what goes out, where does it get hard? Tell us about the last time it went wrong.",
      s4_hard: "The hardest step", s4_hardhint: "the step that is slowest, most error-prone or most frustrating",
      s4_ex: "The last time it went wrong", s4_exhint: "one real occasion, 2–4 sentences",
      s4_cons: "What happened because of it", s4_conshint: "one sentence",
      s4_measure: "How would you know it got better?", s4_measurehint: "something you could actually see or count",
      s4_base: "Today (optional)", s4_basehint: "e.g. 3 weeks", s4_target: "Target (optional)", s4_targethint: "e.g. 1 week",
      // stage 5
      s5_lead: "A few quick questions to check this problem can work during the course. These are not about detail — just whether it's possible.",
      s5_own: "Is this your own work, that you can change during the course?",
      s5_rec: "Will you do this task again during or soon after the course?",
      s5_sample: "Can you get an anonymised sample of the inputs to practise on?",
      s5_conn: "Your internet connection at work", conns: { reliable: "Reliable", unreliable: "Unreliable", mostly_offline: "Mostly offline" },
      s5_tools: "Tools you have now", s5_toolsOther: "Other tools (optional)",
      s5_perm: "Does anyone need to approve a change to how this is done? (optional)", s5_permhint: "a role is enough",
      // stage 6
      s6_lead: "Which of these would you need to solve your problem? Tick what you think you need, and mark what you can already do. Each skill shows where the AMPLIFY course teaches it.",
      s6_need: "I need this", s6_have: "I can already do this",
      s6_note: "Why does your problem need it? (optional)",
      s6_alignT: "How your needs line up with the course",
      s6_snapshot: "Save a snapshot of this map", s6_after: "after", s6_snapSaved: "Snapshot saved.",
      s6_snapHint: "Come back after each session and update your map.",
      cov_covered: (s) => s, cov_partial: "Partly covered", cov_not: "Not covered in the course",
      coachSuggests: "Coach suggests", coachExtra: "Also needed — not in the course",
      session: "Session", sessions: "Sessions",
      col_covered: "Taught in the course", col_partial: "Partly covered", col_not: "Not covered in the course",
      col_empty: "Nothing here yet.",
      notCoveredNote: "The course does not teach these. Raise them with your instructors early so you can plan extra support, or narrow your problem.",
      // stage 7
      s7_lead: "Check your answers, then generate your brief. You can edit anything — your changes are saved as you type.",
      edit: "Edit", notProvided: "Not provided", flagsT: "Coach flags for your facilitator", flagsNone: "No open flags.",
      gen: "Generate my brief", regen: "Generate again", genning: "Writing your brief… this can take up to a minute.",
      briefT: "Your Problem Brief & Requirements",
      dlMd: "Download .md", dlDocx: "Download Word (.docx)", copy: "Copy text", print: "Print",
      copied: "Copied.", docxErr: "Couldn't build the Word file. Download the .md instead.",
      truncated: "The brief may be cut short. Try generating again.",
      resetConfirm: "Start again? This clears all your answers on this device. Download your progress first if you want to keep it.",
      loadErr: "That file isn't a saved Problem Coach progress file.", loaded: "Progress loaded.",
      r_problem: "The problem", r_inputs: "Inputs", r_outputs: "Outputs", r_gap: "Where it gets hard", r_fit: "Fit & constraints", r_skills: "Skills map",
      r_task: "Task", r_desc: "Description", r_area: "Area", r_hard: "Hardest step", r_ex: "Last time", r_cons: "Consequence", r_measure: "Better looks like", r_base: "Today → target", r_pd: "Personal data",
    },
    fr: {
      skip: "Aller au contenu", "nav.sessions": "Sessions", "nav.problem": "Votre problème",
      eyebrow: "AMPLIFY · Coach de problème",
      title: "Transformez un vrai problème de travail en une note sur laquelle construire.",
      "tools.save": "Télécharger ma progression", "tools.load": "Charger une progression", "tools.reset": "Recommencer",
      "foot.back": "Retour à amplify-course.com",
      saved: "Enregistré sur cet appareil", step: "Étape",
      stages: ["Bienvenue", "Le problème", "Entrées", "Sorties", "Là où ça bloque", "Faisabilité", "Carte des compétences", "Relecture et note"],
      back: "Retour", next: "Suivant", start: "Commencer",
      check: "Vérifier ma réponse", checkAgain: "Vérifier à nouveau", roundsLeft: (n) => `${n} vérification(s) sur ${MAX_ROUNDS} restante(s)`,
      roundsDone: "C'est suffisant pour avancer. Vous pourrez affiner pendant le cours.",
      coachName: "Votre coach", coachThinking: "Votre coach lit votre réponse…",
      coachIntro: "Écrivez d'abord votre réponse, puis demandez au coach de la vérifier. Le coach pose des questions — il n'écrit jamais votre réponse à votre place. Vous pouvez avancer à tout moment.",
      offlineErr: "Impossible de joindre le coach. Votre réponse est enregistrée. Réessayez ou passez à la suite.",
      ready: "Prêt à avancer", needs_work: "À revoir",
      whatWorks: "Ce qui fonctionne", improved: "Amélioré depuis la dernière fois", earlier: (n) => `Retours précédents (${n})`,
      checklist: "Points vérifiés", met: "atteint", partial: "en partie", missing: "manquant",
      redFlag: "Attention à ce point",
      piiWarn: "Votre réponse semble contenir un numéro de téléphone ou une adresse e-mail. Retirez tout ce qui identifie une personne avant que le coach la lise. Envoyer quand même ?",
      w_h: "Bonjour ! Clarifions votre problème ensemble.",
      w_lead: "En 20 à 30 minutes environ, vous décrirez une vraie tâche de votre travail : ce qui entre, ce qui sort, et là où ça bloque. Un coach IA bienveillant lit chaque partie et pose une ou deux questions pour vous aider à réfléchir. À la fin, vous obtenez une courte note d'exigences, reliée aux sessions AMPLIFY qui vous aideront à résoudre le problème.",
      w_p1t: "Vous écrivez, le coach questionne", w_p1d: "Le coach ne remplit jamais le formulaire à votre place. C'est votre réflexion qui compte.",
      w_p2t: "Relié au cours", w_p2d: "Voyez quelles sessions enseignent les compétences dont votre problème a besoin — et lesquelles le cours ne couvre pas.",
      w_p3t: "Une note à garder", w_p3d: "Téléchargez-la en Word ou Markdown et apportez-la à la session 1.",
      w_name: "Votre nom", w_country: "Pays", w_role: "Votre rôle dans le programme", w_rolehint: "ex. chargé de S&E, programme national MTN",
      w_code: "Code de cohorte", w_codehint: "Votre formateur vous donne ce code. Il réserve le coach aux participants du cours.",
      w_dataT: "Avant de commencer :", w_data: "N'écrivez pas de noms de patients ni rien qui identifie une personne. Utilisez des chiffres agrégés et des fonctions, pas des noms.",
      w_sendT: "Ce qui est envoyé :", w_send: "Quand vous cliquez sur « Vérifier ma réponse » ou « Générer ma note », vos réponses sont envoyées à l'IA Claude d'Anthropic via le compte du cours AMPLIFY pour vous coacher. Vos réponses sont enregistrées uniquement dans ce navigateur, pas sur nos serveurs.",
      w_agree: "J'ai compris, et je n'écrirai pas d'informations personnelles ou de patients.",
      w_needAgree: "Cochez la case pour continuer.",
      w_resume: "Bon retour — vos réponses sont enregistrées sur cet appareil.",
      w_mock: "Mode entraînement : le coach donne des réponses d'exemple, aucune IA n'est appelée.",
      s1_lead: "Pensez à une tâche que vous faites vous-même, encore et encore, qui prend trop de temps, tourne mal ou vous frustre. Décrivez-la comme si un nouveau collègue devait la reprendre le mois prochain.",
      s1_task: "La tâche, en quelques mots", s1_taskhint: "ex. « Compiler les données de traitement TDM des districts pour le rapport annuel de couverture »",
      s1_desc: "Décrivez-la", s1_deschint: "2 à 5 phrases : ce que c'est, pour qui, pourquoi c'est important.",
      s1_area: "Dans quel domaine se situe-t-elle surtout ?", s1_area2: "Un second domaine (facultatif)", none: "Aucun",
      areas: { data: "Gestion et analyse des données", communication: "Communication", knowledge: "Gestion des connaissances", project_management: "Gestion de projet" },
      s2_lead: "Avec quoi commencez-vous ? Listez tout ce qui arrive avant que vous puissiez faire cette tâche.",
      s2_item: "Entrée", s2_add: "+ Ajouter une entrée", remove: "Supprimer",
      s2_what: "Ce qui arrive", s2_whathint: "ex. résumés de traitement des districts",
      s2_from: "De qui ou de quel système", s2_fromhint: "ex. points focaux MTN des districts, DHIS2", s2_format: "Format", s2_formatOther: "Décrivez le format",
      s2_often: "À quelle fréquence", s2_oftenhint: "ex. après chaque campagne TDM",
      s2_pd: "Contient-elle des données personnelles (noms, téléphones, détails de patients) ?",
      formats: { excel: "Excel", dhis2: "Export DHIS2", paper: "Papier", photo: "Photo", pdf: "PDF", email_text: "Texte d'e-mail", whatsapp: "WhatsApp", phone: "Appel téléphonique", other: "Autre" },
      yes: "Oui", no: "Non", not_sure: "Je ne sais pas", need_permission: "Autorisation nécessaire",
      s3_lead: "Que devez-vous produire à la fin, et qui le reçoit ?",
      s3_item: "Sortie", s3_add: "+ Ajouter une sortie",
      s3_what: "Ce que vous produisez", s3_whathint: "ex. tableau de couverture et deux graphiques dans le rapport annuel",
      s3_for: "Pour qui", s3_forhint: "une fonction suffit, ex. gestionnaire du programme",
      s3_format: "Format", s3_formathint: "ex. rapport Word, diapositives, tableau Excel, carte",
      s3_when: "Échéance ou fréquence", s3_whenhint: "ex. chaque février, avant la réunion technique", s3_used: "À quoi cela leur sert", s3_usedhint: "la décision ou l'action que cela soutient",
      s4_lead: "Entre ce qui entre et ce qui sort, où est-ce que ça bloque ? Racontez la dernière fois où cela s'est mal passé.",
      s4_hard: "L'étape la plus difficile", s4_hardhint: "l'étape la plus lente, la plus sujette aux erreurs ou la plus frustrante",
      s4_ex: "La dernière fois que cela s'est mal passé", s4_exhint: "une vraie occasion, 2 à 4 phrases",
      s4_cons: "Ce qui en a résulté", s4_conshint: "une phrase",
      s4_measure: "Comment sauriez-vous que c'est mieux ?", s4_measurehint: "quelque chose que vous pourriez vraiment voir ou compter",
      s4_base: "Aujourd'hui (facultatif)", s4_basehint: "ex. 3 semaines", s4_target: "Objectif (facultatif)", s4_targethint: "ex. 1 semaine",
      s5_lead: "Quelques questions rapides pour vérifier que ce problème peut être travaillé pendant le cours. Pas de détails — juste si c'est possible.",
      s5_own: "Est-ce votre propre travail, que vous pouvez changer pendant le cours ?",
      s5_rec: "Referez-vous cette tâche pendant le cours ou peu après ?",
      s5_sample: "Pouvez-vous obtenir un échantillon anonymisé des entrées pour vous entraîner ?",
      s5_conn: "Votre connexion internet au travail", conns: { reliable: "Fiable", unreliable: "Instable", mostly_offline: "Surtout hors ligne" },
      s5_tools: "Outils dont vous disposez", s5_toolsOther: "Autres outils (facultatif)",
      s5_perm: "Quelqu'un doit-il approuver un changement dans la façon de faire ? (facultatif)", s5_permhint: "une fonction suffit",
      s6_lead: "Lesquelles de ces compétences vous faudrait-il pour résoudre votre problème ? Cochez ce dont vous pensez avoir besoin, et ce que vous savez déjà faire. Chaque compétence indique où le cours AMPLIFY l'enseigne.",
      s6_need: "J'en ai besoin", s6_have: "Je sais déjà le faire",
      s6_note: "Pourquoi votre problème en a-t-il besoin ? (facultatif)",
      s6_alignT: "Comment vos besoins correspondent au cours",
      s6_snapshot: "Enregistrer un instantané de cette carte", s6_after: "après", s6_snapSaved: "Instantané enregistré.",
      s6_snapHint: "Revenez après chaque session pour mettre votre carte à jour.",
      cov_covered: (s) => s, cov_partial: "En partie couvert", cov_not: "Non couvert par le cours",
      coachSuggests: "Suggéré par le coach", coachExtra: "Aussi nécessaire — hors du cours",
      session: "Session", sessions: "Sessions",
      col_covered: "Enseigné dans le cours", col_partial: "En partie couvert", col_not: "Non couvert par le cours",
      col_empty: "Rien pour l'instant.",
      notCoveredNote: "Le cours n'enseigne pas ces compétences. Parlez-en tôt à vos formateurs pour prévoir un appui, ou réduisez votre problème.",
      s7_lead: "Relisez vos réponses, puis générez votre note. Vous pouvez tout modifier — vos changements sont enregistrés au fur et à mesure.",
      edit: "Modifier", notProvided: "Non renseigné", flagsT: "Signalements du coach pour votre formateur", flagsNone: "Aucun signalement ouvert.",
      gen: "Générer ma note", regen: "Générer à nouveau", genning: "Rédaction de votre note… cela peut prendre une minute.",
      briefT: "Votre note de problème et d'exigences",
      dlMd: "Télécharger .md", dlDocx: "Télécharger Word (.docx)", copy: "Copier le texte", print: "Imprimer",
      copied: "Copié.", docxErr: "Impossible de créer le fichier Word. Téléchargez le .md.",
      truncated: "La note est peut-être incomplète. Essayez de la générer à nouveau.",
      resetConfirm: "Recommencer ? Cela efface toutes vos réponses sur cet appareil. Téléchargez d'abord votre progression pour la garder.",
      loadErr: "Ce fichier n'est pas une progression du Coach de problème.", loaded: "Progression chargée.",
      r_problem: "Le problème", r_inputs: "Entrées", r_outputs: "Sorties", r_gap: "Là où ça bloque", r_fit: "Faisabilité", r_skills: "Carte des compétences",
      r_task: "Tâche", r_desc: "Description", r_area: "Domaine", r_hard: "Étape difficile", r_ex: "Dernière fois", r_cons: "Conséquence", r_measure: "Mieux, c'est", r_base: "Aujourd'hui → objectif", r_pd: "Données personnelles",
    },
  };

  // Learner-facing criterion labels (rubric IDs from spec/02-rubric.md).
  const CRIT_LABEL = {
    en: {
      P1_specific: "One specific task", P2_recurring: "It repeats", P3_owner: "You do it yourself", P4_why: "Why it matters", P5_no_solution: "Problem, not solution",
      I1_named: "Inputs named", I2_format: "Formats given", I3_source: "Sources given", I4_variation: "Differences between sources", I5_personal: "Personal data answered",
      O1_product: "A concrete product", O2_audience: "A named recipient", O3_timing: "Deadline or frequency", O4_use: "What it's used for",
      G1_located: "Where it gets hard", G2_instance: "One real occasion", G3_consequence: "What happened", S1_observable: "A measure you can see", S2_baseline: "Before → after",
      F1_own: "Your own work", F2_sample: "Sample available", F3_personal_safe: "Personal data handled", F4_conditions: "Connectivity and tools",
      K1_linked: "Skills linked to your problem", K2_gaps: "No obvious gaps", K3_self_assessed: "Self-assessed",
    },
    fr: {
      P1_specific: "Une tâche précise", P2_recurring: "Elle se répète", P3_owner: "Vous la faites vous-même", P4_why: "Pourquoi c'est important", P5_no_solution: "Problème, pas solution",
      I1_named: "Entrées nommées", I2_format: "Formats indiqués", I3_source: "Sources indiquées", I4_variation: "Différences entre sources", I5_personal: "Données personnelles renseignées",
      O1_product: "Un produit concret", O2_audience: "Un destinataire nommé", O3_timing: "Échéance ou fréquence", O4_use: "À quoi il sert",
      G1_located: "Où ça bloque", G2_instance: "Une vraie occasion", G3_consequence: "Ce qui s'est passé", S1_observable: "Une mesure observable", S2_baseline: "Avant → après",
      F1_own: "Votre propre travail", F2_sample: "Échantillon disponible", F3_personal_safe: "Données personnelles traitées", F4_conditions: "Connexion et outils",
      K1_linked: "Compétences liées au problème", K2_gaps: "Pas de manque évident", K3_self_assessed: "Auto-évaluation faite",
    },
  };

  const TOOLS = ["Excel", "Google Sheets", "Word", "PowerPoint", "DHIS2", "ESPEN", "Claude", "ChatGPT", "Gemini", "WhatsApp"];

  /* ───────────── state ───────────── */
  const uuid = () => (crypto.randomUUID ? crypto.randomUUID() : "s-" + Date.now() + "-" + Math.random().toString(16).slice(2));
  const nowIso = () => new Date().toISOString();

  function freshState(locale) {
    return {
      version: "1.0",
      meta: { session_id: uuid(), name: "", country: "", programme_role: "", cohort: "", locale: locale || "en", created_at: nowIso(), updated_at: nowIso() },
      problem: { task: "", description: "", area: "", area_secondary: "" },
      inputs: [blankInput()],
      outputs: [blankOutput()],
      gap: { hardest_step: "", recent_example: "", consequence: "" },
      success: { measure: "", baseline: "", target: "" },
      fit: {},
      constraints: { tools: [], tools_other: "", permission: "" },
      skills: CATALOG.skills.map((s) => ({ id: s.id, needed: false, have: false, note: "" })),
      skills_history: [],
      coaching: {},
      flags: [],
    };
  }
  function blankInput() { return { what: "", from: "", format: "", format_other: "", how_often: "", personal_data: "" }; }
  function blankOutput() { return { what: "", for_whom: "", format: "", deadline_or_frequency: "", used_for: "" }; }

  let state, ui;
  let config = { access_required: false, mock: false, reachable: true };
  const busy = { coach: false, brief: false };
  const coachError = {};

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (raw && raw.state && raw.state.version === "1.0") {
        state = raw.state;
        ui = Object.assign({ stage: 0, access_code: "", agreed: false, brief_md: "", returning: true }, raw.ui || {});
        // Catalog may have grown since this was saved.
        const have = new Set(state.skills.map((s) => s.id));
        CATALOG.skills.forEach((s) => { if (!have.has(s.id)) state.skills.push({ id: s.id, needed: false, have: false, note: "" }); });
        return;
      }
    } catch (e) { /* storage blocked or corrupt: start fresh */ }
    const guess = (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
    state = freshState(guess);
    ui = { stage: 0, access_code: "", agreed: false, brief_md: "", returning: false };
  }

  let saveTimer;
  function save(immediate) {
    clearTimeout(saveTimer);
    const write = () => {
      state.meta.updated_at = nowIso();
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify({ state, ui: { stage: ui.stage, access_code: ui.access_code, agreed: ui.agreed, brief_md: ui.brief_md } }));
        const d = new Date();
        $("#savedNote").textContent = `${t("saved")} · ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
      } catch (e) { /* private mode: state lives for this tab only */ }
    };
    immediate ? write() : (saveTimer = setTimeout(write, 300));
  }

  /* ───────────── helpers ───────────── */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const L = () => (state.meta.locale === "fr" ? "fr" : "en");
  function t(key, ...args) {
    const v = T[L()][key] ?? T.en[key];
    return typeof v === "function" ? v(...args) : v;
  }
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const getPath = (obj, path) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
  function setPath(obj, path, val) {
    const keys = path.split(".");
    let o = obj;
    keys.slice(0, -1).forEach((k, i) => {
      if (o[k] == null) o[k] = /^\d+$/.test(keys[i + 1]) ? [] : {};
      o = o[k];
    });
    o[keys[keys.length - 1]] = val;
  }
  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast"; el.setAttribute("role", "status"); el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }
  const skillDef = (id) => CATALOG.skills.find((s) => s.id === id);
  const sessionTitle = (n) => { const s = CATALOG.sessions.find((x) => x.n === n); return s ? (L() === "fr" ? s.title_fr : s.title) : ""; };

  function coverageLabel(def) {
    if (def.coverage === "covered") {
      const ns = def.sessions;
      return ns.length === 1 ? `${t("session")} ${ns[0]} · ${sessionTitle(ns[0])}` : `${t("sessions")} ${ns.join(", ")}`;
    }
    return def.coverage === "partial" ? t("cov_partial") : t("cov_not");
  }

  /* ───────────── field renderers ───────────── */
  function fText(path, label, hint, opts = {}) {
    const id = "f-" + path.replace(/\./g, "-");
    const v = getPath(state, path) ?? "";
    const tag = opts.area
      ? `<textarea id="${id}" data-path="${path}" class="${opts.short ? "short" : ""}" ${hint ? `aria-describedby="${id}-h"` : ""}>${esc(v)}</textarea>`
      : `<input type="text" id="${id}" data-path="${path}" value="${esc(v)}" ${hint ? `aria-describedby="${id}-h"` : ""} autocomplete="${opts.autocomplete || "off"}">`;
    return `<div class="field"><label for="${id}">${esc(label)}</label>${hint ? `<span class="hint" id="${id}-h">${esc(hint)}</span>` : ""}${tag}</div>`;
  }
  function fChoice(path, label, options, opts = {}) {
    const v = getPath(state, path);
    const name = "c-" + path.replace(/\./g, "-");
    const items = options.map(([val, text]) => {
      const checked = String(v) === String(val) ? "checked" : "";
      return `<label class="choice"><input type="radio" name="${name}" data-path="${path}" data-type="${opts.bool ? "bool" : "str"}" value="${esc(val)}" ${checked}><span>${esc(text)}</span></label>`;
    }).join("");
    return `<fieldset class="field"><legend class="label">${esc(label)}</legend>${opts.hint ? `<span class="hint">${esc(opts.hint)}</span>` : ""}<div class="choices">${items}</div></fieldset>`;
  }
  function fMulti(path, label, options) {
    const arr = getPath(state, path) || [];
    const items = options.map((o) => `<label class="choice"><input type="checkbox" data-multi="${path}" value="${esc(o)}" ${arr.includes(o) ? "checked" : ""}><span>${esc(o)}</span></label>`).join("");
    return `<fieldset class="field"><legend class="label">${esc(label)}</legend><div class="choices">${items}</div></fieldset>`;
  }
  const yesNo = () => [["true", t("yes")], ["false", t("no")]];

  /* ───────────── stages ───────────── */
  function head(n, lead) {
    return `<div class="stage-head"><p class="kicker">${t("step")} ${n} / 7</p><h2 class="h2">${esc(t("stages")[n])}</h2>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}</div>`;
  }

  function renderWelcome() {
    const f = config.access_required
      ? `<div class="field"><label for="f-code">${t("w_code")}</label><span class="hint" id="f-code-h">${t("w_codehint")}</span><input type="text" id="f-code" data-ui="access_code" value="${esc(ui.access_code)}" aria-describedby="f-code-h" autocomplete="off" style="max-width:16rem;text-transform:uppercase"></div>`
      : "";
    return `
      <div class="stage-head"><h2 class="h2">${t("w_h")}</h2><p class="lead">${t("w_lead")}</p></div>
      ${ui.returning ? `<div class="notice notice-info">${t("w_resume")}</div>` : ""}
      ${config.mock ? `<div class="notice notice-info">${t("w_mock")}</div>` : ""}
      <div class="promise">
        <div><b>${t("w_p1t")}</b><span class="small">${t("w_p1d")}</span></div>
        <div><b>${t("w_p2t")}</b><span class="small">${t("w_p2d")}</span></div>
        <div><b>${t("w_p3t")}</b><span class="small">${t("w_p3d")}</span></div>
      </div>
      <div class="card">
        <div class="grid2">
          ${fText("meta.name", t("w_name"), "", { autocomplete: "name" })}
          ${fText("meta.country", t("w_country"), "", { autocomplete: "country-name" })}
        </div>
        ${fText("meta.programme_role", t("w_role"), t("w_rolehint"))}
        ${f ? `<div style="margin-top:1.25rem">${f}</div>` : ""}
      </div>
      <div class="notice notice-warn"><span><b>${t("w_dataT")}</b> ${t("w_data")}</span></div>
      <div class="notice notice-info"><span><b>${t("w_sendT")}</b> ${t("w_send")}</span></div>
      <div class="card muted-card"><label class="check"><input type="checkbox" id="agree" ${ui.agreed ? "checked" : ""}><span>${t("w_agree")}</span></label><p class="xs" id="agreeMsg" role="alert" style="margin-top:.4rem"></p></div>
      <div class="actions"><span class="spacer"></span><button type="button" class="btn btn-ink" data-go="1">${t("start")} <span class="arr" aria-hidden="true">→</span></button></div>`;
  }

  function renderProblem() {
    const areaOpts = Object.entries(t("areas"));
    return head(1, t("s1_lead")) + `
      <div class="card">
        ${fText("problem.task", t("s1_task"), t("s1_taskhint"))}
        ${fText("problem.description", t("s1_desc"), t("s1_deschint"), { area: true })}
        ${fChoice("problem.area", t("s1_area"), areaOpts)}
        ${fChoice("problem.area_secondary", t("s1_area2"), [["", t("none")], ...areaOpts])}
      </div>` + coachBlock(1) + nav(1);
  }

  function renderInputs() {
    const fmts = Object.entries(t("formats"));
    const rows = state.inputs.map((r, i) => `
      <div class="row">
        <div class="row-head"><span class="h3">${t("s2_item")} ${i + 1}</span>${state.inputs.length > 1 ? `<button type="button" class="link" data-remove="inputs.${i}">${t("remove")}</button>` : ""}</div>
        ${fText(`inputs.${i}.what`, t("s2_what"), t("s2_whathint"))}
        <div class="grid2" style="margin-top:.9rem">
          ${fText(`inputs.${i}.from`, t("s2_from"), t("s2_fromhint"))}
          ${fText(`inputs.${i}.how_often`, t("s2_often"), t("s2_oftenhint"))}
        </div>
        ${fChoice(`inputs.${i}.format`, t("s2_format"), fmts)}
        ${r.format === "other" ? fText(`inputs.${i}.format_other`, t("s2_formatOther"), "") : ""}
        ${fChoice(`inputs.${i}.personal_data`, t("s2_pd"), [["no", t("no")], ["yes", t("yes")], ["not_sure", t("not_sure")]])}
      </div>`).join("");
    return head(2, t("s2_lead")) + `<div class="rows">${rows}</div>
      <div class="actions" style="margin-top:1rem"><button type="button" class="btn btn-soft btn-sm" data-add="inputs">${t("s2_add")}</button></div>` + coachBlock(2) + nav(2);
  }

  function renderOutputs() {
    const rows = state.outputs.map((r, i) => `
      <div class="row">
        <div class="row-head"><span class="h3">${t("s3_item")} ${i + 1}</span>${state.outputs.length > 1 ? `<button type="button" class="link" data-remove="outputs.${i}">${t("remove")}</button>` : ""}</div>
        ${fText(`outputs.${i}.what`, t("s3_what"), t("s3_whathint"))}
        <div class="grid2" style="margin-top:.9rem">
          ${fText(`outputs.${i}.for_whom`, t("s3_for"), t("s3_forhint"))}
          ${fText(`outputs.${i}.format`, t("s3_format"), t("s3_formathint"))}
        </div>
        <div class="grid2" style="margin-top:.9rem">
          ${fText(`outputs.${i}.deadline_or_frequency`, t("s3_when"), t("s3_whenhint"))}
          ${fText(`outputs.${i}.used_for`, t("s3_used"), t("s3_usedhint"))}
        </div>
      </div>`).join("");
    return head(3, t("s3_lead")) + `<div class="rows">${rows}</div>
      <div class="actions" style="margin-top:1rem"><button type="button" class="btn btn-soft btn-sm" data-add="outputs">${t("s3_add")}</button></div>` + coachBlock(3) + nav(3);
  }

  function renderGap() {
    return head(4, t("s4_lead")) + `
      <div class="card">
        ${fText("gap.hardest_step", t("s4_hard"), t("s4_hardhint"), { area: true, short: true })}
        ${fText("gap.recent_example", t("s4_ex"), t("s4_exhint"), { area: true })}
        ${fText("gap.consequence", t("s4_cons"), t("s4_conshint"))}
      </div>
      <div class="card">
        ${fText("success.measure", t("s4_measure"), t("s4_measurehint"), { area: true, short: true })}
        <div class="grid2" style="margin-top:1.25rem">
          ${fText("success.baseline", t("s4_base"), t("s4_basehint"))}
          ${fText("success.target", t("s4_target"), t("s4_targethint"))}
        </div>
      </div>` + coachBlock(4) + nav(4);
  }

  function renderFit() {
    return head(5, t("s5_lead")) + `
      <div class="card">
        ${fChoice("fit.own_work", t("s5_own"), yesNo(), { bool: true })}
        ${fChoice("fit.recurring", t("s5_rec"), yesNo(), { bool: true })}
        ${fChoice("fit.sample_available", t("s5_sample"), [["yes", t("yes")], ["no", t("no")], ["need_permission", t("need_permission")]])}
      </div>
      <div class="card">
        ${fChoice("constraints.connectivity", t("s5_conn"), Object.entries(t("conns")))}
        ${fMulti("constraints.tools", t("s5_tools"), TOOLS)}
        ${fText("constraints.tools_other", t("s5_toolsOther"), "")}
        ${fText("constraints.permission", t("s5_perm"), t("s5_permhint"))}
      </div>` + coachBlock(5) + nav(5);
  }

  function lastCoach(stage) {
    const r = state.coaching[stage];
    return r && r.length ? r[r.length - 1] : null;
  }

  function renderSkills() {
    const last = lastCoach(6);
    const suggested = new Map(((last && last.suggested_skills) || []).map((s) => [s.id, s.reason]));
    const cards = state.skills.map((s, i) => {
      const def = skillDef(s.id);
      if (!def) return "";
      const phrase = L() === "fr" && def.problem_phrase_fr ? def.problem_phrase_fr : def.problem_phrase;
      const why = suggested.get(s.id);
      return `
      <div class="skill ${s.needed ? "needed" : ""} ${why && !s.needed ? "suggested" : ""}" data-skill="${s.id}">
        <div class="skill-top">
          <div><p class="phrase">${esc(phrase)}</p><p class="what">${esc(def.skill)}</p></div>
          <span class="badge ${def.coverage}" title="${esc(def.coverage_note)}">${esc(coverageLabel(def))}</span>
        </div>
        ${def.coverage !== "covered" && def.coverage_note ? `<p class="xs" style="margin-top:.4rem">${esc(def.coverage_note)}</p>` : ""}
        ${why ? `<p class="why"><b>${t("coachSuggests")}:</b> ${esc(why)}</p>` : ""}
        <div class="skill-toggles">
          <label class="choice"><input type="checkbox" data-path="skills.${i}.needed" data-type="checkbox" ${s.needed ? "checked" : ""}><span>${t("s6_need")}</span></label>
          <label class="choice"><input type="checkbox" data-path="skills.${i}.have" data-type="checkbox" ${s.have ? "checked" : ""}><span>${t("s6_have")}</span></label>
        </div>
        ${s.needed ? `<div class="note">${fText(`skills.${i}.note`, t("s6_note"), "")}</div>` : ""}
      </div>`;
    }).join("");
    const snapOpts = CATALOG.sessions.map((s) => `<option value="${s.n}">${t("session")} ${s.n}</option>`).join("");
    return head(6, t("s6_lead")) + `<div class="skills">${cards}</div>
      <div class="card" style="margin-top:1.25rem" id="alignCard">${alignmentHtml()}</div>
      <div class="actions no-print" style="margin-top:1rem">
        <span class="small">${t("s6_snapHint")}</span><span class="spacer"></span>
        <label class="small" for="snapAfter">${t("s6_after")}</label>
        <select id="snapAfter" style="width:auto">${snapOpts}</select>
        <button type="button" class="btn btn-soft btn-sm" id="snapBtn">${t("s6_snapshot")}</button>
      </div>` + coachBlock(6) + nav(6);
  }

  // Needed skills grouped by how the course covers them; coach extras count too.
  function alignment() {
    const last = lastCoach(6);
    const groups = { covered: [], partial: [], not_covered: [] };
    const seen = new Set();
    state.skills.filter((s) => s.needed).forEach((s) => {
      const def = skillDef(s.id); if (!def) return;
      seen.add(s.id);
      groups[def.coverage].push({ def, coach: false });
    });
    ((last && last.suggested_skills) || []).forEach((sg) => {
      const def = skillDef(sg.id); if (!def || seen.has(sg.id)) return;
      groups[def.coverage].push({ def, coach: true, reason: sg.reason });
    });
    const extra = (last && last.uncovered_needs) || [];
    const hit = new Set();
    [...groups.covered, ...groups.partial].forEach((g) => { if (!g.coach) g.def.sessions.forEach((n) => hit.add(n)); });
    return { groups, extra, hit };
  }

  function alignmentHtml() {
    const { groups, extra, hit } = alignment();
    const li = (g, sub) => `<li>${esc(g.def.skill)}${g.coach ? ` <span class="badge coach" style="display:inline-flex">${t("coachSuggests")}</span>` : ""}<span>${esc(sub)}</span></li>`;
    const col = (key, title, items) => `<div class="align-col ${key}"><h4><span class="badge ${key}">${items.length}</span>${title}</h4><ul>${items.length ? items.join("") : `<li class="empty">${t("col_empty")}</li>`}</ul></div>`;
    const covered = groups.covered.map((g) => li(g, coverageLabel(g.def)));
    const partial = groups.partial.map((g) => li(g, g.def.coverage_note));
    const notCov = groups.not_covered.map((g) => li(g, g.def.coverage_note))
      .concat(extra.map((x) => `<li>${esc(x.skill)} <span class="badge coach" style="display:inline-flex">${t("coachExtra")}</span><span>${esc(x.reason)}</span></li>`));
    const strip = CATALOG.sessions.map((s) => `<div class="${hit.has(s.n) ? "hit" : ""}"><b>${t("session")} ${s.n}</b>${esc(L() === "fr" ? s.title_fr : s.title)}</div>`).join("");
    return `<h3 class="h3">${t("s6_alignT")}</h3>
      <div class="sessions-strip" aria-hidden="true">${strip}</div>
      <div class="align" style="margin-top:1rem">${col("covered", t("col_covered"), covered)}${col("partial", t("col_partial"), partial)}${col("not_covered", t("col_not"), notCov)}</div>
      ${notCov.length || partial.length ? `<p class="small" style="margin-top:.9rem">${t("notCoveredNote")}</p>` : ""}`;
  }

  function computeFlags() {
    const personal = state.inputs.some((i) => i.personal_data === "yes" || i.personal_data === "not_sure");
    const flags = [];
    for (let s = 1; s <= 6; s++) {
      const last = lastCoach(s);
      if (!last) continue;
      (last.criteria || []).forEach((c) => {
        const r = (CRITERIA[s] || []).find((x) => x.id === c.id);
        if (r && r.required && (!r.conditional || personal) && c.status === "missing") {
          flags.push({ stage: s, criterion_or_flag: c.id, message: r.label });
        }
      });
      (last.red_flags || []).forEach((f) => flags.push({ stage: s, criterion_or_flag: f.type, message: f.message }));
    }
    return flags;
  }

  function renderReview() {
    const np = `<span class="empty">${t("notProvided")}</span>`;
    const val = (v) => (v != null && String(v).trim() ? esc(v) : np);
    const area = (k) => (k ? t("areas")[k] : "");
    const yn = (v) => (v === true ? t("yes") : v === false ? t("no") : "");
    const sec = (title, stage, body) => `<div class="review-sec"><div class="review-sec-head"><h3 class="h3">${title}</h3><button type="button" class="link" data-go="${stage}">${t("edit")}</button></div>${body}</div>`;
    const rows = (arr, fields) => arr.filter((r) => Object.values(r).some((x) => String(x || "").trim()))
      .map((r) => `<dl>${fields.map(([k, lbl]) => `<dt>${lbl}</dt><dd>${val(k === "format" && r.format && t("formats")[r.format] ? (r.format === "other" ? r.format_other || t("formats").other : t("formats")[r.format]) : k === "personal_data" && r[k] ? t(r[k]) : r[k])}</dd>`).join("")}</dl>`).join("<br>") || np;
    const flags = computeFlags();
    const md = ui.brief_md;
    return head(7, t("s7_lead")) + `
      <div class="card">
        ${sec(t("r_problem"), 1, `<dl><dt>${t("r_task")}</dt><dd>${val(state.problem.task)}</dd><dt>${t("r_desc")}</dt><dd>${val(state.problem.description)}</dd><dt>${t("r_area")}</dt><dd>${val([area(state.problem.area), area(state.problem.area_secondary)].filter(Boolean).join(", "))}</dd></dl>`)}
        ${sec(t("r_inputs"), 2, rows(state.inputs, [["what", t("s2_what")], ["from", t("s2_from")], ["format", t("s2_format")], ["how_often", t("s2_often")], ["personal_data", t("r_pd")]]))}
        ${sec(t("r_outputs"), 3, rows(state.outputs, [["what", t("s3_what")], ["for_whom", t("s3_for")], ["format", t("s3_format")], ["deadline_or_frequency", t("s3_when")], ["used_for", t("s3_used")]]))}
        ${sec(t("r_gap"), 4, `<dl><dt>${t("r_hard")}</dt><dd>${val(state.gap.hardest_step)}</dd><dt>${t("r_ex")}</dt><dd>${val(state.gap.recent_example)}</dd><dt>${t("r_cons")}</dt><dd>${val(state.gap.consequence)}</dd><dt>${t("r_measure")}</dt><dd>${val(state.success.measure)}</dd><dt>${t("r_base")}</dt><dd>${val([state.success.baseline, state.success.target].filter(Boolean).join(" → "))}</dd></dl>`)}
        ${sec(t("r_fit"), 5, `<dl><dt>${t("s5_own")}</dt><dd>${val(yn(state.fit.own_work))}</dd><dt>${t("s5_rec")}</dt><dd>${val(yn(state.fit.recurring))}</dd><dt>${t("s5_sample")}</dt><dd>${val(state.fit.sample_available ? t(state.fit.sample_available) : "")}</dd><dt>${t("s5_tools")}</dt><dd>${val([...(state.constraints.tools || []), state.constraints.tools_other].filter(Boolean).join(", "))}</dd></dl>`)}
      </div>
      <div class="card">${alignmentHtml()}<div class="actions" style="margin-top:.75rem"><button type="button" class="link" data-go="6">${t("edit")} — ${t("r_skills")}</button></div></div>
      <div class="card"><h3 class="h3" style="margin-bottom:.6rem">${t("flagsT")}</h3>${flags.length ? `<ul class="flags">${flags.map((f) => `<li><b>${esc(t("stages")[f.stage])}:</b> ${esc(f.message)}</li>`).join("")}</ul>` : `<p class="small">${t("flagsNone")}</p>`}</div>
      <div class="actions no-print">
        <button type="button" class="btn btn-ink" data-go="6">← ${t("back")}</button><span class="spacer"></span>
        <button type="button" class="btn btn-gold" id="genBtn" ${busy.brief ? "disabled" : ""}>${md ? t("regen") : t("gen")}</button>
      </div>
      <div id="briefOut">${briefOutHtml()}</div>`;
  }

  function briefOutHtml() {
    if (busy.brief) return `<div class="card" style="margin-top:1.25rem"><div class="thinking"><span class="dots"><i></i><i></i><i></i></span>${t("genning")}</div></div>`;
    const err = coachError.brief ? `<div class="notice notice-bad" style="margin-top:1rem" role="alert">${esc(coachError.brief)}</div>` : "";
    if (!ui.brief_md) return err;
    return err + `<div class="card" style="margin-top:1.25rem">
      <div class="actions no-print" style="margin-top:0;margin-bottom:1rem">
        <h3 class="h3">${t("briefT")}</h3><span class="spacer"></span>
        <button type="button" class="btn btn-ink btn-sm" id="dlDocx">${t("dlDocx")}</button>
        <button type="button" class="btn btn-soft btn-sm" id="dlMd">${t("dlMd")}</button>
        <button type="button" class="btn btn-soft btn-sm" id="copyMd">${t("copy")}</button>
        <button type="button" class="btn btn-soft btn-sm" id="printMd">${t("print")}</button>
      </div>
      ${ui.brief_truncated ? `<div class="notice notice-warn">${t("truncated")}</div>` : ""}
      <div class="doc">${mdToHtml(ui.brief_md)}</div></div>`;
  }

  function nav(n) {
    return `<div class="actions no-print">
      <button type="button" class="btn btn-soft" data-go="${n - 1}">← ${t("back")}</button><span class="spacer"></span>
      <button type="button" class="btn btn-ink" data-go="${n + 1}">${t("next")} <span class="arr" aria-hidden="true">→</span></button></div>`;
  }

  /* ───────────── coach panel ───────────── */
  function coachBlock(stage) {
    return `<section class="coach" id="coach-${stage}" aria-live="polite">${coachInner(stage)}</section>`;
  }
  function coachInner(stage) {
    const rounds = state.coaching[stage] || [];
    const left = MAX_ROUNDS - rounds.length;
    const last = rounds[rounds.length - 1];
    let body = "";
    if (busy.coach === stage) {
      body = `<div class="thinking"><span class="dots"><i></i><i></i><i></i></span>${t("coachThinking")}</div>`;
    } else if (last) {
      body = feedbackHtml(last, stage);
      if (rounds.length > 1) {
        body += `<details><summary>${t("earlier", rounds.length - 1)}</summary>${rounds.slice(0, -1).reverse().map((r) => `<div class="old">${r.feedback ? `<p class="feedback">${esc(r.feedback)}</p>` : ""}${r.questions && r.questions.length ? `<ul>${r.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>` : ""}</div>`).join("")}</details>`;
      }
    } else {
      body = `<p class="small">${t("coachIntro")}</p>`;
    }
    const err = coachError[stage] ? `<div class="notice notice-bad" role="alert">${esc(coachError[stage])}</div>` : "";
    const btn = left > 0
      ? `<div class="actions" style="margin-top:1rem"><button type="button" class="btn btn-gold btn-sm" data-check="${stage}" ${busy.coach ? "disabled" : ""}>${rounds.length ? t("checkAgain") : t("check")}</button><span class="xs">${t("roundsLeft", left)}</span></div>`
      : `<p class="small" style="margin-top:1rem">${t("roundsDone")}</p>`;
    return `<div class="coach-head"><span class="coach-avatar" aria-hidden="true">AI</span><span class="h3">${t("coachName")}</span>${last && busy.coach !== stage ? `<span class="verdict ${last.verdict}">${t(last.verdict)}</span>` : ""}</div>
      <div class="coach-body">${body}${err}</div>${btn}`;
  }
  function feedbackHtml(r, stage) {
    const sym = { met: "✓", partial: "~", missing: "○" };
    const crit = (r.criteria || []).map((c) => `<li class="${c.status}" title="${t(c.status)}"><i aria-hidden="true">${sym[c.status]}</i>${esc((CRIT_LABEL[L()] || CRIT_LABEL.en)[c.id] || c.id)}<span class="sr" style="position:absolute;left:-9999px">: ${t(c.status)}</span></li>`).join("");
    const flags = (r.red_flags || []).map((f) => `<div class="notice notice-bad"><span><b>${t("redFlag")}:</b> ${esc(f.message)}</span></div>`).join("");
    const extra = stage === 6 && r.uncovered_needs && r.uncovered_needs.length
      ? `<div class="notice notice-warn"><span><b>${t("coachExtra")}:</b> ${r.uncovered_needs.map((x) => `${esc(x.skill)} — ${esc(x.reason)}`).join("; ")}</span></div>` : "";
    return `${flags}
      ${r.strength ? `<p class="strength"><b>${t("whatWorks")}:</b> ${esc(r.strength)}</p>` : ""}
      ${r.improved_since_last ? `<p class="improved"><b>${t("improved")}:</b> ${esc(r.improved_since_last)}</p>` : ""}
      ${r.feedback ? `<p class="feedback">${esc(r.feedback)}</p>` : ""}
      ${r.questions && r.questions.length ? `<ul class="qs">${r.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>` : ""}
      ${extra}
      ${crit ? `<div><p class="xs" style="margin-bottom:.35rem">${t("checklist")}</p><ul class="crit">${crit}</ul></div>` : ""}`;
  }
  function refreshCoach(stage) {
    const el = $("#coach-" + stage);
    if (el) el.innerHTML = coachInner(stage);
  }

  function stageText(stage) {
    const pick = { 1: [state.problem], 2: state.inputs, 3: state.outputs, 4: [state.gap, state.success], 5: [state.constraints], 6: state.skills };
    return JSON.stringify(pick[stage] || "");
  }
  const looksPersonal = (s) => /[^\s@]+@[^\s@]+\.[a-z]{2,}/i.test(s) || /\+?\d[\d\s().-]{8,}\d/.test(s.replace(/\b(19|20)\d{2}\s*[-–]\s*(19|20)\d{2}\b/g, ""));

  function payload() {
    state.flags = computeFlags();
    state.meta.cohort = ui.access_code || state.meta.cohort;
    const copy = JSON.parse(JSON.stringify(state));
    copy.constraints.tools = [...(copy.constraints.tools || []), ...(copy.constraints.tools_other ? [copy.constraints.tools_other] : [])];
    return copy;
  }

  async function postJson(url, body) {
    let res;
    try {
      res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    } catch (e) { throw new Error(t("offlineErr")); }
    let data = null;
    try { data = await res.json(); } catch (e) { /* non-JSON error page */ }
    if (!res.ok) throw new Error((data && data.error && data.error.message) || t("offlineErr"));
    return data;
  }

  async function checkStage(stage) {
    const rounds = state.coaching[stage] || [];
    if (busy.coach || rounds.length >= MAX_ROUNDS) return;
    if (looksPersonal(stageText(stage)) && !confirm(t("piiWarn"))) return;
    busy.coach = stage; coachError[stage] = "";
    refreshCoach(stage);
    try {
      const fb = await postJson("/api/coach", {
        access_code: ui.access_code, session_id: state.meta.session_id, stage, round: rounds.length + 1,
        brief: payload(), previous_feedback: rounds,
      });
      state.coaching[stage] = [...rounds, fb];
      save(true);
    } catch (e) {
      coachError[stage] = e.message; // failed rounds are not counted
    } finally {
      busy.coach = false;
      if (ui.stage === 6 && stage === 6) render(); else refreshCoach(stage);
      renderSteps();
    }
  }

  async function generateBrief() {
    if (busy.brief) return;
    busy.brief = true; coachError.brief = "";
    $("#genBtn").disabled = true;
    $("#briefOut").innerHTML = briefOutHtml();
    try {
      const data = await postJson("/api/brief", { access_code: ui.access_code, session_id: state.meta.session_id, brief: payload() });
      ui.brief_md = data.markdown; ui.brief_truncated = !!data.truncated;
      save(true);
    } catch (e) {
      coachError.brief = e.message;
    } finally {
      busy.brief = false;
      render();
      const out = $("#briefOut"); if (out) out.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /* ───────────── markdown ───────────── */
  function inline(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, "$1<i>$2</i>").replace(/`([^`]+)`/g, "<code>$1</code>");
  }
  function mdBlocks(md) {
    const lines = md.replace(/\r/g, "").split("\n");
    const blocks = [];
    let i = 0;
    const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
    while (i < lines.length) {
      const l = lines[i];
      if (!l.trim()) { i++; continue; }
      let m;
      if ((m = l.match(/^(#{1,3})\s+(.*)$/))) { blocks.push({ type: "h", level: m[1].length, text: m[2] }); i++; continue; }
      if (/^\s*\|/.test(l)) {
        const rows = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) { rows.push(lines[i]); i++; }
        const body = rows.filter((r) => !/^\s*\|?\s*:?-{2,}/.test(r)).map(cells);
        blocks.push({ type: "table", head: body[0] || [], rows: body.slice(1) });
        continue;
      }
      if (/^\s*([-*]|\d+\.)\s+/.test(l)) {
        const ordered = /^\s*\d+\./.test(l);
        const items = [];
        while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) { items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, "")); i++; }
        blocks.push({ type: "list", ordered, items });
        continue;
      }
      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(#{1,3}\s|\s*\||\s*([-*]|\d+\.)\s+)/.test(lines[i])) { para.push(lines[i].trim()); i++; }
      blocks.push({ type: "p", lines: para });
    }
    return blocks;
  }
  function mdToHtml(md) {
    return mdBlocks(md).map((b) => {
      if (b.type === "h") return `<h${b.level}>${inline(b.text)}</h${b.level}>`;
      if (b.type === "table") return `<div class="tbl"><table><thead><tr>${b.head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      if (b.type === "list") { const tag = b.ordered ? "ol" : "ul"; return `<${tag}>${b.items.map((x) => `<li>${inline(x)}</li>`).join("")}</${tag}>`; }
      return `<p>${b.lines.map(inline).join("<br>")}</p>`;
    }).join("\n");
  }

  /* ───────────── exports ───────────── */
  function fileBase() {
    const n = (state.meta.name || "learner").normalize("NFD").replace(/[^\w]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
    return `AMPLIFY-problem-brief-${n || "learner"}`;
  }
  function download(name, blob) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  async function downloadDocx() {
    try {
      const d = await import("https://cdn.jsdelivr.net/npm/docx@9.5.1/+esm");
      const runs = (text) => text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part) =>
        part.startsWith("**") ? new d.TextRun({ text: part.slice(2, -2), bold: true }) : new d.TextRun({ text: part.replace(/\*([^*]+)\*/g, "$1").replace(/`/g, "") }));
      const children = [];
      const H = { 1: d.HeadingLevel.HEADING_1, 2: d.HeadingLevel.HEADING_2, 3: d.HeadingLevel.HEADING_3 };
      mdBlocks(ui.brief_md).forEach((b) => {
        if (b.type === "h") children.push(new d.Paragraph({ heading: H[b.level], children: runs(b.text), spacing: { before: 240, after: 120 } }));
        else if (b.type === "p") b.lines.forEach((l) => children.push(new d.Paragraph({ children: runs(l), spacing: { after: 80 } })));
        else if (b.type === "list") b.items.forEach((x, i) => children.push(b.ordered
          ? new d.Paragraph({ children: [new d.TextRun(`${i + 1}. `), ...runs(x)], indent: { left: 360 } })
          : new d.Paragraph({ children: runs(x), bullet: { level: 0 } })));
        else if (b.type === "table") {
          const cell = (txt, header) => new d.TableCell({
            children: [new d.Paragraph({ children: header ? [new d.TextRun({ text: txt.replace(/\*\*/g, ""), bold: true })] : runs(txt) })],
            shading: header ? { fill: "EBECF0" } : undefined,
            margins: { top: 60, bottom: 60, left: 80, right: 80 },
          });
          children.push(new d.Table({
            width: { size: 100, type: d.WidthType.PERCENTAGE },
            rows: [new d.TableRow({ tableHeader: true, children: b.head.map((c) => cell(c, true)) }), ...b.rows.map((r) => new d.TableRow({ children: r.map((c) => cell(c, false)) }))],
          }));
          children.push(new d.Paragraph({ text: "" }));
        }
      });
      const doc = new d.Document({
        styles: { default: { document: { run: { font: "Calibri", size: 22 } } } },
        sections: [{ children }],
      });
      download(fileBase() + ".docx", await d.Packer.toBlob(doc));
    } catch (e) {
      console.error(e);
      toast(t("docxErr"));
    }
  }

  /* ───────────── render & events ───────────── */
  const RENDER = [renderWelcome, renderProblem, renderInputs, renderOutputs, renderGap, renderFit, renderSkills, renderReview];

  function stageDone(n) {
    if (n === 0) return ui.agreed;
    if (state.coaching[n] && state.coaching[n].length) return true;
    const has = (o) => JSON.stringify(o).replace(/"[^"]*":/g, "").replace(/false|""|null|\[\]|\{\}|[,\[\]{}]/g, "").trim().length > 0;
    return { 1: () => has(state.problem), 2: () => has(state.inputs), 3: () => has(state.outputs), 4: () => has([state.gap, state.success]), 5: () => has(state.fit), 6: () => state.skills.some((s) => s.needed), 7: () => !!ui.brief_md }[n]();
  }

  function renderSteps() {
    $("#steps").innerHTML = t("stages").map((name, n) => `<li class="${n === ui.stage ? "current" : ""} ${n !== ui.stage && stageDone(n) ? "done" : ""}"><button type="button" data-go="${n}" ${n === ui.stage ? 'aria-current="step"' : ""}><span class="num">${stageDone(n) && n !== ui.stage ? "✓" : n}</span><span class="lbl">${esc(name)}</span></button></li>`).join("");
  }

  function applyStatic() {
    document.documentElement.lang = L();
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === L())));
    document.title = L() === "fr" ? "AMPLIFY · Coach de problème" : "AMPLIFY Problem Coach";
  }

  function render() {
    applyStatic();
    renderSteps();
    $("#stage").innerHTML = RENDER[ui.stage]();
  }

  function go(n) {
    n = Math.max(0, Math.min(7, n));
    if (ui.stage === 0 && n > 0 && !ui.agreed) {
      const msg = $("#agreeMsg"); if (msg) msg.textContent = t("w_needAgree");
      const box = $("#agree"); if (box) box.focus();
      return;
    }
    ui.stage = n; save(true); render();
    const stageEl = $("#stage");
    window.scrollTo({ top: Math.max(0, stageEl.getBoundingClientRect().top + window.scrollY - 90), behavior: "smooth" });
    stageEl.focus({ preventScroll: true });
  }

  function onInput(e) {
    const el = e.target;
    if (el.dataset.ui) { ui[el.dataset.ui] = el.value.trim().toUpperCase(); save(); return; }
    if (el.id === "agree") { ui.agreed = el.checked; save(); renderSteps(); const m = $("#agreeMsg"); if (m) m.textContent = ""; return; }
    if (el.dataset.multi) {
      const arr = new Set(getPath(state, el.dataset.multi) || []);
      el.checked ? arr.add(el.value) : arr.delete(el.value);
      setPath(state, el.dataset.multi, [...arr]); save(); return;
    }
    if (!el.dataset.path) return;
    let v = el.value;
    if (el.dataset.type === "bool") v = v === "true";
    if (el.dataset.type === "checkbox") v = el.checked;
    setPath(state, el.dataset.path, v);
    save();
    // Changes that alter the layout re-render the stage.
    if (/^inputs\.\d+\.format$/.test(el.dataset.path) || /^skills\.\d+\.needed$/.test(el.dataset.path)) {
      const y = window.scrollY; render(); window.scrollTo(0, y);
      if (/needed$/.test(el.dataset.path)) { const box = $(`[data-path="${el.dataset.path}"]`); if (box) box.focus({ preventScroll: true }); }
    } else if (/^skills\.\d+\.have$/.test(el.dataset.path)) {
      const card = $("#alignCard"); if (card) card.innerHTML = alignmentHtml();
    }
    if (e.type === "change") renderSteps();
  }

  function onClick(e) {
    const el = e.target.closest("button, [data-go]");
    if (!el) return;
    if (el.dataset.go != null) return go(Number(el.dataset.go));
    if (el.dataset.check) return checkStage(Number(el.dataset.check));
    if (el.dataset.add) { state[el.dataset.add].push(el.dataset.add === "inputs" ? blankInput() : blankOutput()); save(); render(); const rows = $$(".row"); const last = rows[rows.length - 1]; if (last) { const f = $("input, textarea", last); if (f) f.focus(); } return; }
    if (el.dataset.remove) { const [key, idx] = el.dataset.remove.split("."); state[key].splice(Number(idx), 1); save(); render(); return; }
    if (el.dataset.lang) { state.meta.locale = el.dataset.lang; save(true); render(); return; }
    switch (el.id) {
      case "genBtn": return generateBrief();
      case "dlMd": return download(fileBase() + ".md", new Blob([ui.brief_md], { type: "text/markdown" }));
      case "dlDocx": return downloadDocx();
      case "copyMd": return navigator.clipboard.writeText(ui.brief_md).then(() => toast(t("copied")), () => {});
      case "printMd": return window.print();
      case "snapBtn":
        state.skills_history.push({ saved_at: nowIso(), after_module: "Session " + $("#snapAfter").value, skills: JSON.parse(JSON.stringify(state.skills)) });
        save(true); return toast(t("s6_snapSaved"));
      case "saveProgress":
        return download(`AMPLIFY-problem-coach-progress-${new Date().toISOString().slice(0, 10)}.json`, new Blob([JSON.stringify({ state, ui: { stage: ui.stage, brief_md: ui.brief_md } }, null, 2)], { type: "application/json" }));
      case "resetAll":
        if (confirm(t("resetConfirm"))) {
          const loc = state.meta.locale;
          try { localStorage.removeItem(STORE_KEY); } catch (err) { /* ignore */ }
          state = freshState(loc); ui = { stage: 0, access_code: ui.access_code, agreed: false, brief_md: "", returning: false };
          save(true); render();
        }
    }
  }

  function onLoadFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data.state || data.state.version !== "1.0" || !data.state.meta) throw new Error("bad");
        state = data.state;
        ui = Object.assign({}, ui, { stage: (data.ui && data.ui.stage) || 1, brief_md: (data.ui && data.ui.brief_md) || "", agreed: true });
        save(true); render(); toast(t("loaded"));
      } catch (err) { toast(t("loadErr")); }
      e.target.value = "";
    };
    reader.readAsText(file);
  }

  async function loadConfig() {
    try {
      const res = await fetch("/api/coach", { headers: { Accept: "application/json" } });
      if (res.ok) config = Object.assign(config, await res.json());
      else config.reachable = false;
    } catch (e) { config.reachable = false; }
  }

  load();
  document.addEventListener("input", onInput);
  document.addEventListener("change", onInput);
  document.addEventListener("click", onClick);
  $("#loadProgress").addEventListener("change", onLoadFile);
  render();
  loadConfig().then(() => { if (ui.stage === 0) render(); });
})();
