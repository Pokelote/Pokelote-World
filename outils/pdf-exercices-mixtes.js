// Génère les PDF d'une série d'exercices mixtes CRPE (énoncés + corrigé) à partir de
// CRPE_EXERCICES_MIXTES dans mon-espace.html. Utilisé à la main et par la routine du matin.
// Usage : node outils/pdf-exercices-mixtes.js AAAA-MM-JJ[-suffixe]   (date, ou « cle » d'une 2e série du jour)
// Produit crpe/exercices-mixtes/<cle>-enonces.pdf et <cle>-corrige.pdf (+ <cle>-revision.pdf si la série a des rappels).
const fs = require("fs");
const path = require("path");

function loadPlaywright() {
  for (const p of ["playwright", "/opt/node22/lib/node_modules/playwright"]) {
    try {
      return require(p);
    } catch {}
  }
  throw new Error("Playwright introuvable");
}

const root = path.join(__dirname, "..");
const date = process.argv[2];
if (!/^\d{4}-\d{2}-\d{2}(-[a-z0-9]+)?$/.test(date || "")) {
  console.error("Usage : node outils/pdf-exercices-mixtes.js AAAA-MM-JJ[-suffixe]");
  process.exit(1);
}

const html = fs.readFileSync(path.join(root, "mon-espace.html"), "utf8");
const start = html.indexOf("const CRPE_EXERCICES_MIXTES = [");
const end = html.indexOf("\n];", start);
const series = new Function(`return ${html.slice(start + "const CRPE_EXERCICES_MIXTES = ".length, end + 2)};`)();
const serie = series.find((s) => (s.cle || s.date) === date);
if (!serie) {
  console.error(`Pas de série pour le ${date}`);
  process.exit(1);
}

const JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const d = new Date(serie.date + "T12:00:00");
const dateLongue = `${JOURS[d.getDay()]} ${d.getDate() === 1 ? "1er" : d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
const minutes = serie.exercices.reduce((a, ex) => a + (ex.minutes || 0), 0);
// Espace insécable dans les nombres (« 4 700 ») pour qu'ils ne soient pas coupés en fin de ligne.
const esc = (t) =>
  t
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(\d) (?=\d{3}(?!\d))/g, "$1&nbsp;")
    .replace(/\n/g, "<br>");

function page(corrige) {
  const blocs = serie.exercices
    .map(
      (ex, i) => `
    <section>
      <h2>Exercice ${i + 1} — ${esc(ex.titre)}</h2>
      <div class="meta">RAN ${ex.ran}${ex.minutes ? ` · ${ex.minutes} min` : ""}</div>
      <p class="enonce">${esc(ex.enonce)}</p>
      ${corrige ? `<div class="corrige"><strong>Corrigé</strong><br>${esc(ex.corrige).replace(/(►[^<:]*:)/g, "<b>$1</b>")}</div>` : ""}
    </section>`
    )
    .join("");
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
    body { font-family: "DejaVu Sans", Arial, sans-serif; font-size: 11pt; color: #111; line-height: 1.5; margin: 0; }
    header { border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 14px; }
    h1 { font-size: 16pt; margin: 0 0 4px; }
    .sous { color: #444; font-size: 10pt; }
    .consigne { background: #f2f2f2; padding: 8px 10px; border-radius: 4px; font-size: 10pt; margin-bottom: 14px; }
    section { break-inside: avoid; margin-bottom: 16px; }
    h2 { font-size: 12pt; margin: 0 0 2px; }
    .meta { font-size: 9pt; color: #555; margin-bottom: 6px; }
    .enonce { margin: 0; }
    .corrige { margin-top: 8px; border-left: 3px solid #2e7d32; padding: 4px 0 4px 10px; background: #f4faf4; }
  </style></head><body>
    <header>
      <h1>CRPE — Exercices mixtes${corrige ? " · CORRIGÉ" : ""}</h1>
      <div class="sous">Série du ${dateLongue}${serie.moment ? ` (${serie.moment})` : ""} · RAN ${serie.rans.join(", ")} · ${serie.exercices.length} exercices · ≈ ${minutes} min</div>
    </header>
    ${
      corrige
        ? `<div class="consigne">À lire seulement après avoir fini. Note ensuite chaque exercice sur le site (Réussi / Partiel / Raté) : ce qui est raté revient sous une autre forme les jours suivants.</div>`
        : `<div class="consigne">1h maximum, sans cours ni fiches, chronomètre lancé. Rédige comme sur la copie : calculs détaillés, propriétés nommées, phrase de conclusion.</div>`
    }
    ${blocs}
  </body></html>`;
}

// Révision flash de 5 à 10 min à lire juste avant la série (serie.rappels : [{ titre, points }]).
function pageRevision() {
  const blocs = serie.rappels
    .map((r) => `<section><h2>${esc(r.titre)}</h2><ul>${r.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul></section>`)
    .join("");
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
    body { font-family: "DejaVu Sans", Arial, sans-serif; font-size: 10pt; color: #111; line-height: 1.4; margin: 0; }
    header { border-bottom: 2px solid #1f4e79; padding-bottom: 6px; margin-bottom: 10px; }
    h1 { font-size: 15pt; margin: 0 0 3px; color: #1f4e79; }
    .sous { color: #444; font-size: 9.5pt; }
    section { break-inside: avoid; margin-bottom: 8px; border-left: 3px solid #1f4e79; background: #f3f6fa; padding: 4px 10px; }
    h2 { font-size: 11pt; margin: 2px 0; color: #1f4e79; }
    ul { margin: 2px 0; padding-left: 16px; }
    li { margin: 1px 0; }
  </style></head><body>
    <header>
      <h1>Révision flash avant le test (5 à 10 min)</h1>
      <div class="sous">Série du ${dateLongue}${serie.moment ? ` (${serie.moment})` : ""} · RAN ${serie.rans.join(", ")} · lis, puis range la fiche avant de lancer le chrono.</div>
    </header>
    ${blocs}
  </body></html>`;
}

(async () => {
  const { chromium } = loadPlaywright();
  const exe = fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined;
  const browser = await chromium.launch(exe ? { executablePath: exe } : {});
  const out = path.join(root, "crpe", "exercices-mixtes");
  fs.mkdirSync(out, { recursive: true });
  const pages = [["enonces", page(false)], ["corrige", page(true)]];
  if (serie.rappels) pages.push(["revision", pageRevision()]);
  for (const [nom, contenu] of pages) {
    const p = await browser.newPage();
    await p.setContent(contenu, { waitUntil: "load" });
    const file = path.join(out, `${date}-${nom}.pdf`);
    await p.pdf({ path: file, format: "A4", margin: { top: "16mm", bottom: "16mm", left: "16mm", right: "16mm" }, printBackground: true });
    console.log(path.relative(root, file));
  }
  await browser.close();
})();
