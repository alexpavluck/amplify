// Claude Teams short course: "Who can see this?" game + finish badge.
(function () {
  "use strict";

  function bi(en, fr) {
    return '<span class="lang-en">' + en + '</span><span class="lang-fr">' + fr + "</span>";
  }

  // Inline SVG icons (lucide, 24px grid), decorative: containers are aria-hidden.
  var ICON = {
    "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    "book-open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    "eye-off": '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
    "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    "palette": '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    "pin": '<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
    "brain": '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>',
    "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    "plug": '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    "trophy": '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    "medal": '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/>',
    "sprout": '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
    "check": '<path d="M20 6 9 17l-5-5"/>',
    "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
  };
  function ico(name) {
    return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[name] + "</svg>";
  }

  var ITEMS = [
    { e: "message-circle", a: "me",
      q: ["A chat you start from the Claude home screen (not inside any project)", "Une conversation lancée depuis l'accueil de Claude (hors de tout projet)"],
      why: ["Chats are your private notebook. Nobody on the team sees them unless you deliberately share one.", "Les conversations sont votre carnet privé. Personne dans l'équipe ne les voit, sauf si vous en partagez une volontairement."] },
    { e: "book-open", a: "team",
      q: ["A PDF you upload to the knowledge of a shared project", "Un PDF ajouté aux connaissances d'un projet partagé"],
      why: ["Project knowledge is the shared binder: everyone with access to the project can read it — and Claude uses it in their chats too.", "Les connaissances du projet sont le classeur commun : tous ceux qui ont accès au projet peuvent les lire — et Claude s'en sert aussi dans leurs conversations."] },
    { e: "eye-off", a: "me",
      q: ["Your chats inside a shared project", "Vos conversations à l'intérieur d'un projet partagé"],
      why: ["The surprise of the day! Sharing a project shares its instructions and files — not the chats. Your chats stay yours unless you share one.", "La surprise du jour ! Partager un projet partage ses instructions et ses fichiers — pas les conversations. Les vôtres restent à vous, sauf si vous en partagez une."] },
    { e: "file-text", a: "team",
      q: ["The custom instructions of a project shared with your team", "Les instructions personnalisées d'un projet partagé avec votre équipe"],
      why: ["Instructions belong to the project, so every member sees them. Only people with “Can edit” can change them.", "Les instructions appartiennent au projet : chaque membre les voit. Seules les personnes avec « Can edit » peuvent les modifier."] },
    { e: "palette", a: "me",
      q: ["An artifact Claude just built for you in a chat", "Un artefact que Claude vient de créer pour vous dans une conversation"],
      why: ["Artifacts start private. They only reach the team when you press Share.", "Les artefacts naissent privés. Ils n'arrivent à l'équipe que lorsque vous cliquez sur Partager."] },
    { e: "pin", a: "team",
      q: ["An artifact you shared with “everyone at your organization”", "Un artefact partagé avec « tout le monde dans votre organisation »"],
      why: ["Now it's on the noticeboard: any signed-in member of the team workspace can open the link. People outside the organization can't.", "Le voilà au tableau d'affichage : tout membre connecté de l'espace d'équipe peut ouvrir le lien. Les personnes extérieures, non."] },
    { e: "brain", a: "me",
      q: ["What Claude remembers about you (memory and your profile preferences)", "Ce dont Claude se souvient à votre sujet (mémoire et préférences de profil)"],
      why: ["Memory and preferences are personal. Your teammates get their own Claude; yours isn't passed around.", "La mémoire et les préférences sont personnelles. Vos collègues ont leur propre Claude ; le vôtre n'est pas partagé."] },
    { e: "link", a: "team",
      q: ["A chat you shared with a teammate using the Share button", "Une conversation partagée avec un collègue via le bouton Partager"],
      why: ["They get a view-only snapshot. On a Team plan, chat sharing stays inside the organization — there's no public link.", "Il reçoit une copie en lecture seule. Avec un plan Team, le partage reste dans l'organisation — pas de lien public."] },
    { e: "plug", a: "me",
      q: ["Your Google Drive, after you connect it to Claude", "Votre Google Drive, après l'avoir connecté à Claude"],
      why: ["Connectors use your own login. Claude reads your Drive only in your chats — teammates connect their own.", "Les connecteurs utilisent votre propre identifiant. Claude lit votre Drive uniquement dans vos conversations — vos collègues connectent le leur."] },
    { e: "globe", a: "world",
      q: ["The website you published on Vercel in the GitHub + Vercel short course", "Le site publié sur Vercel dans le cours express GitHub + Vercel"],
      why: ["Trick question — that one left Claude entirely. A .vercel.app site is public to the whole internet. Team artifacts can't go public unless an Owner turns on external sharing.", "Question piège — celui-là a quitté Claude. Un site .vercel.app est public pour tout internet. Les artefacts Team ne peuvent pas devenir publics sauf si un Owner active le partage externe."] }
  ];

  var LABEL = {
    me: ["Only me", "Moi seul·e"],
    team: ["My team", "Mon équipe"],
    world: ["The whole internet", "Tout internet"]
  };

  function initGame() {
    var root = document.querySelector("[data-game]");
    if (!root) return;
    var i = 0, score = 0, results = [];
    var els = {
      count: root.querySelector(".game-count"),
      score: root.querySelector(".game-score"),
      dots: root.querySelector(".game-dots"),
      card: root.querySelector(".game-card"),
      emoji: root.querySelector(".item-emoji"),
      text: root.querySelector(".item-text"),
      choices: root.querySelector(".game-choices"),
      fb: root.querySelector(".game-feedback"),
      next: root.querySelector(".game-next"),
      end: root.querySelector(".game-end")
    };

    ["me", "team", "world"].forEach(function (k) {
      var b = document.createElement("button");
      b.type = "button";
      b.dataset.a = k;
      b.innerHTML = bi(LABEL[k][0], LABEL[k][1]);
      b.addEventListener("click", function () { answer(k, b); });
      els.choices.appendChild(b);
    });

    function dots() {
      els.dots.innerHTML = "";
      ITEMS.forEach(function (_, n) {
        var s = document.createElement("span");
        if (results[n] === true) s.className = "ok";
        else if (results[n] === false) s.className = "no";
        else if (n === i) s.className = "now";
        els.dots.appendChild(s);
      });
    }

    function show() {
      var it = ITEMS[i];
      els.count.innerHTML = bi("Card " + (i + 1) + " of " + ITEMS.length, "Carte " + (i + 1) + " sur " + ITEMS.length);
      els.score.innerHTML = bi("Score: " + score, "Score : " + score);
      els.emoji.innerHTML = ico(it.e);
      els.text.innerHTML = bi(it.q[0], it.q[1]);
      els.fb.className = "game-feedback";
      els.next.hidden = true;
      els.choices.querySelectorAll("button").forEach(function (b) {
        b.disabled = false; b.className = "";
      });
      dots();
    }

    function answer(k, btn) {
      var it = ITEMS[i], ok = k === it.a;
      if (ok) score++;
      results[i] = ok;
      els.choices.querySelectorAll("button").forEach(function (b) {
        b.disabled = true;
        b.classList.add(b.dataset.a === it.a ? "picked" : "dim");
      });
      var verdict = ok
        ? ico("check") + " " + bi("Correct! ", "Exact ! ")
        : ico("x") + " " + bi("Not quite — the answer is “" + LABEL[it.a][0] + "”.", "Pas tout à fait — la réponse est « " + LABEL[it.a][1] + " ».");
      els.fb.innerHTML = '<span class="verdict">' + verdict + "</span>" + bi(it.why[0], it.why[1]);
      els.fb.className = "game-feedback show " + (ok ? "right" : "wrong");
      els.score.innerHTML = bi("Score: " + score, "Score : " + score);
      els.next.hidden = false;
      els.next.querySelector("button").innerHTML = i === ITEMS.length - 1
        ? bi("See my result →", "Voir mon résultat →")
        : bi("Next card →", "Carte suivante →");
      dots();
    }

    function finish() {
      els.card.hidden = true;
      var badge, en, fr;
      if (score === ITEMS.length) { badge = "trophy"; en = ["Privacy Pro!", "Perfect score. You know exactly what's yours and what's shared."]; fr = ["Pro de la confidentialité !", "Score parfait. Vous savez exactement ce qui est à vous et ce qui est partagé."]; }
      else if (score >= 7) { badge = "medal"; en = ["Team Player", "Great instincts. Re-read the cards you missed — they're the ones that surprise people."]; fr = ["Joueur d'équipe", "Très bons réflexes. Relisez les cartes manquées — ce sont celles qui surprennent."]; }
      else { badge = "sprout"; en = ["Fresh Recruit", "No problem — that's why we play first. Have another go after reading “three rooms” above."]; fr = ["Nouvelle recrue", "Pas de souci — c'est pour cela qu'on joue d'abord. Rejouez après avoir relu les « trois pièces » ci-dessus."]; }
      els.end.querySelector(".badge").innerHTML = ico(badge);
      els.end.querySelector("h3").innerHTML = bi(en[0], fr[0]) + " · " + score + "/" + ITEMS.length;
      els.end.querySelector("p").innerHTML = bi(en[1], fr[1]);
      els.end.classList.add("show");
      els.count.innerHTML = bi("Done!", "Terminé !");
      i = ITEMS.length; dots();
    }

    els.next.querySelector("button").addEventListener("click", function () {
      if (i < ITEMS.length - 1) { i++; show(); } else finish();
    });
    els.end.querySelector(".game-restart").addEventListener("click", function () {
      i = 0; score = 0; results = [];
      els.end.classList.remove("show");
      els.card.hidden = false;
      show();
    });
    show();
  }

  // Finish badge: unlocks when every checklist on the page is complete.
  function initFinish() {
    var box = document.querySelector("[data-finish]");
    if (!box) return;
    function check() {
      var all = document.querySelectorAll('[data-checklist] input[type="checkbox"]');
      var done = document.querySelectorAll('[data-checklist] input[type="checkbox"]:checked');
      box.classList.toggle("locked", done.length < all.length);
      box.querySelector("[data-finish-count]").textContent = done.length + " / " + all.length;
    }
    document.addEventListener("change", check);
    setTimeout(check, 0);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initGame();
    initFinish();
  });
})();
