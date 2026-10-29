// Slide deck engine + charts + map. Depends on: LF_DATA, NGA_GEO, LF (site.js),
// Chart.js and Leaflet (CDN).
(function () {
  "use strict";

  var slides = document.querySelectorAll(".slide");
  var total = slides.length;
  var current = 0;
  var prevBtn = document.getElementById("nav-prev");
  var nextBtn = document.getElementById("nav-next");
  var countEl = document.getElementById("deck-count");
  var dotsEl = document.getElementById("deck-dots");

  var built = {};      // per-slide lazy builders
  var charts = {};     // chart instances to rebuild on language change
  var mapReady = false;

  function lang() { return LF.getLang(); }
  function M(en, fr) { return lang() === "fr" ? fr : en; }

  // ---------- navigation ----------
  for (var i = 0; i < total; i++) {
    var d = document.createElement("button");
    d.className = "dotbtn";
    d.type = "button";
    d.setAttribute("aria-label", "Slide " + (i + 1));
    (function (idx) { d.addEventListener("click", function () { go(idx); }); })(i);
    dotsEl.appendChild(d);
  }

  function go(n) {
    current = Math.max(0, Math.min(total - 1, n));
    slides.forEach(function (s, i) { s.classList.toggle("active", i === current); });
    dotsEl.querySelectorAll(".dotbtn").forEach(function (d, i) {
      d.classList.toggle("active", i === current);
    });
    countEl.textContent = (current + 1) + " / " + total;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    if (built[current]) built[current]();
  }

  prevBtn.addEventListener("click", function () { go(current - 1); });
  nextBtn.addEventListener("click", function () { go(current + 1); });
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") go(current + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") go(current - 1);
    if (e.key === "Home") go(0);
    if (e.key === "End") go(total - 1);
  });

  // ---------- chart style ----------
  if (window.Chart) {
    Chart.defaults.color = "#44564c";
    // No animations: frozen/print contexts can suspend rAF and leave a blank canvas.
    Chart.defaults.animation = false;
    Chart.defaults.borderColor = "rgba(120, 132, 125, .3)";
    Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
  }

  var CAT_COLORS = {
    notDelivered: "#f87171",
    underMDA: "#fbbf24",
    targeted: "#fb923c",
    pendingIA: "#38bdf8",
    postMDA: "#10b981",
    nonEndemic: "#ccd8d0"
  };

  // ---------- slide 2: national trend ----------
  function buildTrend() {
    var el = document.getElementById("chart-trend");
    if (!el || !window.Chart) return;
    if (charts.trend) charts.trend.destroy();
    charts.trend = new Chart(el, {
      data: {
        labels: LF_DATA.years,
        datasets: [
          {
            type: "bar",
            label: M("Population treated (M)", "Population traitée (M)"),
            data: LF_DATA.nat.map(function (n) { return Math.round(n.popTreat / 1e4) / 100; }),
            backgroundColor: "#14b8a6",
            borderRadius: 4,
            order: 2
          },
          {
            type: "line",
            label: M("Population requiring MDA (M)", "Population nécessitant une DAM (M)"),
            data: LF_DATA.nat.map(function (n) { return Math.round(n.popReq / 1e4) / 100; }),
            borderColor: "#d97706",
            backgroundColor: "rgba(217,119,6,.10)",
            fill: true,
            tension: .35,
            pointRadius: 4,
            pointBackgroundColor: "#d97706",
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { position: "top" },
          tooltip: {
            callbacks: {
              label: function (c) { return c.dataset.label + ": " + c.parsed.y.toLocaleString(M("en-US", "fr-FR")) + " M"; }
            }
          }
        },
        scales: {
          y: { title: { display: true, text: M("Millions of people", "Millions de personnes") } }
        }
      }
    });
  }

  // ---------- slide 3: status pipeline ----------
  function buildStatus() {
    var el = document.getElementById("chart-status");
    if (!el || !window.Chart) return;
    if (charts.status) charts.status.destroy();
    var labels = {
      notDelivered: M("MDA not delivered", "DAM non réalisée"),
      underMDA: M("Under MDA", "Sous DAM"),
      targeted: M("Targeted treatment", "Traitement ciblé"),
      pendingIA: M("Pending impact assessment", "En attente d'évaluation d'impact"),
      postMDA: M("Post-intervention surveillance", "Surveillance post-intervention"),
      nonEndemic: M("Non-endemic", "Non endémique")
    };
    charts.status = new Chart(el, {
      type: "bar",
      data: {
        labels: LF_DATA.years,
        datasets: Object.keys(labels).map(function (k) {
          return {
            label: labels[k],
            data: LF_DATA.cats[k],
            backgroundColor: CAT_COLORS[k],
            borderColor: "#ffffff",
            borderWidth: 1
          };
        })
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { boxWidth: 14 } },
          tooltip: { mode: "index" }
        },
        scales: {
          x: { stacked: true },
          y: {
            stacked: true,
            max: 774,
            title: { display: true, text: M("Number of IUs (of 774)", "Nombre d'IU (sur 774)") }
          }
        }
      }
    });
  }

  // ---------- slide 4: map ----------
  var BREAKS = [99.9, 95, 80, 50, 20, 0];
  var BREAK_COLORS = ["#0d9488", "#2dd4a7", "#a3e635", "#fbbf24", "#fb923c", "#f87171"];

  function breakLabel() {
    return lang() === "fr"
      ? [["≥ 99,9 %", BREAK_COLORS[0]], ["95–99,8 %", BREAK_COLORS[1]], ["80–94 %", BREAK_COLORS[2]], ["50–79 %", BREAK_COLORS[3]], ["20–49 %", BREAK_COLORS[4]], ["< 20 %", BREAK_COLORS[5]]]
      : [["≥ 99.9%", BREAK_COLORS[0]], ["95–99.8%", BREAK_COLORS[1]], ["80–94%", BREAK_COLORS[2]], ["50–79%", BREAK_COLORS[3]], ["20–49%", BREAK_COLORS[4]], ["< 20%", BREAK_COLORS[5]]];
  }

  function colorFor(pct) {
    if (pct == null) return "#e3eae5";
    if (pct >= 99.9) return BREAK_COLORS[0];
    if (pct >= 95) return BREAK_COLORS[1];
    if (pct >= 80) return BREAK_COLORS[2];
    if (pct >= 50) return BREAK_COLORS[3];
    if (pct >= 20) return BREAK_COLORS[4];
    return BREAK_COLORS[5];
  }

  function fmtM(v) {
    return (v / 1e6).toLocaleString(M("en-US", "fr-FR"), { maximumFractionDigits: 1 }) + " M";
  }

  var leafletMap = null, geoLayer = null;

  function buildMap() {
    var el = document.getElementById("lf-map");
    if (!el || !window.L) return;
    var legendEl = document.getElementById("map-legend");
    legendEl.innerHTML = breakLabel().map(function (b) {
      return '<span style="display:inline-block;margin-right:1rem">' +
        '<span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:' + b[1] +
        ';vertical-align:-2px;margin-right:.35rem"></span>' + b[0] + "</span>";
    }).join("") +
      '<span style="display:inline-block;margin-right:1rem">' +
      '<span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#e3eae5;border:1px solid var(--border)' +
      ';vertical-align:-2px;margin-right:.35rem"></span>' +
      M("No LF MDA required", "Aucune DAM requise") + "</span>";

    if (!leafletMap) {
      leafletMap = L.map(el, { attributionControl: false, zoomControl: true, scrollWheelZoom: false });
      L.control.attribution({ prefix: false }).addTo(leafletMap);
    }
    if (geoLayer) geoLayer.remove();

    function tooltipFor(name) {
      var st = LF_DATA.states[name] || LF_DATA.states[name.replace("lbom", "Ibom")];
      if (!st) return "<strong>" + name + "</strong><br>" + M("No data", "Pas de données");
      if (st.pctReduced == null) {
        return "<strong>" + name + "</strong><br>" +
          M("No LF MDA required — all IUs non-endemic for LF.", "Aucune DAM contre la FL requise — toutes les IU sont non endémiques pour la FL.") + "<br>" +
          M("IUs: ", "IU : ") + st.ius;
      }
      return "<strong>" + name + "</strong><br>" +
        M("Requiring MDA: ", "Nécessitant une DAM : ") + fmtM(st.req2014) + " → " + fmtM(st.req2025) + "<br>" +
        M("Reduction: ", "Réduction : ") + st.pctReduced.toLocaleString(M("en-US", "fr-FR")) + "%" + "<br>" +
        M("IUs: ", "IU : ") + st.ius + M(" · ", " · ") + st.pctPost + "%" + M(" post-MDA/non-endemic (2025)", " post-DAM/non endémiques (2025)");
    }

    geoLayer = L.geoJSON(NGA_GEO, {
      style: function (f) {
        var st = LF_DATA.states[f.properties.name] || LF_DATA.states[f.properties.name.replace("lbom", "Ibom")];
        return {
          fillColor: colorFor(st ? st.pctReduced : null),
          fillOpacity: .82,
          color: "#ffffff",
          weight: 1
        };
      },
      onEachFeature: function (f, layer) {
        layer.bindTooltip(tooltipFor(f.properties.name), { sticky: true });
        layer.on("mouseover", function () { layer.setStyle({ weight: 2.5, color: "#0f9d78" }); });
        layer.on("mouseout", function () { geoLayer.resetStyle(layer); });
      }
    }).addTo(leafletMap);
    leafletMap.fitBounds(geoLayer.getBounds(), { padding: [10, 10] });

    if (!mapReady) {
      setTimeout(function () { leafletMap.invalidateSize(); }, 60);
      mapReady = true;
    } else {
      leafletMap.invalidateSize();
    }
  }

  built[1] = buildTrend;
  built[2] = buildStatus;
  built[3] = buildMap;

  // Rebuild live viz when the language toggles.
  document.addEventListener("lf:lang", function () {
    if (charts.trend) buildTrend();
    if (charts.status) buildStatus();
    if (leafletMap) buildMap();
  });

  go(0);
})();
