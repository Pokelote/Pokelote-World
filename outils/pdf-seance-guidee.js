// Génère le PDF d'une séance guidée CRPE à partir de CRPE_SEANCES_GUIDEES dans mon-espace.html :
// cours, méthode, exemple résolu commenté, exercice guidé et exercice en autonomie pour chaque notion ;
// les indices, réponses et corrigés sont regroupés à la fin, pour chercher avant de regarder.
// Usage : node outils/pdf-seance-guidee.js <cle>   (ex. 2026-10-27-guidee)
// Produit crpe/seances-guidees/<cle>.pdf.
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
const cle = process.argv[2];
const html = fs.readFileSync(path.join(root, "mon-espace.html"), "utf8");
const debut = "const CRPE_SEANCES_GUIDEES = ";
const start = html.indexOf(debut);
const end = html.indexOf("\n];", start);
const seances = new Function(`return ${html.slice(start + debut.length, end + 2)};`)();
const seance = seances.find((s) => s.cle === cle);
if (!seance) {
  console.error(`Pas de séance guidée « ${cle} ». Clés : ${seances.map((s) => s.cle).join(", ")}`);
  process.exit(1);
}

const JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const d = new Date(seance.date + "T12:00:00");
const dateLongue = `${JOURS[d.getDay()]} ${d.getDate() === 1 ? "1er" : d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
const minutes = seance.notions.reduce((a, n) => a + (n.minutes || 0), 0);
// Espace insécable dans les nombres (« 4 700 ») pour qu'ils ne soient pas coupés en fin de ligne.
const esc = (t) =>
  String(t)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(\d) (?=\d{3}(?!\d))/g, "$1&nbsp;")
    .replace(/\n/g, "<br>");

const notions = seance.notions
  .map(
    (n, i) => `
  <section class="notion">
    <h2>Notion ${i + 1} — ${esc(n.titre)}</h2>
    <div class="meta">RAN ${n.ran} · ${n.minutes} min · niveau : ${esc(n.niveau)}${n.pourquoi ? ` · ${esc(n.pourquoi)}` : ""}</div>
    <h3>1. Le cours</h3>
    <table><tr><th style="width:22%">Notion</th><th style="width:43%">Définition</th><th>Exemple</th></tr>
      ${n.cours.map(([a, b, c]) => `<tr><td><b>${esc(a)}</b></td><td>${esc(b)}</td><td>${esc(c)}</td></tr>`).join("")}
    </table>
    <div class="methode"><b>La méthode</b><ol>${n.methode.map((m) => `<li>${esc(m)}</li>`).join("")}</ol></div>
    <h3>2. Exemple résolu</h3>
    <p>${esc(n.exempleResolu.enonce)}</p>
    ${n.exempleResolu.etapes.map((e) => `<div class="etape">${esc(e.texte)}<div class="pq">Pourquoi : ${esc(e.pourquoi)}</div></div>`).join("")}
    <h3>3. À toi, guidé</h3>
    <p>${esc(n.guide.enonce)}</p>
    <ol class="guide">${n.guide.etapes.map((e) => `<li>${esc(e.consigne)}<div class="ligne"></div></li>`).join("")}</ol>
    <p class="note">Bloqué ? Indices puis réponses : page « Aides », en fin de document.</p>
    <h3>4. En autonomie</h3>
    <p>${esc(n.autonomie.enonce)}</p>
    <div class="cadre"></div>
    <div class="jesais"><b>Je sais…</b><ul>${n.jeSais.map((j) => `<li>☐ ${esc(j)}</li>`).join("")}</ul></div>
  </section>`
  )
  .join("");

const aides = seance.notions
  .map(
    (n, i) => `
  <section>
    <h3>Notion ${i + 1} — exercice guidé</h3>
    <ol>${n.guide.etapes
      .map((e) => `<li>${e.indice ? `<b>Indice :</b> ${esc(e.indice)}<br>` : ""}${n.niveau === "guidé" ? `<b>Réponse :</b> ${esc(e.reponse)}` : ""}</li>`)
      .join("")}</ol>
    ${n.niveau !== "guidé" ? `<div class="corrige"><b>Corrigé</b><br>${n.guide.etapes.map((e) => esc(e.reponse)).join("<br>")}</div>` : ""}
    <h3>Notion ${i + 1} — corrigé de l'exercice en autonomie</h3>
    <div class="corrige">${esc(n.autonomie.corrige)}</div>
  </section>`
  )
  .join("");

const page = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
  body { font-family: "DejaVu Sans", Arial, sans-serif; font-size: 10.5pt; color: #111; line-height: 1.45; margin: 0; }
  header { border-bottom: 2px solid #1f4e79; padding-bottom: 6px; margin-bottom: 12px; }
  h1 { font-size: 16pt; margin: 0 0 3px; color: #1f4e79; }
  .sous { color: #444; font-size: 9.5pt; }
  .notion { break-before: page; }
  .notion:first-of-type { break-before: auto; }
  h2 { font-size: 13pt; margin: 4px 0 2px; color: #1f4e79; }
  h3 { font-size: 11pt; margin: 12px 0 4px; color: #1f4e79; break-after: avoid; }
  .meta { font-size: 9pt; color: #555; margin-bottom: 4px; }
  p { margin: 4px 0; }
  table { border-collapse: collapse; width: 100%; font-size: 9.3pt; }
  th, td { border: 1px solid #bbb; padding: 3px 6px; text-align: left; vertical-align: top; }
  th { background: #e8eef5; }
  td:last-child { background: #f4faf4; }
  .methode { background: #f3f0fa; border-left: 3px solid #6a4c93; padding: 4px 10px; margin-top: 6px; break-inside: avoid; }
  .methode ol, .jesais ul { margin: 2px 0; padding-left: 18px; }
  .etape { border-left: 3px solid #2e7d32; background: #f4faf4; padding: 4px 10px; margin: 4px 0; break-inside: avoid; }
  .pq { color: #555; font-style: italic; font-size: 9.5pt; }
  .guide li { margin-bottom: 4px; break-inside: avoid; }
  .ligne { height: 30px; border-bottom: 1px dotted #999; }
  .cadre { height: 150px; border: 1px dotted #999; border-radius: 4px; margin: 6px 0; }
  .note { font-size: 9pt; color: #555; font-style: italic; }
  .jesais { background: #eef4fb; border-left: 3px solid #1f4e79; padding: 4px 10px; break-inside: avoid; }
  .jesais ul { list-style: none; padding-left: 0; }
  .aides { break-before: page; }
  .corrige { border-left: 3px solid #2e7d32; background: #f4faf4; padding: 4px 10px; break-inside: avoid; }
</style></head><body>
  <header>
    <h1>CRPE — Séance guidée</h1>
    <div class="sous">${dateLongue} · ${esc(seance.titre)} · RAN ${seance.rans.join(", ")} · ${seance.notions.length} notions · ≈ ${minutes} min<br>
    Pour chaque notion : lis le cours et l'exemple résolu, fais l'exercice guidé (indices en fin de document si tu bloques), puis l'exercice en autonomie sans rien regarder. Note ensuite l'exercice en autonomie sur le site.</div>
  </header>
  ${notions}
  <div class="aides"><h2>Aides et corrigés</h2>${aides}</div>
</body></html>`;

(async () => {
  const { chromium } = loadPlaywright();
  const exe = fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined;
  const browser = await chromium.launch(exe ? { executablePath: exe } : {});
  const out = path.join(root, "crpe", "seances-guidees");
  fs.mkdirSync(out, { recursive: true });
  const p = await browser.newPage();
  await p.setContent(page, { waitUntil: "load" });
  const file = path.join(out, `${cle}.pdf`);
  await p.pdf({ path: file, format: "A4", margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" }, printBackground: true });
  console.log(path.relative(root, file));
  await browser.close();
})();
