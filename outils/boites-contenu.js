// Contenu des boîtes à questions (13/11/2026, demande de Clément : « les questions ne sont pas très
// explicites » + paquets de français et d'histoire-géographie-EMC).
// - QUESTIONS_MATHS : une vraie question pour chaque définition de outils/ran-maths-contenu.js
//   (la réponse et l'exemple restent ceux de la fiche des définitions).
// - FRANCAIS, HGEMC : [groupe, question, réponse, exemple]. Français : vocabulaire de la
//   « Grammaire du français — Terminologie grammaticale » (Eduscol, 2020). Histoire-géographie-EMC :
//   programmes du cycle 3 et repères attendus à l'épreuve d'application.

const QUESTIONS_MATHS = {
  // RAN 1
  "Droite, segment, demi-droite": "Quelle différence fais-tu entre (AB), [AB], [AB) et AB ?",
  "Points alignés": "Quand dit-on que des points sont alignés ?",
  "Droites parallèles / perpendiculaires": "Quand deux droites sont-elles parallèles ? perpendiculaires ?",
  Milieu: "Comment définit-on le milieu d'un segment [AB] ?",
  Médiatrice: "Qu'est-ce que la médiatrice d'un segment ? Quelle propriété ont ses points ?",
  Cercle: "Comment définit-on un cercle ? Que sont son rayon et son diamètre ?",
  "Distance d'un point à une droite": "Comment mesure-t-on la distance d'un point A à une droite (d) ?",
  "Angles complémentaires / supplémentaires": "Que sont deux angles complémentaires ? supplémentaires ?",
  "Hauteur d'un triangle": "Qu'est-ce qu'une hauteur dans un triangle ?",
  "Médiane d'un triangle": "Qu'est-ce qu'une médiane dans un triangle ?",
  // RAN 2
  "Symétrique par rapport à une droite": "Quand dit-on que M' est le symétrique de M par rapport à une droite (d) ?",
  "Symétrique par rapport à un point": "Quand dit-on que M' est le symétrique de M par rapport à un point O ?",
  "Axe / centre de symétrie d'une figure": "Qu'est-ce qu'un axe de symétrie d'une figure ? un centre de symétrie ?",
  "Polygone régulier": "Qu'est-ce qu'un polygone régulier ?",
  "Triangle isocèle": "Qu'est-ce qu'un triangle isocèle ? Quelle propriété ont ses angles ?",
  Parallélogramme: "Qu'est-ce qu'un parallélogramme ? Quelle propriété ont ses diagonales ?",
  Rectangle: "Qu'est-ce qu'un rectangle ? Quelle propriété ont ses diagonales ?",
  Losange: "Qu'est-ce qu'un losange ? Quelle propriété ont ses diagonales ?",
  Carré: "Qu'est-ce qu'un carré (définition à partir du rectangle et du losange) ?",
  Trapèze: "Qu'est-ce qu'un trapèze ?",
  // RAN 3
  "Somme, différence, produit, quotient": "Comment s'appellent le résultat et les nombres de chacune des quatre opérations ?",
  "Chiffre / nombre de": "Dans 3 457, quelle différence entre « le chiffre des centaines » et « le nombre de centaines » ?",
  "Division euclidienne": "Qu'est-ce que la division euclidienne de a par b ? Quelles sont ses deux conditions ?",
  "Dividende, diviseur, quotient, reste": "Dans a = b × q + r, comment s'appellent a, b, q et r ?",
  Commutativité: "Que dit la commutativité ? Pour quelles opérations est-elle vraie ?",
  Associativité: "Que dit l'associativité ? Pour quelles opérations est-elle vraie ?",
  Distributivité: "Énonce la distributivité de la multiplication sur l'addition.",
  "Conservation des écarts": "Qu'est-ce que la conservation des écarts ? À quoi sert-elle ?",
  "Conservation du quotient": "Qu'est-ce que la conservation du quotient ? À quoi sert-elle ?",
  "Ordre de grandeur": "Qu'est-ce qu'un ordre de grandeur et à quoi sert-il ?",
  // RAN 4
  "Multiple / diviseur": "Quand dit-on que a est un multiple de b (ou que b est un diviseur de a) ?",
  "Nombre pair / impair": "Comment écrit-on un nombre pair ? un nombre impair ?",
  "Nombre premier": "Qu'est-ce qu'un nombre premier ? 1 est-il premier ?",
  "Décomposition en facteurs premiers": "Qu'est-ce que la décomposition d'un entier en produit de facteurs premiers ?",
  PGCD: "Qu'est-ce que le PGCD de deux entiers ? À quoi sert-il ?",
  PPCM: "Qu'est-ce que le PPCM de deux entiers ? À quoi sert-il ?",
  "Nombres premiers entre eux": "Quand dit-on que deux entiers sont premiers entre eux ?",
  "Critère de divisibilité": "Qu'est-ce qu'un critère de divisibilité ? Donne celui par 9.",
  "Fraction irréductible": "Qu'est-ce qu'une fraction irréductible ?",
  // RAN 5
  Fraction: "Dans une fraction a/b, comment s'appellent a et b ?",
  "Fraction-quotient": "Que signifie a/b au sens « quotient » ?",
  "Fraction décimale": "Qu'est-ce qu'une fraction décimale ?",
  "Nombre décimal": "Qu'est-ce qu'un nombre décimal ?",
  "Nombre rationnel": "Qu'est-ce qu'un nombre rationnel ?",
  "Nombre irrationnel": "Qu'est-ce qu'un nombre irrationnel ? Donne deux exemples.",
  Inverse: "Qu'est-ce que l'inverse d'un nombre non nul ?",
  Opposé: "Qu'est-ce que l'opposé d'un nombre ?",
  "Écriture scientifique": "Qu'est-ce que l'écriture scientifique d'un nombre ?",
  Puissance: "Que signifient aⁿ, a⁰ et a⁻ⁿ ?",
  // RAN 6
  Périmètre: "Qu'est-ce que le périmètre d'une figure ?",
  Aire: "Qu'est-ce que l'aire d'une figure ?",
  "Hauteur relative à une base": "Qu'est-ce que la hauteur relative à une base (triangle, parallélogramme) ?",
  "Disque / cercle": "Quelle différence entre un cercle et un disque ? Quelles formules leur associer ?",
  "Hectare, are": "Combien valent 1 are et 1 hectare en m² ?",
  "Agrandissement / réduction de rapport k": "Dans un agrandissement ou une réduction de rapport k, que deviennent les longueurs et les aires ?",
  // RAN 7
  "Grandeurs proportionnelles": "Quand deux grandeurs sont-elles proportionnelles ?",
  "Coefficient de proportionnalité": "Qu'est-ce qu'un coefficient de proportionnalité ?",
  "Linéarité additive / multiplicative": "Que disent les propriétés de linéarité additive et multiplicative ?",
  "Quatrième proportionnelle": "Qu'est-ce qu'une quatrième proportionnelle et comment la calcule-t-on ?",
  "Vitesse moyenne": "Comment définit-on une vitesse moyenne ?",
  Échelle: "Qu'est-ce que l'échelle d'un plan ou d'une carte ?",
  // RAN 8
  "Expression littérale": "Qu'est-ce qu'une expression littérale ?",
  Réduire: "Que signifie « réduire » une expression ?",
  Développer: "Que signifie « développer » une expression ?",
  Factoriser: "Que signifie « factoriser » une expression ?",
  "Identités remarquables": "Énonce les trois identités remarquables.",
  "Contre-exemple": "Qu'est-ce qu'un contre-exemple et à quoi sert-il ?",
  // RAN 9
  Polyèdre: "Qu'est-ce qu'un polyèdre ?",
  "Face, arête, sommet": "Que sont les faces, les arêtes et les sommets d'un solide ?",
  "Prisme droit": "Qu'est-ce qu'un prisme droit ?",
  Pyramide: "Qu'est-ce qu'une pyramide ? Comment calcule-t-on son volume ?",
  Patron: "Qu'est-ce que le patron d'un solide ?",
  "Volume / contenance": "Quelle différence entre volume et contenance ? Combien vaut 1 dm³ en litres ?",
  // RAN 10
  Équation: "Qu'est-ce qu'une équation ?",
  "Solution d'une équation": "Qu'est-ce qu'une solution d'une équation ?",
  Fonction: "Qu'est-ce qu'une fonction ?",
  "Image / antécédent": "Que sont l'image et un antécédent par une fonction f ?",
  "Fonction linéaire": "Qu'est-ce qu'une fonction linéaire ? Comment est sa représentation graphique ?",
  "Fonction affine": "Qu'est-ce qu'une fonction affine ? Que représentent a et b ?",
  // RAN 11
  Pourcentage: "Que signifie t % ? Comment prend-on t % d'une quantité ?",
  "Coefficient multiplicateur": "Qu'est-ce qu'un coefficient multiplicateur (hausse et baisse de t %) ?",
  "Taux d'évolution": "Comment calcule-t-on un taux d'évolution ?",
  "Évolutions successives": "Comment calcule-t-on l'effet de plusieurs évolutions successives ?",
  "Point de pourcentage": "Qu'est-ce qu'un point de pourcentage ?",
  // RAN 12
  "Cellule, plage": "Dans un tableur, qu'est-ce qu'une cellule ? une plage ?",
  Formule: "Dans un tableur, qu'est-ce qu'une formule ?",
  "Référence relative / absolue": "Quelle différence entre une référence relative et une référence absolue dans un tableur ?",
  Algorithme: "Qu'est-ce qu'un algorithme ?",
  Variable: "En programmation, qu'est-ce qu'une variable ?",
  Boucle: "En programmation, qu'est-ce qu'une boucle ?",
  "Instruction conditionnelle": "En programmation, qu'est-ce qu'une instruction conditionnelle ?",
};

const FRANCAIS = [
  // Classes de mots
  ["Classes de mots", "Quelles sont les classes de mots variables et invariables ?", "Variables : nom, déterminant, adjectif, pronom, verbe. Invariables : adverbe, préposition, conjonction (de coordination et de subordination), interjection.", "« Les » (déterminant) varie : le, la, les ; « souvent » (adverbe) ne varie jamais."],
  ["Classes de mots", "Qu'est-ce qu'un nom ? Quelle différence entre nom commun et nom propre ?", "Mot qui désigne un être, une chose, une idée ; il a un genre et varie le plus souvent en nombre. Le nom propre désigne un être ou un lieu unique et prend une majuscule.", "« chat », « liberté » (noms communs) ; « Marseille », « Clément » (noms propres)."],
  ["Classes de mots", "Qu'est-ce qu'un déterminant ? Cite plusieurs sortes de déterminants.", "Mot qui précède le nom et forme avec lui un groupe nominal ; il porte le genre et le nombre. Sortes : article (défini, indéfini, partitif), possessif, démonstratif, interrogatif, exclamatif, indéfini, numéral.", "« le » chien, « une » idée, « du » pain, « mon » livre, « cette » école, « trois » élèves."],
  ["Classes de mots", "Qu'est-ce qu'un adjectif (qualificatif) ? Quelles fonctions peut-il occuper ?", "Mot qui exprime une caractéristique du nom et s'accorde avec lui. Fonctions : épithète (dans le GN), attribut du sujet (après un verbe attributif), apposé (détaché).", "« une robe rouge » (épithète) ; « la robe est rouge » (attribut du sujet)."],
  ["Classes de mots", "Qu'est-ce qu'un pronom ? Cite plusieurs sortes de pronoms.", "Mot qui remplace un nom, un groupe nominal ou une proposition, ou qui désigne un participant à la communication. Sortes : personnel, possessif, démonstratif, relatif, interrogatif, indéfini.", "« Léa lit. Elle aime ce livre. » : « elle » (pronom personnel) reprend « Léa »."],
  ["Classes de mots", "Qu'est-ce qu'un verbe ? Comment le reconnaître ?", "Mot qui se conjugue : il varie en personne, en nombre, en temps et en mode. C'est le noyau du groupe verbal. Test : il change si l'on change le temps ou la personne.", "« Il chante / il chantait / nous chantons » : « chanter » est un verbe."],
  ["Classes de mots", "Qu'est-ce qu'un adverbe ?", "Mot invariable qui modifie le sens d'un verbe, d'un adjectif, d'un autre adverbe ou de la phrase entière.", "« Il court vite » ; « très grand » ; « Heureusement, il est venu »."],
  ["Classes de mots", "Qu'est-ce qu'une préposition ?", "Mot invariable qui introduit un complément (groupe nominal, pronom, infinitif) et le relie à un autre mot.", "« à », « de », « pour », « avec », « sans » : « un verre de lait », « penser à toi »."],
  ["Classes de mots", "Quelle différence entre conjonction de coordination et conjonction de subordination ?", "La conjonction de coordination relie deux éléments de même niveau (mais, ou, et, donc, or, ni, car). La conjonction de subordination introduit une proposition subordonnée (que, quand, si, parce que, lorsque…).", "« Il pleut mais je sors » (coordination) ; « Je sors quand il fait beau » (subordination)."],
  // Fonctions
  ["Fonctions", "Qu'est-ce que le sujet ? Comment l'identifier ?", "Fonction du groupe qui commande l'accord du verbe (personne, nombre). Test : on peut l'encadrer par « c'est… qui ».", "« Les enfants jouent » : « c'est les enfants qui jouent » → « les enfants » est sujet."],
  ["Fonctions", "Qu'est-ce qu'un complément du verbe ? Quelles sortes distingue-t-on ?", "Complément qui dépend du verbe et ne peut généralement être ni supprimé ni déplacé. Complément d'objet direct (sans préposition), indirect (avec préposition), et complément de mesure, de lieu… essentiels.", "« Elle lit un roman » (COD) ; « Il parle à sa sœur » (COI)."],
  ["Fonctions", "Qu'est-ce qu'un complément de phrase (anciennement complément circonstanciel) ?", "Complément qui porte sur toute la phrase : on peut le supprimer et le déplacer. Il précise le temps, le lieu, la cause, le but, la manière…", "« Demain, nous irons à la plage » : « demain » peut être supprimé ou déplacé (« Nous irons demain… »)."],
  ["Fonctions", "Qu'est-ce que l'attribut du sujet ?", "Fonction d'un mot ou groupe relié au sujet par un verbe attributif (être, sembler, devenir, paraître, rester…) ; il exprime une caractéristique du sujet et s'accorde avec lui.", "« Ces élèves semblent fatigués » : « fatigués » est attribut du sujet « ces élèves »."],
  ["Fonctions", "Qu'est-ce qu'un complément du nom ?", "Fonction d'un groupe qui complète le nom à l'intérieur du groupe nominal, le plus souvent introduit par une préposition.", "« un livre de géographie », « la maison de mes parents »."],
  ["Fonctions", "Qu'est-ce qu'une épithète ?", "Fonction de l'adjectif placé directement à côté du nom qu'il qualifie, à l'intérieur du groupe nominal.", "« un grand jardin fleuri » : « grand » et « fleuri » sont épithètes de « jardin »."],
  // Phrase
  ["Phrase", "Quels sont les types et les formes de phrase ?", "Types : déclaratif, interrogatif, impératif (injonctif) ; l'exclamation se combine avec eux. Formes : affirmative / négative, active / passive, neutre / emphatique.", "« Ne viens pas ! » : type impératif, forme négative."],
  ["Phrase", "Quelle différence entre phrase simple et phrase complexe ?", "Phrase simple : un seul verbe conjugué (une seule proposition). Phrase complexe : plusieurs propositions, donc plusieurs verbes conjugués.", "« Le chat dort. » (simple) ; « Le chat dort car il est fatigué. » (complexe)."],
  ["Phrase", "Quelles sont les trois façons de relier des propositions dans une phrase complexe ?", "Juxtaposition (signe de ponctuation), coordination (conjonction de coordination), subordination (mot subordonnant : conjonction, pronom relatif…).", "« Il pleut, je reste » / « Il pleut donc je reste » / « Je reste parce qu'il pleut »."],
  ["Phrase", "Qu'est-ce qu'une proposition subordonnée relative ?", "Proposition introduite par un pronom relatif (qui, que, dont, où, lequel…) ; elle complète un nom ou un pronom, son antécédent.", "« Le livre que tu m'as prêté est passionnant » : antécédent « livre »."],
  ["Phrase", "Qu'est-ce qu'une proposition subordonnée conjonctive ?", "Proposition introduite par une conjonction de subordination ; elle peut être complément du verbe (complétive, introduite par « que ») ou complément de phrase (circonstancielle : quand, parce que, si…).", "« Je pense qu'il viendra » (complétive) ; « Il viendra s'il fait beau » (circonstancielle)."],
  // Verbe : temps et modes
  ["Verbe", "Quels sont les modes personnels et non personnels du verbe ?", "Modes personnels (variant en personne) : indicatif, subjonctif, impératif. Modes non personnels : infinitif, participe (et gérondif). La terminologie de 2020 range le conditionnel parmi les temps de l'indicatif.", "« qu'il vienne » (subjonctif) ; « venir » (infinitif) ; « venu » (participe passé)."],
  ["Verbe", "Quelle différence entre temps simple et temps composé ?", "Temps simple : verbe seul, radical + terminaison. Temps composé : auxiliaire avoir ou être conjugué + participe passé ; il exprime l'accompli.", "« il mange » (présent, simple) ; « il a mangé » (passé composé, composé)."],
  ["Verbe", "Qu'est-ce que le radical et la terminaison d'un verbe conjugué ?", "Le radical porte le sens du verbe (il peut varier) ; la terminaison porte les marques de personne, de nombre, de temps et de mode.", "« nous chant-ions » : radical « chant- », terminaison « -ions » (imparfait, 1re personne du pluriel)."],
  ["Verbe", "Quelles valeurs ont l'imparfait et le passé simple dans un récit ?", "Passé simple : actions de premier plan, ponctuelles, qui font avancer le récit. Imparfait : arrière-plan (descriptions, actions en cours, habitudes).", "« Il faisait nuit (arrière-plan) quand le loup surgit (premier plan). »"],
  ["Verbe", "Quelles sont les principales valeurs du présent de l'indicatif ?", "Présent d'énonciation (au moment où l'on parle), présent d'habitude, de vérité générale, de narration (historique), et présent à valeur de futur ou de passé proche.", "« L'eau bout à 100 °C » (vérité générale) ; « Je pars demain » (futur proche)."],
  ["Verbe", "Comment trouver le groupe d'un verbe ?", "1er groupe : infinitif en -er (sauf aller). 2e groupe : infinitif en -ir avec « -issons » à la 1re personne du pluriel du présent. 3e groupe : tous les autres verbes (et aller).", "« finir → nous finissons » (2e groupe) ; « partir → nous partons » (3e groupe)."],
  // Accords
  ["Accords", "Quelle est la règle d'accord du verbe avec son sujet ?", "Le verbe s'accorde en personne et en nombre avec son sujet, même si le sujet est éloigné ou placé après le verbe.", "« Les feuilles de cet arbre tombent » : le verbe s'accorde avec « feuilles », pas avec « arbre »."],
  ["Accords", "Comment s'accorde le participe passé employé avec être ?", "Il s'accorde en genre et en nombre avec le sujet.", "« Elles sont parties tôt. »"],
  ["Accords", "Comment s'accorde le participe passé employé avec avoir ?", "Il ne s'accorde pas avec le sujet ; il s'accorde avec le COD seulement si celui-ci est placé avant le verbe.", "« J'ai lu ces lettres » ; « Ces lettres, je les ai lues »."],
  ["Accords", "Comment s'accordent les mots dans le groupe nominal ?", "Le déterminant et l'adjectif s'accordent en genre et en nombre avec le nom noyau du groupe nominal.", "« de belles histoires anciennes » : féminin pluriel partout."],
  // Lexique
  ["Lexique", "Qu'est-ce que la dérivation ? la composition ?", "Dérivation : former un mot en ajoutant un préfixe et/ou un suffixe à un radical. Composition : former un mot en associant deux mots (ou plus).", "« re-faire », « chant-eur » (dérivation) ; « porte-monnaie », « pomme de terre » (composition)."],
  ["Lexique", "Qu'est-ce qu'une famille de mots ?", "Ensemble de mots formés à partir d'un même radical et liés par le sens.", "« terre, terrain, terrestre, enterrer, atterrir »."],
  ["Lexique", "Qu'est-ce qu'un mot polysémique ?", "Mot qui a plusieurs sens ; c'est le contexte qui permet de choisir le bon sens.", "« une souris » (animal / objet informatique) ; « la tête » (corps / chef)."],
  ["Lexique", "Que sont des synonymes et des antonymes ?", "Synonymes : mots de même classe et de sens proche. Antonymes : mots de même classe et de sens contraire.", "« rapide / véloce » (synonymes) ; « monter / descendre » (antonymes)."],
  ["Lexique", "Qu'est-ce qu'un champ lexical ?", "Ensemble des mots qui se rapportent à un même thème dans un texte.", "Champ lexical de la mer : vague, marin, écume, rivage, naviguer."],
  ["Lexique", "Quelle différence entre sens propre et sens figuré ?", "Sens propre : sens premier, concret, du mot. Sens figuré : sens imagé obtenu par transfert (métaphore…).", "« un cœur qui bat » (propre) ; « avoir un cœur de pierre » (figuré)."],
  // Orthographe
  ["Orthographe", "Comment distinguer « a » et « à » ?", "« a » est le verbe avoir (on peut le remplacer par « avait ») ; « à » est une préposition.", "« Il a faim » (il avait faim) ; « Il va à l'école »."],
  ["Orthographe", "Comment distinguer « et » et « est » ?", "« est » est le verbe être (remplaçable par « était ») ; « et » est une conjonction de coordination (remplaçable par « et puis »).", "« Le ciel est bleu et le soleil brille »."],
  ["Orthographe", "Comment distinguer « ces », « ses », « c'est », « s'est » ?", "« ces » : démonstratif (ceux-là) ; « ses » : possessif (les siens) ; « c'est » : cela est ; « s'est » : pronom réfléchi + être (verbe pronominal).", "« Ses amis ? Ces enfants-là. C'est lui qui s'est trompé. »"],
  ["Orthographe", "Quelle différence entre orthographe lexicale et orthographe grammaticale ?", "Orthographe lexicale : la façon d'écrire un mot, indépendamment de la phrase (lettres muettes, doubles consonnes). Orthographe grammaticale : les marques d'accord et de conjugaison qui dépendent de la phrase.", "« enfant » (lexicale : t muet) ; « les enfants jouent » (grammaticale : -s, -ent)."],
];

const HGEMC = [
  // Histoire : repères (programmes du cycle 3)
  ["Histoire — repères", "Que s'est-il passé en 52 av. J.-C. ?", "Défaite de Vercingétorix face à Jules César à Alésia : la Gaule est conquise par Rome (Gaule romaine, gallo-romains).", "Thème « Et avant la France ? » (CM1)."],
  ["Histoire — repères", "Qui est Clovis et pourquoi est-il un repère ?", "Roi des Francs, baptisé vers 496-500 (date discutée) : il s'appuie sur l'Église ; on en fait souvent le premier roi chrétien des Francs.", "Thème « Et avant la France ? » (CM1)."],
  ["Histoire — repères", "Que s'est-il passé en 800 ?", "Charlemagne, roi des Francs, est couronné empereur à Rome par le pape.", "Repère du Moyen Âge (CM1)."],
  ["Histoire — repères", "Quel repère est associé à l'année 987 ?", "Hugues Capet devient roi des Francs : début de la dynastie des Capétiens.", "Thème « Le temps des rois » (CM1)."],
  ["Histoire — repères", "Qu'est-ce que l'édit de Nantes (1598) ?", "Édit signé par Henri IV qui met fin aux guerres de Religion en accordant aux protestants une liberté de culte limitée.", "Thème « Le temps des rois » (CM1)."],
  ["Histoire — repères", "Quel roi incarne la monarchie absolue ? Donne les dates de son règne.", "Louis XIV (1643-1715), qui gouverne seul et fait de Versailles le centre du pouvoir.", "Thème « Le temps des rois » (CM1)."],
  ["Histoire — repères", "Que s'est-il passé le 14 juillet 1789 et le 26 août 1789 ?", "14 juillet 1789 : prise de la Bastille, symbole du début de la Révolution. 26 août 1789 : Déclaration des droits de l'homme et du citoyen.", "Thème « Le temps de la Révolution et de l'Empire » (CM1)."],
  ["Histoire — repères", "Quand la Première République est-elle proclamée ?", "En septembre 1792 (21-22 septembre), après l'abolition de la monarchie.", "Thème « Le temps de la Révolution et de l'Empire » (CM1)."],
  ["Histoire — repères", "Quels repères sont associés à l'année 1804 ?", "Napoléon Bonaparte est sacré empereur des Français ; le Code civil est promulgué.", "Thème « Le temps de la Révolution et de l'Empire » (CM1)."],
  ["Histoire — repères", "Que s'est-il passé en 1848 ?", "Abolition définitive de l'esclavage dans les colonies françaises (décret porté par Victor Schœlcher) et instauration du suffrage universel masculin (IIe République).", "Thème « Le temps de la République » (CM2)."],
  ["Histoire — repères", "Que sont les lois Ferry (1881-1882) ?", "Lois qui rendent l'école primaire gratuite, obligatoire (de 6 à 13 ans) et laïque.", "« L'école primaire au temps de Jules Ferry » (CM2)."],
  ["Histoire — repères", "Que dit la loi de 1905 ?", "Loi de séparation des Églises et de l'État : la République assure la liberté de conscience et ne reconnaît ni ne finance aucun culte. Fondement de la laïcité.", "Thème « Le temps de la République » (CM2) et EMC."],
  ["Histoire — repères", "Quelles sont les dates des deux guerres mondiales ?", "Première Guerre mondiale : 1914-1918 (armistice du 11 novembre 1918). Seconde Guerre mondiale : 1939-1945 (capitulation allemande le 8 mai 1945).", "Thème « La France, des guerres mondiales à l'Union européenne » (CM2)."],
  ["Histoire — repères", "Quand les femmes obtiennent-elles le droit de vote en France ?", "Par l'ordonnance du 21 avril 1944 ; elles votent pour la première fois en 1945.", "« Des républicains, des républicaines » (CM2)."],
  ["Histoire — repères", "Que s'est-il passé en 1957 ?", "Signature des traités de Rome, qui créent la Communauté économique européenne (CEE), ancêtre de l'Union européenne.", "Thème « La France, des guerres mondiales à l'Union européenne » (CM2)."],
  ["Histoire — repères", "Qu'est-ce que la Ve République ?", "Régime politique actuel de la France, fondé par la Constitution de 1958 (Charles de Gaulle).", "Repère du XXe siècle (CM2)."],
  // Histoire : notions et démarche
  ["Histoire — démarche", "Qu'est-ce qu'une source (document) primaire et une source secondaire ?", "Source primaire : document produit à l'époque étudiée (archive, objet, témoignage). Source secondaire : travail produit après coup à partir des sources (manuel, livre d'historien).", "Une lettre de poilu (primaire) ; une page de manuel sur 1914-1918 (secondaire)."],
  ["Histoire — démarche", "Qu'est-ce qu'une frise chronologique et à quoi sert-elle ?", "Représentation linéaire et orientée du temps, avec une échelle régulière, sur laquelle on place des dates et des périodes. Elle aide à se repérer et à situer les événements les uns par rapport aux autres.", "Placer Clovis, Charlemagne et Louis XIV sur une frise graduée en siècles."],
  ["Histoire — démarche", "Comment trouve-t-on le siècle d'une date ?", "On prend le nombre de centaines et on ajoute 1 (pour les années après J.-C. qui ne finissent pas par 00).", "1789 → 17 + 1 = XVIIIe siècle ; 1515 → XVIe siècle ; 1900 → XIXe siècle."],
  ["Histoire — démarche", "Quelles sont les grandes périodes de l'histoire ?", "Préhistoire, Antiquité (vers −3000, invention de l'écriture), Moyen Âge (476), Temps modernes (1492), époque contemporaine (1789).", "Chaque période commence par un repère conventionnel."],
  // Géographie
  ["Géographie", "Qu'est-ce qu'un paysage en géographie ?", "Portion d'espace visible, organisée et transformée par les sociétés, que l'on décrit avec des plans (premier plan, arrière-plan) et des éléments naturels et humains.", "Décrire une photo de littoral : plage, port, immeubles, routes."],
  ["Géographie", "Quelle différence entre espace urbain, périurbain et rural ?", "Urbain : ville dense (bâti continu). Périurbain : couronne autour de la ville, résidentielle, liée à la ville par les mobilités. Rural : campagne, faible densité.", "Un lotissement à 20 km d'une ville où l'on travaille = espace périurbain."],
  ["Géographie", "Qu'est-ce qu'une métropole ?", "Grande ville qui concentre population, activités et pouvoirs de décision, et qui rayonne sur un vaste territoire.", "Paris, Lyon, Marseille."],
  ["Géographie", "Qu'est-ce que la mobilité ?", "Ensemble des déplacements des personnes (quotidiens, de loisirs, migrations).", "Les trajets domicile-travail en voiture ou en transports en commun."],
  ["Géographie", "Qu'est-ce que le développement durable ?", "Développement qui répond aux besoins du présent sans compromettre ceux des générations futures ; il combine trois piliers : économique, social, environnemental.", "Un écoquartier, des pistes cyclables, le tri des déchets."],
  ["Géographie", "Qu'est-ce que l'échelle d'une carte ? Qu'est-ce que changer d'échelle ?", "Rapport entre une distance sur la carte et la distance réelle. Changer d'échelle : étudier un phénomène à différents niveaux (local, national, mondial).", "1/25 000 : 1 cm sur la carte = 250 m dans la réalité."],
  ["Géographie", "Qu'est-ce qu'un croquis et que doit-il comporter ?", "Représentation simplifiée d'un espace pour en montrer l'organisation ; il comporte un titre, une légende organisée et une orientation.", "Croquis d'un quartier : zones d'habitat, de commerce, axes de transport."],
  ["Géographie", "Quels sont les thèmes de géographie du CM1 et du CM2 ?", "CM1 : découvrir le(s) lieu(x) où j'habite ; se loger, travailler, se cultiver, avoir des loisirs en France ; consommer en France. CM2 : se déplacer ; communiquer d'un bout à l'autre du monde grâce à l'Internet ; mieux habiter.", "Le thème « habiter » structure la géographie du cycle 3."],
  // EMC
  ["EMC", "Qu'est-ce que la laïcité ?", "Principe qui garantit la liberté de conscience, l'égalité de tous devant la loi quelles que soient leurs convictions, et la neutralité de l'État et de l'école publique.", "Charte de la laïcité à l'École (2013), affichée dans les établissements."],
  ["EMC", "Quels sont les symboles de la République française ?", "La devise « Liberté, Égalité, Fraternité », le drapeau tricolore, La Marseillaise (hymne), Marianne, le 14 Juillet (fête nationale).", "Ces symboles sont travaillés dès le cycle 2."],
  ["EMC", "Quelles sont les valeurs de la République ?", "Liberté, égalité, fraternité, auxquelles s'ajoutent la laïcité et le refus de toutes les discriminations.", "Elles figurent dans la Constitution de 1958."],
  ["EMC", "Qu'est-ce que la Convention internationale des droits de l'enfant (CIDE) ?", "Texte adopté par l'ONU en 1989 (ratifié par la France en 1990) qui reconnaît des droits aux enfants : éducation, protection, santé, expression…", "Le 20 novembre est la journée internationale des droits de l'enfant."],
  ["EMC", "Quelle différence entre une règle et une loi ?", "La règle organise la vie d'un groupe (classe, école, jeu) ; la loi est votée par le Parlement et s'applique à tous les citoyens. Toutes deux fixent des droits et des devoirs.", "Le règlement de la classe (règle) ; la loi sur l'obligation d'instruction (loi)."],
  ["EMC", "Qu'est-ce qu'une discrimination ?", "Traitement inégal et défavorable d'une personne en raison d'un critère interdit par la loi (origine, sexe, handicap, religion…).", "Refuser un élève dans un jeu à cause de son origine."],
  ["EMC", "Qu'est-ce qu'un débat réglé (ou argumenté) en EMC ?", "Discussion organisée sur une question, avec des règles de prise de parole, où les élèves argumentent et écoutent les autres ; il développe l'esprit critique et le respect d'autrui.", "Débat : « Faut-il des règles dans la cour de récréation ? »"],
  ["EMC", "Qu'est-ce que la citoyenneté ?", "Statut qui donne des droits (voter, être protégé par la loi) et des devoirs (respecter la loi, participer à la vie collective) ; à l'école, on s'y prépare (conseil d'élèves, délégués).", "Élire les délégués de classe."],
];

module.exports = { QUESTIONS_MATHS, FRANCAIS, HGEMC };
