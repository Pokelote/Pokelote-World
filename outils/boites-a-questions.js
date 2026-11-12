// Boîtes à questions (demandes de Clément du 03/11/2026 et du 13/11/2026). Règle : bonne réponse →
// la carte est mise de côté et revient 7 jours plus tard ; mauvaise réponse → elle revient le lendemain.
// Trois paquets, toujours avec la réponse et un exemple au verso :
//  - maths : une carte par définition de outils/ran-maths-contenu.js (DEFINITIONS), posée sous forme de
//    vraie question (QUESTIONS_MATHS), et une par propriété à savoir énoncer (PROPRIETES) ;
//  - français (FRANCAIS) et histoire-géographie-EMC (HGEMC) : outils/boites-contenu.js.
// Produit :
//  - crpe/ran-maths/cartes-boites-a-questions.json : les cartes lues par l'onglet « Boîtes à questions » ;
//  - crpe/ran-maths/boites-a-questions-cartes.pdf (maths), boites-a-questions-francais.pdf et
//    boites-a-questions-histoire-geo-emc.pdf : mode d'emploi + cartes à imprimer en recto verso
//    (8 cartes par feuille, verso en miroir pour une impression recto verso « bord long »).
// Usage : node outils/boites-a-questions.js
const fs = require("fs");
const path = require("path");
const { DEFINITIONS, PROPRIETES } = require("./ran-maths-contenu");
const { QUESTIONS_MATHS, FRANCAIS, HGEMC } = require("./boites-contenu");

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
const slug = (t, n = 40) =>
  t
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, n);

const cartes = [];
DEFINITIONS.forEach((d) =>
  d.items.forEach(([notion, def, ex]) => {
    const q = QUESTIONS_MATHS[notion];
    if (!q) throw new Error(`Pas de question pour la définition « ${notion} »`);
    cartes.push({ id: `d${d.n}-${slug(notion)}`, matiere: "maths", groupe: `RAN ${d.n}`, ran: d.n, type: "Définition", q, r: def, ex });
  })
);
PROPRIETES.forEach(([ran, q, r, ex]) =>
  cartes.push({ id: `p${ran}-${slug(q)}`, matiere: "maths", groupe: `RAN ${ran}`, ran, type: "Propriété", q, r, ex })
);
cartes.sort((a, b) => a.ran - b.ran || (a.type === b.type ? 0 : a.type === "Définition" ? -1 : 1));
FRANCAIS.forEach(([groupe, q, r, ex]) => cartes.push({ id: `f-${slug(q, 70)}`, matiere: "francais", groupe, type: groupe, q, r, ex }));
HGEMC.forEach(([groupe, q, r, ex]) => cartes.push({ id: `h-${slug(q, 70)}`, matiere: "hgemc", groupe, type: groupe, q, r, ex }));
const ids = new Set();
cartes.forEach((c) => {
  if (ids.has(c.id)) throw new Error(`Identifiant de carte en double : ${c.id}`);
  ids.add(c.id);
});

fs.mkdirSync(out, { recursive: true });
// Espace insécable avant « ? », « : », « ; » et « ! » (typographie française : pas de « ? » seul en début de ligne).
cartes.forEach((c) => ["q", "r", "ex"].forEach((k) => (c[k] = c[k].replace(/ ([?:;!])/g, "\u00a0$1"))));
fs.writeFileSync(path.join(out, "cartes-boites-a-questions.json"), JSON.stringify(cartes, null, 1) + "\n");
console.log(`crpe/ran-maths/cartes-boites-a-questions.json (${cartes.length} cartes)`);

const esc = (t) =>
  String(t)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(\d) (?=\d{3}(?!\d))/g, "$1&nbsp;");

const PAQUETS = [
  { matiere: "maths", titre: "RAN de maths", fichier: "boites-a-questions-cartes.pdf", conseil: "Commence par les RAN déjà travaillées (3, 4, 5), puis ajoute les autres au fur et à mesure du parcours." },
  { matiere: "francais", titre: "Français (grammaire, lexique, orthographe)", fichier: "boites-a-questions-francais.pdf", conseil: "Vocabulaire de la « Grammaire du français — Terminologie grammaticale » (Eduscol) : commence par les classes de mots et les fonctions." },
  { matiere: "hgemc", titre: "Histoire-géographie-EMC", fichier: "boites-a-questions-histoire-geo-emc.pdf", conseil: "Repères et notions des programmes du cycle 3, utiles pour l'épreuve d'application si tu choisis ce domaine." },
];

// 8 cartes par feuille (2 colonnes × 4 lignes). Le verso inverse les colonnes de chaque ligne pour
// tomber au dos de la bonne carte en recto verso « bord long ».
const PAR_PAGE = 8;
function feuilles(liste) {
  const pages = [];
  for (let i = 0; i < liste.length; i += PAR_PAGE) {
    const lot = liste.slice(i, i + PAR_PAGE);
    while (lot.length < PAR_PAGE) lot.push(null);
    const recto = lot
      .map((c) =>
        c
          ? `<div class="carte"><div class="tag">${esc(c.groupe)}${c.matiere === "maths" ? ` · ${c.type}` : ""}</div><div class="q">${esc(c.q)}</div><div class="box">Revoir le : ………… · ………… · ………… · …………</div></div>`
          : `<div class="carte vide"></div>`
      )
      .join("");
    const verso = [];
    for (let l = 0; l < PAR_PAGE; l += 2) verso.push(lot[l + 1], lot[l]);
    const versoHtml = verso
      .map((c) =>
        c
          ? `<div class="carte dos"><div class="tag">${esc(c.groupe)} · réponse</div><div class="r">${esc(c.r)}</div><div class="ex"><b>Exemple :</b> ${esc(c.ex)}</div></div>`
          : `<div class="carte vide"></div>`
      )
      .join("");
    pages.push(`<div class="feuille">${recto}</div>`, `<div class="feuille">${versoHtml}</div>`);
  }
  return pages.join("");
}

const CSS = `
  @page { size: A4; margin: 10mm; }
  body { font-family: "DejaVu Sans", Arial, sans-serif; color: #111; margin: 0; }
  .intro { font-size: 10.5pt; line-height: 1.45; break-after: page; }
  .intro h1 { font-size: 17pt; color: #1f4e79; margin: 0 0 6px; }
  .intro h2 { font-size: 12pt; color: #1f4e79; margin: 14px 0 4px; }
  .intro table { border-collapse: collapse; margin: 6px 0; font-size: 10pt; }
  .intro th, .intro td { border: 1px solid #bbb; padding: 3px 8px; text-align: left; }
  .intro th { background: #e8eef5; }
  .feuille { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: repeat(4, 68mm); width: 190mm; height: 277mm; break-after: page; }
  .carte { border: 1px dashed #999; padding: 5mm; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden; }
  .carte.vide { border-color: #eee; }
  .tag { font-size: 7.5pt; color: #1f4e79; text-transform: uppercase; letter-spacing: 0.4px; margin-bottom: 3mm; }
  .q { font-size: 12pt; font-weight: bold; flex: 1; display: flex; align-items: center; line-height: 1.35; }
  .box { font-size: 7.5pt; color: #777; }
  .dos .r { font-size: 9.5pt; line-height: 1.35; }
  .dos .ex { font-size: 8.5pt; line-height: 1.35; margin-top: 2.5mm; padding: 2mm 3mm; background: #f4faf4; border-left: 2px solid #2e7d32; }
`;

function document(paquet, liste) {
  const parGroupe = {};
  liste.forEach((c) => (parGroupe[c.groupe] = (parGroupe[c.groupe] || 0) + 1));
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${CSS}</style></head><body>
  <div class="intro">
    <h1>Boîtes à questions — ${esc(paquet.titre)}</h1>
    <p>${liste.length} cartes : une question au recto ; la réponse et un exemple au verso. ${esc(paquet.conseil)}</p>
    <h2>Fabriquer les cartes</h2>
    <p>Imprime les pages de cartes en <b>recto verso, retournement sur le bord long</b> : le verso de chaque feuille tombe au dos de la bonne carte. Découpe en suivant les pointillés (8 cartes par feuille).</p>
    <h2>Les deux boîtes</h2>
    <p>Prépare deux boîtes (ou deux enveloppes) : <b>« À revoir »</b> et <b>« De côté »</b>. Au début, toutes les cartes sont dans « À revoir ».</p>
    <table>
      <tr><th>Ta réponse</th><th>Où va la carte</th><th>Quand la reposer</th></tr>
      <tr><td>Juste et complète (avec un exemple)</td><td>« De côté »</td><td><b>dans 7 jours</b> : écris la date au recto</td></tr>
      <tr><td>Fausse ou incomplète (un élément oublié, pas d'exemple)</td><td>« À revoir »</td><td><b>dès le lendemain</b></td></tr>
    </table>
    <ul>
      <li>Chaque jour : prends les cartes de « À revoir », puis celles de « De côté » dont la date est arrivée, et quelques cartes nouvelles.</li>
      <li>Lis la question, réponds <b>à voix haute ou par écrit</b>, puis retourne la carte et sois honnête : un élément oublié = à revoir.</li>
      <li>10 à 15 minutes par jour suffisent : c'est la régularité qui fait retenir.</li>
    </ul>
    <h2>Sur le site</h2>
    <p>L'onglet « Boîtes à questions » (Apprentissage → Révisions CRPE) fait la même chose sans papier : il te présente chaque jour les cartes à revoir, et tu indiques si tu as bien répondu ; il recalcule tout seul la date de la prochaine fois (7 jours ou le lendemain).</p>
    <h2>Nombre de cartes par thème</h2>
    <p>${Object.entries(parGroupe).map(([g, n]) => `${esc(g)} : ${n}`).join(" · ")}</p>
  </div>
  ${feuilles(liste)}
</body></html>`;
}

(async () => {
  const { chromium } = loadPlaywright();
  const exe = fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined;
  const browser = await chromium.launch(exe ? { executablePath: exe } : {});
  for (const paquet of PAQUETS) {
    const liste = cartes.filter((c) => c.matiere === paquet.matiere);
    const p = await browser.newPage();
    await p.setContent(document(paquet, liste), { waitUntil: "load" });
    const file = path.join(out, paquet.fichier);
    await p.pdf({ path: file, format: "A4", printBackground: true, preferCSSPageSize: true });
    console.log(`${path.relative(root, file)} (${liste.length} cartes)`);
  }
  await browser.close();
})();
