// Génère le dossier crpe/ran-maths/ : une fiche de cours par RAN de maths (ran-01-….pdf à ran-12-….pdf)
// la fiche de révision qui rassemble toutes les RAN (fiche-revision-toutes-les-ran.pdf) et la fiche des
// définitions, chacune avec un exemple (fiche-definitions-ran-maths.pdf), à partir de
// outils/ran-maths-contenu.js.
// Usage : node outils/pdf-ran-maths.js
const fs = require("fs");
const path = require("path");
const { RAN, FORMULAIRE, DEFINITIONS } = require("./ran-maths-contenu");
const { ILLUSTRATIONS_MATHS } = require("./illustrations");
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
const out = path.join(root, "crpe", "ran-maths");

// Lien vers le cours Objectif CRPE de chaque RAN, repris de CRPE_COURS_OC dans mon-espace.html.
const html = fs.readFileSync(path.join(root, "mon-espace.html"), "utf8");
const lienOC = {};
for (const m of html.matchAll(/"t":"RAN (\d+) :[^"]*","d":\d+,"tok":"([^"]+)"/g)) {
  lienOC[m[1]] = `https://live.objectif-crpe.fr/eleve/cours/${m[2]}`;
}

const fichier = (r) => `ran-${String(r.n).padStart(2, "0")}-${r.slug}.pdf`;



// « En images » : les illustrations des définitions de la RAN (outils/illustrations.js), ajoutées
// après insecables(), qui abîmerait les coordonnées des SVG.
function figuresRan(n) {
  const d = DEFINITIONS.find((x) => x.n === n);
  const figs = d ? d.items.filter(([notion]) => ILLUSTRATIONS_MATHS[notion]) : [];
  if (!figs.length) return "";
  return `<h2>En images</h2><div class="figs">${figs
    .map(([notion]) => `<figure>${ILLUSTRATIONS_MATHS[notion]}<figcaption>${notion}</figcaption></figure>`)
    .join("")}</div>`;
}

function pageRan(r) {
  const sections = r.sections.map((s) => `<h2>${s.h}</h2>${s.html}`).join("");
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${CSS}</style></head><body>
    <header>
      <h1>RAN ${r.n} — ${r.titre}</h1>
      <div class="sous">CRPE · Mathématiques · Remise à niveau ${r.n} sur 12 · Fiche de cours : définitions, propriétés, méthodes, exemples, pièges</div>
    </header>
    ${insecables(sections)}
    ${figuresRan(r.n)}
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

function pageDefinitions() {
  const blocs = DEFINITIONS.map(
    (d) => `<h2><span class="num">RAN ${d.n}</span>${d.titre}</h2>
    <table class="defs"><tr><th style="width:22%">Notion</th><th style="width:44%">Définition</th><th>Exemple</th></tr>
    ${d.items.map(([notion, def, ex]) => `<tr><td><b>${notion}</b></td><td>${insecables(def)}</td><td>${insecables(ex)}${ILLUSTRATIONS_MATHS[notion] ? `<div class="fig">${ILLUSTRATIONS_MATHS[notion]}</div>` : ""}</td></tr>`).join("")}
    </table>`
  ).join("");
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${CSS}
    .defs { break-inside: auto; font-size: 9.3pt; }
    .defs tr { break-inside: avoid; }
    .defs td:last-child { background: #f4faf4; }
    .fig { margin-top: 3px; }
    .fig svg { height: 22mm; width: auto; }
  </style></head><body>
    <header>
      <h1>Fiche des définitions — les 12 RAN de maths</h1>
      <div class="sous">CRPE · Mathématiques · Chaque définition, dans le vocabulaire attendu, suivie d'un exemple. À savoir restituer mot pour mot : une justification commence presque toujours par une définition.</div>
    </header>
    ${blocs}
  </body></html>`;
}

(async () => {
  const { chromium } = loadPlaywright();
  const exe = fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined;
  const browser = await chromium.launch(exe ? { executablePath: exe } : {});
  fs.mkdirSync(out, { recursive: true });
  const pages = [...RAN.map((r) => [fichier(r), pageRan(r)]), ["fiche-revision-toutes-les-ran.pdf", pageSynthese()],
    ["fiche-definitions-ran-maths.pdf", pageDefinitions()],
  ];
  for (const [nom, contenu] of pages) {
    const p = await browser.newPage();
    await p.setContent(contenu, { waitUntil: "load" });
    const file = path.join(out, nom);
    await p.pdf({ path: file, format: "A4", margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" }, printBackground: true });
    console.log(path.relative(root, file));
  }
  await browser.close();
})();
