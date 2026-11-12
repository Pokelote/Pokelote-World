// Fiches de cours d'histoire-géographie-EMC à recopier (demande de Clément du 13/11/2026), une par étape
// « application — histoire-géo-EMC » du parcours (p-a-hg-…). Même format que les fiches des RAN :
// .def, .prop, .ex, .piege ; « essentiel » repris en fin de fiche. Schémas : outils/illustrations.js
// (ILLUSTRATIONS_QUESTIONS) ; image : la frise crpe/frise-histoire-france.png.

const FICHES_HGEMC = [
  {
    n: 1,
    slug: "epreuve-et-demarche",
    etape: "p-a-hg-intro",
    titre: "L'épreuve et la démarche en histoire-géographie",
    illustrations: [],
    sections: [
      {
        h: "Ce qu'on attend de toi",
        html: `
<div class="prop">L'épreuve d'application porte sur le domaine choisi à l'inscription. À partir d'un dossier (extraits de programmes, documents pour la classe, productions d'élèves…), on te demande de <b>maîtriser les savoirs</b> en jeu, puis de <b>concevoir ou analyser</b> une séance ou une séquence et de <b>justifier tes choix</b>.</div>
<div class="ex">« Proposez une séance de CM1 sur le temps des rois à partir des documents 2 et 3 : objectifs, déroulement, trace écrite. »</div>`,
      },
      {
        h: "La démarche historique",
        html: `
<div class="def"><b>Démarche historique</b> : partir d'une <b>question</b> (problématique), chercher des réponses dans des <b>sources</b>, les critiquer et les confronter, puis construire un <b>récit</b> argumenté.</div>
<div class="def"><b>Source primaire</b> : document produit à l'époque étudiée (charte, tableau, objet, photographie). <b>Source secondaire</b> : document produit après, par un historien ou un auteur (manuel, reconstitution).</div>
<div class="ex">Pour étudier Louis XIV : le portrait de Rigaud (1701) est une source primaire ; un schéma de manuel sur la cour de Versailles est une source secondaire.</div>
<div class="prop"><b>Présenter un document</b> : nature, auteur, date, destinataire, contexte. Puis prélever des informations, les expliquer, porter un regard critique (point de vue, propagande ?).</div>`,
      },
      {
        h: "Histoire, mémoire, fiction",
        html: `
<div class="def"><b>Histoire</b> : connaissance du passé construite selon une méthode (sources, critique). <b>Mémoire</b> : souvenir que garde un groupe du passé, souvent affectif et sélectif.</div>
<div class="ex">Les monuments aux morts de 1914-1918 relèvent de la mémoire ; l'étude des registres et des lettres de poilus relève de l'histoire.</div>
<div class="piege">Présenter un film ou un roman historique comme une source : c'est une fiction, qui se compare aux sources.</div>`,
      },
      {
        h: "La démarche géographique",
        html: `
<div class="def"><b>Géographie</b> : étude de la manière dont les sociétés <b>habitent</b> et organisent les espaces. Au cycle 3, le fil conducteur est la notion d'<b>habiter</b> (se loger, travailler, se déplacer, se cultiver…).</div>
<div class="prop">Démarche : partir d'une situation proche ou d'une étude de cas, la localiser et la décrire (paysage, carte), l'expliquer (acteurs, besoins, contraintes), puis la mettre en perspective à d'autres échelles (France, Europe, monde).</div>
<div class="ex">Étude de cas « Mieux habiter » : un écoquartier, ses acteurs (mairie, habitants, urbanistes) et ses aménagements (pistes cyclables, espaces verts), comparé à d'autres villes.</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Proposer une séance où l'enseignant raconte tout : les élèves doivent travailler sur des documents et répondre à une question.</div>
<div class="piege">Oublier la trace écrite, et le lien avec la problématique de départ.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Une séance d'histoire ou de géographie part d'une question et s'appuie sur des documents.</li>
  <li>Source primaire (de l'époque) ≠ source secondaire (postérieure).</li>
  <li>Présenter un document : nature, auteur, date, destinataire, contexte.</li>
  <li>Histoire (méthode) ≠ mémoire (souvenir d'un groupe) ≠ fiction.</li>
  <li>Géographie : habiter ; changer d'échelle.</li>
</ul>`,
  },
  {
    n: 2,
    slug: "se-reperer-dans-le-temps",
    etape: "p-a-hg-temps",
    titre: "Se repérer dans le temps",
    image: "frise-histoire-france.png",
    illustrations: ["Quelles sont les grandes périodes de l'histoire ?", "Qu'est-ce qu'une frise chronologique et à quoi sert-elle ?", "Comment trouve-t-on le siècle d'une date ?"],
    sections: [
      {
        h: "Les outils du temps",
        html: `
<div class="def"><b>Chronologie</b> : succession ordonnée des événements. <b>Frise chronologique</b> : représentation linéaire et orientée du temps, à <b>échelle régulière</b>, qui place des dates (points) et des durées (bandes).</div>
<div class="def"><b>Siècle</b> : période de cent ans ; le XVIIIe siècle va de 1701 à 1800. <b>Millénaire</b> : mille ans.</div>
<div class="prop">Trouver le siècle : nombre de centaines + 1 (sauf pour les années « rondes » : 1800 est la dernière année du XVIIIe).</div>
<div class="ex">1789 → 17 + 1 = XVIIIe siècle ; 1500 → XVe siècle ; 52 av. J.-C. → Ier siècle av. J.-C.</div>`,
      },
      {
        h: "Les grandes périodes (dates conventionnelles)",
        html: `
<table>
  <tr><th>Période</th><th>Début</th><th>Fin</th></tr>
  <tr><td>Préhistoire</td><td>apparition des premiers humains</td><td>vers −3000 : invention de l'écriture</td></tr>
  <tr><td>Antiquité</td><td>vers −3000</td><td>476 : chute de l'Empire romain d'Occident</td></tr>
  <tr><td>Moyen Âge</td><td>476</td><td>1492 : Christophe Colomb en Amérique (ou 1453)</td></tr>
  <tr><td>Temps modernes</td><td>1492</td><td>1789 : Révolution française</td></tr>
  <tr><td>Époque contemporaine</td><td>1789</td><td>aujourd'hui</td></tr>
</table>
<div class="piege">Ces bornes sont des conventions européennes : un changement de période ne se fait pas du jour au lendemain.</div>`,
      },
      {
        h: "Les repères du cycle 3",
        html: `
<table>
  <tr><th>Date</th><th>Repère</th></tr>
  <tr><td>52 av. J.-C.</td><td>Alésia : victoire de César sur Vercingétorix, la Gaule devient romaine</td></tr>
  <tr><td>vers 496-500</td><td>baptême de Clovis, roi des Francs</td></tr>
  <tr><td>800</td><td>Charlemagne couronné empereur</td></tr>
  <tr><td>987</td><td>Hugues Capet roi : début des Capétiens</td></tr>
  <tr><td>1598</td><td>édit de Nantes (Henri IV) : tolérance envers les protestants</td></tr>
  <tr><td>1643-1715</td><td>règne de Louis XIV, monarchie absolue</td></tr>
  <tr><td>1789</td><td>prise de la Bastille (14 juillet), Déclaration des droits de l'homme et du citoyen (26 août)</td></tr>
  <tr><td>1792</td><td>Ire République</td></tr>
  <tr><td>1804</td><td>Napoléon Ier empereur ; Code civil</td></tr>
  <tr><td>1848</td><td>suffrage universel masculin ; abolition de l'esclavage</td></tr>
  <tr><td>1881-1882</td><td>lois Ferry : école gratuite, laïque et obligatoire</td></tr>
  <tr><td>1905</td><td>loi de séparation des Églises et de l'État</td></tr>
  <tr><td>1914-1918 · 1939-1945</td><td>Première et Seconde Guerres mondiales</td></tr>
  <tr><td>1944</td><td>droit de vote des femmes</td></tr>
  <tr><td>1957</td><td>traités de Rome (construction européenne)</td></tr>
  <tr><td>1958</td><td>Ve République</td></tr>
</table>`,
      },
      {
        h: "Au cycle 2 : construire le temps",
        html: `
<div class="prop">Au cycle 2 (Questionner le monde), on construit d'abord le <b>temps court</b> (journée, semaine, calendrier, emploi du temps), puis le <b>temps long</b> (générations, arbre généalogique, évolution des modes de vie).</div>
<div class="ex">Comparer l'école d'autrefois et d'aujourd'hui à partir de photographies et d'un témoignage de grand-parent.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Frise : échelle régulière, points pour les dates, bandes pour les durées.</li>
  <li>Siècle = centaines + 1 (1789 → XVIIIe ; 1800 → XVIIIe).</li>
  <li>Périodes : −3000 · 476 · 1492 · 1789.</li>
  <li>Repères : −52, 496, 800, 987, 1598, 1643-1715, 1789, 1792, 1804, 1848, 1881-82, 1905, 1914-18, 1939-45, 1944, 1957, 1958.</li>
  <li>Cycle 2 : temps court puis temps long.</li>
</ul>`,
  },
  {
    n: 3,
    slug: "se-reperer-dans-l-espace",
    etape: "p-a-hg-espace",
    titre: "Se repérer dans l'espace : notions de géographie",
    illustrations: [
      "Qu'est-ce que l'échelle d'une carte ? Qu'est-ce que changer d'échelle ?",
      "Qu'est-ce qu'un paysage en géographie ?",
      "Qu'est-ce qu'un croquis et que doit-il comporter ?",
      "Quelle différence entre espace urbain, périurbain et rural ?",
    ],
    sections: [
      {
        h: "Représenter l'espace",
        html: `
<div class="def"><b>Carte</b> : représentation réduite, simplifiée et codée d'un espace, vu de dessus. Elle comporte un titre, une légende, une échelle et une orientation.</div>
<div class="def"><b>Échelle</b> : rapport entre une distance sur la carte et la distance réelle. 1/100 000 : 1 cm sur la carte = 100 000 cm = 1 km en réalité.</div>
<div class="ex">Deux villages à 4 cm sur une carte au 1/25 000 sont à 4 × 25 000 = 100 000 cm = 1 km.</div>
<div class="def"><b>Changer d'échelle</b> : passer d'un espace local à un espace plus vaste (région, France, monde), ou l'inverse, pour expliquer un phénomène.</div>
<div class="def"><b>Croquis</b> : représentation simplifiée d'un espace qui met en évidence son organisation ; il a un titre, une légende organisée et une orientation.</div>`,
      },
      {
        h: "Observer un paysage",
        html: `
<div class="def"><b>Paysage</b> : portion d'espace que l'on voit, résultat de l'interaction entre éléments naturels et aménagements humains.</div>
<div class="prop">Lecture d'un paysage : plans (premier plan, second plan, arrière-plan), éléments naturels / éléments humains, puis interprétation (activités, évolution).</div>
<div class="ex">Une photographie de station de ski : premier plan les pistes, second plan la station (hôtels, remontées), arrière-plan les sommets.</div>`,
      },
      {
        h: "Les espaces habités",
        html: `
<div class="def"><b>Espace urbain</b> : ville, forte densité. <b>Espace périurbain</b> : couronne autour de la ville, lotissements, mobilités quotidiennes vers la ville. <b>Espace rural</b> : faible densité, place de l'agriculture et des espaces naturels.</div>
<div class="def"><b>Densité de population</b> : nombre d'habitants par km². <b>Métropole</b> : grande ville qui concentre population, activités et pouvoirs de commandement.</div>
<div class="def"><b>Aménagement</b> : action d'un acteur (État, collectivités, entreprises) pour organiser un espace. <b>Développement durable</b> : répondre aux besoins d'aujourd'hui sans compromettre ceux des générations futures (économique, social, environnemental).</div>
<div class="ex">Lyon est une métropole ; les communes de lotissements autour d'elle sont périurbaines ; un village du Beaujolais est rural.</div>`,
      },
      {
        h: "Au cycle 2 : se repérer",
        html: `
<div class="prop">Du proche au lointain : se repérer dans la classe et l'école (plan), le quartier (photographie aérienne, plan), puis découvrir des espaces lointains (globe, planisphère). Vocabulaire spatial : devant, derrière, à gauche, à droite, au nord de…</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Confondre « grande échelle » (1/10 000, espace petit, détaillé) et « petite échelle » (1/1 000 000, espace vaste).</div>
<div class="piege">Faire un croquis sans légende organisée ou sans titre.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Carte : titre, légende, échelle, orientation.</li>
  <li>1/100 000 → 1 cm = 1 km · grande échelle = petit espace détaillé.</li>
  <li>Paysage : plans, éléments naturels et humains, interprétation.</li>
  <li>Urbain / périurbain / rural · densité · métropole · aménagement · développement durable.</li>
  <li>Cycle 2 : du proche au lointain.</li>
</ul>`,
  },
  {
    n: 4,
    slug: "emc",
    etape: "p-a-hg-emc",
    titre: "L'enseignement moral et civique (EMC)",
    illustrations: [],
    sections: [
      {
        h: "Les finalités",
        html: `
<div class="prop">L'EMC vise à <b>respecter autrui</b>, à <b>acquérir et partager les valeurs de la République</b> et à <b>construire une culture civique</b> (sensibilité, règle et droit, jugement, engagement).</div>
<div class="ex">Un conseil d'élèves qui décide d'une règle de la cour fait vivre la règle, le débat et l'engagement.</div>`,
      },
      {
        h: "Valeurs, principes et symboles de la République",
        html: `
<div class="def"><b>Valeurs</b> : liberté, égalité, fraternité (la devise), auxquelles s'ajoute la <b>laïcité</b>.</div>
<div class="def"><b>Laïcité</b> : principe qui sépare l'État et les religions ; l'État est neutre et garantit la liberté de conscience (croire ou ne pas croire). À l'école publique, la loi de 2004 interdit les signes religieux ostensibles pour les élèves ; la Charte de la laïcité à l'École (2013) est affichée.</div>
<div class="def"><b>Symboles</b> : le drapeau tricolore, la Marseillaise, Marianne, la devise, le 14 juillet (fête nationale).</div>
<div class="ex">Article 1er de la Constitution : « La France est une République indivisible, laïque, démocratique et sociale. »</div>`,
      },
      {
        h: "Les institutions (à connaître pour le cycle 3)",
        html: `
<table>
  <tr><th>Pouvoir</th><th>Qui ?</th><th>Rôle</th></tr>
  <tr><td>législatif</td><td>Parlement : Assemblée nationale (députés) et Sénat (sénateurs)</td><td>vote les lois</td></tr>
  <tr><td>exécutif</td><td>Président de la République, Premier ministre et gouvernement</td><td>fait appliquer les lois</td></tr>
  <tr><td>judiciaire</td><td>juges, tribunaux</td><td>juge selon la loi</td></tr>
</table>
<div class="def"><b>Commune</b> : conseil municipal élu, qui élit le maire ; compétences de proximité (écoles maternelles et élémentaires, état civil).</div>
<div class="def"><b>Citoyen</b> : personne qui a des droits (voter dès 18 ans…) et des devoirs (respecter la loi…) ; la citoyenneté européenne s'y ajoute (élections européennes).</div>`,
      },
      {
        h: "Les démarches en classe",
        html: `
<ul>
  <li><b>Débat réglé (ou argumenté)</b> : une question, des règles de prise de parole, des rôles (président, secrétaire), une synthèse.</li>
  <li><b>Conseil d'élèves / de coopération</b> : régler la vie de la classe, faire des propositions.</li>
  <li><b>Dilemme moral</b> : situation où deux valeurs s'opposent, pour exercer le jugement.</li>
  <li><b>Messages clairs</b> : gérer un conflit en exprimant ce qu'on ressent.</li>
  <li><b>Jeux de rôle, études de cas, engagement</b> (projets solidaires, élections de délégués).</li>
</ul>
<div class="ex">Dilemme : « Ton ami a copié pendant l'évaluation : le dis-tu à l'enseignant ? » (amitié ↔ honnêteté, justice).</div>`,
      },
      {
        h: "Pièges classiques",
        html: `
<div class="piege">Réduire l'EMC à un cours magistral sur les institutions : il se vit aussi dans la classe (règles, débats, conseils).</div>
<div class="piege">Laïcité ≠ interdiction des religions : elle garantit la liberté de croire ou de ne pas croire.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>Finalités : respecter autrui, valeurs de la République, culture civique.</li>
  <li>Liberté, égalité, fraternité + laïcité · symboles : drapeau, Marseillaise, Marianne, devise, 14 juillet.</li>
  <li>Laïcité : neutralité de l'État, liberté de conscience (lois 1905, 2004 ; Charte 2013).</li>
  <li>Législatif (Parlement), exécutif (Président, gouvernement), judiciaire (juges) · commune : maire.</li>
  <li>Démarches : débat réglé, conseil d'élèves, dilemme moral, messages clairs.</li>
</ul>`,
  },
  {
    n: 5,
    slug: "themes-du-cycle-3",
    etape: "p-a-hg-themes",
    titre: "Les thèmes d'histoire et de géographie du cycle 3",
    illustrations: [],
    sections: [
      {
        h: "Histoire",
        html: `
<table>
  <tr><th>Classe</th><th>Thèmes</th></tr>
  <tr><td>CM1</td><td>1. Et avant la France ? (traces de la Préhistoire, Celtes, Gaulois, Romains, Francs) · 2. Le temps des rois (Louis IX, François Ier, Henri IV, Louis XIV) · 3. Le temps de la Révolution et de l'Empire</td></tr>
  <tr><td>CM2</td><td>1. Le temps de la République (1848, 1870, 1880-1905) · 2. L'âge industriel en France · 3. La France, des guerres mondiales à l'Union européenne</td></tr>
  <tr><td>6e</td><td>La longue histoire de l'humanité et des migrations · Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire av. J.-C. · L'Empire romain dans le monde antique</td></tr>
</table>
<div class="ex">Thème « Le temps des rois » : Louis XIV et Versailles, à partir du portrait de Rigaud et d'un plan du château → la mise en scène du pouvoir absolu.</div>`,
      },
      {
        h: "Géographie",
        html: `
<table>
  <tr><th>Classe</th><th>Thèmes</th></tr>
  <tr><td>CM1</td><td>1. Découvrir le(s) lieu(x) où j'habite · 2. Se loger, travailler, se cultiver, avoir des loisirs en France · 3. Consommer en France</td></tr>
  <tr><td>CM2</td><td>1. Se déplacer · 2. Communiquer d'un bout à l'autre du monde grâce à l'Internet · 3. Mieux habiter</td></tr>
  <tr><td>6e</td><td>Habiter une métropole · Habiter un espace de faible densité · Habiter les littoraux · Le monde habité</td></tr>
</table>
<div class="ex">Thème « Consommer en France » : d'où vient l'eau du robinet ? Étude du circuit de l'eau de la commune (captage, station, réseau).</div>`,
      },
      {
        h: "Les compétences travaillées",
        html: `
<ul>
  <li><b>Se repérer dans le temps</b> : construire des repères historiques (frise, chronologie).</li>
  <li><b>Se repérer dans l'espace</b> : construire des repères géographiques (cartes, échelles).</li>
  <li><b>Raisonner, justifier une démarche</b> et les choix effectués.</li>
  <li><b>S'informer dans le monde du numérique</b>.</li>
  <li><b>Comprendre un document</b>.</li>
  <li><b>Pratiquer différents langages</b> (écrire, raconter, cartographier).</li>
  <li><b>Coopérer et mutualiser</b>.</li>
</ul>`,
      },
      {
        h: "Construire une séquence",
        html: `
<div class="prop">Une séquence = une problématique, 3 à 5 séances, chacune avec un objectif, des documents, une activité des élèves, une mise en commun et une trace écrite ; une évaluation finale (frise, carte, récit court).</div>
<div class="ex">« Pourquoi la Révolution française change-t-elle la vie des Français ? » : 1789 (Bastille, DDHC), la fin de la monarchie, Napoléon et le Code civil, bilan sur une frise.</div>`,
      },
    ],
    essentiel: `
<ul>
  <li>CM1 histoire : avant la France · temps des rois · Révolution et Empire.</li>
  <li>CM2 histoire : République · âge industriel · guerres mondiales à l'UE.</li>
  <li>CM1 géo : où j'habite · se loger, travailler · consommer.</li>
  <li>CM2 géo : se déplacer · communiquer (Internet) · mieux habiter.</li>
  <li>Séquence : problématique, documents, mise en commun, trace écrite, évaluation.</li>
</ul>`,
  },
];

module.exports = { FICHES_HGEMC };
