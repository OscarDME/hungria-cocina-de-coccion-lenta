// ─────────────────────────────────────────────────────────────────────────────
// Doc §7: TODO el texto visible de la landing sale de este archivo.
// Los componentes solo leen de aquí; nunca tienen texto propio.
// Idioma: húngaro (hu) — transcreación adaptada al mercado húngaro.
// Convención "*Rich": array de segmentos {t, b?, hi?} para énfasis inline
// (b = negrita, hi = resaltado verde). Se renderiza con RichText.astro.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  metadata: {
    lang: 'hu',
    title: 'A legjobb 5⭐ lassúfőző receptkönyv 141 fantasztikus recepttel',
    description:
      'Stresszmentes vacsorát szeretnél pontban este 7-re? 141 ízletes, egészséges lassúfőző recept mindennapi bolti alapanyagokból, gyors előkészülettel. Több mint 16 500 család főz már ezekből, átlagosan 5 csillagos értékeléssel.',
    canonical: 'https://bavno-gotvene.crearis.online',
    ogImage: '/og-cover.webp',
    ogType: 'website',
    ogLocale: 'hu_HU',
    siteName: 'Lassúfőző Receptkönyv',
  },

  a11y: {
    skipToContent: 'Ugrás a fő tartalomra',
    reviewsRegion: 'Vásárlói vélemények',
    valuePropsRegion: 'Előnyök röviden',
    footerNav: 'Lábléc navigáció',
    starsLabel: 'csillag',
  },

  hero: {
    title: 'Lassúfőző Receptkönyv',
    subtitle: 'Stressz és kapkodás nélkül leülni az asztalhoz? Mindenki erről álmodik!',
    socialProof: {
      strong: 'Több mint 16 500 család',
      rest: ' főz már ezekből a receptekből, és az átlagos értékelésük',
      stars: 5,
    },
    ctaPrimary: { label: 'Rendelés e-könyvként (PDF)', sub: 'kedvezőbb ár, azonnal a postaládádban' },
    ctaSecondary: { label: 'Rendelés nyomtatott könyvként', sub: 'magyarországi kiszállítással' },
    ctaTertiary: { label: 'Rendelés nyomtatott könyvként', sub: 'külföldi kiszállítással' },
    noteRich: [
      { t: 'A nyomtatott könyv ugyanazokat a recepteket tartalmazza, mint az 1-4. e-könyvek (' },
      { t: 'összesen 141 recept', b: true },
      { t: '). Az 5. és 6. e-könyvek receptjei (' },
      { t: '61 új recept', b: true },
      { t: ') csak digitális formátumban érhetők el.' },
    ],
    pricePerRecipe: { pre: 'Mindössze', amount: '21 Ft', post: 'receptenként' },
    book: {
      title: 'Lassú Főzés',
      subtitle: 'Egyszerűen és Finoman',
      author: 'Szabó Judit',
      badge: '141 recept',
      spine: 'LASSÚ FŐZÉS',
    },
    imageAlt: 'Lassúfőzőben készült szaftos marhahús friss zöldségekkel, tálalásra készen',
  },

  valueProps: [
    {
      icon: 'pot',
      title: 'A vacsora pontban 19:00-kor kész',
      text: 'Hétköznapi bolti alapanyagokból dolgozunk, világos, pontos és egyszerű utasításokkal.',
    },
    {
      icon: 'clock',
      title: 'Minimális előkészület',
      text: 'Szó szerint pillanatok alatt az asztalra varázsolhatod a család kedvenc ételét.',
    },
    {
      icon: 'chef',
      title: 'Főzz úgy, mint egy igazi séf',
      text: 'Olyan ízélmény, mintha egy elegáns étteremben lennél, de mégis otthon készítetted!',
    },
  ],

  story: {
    heading: 'Vacsora idegeskedés nélkül',
    paragraphs: [
      'Veletek is előfordul, hogy teljesen leblokkoltok, amikor ki kell találni, mi legyen a vacsora?',
      'A munka utáni őrületben meg egyszerűen nem marad idő valami finomat, változatosat és egészségeset összedobni?',
      'Annyira megértem ezt!',
    ],
    highlightRich: [
      { t: 'De ma már, a lassúfőzőnek hála, pillanatok alatt ' },
      { t: 'elképesztően finom ételeket', hi: true },
      { t: ' tálalok, és közben ' },
      { t: 'rengeteg időt spórolok', hi: true },
      { t: '!' },
    ],
    question: 'Te is nyugodt vacsorára vágysz, pontban 19:00-kor?',
    answer: 'Akkor az én 141 egészséges és ízletes receptem igazi megváltás lesz számodra!',
    closer: 'Csak leültök az asztalhoz, és élvezitek a finom falatokat – ki ne vágyna erre?',
    imageAlt: 'Lassúfőzőből frissen tálalt, gőzölgő, ízletes zöldséges ragu',
  },

  buyerReviews: {
    heading: 'Ezt mondják azok, akik már megvették:',
    items: [
      {
        name: 'Mária',
        source: 'Trustpilot',
        rating: 5,
        title: 'Nemrég megvettem mindhárom e-könyvet…',
        quote:
          'Megvettem az összes e-könyvet, és egyenesen imádom! Már jó párszor főztem belőlük a Crock-Potomban. Minden olyan egyszerűen és finoman sikerül. Szeretek több napra előre főzni, és erre is szuperül működik. A receptek nagyon érthetőek, a főzési idők pedig hajszálpontosak! Alig várom a 4. részt!',
      },
      {
        name: 'Tóth Réka',
        source: 'Google',
        rating: 5,
        title: 'Mindenképp megéri!',
        quote:
          'Pár hete vettem meg a könyvet, és amint kinyitottam, egyből mosolyogni kezdtem. Tele van szuper receptekkel, a lépések tökéletesen vannak elmagyarázva, ahogy az is, mennyi időre kell a lassúfőzőbe tenni az ételt. Az elején van egy szuper praktikus receptlista. Határozottan megér minden fillért!!',
      },
      {
        name: 'Németh Anikó',
        source: 'Trustpilot',
        rating: 5,
        title: 'Judit harmadik könyve…',
        quote:
          'Természetesen Judit harmadik könyvét is beszereztem, és ismét el vagyok bűvölve! A receptjei iszonyatosan finomak, átláthatóak, friss alapanyagokból dolgoznak, és csomó meglepő ízkombináció van bennük! Hatalmas inspirációt ad, és most még nagyobb örömmel állok neki főzni!',
      },
      {
        name: 'Tímea',
        source: 'Trustpilot',
        rating: 4,
        title: 'Szuper receptek',
        quote:
          'Nagyon finom dolgok vannak benne. Már az első receptem is tökéletesen sikerült, ami más könyveknél nem mindig van így elsőre. Két kézzel ajánlom.',
      },
      {
        name: 'Gábor V.',
        source: 'Google',
        rating: 5,
        title: 'A legjobb könyv a lassú főzéshez',
        quote:
          'Magamnak vettem, és rengeteg egyszerű, de szuper finom recept van benne. Minden lépésről lépésre van elmagyarázva, könnyen beszerezhető hozzávalókkal. És tényleg mindig sikerül! Ez a legjobb lassúfőző könyv, amivel eddig találkoztam. Erősen ajánlom!',
      },
      {
        name: 'Varga Melinda',
        source: 'Trustpilot',
        rating: 5,
        title: 'Megvettem az 1. és 2. részt…',
        quote:
          'Megrendeltem az első két részt, és te jó ég, micsoda receptek vannak bennük! Olyan finomak, mindenkinek ajánlom, hogy vegye meg és próbálja ki, hatalmas élmény!',
      },
    ],
  },

  inspiration: {
    heading: 'Vége a „mit főzzek ma?” dilemmának',
    subheading: 'Ismerős a helyzet?',
    paragraphs: [
      'Órákig bújod a netet, hogy megtaláld a tökéletes ételt a lassúfőzőbe... azt hiszed, találtál valamit, és a végeredmény? Egy íztelen, vizenyős trutyi.',
      'Nem vagy egyedül!',
      'De van más megoldás is.',
    ],
    highlight:
      'Ezzel a receptkönyvvel egy évben jó, ha kétszer kell ugyanazt enned – ekkora változatosság költözik a konyhádba.',
    cta: 'Igen, kérem az összes receptet, azonnal!',
    priceLabel: 'Most csak ennyiért:',
    price: '2990 Ft',
  },

  benefits: {
    heading: 'Az előnyök röviden',
    items: [
      {
        title: '14 napos garancia',
        text: 'Kockázatmentes vásárlás. 14 napos, 100%-os pénzvisszafizetési garanciát vállalok, ha nem vagy elégedett.',
      },
      {
        title: 'Egészséges és finom',
        text: 'Maximális ízélményt nyújtó ételek egészséges alapokon, rengeteg zöldséggel, mesterséges félkész termékek nélkül.',
      },
      {
        title: 'Hétköznapi alapanyagok',
        text: 'A receptjeimhez szükséges összes hozzávalót minden gond nélkül megtalálod a sarki szupermarketben.',
      },
      {
        title: 'Gyors előkészület',
        text: 'A világos, lépésről lépésre követhető utasításokkal anélkül varázsolhatsz szuper vacsorát az asztalra, hogy órákat állnál a tűzhely mellett.',
      },
    ],
    categories: [
      'Omlós és szaftos marhahúsos ételek',
      'Meglepően finom, krémes levesek',
      'Igazi házias komfortételek, mint a rizottó, de elképesztő tésztás, csirkés és halas receptek is',
    ],
  },

  socialReviews: {
    heading: 'Ezt mondják az olvasók a közösségi médiában',
    items: [
      {
        name: 'Farkas Katalin',
        source: 'WhatsApp',
        quote:
          'Annyira boldog vagyok, a cikória isteni lett, a fodros kel is, a kolbászos recept meg abszolút kedvenc. Imádom a házias ízeket. Hétfőn chili con carne-t csinálok sült édesburgonyával.',
      },
      {
        name: 'Kiss Margit',
        source: 'WhatsApp',
        quote:
          'Ma megint orzót ettünk, elképesztően finom lesz, szinte újjászülettem a receptjeiddel!',
      },
      {
        name: 'Balogh Alíz',
        source: 'Facebook',
        quote:
          'Hihetetlenül finom!! Tettem bele egy kis csípőset is a pikantéria kedvéért. A férjem szerint egy étteremben is megállná a helyét!!',
      },
      {
        name: 'Horváth Kata',
        source: 'Facebook',
        quote:
          'Tegnap megkaptam a könyvet, és ma egyből megcsináltam a paradicsomlevest. A fiaim 100%-osan rábólintottak, szóval biztosan bekerül a rendszeres menübe.',
      },
      {
        name: 'Molnár Klára',
        source: 'Facebook',
        quote: 'Ma csináltam meg a soto levest, valami brutálisan jó!!!!!',
      },
      {
        name: 'gabor_m',
        source: 'Instagram',
        quote: 'Nagyon jó könyv, szuper receptekkel.',
      },
    ],
  },

  showcase: {
    heading: 'Ideje, hogy bezsebeld az elismeréseket otthon!',
    items: [
      { title: 'Szájban olvadó húsok', imageAlt: 'Lassúfőzőben készült omlós hús sárgarépával és zöldfűszerekkel' },
      { title: 'Fantasztikus levesek', imageAlt: 'Friss, krémleves lassúfőzőben elkészítve' },
    ],
  },

  finalCta: {
    kicker: 'Legyél a lassú főzés mestere, minden erőfeszítés nélkül!',
    heading: 'Engedd, hogy a lassúfőző átalakítsa a konyhádat!',
    lead: 'Válaszd a finom, egészséges és egyszerű házias ételeket.',
    paragraphs: [
      'Változtasd meg a főzési szokásaidat a receptjeimmel. Fedezz fel gondosan válogatott ételeket, okos trükköket, és élvezd a finom vacsorákat felesleges felhajtás nélkül.',
      'Inspirálódj még ma, és spórold meg magadnak a receptek utáni órákig tartó kutatást és a tűzhely melletti állást!',
    ],
    cta: 'Rendeld meg ezt a lenyűgöző könyvet most',
    ctaNote: '14 napos garancia! Soha többé nem kell azon törnöd a fejed, hogy mit főzz!',
    imageAlt: 'A lassúfőző receptkönyv egy frissen készült, gőzölgő étel mellett',
  },

  ratings: {
    heading: 'Értékelés',
    items: [
      {
        platform: 'Trustpilot',
        score: '4,8',
        max: '5',
        count: '208',
        countLabel: 'vélemény',
        note: 'Ellenőrzött profil',
      },
      {
        platform: 'Google',
        score: '4,8',
        max: '5',
        count: '89',
        countLabel: 'vélemény',
        note: 'Médiaügynökség',
      },
    ],
  },

  testimonials: {
    heading: 'További vélemények a receptjeimről',
    items: [
      {
        title: 'Mindenki az utolsó falatig megeszi az adagját!',
        quote:
          'Mióta a te könyvedből főzök, még a tinédzsereim is mindent megesznek nyavalygás nélkül, szó szerint minden ízlik nekik!',
      },
      {
        title: 'Nekem már csak választanom kell',
        quote:
          'Egyszerűen fantasztikus! Akkora a választék, hogy csak átlapozok pár oldalt, és már tudom is, mi finomság kerül az asztalra.',
      },
      {
        title: 'Egyszerűen csúcs!',
        quote:
          'Soha nem hittem volna, hogy ilyen kevés erőfeszítéssel ilyen finomakat tudok főzni. Egyszerűen csúcs!',
      },
    ],
    cta: 'Rendelés most',
  },

  about: {
    heading: 'Egy kicsit többet rólam...',
    name: 'Szabó Judit',
    intro: 'Sziasztok, Szabó Judit vagyok, és a lassú főzés megszállott rajongója.',
    paragraphs: [
      'Évekkel ezelőtt kaptam ajándékba egy lassúfőzőt, és így "fertőzött meg" a lassú főzés varázsa.',
      'Már több mint 14 éve bátran kísérletezem, és hetente legalább 3-4 alkalommal használom a gépet.',
      'Férjnél vagyok és van két kamasz gyerekem; éljen az őrültek háza a növésben lévő gyerekekkel, a különböző suli- és munkabeosztásokkal, meg a rengeteg edzéssel. A lassúfőző nélkül a vacsorakészítés a mi családunkban sokkal bonyolultabb és idegőrlőbb feladat lenne!',
      'Szeretnél többet megtudni rólam, a könyvemről vagy a lassúfőzős közösségünkről? Dobj egy e-mailt, szívesen segítek!'
    ],
    cta: 'IGEN, el akarok kezdeni főzni a könyvből',
    imageAlt: 'Otthon, szeretettel készült friss és színes étel a lassúfőzőből',
  },

  closing: {
    heading: 'Receptek a könyvben',
    primaryCta: 'Könyv megrendelése',
    altCta: 'Nem, csak az e-könyveket kérem',
  },

  footer: {
    brand: 'Lassúfőző Receptkönyv',
    author: 'Szabó Judit tollából',
    tagline: 'Stresszmentes, egészséges és finom főzés — 141 recept, ami mindig sikerül.',
    copyright: '© 2026 Mamsatwork · Minden jog fenntartva.',
    links: [
      { label: 'Általános Szerződési Feltételek', href: '#' },
      { label: 'Adatvédelmi Tájékoztató', href: '#' },
      { label: 'Kapcsolat', href: '#' },
    ],
  },
};