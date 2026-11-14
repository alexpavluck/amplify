// Claude Teams short course: "Who can see this?" game + finish badge.
(function () {
  "use strict";

  function bi(en, fr) {
    return '<span class="lang-en">' + en + '</span><span class="lang-fr">' + fr + "</span>";
  }

  var ITEMS = [
    { e: "💬", a: "me",
      q: ["A chat you start from the Claude home screen (not inside any project)", "Une conversation lancée depuis l'accueil de Claude (hors de tout projet)"],
      why: ["Chats are your private notebook. Nobody on the team sees them unless you deliberately share one.", "Les conversations sont votre carnet privé. Personne dans l'équipe ne les voit, sauf si vous en partagez une volontairement."] },
    { e: "📚", a: "team",
      q: ["A PDF you upload to the knowledge of a shared project", "Un PDF ajouté aux connaissances d'un projet partagé"],
      why: ["Project knowledge is the shared binder: everyone with access to the project can read it — and Claude uses it in their chats too.", "Les connaissances du projet sont le classeur commun : tous ceux qui ont accès au projet peuvent les lire — et Claude s'en sert aussi dans leurs conversations."] },
    { e: "🤫", a: "me",
      q: ["Your chats inside a shared project", "Vos conversations à l'intérieur d'un projet partagé"],
      why: ["The surprise of the day! Sharing a project shares its instructions and files — not the chats. Your chats stay yours unless you share one.", "La surprise du jour ! Partager un projet partage ses instructions et ses fichiers — pas les conversations. Les vôtres restent à vous, sauf si vous en partagez une."] },
    { e: "📝", a: "team",
      q: ["The custom instructions of a project shared with your team", "Les instructions personnalisées d'un projet partagé avec votre équipe"],
      why: ["Instructions belong to the project, so every member sees them. Only people with “Can edit” can change them.", "Les instructions appartiennent au projet : chaque membre les voit. Seules les personnes avec « Can edit » peuvent les modifier."] },
    { e: "🎨", a: "me",
      q: ["An artifact Claude just built for you in a chat", "Un artefact que Claude vient de créer pour vous dans une conversation"],
      why: ["Artifacts start private. They only reach the team when you press Share.", "Les artefacts naissent privés. Ils n'arrivent à l'équipe que lorsque vous cliquez sur Partager."] },
    { e: "📌", a: "team",
      q: ["An artifact you shared with “everyone at your organization”", "Un artefact partagé avec « tout le monde dans votre organisation »"],
      why: ["Now it's on the noticeboard: any signed-in member of the team workspace can open the link. People outside the organization can't.", "Le voilà au tableau d'affichage : tout membre connecté de l'espace d'équipe peut ouvrir le lien. Les personnes extérieures, non."] },
    { e: "🧠", a: "me",
      q: ["What Claude remembers about you (memory and your profile preferences)", "Ce dont Claude se souvient à votre sujet (mémoire et préférences de profil)"],
      why: ["Memory and preferences are personal. Your teammates get their own Claude; yours isn't passed around.", "La mémoire et les préférences sont personnelles. Vos collègues ont leur propre Claude ; le vôtre n'est pas partagé."] },
    { e: "🔗", a: "team",
      q: ["A chat you shared with a teammate using the Share button", "Une conversation partagée avec un collègue via le bouton Partager"],
      why: ["They get a view-only snapshot. On a Team plan, chat sharing stays inside the organization — there's no public link.", "Il reçoit une copie en lecture seule. Avec un plan Team, le partage reste dans l'organisation — pas de lien public."] },
    { e: "🔌", a: "me",
      q: ["Your Google Drive, after you connect it to Claude", "Votre Google Drive, après l'avoir connecté à Claude"],
      why: ["Connectors use your own login. Claude reads your Drive only in your chats — teammates connect their own.", "Les connecteurs utilisent votre propre identifiant. Claude lit votre Drive uniquement dans vos conversations — vos collègues connectent le leur."] },
    { e: "🌍", a: "world",
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
      els.emoji.textContent = it.e;
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
        ? bi("✓ Correct! ", "✓ Exact ! ")
        : bi("✗ Not quite — the answer is “" + LABEL[it.a][0] + "”.", "✗ Pas tout à fait — la réponse est « " + LABEL[it.a][1] + " ».");
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
      if (score === ITEMS.length) { badge = "🏆"; en = ["Privacy Pro!", "Perfect score. You know exactly what's yours and what's shared."]; fr = ["Pro de la confidentialité !", "Score parfait. Vous savez exactement ce qui est à vous et ce qui est partagé."]; }
      else if (score >= 7) { badge = "🥈"; en = ["Team Player", "Great instincts. Re-read the cards you missed — they're the ones that surprise people."]; fr = ["Joueur d'équipe", "Très bons réflexes. Relisez les cartes manquées — ce sont celles qui surprennent."]; }
      else { badge = "🌱"; en = ["Fresh Recruit", "No problem — that's why we play first. Have another go after reading “three rooms” above."]; fr = ["Nouvelle recrue", "Pas de souci — c'est pour cela qu'on joue d'abord. Rejouez après avoir relu les « trois pièces » ci-dessus."]; }
      els.end.querySelector(".badge").textContent = badge;
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
