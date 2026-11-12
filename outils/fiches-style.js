// Style commun des fiches de cours à recopier (RAN de maths, français, histoire-géo-EMC).
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
  .figs { display: flex; flex-wrap: wrap; gap: 8px; }
  figure { margin: 0; width: 31%; border: 1px solid #dde4ec; border-radius: 4px; padding: 4px; text-align: center; break-inside: avoid; }
  figure svg { width: 100%; height: auto; }
  figcaption { font-size: 8pt; color: #555; }
  .grille { columns: 2; column-gap: 14px; }
  .bloc { break-inside: avoid; border: 1px solid #c9d6e3; border-radius: 4px; padding: 6px 8px; margin: 0 0 10px; }
  .bloc ul { padding-left: 14px; font-size: 9.3pt; }
  .num { display: inline-block; background: #1f4e79; color: white; border-radius: 3px; padding: 0 5px; margin-right: 4px; font-size: 9pt; }
`;

// Espace insécable dans les nombres (« 10 000 ») pour qu'ils ne soient pas coupés en fin de ligne.
// À ne jamais appliquer aux SVG (abîmerait leurs coordonnées).
const insecables = (t) => t.replace(/(\d) (?=\d{3}(?!\d))/g, "$1&nbsp;");

module.exports = { CSS, insecables };
