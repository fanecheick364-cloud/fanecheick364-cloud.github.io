/* =====================================================================
   LES EBOOKS DE LA BOUTIQUE
   ---------------------------------------------------------------------
   Chaque ebook est un bloc { ... } séparé par une virgule.
   Pour ajouter un ebook : copiez un bloc entier, collez-le à la suite,
   puis changez les textes, le prix, la couverture et le lien Chariow.

   Champs importants :
   - id           : mot unique sans espace ni accent (sert dans l'adresse de la page)
   - prix         : nombre sans espace (ex. 5000)
   - prixBarre    : ancien prix SEULEMENT si une vraie promotion existe sur Chariow, sinon null
   - lienChariow  : le lien exact de la fiche produit sur Chariow
   - couverture   : nom du fichier image envoyé avec le site (ex. "couv-mon-livre.webp")
   - ordre        : position dans la liste (1 = en premier)
   ===================================================================== */
window.EBOOKS = [
  {
    id: "construire-au-pays",
    ordre: 1,
    titre: "Construire au pays sans se faire arnaquer",
    sousTitre: "Le guide de la diaspora",
    categorie: "Diaspora & immobilier",
    prix: 15000,
    prixBarre: null,
    lienChariow: "https://fitstznk.mychariow.shop/construire-au-pays",
    couverture: "couv-construire-au-pays.webp",
    couleurDos: "#2a160b",
    badge: "Bonus Excel inclus",
    accroche: "Votre maison au pays mérite mieux que « quelqu'un de confiance ». Elle mérite une méthode.",
    description:
      "Vérifier avant de payer, écrire avant de commencer, payer ce qui est fait, et séparer celui qui exécute de celui qui contrôle : ce guide vous donne la méthode complète, étape par étape, pensée pour ceux qui construisent à distance.",
    problemes: [
      "L'argent envoyé chaque mois pour un chantier qui n'avance pas",
      "Le terrain payé, puis réclamé par quelqu'un d'autre qui a « aussi des papiers »",
      "Le promoteur qui encaisse des acomptes pour des villas qui ne sortent jamais de terre",
      "La maison terminée, mais fissurée à la première saison des pluies"
    ],
    benefices: [
      "Les 7 pièges qui ruinent les projets de la diaspora, et la parade contre chacun",
      "Votre projet et votre budget en 3 enveloppes, sans oublier les frais cachés",
      "Les papiers d'un terrain expliqués : titre foncier, bail, ACD, ADU, permis d'occuper, lettre d'attribution…",
      "Un tableau des documents pour le Sénégal, la Côte d'Ivoire, le Cameroun et le Mali",
      "Les 12 vérifications avant d'acheter un terrain, et les signaux d'alerte",
      "Les 8 questions à poser à tout promoteur",
      "Choisir et contrôler l'architecte, l'entrepreneur et le contrôleur indépendant",
      "Lire et comparer des devis ligne par ligne",
      "Le contrat qui vous protège et le paiement par étapes vérifiées",
      "Envoyer l'argent sans jamais en perdre la trace",
      "Suivre votre chantier depuis l'étranger : rapports, photos datées, vidéos en direct",
      "Associer la famille sans conflit, et que faire si les choses tournent mal"
    ],
    inclus: [
      "Le guide complet : 79 pages, 15 chapitres",
      "10 checklists imprimables",
      "8 messages types prêts à copier",
      "Un plan d'action de 90 jours",
      "Bonus : le tableau Excel de suivi de chantier"
    ],
    contenu: [
      "Introduction · Le rêve, et pourquoi il tourne si souvent au cauchemar",
      "1 · Les 7 pièges qui ruinent les projets de la diaspora",
      "2 · Définir son projet et son budget avant de dépenser un franc",
      "3 · Comprendre les papiers d'un terrain",
      "4 · Acheter un terrain : les 12 vérifications",
      "5 · Acheter auprès d'un promoteur ou dans un lotissement",
      "6 · Constituer une équipe fiable",
      "7 · Les plans, les études et le permis",
      "8 · Lire et comparer les devis",
      "9 · Le contrat et le paiement par étapes",
      "10 · Envoyer l'argent sans perdre sa trace",
      "11 · Suivre son chantier depuis l'étranger",
      "12 · Les étapes du chantier et les contrôles qualité",
      "13 · La famille, la confiance et les conflits",
      "14 · Quand les choses tournent mal",
      "15 · Après la construction : réception, location et entretien",
      "Conclusion · Votre plan d'action en 90 jours",
      "Annexes · Checklists, messages types, questions aux professionnels, glossaire"
    ],
    pourQui:
      "Toute personne qui vit loin de son pays et veut acheter un terrain, faire construire ou sécuriser un chantier déjà commencé. La méthode est valable dans toute l'Afrique francophone.",
    mention:
      "Guide éducatif : il ne remplace pas l'avis d'un notaire, d'un avocat, d'un architecte ou d'un ingénieur. Informations par pays vérifiées en novembre 2026.",
    faq: [
      { q: "Mon projet est au Togo, au Bénin, en Guinée ou au Burkina Faso. Le guide m'est-il utile ?", r: "Oui. La méthode (vérifications, équipe, devis, contrat, paiements, suivi à distance) est valable partout. Pour les pays qui ne figurent pas dans le tableau détaillé, le chapitre 3 vous donne les 3 questions exactes à poser à un notaire pour connaître les règles locales." },
      { q: "J'ai déjà acheté mon terrain et mon chantier a commencé. Est-ce trop tard ?", r: "Non. Le chapitre 4 vous permet de vérifier votre terrain après coup, et les chapitres 9 à 12 vous aident à remettre de l'ordre dans un chantier en cours : contrat, paiements par étapes, rapport hebdomadaire et contrôle indépendant." },
      { q: "Le guide remplace-t-il un notaire ou un architecte ?", r: "Non, et il ne le prétend pas. Il vous apprend à bien les choisir, à leur poser les bonnes questions et à contrôler leur travail, pour éviter des erreurs qui peuvent coûter des millions." },
      { q: "Comment ouvrir le tableau Excel sur mon téléphone ?", r: "Avec l'application gratuite Microsoft Excel, ou avec Google Sheets (importez le fichier dans Google Drive). Toutes les formules fonctionnent sur ordinateur et sur téléphone." },
      { q: "Comment vais-je recevoir le guide ?", r: "Juste après le paiement, vous pouvez télécharger le PDF et le tableau Excel. Vous recevez aussi un e-mail avec le lien de téléchargement." }
    ]
  },

  {
    id: "arreter-de-trop-penser",
    ordre: 2,
    titre: "Arrêter de trop penser",
    sousTitre: "La méthode en 21 jours pour calmer ton mental",
    categorie: "Bien-être",
    prix: 5000,
    prixBarre: null,
    lienChariow: "https://fitstznk.mychariow.shop/arreter-de-trop-penser",
    couverture: "couv-arreter-de-trop-penser.webp",
    couleurDos: "#10142a",
    badge: "Carnet offert",
    accroche: "Ta tête rejoue tout en boucle ? Ce n'est pas un défaut. C'est une habitude, et elle se désapprend.",
    description:
      "Il est 1 heure du matin. Tu devrais dormir, mais ta tête rejoue la conversation de l'après-midi et imagine le pire pour demain. Des outils simples, issus des thérapies cognitives et comportementales (TCC), permettent de désapprendre cette habitude.",
    problemes: [
      "Les mêmes pensées tournent en boucle, surtout le soir",
      "Tu imagines le pire pour des choses qui ne sont pas encore arrivées",
      "Une décision te prend des semaines",
      "Le regard des autres et les conversations rejouées te fatiguent"
    ],
    benefices: [
      "Pourquoi ton cerveau tourne en boucle, et le moment exact où tu peux l'arrêter",
      "Sortir les pensées de ta tête : vidange mentale, écriture, défusion",
      "Le rendez-vous des soucis : l'outil le plus étudié contre l'inquiétude",
      "Trier tes soucis : problème réel, hypothétique ou hors de ton contrôle",
      "Vérifier tes pensées : les 8 pièges du cerveau et les 5 questions de recul",
      "Passer du « pourquoi » au « comment »",
      "Calmer le corps pour calmer la tête : respiration, relaxation, ancrage",
      "Décider sans tourner en rond (règle des 10/10/10)",
      "La nuit, quand les pensées empêchent de dormir",
      "Téléphone, réseaux sociaux et comparaison"
    ],
    inclus: [
      "Le livre : 60 pages, 16 chapitres",
      "31 techniques et exercices courts, dont 15 exercices guidés",
      "Un programme de 21 jours (10 à 25 minutes par jour)",
      "Une fiche SOS à garder dans ton téléphone",
      "30 questions pour prendre du recul",
      "Bonus : le carnet imprimable de 21 jours (32 pages)"
    ],
    contenu: [
      "Introduction · Ton cerveau n'est pas cassé",
      "1 · Trop penser : ce que c'est vraiment",
      "2 · Pourquoi ton cerveau tourne en boucle",
      "3 · Ton diagnostic : le journal des boucles",
      "4 · Outil 1 : sortir les pensées de ta tête",
      "5 · Outil 2 : le rendez-vous des soucis",
      "6 · Outil 3 : le tri des soucis",
      "7 · Outil 4 : vérifier tes pensées",
      "8 · Outil 5 : passer du « pourquoi » au « comment »",
      "9 · Outil 6 : calmer le corps pour calmer la tête",
      "10 · Outil 7 : revenir au présent",
      "11 · Décider sans tourner en rond",
      "12 · Le regard des autres et les conversations rejouées",
      "13 · La nuit, quand les pensées empêchent de dormir",
      "14 · Téléphone, réseaux sociaux et comparaison",
      "15 · L'argent, la famille, l'avenir : les grandes inquiétudes",
      "16 · Ton programme de 21 jours",
      "Conclusion · Garder le cap après 21 jours",
      "Annexes · La fiche SOS, 30 questions pour prendre du recul, pour aller plus loin"
    ],
    pourQui:
      "Étudiants, jeunes actifs, parents, entrepreneurs : toute personne dont la tête « ne s'arrête pas » et qui veut retrouver de la clarté, du calme et de l'énergie.",
    mention:
      "Ce livre est un outil d'auto-assistance. Il ne remplace pas un médecin ou un psychologue, et il t'indique clairement quand consulter.",
    faq: [
      { q: "Est-ce que ça marche vraiment ?", r: "Les outils du livre viennent des thérapies cognitives et comportementales (report des inquiétudes, résolution de problèmes, vérification des pensées, pensée concrète, relaxation), dont l'efficacité a été étudiée. Mais un livre ne fait rien tout seul : ce qui compte, c'est de pratiquer un peu chaque jour. C'est pour cela que le programme de 21 jours et le carnet sont inclus." },
      { q: "Combien de temps faut-il par jour ?", r: "Entre 10 et 25 minutes par jour pendant le programme. Certains outils (respiration, fiche SOS) prennent moins de 2 minutes." },
      { q: "Je dors mal à cause de mes pensées. Le livre peut-il m'aider ?", r: "Un chapitre entier est consacré à la nuit : fermer la journée, les règles du lit, que faire quand une pensée arrive à 3 heures du matin. Si tu dors mal depuis plusieurs semaines, le livre t'explique aussi quand consulter un médecin." },
      { q: "Est-ce que ce livre remplace un psychologue ?", r: "Non. Il t'aide à gérer les ruminations et les inquiétudes du quotidien. Si tes pensées t'empêchent de vivre normalement, ou si tu as des idées de te faire du mal, le livre t'indique de consulter sans attendre, avec des numéros d'aide." },
      { q: "Comment vais-je recevoir le livre ?", r: "Juste après le paiement, tu peux télécharger le livre et le carnet. Tu reçois aussi un e-mail avec le lien." }
    ]
  },

  {
    id: "revenus-ia",
    ordre: 3,
    titre: "Revenus & IA",
    sousTitre: "Le guide complet pour créer tes revenus avec ChatGPT et l'intelligence artificielle",
    categorie: "Intelligence artificielle",
    prix: 5000,
    prixBarre: null,
    lienChariow: "https://fitstznk.mychariow.shop/revenus-ia",
    couverture: "couv-revenus-ia.webp",
    couleurDos: "#0b0f24",
    badge: "",
    accroche: "Tout le monde parle de l'intelligence artificielle. Très peu de gens savent vraiment l'utiliser pour gagner de l'argent.",
    description:
      "Revenus & IA t'accompagne pas à pas, même sans expérience ni connaissances en informatique : écrire des prompts de professionnel, choisir ton modèle de revenus, trouver tes clients et fixer tes prix.",
    problemes: [
      "Tu entends parler de ChatGPT partout, sans savoir comment en tirer un revenu",
      "Tu ne sais pas quoi vendre, ni à quel prix",
      "Tu as peur que ce soit trop technique pour toi",
      "Tu ne sais pas comment trouver tes premiers clients"
    ],
    benefices: [
      "Comprendre l'IA sans jargon : ce qu'elle fait bien, et ce qu'elle fait mal",
      "La méthode RTCF pour écrire des prompts de professionnel",
      "Les 5 modèles de revenus avec l'IA, et comment choisir le tien",
      "Vendre des services autour de toi, avec les prix indicatifs en FCFA",
      "Travailler en freelance pour des clients à l'international",
      "Créer et vendre tes propres produits numériques",
      "Créer du contenu et le monétiser",
      "Trouver tes clients, fixer tes prix, te faire payer en sécurité",
      "Éviter les arnaques et les erreurs qui détruisent une réputation"
    ],
    inclus: [
      "Un livre de 43 pages, 13 chapitres",
      "Des exercices pratiques dans chaque chapitre",
      "60 prompts prêts à copier",
      "Un plan d'action de 30 jours"
    ],
    contenu: [
      "Introduction · Une révolution à portée de téléphone",
      "1 · Comprendre l'IA sans jargon",
      "2 · Ta boîte à outils",
      "3 · L'art du prompt",
      "4 · Choisir ton modèle de revenus",
      "5 · Vendre des services locaux",
      "6 · Le freelance international",
      "7 · Créer et vendre des produits numériques",
      "8 · Créer du contenu avec l'IA",
      "9 · L'IA dans ton emploi ou ton commerce",
      "10 · Trouver tes clients",
      "11 · Fixer tes prix et te faire payer",
      "12 · Éthique, droits et pièges à éviter",
      "13 · Ton plan d'action de 30 jours",
      "Annexe · 60 prompts prêts à l'emploi"
    ],
    pourQui:
      "Étudiants, jeunes diplômés, salariés, commerçants, et toute personne qui veut créer une source de revenus avec un téléphone et de la méthode.",
    mention:
      "Ce guide ne promet aucun revenu garanti : il te donne une méthode complète. Tes résultats dépendent de ton travail.",
    faq: [
      { q: "Je ne connais rien à l'informatique, est-ce pour moi ?", r: "Oui. Le livre part de zéro et explique tout simplement. Si tu sais utiliser WhatsApp, tu peux l'appliquer." },
      { q: "Faut-il payer des abonnements ?", r: "Non. Tous les outils présentés ont une version gratuite suffisante pour commencer." },
      { q: "Quelle différence avec « L'IA qui paie » ?", r: "« L'IA qui paie » est un guide de démarrage centré sur les services locaux. « Revenus & IA » est le guide complet : freelance international, produits numériques, contenu, 60 prompts et un plan de 30 jours." },
      { q: "Vais-je gagner de l'argent à coup sûr ?", r: "Personne ne peut le garantir. Le livre te donne une méthode complète et des outils concrets. Tes résultats dépendent de ta régularité." }
    ]
  },

  {
    id: "obtenir-le-pack-complet",
    ordre: 4,
    type: "pack",
    titre: "Pack IA",
    sousTitre: "L'IA qui paie + Revenus & IA",
    categorie: "Intelligence artificielle",
    prix: 7000,
    prixBarre: 9000,
    lienChariow: "https://fitstznk.mychariow.shop/obtenir-le-pack-complet",
    couverture: "couv-revenus-ia.webp",
    couverturesPack: ["couv-ia-qui-paie.webp", "couv-revenus-ia.webp"],
    couleurDos: "#0b0f24",
    badge: "Offre groupée",
    accroche: "Le duo complet pour apprendre à créer des revenus avec l'intelligence artificielle, du premier client à la stratégie à long terme.",
    description:
      "Commence par « L'IA qui paie » pour démarrer vite avec des services simples à vendre, puis passe à « Revenus & IA » pour aller plus loin. Les 2 livres sont téléchargeables immédiatement.",
    problemes: [
      "Tu veux démarrer vite, avec des services simples à vendre autour de toi",
      "Tu veux aussi construire une activité durable avec l'IA"
    ],
    benefices: [
      "L'IA qui paie (démarrer vite) : 30 services à vendre avec ChatGPT, 40 prompts prêts à copier, les prix en FCFA et un plan d'action de 14 jours",
      "Revenus & IA (aller plus loin) : 13 chapitres pour maîtriser l'IA et choisir ton modèle de revenus, 60 prompts et un plan de 30 jours",
      "Tu économises 2 000 FCFA par rapport à l'achat des deux livres séparément"
    ],
    inclus: [
      "L'IA qui paie : guide de 31 pages",
      "Revenus & IA : livre de 43 pages, 13 chapitres",
      "40 + 60 prompts prêts à copier",
      "Un plan de 14 jours, puis un plan de 30 jours"
    ],
    contenu: [],
    pourQui:
      "Toute personne qui veut apprendre à créer des revenus avec l'IA, du premier client à la stratégie à long terme, même sans connaissances en informatique.",
    mention:
      "Aucun revenu n'est garanti : ces guides te donnent une méthode, tes résultats dépendent de ton travail.",
    faq: [
      { q: "Quelle est la différence entre les deux livres ?", r: "L'IA qui paie est un guide de démarrage rapide centré sur les services locaux. Revenus & IA est le guide complet : freelance, produits numériques, contenu et stratégie." },
      { q: "Je n'y connais rien en informatique, est-ce pour moi ?", r: "Oui. Les deux livres partent de zéro. Si tu sais utiliser WhatsApp, tu peux les appliquer." },
      { q: "Faut-il payer des abonnements ?", r: "Non. Tous les outils présentés ont une version gratuite suffisante pour commencer." },
      { q: "Comment je reçois les livres ?", r: "Immédiatement après le paiement, sur la page de confirmation et par e-mail." }
    ]
  },

  {
    id: "ia-qui-paie",
    ordre: 5,
    titre: "L'IA qui paie",
    sousTitre: "30 services à vendre avec ChatGPT depuis ton téléphone",
    categorie: "Intelligence artificielle",
    prix: 4000,
    prixBarre: null,
    lienChariow: "https://fitstznk.mychariow.shop/ia-qui-paie",
    couverture: "couv-ia-qui-paie.webp",
    couleurDos: "#06332a",
    badge: "",
    accroche: "Tu as un téléphone et ChatGPT ? Tu as déjà tout ce qu'il faut pour vendre des services.",
    description:
      "Autour de toi, des commerçants veulent des statuts WhatsApp qui vendent, des étudiants cherchent un CV propre, des restaurants veulent un menu en français et en anglais. Ce guide pratique te montre quoi vendre, à qui, à quel prix, et comment trouver tes premiers clients.",
    problemes: [
      "Tu cherches un revenu en plus, sans savoir par où commencer",
      "Tu ne sais pas quels services vendre avec l'IA",
      "Tu as peur de mal fixer tes prix",
      "Tu ne sais pas comment aborder tes premiers clients"
    ],
    benefices: [
      "30 services à vendre, avec la cible et le prix en FCFA pour chacun : CV, statuts WhatsApp, logos, menus, traductions, plans d'affaires…",
      "40 prompts prêts à copier pour ChatGPT, Claude ou Gemini",
      "Les messages exacts pour contacter tes premiers clients sur WhatsApp et Facebook",
      "La méthode des 3 prix pour vendre sans brader ton travail",
      "Un plan d'action de 14 jours, jour par jour"
    ],
    inclus: [
      "Un guide pratique de 31 pages",
      "40 prompts prêts à copier",
      "Un plan d'action de 14 jours"
    ],
    contenu: [
      "Ce que l'IA peut (vraiment) te rapporter",
      "Ta boîte à outils 100 % gratuite",
      "La méthode en 4 étapes",
      "30 services à vendre avec l'IA",
      "Trouver tes 5 premiers clients",
      "Fixer tes prix et te faire payer",
      "40 prompts prêts à copier",
      "Les 7 erreurs qui font perdre des clients",
      "Ton plan d'action de 14 jours"
    ],
    pourQui:
      "Étudiants, jeunes diplômés, personnes qui cherchent un revenu en plus, commerçants qui veulent comprendre l'IA. Aucune compétence technique nécessaire.",
    mention: "Ce guide te donne une méthode. Tes résultats dépendent de ton travail.",
    faq: [
      { q: "Faut-il payer ChatGPT ?", r: "Non. Tous les outils du guide ont une version gratuite suffisante pour commencer." },
      { q: "Je ne suis pas fort en informatique, c'est pour moi ?", r: "Oui. Si tu sais utiliser WhatsApp, tu peux appliquer ce guide. Tout est expliqué pas à pas." },
      { q: "Comment je reçois le guide ?", r: "Juste après le paiement, tu peux télécharger le PDF sur la page de confirmation et par e-mail." },
      { q: "Est-ce que je vais gagner de l'argent à coup sûr ?", r: "Personne ne peut le garantir. Le guide te donne une méthode et des outils concrets. Tes résultats dépendent du nombre de clients que tu contactes et de la qualité de ton travail." }
    ]
  },

  {
    id: "independance-argent",
    ordre: 6,
    titre: "Libre financièrement",
    sousTitre: "Gérer, épargner, multiplier tes revenus et construire ton indépendance",
    categorie: "Argent",
    prix: 5000,
    prixBarre: null,
    lienChariow: "https://fitstznk.mychariow.shop/independance-argent",
    couverture: "couv-independance-argent.webp",
    couleurDos: "#0c1d16",
    badge: "",
    accroche: "Et si tu n'avais plus jamais peur de la fin du mois, d'une maladie ou d'une perte d'emploi ?",
    description:
      "La liberté financière n'est pas réservée aux héritiers ni aux gros salaires. C'est le résultat de décisions simples, répétées dans le temps. Ce livre te montre le chemin complet, étape par étape.",
    problemes: [
      "L'argent manque avant la fin du mois",
      "Un imprévu (maladie, perte d'emploi) peut tout faire basculer",
      "Les dettes t'empêchent d'avancer",
      "Tu ne sais pas où investir sans prendre de risques inutiles"
    ],
    benefices: [
      "Les 5 niveaux de la liberté financière, et où tu te situes",
      "Faire ton bilan : valeur nette, taux d'épargne, actifs et passifs",
      "Le budget qui libère : « payer d'abord soi-même » et la méthode des 3 comptes",
      "Construire ton fonds d'urgence et te protéger (santé, documents)",
      "Sortir des dettes et utiliser le crédit intelligemment",
      "Augmenter ton revenu principal et négocier",
      "Les 7 sources de revenus et comment en ajouter",
      "Lancer une activité secondaire rentable et calculer ta vraie marge",
      "Les bases de l'investissement : risque, diversification, intérêts composés",
      "Les placements en Afrique francophone : épargne, obligations, BRVM, immobilier, tontines",
      "Reconnaître et éviter les arnaques",
      "Ton plan sur 12 mois"
    ],
    inclus: [
      "Un livre de 35 pages, 14 chapitres",
      "Des exercices et des tableaux à remplir",
      "Un plan d'action sur 12 mois"
    ],
    contenu: [
      "Introduction · La liberté n'est pas une question de chance",
      "1 · Comprendre la liberté financière",
      "2 · Faire ton bilan financier",
      "3 · Ta relation avec l'argent",
      "4 · Le budget qui libère",
      "5 · Te protéger avant de construire",
      "6 · Dettes : sortir du piège, utiliser le levier",
      "7 · Augmenter ton revenu principal",
      "8 · Multiplier tes sources de revenus",
      "9 · Lancer une activité secondaire rentable",
      "10 · Les bases de l'investissement",
      "11 · Investir en Afrique francophone",
      "12 · Les arnaques et pièges à éviter",
      "13 · Protéger et transmettre",
      "14 · Ton plan sur 12 mois"
    ],
    pourQui:
      "Toute personne qui veut reprendre le contrôle de son argent et construire son indépendance, quel que soit son revenu de départ.",
    mention: "Livre éducatif : il ne constitue pas un conseil en investissement personnalisé.",
    faq: [
      { q: "Je gagne peu, ce livre est-il pour moi ?", r: "Oui. Il est pensé pour commencer avec n'importe quel revenu : l'habitude compte plus que le montant." },
      { q: "Le livre me dit-il dans quoi investir ?", r: "Il t'apprend les principes, les familles de placements et leurs risques, pour que tu décides en connaissance de cause. Ce n'est pas un conseil d'investissement personnalisé." },
      { q: "Est-ce adapté à l'Afrique francophone ?", r: "Oui : FCFA, Mobile Money, tontines, BRVM, foncier, solidarité familiale et arnaques courantes dans la région." },
      { q: "Comment je reçois le livre ?", r: "Immédiatement après le paiement, sur la page de confirmation et par e-mail." }
    ]
  },

  {
    id: "argent-sous-controle",
    ordre: 7,
    titre: "Mon argent sous contrôle",
    sousTitre: "Le système budget 30 jours + tableau Excel",
    categorie: "Argent",
    prix: 3500,
    prixBarre: null,
    lienChariow: "https://fitstznk.mychariow.shop/argent-sous-controle",
    couverture: "couv-argent-sous-controle.webp",
    couleurDos: "#0a1a4a",
    badge: "Tableau Excel inclus",
    accroche: "Le 10 du mois, ton salaire a déjà disparu ? Ce n'est pas (seulement) une question de montant.",
    description:
      "Crédit, transport, petites dépenses, demandes de la famille, cotisations, imprévus… Sans plan, l'argent part avant même que tu t'en rendes compte. Voici un système simple, pensé pour la vie réelle en Afrique : salaire modeste, solidarité familiale, tontines, Mobile Money.",
    problemes: [
      "Ton salaire disparaît avant la fin du mois",
      "Tu ne sais pas exactement où part ton argent",
      "Les demandes de la famille et les imprévus déséquilibrent ton budget",
      "Tu n'arrives pas à épargner avec un petit revenu"
    ],
    benefices: [
      "Comprendre où part ton argent",
      "La méthode des 5 enveloppes",
      "Épargner avec un petit revenu",
      "Sortir des dettes et dire non sans blesser",
      "Un tableau Excel automatique : tu notes tes dépenses, il calcule ce qu'il te reste dans chaque enveloppe",
      "Un calculateur d'objectifs : combien épargner chaque mois pour ton projet",
      "Un défi 30 jours : une petite action par jour pour changer tes habitudes"
    ],
    inclus: [
      "Le guide PDF de 18 pages",
      "Le tableau Excel automatique",
      "Le calculateur d'objectifs",
      "Le défi 30 jours",
      "Des fiches à remplir sur papier"
    ],
    contenu: [
      "Pourquoi ton argent disparaît avant la fin du mois",
      "Le diagnostic en 7 jours",
      "La méthode des 5 enveloppes",
      "La famille, les cotisations et les demandes d'argent",
      "Épargner même avec un petit revenu",
      "Sortir des dettes",
      "Augmenter tes revenus",
      "Le défi 30 jours",
      "Fiches à remplir"
    ],
    pourQui:
      "Salariés, étudiants, commerçants, jeunes couples : toute personne qui veut arrêter d'être à court d'argent avant la fin du mois.",
    mention:
      "Ce guide propose une méthode d'organisation personnelle. Il ne remplace pas un conseil financier professionnel.",
    faq: [
      { q: "Je n'ai pas d'ordinateur, est-ce que le tableau Excel marche sur téléphone ?", r: "Oui. Ouvre-le avec l'application gratuite Microsoft Excel ou Google Sheets. Tu peux aussi utiliser les fiches papier du guide." },
      { q: "Ça marche avec un petit salaire ?", r: "Oui, le guide a été pensé pour ça. Les exemples partent d'un revenu de 150 000 FCFA et la méthode s'adapte à tous les montants." },
      { q: "J'utilise une autre monnaie, c'est adapté ?", r: "La méthode fonctionne partout. Dans le tableau, il suffit de changer le symbole de la devise." },
      { q: "Comment je reçois les fichiers ?", r: "Juste après le paiement, sur la page de confirmation et par e-mail." }
    ]
  },

  {
    id: "elever-sans-crier",
    ordre: 8,
    titre: "Élever sans crier",
    sousTitre: "Éduquer son enfant intelligemment, de 0 à 15 ans",
    categorie: "Famille & couple",
    prix: 4000,
    prixBarre: null,
    lienChariow: "https://fitstznk.mychariow.shop/elever-sans-crier",
    couverture: "couv-elever-sans-crier.webp",
    couleurDos: "#0b2129",
    badge: "",
    accroche: "Tu cries, tu menaces, tu répètes dix fois la même chose… et rien ne change ? Tu n'es pas seul.",
    description:
      "Personne ne nous apprend à être parent. Pourtant, il existe des méthodes simples pour éduquer avec fermeté et bienveillance, sans cris ni coups.",
    problemes: [
      "Tu répètes dix fois la même chose sans être écouté",
      "Les colères et les crises te dépassent",
      "Tu ne veux plus crier ni frapper, mais tu ne sais pas comment faire autrement",
      "Les écrans et l'adolescence t'inquiètent"
    ],
    benefices: [
      "Comprendre le cerveau de ton enfant (et pourquoi il fait des crises)",
      "Les grandes étapes du développement de 0 à 15 ans",
      "Le lien affectif et le « temps spécial » de 15 minutes",
      "Construire sa confiance en lui",
      "Accompagner les colères et les émotions",
      "Poser des limites efficaces sans crier ni frapper",
      "Parler pour que ton enfant écoute",
      "Autonomie et responsabilités selon l'âge",
      "Réussite scolaire et goût de la lecture",
      "Les écrans : règles et sécurité en ligne",
      "L'adolescence sans rupture",
      "Protéger ton enfant (harcèlement, abus, santé)"
    ],
    inclus: [
      "Un livre de 35 pages, 14 chapitres",
      "Des exercices et des outils pratiques dans chaque chapitre",
      "Un plan de 30 jours"
    ],
    contenu: [
      "Introduction · Le plus beau métier du monde, sans mode d'emploi",
      "1 · Comprendre le cerveau de l'enfant",
      "2 · Les grandes étapes du développement",
      "3 · Le lien, fondation de tout",
      "4 · Construire sa confiance en lui",
      "5 · Accompagner les émotions",
      "6 · Poser des limites sans crier ni frapper",
      "7 · Parler pour que l'enfant écoute",
      "8 · Autonomie et responsabilités",
      "9 · Réussite scolaire et goût d'apprendre",
      "10 · Les écrans",
      "11 · Transmettre des valeurs",
      "12 · L'adolescence",
      "13 · Protéger son enfant",
      "14 · Prendre soin de toi, parent"
    ],
    pourQui: "Pour les mamans, les papas, les grands-parents et tous ceux qui élèvent un enfant.",
    mention: "",
    faq: [
      { q: "Pour quel âge est ce livre ?", r: "De la naissance à 15 ans, avec des repères adaptés à chaque âge." },
      { q: "Éduquer sans frapper, ce n'est pas tout laisser faire ?", r: "Non. Le livre enseigne la fermeté bienveillante : des règles claires, des routines et des conséquences logiques appliquées avec calme." },
      { q: "Est-ce adapté à notre culture ?", r: "Oui. Le livre respecte les valeurs familiales, la place des grands-parents et de la famille élargie, et t'aide à transmettre tes propres valeurs." },
      { q: "Comment je reçois le livre ?", r: "Immédiatement après le paiement, sur la page de confirmation et par e-mail." }
    ]
  },

  {
    id: "amour-qui-dure",
    ordre: 9,
    titre: "Un amour qui dure",
    sousTitre: "Le guide pour réussir son mariage",
    categorie: "Famille & couple",
    prix: 4000,
    prixBarre: null,
    lienChariow: "https://fitstznk.mychariow.shop/amour-qui-dure",
    couverture: "couv-amour-qui-dure.webp",
    couleurDos: "#2a0b18",
    badge: "",
    accroche: "Vous vous aimez… mais les disputes reviennent, les silences s'installent et la fatigue prend le dessus ?",
    description:
      "Beaucoup de couples ne se séparent pas parce qu'ils ont cessé de s'aimer, mais parce qu'ils n'ont jamais appris à s'aimer au quotidien. Bonne nouvelle : cela s'apprend.",
    problemes: [
      "Les mêmes disputes reviennent",
      "Les silences s'installent",
      "L'argent, la belle-famille ou le téléphone créent des tensions",
      "La fatigue et le quotidien éteignent la complicité"
    ],
    benefices: [
      "Les 4 piliers d'un couple solide et le « compte émotionnel »",
      "Communiquer vraiment : l'écoute active et la formule en « je »",
      "Se disputer sans se détruire : les 4 comportements à bannir et l'art de la réparation",
      "Parler d'argent dans le couple sans conflit",
      "Gérer la famille et les belles-familles avec respect et fermeté",
      "Garder la tendresse et la complicité au fil des années",
      "Partager les tâches et la charge mentale",
      "Devenir parents sans perdre le couple",
      "La confiance, la jalousie et le téléphone",
      "Traverser les grandes crises, pardonner et reconstruire"
    ],
    inclus: [
      "Un livre de 33 pages, 13 chapitres",
      "Des exercices à faire à deux dans chaque chapitre",
      "Un plan de 30 jours pour votre couple"
    ],
    contenu: [
      "Introduction · L'amour se construit",
      "1 · Les fondations d'un couple solide",
      "2 · Se connaître pour mieux aimer",
      "3 · Communiquer vraiment",
      "4 · Traverser les conflits sans se détruire",
      "5 · L'argent dans le couple",
      "6 · Familles et belles-familles",
      "7 · Garder la flamme",
      "8 · Partager la vie quotidienne",
      "9 · Devenir parents sans perdre le couple",
      "10 · Confiance, jalousie et téléphones",
      "11 · Traverser les grandes crises",
      "12 · Pardonner et reconstruire",
      "13 · Les rituels d'un couple heureux"
    ],
    pourQui: "Pour les fiancés, les jeunes mariés et les couples qui veulent se retrouver.",
    mention: "",
    faq: [
      { q: "Faut-il le lire à deux ?", r: "C'est l'idéal, mais pas obligatoire. Un seul conjoint qui change sa façon de communiquer change déjà beaucoup la relation." },
      { q: "Est-ce adapté à toutes les croyances ?", r: "Oui. Le livre respecte les convictions de chacun et se concentre sur ce qui fonctionne dans tous les couples : respect, communication, engagement et tendresse." },
      { q: "Notre couple traverse une crise grave, cela peut-il aider ?", r: "Le livre donne des repères et des exercices utiles, mais en cas de crise profonde, un conseiller conjugal ou un professionnel est recommandé. En cas de violence, la sécurité passe avant tout." },
      { q: "Comment je reçois le livre ?", r: "Immédiatement après le paiement, sur la page de confirmation et par e-mail." }
    ]
  }
];
