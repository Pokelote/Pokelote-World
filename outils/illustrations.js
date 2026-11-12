// Petites illustrations SVG pour les fiches et les boîtes à questions (demande de Clément du 13/11/2026 :
// « des petits encarts imagés, ex. en histoire-géo des frises ou des cartes, en maths en géométrie des
// droites »). Dessins en currentColor : lisibles en clair comme en sombre et à l'impression.
// - ILLUSTRATIONS_MATHS : clé = nom de la notion dans DEFINITIONS (outils/ran-maths-contenu.js) ;
// - ILLUSTRATIONS_QUESTIONS : clé = texte exact de la question (cartes de français et d'histoire-géo) ;
// - friseRepere(annee, libelle) : mini-frise de -100 à 2000 qui situe un repère historique.

const W = 160;
const H = 90;
const svg = (body, h = H, w = W) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="DejaVu Sans, Arial, sans-serif" font-size="9" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" role="img">${body}</svg>`;
const txt = (x, y, t, o = {}) =>
  `<text x="${x}" y="${y}" stroke="none" fill="currentColor" text-anchor="${o.a || "middle"}" font-size="${o.s || 9}"${o.b ? ' font-weight="bold"' : ""}${o.i ? ' font-style="italic"' : ""}>${t}</text>`;
const pt = (x, y, nom, dx = 0, dy = -5) => `<circle cx="${x}" cy="${y}" r="1.6" fill="currentColor" stroke="none"/>${nom ? txt(x + dx, y + dy, nom) : ""}`;
const ln = (x1, y1, x2, y2, o = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${o}/>`;
const tir = 'stroke-dasharray="3 2.5"';
const fin = 'stroke-width="0.8"';
// Petit carré d'angle droit au sommet (x, y), le long des directions unitaires u et v.
const angleDroit = (x, y, u, v, c = 5) =>
  `<path d="M${x + u[0] * c} ${y + u[1] * c} L${x + (u[0] + v[0]) * c} ${y + (u[1] + v[1]) * c} L${x + v[0] * c} ${y + v[1] * c}" ${fin}/>`;
// Codage d'égalité de longueur : petit trait perpendiculaire au milieu de [P Q].
const code = (x1, y1, x2, y2, n = 1) => {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const L = Math.hypot(x2 - x1, y2 - y1);
  const [ux, uy] = [(x2 - x1) / L, (y2 - y1) / L];
  const [nx, ny] = [-uy, ux];
  let s = "";
  for (let i = 0; i < n; i++) {
    const o = (i - (n - 1) / 2) * 2.5;
    const cx = mx + ux * o;
    const cy = my + uy * o;
    s += ln(cx - nx * 3, cy - ny * 3, cx + nx * 3, cy + ny * 3, fin);
  }
  return s;
};
const fleche = (x, y, dx, dy) => {
  const L = Math.hypot(dx, dy);
  const [ux, uy] = [dx / L, dy / L];
  return `<path d="M${x - ux * 5 - uy * 2.5} ${y - uy * 5 + ux * 2.5} L${x} ${y} L${x - ux * 5 + uy * 2.5} ${y - uy * 5 - ux * 2.5}"/>`;
};
const mil = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const unit = (a, b) => {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  return [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
};
const poly = (pts, o = "") => `<polygon points="${pts.map((p) => p.join(",")).join(" ")}" ${o}/>`;

// Pied de la perpendiculaire issue de P sur la droite (A B).
const pied = (P, A, B) => {
  const [ux, uy] = unit(A, B);
  const t = (P[0] - A[0]) * ux + (P[1] - A[1]) * uy;
  return [A[0] + t * ux, A[1] + t * uy];
};

function triangleHauteur() {
  const A = [55, 14], B = [18, 74], C = [142, 74];
  const Hh = pied(A, B, C);
  return svg(
    poly([A, B, C]) + ln(A[0], A[1], Hh[0], Hh[1], tir) + angleDroit(Hh[0], Hh[1], [1, 0], [0, -1]) +
      pt(...A, "A", 0, -4) + pt(...B, "B", -6, 4) + pt(...C, "C", 6, 4) + pt(...Hh, "H", 0, 11) + txt(125, 20, "(AH) ⊥ (BC)", { s: 8 })
  );
}

function triangleMediane() {
  const A = [55, 14], B = [18, 74], C = [142, 74];
  const I = mil(B, C);
  return svg(
    poly([A, B, C]) + ln(A[0], A[1], I[0], I[1], tir) + code(B[0], B[1], I[0], I[1]) + code(I[0], I[1], C[0], C[1]) +
      pt(...A, "A", 0, -4) + pt(...B, "B", -6, 4) + pt(...C, "C", 6, 4) + pt(...I, "I", 0, 11) + txt(122, 20, "I milieu de [BC]", { s: 8 })
  );
}

const quadri = (pts, extra = "", noms = ["A", "B", "C", "D"]) => {
  const off = [[-6, 4], [6, 4], [6, -3], [-6, -3]];
  return svg(
    poly(pts) + ln(pts[0][0], pts[0][1], pts[2][0], pts[2][1], tir) + ln(pts[1][0], pts[1][1], pts[3][0], pts[3][1], tir) + extra +
      pts.map((p, i) => pt(p[0], p[1], noms[i], off[i][0], off[i][1])).join("")
  );
};

const ILLUSTRATIONS_MATHS = {
  // RAN 1
  "Droite, segment, demi-droite": svg(
    ln(10, 18, 150, 18) + pt(50, 18, "A") + pt(100, 18, "B") + txt(140, 12, "(AB)", { s: 8 }) +
      ln(50, 45, 100, 45) + ln(50, 41, 50, 49) + ln(100, 41, 100, 49) + pt(50, 45, "A") + pt(100, 45, "B") + txt(130, 48, "[AB]", { s: 8 }) +
      ln(50, 72, 150, 72) + ln(50, 68, 50, 76) + pt(50, 72, "A") + pt(100, 72, "B") + txt(140, 66, "[AB)", { s: 8 })
  ),
  "Points alignés": svg(ln(10, 70, 150, 20) + pt(35, 61, "A", -2, -6) + pt(80, 45, "B", -2, -6) + pt(125, 29, "C", -2, -6) + pt(110, 70, "D", 0, 11) + txt(60, 86, "A, B, C alignés ; D non", { s: 7 })),
  "Droites parallèles / perpendiculaires": svg(
    ln(10, 25, 150, 25) + ln(10, 55, 150, 55) + txt(152, 22, "(d1)", { a: "end", s: 8 }) + txt(152, 52, "(d2)", { a: "end", s: 8 }) +
      ln(60, 10, 60, 85) + txt(64, 85, "(d3)", { a: "start", s: 8 }) + angleDroit(60, 25, [1, 0], [0, 1]) + angleDroit(60, 55, [1, 0], [0, 1]) +
      txt(115, 40, "(d1) // (d2)", { s: 8 })
  ),
  Milieu: svg(ln(20, 50, 140, 50) + code(20, 50, 80, 50) + code(80, 50, 140, 50) + pt(20, 50, "A") + pt(140, 50, "B") + pt(80, 50, "I") + txt(80, 75, "IA = IB", { s: 9 })),
  Médiatrice: (() => {
    const A = [25, 60], B = [135, 60], I = [80, 60], M = [80, 18];
    return svg(
      ln(A[0], A[1], B[0], B[1]) + ln(80, 8, 80, 86) + angleDroit(80, 60, [1, 0], [0, -1]) + code(25, 60, 80, 60) + code(80, 60, 135, 60) +
        ln(M[0], M[1], A[0], A[1], tir) + ln(M[0], M[1], B[0], B[1], tir) + code(M[0], M[1], A[0], A[1], 2) + code(M[0], M[1], B[0], B[1], 2) +
        pt(...A, "A", -6, 4) + pt(...B, "B", 6, 4) + pt(...M, "M", 7, 0) + txt(110, 84, "MA = MB", { s: 8 })
    );
  })(),
  Cercle: svg(`<circle cx="80" cy="45" r="35"/>` + ln(45, 45, 115, 45, tir) + ln(80, 45, 104.7, 20.3) + pt(80, 45, "O", 0, 10) + txt(98, 28, "r", { s: 9, i: true }) + txt(80, 88, "rayon r · diamètre 2r (pointillés)", { s: 7 })),
  "Distance d'un point à une droite": svg(
    ln(10, 70, 150, 70) + txt(150, 82, "(d)", { a: "end", s: 8 }) + ln(70, 18, 70, 70, tir) + angleDroit(70, 70, [1, 0], [0, -1]) +
      ln(70, 18, 125, 70, fin) + pt(70, 18, "A", -7, 0) + pt(70, 70, "H", -6, 10) + pt(125, 70, "", 0, 0) + txt(120, 20, "AH = distance", { s: 7 }) + txt(120, 29, "de A à (d)", { s: 7 })
  ),
  "Angles complémentaires / supplémentaires": svg(
    ln(10, 75, 150, 75) + ln(80, 75, 115, 25) + `<path d="M98 75 A18 18 0 0 0 90.3 60.3" ${fin}/>` + `<path d="M62 75 A18 18 0 0 1 90.3 60.3" ${fin}/>` +
      txt(108, 70, "55°", { s: 8 }) + txt(62, 64, "125°", { s: 8 }) + txt(80, 88, "55° + 125° = 180° : supplémentaires", { s: 7 })
  ),
  "Hauteur d'un triangle": triangleHauteur(),
  "Médiane d'un triangle": triangleMediane(),
  // RAN 2
  "Symétrique par rapport à une droite": svg(
    ln(80, 5, 80, 85, tir) + txt(86, 12, "(d)", { a: "start", s: 8 }) + ln(40, 45, 120, 45, fin) + angleDroit(80, 45, [1, 0], [0, -1]) +
      code(40, 45, 80, 45) + code(80, 45, 120, 45) + pt(40, 45, "M") + pt(120, 45, "M'") + txt(40, 80, "(d) médiatrice", { s: 7 }) + txt(40, 88, "de [MM']", { s: 7 })
  ),
  "Symétrique par rapport à un point": svg(ln(25, 65, 135, 25, fin) + code(25, 65, 80, 45) + code(80, 45, 135, 25) + pt(25, 65, "M", -2, 10) + pt(80, 45, "O", 0, 11) + pt(135, 25, "M'", 0, -5) + txt(80, 84, "O milieu de [MM']", { s: 8 })),
  "Axe / centre de symétrie d'une figure": svg(`<rect x="35" y="22" width="90" height="46"/>` + ln(80, 12, 80, 78, tir) + ln(25, 45, 135, 45, tir) + pt(80, 45, "O", 6, -3) + txt(80, 88, "rectangle : 2 axes et un centre O", { s: 7 })),
  "Polygone régulier": svg(poly([[80, 10], [113, 30], [113, 65], [80, 82], [47, 65], [47, 30]]) + `<circle cx="80" cy="46" r="38" ${tir} ${fin}/>` + txt(140, 50, "hexagone", { s: 8 }) + txt(140, 60, "régulier", { s: 8 })),
  "Triangle isocèle": svg(poly([[80, 12], [35, 78], [125, 78]]) + code(80, 12, 35, 78) + code(80, 12, 125, 78) + pt(80, 12, "A", 0, -3) + pt(35, 78, "B", -6, 6) + pt(125, 78, "C", 6, 6) + txt(80, 70, "AB = AC", { s: 8 })),
  Parallélogramme: quadri([[25, 72], [105, 72], [135, 20], [55, 20]], code(25, 72, 80, 46) + code(80, 46, 135, 20) + code(105, 72, 80, 46, 2) + code(80, 46, 55, 20, 2)),
  Rectangle: quadri([[30, 72], [130, 72], [130, 20], [30, 20]], angleDroit(30, 72, [1, 0], [0, -1]) + angleDroit(130, 72, [-1, 0], [0, -1]) + angleDroit(130, 20, [-1, 0], [0, 1]) + angleDroit(30, 20, [1, 0], [0, 1])),
  Losange: quadri([[80, 82], [130, 46], [80, 10], [30, 46]], code(80, 82, 130, 46) + code(130, 46, 80, 10) + code(80, 10, 30, 46) + code(30, 46, 80, 82) + angleDroit(80, 46, [1, 0], [0, -1])),
  Carré: quadri([[45, 80], [115, 80], [115, 10], [45, 10]], angleDroit(45, 80, [1, 0], [0, -1]) + code(45, 80, 115, 80) + code(115, 80, 115, 10) + code(115, 10, 45, 10) + code(45, 10, 45, 80) + angleDroit(80, 45, [0.707, 0.707], [0.707, -0.707], 4)),
  Trapèze: svg(poly([[20, 72], [140, 72], [110, 22], [50, 22]]) + txt(80, 84, "grande base B", { s: 8 }) + txt(80, 16, "petite base b", { s: 8 }) + txt(80, 50, "bases parallèles", { s: 8 })),
  // RAN 3
  "Division euclidienne": svg(
    txt(55, 25, "4 7", { s: 13, a: "end" }) + ln(62, 12, 62, 58) + ln(62, 30, 100, 30) + txt(80, 25, "6", { s: 13 }) + txt(80, 46, "7", { s: 13 }) +
      txt(55, 46, "– 4 2", { s: 13, a: "end" }) + ln(28, 50, 58, 50, fin) + txt(55, 64, "5", { s: 13, a: "end" }) +
      txt(108, 28, "diviseur", { a: "start", s: 7 }) + txt(108, 49, "quotient", { a: "start", s: 7 }) + txt(20, 64, "reste", { a: "end", s: 7 }) + txt(80, 84, "47 = 6 × 7 + 5 et 5 < 6", { s: 8 })
  ),
  // RAN 5
  Fraction: svg(
    [0, 1, 2, 3].map((i) => `<rect x="${20 + i * 30}" y="20" width="30" height="26" ${i < 3 ? 'fill="currentColor" fill-opacity="0.25"' : ""}/>`).join("") +
      txt(80, 64, "3/4 : on partage en 4 parts égales", { s: 8 }) + txt(80, 76, "et on en prend 3", { s: 8 })
  ),
  "Nombre décimal": svg(ln(10, 45, 150, 45) + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ln(15 + i * 13, i % 5 ? 41 : 38, 15 + i * 13, i % 5 ? 49 : 52)).join("") + txt(15, 64, "0", { s: 8 }) + txt(145, 64, "1", { s: 8 }) + pt(15 + 7.5 * 13, 45, "0,75", 0, -9) + txt(80, 82, "graduation en dixièmes", { s: 7 })),
  // RAN 6
  "Hauteur relative à une base": (() => {
    const A = [60, 14], B = [18, 72], C = [142, 72];
    return svg(poly([A, B, C], 'fill="currentColor" fill-opacity="0.12"') + ln(60, 14, 60, 72, tir) + angleDroit(60, 72, [1, 0], [0, -1]) + txt(66, 45, "h", { a: "start", i: true }) + txt(80, 84, "base b", { s: 8 }) + txt(130, 30, "A = b × h ÷ 2", { s: 8 }));
  })(),
  "Disque / cercle": svg(`<circle cx="45" cy="42" r="28"/>` + `<circle cx="115" cy="42" r="28" fill="currentColor" fill-opacity="0.2"/>` + txt(45, 84, "cercle : P = 2πr", { s: 7 }) + txt(115, 84, "disque : A = πr²", { s: 7 })),
  "Agrandissement / réduction de rapport k": svg(`<rect x="15" y="40" width="30" height="30"/>` + `<rect x="75" y="10" width="60" height="60"/>` + txt(30, 82, "côté 1", { s: 7 }) + txt(105, 82, "côté 2 (k = 2)", { s: 7 }) + txt(105, 42, "aire × 4", { s: 8 })),
  // RAN 7
  "Grandeurs proportionnelles": svg(
    ln(20, 80, 150, 80) + ln(20, 80, 20, 8) + fleche(150, 80, 1, 0) + fleche(20, 8, 0, -1) + ln(20, 80, 140, 14) + [1, 2, 3].map((k) => pt(20 + k * 35, 80 - k * 19.25, "")).join("") +
      txt(150, 90, "masse", { a: "end", s: 7 }) + txt(24, 12, "prix", { a: "start", s: 7 }) + txt(110, 60, "droite qui passe", { s: 7 }) + txt(110, 69, "par l'origine", { s: 7 })
  ),
  Échelle: svg(ln(20, 45, 140, 45) + [0, 1, 2, 3, 4].map((i) => ln(20 + i * 30, 40, 20 + i * 30, 50)).join("") + `<rect x="20" y="42" width="30" height="6" fill="currentColor" fill-opacity="0.4"/>` + txt(20, 62, "0", { s: 8 }) + txt(50, 62, "250 m", { s: 8 }) + txt(80, 82, "1/25 000 : 1 cm sur la carte = 250 m", { s: 7 })),
  // RAN 9
  "Face, arête, sommet": svg(
    `<rect x="30" y="30" width="50" height="50"/>` + ln(30, 30, 55, 12) + ln(80, 30, 105, 12) + ln(55, 12, 105, 12) + ln(105, 12, 105, 62) + ln(80, 80, 105, 62) +
      ln(30, 80, 55, 62, tir) + ln(55, 62, 105, 62, tir) + ln(55, 12, 55, 62, tir) + pt(80, 30, "sommet", 26, 2) + txt(55, 58, "face", { s: 8 }) + txt(125, 40, "arête", { s: 7 }) + txt(95, 88, "arêtes cachées en pointillés", { s: 7 })
  ),
  Patron: svg(
    [[55, 5], [25, 30], [55, 30], [85, 30], [115, 30], [55, 55]].map(([x, y]) => `<rect x="${x}" y="${y}" width="25" height="25"/>`).join("") + txt(130, 78, "un patron", { s: 8 }) + txt(130, 88, "du cube", { s: 8 })
  ),
  Pyramide: svg(poly([[20, 75], [100, 75], [130, 55], [50, 55]]) + ln(20, 75, 75, 10) + ln(100, 75, 75, 10) + ln(130, 55, 75, 10) + ln(50, 55, 75, 10, tir) + ln(75, 10, 75, 65, tir) + txt(80, 40, "h", { a: "start", i: true }) + txt(80, 88, "V = aire de la base × h ÷ 3", { s: 7 })),
  // RAN 10
  "Fonction affine": svg(
    ln(15, 70, 150, 70) + ln(40, 85, 40, 5) + fleche(150, 70, 1, 0) + fleche(40, 5, 0, -1) + ln(15, 64, 145, 10) + pt(40, 53.6, "b", -6, 3) +
      txt(146, 80, "x", { s: 8, i: true }) + txt(46, 10, "y", { a: "start", s: 8, i: true }) + txt(112, 50, "y = ax + b", { s: 8 })
  ),
  "Fonction linéaire": svg(ln(15, 70, 150, 70) + ln(40, 85, 40, 5) + fleche(150, 70, 1, 0) + fleche(40, 5, 0, -1) + ln(25, 77, 140, 22) + pt(40, 70, "O", -6, 10) + txt(115, 52, "y = ax", { s: 8 })),
};

// Frise des grandes périodes (dates conventionnelles), échelle non linéaire pour la lisibilité.
const FRISE_PERIODES = svg(
  ln(15, 40, 155, 40) + fleche(155, 40, 1, 0) +
    [[15, "−3000"], [50, "476"], [87, "1492"], [120, "1789"]].map(([x, d]) => ln(x, 34, x, 46) + txt(x, 58, d, { s: 7 })).join("") +
    `<rect x="15" y="34" width="35" height="12" fill="currentColor" fill-opacity="0.08" stroke="none"/><rect x="87" y="34" width="33" height="12" fill="currentColor" fill-opacity="0.08" stroke="none"/>` +
    txt(32, 28, "Antiquité", { s: 7 }) + txt(68, 22, "Moyen", { s: 7 }) + txt(68, 30, "Âge", { s: 7 }) + txt(103, 22, "Temps", { s: 7 }) + txt(103, 30, "modernes", { s: 7 }) + txt(140, 22, "Époque", { s: 7 }) + txt(140, 30, "contemp.", { s: 7 }) +
    txt(80, 78, "Préhistoire avant −3000 (écriture)", { s: 7 })
);

function friseRepere(annee, libelle) {
  const min = -100, max = 2000;
  const x = (a) => 8 + ((a - min) / (max - min)) * 144;
  const ticks = [0, 500, 1000, 1500, 2000];
  return svg(
    ln(8, 45, 154, 45) + fleche(154, 45, 1, 0) + ticks.map((a) => ln(x(a), 41, x(a), 49, fin) + txt(x(a), 60, String(a), { s: 7 })).join("") +
      `<circle cx="${x(annee)}" cy="45" r="3.2" fill="currentColor" stroke="none"/>` + ln(x(annee), 40, x(annee), 24, fin) +
      (x(annee) > 100 ? txt(x(annee) + 2, 18, libelle, { s: 8, b: true, a: "end" }) : txt(Math.max(x(annee), 30), 18, libelle, { s: 8, b: true })),
    70
  );
}

const ILLUSTRATIONS_QUESTIONS = {
  // Histoire
  "Quelles sont les grandes périodes de l'histoire ?": FRISE_PERIODES,
  "Qu'est-ce qu'une frise chronologique et à quoi sert-elle ?": svg(
    ln(5, 40, 155, 40) + fleche(155, 40, 1, 0) + [0, 1, 2, 3, 4].map((i) => ln(10 + i * 35, 35, 10 + i * 35, 45) + txt(10 + i * 35, 58, `${1600 + i * 100}`, { s: 7 })).join("") +
      `<rect x="25" y="36" width="49" height="8" fill="currentColor" fill-opacity="0.3" stroke="none"/>` + txt(50, 28, "Louis XIV", { s: 7 }) + pt(73.3, 40, "") + txt(110, 28, "1789", { s: 7 }) + ln(110.15, 31, 110.15, 37, fin) +
      txt(80, 80, "échelle régulière : 1 graduation = 100 ans", { s: 7 })
  ),
  "Comment trouve-t-on le siècle d'une date ?": svg(
    ln(10, 40, 150, 40) + ln(30, 34, 30, 46) + ln(130, 34, 130, 46) + txt(30, 58, "1701", { s: 8 }) + txt(130, 58, "1800", { s: 8 }) + `<rect x="30" y="36" width="100" height="8" fill="currentColor" fill-opacity="0.2" stroke="none"/>` +
      txt(80, 14, "XVIIIe siècle", { s: 9, b: true }) + pt(118.9, 40, "1789", 0, -8) + txt(80, 82, "1789 : 17 centaines + 1 = XVIIIe", { s: 7 })
  ),
  // Géographie
  "Quelle différence entre espace urbain, périurbain et rural ?": svg(
    `<circle cx="60" cy="45" r="40" fill="currentColor" fill-opacity="0.05"/><circle cx="60" cy="45" r="26" fill="currentColor" fill-opacity="0.12"/><circle cx="60" cy="45" r="12" fill="currentColor" fill-opacity="0.35"/>` +
      txt(60, 48, "ville", { s: 7 }) + txt(60, 27, "périurbain", { s: 6 }) + txt(60, 13, "rural", { s: 6 }) + ln(84, 45, 112, 45, fin) + fleche(112, 45, 1, 0) + txt(136, 42, "mobilités", { s: 7 }) + txt(136, 52, "quotidiennes", { s: 7 })
  ),
  "Qu'est-ce que l'échelle d'une carte ? Qu'est-ce que changer d'échelle ?": ILLUSTRATIONS_MATHS["Échelle"],
  "Qu'est-ce qu'un paysage en géographie ?": svg(
    `<rect x="10" y="8" width="140" height="74"/>` + ln(10, 34, 150, 34, tir) + ln(10, 58, 150, 58, tir) + txt(80, 24, "arrière-plan (relief, horizon)", { s: 7 }) + txt(80, 48, "second plan", { s: 7 }) + txt(80, 72, "premier plan", { s: 7 })
  ),
  "Qu'est-ce qu'un croquis et que doit-il comporter ?": svg(
    `<rect x="8" y="8" width="80" height="74"/><circle cx="48" cy="45" r="16" fill="currentColor" fill-opacity="0.3"/>` + ln(8, 70, 88, 20, 'stroke-width="2"') + pt(48, 45, "") + txt(48, 18, "N ↑", { s: 7 }) +
      `<rect x="96" y="20" width="8" height="6" fill="currentColor" fill-opacity="0.3"/>` + txt(108, 26, "habitat", { a: "start", s: 7 }) + ln(96, 40, 104, 40, 'stroke-width="2"') + txt(108, 43, "axe", { a: "start", s: 7 }) + txt(122, 64, "titre, légende,", { s: 7 }) + txt(122, 74, "orientation", { s: 7 })
  ),
  // Français
  "Qu'est-ce que le sujet ? Comment l'identifier ?": svg(
    `<rect x="6" y="16" width="62" height="20" fill="currentColor" fill-opacity="0.15"/><rect x="72" y="16" width="38" height="20"/>` +
      txt(37, 30, "Les enfants", { s: 9 }) + txt(91, 30, "jouent", { s: 9 }) + txt(113, 30, "dans la cour.", { s: 6.5, a: "start" }) + txt(37, 48, "sujet", { s: 8 }) + txt(91, 48, "verbe", { s: 8 }) +
      txt(80, 74, "« C'est les enfants QUI jouent »", { s: 8, i: true })
  ),
  "Qu'est-ce qu'un complément de phrase (anciennement complément circonstanciel) ?": svg(
    `<rect x="4" y="12" width="44" height="20" fill="currentColor" fill-opacity="0.15"/>` + txt(26, 26, "Demain,", { s: 9 }) + txt(102, 26, "nous irons à la plage.", { s: 9 }) +
      txt(26, 44, "complément", { s: 7 }) + txt(26, 52, "de phrase", { s: 7 }) + txt(80, 72, "supprimable : Nous irons à la plage.", { s: 7, i: true }) + txt(80, 84, "déplaçable : Nous irons demain à la plage.", { s: 7, i: true })
  ),
  "Quelle différence entre phrase simple et phrase complexe ?": svg(
    `<rect x="4" y="14" width="152" height="20"/>` + txt(80, 28, "Le chat dort.", { s: 9 }) + txt(80, 44, "phrase simple : 1 proposition", { s: 7 }) +
      `<rect x="4" y="54" width="60" height="20"/><rect x="66" y="54" width="90" height="20"/>` + txt(34, 68, "Le chat dort", { s: 8 }) + txt(111, 68, "car il est fatigué.", { s: 8 }) + txt(80, 86, "phrase complexe : 2 propositions", { s: 7 })
  ),
  "Qu'est-ce qu'une proposition subordonnée relative ?": svg(
    txt(40, 22, "Le livre", { s: 9, b: true }) + `<rect x="66" y="10" width="90" height="18" fill="currentColor" fill-opacity="0.15"/>` + txt(111, 22, "que tu m'as prêté", { s: 8 }) + txt(80, 44, "est passionnant.", { s: 9 }) +
      txt(40, 62, "antécédent", { s: 7 }) + txt(111, 62, "subordonnée relative", { s: 7 }) + txt(80, 82, "« que » : pronom relatif", { s: 8, i: true })
  ),
};

// Repères datés des cartes d'histoire (frise automatique).
const REPERES = {
  "Que s'est-il passé en 52 av. J.-C. ?": [-52, "−52 Alésia"],
  "Qui est Clovis et pourquoi est-il un repère ?": [496, "vers 496-500 Clovis"],
  "Que s'est-il passé en 800 ?": [800, "800 Charlemagne"],
  "Quel repère est associé à l'année 987 ?": [987, "987 Hugues Capet"],
  "Qu'est-ce que l'édit de Nantes (1598) ?": [1598, "1598 édit de Nantes"],
  "Quel roi incarne la monarchie absolue ? Donne les dates de son règne.": [1680, "1643-1715 Louis XIV"],
  "Que s'est-il passé le 14 juillet 1789 et le 26 août 1789 ?": [1789, "1789 Révolution"],
  "Quand la Première République est-elle proclamée ?": [1792, "1792 Ire République"],
  "Quels repères sont associés à l'année 1804 ?": [1804, "1804 Napoléon Ier"],
  "Que s'est-il passé en 1848 ?": [1848, "1848 abolition"],
  "Que sont les lois Ferry (1881-1882) ?": [1882, "1881-1882 lois Ferry"],
  "Que dit la loi de 1905 ?": [1905, "1905 laïcité"],
  "Quelles sont les dates des deux guerres mondiales ?": [1930, "1914-18 · 1939-45"],
  "Quand les femmes obtiennent-elles le droit de vote en France ?": [1944, "1944 vote des femmes"],
  "Que s'est-il passé en 1957 ?": [1957, "1957 traités de Rome"],
  "Qu'est-ce que la Ve République ?": [1958, "1958 Ve République"],
};
for (const [q, [a, l]] of Object.entries(REPERES)) ILLUSTRATIONS_QUESTIONS[q] = friseRepere(a, l);

module.exports = { ILLUSTRATIONS_MATHS, ILLUSTRATIONS_QUESTIONS, FRISE_PERIODES };
