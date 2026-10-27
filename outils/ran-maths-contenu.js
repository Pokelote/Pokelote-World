// Contenu des fiches de cours des 12 RAN de maths (Objectif CRPE), rédigé pour le dossier crpe/ran-maths/
// (demande de Clément du 26/10/2026). Chaque RAN a des sections détaillées (fiche de la RAN) et un
// « essentiel » repris dans la fiche de révision qui rassemble toutes les RAN.
// Balises disponibles : .def (définition), .prop (propriété / formule), .ex (exemple résolu),
// .piege (erreur classique) ; F(a, b) écrit une fraction.
const F = (a, b) => `<span class="f"><span>${a}</span><span>${b}</span></span>`;

const RAN = [
  {
    n: 1,
    slug: "geometrie-plane",
    titre: "Les bases de la géométrie plane",
    sections: [
      {
        h: "Vocabulaire et notations",
        html: `
<ul>
  <li><b>(AB)</b> : la droite passant par A et B · <b>[AB]</b> : le segment d'extrémités A et B · <b>[AB)</b> : la demi-droite d'origine A passant par B · <b>AB</b> : la longueur du segment [AB] (un nombre).</li>
  <li><b>∈</b> « appartient à » (A ∈ (d)) · <b>⊥</b> « est perpendiculaire à » · <b>//</b> « est parallèle à ».</li>
  <li>Des points sont <b>alignés</b> s'ils appartiennent à une même droite.</li>
  <li>Deux droites sont <b>sécantes</b> si elles ont un seul point commun, <b>perpendiculaires</b> si elles sont sécantes en formant un angle droit, <b>parallèles</b> si elles n'ont aucun point commun ou sont confondues.</li>
</ul>
<div class="def"><b>Milieu.</b> Le milieu I de [AB] est le point de [AB] tel que IA = IB = ${F("AB", "2")}.</div>
<div class="def"><b>Médiatrice.</b> La médiatrice d'un segment est la droite perpendiculaire à ce segment en son milieu. C'est l'ensemble des points <b>équidistants</b> des extrémités : M est sur la médiatrice de [AB] ⇔ MA = MB.</div>
<div class="def"><b>Cercle.</b> Le cercle de centre O et de rayon r est l'ensemble des points situés à la distance r de O. Un <b>rayon</b> relie O à un point du cercle, une <b>corde</b> relie deux points du cercle, un <b>diamètre</b> est une corde passant par O (longueur 2r).</div>
<div class="def"><b>Distance d'un point à une droite.</b> C'est la longueur AH, où H est le pied de la perpendiculaire à (d) passant par A. C'est la plus courte distance entre A et un point de (d).</div>`,
      },
      {
        h: "Droites parallèles et perpendiculaires",
        html: `
<div class="prop"><b>P1.</b> Si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles.</div>
<div class="prop"><b>P2.</b> Si deux droites sont parallèles et qu'une troisième est perpendiculaire à l'une, alors elle est perpendiculaire à l'autre.</div>
<div class="prop"><b>P3.</b> Si deux droites sont parallèles à une même troisième, alors elles sont parallèles entre elles.</div>
<p>Par un point donné, il passe une et une seule droite parallèle à une droite donnée, et une seule perpendiculaire.</p>`,
      },
      {
        h: "Angles",
        html: `
<ul>
  <li><b>Aigu</b> : entre 0° et 90° · <b>droit</b> : 90° · <b>obtus</b> : entre 90° et 180° · <b>plat</b> : 180°.</li>
  <li><b>Complémentaires</b> : somme 90° · <b>supplémentaires</b> : somme 180° · <b>adjacents</b> : même sommet, un côté commun, situés de part et d'autre de ce côté.</li>
  <li>Deux angles <b>opposés par le sommet</b> ont la même mesure.</li>
  <li>Deux droites coupées par une sécante : les angles <b>alternes-internes</b> et les angles <b>correspondants</b> ont la même mesure <b>si et seulement si</b> les droites sont parallèles.</li>
  <li>La <b>bissectrice</b> d'un angle le partage en deux angles de même mesure.</li>
</ul>`,
      },
      {
        h: "Le triangle",
        html: `
<div class="prop"><b>Somme des angles.</b> Dans un triangle, la somme des mesures des trois angles vaut 180°.</div>
<div class="prop"><b>Inégalité triangulaire.</b> Pour trois points A, B, C : AB ≤ AC + CB, avec égalité si et seulement si C ∈ [AB]. On peut construire un triangle de côtés a ≤ b ≤ c si et seulement si c &lt; a + b.</div>
<table>
  <tr><th>Droites remarquables</th><th>Définition</th><th>Point de concours</th></tr>
  <tr><td>Médiatrices</td><td>perpendiculaires aux côtés en leur milieu</td><td>centre du cercle <b>circonscrit</b> (passe par les 3 sommets)</td></tr>
  <tr><td>Hauteurs</td><td>passent par un sommet, perpendiculaires au côté opposé</td><td><b>orthocentre</b></td></tr>
  <tr><td>Médianes</td><td>relient un sommet au milieu du côté opposé</td><td><b>centre de gravité</b>, aux ${F("2", "3")} de chaque médiane en partant du sommet</td></tr>
  <tr><td>Bissectrices</td><td>bissectrices des angles</td><td>centre du cercle <b>inscrit</b> (tangent aux 3 côtés)</td></tr>
</table>`,
      },
      {
        h: "Exemples et méthode de rédaction",
        html: `
<div class="ex"><b>Exemple 1.</b> Peut-on construire un triangle de côtés 4 cm, 5 cm et 10 cm ?<br>
Le plus grand côté mesure 10 cm et 4 + 5 = 9 &lt; 10 : l'inégalité triangulaire n'est pas respectée, le triangle n'est pas constructible.</div>
<div class="ex"><b>Exemple 2.</b> Dans le triangle ABC, Â = 48° et B̂ = 67°. Ĉ = 180° − 48° − 67° = 65°.</div>
<div class="ex"><b>Rédiger une démonstration</b> en trois temps : <i>On sait que</i> (données de l'énoncé) · <i>Or</i> (propriété énoncée en entier) · <i>Donc</i> (conclusion).<br>
Ex. : On sait que (d1) ⊥ (d) et (d2) ⊥ (d). Or si deux droites sont perpendiculaires à une même droite, elles sont parallèles. Donc (d1) // (d2).</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Écrire (AB) = 5 cm : une droite n'a pas de longueur, c'est AB = 5 cm.</div>
<div class="piege">« On voit sur la figure que… » n'est pas une preuve : une figure sert à conjecturer, les codages et les propriétés servent à démontrer.</div>
<div class="piege">Les angles alternes-internes ne sont égaux que si les droites sont parallèles.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>(AB) droite · [AB] segment · [AB) demi-droite · AB longueur.</li>
  <li><b>Médiatrice</b> de [AB] : perpendiculaire en son milieu = points équidistants de A et B.</li>
  <li>2 droites ⊥ à une même droite sont // · si (d1) // (d2) et (d) ⊥ (d1), alors (d) ⊥ (d2).</li>
  <li>Opposés par le sommet : égaux · alternes-internes / correspondants égaux ⇔ droites //.</li>
  <li>Triangle : somme des angles 180° · inégalité triangulaire c &lt; a + b.</li>
  <li>Médiatrices → cercle circonscrit · hauteurs → orthocentre · médianes → centre de gravité (aux ${F("2", "3")}) · bissectrices → cercle inscrit.</li>
  <li>Rédaction : On sait que… Or (propriété)… Donc…</li>
</ul>`,
  },
  {
    n: 2,
    slug: "symetries-polygones",
    titre: "Symétries et polygones particuliers",
    sections: [
      {
        h: "Symétrie axiale et symétrie centrale",
        html: `
<div class="def"><b>Symétrie axiale d'axe (d).</b> M' est le symétrique de M si (d) est la médiatrice de [MM']. Si M ∈ (d), M' = M.</div>
<div class="def"><b>Symétrie centrale de centre O.</b> M' est le symétrique de M si O est le milieu de [MM']. Elle correspond à un demi-tour (rotation de 180°) autour de O.</div>
<div class="prop"><b>Propriétés de conservation.</b> Les deux symétries conservent les longueurs, les mesures d'angles, les aires, l'alignement et le parallélisme. Le symétrique d'une droite est une droite ; par une symétrie centrale, c'est une droite <b>parallèle</b>.</div>
<ul>
  <li>Une figure a un <b>axe de symétrie</b> si elle se superpose à elle-même par pliage le long de cet axe, un <b>centre de symétrie</b> si elle est invariable par demi-tour autour de ce point.</li>
  <li>Pour aller plus loin (cycle 4) : la <b>translation</b> (glissement) et la <b>rotation</b> conservent aussi longueurs, angles et aires.</li>
</ul>`,
      },
      {
        h: "Triangles particuliers",
        html: `
<table>
  <tr><th>Triangle</th><th>Définition</th><th>Propriétés</th><th>Axes</th></tr>
  <tr><td>Isocèle en A</td><td>AB = AC</td><td>les angles à la base B̂ et Ĉ sont égaux ; la médiatrice de [BC] passe par A</td><td>1</td></tr>
  <tr><td>Équilatéral</td><td>3 côtés égaux</td><td>3 angles de 60°</td><td>3</td></tr>
  <tr><td>Rectangle en A</td><td>Â = 90°</td><td>[BC] est l'hypoténuse ; B̂ + Ĉ = 90° ; le milieu de l'hypoténuse est le centre du cercle circonscrit</td><td>0 (1 s'il est aussi isocèle)</td></tr>
</table>`,
      },
      {
        h: "Quadrilatères particuliers",
        html: `
<table>
  <tr><th>Quadrilatère</th><th>Définition</th><th>Propriétés</th><th>Symétries</th></tr>
  <tr><td>Parallélogramme</td><td>côtés opposés parallèles deux à deux</td><td>côtés opposés de même longueur ; angles opposés égaux ; diagonales qui se coupent en leur milieu</td><td>centre = intersection des diagonales ; pas d'axe en général</td></tr>
  <tr><td>Rectangle</td><td>4 angles droits</td><td>parallélogramme dont les diagonales ont la même longueur</td><td>centre + 2 axes (médiatrices des côtés)</td></tr>
  <tr><td>Losange</td><td>4 côtés de même longueur</td><td>parallélogramme dont les diagonales sont perpendiculaires</td><td>centre + 2 axes (les diagonales)</td></tr>
  <tr><td>Carré</td><td>rectangle et losange à la fois</td><td>diagonales de même longueur, perpendiculaires, se coupant en leur milieu</td><td>centre + 4 axes</td></tr>
  <tr><td>Trapèze</td><td>deux côtés parallèles (les bases)</td><td>isocèle : 1 axe ; rectangle : 2 angles droits</td><td>—</td></tr>
</table>
<div class="prop"><b>Reconnaître un parallélogramme.</b> Un quadrilatère (non croisé) est un parallélogramme si : ses diagonales se coupent en leur milieu, <i>ou</i> ses côtés opposés sont parallèles deux à deux, <i>ou</i> ses côtés opposés sont de même longueur deux à deux, <i>ou</i> deux côtés opposés sont parallèles et de même longueur.</div>
<div class="prop"><b>Parallélogramme particulier.</b> Un parallélogramme qui a un angle droit <i>ou</i> des diagonales de même longueur est un rectangle ; un parallélogramme qui a deux côtés consécutifs égaux <i>ou</i> des diagonales perpendiculaires est un losange.</div>
<div class="prop"><b>Raccourcis.</b> Un quadrilatère qui a 3 angles droits est un rectangle ; un quadrilatère qui a 4 côtés égaux est un losange.</div>`,
      },
      {
        h: "Polygones",
        html: `
<ul>
  <li>Un polygone <b>régulier</b> a tous ses côtés de même longueur et tous ses angles de même mesure (triangle équilatéral, carré, pentagone régulier…). Il est inscrit dans un cercle ; l'angle au centre vaut ${F("360°", "n")}.</li>
  <li>Somme des angles d'un polygone convexe à n côtés : <b>(n − 2) × 180°</b> (quadrilatère 360°, pentagone 540°, hexagone 720°).</li>
  <li>Hexagone régulier : 6 triangles équilatéraux, côté = rayon du cercle circonscrit.</li>
</ul>
<div class="ex"><b>Exemple.</b> ABCD a des diagonales [AC] et [BD] de même milieu O, et AC = BD. Comme ses diagonales se coupent en leur milieu, c'est un parallélogramme. Comme ses diagonales ont en plus la même longueur, c'est un rectangle.</div>
<div class="ex"><b>Exemple.</b> Angle intérieur d'un pentagone régulier : (5 − 2) × 180° ÷ 5 = 540° ÷ 5 = 108°.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Un quadrilatère aux diagonales perpendiculaires n'est pas forcément un losange (cerf-volant) : il faut aussi qu'elles se coupent en leur milieu.</div>
<div class="piege">Le carré <b>est</b> un rectangle et <b>est</b> un losange (inclusion des familles) ; tout rectangle est un parallélogramme.</div>
<div class="piege">Un parallélogramme quelconque n'a pas d'axe de symétrie (les diagonales n'en sont pas).</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Symétrie axiale : l'axe est la médiatrice de [MM'] · centrale : O milieu de [MM'] · les deux conservent longueurs, angles, aires, alignement.</li>
  <li>Isocèle : angles à la base égaux · équilatéral : 60°, 3 axes · rectangle : hypoténuse = diamètre du cercle circonscrit.</li>
  <li>Parallélogramme ⇔ diagonales de même milieu ⇔ côtés opposés // ⇔ côtés opposés égaux.</li>
  <li>+ angle droit ou diagonales égales → rectangle · + côtés consécutifs égaux ou diagonales ⊥ → losange · les deux → carré.</li>
  <li>Axes : parallélogramme 0 · rectangle 2 · losange 2 · carré 4.</li>
  <li>Somme des angles d'un polygone à n côtés : (n − 2) × 180°.</li>
</ul>`,
  },
  {
    n: 3,
    slug: "quatre-operations",
    titre: "Les quatre opérations : propriétés et algorithmes",
    sections: [
      {
        h: "Numération et vocabulaire",
        html: `
<ul>
  <li>Numération décimale <b>de position</b> : la valeur d'un chiffre dépend de son rang ; 10 unités d'un rang = 1 unité du rang supérieur.</li>
  <li>Distinguer <b>chiffre</b> et <b>nombre</b> de : dans 3 457, le chiffre des centaines est 4, le nombre de centaines est 34.</li>
  <li>a + b = <b>somme</b> (a, b : termes) · a − b = <b>différence</b> · a × b = <b>produit</b> (a, b : facteurs) · a ÷ b = <b>quotient</b> (a : dividende, b : diviseur).</li>
</ul>`,
      },
      {
        h: "Propriétés des opérations",
        html: `
<div class="prop"><b>Addition et multiplication</b> sont <b>commutatives</b> (a + b = b + a ; a × b = b × a) et <b>associatives</b> ((a + b) + c = a + (b + c)). 0 est neutre pour +, 1 est neutre pour ×, 0 est absorbant pour ×.</div>
<div class="prop"><b>Distributivité</b> de la multiplication sur l'addition et la soustraction : k × (a + b) = k × a + k × b ; k × (a − b) = k × a − k × b.</div>
<div class="prop"><b>Soustraction et division</b> ne sont ni commutatives ni associatives. <b>Conservation des écarts</b> : a − b = (a + c) − (b + c). <b>Conservation des quotients</b> : a ÷ b = (a × c) ÷ (b × c), c ≠ 0.</div>
<div class="def"><b>Division euclidienne</b> de a par b (entiers, b ≠ 0) : il existe un unique couple (q ; r) d'entiers tel que <b>a = b × q + r</b> avec <b>0 ≤ r &lt; b</b>.</div>
<div class="prop"><b>Priorités opératoires.</b> 1) parenthèses ; 2) puissances ; 3) × et ÷ de gauche à droite ; 4) + et − de gauche à droite. Ex. : 2 + 3 × 4 = 14 ; 20 − 8 ÷ 2 × 3 = 20 − 12 = 8.</div>`,
      },
      {
        h: "Les algorithmes posés (et ce qui les justifie)",
        html: `
<ul>
  <li><b>Addition posée</b> : on aligne les rangs, la retenue traduit l'échange 10 unités d'un rang → 1 unité du rang supérieur.</li>
  <li><b>Soustraction posée, méthode par cassage (emprunt)</b> : on échange 1 dizaine contre 10 unités dans le premier terme. <b>Méthode par compensation</b> (traditionnelle) : on ajoute 10 unités au premier terme et 1 dizaine au second, ce qui ne change pas la différence (conservation des écarts).</li>
  <li><b>Multiplication posée</b> : somme de produits partiels ; elle repose sur la distributivité et la numération : 47 × 23 = 47 × 3 + 47 × 20 = 141 + 940 = 1 081 (d'où le « 0 » décalé de la 2e ligne).</li>
  <li><b>Division posée (potence)</b> : on partage rang par rang ; estimer d'abord le nombre de chiffres du quotient. Ex. : 1 834 ÷ 7 : 7 × 100 = 700 ≤ 1 834 &lt; 7 000 = 7 × 1 000, donc le quotient a 3 chiffres ; 1 834 = 7 × 262 + 0.</li>
</ul>`,
      },
      {
        h: "Calcul mental et décimaux",
        html: `
<ul>
  <li>× 5 = × 10 puis ÷ 2 · × 25 = × 100 puis ÷ 4 · × 9 = × 10 − × 1 · × 11 = × 10 + × 1 · × 0,5 = ÷ 2 · ÷ 0,5 = × 2 · ÷ 0,25 = × 4.</li>
  <li>Décomposer : 36 × 15 = 36 × 10 + 36 × 5 = 360 + 180 = 540 ; 99 × 24 = 2 400 − 24 = 2 376.</li>
  <li>Multiplier par 10, 100, 1 000 : chaque chiffre prend une valeur 10, 100, 1 000 fois plus grande (il « glisse » vers la gauche) : 3,45 × 100 = 345.</li>
  <li>Ordre de grandeur : 412 × 29 ≈ 400 × 30 = 12 000 (vérification du résultat).</li>
</ul>
<div class="ex"><b>Exemple.</b> Dans la division de 247 par 12 : 247 = 12 × 20 + 7, quotient 20, reste 7 (7 &lt; 12). En revanche 247 = 12 × 19 + 19 n'est pas la division euclidienne car 19 ≥ 12.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">« Multiplier par 10, c'est ajouter un zéro » : faux pour les décimaux (2,5 × 10 = 25, pas 2,50).</div>
<div class="piege">« Multiplier agrandit, diviser rapetisse » : faux avec des nombres inférieurs à 1 (8 × 0,5 = 4 ; 8 ÷ 0,5 = 16).</div>
<div class="piege">Ignorer les priorités : 2 + 3 × 4 ≠ 20. Le reste d'une division euclidienne doit être strictement inférieur au diviseur.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Chiffre des centaines de 3 457 : 4 · nombre de centaines : 34.</li>
  <li>+ et × commutatives, associatives · distributivité k(a + b) = ka + kb · − et ÷ ne le sont pas.</li>
  <li>Conservation des écarts a − b = (a + c) − (b + c) → justifie la soustraction par compensation.</li>
  <li>Division euclidienne : a = b × q + r avec 0 ≤ r &lt; b.</li>
  <li>Priorités : parenthèses, puissances, × ÷, + − (de gauche à droite).</li>
  <li>Multiplication posée = produits partiels (distributivité + numération).</li>
  <li>× 5 = × 10 ÷ 2 · × 25 = × 100 ÷ 4 · ÷ 0,5 = × 2.</li>
</ul>`,
  },
  {
    n: 4,
    slug: "arithmetique",
    titre: "Arithmétique",
    sections: [
      {
        h: "Multiples, diviseurs, critères de divisibilité",
        html: `
<div class="def"><b>Multiple / diviseur.</b> a et b entiers, b ≠ 0 : a est un <b>multiple</b> de b (et b est un <b>diviseur</b> de a, b <b>divise</b> a) s'il existe un entier k tel que a = k × b. Autrement dit, le reste de la division euclidienne de a par b est nul.</div>
<table>
  <tr><th>Divisible par</th><th>Critère</th></tr>
  <tr><td>2</td><td>chiffre des unités pair (0, 2, 4, 6, 8)</td></tr>
  <tr><td>3</td><td>somme des chiffres divisible par 3</td></tr>
  <tr><td>4</td><td>nombre formé par les deux derniers chiffres divisible par 4</td></tr>
  <tr><td>5</td><td>chiffre des unités 0 ou 5</td></tr>
  <tr><td>9</td><td>somme des chiffres divisible par 9</td></tr>
  <tr><td>10</td><td>chiffre des unités 0</td></tr>
  <tr><td>25</td><td>se termine par 00, 25, 50 ou 75</td></tr>
</table>
<p>Pairs : 2k · impairs : 2k + 1. Un nombre divisible par 2 et par 3 est divisible par 6 (2 et 3 n'ont pas de diviseur commun autre que 1).</p>`,
      },
      {
        h: "Nombres premiers",
        html: `
<div class="def"><b>Nombre premier.</b> Entier naturel qui a exactement deux diviseurs distincts : 1 et lui-même. <b>1 n'est pas premier</b> ; 2 est le seul nombre premier pair.</div>
<p>Les 25 nombres premiers inférieurs à 100 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.</p>
<div class="prop"><b>Tester si n est premier</b> : il suffit d'essayer les diviseurs premiers p tels que p × p ≤ n. Ex. : 221 : on teste 2, 3, 5, 7, 11, 13 (13 × 13 = 169 ≤ 221 &lt; 289 = 17 × 17) : 221 = 13 × 17, il n'est pas premier.</div>
<div class="prop"><b>Décomposition en facteurs premiers.</b> Tout entier ≥ 2 s'écrit comme produit de nombres premiers, de façon unique à l'ordre près. Ex. : 360 = 2³ × 3² × 5.</div>
<p>Nombre de diviseurs : si n = p<sup>a</sup> × q<sup>b</sup> × …, n a (a + 1)(b + 1)… diviseurs. 360 en a 4 × 3 × 2 = 24.</p>`,
      },
      {
        h: "PGCD et PPCM",
        html: `
<div class="def"><b>PGCD(a ; b)</b> : le plus grand diviseur commun à a et b. <b>PPCM(a ; b)</b> : le plus petit multiple commun non nul. a et b sont <b>premiers entre eux</b> si PGCD(a ; b) = 1.</div>
<div class="prop"><b>Méthodes pour le PGCD.</b> 1) Lister les diviseurs. 2) Décompositions : produit des facteurs premiers communs, avec le plus petit exposant. 3) <b>Algorithme d'Euclide</b> : PGCD(a ; b) = PGCD(b ; r), où r est le reste de a par b ; le PGCD est le dernier reste non nul. 4) Soustractions successives : PGCD(a ; b) = PGCD(b ; a − b).</div>
<div class="prop">PPCM : produit des facteurs premiers apparaissant dans l'une ou l'autre décomposition, avec le plus grand exposant. <b>PGCD(a ; b) × PPCM(a ; b) = a × b</b>.</div>
<div class="ex"><b>Exemple.</b> PGCD(252 ; 360) par Euclide : 360 = 252 × 1 + 108 ; 252 = 108 × 2 + 36 ; 108 = 36 × 3 + 0. PGCD = 36.<br>
Vérification : 252 = 2² × 3² × 7 et 360 = 2³ × 3² × 5 ; PGCD = 2² × 3² = 36 ; PPCM = 2³ × 3² × 5 × 7 = 2 520 ; 36 × 2 520 = 90 720 = 252 × 360.<br>
Fraction irréductible : ${F("252", "360")} = ${F("252 ÷ 36", "360 ÷ 36")} = ${F("7", "10")}.</div>
<div class="ex"><b>Problèmes types.</b> « Faire le plus grand nombre de lots identiques avec 252 billes et 360 calots, sans reste » → PGCD : 36 lots de 7 billes et 10 calots. « Deux phares clignotent toutes les 12 s et 18 s, quand clignotent-ils de nouveau ensemble ? » → PPCM(12 ; 18) = 36 s.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Dire que 1 est premier, ou que 51 ou 91 sont premiers (51 = 3 × 17 ; 91 = 7 × 13).</div>
<div class="piege">Confondre PGCD (partages, plus grand… commun) et PPCM (rencontres, cycles).</div>
<div class="piege">« Divisible par 4 et par 6 donc par 24 » : faux (12). Ça ne marche que si les deux nombres sont premiers entre eux.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>a multiple de b ⇔ a = k × b ⇔ reste nul.</li>
  <li>Critères : 2 (unités paires), 3 et 9 (somme des chiffres), 4 (2 derniers chiffres), 5, 10, 25.</li>
  <li>Premier : exactement 2 diviseurs (1 non premier) · tester les p premiers avec p² ≤ n.</li>
  <li>Premiers &lt; 100 : 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97.</li>
  <li>Décomposition unique : 360 = 2³ × 3² × 5.</li>
  <li>Euclide : PGCD(a ; b) = PGCD(b ; r), dernier reste non nul · PGCD × PPCM = a × b.</li>
  <li>PGCD → partages, fractions irréductibles · PPCM → rencontres, dénominateur commun.</li>
</ul>`,
  },
  {
    n: 5,
    slug: "rationnels",
    titre: "Calcul avec les rationnels",
    sections: [
      {
        h: "Les ensembles de nombres",
        html: `
<p><b>ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ.</b></p>
<ul>
  <li><b>Décimal</b> : peut s'écrire ${F("a", "10<sup>n</sup>")} (a entier) : 3,25 = ${F("325", "100")} ; ${F("3", "4")} = 0,75.</li>
  <li><b>Rationnel</b> : quotient ${F("a", "b")} de deux entiers (b ≠ 0) : ${F("1", "3")} est rationnel mais pas décimal (0,333… infini).</li>
  <li><b>Irrationnel</b> : ni l'un ni l'autre : √2, π.</li>
  <li>Une fraction irréductible est un nombre décimal si et seulement si son dénominateur n'a pas d'autre facteur premier que 2 et 5 : ${F("7", "20")} = 0,35 est décimal ; ${F("7", "15")} ne l'est pas.</li>
  <li>L'écriture décimale d'un rationnel est finie ou périodique ; inversement, une écriture périodique est rationnelle : x = 0,3636… ⇒ 100x = 36,3636… ⇒ 99x = 36 ⇒ x = ${F("36", "99")} = ${F("4", "11")}.</li>
</ul>`,
      },
      {
        h: "Les sens de la fraction",
        html: `
<ul>
  <li><b>Partage</b> : ${F("3", "4")} d'une tablette = je partage en 4 parts égales et j'en prends 3.</li>
  <li><b>Quotient</b> : ${F("3", "4")} est le nombre qui, multiplié par 4, donne 3 (3 ÷ 4 = 0,75).</li>
  <li><b>Opérateur</b> : prendre ${F("3", "4")} de 20 = 20 × ${F("3", "4")} = 15.</li>
  <li><b>Rapport / proportion</b> et <b>repère</b> sur une droite graduée (abscisse).</li>
</ul>`,
      },
      {
        h: "Calculer avec des fractions",
        html: `
<div class="prop"><b>Égalité.</b> ${F("a", "b")} = ${F("a × k", "b × k")} (k ≠ 0). Simplifier = diviser numérateur et dénominateur par un diviseur commun (par le PGCD pour la rendre irréductible).</div>
<div class="prop"><b>Comparer.</b> Même dénominateur : on compare les numérateurs. Sinon : on réduit au même dénominateur, ou on compare à 1, ou ${F("a", "b")} &lt; ${F("c", "d")} ⇔ ad &lt; bc (b, d &gt; 0).</div>
<div class="prop"><b>Addition / soustraction</b> : même dénominateur obligatoire. ${F("5", "6")} − ${F("3", "4")} = ${F("10", "12")} − ${F("9", "12")} = ${F("1", "12")}.</div>
<div class="prop"><b>Multiplication</b> : ${F("a", "b")} × ${F("c", "d")} = ${F("a × c", "b × d")} (simplifier avant de calculer).</div>
<div class="prop"><b>Division</b> : diviser par ${F("c", "d")}, c'est multiplier par son <b>inverse</b> ${F("d", "c")}. ${F("2", "3")} ÷ ${F("4", "9")} = ${F("2", "3")} × ${F("9", "4")} = ${F("18", "12")} = ${F("3", "2")}.</div>`,
      },
      {
        h: "Relatifs et puissances",
        html: `
<ul>
  <li><b>Règle des signes</b> : le produit (ou quotient) de deux nombres de même signe est positif, de signes contraires négatif. Un produit est négatif s'il a un nombre impair de facteurs négatifs.</li>
  <li><b>Soustraire un nombre, c'est ajouter son opposé</b> : 3 − (−5) = 3 + 5 = 8 ; −4 − 7 = −11.</li>
  <li><b>Puissances</b> : a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup> ; ${F("a<sup>m</sup>", "a<sup>n</sup>")} = a<sup>m−n</sup> ; (a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup> ; a<sup>0</sup> = 1 ; a<sup>−n</sup> = ${F("1", "a<sup>n</sup>")}.</li>
  <li><b>Notation scientifique</b> : a × 10<sup>n</sup> avec 1 ≤ a &lt; 10 : 45 000 = 4,5 × 10<sup>4</sup> ; 0,0032 = 3,2 × 10<sup>−3</sup>.</li>
  <li>(−3)² = 9 mais −3² = −9 (la puissance est prioritaire sur le signe).</li>
</ul>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">${F("1", "2")} + ${F("1", "3")} ≠ ${F("2", "5")} : on n'additionne jamais les dénominateurs (= ${F("5", "6")}).</div>
<div class="piege">« 0,25 &gt; 0,3 car 25 &gt; 3 » : faux, on compare rang par rang (2 dixièmes &lt; 3 dixièmes).</div>
<div class="piege">${F("1", "3")} ≠ 0,33 (c'est une valeur approchée) ; ${F("2", "3")} n'est pas décimal.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ · ${F("1", "3")} rationnel non décimal · √2, π irrationnels.</li>
  <li>Irréductible décimale ⇔ dénominateur = 2<sup>a</sup> × 5<sup>b</sup>.</li>
  <li>Sens de la fraction : partage, quotient, opérateur, rapport, repère.</li>
  <li>+ et − : même dénominateur · × : num × num, dén × dén · ÷ : × par l'inverse.</li>
  <li>Soustraire = ajouter l'opposé · règle des signes.</li>
  <li>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup> · a<sup>−n</sup> = ${F("1", "a<sup>n</sup>")} · notation scientifique 1 ≤ a &lt; 10.</li>
  <li>0,3636… = ${F("36", "99")} = ${F("4", "11")} (multiplier par 100 et soustraire).</li>
</ul>`,
  },
  {
    n: 6,
    slug: "aires-perimetres",
    titre: "Aires et périmètres de figures planes",
    sections: [
      {
        h: "Définitions et unités",
        html: `
<div class="def"><b>Périmètre</b> : longueur du contour d'une figure (unité de longueur). <b>Aire</b> : mesure de la surface (unité d'aire).</div>
<ul>
  <li>Longueurs : km, hm, dam, <b>m</b>, dm, cm, mm — × 10 d'une unité à la suivante.</li>
  <li>Aires : km², hm², dam², <b>m²</b>, dm², cm², mm² — <b>× 100</b> d'une unité à la suivante (2 colonnes par unité dans le tableau). 1 m² = 100 dm² = 10 000 cm².</li>
  <li>Unités agraires : 1 a = 100 m² (= 1 dam²) ; 1 ha = 10 000 m² (= 1 hm²).</li>
</ul>`,
      },
      {
        h: "Formulaire",
        html: `
<table>
  <tr><th>Figure</th><th>Périmètre</th><th>Aire</th></tr>
  <tr><td>Carré de côté c</td><td>4c</td><td>c²</td></tr>
  <tr><td>Rectangle L × ℓ</td><td>2(L + ℓ)</td><td>L × ℓ</td></tr>
  <tr><td>Triangle (base b, hauteur h)</td><td>somme des côtés</td><td>${F("b × h", "2")}</td></tr>
  <tr><td>Parallélogramme</td><td>somme des côtés</td><td>b × h</td></tr>
  <tr><td>Losange (diagonales D, d)</td><td>4c</td><td>${F("D × d", "2")}</td></tr>
  <tr><td>Trapèze (bases B, b)</td><td>somme des côtés</td><td>${F("(B + b) × h", "2")}</td></tr>
  <tr><td>Disque de rayon r</td><td>2πr = πd</td><td>πr²</td></tr>
</table>
<p>La <b>hauteur</b> est perpendiculaire à la base (relative à cette base) : ce n'est pas, en général, un côté de la figure.</p>`,
      },
      {
        h: "Propriétés",
        html: `
<div class="prop"><b>Aire et périmètre sont indépendants.</b> Rectangles 1 × 9 et 3 × 3 : même aire (9), périmètres 20 et 12. Rectangles 2 × 6 et 4 × 4 : même périmètre (16), aires 12 et 16.</div>
<div class="prop"><b>Agrandissement / réduction de rapport k</b> : les longueurs sont multipliées par k, les aires par <b>k²</b> (et les volumes par k³). Doubler les côtés d'un carré multiplie son aire par 4.</div>
<div class="prop"><b>Figure composée</b> : on découpe (aires qui s'ajoutent) ou on retranche (aire du grand moins aire du trou).</div>`,
      },
      {
        h: "Exemples",
        html: `
<div class="ex"><b>Exemple 1.</b> Figure : rectangle 8 m × 4 m surmonté d'un demi-disque de diamètre 4 m (posé sur un petit côté).<br>
Aire = 8 × 4 + ${F("π × 2²", "2")} = 32 + 2π ≈ 38,28 m².<br>
Périmètre = 8 + 4 + 8 + ${F("2π × 2", "2")} = 20 + 2π ≈ 26,28 m (le côté de 4 m sous le demi-disque n'est pas sur le contour).</div>
<div class="ex"><b>Exemple 2.</b> 3,5 ha = 35 000 m² ; 2 500 cm² = 0,25 m².</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Convertir les aires de 10 en 10 : 1 m² = 100 dm², pas 10.</div>
<div class="piege">Utiliser le diamètre au lieu du rayon dans πr² ; prendre un côté oblique pour la hauteur.</div>
<div class="piege">Compter dans le périmètre d'une figure composée un segment intérieur.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Aires : × 100 par unité (1 m² = 100 dm²) · 1 a = 100 m² · 1 ha = 10 000 m².</li>
  <li>Rectangle L × ℓ · triangle ${F("b × h", "2")} · parallélogramme b × h · losange ${F("D × d", "2")} · trapèze ${F("(B + b) h", "2")}.</li>
  <li>Cercle : P = 2πr = πd · disque : A = πr².</li>
  <li>Aire et périmètre indépendants (contre-exemples 1 × 9 / 3 × 3).</li>
  <li>Rapport k : longueurs × k, aires × k², volumes × k³.</li>
</ul>`,
  },
  {
    n: 7,
    slug: "proportionnalite",
    titre: "La proportionnalité",
    sections: [
      {
        h: "Définition et reconnaissance",
        html: `
<div class="def"><b>Proportionnalité.</b> Deux grandeurs sont proportionnelles si l'on obtient les valeurs de l'une en multipliant celles de l'autre par un même nombre non nul, le <b>coefficient de proportionnalité</b>.</div>
<ul>
  <li>Tableau : tous les quotients ${F("y", "x")} sont égaux.</li>
  <li>Graphique : les points sont <b>alignés avec l'origine</b> du repère (fonction linéaire x ↦ ax).</li>
  <li>Situations <b>non proportionnelles</b> : prix avec frais fixes (affine), taille selon l'âge, aire d'un carré selon son côté.</li>
</ul>`,
      },
      {
        h: "Les procédures (à nommer à l'écrit)",
        html: `
<p>Exemple : 3 kg de pommes coûtent 7,50 €. Prix de 5 kg ? de 8 kg ?</p>
<ul>
  <li><b>Coefficient de proportionnalité</b> : 7,50 ÷ 3 = 2,50 €/kg ; 5 × 2,50 = 12,50 €.</li>
  <li><b>Passage à l'unité</b> (règle de trois) : 1 kg coûte 7,50 ÷ 3 = 2,50 €, donc 5 kg coûtent 12,50 €.</li>
  <li><b>Linéarité additive</b> : 8 kg = 3 kg + 5 kg, donc 7,50 + 12,50 = 20 €.</li>
  <li><b>Linéarité multiplicative</b> : 6 kg = 2 × 3 kg, donc 2 × 7,50 = 15 €.</li>
  <li><b>Produit en croix</b> (égalité des produits en croix) : ${F("3", "7,50")} = ${F("5", "x")} ⇔ 3x = 5 × 7,50 ⇔ x = 12,50.</li>
</ul>
<div class="prop">Quatrième proportionnelle : si ${F("a", "b")} = ${F("c", "d")}, alors a × d = b × c, d'où d = ${F("b × c", "a")}.</div>`,
      },
      {
        h: "Grandeurs quotients et applications",
        html: `
<ul>
  <li><b>Vitesse</b> : v = ${F("d", "t")} ; d = v × t ; t = ${F("d", "v")}. 1 m/s = 3,6 km/h : 90 km/h = 90 000 m ÷ 3 600 s = 25 m/s.</li>
  <li><b>Durées</b> en base 60 : 1 h 30 min = 1,5 h ; 1,2 h = 1 h 12 min ; 20 min = ${F("1", "3")} h.</li>
  <li><b>Échelle</b> = ${F("distance sur le plan", "distance réelle")} (même unité). Au 1/25 000, 4 cm représentent 100 000 cm = 1 km.</li>
  <li>Masse volumique, débit, prix unitaire, consommation, pourcentages (RAN 11).</li>
</ul>
<div class="ex"><b>Exemple.</b> Un cycliste parcourt 45 km en 1 h 40 min. 1 h 40 min = ${F("5", "3")} h, v = 45 ÷ ${F("5", "3")} = 45 × ${F("3", "5")} = 27 km/h.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">1 h 20 min ≠ 1,2 h (c'est 1,333… h).</div>
<div class="piege">Une droite qui ne passe pas par l'origine ne traduit pas une proportionnalité.</div>
<div class="piege">Appliquer un produit en croix sans avoir vérifié que la situation est proportionnelle (ex. : prix avec abonnement).</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Proportionnel ⇔ y = k × x ⇔ graphique : droite passant par l'origine.</li>
  <li>Procédures : coefficient, passage à l'unité, linéarité additive et multiplicative, produit en croix.</li>
  <li>v = ${F("d", "t")} · 1 m/s = 3,6 km/h · 1,2 h = 1 h 12 min.</li>
  <li>Échelle = ${F("plan", "réel")} (même unité) · 1/25 000 : 1 cm ↔ 250 m.</li>
  <li>Frais fixes → affine, pas proportionnel.</li>
</ul>`,
  },
  {
    n: 8,
    slug: "calcul-litteral",
    titre: "Le calcul littéral",
    sections: [
      {
        h: "Expressions littérales",
        html: `
<ul>
  <li>Une lettre désigne un nombre (variable ou inconnue). Conventions : 3 × a = 3a ; a × a = a² ; 2 × (x + 1) = 2(x + 1).</li>
  <li><b>Calculer la valeur</b> d'une expression pour une valeur donnée : 3x² − 5 pour x = −2 : 3 × (−2)² − 5 = 3 × 4 − 5 = 7.</li>
  <li><b>Réduire</b> : regrouper les termes semblables : 4x + 3 − 7x + 5 = −3x + 8.</li>
  <li>Supprimer des parenthèses précédées de « − » change tous les signes à l'intérieur : 5 − (2x − 3) = 5 − 2x + 3 = 8 − 2x.</li>
</ul>`,
      },
      {
        h: "Développer et factoriser",
        html: `
<div class="prop"><b>Distributivité simple</b> : k(a + b) = ka + kb. <b>Double distributivité</b> : (a + b)(c + d) = ac + ad + bc + bd.</div>
<div class="prop"><b>Identités remarquables</b> : (a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².</div>
<p><b>Développer</b> transforme un produit en somme ; <b>factoriser</b> transforme une somme en produit (facteur commun, ou identité remarquable reconnue).</p>
<div class="ex">(x + 2)(3x − 1) = 3x² − x + 6x − 2 = 3x² + 5x − 2.<br>
(2x − 3)² = 4x² − 12x + 9.<br>
6x² + 9x = 3x(2x + 3) ; 9x² − 25 = (3x − 5)(3x + 5) ; (x + 1)(2x − 3) + (x + 1)(x + 4) = (x + 1)(3x + 1).</div>`,
      },
      {
        h: "Prouver avec le calcul littéral",
        html: `
<div class="prop">Pour prouver qu'une propriété est <b>toujours vraie</b>, des exemples ne suffisent pas : on utilise des lettres. Pour prouver qu'elle est <b>fausse</b>, <b>un seul contre-exemple</b> suffit.</div>
<div class="ex"><b>Exemple 1.</b> « La somme de trois entiers consécutifs est un multiple de 3. » n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1) : c'est un multiple de 3.</div>
<div class="ex"><b>Exemple 2.</b> Programme de calcul : choisir x, ajouter 3, multiplier par 2, soustraire 6. (x + 3) × 2 − 6 = 2x : le résultat est toujours le double du nombre de départ.</div>
<div class="ex"><b>Exemple 3.</b> « Pour tout x, (x + 1)² = x² + 1 » : faux, pour x = 1, (1 + 1)² = 4 et 1² + 1 = 2.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">(a + b)² ≠ a² + b² (il manque 2ab).</div>
<div class="piege">3x + 2 ≠ 5x ; 2x² ≠ (2x)² = 4x² ; x × x = x², pas 2x.</div>
<div class="piege">Oublier de changer le signe du dernier terme : −(x − 3) = −x + 3.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Réduire = regrouper les termes semblables · −(a − b) = −a + b.</li>
  <li>k(a + b) = ka + kb · (a + b)(c + d) = ac + ad + bc + bd.</li>
  <li>(a + b)² = a² + 2ab + b² · (a − b)² = a² − 2ab + b² · (a + b)(a − b) = a² − b².</li>
  <li>Factoriser : facteur commun ou identité remarquable (9x² − 25 = (3x − 5)(3x + 5)).</li>
  <li>Prouver : lettres (n, n + 1, n + 2) · réfuter : un contre-exemple.</li>
</ul>`,
  },
  {
    n: 9,
    slug: "geometrie-espace",
    titre: "La géométrie dans l'espace",
    sections: [
      {
        h: "Les solides",
        html: `
<ul>
  <li><b>Polyèdres</b> (faces planes polygonales) : cube, pavé droit (parallélépipède rectangle), prisme droit (2 bases polygonales superposables, faces latérales rectangulaires), pyramide (1 base, faces latérales triangulaires réunies au sommet).</li>
  <li><b>Solides de révolution</b> : cylindre, cône, boule (la sphère est sa surface).</li>
  <li>Vocabulaire : <b>faces</b>, <b>arêtes</b>, <b>sommets</b>.</li>
</ul>
<table>
  <tr><th>Solide</th><th>Faces</th><th>Arêtes</th><th>Sommets</th></tr>
  <tr><td>Cube / pavé droit</td><td>6</td><td>12</td><td>8</td></tr>
  <tr><td>Prisme à base triangulaire</td><td>5</td><td>9</td><td>6</td></tr>
  <tr><td>Pyramide à base carrée</td><td>5</td><td>8</td><td>5</td></tr>
  <tr><td>Prisme à base n-gone</td><td>n + 2</td><td>3n</td><td>2n</td></tr>
  <tr><td>Pyramide à base n-gone</td><td>n + 1</td><td>2n</td><td>n + 1</td></tr>
</table>
<div class="prop"><b>Relation d'Euler</b> (polyèdres convexes) : S − A + F = 2. Cube : 8 − 12 + 6 = 2.</div>`,
      },
      {
        h: "Représentations",
        html: `
<ul>
  <li><b>Perspective cavalière</b> : faces avant en vraie grandeur, fuyantes tracées selon un angle (souvent 30° ou 45°) et réduites (souvent ×0,5), parallélisme conservé, arêtes cachées en <b>pointillés</b>.</li>
  <li><b>Patron</b> : figure plane qui, pliée, reconstitue le solide sans recouvrement. Le cube a 11 patrons. Patron du cylindre : 2 disques + 1 rectangle de longueur 2πr.</li>
  <li><b>Vues</b> (de face, de dessus, de côté) et <b>repérage</b> : dans un pavé (abscisse, ordonnée, altitude) ; sur la sphère terrestre (latitude, longitude).</li>
</ul>`,
      },
      {
        h: "Volumes et unités",
        html: `
<table>
  <tr><th>Solide</th><th>Volume</th></tr>
  <tr><td>Cube d'arête c</td><td>c³</td></tr>
  <tr><td>Pavé droit</td><td>L × ℓ × h</td></tr>
  <tr><td>Prisme droit, cylindre</td><td>aire de la base × hauteur (cylindre : πr²h)</td></tr>
  <tr><td>Pyramide, cône</td><td>${F("aire de la base × hauteur", "3")} (cône : ${F("πr²h", "3")})</td></tr>
  <tr><td>Boule de rayon r</td><td>${F("4", "3")}πr³ (aire de la sphère : 4πr²)</td></tr>
</table>
<ul>
  <li>Volumes : <b>× 1 000</b> d'une unité à la suivante (3 colonnes par unité). 1 m³ = 1 000 dm³.</li>
  <li>Contenances : <b>1 dm³ = 1 L</b> ; 1 cm³ = 1 mL ; 1 m³ = 1 000 L.</li>
</ul>
<div class="ex"><b>Exemple.</b> Cylindre de rayon 3 cm et de hauteur 10 cm : V = π × 3² × 10 = 90π ≈ 282,7 cm³ ≈ 0,28 L.</div>
<div class="ex"><b>Exemple.</b> Pyramide à base carrée de côté 6 m et de hauteur 4 m : V = ${F("6² × 4", "3")} = 48 m³.</div>`,
      },
      {
        h: "Sections planes",
        html: `
<ul>
  <li>Pavé coupé par un plan parallèle à une face : rectangle de mêmes dimensions que cette face ; parallèle à une arête : rectangle.</li>
  <li>Cylindre : plan parallèle aux bases → disque de même rayon ; plan parallèle à l'axe → rectangle.</li>
  <li>Sphère / boule : cercle / disque (de rayon maximal si le plan passe par le centre).</li>
  <li>Pyramide ou cône coupé parallèlement à la base : réduction de la base.</li>
</ul>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">1 m³ = 1 000 L (pas 100) ; 1 L = 1 dm³ = 1 000 cm³.</div>
<div class="piege">Oublier le ${F("1", "3")} pour la pyramide ou le cône ; confondre hauteur de la pyramide et arête latérale.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Polyèdres : S − A + F = 2 (cube 8 − 12 + 6) · cube : 11 patrons.</li>
  <li>Prisme, cylindre : B × h · pyramide, cône : ${F("B × h", "3")} · boule : ${F("4", "3")}πr³ · sphère : 4πr².</li>
  <li>Volumes : × 1 000 par unité · 1 dm³ = 1 L · 1 cm³ = 1 mL · 1 m³ = 1 000 L.</li>
  <li>Perspective cavalière : face avant en vraie grandeur, fuyantes réduites, cachées en pointillés.</li>
  <li>Sections : pavé → rectangle · cylindre → disque ou rectangle · sphère → cercle.</li>
</ul>`,
  },
  {
    n: 10,
    slug: "equations-fonctions",
    titre: "Équations et fonctions",
    sections: [
      {
        h: "Équations",
        html: `
<div class="def">Une <b>équation</b> est une égalité contenant une inconnue. Une <b>solution</b> est une valeur de l'inconnue qui rend l'égalité vraie ; <b>résoudre</b>, c'est trouver toutes les solutions.</div>
<div class="prop">On obtient une équation équivalente en <b>ajoutant ou soustrayant</b> un même nombre aux deux membres, ou en les <b>multipliant ou divisant</b> par un même nombre <b>non nul</b>.</div>
<div class="ex">5x − 7 = 2x + 8 ⇔ 3x = 15 ⇔ x = 5. Vérification : 5 × 5 − 7 = 18 et 2 × 5 + 8 = 18.</div>
<div class="prop"><b>Équation produit nul</b> : A × B = 0 ⇔ A = 0 ou B = 0. (x − 3)(2x + 1) = 0 ⇔ x = 3 ou x = −${F("1", "2")}.</div>
<div class="prop"><b>x² = a</b> : si a &gt; 0, deux solutions √a et −√a ; si a = 0, une solution 0 ; si a &lt; 0, aucune.</div>
<div class="prop"><b>Inéquations</b> : mêmes règles, mais multiplier ou diviser par un nombre <b>négatif change le sens</b> : −2x &gt; 6 ⇔ x &lt; −3.</div>`,
      },
      {
        h: "Mettre un problème en équation",
        html: `
<ol>
  <li>Choisir l'inconnue (et dire ce qu'elle représente).</li>
  <li>Traduire l'énoncé par une équation.</li>
  <li>Résoudre.</li>
  <li>Vérifier et conclure par une phrase.</li>
</ol>
<div class="ex"><b>Exemple.</b> Un stylo coûte 1,20 € de plus qu'un cahier ; 3 cahiers et 2 stylos coûtent 9,40 €. Soit x le prix d'un cahier : 3x + 2(x + 1,20) = 9,40 ⇔ 5x + 2,40 = 9,40 ⇔ x = 1,40. Un cahier coûte 1,40 € et un stylo 2,60 € (3 × 1,40 + 2 × 2,60 = 9,40).</div>`,
      },
      {
        h: "Fonctions",
        html: `
<div class="def">Une <b>fonction</b> f associe à chaque nombre x un unique nombre f(x), son <b>image</b>. Si f(x) = y, x est <b>un antécédent</b> de y (un nombre peut avoir 0, 1 ou plusieurs antécédents).</div>
<ul>
  <li>Représentations : formule, tableau de valeurs, <b>courbe</b> (ensemble des points de coordonnées (x ; f(x))).</li>
  <li>Lecture graphique : image → on part de l'axe des abscisses ; antécédent(s) → on part de l'axe des ordonnées.</li>
</ul>
<div class="prop"><b>Fonction linéaire</b> f(x) = ax : droite passant par l'origine, modélise la proportionnalité (a = coefficient).</div>
<div class="prop"><b>Fonction affine</b> f(x) = ax + b : droite ; b est l'<b>ordonnée à l'origine</b> (f(0) = b), a le <b>coefficient directeur</b> : a = ${F("f(x₂) − f(x₁)", "x₂ − x₁")}.</div>
<div class="ex"><b>Exemple.</b> f affine avec f(1) = 5 et f(3) = 11 : a = ${F("11 − 5", "3 − 1")} = 3, b = 5 − 3 × 1 = 2, donc f(x) = 3x + 2. Antécédent de 20 : 3x + 2 = 20 ⇔ x = 6.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Confondre image et antécédent ; écrire « l'antécédent » alors qu'il peut y en avoir plusieurs.</div>
<div class="piege">Oublier de changer le sens d'une inéquation en divisant par un négatif ; oublier −√a dans x² = a.</div>
<div class="piege">Ne pas vérifier la solution ni conclure par une phrase.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Résoudre : + − × ÷ (non nul) les deux membres · vérifier · phrase de conclusion.</li>
  <li>A × B = 0 ⇔ A = 0 ou B = 0 · x² = a : ±√a si a &gt; 0, aucune si a &lt; 0.</li>
  <li>Inéquation : × ou ÷ par un négatif → on change le sens.</li>
  <li>Image : unique · antécédents : 0, 1 ou plusieurs.</li>
  <li>Linéaire ax : droite par l'origine (proportionnalité) · affine ax + b : b = f(0), a = ${F("Δy", "Δx")}.</li>
</ul>`,
  },
  {
    n: 11,
    slug: "pourcentages",
    titre: "Les pourcentages",
    sections: [
      {
        h: "Les trois calculs de base",
        html: `
<div class="def">t % = ${F("t", "100")}. Un pourcentage exprime une proportion (une situation de proportionnalité avec le total ramené à 100).</div>
<ul>
  <li><b>Appliquer</b> un pourcentage : t % de Q = Q × ${F("t", "100")}. 15 % de 240 = 240 × 0,15 = 36.</li>
  <li><b>Calculer</b> un pourcentage : ${F("partie", "total")} × 100. 18 filles sur 24 élèves : ${F("18", "24")} = 0,75 = 75 %.</li>
  <li><b>Retrouver le total</b> : 30 % d'un nombre valent 12 → total = 12 ÷ 0,30 = 40.</li>
</ul>`,
      },
      {
        h: "Évolutions",
        html: `
<div class="prop"><b>Augmenter de t %</b> = multiplier par <b>(1 + ${F("t", "100")})</b> ; <b>diminuer de t %</b> = multiplier par <b>(1 − ${F("t", "100")})</b>. Ce nombre est le <b>coefficient multiplicateur</b> (CM). +20 % → × 1,2 ; −15 % → × 0,85.</div>
<div class="prop"><b>Taux d'évolution</b> = ${F("valeur d'arrivée − valeur de départ", "valeur de départ")} × 100. De 40 à 50 : +25 % ; de 50 à 40 : −20 %.</div>
<div class="prop"><b>Évolutions successives</b> : on <b>multiplie</b> les CM (on n'additionne pas les taux). +10 % puis +10 % : 1,1 × 1,1 = 1,21 → +21 %. +20 % puis −20 % : 1,2 × 0,8 = 0,96 → −4 %.</div>
<div class="prop"><b>Évolution réciproque / valeur initiale</b> : on divise par le CM. Prix TTC 96 € avec TVA 20 % : HT = 96 ÷ 1,2 = 80 € (et non 96 − 20 % de 96).</div>`,
      },
      {
        h: "Exemples",
        html: `
<div class="ex"><b>Soldes.</b> Un article à 75 € est soldé à −30 % : 75 × 0,7 = 52,50 €. Il faut ensuite l'augmenter de ${F("75 − 52,5", "52,5")} ≈ 42,9 % pour revenir au prix initial.</div>
<div class="ex"><b>Pourcentage de pourcentage.</b> 40 % des élèves sont demi-pensionnaires, et 25 % d'entre eux mangent végétarien : 0,40 × 0,25 = 0,10, soit 10 % des élèves.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Additionner des pourcentages successifs (+10 % puis +10 % ≠ +20 %).</div>
<div class="piege">Croire qu'après −20 % il suffit de +20 % pour revenir au départ (il faut +25 %).</div>
<div class="piege">Points de pourcentage ≠ pourcentage : passer de 10 % à 12 % = +2 points = +20 %.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>t % de Q = Q × ${F("t", "100")} · pourcentage = ${F("partie", "total")} × 100.</li>
  <li>+t % → × (1 + ${F("t", "100")}) · −t % → × (1 − ${F("t", "100")}).</li>
  <li>Taux = ${F("VA − VD", "VD")} × 100.</li>
  <li>Successives : on multiplie les CM (+20 % puis −20 % = −4 %).</li>
  <li>Valeur initiale : ÷ CM (HT = TTC ÷ 1,2) · après −20 %, il faut +25 %.</li>
</ul>`,
  },
  {
    n: 12,
    slug: "tableur-algorithmique",
    titre: "Tableur et algorithmique",
    sections: [
      {
        h: "Le tableur",
        html: `
<ul>
  <li>Une <b>cellule</b> est repérée par sa colonne (lettre) et sa ligne (numéro) : B3. Une <b>plage</b> : A1:A10.</li>
  <li>Une <b>formule</b> commence par « = » : =B2*C2 ; =SOMME(A1:A10) ; =MOYENNE(B2:B30) ; =MAX(…), =MIN(…), =NB(…), =SI(B2&gt;=10;"admis";"ajourné").</li>
  <li><b>Référence relative</b> (A1) : elle se décale quand on recopie la formule. <b>Référence absolue</b> ($A$1) : elle reste figée. <b>Mixte</b> ($A1 ou A$1) : seule la colonne ou seule la ligne est figée.</li>
</ul>
<div class="ex"><b>Exemple.</b> Prix HT en colonne B, taux de TVA en E1. En C2 : =B2*(1+$E$1), puis recopie vers le bas : C3 contient =B3*(1+$E$1). Sans les $, C3 contiendrait =B3*(1+E2), une cellule vide : erreur.</div>`,
      },
      {
        h: "Algorithmique et Scratch",
        html: `
<div class="def">Un <b>algorithme</b> est une suite finie d'instructions qui permet de résoudre un problème. Un <b>programme</b> le traduit dans un langage (Scratch au cycle 3 et 4).</div>
<ul>
  <li><b>Variable</b> : case mémoire nommée ; <b>affectation</b> : « mettre score à 0 », « ajouter 1 à score ».</li>
  <li><b>Séquence</b> : instructions exécutées dans l'ordre.</li>
  <li><b>Boucles</b> : « répéter n fois » (nombre connu), « répéter jusqu'à… » / « tant que » (condition).</li>
  <li><b>Instruction conditionnelle</b> : « si… alors… sinon… ».</li>
  <li>Scratch : événements (« quand le drapeau vert est cliqué »), mouvement (« avancer de », « tourner de … degrés », « aller à x : y : »), stylo, capteurs (« demander… et attendre », « réponse »), opérateurs.</li>
</ul>
<div class="prop"><b>Tracer un polygone régulier à n côtés</b> : répéter n fois [avancer de L ; tourner de ${F("360", "n")} degrés]. Le lutin tourne de l'angle <b>extérieur</b> : 120° pour un triangle équilatéral, 90° pour un carré, 60° pour un hexagone.</div>`,
      },
      {
        h: "Exécuter un programme à la main",
        html: `
<div class="ex"><b>Programme de calcul.</b> Choisir un nombre, le multiplier par 3, ajouter 5, multiplier par 2, soustraire 10. Avec 4 : 12 → 17 → 34 → 24. Avec x : (3x + 5) × 2 − 10 = 6x : le résultat est toujours 6 fois le nombre choisi (lien RAN 8).</div>
<div class="ex"><b>Suivi des variables.</b> mettre n à 1 ; mettre s à 0 ; répéter jusqu'à n &gt; 4 [ajouter n à s ; ajouter 1 à n] ; dire s.<br>
Tableau : (n ; s) = (1 ; 0) → (2 ; 1) → (3 ; 3) → (4 ; 6) → (5 ; 10). Le lutin dit 10 = 1 + 2 + 3 + 4.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Faire tourner le lutin de 60° pour un triangle équilatéral (il faut 120°).</div>
<div class="piege">Oublier les $ pour une cellule qui doit rester fixe lors de la recopie.</div>
<div class="piege">Boucle « répéter jusqu'à » dont la condition n'est jamais atteinte (boucle infinie).</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Formule : « = » · relative A1 (se décale) · absolue $A$1 (figée) · =SOMME(A1:A10), =MOYENNE, =SI.</li>
  <li>Algorithme : séquence, boucle (répéter n fois / jusqu'à), condition (si… alors… sinon), variables.</li>
  <li>Polygone régulier : répéter n fois [avancer ; tourner de ${F("360", "n")}°] · triangle : 120°.</li>
  <li>Programme de calcul : le traduire en expression littérale pour prouver.</li>
  <li>Tableau de suivi des variables pour exécuter à la main.</li>
</ul>`,
  },
];

const FORMULAIRE = `
<table>
  <tr><th colspan="2">Aires</th><th colspan="2">Volumes</th></tr>
  <tr><td>Rectangle</td><td>L × ℓ</td><td>Pavé</td><td>L × ℓ × h</td></tr>
  <tr><td>Triangle</td><td>${F("b × h", "2")}</td><td>Prisme, cylindre</td><td>B × h</td></tr>
  <tr><td>Parallélogramme</td><td>b × h</td><td>Pyramide, cône</td><td>${F("B × h", "3")}</td></tr>
  <tr><td>Losange</td><td>${F("D × d", "2")}</td><td>Boule</td><td>${F("4", "3")}πr³</td></tr>
  <tr><td>Trapèze</td><td>${F("(B + b) × h", "2")}</td><td>Sphère (aire)</td><td>4πr²</td></tr>
  <tr><td>Disque</td><td>πr² (périmètre 2πr)</td><td>Contenance</td><td>1 dm³ = 1 L</td></tr>
</table>
<table>
  <tr><th>Conversions</th><th>Facteur par unité</th><th>Repères</th></tr>
  <tr><td>Longueurs</td><td>× 10</td><td>1 km = 1 000 m</td></tr>
  <tr><td>Aires</td><td>× 100</td><td>1 m² = 100 dm² · 1 ha = 10 000 m²</td></tr>
  <tr><td>Volumes</td><td>× 1 000</td><td>1 m³ = 1 000 dm³ = 1 000 L</td></tr>
  <tr><td>Durées</td><td>base 60</td><td>1,2 h = 1 h 12 min · 1 m/s = 3,6 km/h</td></tr>
</table>`;

// Fiche des définitions (demande de Clément du 27/10/2026) : chaque définition est suivie d'un exemple.
// [notion, définition, exemple] par RAN, dans le vocabulaire attendu au CRPE.
const DEFINITIONS = [
  { n: 1, titre: "Géométrie plane", items: [
    ["Droite, segment, demi-droite", "(AB) : droite illimitée passant par A et B ; [AB] : portion de droite limitée par A et B ; [AB) : demi-droite d'origine A passant par B.", "AB = 5 cm est la longueur du segment [AB] ; on n'écrit jamais (AB) = 5 cm."],
    ["Points alignés", "Points qui appartiennent à une même droite.", "Si M est le milieu de [AB], alors A, M et B sont alignés."],
    ["Droites parallèles / perpendiculaires", "Parallèles : aucun point commun ou confondues. Perpendiculaires : sécantes en formant un angle droit.", "Les bords opposés d'une feuille sont parallèles ; deux bords consécutifs sont perpendiculaires."],
    ["Milieu", "Point I de [AB] tel que IA = IB.", "Si AB = 8 cm, le milieu I vérifie IA = IB = 4 cm."],
    ["Médiatrice", "Droite perpendiculaire à un segment en son milieu ; c'est l'ensemble des points équidistants des extrémités.", "Si MA = MB = 6 cm, alors M est sur la médiatrice de [AB]."],
    ["Cercle", "Ensemble des points situés à une même distance r (le rayon) d'un point O (le centre).", "Cercle de centre O et de rayon 3 cm : tout point M du cercle vérifie OM = 3 cm ; son diamètre mesure 6 cm."],
    ["Distance d'un point à une droite", "Longueur AH, où H est le pied de la perpendiculaire à la droite passant par A ; c'est la plus courte distance.", "A est à 4 cm de (d) si la perpendiculaire à (d) issue de A la coupe en H avec AH = 4 cm."],
    ["Angles complémentaires / supplémentaires", "Complémentaires : somme 90° ; supplémentaires : somme 180°.", "35° et 55° sont complémentaires ; 35° et 145° sont supplémentaires."],
    ["Hauteur d'un triangle", "Droite passant par un sommet et perpendiculaire au côté opposé.", "Dans ABC, la hauteur issue de A coupe (BC) en H avec (AH) ⊥ (BC)."],
    ["Médiane d'un triangle", "Droite (ou segment) joignant un sommet au milieu du côté opposé.", "Si I est le milieu de [BC], (AI) est la médiane issue de A."],
  ] },
  { n: 2, titre: "Symétries et polygones", items: [
    ["Symétrique par rapport à une droite", "M' est le symétrique de M par rapport à (d) si (d) est la médiatrice de [MM'].", "Le symétrique d'un point de l'axe est lui-même ; une figure et son symétrique se superposent par pliage."],
    ["Symétrique par rapport à un point", "M' est le symétrique de M par rapport à O si O est le milieu de [MM'].", "Si O(0 ; 0) et M(3 ; 2), alors M'(−3 ; −2)."],
    ["Axe / centre de symétrie d'une figure", "Axe : droite telle que la figure est sa propre image par la symétrie axiale. Centre : point tel que la figure est sa propre image par la symétrie centrale.", "Le rectangle a 2 axes et un centre de symétrie ; la lettre A a un axe, la lettre N un centre."],
    ["Polygone régulier", "Polygone dont tous les côtés ont la même longueur et tous les angles la même mesure.", "Le carré et le triangle équilatéral ; un losange non carré n'est pas régulier (angles différents)."],
    ["Triangle isocèle", "Triangle qui a deux côtés de même longueur.", "ABC avec AB = AC = 5 cm, isocèle en A : ses angles B̂ et Ĉ sont égaux."],
    ["Parallélogramme", "Quadrilatère dont les côtés opposés sont parallèles deux à deux.", "ABCD avec (AB) // (CD) et (AD) // (BC) ; ses diagonales se coupent en leur milieu."],
    ["Rectangle", "Quadrilatère qui a quatre angles droits.", "Une feuille A4 (21 × 29,7 cm) ; ses diagonales ont la même longueur."],
    ["Losange", "Quadrilatère qui a quatre côtés de même longueur.", "Un losange de côté 4 cm ; ses diagonales sont perpendiculaires."],
    ["Carré", "Quadrilatère qui est à la fois un rectangle et un losange.", "Un carré de côté 3 cm : 4 angles droits, 4 côtés de 3 cm, 4 axes de symétrie."],
    ["Trapèze", "Quadrilatère qui a deux côtés parallèles (les bases).", "ABCD avec (AB) // (CD), AB = 8 cm et CD = 5 cm."],
  ] },
  { n: 3, titre: "Les quatre opérations", items: [
    ["Somme, différence, produit, quotient", "Résultats de l'addition, de la soustraction, de la multiplication et de la division ; les nombres additionnés sont les termes, les nombres multipliés les facteurs.", "Dans 6 × 7 = 42, 6 et 7 sont les facteurs, 42 est le produit."],
    ["Chiffre / nombre de", "Le chiffre d'un rang est le symbole écrit à ce rang ; le nombre de (dizaines, centaines…) compte toutes les unités de ce rang contenues dans le nombre.", "3 457 : chiffre des centaines 4 ; nombre de centaines 34."],
    ["Division euclidienne", "Diviser a par b (b ≠ 0), c'est trouver l'unique couple d'entiers (q ; r) tel que a = b × q + r avec 0 ≤ r < b.", "47 = 6 × 7 + 5 : quotient 7, reste 5 (5 < 6)."],
    ["Dividende, diviseur, quotient, reste", "Dans a = b × q + r : a est le dividende, b le diviseur, q le quotient, r le reste.", "Dans 47 = 6 × 7 + 5 : dividende 47, diviseur 6, quotient 7, reste 5."],
    ["Commutativité", "On peut échanger l'ordre des nombres sans changer le résultat (vrai pour + et ×).", "25 × 37 × 4 = 25 × 4 × 37 = 3 700 ; mais 12 ÷ 4 ≠ 4 ÷ 12."],
    ["Associativité", "On peut regrouper les nombres comme on veut sans changer le résultat (vrai pour + et ×).", "(17 + 25) + 75 = 17 + (25 + 75) = 117."],
    ["Distributivité", "k × (a + b) = k × a + k × b (de la multiplication sur l'addition, ou sur la soustraction).", "17 × 99 = 17 × (100 − 1) = 1 700 − 17 = 1 683."],
    ["Conservation des écarts", "a − b = (a + c) − (b + c) : la différence ne change pas si l'on ajoute le même nombre aux deux termes.", "1 000 − 398 = 1 002 − 400 = 602."],
    ["Conservation du quotient", "a ÷ b = (a × c) ÷ (b × c), c ≠ 0.", "3,6 ÷ 0,4 = 36 ÷ 4 = 9."],
    ["Ordre de grandeur", "Valeur approchée simple d'un résultat, obtenue en arrondissant les nombres, qui sert à contrôler un calcul.", "498 × 21 ≈ 500 × 20 = 10 000."],
  ] },
  { n: 4, titre: "Arithmétique", items: [
    ["Multiple / diviseur", "a est un multiple de b (et b un diviseur de a) s'il existe un entier k tel que a = k × b ; le reste de la division de a par b est alors nul.", "36 = 4 × 9 : 36 est un multiple de 4 et 4 est un diviseur de 36."],
    ["Nombre pair / impair", "Pair : s'écrit 2k ; impair : s'écrit 2k + 1 (k entier).", "14 = 2 × 7 est pair ; 15 = 2 × 7 + 1 est impair."],
    ["Nombre premier", "Entier naturel qui a exactement deux diviseurs distincts : 1 et lui-même.", "13 (diviseurs 1 et 13) ; 1 n'est pas premier, 21 = 3 × 7 non plus."],
    ["Décomposition en facteurs premiers", "Écriture d'un entier ≥ 2 comme produit de nombres premiers ; elle est unique (à l'ordre près).", "360 = 2³ × 3² × 5."],
    ["PGCD", "Plus grand diviseur commun à deux entiers.", "PGCD(252 ; 360) = 36 ; il sert à rendre 252/360 irréductible : 7/10."],
    ["PPCM", "Plus petit multiple commun non nul à deux entiers.", "PPCM(12 ; 18) = 36 : deux phares qui clignotent toutes les 12 s et 18 s se retrouvent toutes les 36 s."],
    ["Nombres premiers entre eux", "Deux entiers dont le PGCD est 1.", "8 et 15 (8 = 2³, 15 = 3 × 5), alors qu'aucun des deux n'est premier."],
    ["Critère de divisibilité", "Règle qui permet de savoir si un nombre est divisible par un autre sans poser la division.", "4 752 : 4 + 7 + 5 + 2 = 18, multiple de 9, donc 4 752 est divisible par 9."],
    ["Fraction irréductible", "Fraction dont le numérateur et le dénominateur sont premiers entre eux.", "17/20 est irréductible ; 391/460 ne l'est pas (on simplifie par 23)."],
  ] },
  { n: 5, titre: "Rationnels", items: [
    ["Fraction", "Écriture a/b (b ≠ 0) ; a est le numérateur, b le dénominateur.", "Dans 3/4, 3 est le numérateur et 4 le dénominateur."],
    ["Fraction-quotient", "a/b est le nombre qui, multiplié par b, donne a.", "7/3 est le nombre qui, multiplié par 3, donne 7 : 3 × 7/3 = 7."],
    ["Fraction décimale", "Fraction dont le dénominateur est 10, 100, 1 000…", "325/100 = 3,25."],
    ["Nombre décimal", "Nombre qui peut s'écrire a/10ⁿ (a entier) ; son écriture décimale est finie.", "3/4 = 75/100 = 0,75 est décimal ; 1/3 = 0,333… ne l'est pas."],
    ["Nombre rationnel", "Nombre qui peut s'écrire a/b avec a et b entiers, b ≠ 0.", "1/3, −2 = −2/1 et 0,75 sont rationnels ; √2 et π ne le sont pas."],
    ["Nombre irrationnel", "Nombre réel qui n'est pas rationnel.", "√2 ≈ 1,414… et π ≈ 3,1416…"],
    ["Inverse", "L'inverse d'un nombre non nul x est le nombre qui, multiplié par x, donne 1 : 1/x.", "L'inverse de 2/3 est 3/2 ; l'inverse de 0,25 est 4."],
    ["Opposé", "L'opposé de x est le nombre qui, ajouté à x, donne 0 : −x.", "L'opposé de 5 est −5 ; soustraire 5, c'est ajouter −5."],
    ["Écriture scientifique", "Écriture a × 10ⁿ avec 1 ≤ a < 10 et n entier relatif.", "45 000 = 4,5 × 10⁴ ; 0,0032 = 3,2 × 10⁻³."],
    ["Puissance", "aⁿ est le produit de n facteurs égaux à a ; a⁻ⁿ = 1/aⁿ ; a⁰ = 1.", "2³ = 2 × 2 × 2 = 8 ; 10⁻² = 1/100 = 0,01."],
  ] },
  { n: 6, titre: "Aires et périmètres", items: [
    ["Périmètre", "Longueur du contour d'une figure.", "Rectangle 8 m × 4 m : P = 2 × (8 + 4) = 24 m."],
    ["Aire", "Mesure de la surface d'une figure, dans une unité d'aire.", "Rectangle 8 m × 4 m : A = 8 × 4 = 32 m²."],
    ["Hauteur relative à une base", "Segment perpendiculaire à la base, joignant celle-ci au sommet (ou au côté) opposé.", "Triangle de base 6 cm et de hauteur 4 cm : A = 6 × 4 ÷ 2 = 12 cm²."],
    ["Disque / cercle", "Le cercle est la ligne ; le disque est la surface qu'il délimite.", "r = 2 cm : périmètre du cercle 2π × 2 ≈ 12,57 cm ; aire du disque π × 2² ≈ 12,57 cm²."],
    ["Hectare, are", "1 a = 100 m² ; 1 ha = 10 000 m².", "Un terrain de 200 m × 150 m mesure 30 000 m² = 3 ha."],
    ["Agrandissement / réduction de rapport k", "Transformation qui multiplie toutes les longueurs par k ; les aires sont multipliées par k².", "Côté d'un carré × 3 : aire × 9."],
  ] },
  { n: 7, titre: "Proportionnalité", items: [
    ["Grandeurs proportionnelles", "On obtient les valeurs de l'une en multipliant celles de l'autre par un même nombre non nul.", "Prix et masse de pommes à 2,50 €/kg : 3 kg → 7,50 € ; 5 kg → 12,50 €."],
    ["Coefficient de proportionnalité", "Nombre par lequel on multiplie les valeurs d'une grandeur pour obtenir celles de l'autre.", "Ici 2,50 (€ par kg)."],
    ["Linéarité additive / multiplicative", "f(a + b) = f(a) + f(b) ; f(k × a) = k × f(a).", "8 kg = 3 kg + 5 kg → 7,50 + 12,50 = 20 € ; 6 kg = 2 × 3 kg → 15 €."],
    ["Quatrième proportionnelle", "Valeur manquante x d'un tableau de proportionnalité a/b = c/x ; x = b × c ÷ a.", "3 kg → 7,50 € ; 5 kg → x = 7,50 × 5 ÷ 3 = 12,50 €."],
    ["Vitesse moyenne", "Quotient de la distance parcourue par la durée : v = d/t.", "45 km en 1 h 40 min = 5/3 h : v = 27 km/h."],
    ["Échelle", "Rapport entre une distance sur le plan et la distance réelle, dans la même unité.", "Au 1/25 000, 4 cm sur la carte représentent 100 000 cm = 1 km."],
  ] },
  { n: 8, titre: "Calcul littéral", items: [
    ["Expression littérale", "Expression qui contient une ou plusieurs lettres désignant des nombres.", "3x² − 5 ; pour x = −2, elle vaut 3 × 4 − 5 = 7."],
    ["Réduire", "Regrouper les termes semblables d'une somme.", "4x + 3 − 7x + 5 = −3x + 8."],
    ["Développer", "Transformer un produit en somme.", "(x + 2)(3x − 1) = 3x² + 5x − 2."],
    ["Factoriser", "Transformer une somme en produit.", "6x² + 9x = 3x(2x + 3) ; 9x² − 25 = (3x − 5)(3x + 5)."],
    ["Identités remarquables", "(a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².", "(2x − 3)² = 4x² − 12x + 9."],
    ["Contre-exemple", "Exemple pour lequel une affirmation générale est fausse ; un seul suffit à la réfuter.", "« (x + 1)² = x² + 1 » est faux : pour x = 1, 4 ≠ 2."],
  ] },
  { n: 9, titre: "Géométrie dans l'espace", items: [
    ["Polyèdre", "Solide dont toutes les faces sont des polygones.", "Cube, pavé droit, prisme, pyramide ; le cylindre n'en est pas un."],
    ["Face, arête, sommet", "Face : polygone qui limite le solide ; arête : côté commun à deux faces ; sommet : point où se rejoignent des arêtes.", "Le cube a 6 faces, 12 arêtes, 8 sommets."],
    ["Prisme droit", "Polyèdre dont deux faces (les bases) sont des polygones superposables et parallèles, et les autres faces des rectangles.", "Une boîte de Toblerone (prisme à base triangulaire)."],
    ["Pyramide", "Polyèdre dont une face est un polygone (la base) et les autres faces des triangles ayant un sommet commun.", "Pyramide à base carrée de côté 6 m et de hauteur 4 m : V = 36 × 4 ÷ 3 = 48 m³."],
    ["Patron", "Figure plane qui, par pliage, permet de construire le solide sans recouvrement.", "Une croix de 6 carrés est un patron du cube (il en existe 11)."],
    ["Volume / contenance", "Mesure de l'espace occupé (m³, dm³…) ; contenance : volume intérieur exprimé en litres (1 dm³ = 1 L).", "Cylindre r = 3 cm, h = 10 cm : V = 90π ≈ 282,7 cm³ ≈ 0,28 L."],
  ] },
  { n: 10, titre: "Équations et fonctions", items: [
    ["Équation", "Égalité dans laquelle figure un nombre inconnu.", "5x − 7 = 2x + 8."],
    ["Solution d'une équation", "Valeur de l'inconnue qui rend l'égalité vraie.", "x = 5 est solution de 5x − 7 = 2x + 8 car 18 = 18."],
    ["Fonction", "Processus qui, à un nombre x, associe un unique nombre noté f(x).", "f : x ↦ 3x + 2."],
    ["Image / antécédent", "f(x) est l'image de x ; x est un antécédent de f(x).", "f(x) = 3x + 2 : l'image de 1 est 5 ; un antécédent de 20 est 6."],
    ["Fonction linéaire", "Fonction de la forme x ↦ ax ; sa représentation est une droite passant par l'origine.", "x ↦ 2,5x modélise le prix de x kg à 2,50 €/kg."],
    ["Fonction affine", "Fonction de la forme x ↦ ax + b ; a est le coefficient directeur, b l'ordonnée à l'origine.", "Abonnement 10 € + 2 € par séance : x ↦ 2x + 10."],
  ] },
  { n: 11, titre: "Pourcentages", items: [
    ["Pourcentage", "t % est la fraction t/100 ; prendre t % d'une quantité, c'est la multiplier par t/100.", "15 % de 240 = 240 × 0,15 = 36."],
    ["Coefficient multiplicateur", "Nombre par lequel on multiplie une valeur pour appliquer une évolution : 1 + t/100 (hausse) ou 1 − t/100 (baisse).", "+20 % → × 1,2 ; −15 % → × 0,85."],
    ["Taux d'évolution", "(valeur d'arrivée − valeur de départ) ÷ valeur de départ × 100.", "De 40 à 50 : +25 % ; de 50 à 40 : −20 %."],
    ["Évolutions successives", "On multiplie les coefficients multiplicateurs.", "+10 % puis +10 % : × 1,1 × 1,1 = × 1,21, soit +21 %."],
    ["Point de pourcentage", "Écart entre deux pourcentages.", "Passer de 10 % à 12 % : +2 points, soit une hausse de 20 %."],
  ] },
  { n: 12, titre: "Tableur et algorithmique", items: [
    ["Cellule, plage", "Cellule : case repérée par sa colonne et sa ligne ; plage : ensemble de cellules.", "B3 ; la plage A1:A10."],
    ["Formule", "Calcul saisi dans une cellule, qui commence par « = ».", "=SOMME(A1:A10) ; =B2*C2."],
    ["Référence relative / absolue", "Relative (A1) : se décale lors de la recopie ; absolue ($A$1) : reste figée.", "=B2*(1+$E$1) recopiée en C3 devient =B3*(1+$E$1)."],
    ["Algorithme", "Suite finie d'instructions qui permet de résoudre un problème.", "Une recette de cuisine ; le tracé d'un carré : répéter 4 fois [avancer de 100 ; tourner de 90°]."],
    ["Variable", "Case mémoire nommée dont la valeur peut changer au cours du programme.", "« mettre score à 0 », puis « ajouter 1 à score »."],
    ["Boucle", "Instruction qui répète un bloc, un nombre de fois donné ou jusqu'à une condition.", "« répéter 6 fois [avancer de 50 ; tourner de 60°] » trace un hexagone régulier."],
    ["Instruction conditionnelle", "Instruction qui n'exécute un bloc que si une condition est vraie (si… alors… sinon).", "si réponse = 12 alors dire « Bravo » sinon dire « Essaie encore »."],
  ] },
];

module.exports = { RAN, FORMULAIRE, F, DEFINITIONS };
