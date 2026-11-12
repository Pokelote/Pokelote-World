# Génère crpe/index.html (« Mes fiches CRPE », consultable à distance depuis le téléphone) et
# crpe/polycopies-a-imprimer.html (la liste à imprimer, transformée en PDF par node outils/pdf-page.js).
# Demande de Clément du 12/11/2026, avant Porto : la liste des polycopiés de cours à faire imprimer
# pendant son absence, et un accès à distance à toutes les fiches créées pour les recopier sur papier.
# Usage : python3 outils/page-fiches-crpe.py
import glob
import html
import os

import pypdf

ROOT = os.path.join(os.path.dirname(__file__), "..")
CRPE = os.path.join(ROOT, "crpe")


def pages(rel):
    try:
        return len(pypdf.PdfReader(os.path.join(CRPE, rel)).pages)
    except Exception:
        return None


RAN = [
    ("01-geometrie-plane", "Les bases de la géométrie plane"),
    ("02-symetries-polygones", "Symétries et polygones particuliers"),
    ("03-quatre-operations", "Les quatre opérations"),
    ("04-arithmetique", "Arithmétique"),
    ("05-rationnels", "Calcul avec les rationnels"),
    ("06-aires-perimetres", "Aires et périmètres"),
    ("07-proportionnalite", "La proportionnalité"),
    ("08-calcul-litteral", "Le calcul littéral"),
    ("09-geometrie-espace", "La géométrie dans l'espace"),
    ("10-equations-fonctions", "Équations et fonctions"),
    ("11-pourcentages", "Les pourcentages"),
    ("12-tableur-algorithmique", "Tableur et algorithmique"),
]

# Fiches créées pour Clément (à recopier).
FICHES = [
    ("ran-maths/fiches-tout-en-un.pdf", "📚 Toutes les fiches en un seul PDF", "fiche de révision + définitions + les 12 fiches RAN"),
    ("ran-maths/fiche-revision-toutes-les-ran.pdf", "Fiche de révision — les 12 RAN", "l'essentiel de chaque RAN + formulaire"),
    ("ran-maths/fiche-definitions-ran-maths.pdf", "Fiche des définitions — les 12 RAN", "une définition, un exemple"),
] + [(f"ran-maths/ran-{slug}.pdf", f"RAN {int(slug[:2])} — {titre}", "définitions, propriétés, méthodes, exemples, pièges") for slug, titre in RAN]

ENTRAINEMENT = [
    ("seances-guidees/2026-10-27-guidee.pdf", "Séance guidée du 27/10 (à faire)", "fraction-quotient, erreur d'élève, PGCD/PPCM — aides et corrigés à la fin"),
    ("ran-maths/boites-a-questions-cartes.pdf", "Boîtes à questions — maths (cartes à imprimer)", "recto verso, bord long ; mode d'emploi en page 1"),
    ("ran-maths/boites-a-questions-francais.pdf", "Boîtes à questions — français (cartes à imprimer)", "grammaire, lexique, orthographe ; recto verso, bord long"),
    ("ran-maths/boites-a-questions-histoire-geo-emc.pdf", "Boîtes à questions — histoire-géo-EMC (cartes à imprimer)", "repères, notions, EMC ; recto verso, bord long"),
]
MIXTES = sorted({os.path.basename(f).rsplit("-", 1)[0] for f in glob.glob(os.path.join(CRPE, "exercices-mixtes", "*-enonces.pdf"))}, reverse=True)

# Polycopiés à imprimer : (priorité, titre de section, [(libellé, source, fichier du site ou None)]).
OC = "Objectif CRPE (plateforme ou dossier CRPE du PC)"
POLYS = [
    ("1", "Priorité 1 — d'ici fin novembre : remises à niveau", [
        ("RAN 1 à RAN 12 de mathématiques (12 polycopiés de cours + exercices)", OC, None),
        ("Remise à niveau #1 — Bases de géométrie plane", "Objectif CRPE", "maths-remise-a-niveau-1-bases-geometrie-plane.pdf"),
        ("La grammaire du français — Terminologie grammaticale (guide officiel). Si besoin, n'imprime d'abord que les parties « classes de mots », « fonctions » et « phrase ».", "Eduscol", "francais-guide-terminologie-grammaticale.pdf"),
    ]),
    ("2", "Priorité 2 — décembre : cours et didactique (M2)", [
        ("Maths — Module 1 : Démontrer en mathématiques", OC, None),
        ("Maths — Module 2 : Géométrie du triangle", OC, None),
        ("Maths — Module 3 : Calculer avec les nombres réels", OC, None),
        ("Maths — M2 : Introduction à l'épreuve de mathématiques", OC, None),
        ("Maths — CRPE : Les 10 pièges de l'épreuve de mathématiques", OC, None),
        ("Didactique des maths — les 21 cours « M2 » (de « Introduction à la didactique des mathématiques » à « Concevoir et animer une séance en mathématiques »)", OC, None),
        ("Didactique du français — les 16 cours « M2 » (de « Introduction à la didactique du français » à « Concevoir et animer une séance »)", OC, None),
        ("Didactique générale — M2 : Concevoir, analyser une séance ou séquence ; M2 : Didactique et pédagogie pour l'épreuve d'application", OC, None),
    ]),
    ("3", "Priorité 3 — janvier et après : application, annales, oraux", [
        ("Épreuve d'application : uniquement les cours « M2 » du domaine que tu choisiras (sciences, histoire-géo-EMC ou arts) — à imprimer une fois le domaine choisi", OC, None),
        ("Annales 2026 — mathématiques (3 sujets)", "Ministère", "annales-2026-maths-g1.pdf"),
        ("Annales 2026 — français (3 sujets)", "Ministère", "annales-2026-francais-g1.pdf"),
        ("Sujet zéro — mathématiques", "Ministère", "sujet-zero-maths.pdf"),
        ("Sujets zéro — français (2)", "Ministère", "sujet-zero-francais-1.pdf"),
        ("Oral 1 — Leçon : note de commentaire", "Ministère", "oral-lecon-note-de-commentaire.pdf"),
        ("Oral 2 — Entretien : note de commentaire", "Ministère", "oral-entretien-note-de-commentaire.pdf"),
    ]),
]
EXTRA_PAGES = {
    "annales-2026-maths-g1.pdf": ["annales-2026-maths-g2.pdf", "annales-2026-maths-g3.pdf"],
    "annales-2026-francais-g1.pdf": ["annales-2026-francais-g2.pdf", "annales-2026-francais-g3.pdf"],
    "sujet-zero-francais-1.pdf": ["sujet-zero-francais-2.pdf"],
}

CSS = """
:root { --bg:#f7f5f2; --card:#ffffff; --text:#1d1d1f; --muted:#5f6368; --line:#e3ded7; --accent:#3f6a96; --ok:#2e7d32; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --bg:#121417; --card:#1b1f24; --text:#eceff1; --muted:#a3abb3; --line:#2c333b; --accent:#8fb3d9; --ok:#7cc47f; } }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--text); font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; }
main { max-width: 760px; margin: 0 auto; padding: 24px 16px 48px; }
h1 { font-size: 1.6rem; margin: 0 0 4px; }
h2 { font-size: 1.15rem; margin: 28px 0 8px; color: var(--accent); }
p.sub { color: var(--muted); margin: 0 0 16px; }
ul { list-style: none; padding: 0; margin: 0; }
li { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 10px 14px; margin-bottom: 8px; }
a { color: var(--accent); text-decoration: none; font-weight: 600; }
a:hover { text-decoration: underline; }
.meta { color: var(--muted); font-size: .88rem; }
.src { color: var(--muted); font-size: .82rem; }
.tag { display:inline-block; font-size:.75rem; border:1px solid var(--line); border-radius:999px; padding:0 8px; margin-left:6px; color:var(--muted); }
.note { background: var(--card); border-left: 3px solid var(--accent); padding: 10px 14px; border-radius: 6px; }
.chips { display:flex; flex-wrap:wrap; gap:6px; }
.chips a { font-weight:500; font-size:.9rem; border:1px solid var(--line); border-radius:999px; padding:3px 10px; background:var(--card); }
@media print { body { background:#fff; color:#000; } li { break-inside: avoid; border-color:#ccc; } a { color:#000; } }
"""


def esc(t):
    return html.escape(t, quote=True)


def fiche_li(rel, titre, desc):
    n = pages(rel)
    return f'<li><a href="./{esc(rel)}" target="_blank" rel="noreferrer">{esc(titre)}</a><span class="tag">{n} p.</span><div class="meta">{esc(desc)}</div></li>'


def poly_li(label, source, fichier, avec_cases=False):
    total = None
    lien = ""
    if fichier:
        total = sum(pages(f) or 0 for f in [fichier] + EXTRA_PAGES.get(fichier, []))
        lien = f' — <a href="./{esc(fichier)}" target="_blank" rel="noreferrer">ouvrir</a>'
    case = "☐ " if avec_cases else ""
    tag = f'<span class="tag">{total} p.</span>' if total else ""
    return f'<li>{case}{esc(label)}{tag}<div class="src">Source : {esc(source)}{lien}</div></li>'


def polys_html(avec_cases):
    out = []
    for _, titre, items in POLYS:
        out.append(f"<h2>{esc(titre)}</h2><ul>")
        out += [poly_li(l, s, f, avec_cases) for l, s, f in items]
        out.append("</ul>")
    return "\n".join(out)


def page(title, body):
    return f"""<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title><style>{CSS}</style></head>
<body><main>
{body}
</main></body></html>
"""


mixtes = "".join(
    f'<a href="./exercices-mixtes/{k}-enonces.pdf" target="_blank" rel="noreferrer">{k[8:10]}/{k[5:7]}{" (après-midi)" if k.endswith("apm") else ""}</a>'
    for k in MIXTES
)
index = page("Mes fiches CRPE", f"""
<h1>Mes fiches CRPE</h1>
<p class="sub">Toutes les fiches préparées pour toi, accessibles depuis n'importe quel téléphone ou ordinateur. Touche un titre pour ouvrir le PDF.</p>
<div class="note">Pour recopier sur papier : commence par la <b>fiche des définitions</b> (une définition, un exemple), puis la <b>fiche de révision</b>. Les fiches des RAN détaillent chaque chapitre.</div>
<h2>À recopier — fiches de cours</h2>
<ul>{"".join(fiche_li(*f) for f in FICHES)}</ul>
<h2>Pour t'entraîner</h2>
<ul>{"".join(fiche_li(*f) for f in ENTRAINEMENT)}</ul>
<h2>Exercices mixtes déjà faits (énoncés ; corrigés à côté sur le site)</h2>
<div class="chips">{mixtes}</div>
<h2>Polycopiés à imprimer</h2>
<p class="sub">Liste complète et imprimable : <a href="./polycopies-a-imprimer.pdf" target="_blank" rel="noreferrer">polycopies-a-imprimer.pdf</a>. Les cours Objectif CRPE se téléchargent depuis la plateforme ou ton dossier CRPE sur le PC. Ne pas imprimer les cours « L3 » (nouveau concours bac+3, pas le tien).</p>
{polys_html(False)}
<p class="sub" style="margin-top:24px">Site complet : <a href="../mon-espace.html">Mon espace</a> → Apprentissage → Révisions CRPE.</p>
""")
liste = page("Polycopiés CRPE à imprimer", f"""
<h1>Polycopiés CRPE à imprimer</h1>
<p class="sub">Concours externe M2 (bac+5), session 2027. Coche au fur et à mesure. Les cours « Objectif CRPE » se téléchargent depuis la plateforme (live.objectif-crpe.fr) ou depuis le dossier CRPE du PC ; les autres sont sur la page « Mes fiches CRPE » du site. Ne pas imprimer les cours marqués « L3 ». Conseil : recto verso, agrafé par polycopié.</p>
{polys_html(True)}
<h2>Fiches de Claude (facultatif, à recopier plutôt qu'imprimer)</h2>
<ul>{poly_li("Toutes les fiches en un seul PDF (révision, définitions, 12 RAN)", "Site — Mes fiches CRPE", "ran-maths/fiches-tout-en-un.pdf", True)}</ul>
""")
open(os.path.join(CRPE, "index.html"), "w").write(index)
open(os.path.join(CRPE, "polycopies-a-imprimer.html"), "w").write(liste)
print("crpe/index.html, crpe/polycopies-a-imprimer.html")
