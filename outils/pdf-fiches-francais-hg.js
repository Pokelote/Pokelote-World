// Fiches de cours à recopier de français (crpe/francais/) et d'histoire-géo-EMC (crpe/histoire-geo/),
// sur le modèle des fiches des RAN de maths (outils/pdf-ran-maths.js) : une fiche par étape du parcours,
// une fiche de révision (l'essentiel de chaque fiche). Le PDF « tout-en-un » de chaque dossier est
// assemblé ensuite par outils/page-fiches-crpe.py (pypdf).
// Contenu : outils/fiches-francais-contenu.js et outils/fiches-hgemc-contenu.js.
// Usage : node outils/pdf-fiches-francais-hg.js
const fs = require("fs");
const path = require("path");
const { FICHES_FRANCAIS } = require("./fiches-francais-contenu");
const { FICHES_HGEMC } = require("./fiches-hgemc-contenu");
const { ILLUSTRATIONS_QUESTIONS } = require("./illustrations");
const { CSS, insecables } = require("./fiches-style");

function loadPlaywright() {
  for (const p of ["playwright", "/opt/node22/lib/node_modules/playwright"]) {
    try {
      return require(p);
    } catch {}
  }
  throw new Error("Playwright introuvable");
}

const root = path.join(__dirname, "..");
const MATIERES = [
  { dossier: "francais", nom: "Français", court: "Français", fiches: FICHES_FRANCAIS, revision: "fiche-revision-francais.pdf" },
  { dossier: "histoire-geo", nom: "Histoire-géographie-EMC", court: "HG-EMC", fiches: FICHES_HGEMC, revision: "fiche-revision-histoire-geo-emc.pdf" },
];
const fichier = (f) => `fiche-${String(f.n).padStart(2, "0")}-${f.slug}.pdf`;
const doc = (corps) => `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${CSS}
  .frise { width: 100%; border: 1px solid #ccc; border-radius: 4px; margin: 4px 0 8px; }
  figure { width: 31%; box-sizing: border-box; }
</style></head><body>${corps}</body></html>`;

// Les schémas sont ajoutés après insecables(), qui abîmerait les coordonnées des SVG.
function figures(f) {
  const figs = (f.illustrations || []).filter((q) => ILLUSTRATIONS_QUESTIONS[q]);
  if (!figs.length) return "";
  return `<h2>En images</h2><div class="figs">${figs
    .map((q) => `<figure>${ILLUSTRATIONS_QUESTIONS[q]}<figcaption>${q}</figcaption></figure>`)
    .join("")}</div>`;
}

function image(f) {
  if (!f.image) return "";
  const b64 = fs.readFileSync(path.join(root, "crpe", f.image)).toString("base64");
  return `<img class="frise" src="data:image/png;base64,${b64}" alt="Frise chronologique">`;
}

function pageFiche(m, f) {
  return doc(`
    <header>
      <h1>${m.court} ${f.n} — ${f.titre}</h1>
      <div class="sous">CRPE · ${m.nom} · Fiche ${f.n} sur ${m.fiches.length} · Fiche de cours à recopier : définitions, règles, méthodes, exemples, pièges</div>
    </header>
    ${image(f)}
    ${insecables(f.sections.map((s) => `<h2>${s.h}</h2>${s.html}`).join(""))}
    ${figures(f)}
    <h2>L'essentiel à retenir</h2>
    ${insecables(f.essentiel)}`);
}

function pageRevision(m) {
  const blocs = m.fiches.map((f) => `<div class="bloc"><h3><span class="num">${m.court} ${f.n}</span>${f.titre}</h3>${f.essentiel}</div>`).join("");
  return doc(`
    <header>
      <h1>Fiche de révision — ${m.nom}</h1>
      <div class="sous">CRPE · L'essentiel de chaque fiche. Le détail et les exemples sont dans la fiche correspondante.</div>
    </header>
    <div class="grille">${insecables(blocs)}</div>`);
}

(async () => {
  const { chromium } = loadPlaywright();
  const exe = fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined;
  const browser = await chromium.launch(exe ? { executablePath: exe } : {});
  for (const m of MATIERES) {
    const out = path.join(root, "crpe", m.dossier);
    fs.mkdirSync(out, { recursive: true });
    // Liste des fiches (titres complets) lue par outils/page-fiches-crpe.py.
    fs.writeFileSync(path.join(out, "fiches.json"), JSON.stringify(m.fiches.map((f) => ({ fichier: fichier(f), titre: `${m.court} ${f.n} — ${f.titre}`, etape: f.etape })), null, 1) + "\n");
    const pages = [[m.revision, pageRevision(m)], ...m.fiches.map((f) => [fichier(f), pageFiche(m, f)])];
    for (const [nom, contenu] of pages) {
      const p = await browser.newPage();
      await p.setContent(contenu, { waitUntil: "load" });
      const file = path.join(out, nom);
      await p.pdf({ path: file, format: "A4", margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" }, printBackground: true });
      console.log(path.relative(root, file));
    }
  }
  await browser.close();
})();
