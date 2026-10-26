// Génère le dossier crpe/ran-maths/ : une fiche de cours par RAN de maths (ran-01-….pdf à ran-12-….pdf)
// et la fiche de révision qui rassemble toutes les RAN (fiche-revision-toutes-les-ran.pdf), à partir de
// outils/ran-maths-contenu.js.
// Usage : node outils/pdf-ran-maths.js
const fs = require("fs");
const path = require("path");
const { RAN, FORMULAIRE } = require("./ran-maths-contenu");

function loadPlaywright() {
  for (const p of ["playwright", "/opt/node22/lib/node_modules/playwright"]) {
    try {
      return require(p);
    } catch {}
  }
  throw new Error("Playwright introuvable");
}

const root = path.join(__dirname, "..");
const out = path.join(root, "crpe", "ran-maths");

// Lien vers le cours Objectif CRPE de chaque RAN, repris de CRPE_COURS_OC dans mon-espace.html.
const html = fs.readFileSync(path.join(root, "mon-espace.html"), "utf8");
const lienOC = {};
for (const m of html.matchAll(/"t":"RAN (\d+) :[^"]*","d":\d+,"tok":"([^"]+)"/g)) {
  lienOC[m[1]] = `https://live.objectif-crpe.fr/eleve/cours/${m[2]}`;
}

const fichier = (r) => `ran-${String(r.n).padStart(2, "0")}-${r.slug}.pdf`;

const CSS = `
  body { font-family: "DejaVu Sans", Arial, sans-serif; font-size: 10.5pt; color: #111; line-height: 1.45; margin: 0; }
  header { border-bottom: 2px solid #1f4e79; padding-bottom: 6px; margin-bottom: 12px; }
  h1 { font-size: 17pt; margin: 0 0 2px; color: #1f4e79; }
  .sous { color: #444; font-size: 9.5pt; }
  h2 { font-size: 12.5pt; margin: 14px 0 6px; color: #1f4e79; break-after: avoid; }
  h3 { font-size: 11.5pt; margin: 0 0 4px; color: #1f4e79; }
  p, ul, ol { margin: 4px 0; }
  ul, ol { padding-left: 18px; }
  li { margin: 2px 0; }
  .def, .prop, .ex, .piege { padding: 5px 9px; margin: 6px 0; border-radius: 3px; break-inside: avoid; }
  .def { background: #eef4fb; border-left: 3px solid #1f4e79; }
  .prop { background: #f3f0fa; border-left: 3px solid #6a4c93; }
  .ex { background: #f4faf4; border-left: 3px solid #2e7d32; }
  .piege { background: #fdf3f0; border-left: 3px solid #c0392b; }
  .piege::before { content: "⚠ "; }
  table { border-collapse: collapse; width: 100%; margin: 6px 0; font-size: 9.5pt; break-inside: avoid; }
  th, td { border: 1px solid #bbb; padding: 3px 6px; text-align: left; vertical-align: top; }
  th { background: #e8eef5; }
  .f { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.9em; line-height: 1.15; margin: 0 1px; }
  .f > span:first-child { border-bottom: 1px solid currentColor; padding: 0 2px; }
  .f > span:last-child { padding: 0 2px; }
  .oc { font-size: 9pt; color: #555; margin-top: 12px; border-top: 1px solid #ccc; padding-top: 6px; }
  a { color: #1f4e79; }
  .grille { columns: 2; column-gap: 14px; }
  .bloc { break-inside: avoid; border: 1px solid #c9d6e3; border-radius: 4px; padding: 6px 8px; margin: 0 0 10px; }
  .bloc ul { padding-left: 14px; font-size: 9.3pt; }
  .num { display: inline-block; background: #1f4e79; color: white; border-radius: 3px; padding: 0 5px; margin-right: 4px; font-size: 9pt; }
`;

// Espace insécable dans les nombres (« 10 000 ») pour qu'ils ne soient pas coupés en fin de ligne.
const insecables = (t) => t.replace(/(\d) (?=\d{3}(?!\d))/g, "$1&nbsp;");

function pageRan(r) {
  const sections = r.sections.map((s) => `<h2>${s.h}</h2>${s.html}`).join("");
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${CSS}</style></head><body>
    <header>
      <h1>RAN ${r.n} — ${r.titre}</h1>
      <div class="sous">CRPE · Mathématiques · Remise à niveau ${r.n} sur 12 · Fiche de cours : définitions, propriétés, méthodes, exemples, pièges</div>
    </header>
    ${insecables(sections)}
    <h2>L'essentiel à retenir</h2>
    ${insecables(r.essentiel)}
    ${lienOC[r.n] ? `<div class="oc">Cours complet et exercices : Objectif CRPE → <a href="${lienOC[r.n]}">RAN ${r.n}</a>.</div>` : ""}
  </body></html>`;
}

function pageSynthese() {
  const blocs = RAN.map(
    (r) => `<div class="bloc"><h3><span class="num">RAN ${r.n}</span>${r.titre}</h3>${r.essentiel}</div>`
  ).join("");
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${CSS}</style></head><body>
    <header>
      <h1>Fiche de révision — les 12 RAN de maths</h1>
      <div class="sous">CRPE · Mathématiques · L'essentiel de chaque remise à niveau (définitions, propriétés, formules, pièges). Le détail et les exemples sont dans la fiche de chaque RAN.</div>
    </header>
    <div class="grille">${insecables(blocs)}</div>
    <h2>Formulaire et conversions</h2>
    ${insecables(FORMULAIRE)}
  </body></html>`;
}

(async () => {
  const { chromium } = loadPlaywright();
  const exe = fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined;
  const browser = await chromium.launch(exe ? { executablePath: exe } : {});
  fs.mkdirSync(out, { recursive: true });
  const pages = [...RAN.map((r) => [fichier(r), pageRan(r)]), ["fiche-revision-toutes-les-ran.pdf", pageSynthese()]];
  for (const [nom, contenu] of pages) {
    const p = await browser.newPage();
    await p.setContent(contenu, { waitUntil: "load" });
    const file = path.join(out, nom);
    await p.pdf({ path: file, format: "A4", margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" }, printBackground: true });
    console.log(path.relative(root, file));
  }
  await browser.close();
})();
