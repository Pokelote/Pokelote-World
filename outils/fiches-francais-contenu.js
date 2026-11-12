// Fiches de cours de français à recopier (demande de Clément du 13/11/2026), une par étape « français »
// du parcours (p-f-…). Vocabulaire de « La grammaire du français — Terminologie grammaticale »
// (Eduscol, 2020). Même format que les fiches des RAN : .def, .prop, .ex, .piege ; « essentiel » repris
// en fin de fiche. Les schémas viennent de outils/illustrations.js (ILLUSTRATIONS_QUESTIONS).

const FICHES_FRANCAIS = [
  {
    n: 1,
    slug: "classes-de-mots",
    etape: "p-f-classes",
    titre: "Les classes de mots",
    illustrations: [],
    sections: [
      {
        h: "Classes variables et invariables",
        html: `
<div class="def"><b>Classe de mots</b> (ou nature) : catégorie à laquelle appartient un mot, quelle que soit sa place dans la phrase. Elle se trouve dans le dictionnaire ; la <b>fonction</b>, elle, dépend de la phrase.</div>
<table>
  <tr><th>Classes variables</th><th>Classes invariables</th></tr>
  <tr><td>nom, déterminant, adjectif, pronom, verbe</td><td>adverbe, préposition, conjonction de coordination, conjonction de subordination, interjection</td></tr>
</table>
<div class="ex">« Les petits chats dorment souvent » : les (déterminant), petits (adjectif), chats (nom), dorment (verbe) varient ; souvent (adverbe) ne varie jamais.</div>`,
      },
      {
        h: "Le nom et le déterminant",
        html: `
<div class="def"><b>Nom</b> : désigne un être, une chose, une idée ; il a un genre (fixe) et varie le plus souvent en nombre. C'est le <b>noyau du groupe nominal</b>. <b>Nom propre</b> : désigne un être ou un lieu unique, avec majuscule.</div>
<div class="def"><b>Déterminant</b> : précède le nom, le « actualise » et porte ses marques de genre et de nombre.</div>
<table>
  <tr><th>Sorte de déterminant</th><th>Exemples</th></tr>
  <tr><td>article défini / indéfini / partitif</td><td>le, la, les / un, une, des / du, de la</td></tr>
  <tr><td>possessif</td><td>mon, ta, ses, notre, leur(s)</td></tr>
  <tr><td>démonstratif</td><td>ce, cet, cette, ces</td></tr>
  <tr><td>interrogatif, exclamatif</td><td>quel, quelle(s)</td></tr>
  <tr><td>indéfini</td><td>chaque, plusieurs, aucun, certains</td></tr>
  <tr><td>numéral (cardinal)</td><td>deux, trois, cent</td></tr>
</table>
<div class="ex">« du pain » (partitif : une quantité non comptable) ; « des pains » (indéfini pluriel).</div>`,
      },
      {
        h: "L'adjectif, le pronom, le verbe",
        html: `
<div class="def"><b>Adjectif</b> (qualificatif) : exprime une caractéristique du nom et s'accorde avec lui. Il peut se mettre au comparatif (plus grand que) ou au superlatif (le plus grand).</div>
<div class="def"><b>Pronom</b> : remplace un nom, un groupe nominal ou une proposition (pronom de reprise), ou désigne un participant à la communication (je, tu, nous, vous). Sortes : personnel, possessif (le mien), démonstratif (celui-ci), relatif (qui, que, dont, où), interrogatif (qui ?, lequel ?), indéfini (personne, on, chacun).</div>
<div class="def"><b>Verbe</b> : mot qui se conjugue (personne, nombre, temps, mode) ; noyau du groupe verbal. Test : il change quand on change le temps (il chante → il chantait).</div>
<div class="ex">« Léa a perdu son livre. Elle le cherche partout. » : Elle (pronom personnel sujet) reprend Léa ; le (pronom personnel COD) reprend son livre.</div>`,
      },
      {
        h: "Les mots invariables",
        html: `
<div class="def"><b>Adverbe</b> : modifie le sens d'un verbe, d'un adjectif, d'un autre adverbe ou de toute la phrase (vite, très, heureusement).</div>
<div class="def"><b>Préposition</b> : introduit un complément et le relie à un autre mot (à, de, pour, par, avec, sans, dans, sur…).</div>
<div class="def"><b>Conjonction de coordination</b> : relie deux éléments de même niveau (mais, ou, et, donc, or, ni, car). <b>Conjonction de subordination</b> : introduit une proposition subordonnée (que, quand, lorsque, si, parce que, puisque…).</div>
<div class="def"><b>Interjection</b> : exprime une émotion, souvent isolée (oh !, hélas !, chut !).</div>`,
      },
      {
        h: "Méthode : identifier une classe par les manipulations",
        html: `
<ol>
  <li><b>Substitution</b> : remplacer le mot par un autre de classe connue (« un » ↔ « le » ↔ « ce » → déterminant).</li>
  <li><b>Variation</b> : le mot change-t-il en genre, en nombre, en temps ? (oui → variable).</li>
  <li><b>Suppression / déplacement</b> : un adverbe se supprime souvent sans rendre la phrase incorrecte.</li>
</ol>
<div class="ex">« Je leur parle » : leur est un <b>pronom</b> (il remplace « à mes amis », il est invariable). « Je vois leurs amis » : leurs est un <b>déterminant</b> possessif (devant un nom, il s'accorde).</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Confondre classe et fonction : « rouge » est un adjectif ; il peut être épithète ou attribut.</div>
<div class="piege">« que » peut être pronom relatif (le livre que je lis) ou conjonction de subordination (je pense que tu viendras).</div>
<div class="piege">« le, la, les » sont déterminants devant un nom, pronoms devant un verbe (je les vois).</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Variables : nom, déterminant, adjectif, pronom, verbe · invariables : adverbe, préposition, conjonctions, interjection.</li>
  <li>Le déterminant précède le nom et porte genre et nombre (article, possessif, démonstratif, indéfini, numéral…).</li>
  <li>Le pronom remplace ou désigne ; « leur » pronom (invariable) ≠ « leur(s) » déterminant.</li>
  <li>Conjonction de coordination : mais, ou, et, donc, or, ni, car · de subordination : que, quand, si, parce que…</li>
  <li>Méthode : substitution, variation, suppression.</li>
</ul>`,
  },
  {
    n: 2,
    slug: "fonctions",
    etape: "p-f-fonctions",
    titre: "Les fonctions dans la phrase",
    illustrations: ["Qu'est-ce que le sujet ? Comment l'identifier ?", "Qu'est-ce qu'un complément de phrase (anciennement complément circonstanciel) ?"],
    sections: [
      {
        h: "La phrase de base : sujet, prédicat, complément de phrase",
        html: `
<div class="def"><b>Fonction</b> : rôle d'un mot ou d'un groupe dans la phrase. La phrase de base comporte un <b>sujet</b> et un <b>prédicat</b> (ce qu'on dit du sujet, le plus souvent le groupe verbal), et éventuellement des <b>compléments de phrase</b>.</div>
<div class="ex">[Le matin,] [les élèves] [lisent un album]. → complément de phrase · sujet · prédicat.</div>`,
      },
      {
        h: "Le sujet",
        html: `
<div class="def"><b>Sujet</b> : fonction du groupe qui commande l'accord du verbe en personne et en nombre.</div>
<div class="prop"><b>Tests</b> : on l'encadre par « c'est… qui » ; on le remplace par un pronom (il, elle, ils, elles) ; il peut être inversé (« Où vont les oiseaux ? »).</div>
<div class="ex">« Dans la cour jouent les enfants » : c'est les enfants qui jouent → sujet inversé, le verbe s'accorde au pluriel.</div>`,
      },
      {
        h: "Les compléments du verbe et l'attribut",
        html: `
<div class="def"><b>Complément du verbe</b> : dépend du verbe, en général ni supprimable ni déplaçable. <b>COD</b> : sans préposition (pronominalisable par le, la, les, en). <b>COI</b> : introduit par une préposition (pronominalisable par lui, leur, y, en).</div>
<div class="def"><b>Attribut du sujet</b> : relié au sujet par un verbe attributif (être, sembler, devenir, paraître, rester, demeurer…) ; il caractérise le sujet et s'accorde avec lui. (Il existe aussi un attribut du COD : « On l'a élue déléguée ».)</div>
<div class="ex">« Elle lit un roman » (COD → elle le lit) · « Il parle à sa sœur » (COI → il lui parle) · « Ces élèves semblent fatigués » (attribut du sujet).</div>`,
      },
      {
        h: "Le complément de phrase",
        html: `
<div class="def"><b>Complément de phrase</b> (anciennement complément circonstanciel) : porte sur toute la phrase ; on peut le <b>supprimer</b> et le <b>déplacer</b>. Il exprime le temps, le lieu, la cause, le but, la manière…</div>
<div class="piege">« Je vais à Paris » : « à Paris » n'est ni supprimable ni déplaçable (« Je vais » est incomplet) → c'est un complément du verbe (de lieu), pas un complément de phrase.</div>`,
      },
      {
        h: "Les fonctions dans le groupe nominal",
        html: `
<div class="def"><b>Épithète</b> : adjectif directement lié au nom dans le GN (« un grand jardin »). <b>Épithète détachée</b> (apposée) : séparée par une virgule (« Fatigué, Paul s'assit »).</div>
<div class="def"><b>Complément du nom</b> : groupe qui complète le nom, le plus souvent introduit par une préposition (« un livre de géographie », « la maison de mes parents »). La subordonnée relative est aussi une expansion du nom.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Confondre COD et attribut : « Il est médecin » → attribut (verbe être), pas COD.</div>
<div class="piege">Croire que tout groupe de lieu ou de temps est complément de phrase : seul le test supprimer + déplacer permet de conclure.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Phrase de base = sujet + prédicat (+ compléments de phrase).</li>
  <li>Sujet : « c'est… qui », commande l'accord du verbe.</li>
  <li>COD (le, la, les) · COI (lui, leur, y, en) · ni supprimables ni déplaçables.</li>
  <li>Attribut du sujet : après un verbe attributif (être, sembler, devenir…), s'accorde avec le sujet.</li>
  <li>Complément de phrase : supprimable ET déplaçable.</li>
  <li>Dans le GN : épithète, complément du nom, relative.</li>
</ul>`,
  },
  {
    n: 3,
    slug: "phrase",
    etape: "p-f-phrase",
    titre: "La phrase simple et complexe",
    illustrations: ["Quelle différence entre phrase simple et phrase complexe ?", "Qu'est-ce qu'une proposition subordonnée relative ?"],
    sections: [
      {
        h: "Types et formes de phrases",
        html: `
<div class="def"><b>Types</b> (obligatoires, un seul par phrase) : déclaratif, interrogatif, impératif (ou injonctif). L'exclamation s'ajoute à un type (« Comme il est grand ! »).</div>
<div class="def"><b>Formes</b> (facultatives, combinables) : affirmative / négative ; active / passive ; neutre / emphatique (mise en relief : « C'est lui qui… ») ; personnelle / impersonnelle (« Il pleut »).</div>
<div class="ex">« Ce gâteau n'a pas été mangé par les enfants. » : type déclaratif, forme négative et passive.</div>`,
      },
      {
        h: "Phrase simple, phrase complexe, propositions",
        html: `
<div class="def"><b>Proposition</b> : ensemble organisé autour d'un verbe conjugué. <b>Phrase simple</b> : une seule proposition. <b>Phrase complexe</b> : plusieurs propositions.</div>
<div class="prop">Trois façons de relier des propositions : <b>juxtaposition</b> (ponctuation), <b>coordination</b> (conjonction de coordination ou adverbe de liaison), <b>subordination</b> (mot subordonnant).</div>
<div class="ex">« Il pleut, je reste. » (juxtaposées) · « Il pleut donc je reste. » (coordonnées) · « Je reste parce qu'il pleut. » (principale + subordonnée).</div>
<div class="def"><b>Phrase non verbale</b> : sans verbe conjugué (« Quelle belle journée ! », « Sortie de secours »).</div>`,
      },
      {
        h: "Les propositions subordonnées",
        html: `
<table>
  <tr><th>Subordonnée</th><th>Introduite par</th><th>Fonction</th><th>Exemple</th></tr>
  <tr><td>relative</td><td>pronom relatif (qui, que, dont, où, lequel)</td><td>complète un nom (l'antécédent)</td><td>Le livre <i>que tu m'as prêté</i> est passionnant.</td></tr>
  <tr><td>conjonctive complétive</td><td>« que »</td><td>complément du verbe (COD…)</td><td>Je pense <i>qu'il viendra</i>.</td></tr>
  <tr><td>conjonctive circonstancielle</td><td>quand, parce que, si, pour que…</td><td>complément de phrase</td><td>Il viendra <i>s'il fait beau</i>.</td></tr>
  <tr><td>interrogative indirecte</td><td>si, qui, quand, où…</td><td>complément du verbe</td><td>Je me demande <i>s'il viendra</i>.</td></tr>
</table>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Compter les propositions en comptant les verbes conjugués, pas les infinitifs ni les participes.</div>
<div class="piege">« que » relatif (il a un antécédent) ≠ « que » conjonction (pas d'antécédent, après un verbe).</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Types : déclaratif, interrogatif, impératif (+ exclamation) · formes : négative, passive, emphatique, impersonnelle.</li>
  <li>1 verbe conjugué = 1 proposition · simple (1) / complexe (plusieurs).</li>
  <li>Juxtaposition, coordination, subordination.</li>
  <li>Subordonnées : relative (antécédent), complétive (que), circonstancielle (quand, parce que, si…), interrogative indirecte.</li>
</ul>`,
  },
  {
    n: 4,
    slug: "conjugaison",
    etape: "p-f-conjugaison",
    titre: "Conjugaison : formation des temps et des modes",
    illustrations: [],
    sections: [
      {
        h: "Radical, terminaison, groupes",
        html: `
<div class="def"><b>Radical</b> : partie qui porte le sens (elle peut varier : je <b>v</b>ais, nous <b>all</b>ons). <b>Terminaison</b> : porte la personne, le nombre, le temps et le mode.</div>
<div class="prop"><b>Groupes</b> : 1er = infinitif en -er (sauf aller) ; 2e = infinitif en -ir avec « -issons » (finir → nous finissons) ; 3e = tous les autres (et aller).</div>`,
      },
      {
        h: "Modes et temps",
        html: `
<div class="def"><b>Modes personnels</b> : indicatif, subjonctif, impératif. <b>Modes non personnels</b> : infinitif, participe (le gérondif « en + participe présent » s'y rattache). Dans la terminologie de 2020, le <b>conditionnel</b> est un temps de l'indicatif.</div>
<div class="def"><b>Temps simple</b> : verbe seul. <b>Temps composé</b> : auxiliaire avoir ou être (au temps simple correspondant) + participe passé ; il exprime l'accompli.</div>
<table>
  <tr><th>Temps simple</th><th>Temps composé correspondant</th></tr>
  <tr><td>présent : il chante</td><td>passé composé : il a chanté</td></tr>
  <tr><td>imparfait : il chantait</td><td>plus-que-parfait : il avait chanté</td></tr>
  <tr><td>passé simple : il chanta</td><td>passé antérieur : il eut chanté</td></tr>
  <tr><td>futur : il chantera</td><td>futur antérieur : il aura chanté</td></tr>
  <tr><td>conditionnel présent : il chanterait</td><td>conditionnel passé : il aurait chanté</td></tr>
</table>`,
      },
      {
        h: "Terminaisons à connaître",
        html: `
<table>
  <tr><th>Temps</th><th>Terminaisons</th></tr>
  <tr><td>présent (1er groupe)</td><td>-e, -es, -e, -ons, -ez, -ent</td></tr>
  <tr><td>imparfait (tous)</td><td>-ais, -ais, -ait, -ions, -iez, -aient</td></tr>
  <tr><td>futur (tous)</td><td>-rai, -ras, -ra, -rons, -rez, -ront</td></tr>
  <tr><td>conditionnel présent</td><td>radical du futur + terminaisons de l'imparfait : -rais, -rais, -rait, -rions, -riez, -raient</td></tr>
  <tr><td>passé simple (1er groupe)</td><td>-ai, -as, -a, -âmes, -âtes, -èrent</td></tr>
  <tr><td>subjonctif présent</td><td>-e, -es, -e, -ions, -iez, -ent (que je chante, que nous chantions)</td></tr>
</table>
<div class="ex">« je chanterai » (futur) ≠ « je chanterais » (conditionnel) : remplacer par « nous » → nous chanterons / nous chanterions.</div>`,
      },
      {
        h: "La voix passive",
        html: `
<div class="def"><b>Voix passive</b> : auxiliaire être (au temps de la phrase active) + participe passé ; le COD de la phrase active devient sujet, l'ancien sujet devient complément d'agent (par…).</div>
<div class="ex">« Le chat mange la souris » → « La souris est mangée par le chat » (présent passif).</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">« il a été mangé » est un passé composé passif, pas un plus-que-parfait.</div>
<div class="piege">Confondre futur et conditionnel à la 1re personne du singulier (-rai / -rais) : faire le test avec « nous ».</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Radical (sens) + terminaison (personne, nombre, temps, mode) · 3 groupes (-er ; -ir/-issons ; les autres).</li>
  <li>Modes personnels : indicatif, subjonctif, impératif · non personnels : infinitif, participe.</li>
  <li>Temps composé = auxiliaire au temps simple + participe passé.</li>
  <li>Imparfait -ais… · futur -rai… · conditionnel -rais… (test « nous »).</li>
  <li>Passif : être + participe passé.</li>
</ul>`,
  },
  {
    n: 5,
    slug: "valeurs-des-temps",
    etape: "p-f-temps",
    titre: "Valeurs des temps et des modes",
    illustrations: [],
    sections: [
      {
        h: "Le présent",
        html: `
<div class="def"><b>Valeurs du présent</b> : d'énonciation (au moment où l'on parle), d'habitude, de vérité générale, de narration (présent historique), et présent à valeur de futur proche ou de passé récent.</div>
<div class="ex">« Je t'écris de Porto » (énonciation) · « L'eau gèle à 0 °C » (vérité générale) · « En 1789, le peuple prend la Bastille » (narration) · « Je pars demain » (futur proche).</div>`,
      },
      {
        h: "Les temps du récit : imparfait et passé simple",
        html: `
<div class="prop"><b>Passé simple</b> : actions de <b>premier plan</b>, ponctuelles, limitées, qui se succèdent et font avancer le récit. <b>Imparfait</b> : <b>arrière-plan</b> (décor, description, actions en cours, habitudes, commentaires).</div>
<div class="ex">« Il <i>faisait</i> nuit et la forêt <i>semblait</i> immense (arrière-plan). Soudain, un loup <i>surgit</i> et <i>bondit</i> (premier plan). »</div>
<div class="def"><b>Plus-que-parfait</b> : action antérieure à une autre action passée (« Il avait plu toute la nuit quand nous partîmes »).</div>`,
      },
      {
        h: "Récit et discours",
        html: `
<div class="prop"><b>Système du récit</b> (coupé de la situation d'énonciation) : passé simple, imparfait, plus-que-parfait. <b>Système du discours</b> (ancré dans la situation : je, ici, maintenant) : présent, passé composé, futur, imparfait.</div>
<div class="def"><b>Passé composé</b> : action passée et accomplie, rattachée au présent de l'énonciateur (« J'ai fini mes devoirs »).</div>`,
      },
      {
        h: "Futur, conditionnel, subjonctif, impératif",
        html: `
<ul>
  <li><b>Futur</b> : action à venir, ordre atténué (« Tu rangeras ta chambre »).</li>
  <li><b>Conditionnel</b> : hypothèse (« S'il pleuvait, je resterais »), futur dans le passé (« Il disait qu'il viendrait »), politesse (« Je voudrais… »), information non vérifiée.</li>
  <li><b>Subjonctif</b> : action envisagée, souhaitée, après certains verbes et conjonctions (« Il faut que tu viennes », « bien qu'il pleuve »).</li>
  <li><b>Impératif</b> : ordre, conseil, défense (« Range ta chambre »).</li>
</ul>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Justifier un temps seulement par « c'est du passé » : il faut dire premier plan / arrière-plan, antériorité, valeur…</div>
<div class="piege">« Si j'aurais » est fautif : après « si » d'hypothèse, imparfait (« si j'avais »).</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Présent : énonciation, habitude, vérité générale, narration, futur/passé proche.</li>
  <li>Passé simple = premier plan · imparfait = arrière-plan · plus-que-parfait = antériorité.</li>
  <li>Récit (passé simple, imparfait) vs discours (présent, passé composé, futur).</li>
  <li>Conditionnel : hypothèse, futur dans le passé, politesse · « si » + imparfait.</li>
</ul>`,
  },
  {
    n: 6,
    slug: "accords",
    etape: "p-f-accords",
    titre: "Les accords (orthographe grammaticale)",
    illustrations: [],
    sections: [
      {
        h: "Dans le groupe nominal",
        html: `
<div class="prop">Le déterminant et l'adjectif s'accordent en genre et en nombre avec le nom noyau. Un adjectif qui qualifie plusieurs noms se met au pluriel ; si les noms sont de genres différents, au masculin pluriel.</div>
<div class="ex">« de belles histoires anciennes » · « une veste et un pantalon noirs ».</div>
<div class="prop">Adjectifs de couleur : un adjectif simple s'accorde (des robes vertes) ; un nom employé comme adjectif (marron, orange) et un adjectif composé (bleu clair) restent invariables. Exceptions : rose, mauve, fauve… s'accordent.</div>`,
      },
      {
        h: "Le verbe et son sujet",
        html: `
<div class="prop">Le verbe s'accorde en personne et en nombre avec son sujet, même éloigné ou inversé. Plusieurs sujets → pluriel. Sujet « qui » → accord avec l'antécédent.</div>
<div class="ex">« Les feuilles de cet arbre tombent » · « Toi et moi partirons » · « C'est moi qui suis venu ».</div>`,
      },
      {
        h: "Le participe passé",
        html: `
<table>
  <tr><th>Emploi</th><th>Règle</th><th>Exemple</th></tr>
  <tr><td>sans auxiliaire (comme un adjectif)</td><td>s'accorde avec le nom</td><td>des feuilles tombées</td></tr>
  <tr><td>avec être</td><td>s'accorde avec le sujet</td><td>Elles sont parties.</td></tr>
  <tr><td>avec avoir</td><td>ne s'accorde jamais avec le sujet ; s'accorde avec le COD s'il est placé avant</td><td>J'ai lu ces lettres. Ces lettres, je les ai lues.</td></tr>
  <tr><td>verbes pronominaux (cas général)</td><td>avec le sujet, sauf si un COD est placé après</td><td>Elles se sont lavées. Elles se sont lavé les mains.</td></tr>
</table>
<div class="ex">Méthode : chercher l'auxiliaire, puis le sujet (être) ou le COD et sa place (avoir).</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Accorder avec le mot le plus proche au lieu du vrai sujet (« Le bruit des voitures m'empêchent » → m'empêche).</div>
<div class="piege">Accorder le participe passé avec avoir au sujet (« Elles ont mangées » → mangé).</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Dans le GN : déterminant et adjectif s'accordent avec le nom.</li>
  <li>Verbe : accord avec le sujet (même inversé ou éloigné ; « qui » → antécédent).</li>
  <li>PP avec être : avec le sujet · avec avoir : avec le COD placé avant, sinon invariable.</li>
  <li>Couleurs : adjectif simple accordé ; nom (marron, orange) ou composé (bleu clair) invariable.</li>
</ul>`,
  },
  {
    n: 7,
    slug: "lexique",
    etape: "p-f-lexique",
    titre: "Lexique : formation des mots et sens",
    illustrations: [],
    sections: [
      {
        h: "Formation des mots",
        html: `
<div class="def"><b>Dérivation</b> : ajout d'un préfixe (avant le radical) et/ou d'un suffixe (après). <b>Composition</b> : association de mots (porte-monnaie, pomme de terre). <b>Emprunt</b> : mot venu d'une autre langue (week-end, algèbre).</div>
<div class="ex">in-croy-able : préfixe in- (négation), radical croy-, suffixe -able (possibilité).</div>
<div class="def"><b>Famille de mots</b> : mots formés à partir d'un même radical et liés par le sens (terre, terrain, terrestre, enterrer, atterrir).</div>`,
      },
      {
        h: "Relations de sens",
        html: `
<ul>
  <li><b>Synonymes</b> : sens proche (rapide / véloce) · <b>antonymes</b> : sens contraire (monter / descendre).</li>
  <li><b>Homonymes</b> : même forme, sens différents (un livre / une livre ; vert / verre).</li>
  <li><b>Polysémie</b> : un mot, plusieurs sens liés, choisis par le contexte (la tête : du corps, d'une classe).</li>
  <li><b>Hyperonyme / hyponyme</b> : terme générique / terme spécifique (fruit / pomme).</li>
  <li><b>Sens propre / sens figuré</b> : « un cœur qui bat » / « avoir un cœur de pierre ».</li>
</ul>
<div class="def"><b>Champ lexical</b> : ensemble des mots d'un texte qui se rapportent à un même thème. <b>Champ sémantique</b> : ensemble des sens d'un mot.</div>`,
      },
      {
        h: "Registres et figures de style",
        html: `
<div class="def"><b>Registres de langue</b> : familier (une bagnole), courant (une voiture), soutenu (une automobile).</div>
<table>
  <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
  <tr><td>comparaison</td><td>rapprochement avec un outil (comme, tel…)</td><td>Il est fort comme un lion.</td></tr>
  <tr><td>métaphore</td><td>rapprochement sans outil</td><td>Ce lion attaqua.</td></tr>
  <tr><td>personnification</td><td>prêter des traits humains à une chose</td><td>Le vent hurle.</td></tr>
  <tr><td>hyperbole</td><td>exagération</td><td>Je meurs de faim.</td></tr>
  <tr><td>anaphore</td><td>répétition en début de vers ou de phrase</td><td>Paris outragé, Paris brisé…</td></tr>
</table>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Confondre champ lexical (thème d'un texte) et famille de mots (même radical).</div>
<div class="piege">Polysémie (un mot, plusieurs sens) ≠ homonymie (deux mots différents de même forme).</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Dérivation (préfixe, suffixe), composition, emprunt · famille = même radical.</li>
  <li>Synonymes, antonymes, homonymes, polysémie, hyperonyme / hyponyme.</li>
  <li>Champ lexical = mots d'un même thème dans un texte.</li>
  <li>Comparaison (avec outil) ≠ métaphore (sans outil) · personnification · hyperbole · anaphore.</li>
</ul>`,
  },
  {
    n: 8,
    slug: "orthographe",
    etape: "p-f-orthographe",
    titre: "Orthographe lexicale et homophones",
    illustrations: [],
    sections: [
      {
        h: "Orthographe lexicale et grammaticale",
        html: `
<div class="def"><b>Orthographe lexicale</b> : la manière d'écrire un mot, indépendamment de la phrase (lettres muettes, doubles consonnes, accents). <b>Orthographe grammaticale</b> : les marques d'accord et de conjugaison qui dépendent de la phrase.</div>
<div class="prop">Pour trouver une lettre muette finale : chercher un mot de la même famille ou le féminin (grand → grande, sirop → siroter, tapis → tapisser).</div>
<div class="prop">« m » devant m, b, p (emmener, ombre, tempête), sauf bonbon, bonbonne, néanmoins…</div>`,
      },
      {
        h: "Les homophones grammaticaux (et leurs tests)",
        html: `
<table>
  <tr><th>Homophones</th><th>Test</th><th>Exemple</th></tr>
  <tr><td>a / à</td><td>a = avait</td><td>Il a faim ; il va à l'école.</td></tr>
  <tr><td>et / est</td><td>est = était ; et = et puis</td><td>Le ciel est bleu et le soleil brille.</td></tr>
  <tr><td>son / sont</td><td>sont = étaient</td><td>Ils sont partis avec son frère.</td></tr>
  <tr><td>on / ont</td><td>ont = avaient ; on = il</td><td>On sait qu'ils ont gagné.</td></tr>
  <tr><td>ce / se</td><td>se devant un verbe pronominal (se laver)</td><td>Ce garçon se lave.</td></tr>
  <tr><td>ces / ses / c'est / s'est</td><td>ceux-là / les siens / cela est / pronominal</td><td>Ses amis ? C'est lui qui s'est trompé sur ces dates.</td></tr>
  <tr><td>ou / où</td><td>ou = ou bien ; où = lieu ou temps</td><td>Où vas-tu ? Ici ou là ?</td></tr>
  <tr><td>la / l'a / là</td><td>l'a = l'avait ; là = lieu</td><td>Il l'a posée là, sur la table.</td></tr>
  <tr><td>-é / -er</td><td>remplacer par vendu / vendre</td><td>Il va chanter (vendre) ; il a chanté (vendu).</td></tr>
  <tr><td>peu / peut</td><td>peut = pouvait</td><td>Il peut manger un peu.</td></tr>
  <tr><td>quand / quant / qu'en</td><td>quand = lorsque ; quant à ; qu'en = que + en</td><td>Quant à lui, il viendra quand il pourra.</td></tr>
</table>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Écrire le participe passé en -er après avoir (« il a manger ») : test « vendu ».</div>
<div class="piege">« leur » devant un verbe est un pronom invariable (« je leur parle »), jamais « leurs ».</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Lexicale (le mot) ≠ grammaticale (accords, conjugaison).</li>
  <li>Lettre muette : mot de la même famille ou féminin.</li>
  <li>Tests : a/avait · est/était · sont/étaient · ont/avaient · -é/-er (vendu/vendre).</li>
  <li>ces / ses / c'est / s'est · ou / où · la / l'a / là.</li>
</ul>`,
  },
];

module.exports = { FICHES_FRANCAIS };
