// Shared class-site interactivity: EN/FR toggle, checklists, copy buttons.
(function () {
  "use strict";

  window.LF = window.LF || {};

  // ---- Language -------------------------------------------------------
  LF.getLang = function () {
    return localStorage.getItem("omp-class-lang") || "en";
  };
  LF.setLang = function (lang) {
    localStorage.setItem("omp-class-lang", lang);
    document.body.classList.toggle("fr", lang === "fr");
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    document.dispatchEvent(new CustomEvent("lf:lang", { detail: { lang: lang } }));
  };

  function initLang() {
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () { LF.setLang(b.dataset.lang); });
    });
    LF.setLang(LF.getLang());
  }

  // ---- Checklists ------------------------------------------------------
  function initChecklists() {
    document.querySelectorAll("[data-checklist]").forEach(function (list) {
      var id = list.dataset.checklist;
      var boxes = list.querySelectorAll('input[type="checkbox"]');
      var fill = document.querySelector('[data-progress-fill="' + id + '"]');
      var label = document.querySelector('[data-progress-label="' + id + '"]');
      var saved = {};
      try { saved = JSON.parse(localStorage.getItem("checklist:" + id) || "{}"); } catch (e) {}

      function refresh() {
        var done = 0;
        boxes.forEach(function (b, i) {
          var on = !!saved[i];
          b.checked = on;
          b.closest("li").classList.toggle("done", on);
          if (on) done++;
        });
        var pct = boxes.length ? Math.round((100 * done) / boxes.length) : 0;
        if (fill) fill.style.width = pct + "%";
        if (label) label.textContent = done + " / " + boxes.length + " — " + pct + "%";
      }

      boxes.forEach(function (b, i) {
        b.addEventListener("change", function () {
          saved[i] = b.checked;
          localStorage.setItem("checklist:" + id, JSON.stringify(saved));
          refresh();
        });
      });
      refresh();
    });
  }

  // ---- Copy buttons -----------------------------------------------------
  function initCopyButtons() {
    document.querySelectorAll(".term").forEach(function (term) {
      var pre = term.querySelector("pre");
      if (!pre) return;
      var btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.type = "button";
      btn.dataset.en = "Copy";
      btn.dataset.fr = "Copier";
      btn.textContent = btn.dataset[LF.getLang()] || "Copy";
      btn.addEventListener("click", function () {
        var text = pre.innerText.replace(/^\s*PS> ?|^\s*> ?/gm, "");
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = btn.dataset[LF.getLang()] === "Copier" ? "Copié ✓" : "Copied ✓";
          btn.classList.add("copied");
          setTimeout(function () {
            btn.textContent = btn.dataset[LF.getLang()] || "Copy";
            btn.classList.remove("copied");
          }, 1500);
        });
      });
      term.appendChild(btn);
    });
    document.addEventListener("lf:lang", function (e) {
      document.querySelectorAll(".copy-btn").forEach(function (btn) {
        if (!btn.classList.contains("copied")) btn.textContent = btn.dataset[e.detail.lang] || "Copy";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initChecklists();
    initCopyButtons();
  });
})();
