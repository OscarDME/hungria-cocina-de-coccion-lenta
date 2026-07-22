// ─────────────────────────────────────────────────────────────────────────────
// Doc §7: TODO el texto visible de la landing sale de este archivo.
// Los componentes solo leen de aquí; nunca tienen texto propio.
// Idioma: neerlandés (nl) — copy idéntico a la página original.
// Convención "*Rich": array de segmentos {t, b?, hi?} para énfasis inline
// (b = negrita, hi = resaltado verde). Se renderiza con RichText.astro.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  metadata: {
    lang: 'nl',
    title: 'Het beste 5⭐ slowcooker kookboek met 141 fantastische recepten',
    description:
      'Zonder kookstress rond 17.00 aan tafel? 141 heerlijke, gezonde slowcooker recepten met gewone supermarkt-ingrediënten en een korte voorbereiding. 16.500+ gezinnen koken mee en geven gemiddeld 5 sterren.',
    canonical: 'https://lassu-fozes.crearis.online',
    ogImage: '/og-cover.webp',
    ogType: 'website',
    ogLocale: 'nl_NL',
    siteName: 'Slowcooker kookboek',
  },

  a11y: {
    skipToContent: 'Ga naar hoofdinhoud',
    reviewsRegion: 'Reviews van kopers',
    valuePropsRegion: 'Voordelen in het kort',
    footerNav: 'Footer',
    starsLabel: 'sterren',
  },

  hero: {
    title: 'Slowcooker kookboek',
    subtitle: 'Zonder kookstress aan tafel aanschuiven? Dat wil toch iedereen!',
    socialProof: {
      strong: '16.500+ gezinnen',
      rest: ' koken met deze recepten en geven ze gemiddeld',
      stars: 5,
    },
    ctaPrimary: { label: 'Bestel als e-books (pdf)', sub: 'goedkoper én gelijk in je mail' },
    ctaSecondary: { label: 'Bestel hardcover kookboek', sub: 'levering Nederland' },
    ctaTertiary: { label: 'Bestel hardcover kookboek', sub: 'levering Buitenland' },
    noteRich: [
      { t: 'In het hardcover kookboek staan dezelfde recepten als in e-book deel 1 t/m deel 4 (' },
      { t: '141 recepten totaal', b: true },
      { t: '). De recepten uit e-book deel 5 en deel 6 (' },
      { t: '61 nieuwe recepten', b: true },
      { t: ') zijn alleen digitaal beschikbaar.' },
    ],
    pricePerRecipe: { pre: 'Slechts', amount: '€ 0,38', post: 'cent /recept' },
    book: {
      title: 'Slowcooken',
      subtitle: 'Simpel & Smaakvol',
      author: 'Joyce van de Pas',
      badge: '141 recepten',
      spine: 'SLOWCOOKEN',
    },
    imageAlt: 'Slowcooker gerecht met mals stoofvlees en verse groenten, klaar om te serveren',
  },

  valueProps: [
    {
      icon: 'pot',
      title: 'Om 17.00 zó aan tafel',
      text: 'Met ingrediënten uit de supermarkt én duidelijke uitleg.',
    },
    {
      icon: 'clock',
      title: 'Korte voorbereiding',
      text: 'In een handomdraai het eten op tafel.',
    },
    {
      icon: 'chef',
      title: 'Koken als een chefkok',
      text: 'Restaurant-like, maar dan zelf gemaakt!',
    },
  ],

  story: {
    heading: 'Stressvrij avondeten',
    paragraphs: [
      'Heb jij gebrek aan inspiratie als je het avondeten moet bedenken?',
      'En tijdens de avondspits tijd tekort om lekker, gevarieerd én gezond te koken?',
      'Ik herken die uitdagingen zo goed!',
    ],
    highlightRich: [
      { t: 'Maar tegenwoordig zet ik binnen no-time ' },
      { t: 'zalige slowcooker gerechten', hi: true },
      { t: ' op tafel én ' },
      { t: 'bespaar veel tijd', hi: true },
      { t: '!' },
    ],
    question: 'Ook stressvrij rond 17.00 aan tafel?',
    answer: 'Dan zijn mijn gezonde én lekkere recepten (141 in totaal) een uitkomst voor jou!',
    closer: "Gewoon 's avonds gelijk lekker aan tafel aanschuiven, wie wil dat nu niet?",
    imageAlt: 'Dampende slowcooker stoofpot met groenten, vers geserveerd op tafel',
  },

  buyerReviews: {
    heading: 'Wat andere kopers zeggen:',
    items: [
      {
        name: 'Mir',
        source: 'Trustpilot',
        rating: 5,
        title: 'Ik heb onlangs alle drie de ebooks…',
        quote:
          'Ik heb onlangs alle drie de ebooks gekocht en ben er helemaal weg van! Ik heb er al meerdere keren recepten uit gekookt in mijn crock pot. Het is allemaal even lekker en makkelijk. Ik kook graag voor meerdere dagen en dat gaat super. De recepten zijn duidelijk en ook de bereidingstijd etc klopt goed! Ik wacht op nummer 4!',
      },
      {
        name: 'roelina Watzema-Postma',
        source: 'Google',
        rating: 5,
        title: 'Zeker de moeite waard!',
        quote:
          'Ik heb paar weken terug het slowcooker boek gekocht en wat werd ik er blij van toen ik het boek open sloeg. Het zit boordevol lekkere recepten, het staat goed aangegeven welke stappen je moet volgen en hoelang het in de slowcooker maken. Je vindt ook alle recepten voorin het wordt super aangeven. Zeker de moeite waard om het boek te kopen!!',
      },
      {
        name: 'Annette Knijff',
        source: 'Trustpilot',
        rating: 5,
        title: 'Het 3e kookboek van Joyce…',
        quote:
          'Het 3e kookboek van Joyce natuurlijk ook gekocht en weer nog meer heerlijke recepten! Haar recepten zijn lekker, overzichtelijk, verse ingrediënten, verrassend! Ik krijg er veel inspiratie van en nog meer plezier om te koken!',
      },
      {
        name: 'Luenda',
        source: 'Trustpilot',
        rating: 4,
        title: 'Heerlijke recepten',
        quote:
          'Heerlijke recepten. Eerste recept was gelijk goed gelukt, met andere kookboeken was het niet altijd gelijk goed. Deze kookboeken zijn echt een aanrader.',
      },
      {
        name: 'H V',
        source: 'Google',
        rating: 5,
        title: 'Het beste boek over slowcooken',
        quote:
          'Heb het kookboek voor mijzelf gekocht en er staan enorm veel lekkere maar makkelijke recepten in. Stap voor stap uitgelegd met eenvoudige ingrediënten. En het lukt altijd! Op het gebied van slowcooken is dit het beste boek dat ik ben tegengekomen! Een aanrader!',
      },
      {
        name: 'Melanie van Dijk',
        source: 'Trustpilot',
        rating: 5,
        title: 'Heb deel 1 en 2 gekocht van slowcooker…',
        quote:
          'Heb deel 1 en 2 gekocht van slowcooker recepten wat een leuk recepten en lekker ik raad iedereen aan om deze te kopen en proberen hartstikke leuk!',
      },
    ],
  },

  inspiration: {
    heading: 'Nooit meer inspiratie gebrek',
    subheading: 'Herken jij dit?',
    paragraphs: [
      'Je struint uren op internet naar het perfecte gerecht om in de slowcooker te maken.... je denkt iets gevonden te hebben en het uiteindelijke resultaat? Een waterig gerecht met weinig smaak.',
      'Je bent niet de enige!',
      'Maar het kan anders.',
    ],
    highlight:
      'Met dit kookboek hoef je maar 2x per jaar hetzelfde te eten, zoveel variatie heb je op je aanrecht liggen.',
    cta: 'Ja, geef mij direct al die inspiratie!',
    priceLabel: 'Nú voor',
    price: '€ 54,95',
  },

  benefits: {
    heading: 'Jouw voordelen op een rijtje',
    items: [
      {
        title: "176 pagina's dik",
        text: "Vol heerlijke recepten (141 stuks!), maar ook met extra tips, kooktijden en meer slowcooker informatie.",
      },
      {
        title: 'Gezond en smaakvol',
        text: 'Gerechten met maximale smaak én op een gezonde basis met veel groenten zonder pakjes en zakjes.',
      },
      {
        title: 'Gewone ingrediënten',
        text: 'Alle ingrediënten voor mijn recepten zijn gewoon in de supermarkt verkrijgbaar.',
      },
      {
        title: 'Korte voorbereiding',
        text: 'Duidelijke stap-voor-stap uitleg en een korte voorbereidingstijd: zet jij zonder veel werk een heerlijke maaltijd op tafel.',
      },
    ],
    categories: [
      'Heerlijke stoofvlees recepten',
      'Verrassende soepen',
      "Zalig comfort food zoals risotto's, maar ook lekkere pasta-, kip- en visgerechten",
    ],
  },

  socialReviews: {
    heading: 'Wat ze op social media zeggen',
    items: [
      {
        name: 'Carola Van de Steeg',
        source: 'WhatsApp',
        quote:
          'Ja ben er echt zo blij mee, de witlof was echt heerlijk, de boerenkool zo lekker, billetjes in het gras echt een topper. Ik hou wel van de Hollandse pot. Maandag maak ik de chili con carne met een gepofte zoete aardappel.',
      },
      {
        name: 'Marjon Spaandonk',
        source: 'WhatsApp',
        quote:
          'Vandaag de Orzo weer op, die is zo ontzettend lekker, ik ben blij met je recepten!',
      },
      {
        name: 'Alice Bijl - Roeters',
        source: 'Facebook',
        quote:
          'Het is ongelooflijk lekker!! Ik heb nog wat sambal toegevoegd. Mijn man vind het restaurant waardig!!',
      },
      {
        name: 'Katrien Gorp',
        source: 'Facebook',
        quote:
          'Gisteren het boek binnen gekregen en vandaag de tomatensoep gemaakt. Goedgekeurd door mijn jongens dus die komt vaker op het menu.',
      },
      {
        name: 'Carla Vilé',
        source: 'Facebook',
        quote: 'Vandaag de soto heerlijk!!!!!',
      },
      {
        name: 'henkemifsud',
        source: 'Instagram',
        quote: 'Mooi boek met heerlijke recepten.',
      },
    ],
  },

  showcase: {
    heading: 'Tijd om iedereen omver te blazen met je gerechten!',
    items: [
      { title: 'Heerlijke stoofvlees recepten', imageAlt: 'Mals stoofvlees uit de slowcooker met wortels en kruiden' },
      { title: 'Heerlijke soepen', imageAlt: 'Verse, romige soep bereid in de slowcooker' },
    ],
  },

  finalCta: {
    kicker: 'Slowcooker chefkok worden met gemak!',
    heading: 'Laat de slowcooker je keuken veroveren!',
    lead: 'Ga voor heerlijke, gezonde én gemakkelijke maaltijden.',
    paragraphs: [
      'Verander je kookervaring met mijn slowcooker recepten. Ontdek zorgvuldig geselecteerde gerechten, handige tips en trucs, en geniet van smaakvolle maaltijden zonder gedoe.',
      'Laat je vandaag nog inspireren en bespaar zeeën van tijd met zoeken naar recepten én het koken ervan!',
    ],
    cta: 'Bestel nu dit prachtige kookboek',
    ctaNote: 'Nooit meer zoeken naar lekkere recepten!',
    imageAlt: 'Het slowcooker kookboek met een dampend gerecht ernaast',
  },

  ratings: {
    heading: 'Reviews',
    items: [
      {
        platform: 'Trustpilot',
        score: '4,8',
        max: '5',
        count: '208',
        countLabel: 'reviews',
        note: 'Geclaimd profiel',
      },
      {
        platform: 'Google',
        score: '4,8',
        max: '5',
        count: '89',
        countLabel: 'reviews',
        note: 'Mediabedrijf in Schijndel',
      },
    ],
  },

  testimonials: {
    heading: 'Dit zeggen anderen over mijn recepten',
    items: [
      {
        title: 'Iedereen eet zijn bord leeg!',
        quote:
          'Sinds ik met jouw kookboek kook eten ook mijn pubers hun bord áltijd leeg zonder te klagen, ze vinden alles lekker!',
      },
      {
        title: 'Ik hoef alleen nog maar te kiezen',
        quote:
          'Ik vind het fantastisch! Zoveel variatie dat ik alleen maar even hoef te bladeren om weer iets zaligs op tafel te zetten.',
      },
      {
        title: 'Gewoon top!',
        quote:
          'Nooit gedacht dat ik zo lekker zou kunnen koken, met zo weinig moeite. Het is gewoon top!',
      },
    ],
    cta: 'Bestel nu',
  },

  about: {
    heading: 'Iets meer over mij...',
    name: 'Joyce van de Pas',
    intro: 'Hi, ik ben Joyce van de Pas, slowcooker liefhebber van het eerste uur',
    paragraphs: [
      "Ik heb de slowcooker jaren geleden ooit ontvangen als cadeau en zo ben ik 'besmet' geraakt met het slowcookervirus.",
      'Al meer dan 14 jaar experimenteer ik er op los met de slowcooker en ik gebruik hem zeker 3-4 keer per week.',
      'Ik ben getrouwd en heb twee pubers; lang leve de drukke tijd van opgroeiende kinderen, verschillende roosters qua school en werk én alle diverse trainingstijden van sporten. Zonder de slowcooker zou het avondeten in ons gezin een stuk ingewikkelder en stressvoller zijn!',
      'Wil je meer over mij weten, over mijn kookboek, slowcooker community of online slowcooker cursus? Stuur me gerust een mailtje, ik help je graag verder!',
    ],
    cta: 'YESS, ik wil aan de slag met je kookboek',
    imageAlt: 'Vers en kleurrijk gerecht, met liefde thuis bereid met de slowcooker',
  },

  closing: {
    heading: 'Recepten in kookboek',
    primaryCta: 'Kookboek bestellen',
    altCta: 'Nee, ik ga liever voor de e-books',
  },

  footer: {
    brand: 'Slowcooker kookboek',
    author: 'door Joyce van de Pas',
    tagline: 'Stressvrij, gezond én lekker koken met de slowcooker — 141 recepten die altijd lukken.',
    copyright: '© 2026 Mamsatwork · Alle rechten voorbehouden.',
    links: [
      { label: 'Algemene voorwaarden', href: '#' },
      { label: 'Privacybeleid', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};
