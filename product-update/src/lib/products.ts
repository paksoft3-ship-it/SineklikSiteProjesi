// Product Data - Centralized product information
// Based on client specifications

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  pricePerCm2?: number;
  features: string[];
  specifications: { label: string; value: string }[];
  images: string[];
  category: 'plisse-horren' | 'plisse-gordijnen' | 'huisdecoratie';
  tags: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  products: Product[];
}

// ============================================
// PLISSÉ HORREN (Insect Screens)
// ============================================

export const plisseHorrenProducts: Product[] = [
  {
    id: 'plisse-hor-deur',
    slug: 'deur',
    name: 'Plissé Hordeur',
    shortDescription: 'Ruimtebesparende hordeur voor balkons en terrassen',
    description: 'De plissé hordeur is de ideale oplossing voor balkons, terrassen en tuindeuren. Door het plissésysteem neemt de hor minimale ruimte in beslag wanneer geopend. Eenvoudig te bedienen met één hand.',
    price: 199,
    pricePerCm2: 0.0014,
    features: [
      'Ruimtebesparend plissésysteem',
      'Eenvoudige bediening met één hand',
      'Geschikt voor grote openingen tot 240cm breed',
      'Enkel of dubbel uitvoering beschikbaar',
      'Aluminium frame in meerdere kleuren',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Framemateriaal', value: 'Aluminium' },
      { label: 'Gaastype', value: 'Polyester plissé' },
      { label: 'Framekleuren', value: 'Wit, Crème, Antraciet, Zwart' },
      { label: 'Max. afmeting', value: '240 x 260 cm' },
      { label: 'Uitvoering', value: 'Enkel of dubbel' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    ],
    category: 'plisse-horren',
    tags: ['deur', 'balkon', 'terras', 'populair'],
  },
  {
    id: 'plisse-hor-raam',
    slug: 'raam',
    name: 'Plissé Raamhor',
    shortDescription: 'Elegante raamhor met plissésysteem',
    description: 'De plissé raamhor combineert functionaliteit met elegantie. Het compacte systeem past perfect bij moderne ramen en is eenvoudig te bedienen. Ideaal voor draai-kiepramen.',
    price: 89,
    pricePerCm2: 0.001,
    features: [
      'Compact plissésysteem',
      'Geschikt voor draai-kiepramen',
      'Eenvoudige montage zonder boren',
      'Aluminium frame 3.5cm of 4cm',
      'Fijnmazig gaas tegen kleine insecten',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Framemateriaal', value: 'Aluminium' },
      { label: 'Profielbreedte', value: '3.5cm (standaard) of 4cm (groot)' },
      { label: 'Gaastype', value: 'Polyester plissé' },
      { label: 'Framekleuren', value: 'Wit, Crème, Antraciet, Zwart' },
      { label: 'Max. afmeting', value: '150 x 200 cm' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi',
    ],
    category: 'plisse-horren',
    tags: ['raam', 'draai-kiep', 'populair'],
  },
  {
    id: 'plisse-hor-glazen-balkon',
    slug: 'glazen-balkon',
    name: 'Glazen Balkon Hor',
    shortDescription: 'Speciaal ontworpen voor glazen balkonsystemen',
    description: 'Deze plissé hor is speciaal ontwikkeld voor glazen balkonsystemen. Perfect passend bij populaire merken en systemen. Houdt insecten buiten terwijl u geniet van uw uitzicht.',
    price: 249,
    pricePerCm2: 0.0016,
    features: [
      'Speciaal voor glazen balkons',
      'Compatibel met alle gangbare systemen',
      'Minimaal zichtbare profielen',
      'Weerbestendig materiaal',
      'Professionele montage beschikbaar',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Framemateriaal', value: 'Aluminium' },
      { label: 'Compatibiliteit', value: 'Alle glazen balkonsystemen' },
      { label: 'Framekleuren', value: 'Wit, Antraciet, Zwart' },
      { label: 'Max. afmeting', value: '300 x 260 cm' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv',
    ],
    category: 'plisse-horren',
    tags: ['balkon', 'glas', 'premium'],
  },
  {
    id: 'plisse-hor-vast',
    slug: 'vaste-hor',
    name: 'Vaste Plissé Hor',
    shortDescription: 'Permanente oplossing voor vaste ramen',
    description: 'De vaste plissé hor is ideaal voor ramen die niet geopend hoeven te worden voor de hor. Een permanente, nette oplossing die perfect past bij uw kozijn.',
    price: 69,
    pricePerCm2: 0.0008,
    features: [
      'Permanente installatie',
      'Strakke, nette afwerking',
      'Geschikt voor alle raamtypes',
      'Eenvoudige montage',
      'Onderhoudsvrij',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Framemateriaal', value: 'Aluminium' },
      { label: 'Gaastype', value: 'Glasvezel of RVS' },
      { label: 'Framekleuren', value: 'Wit, Crème, Antraciet, Zwart' },
      { label: 'Max. afmeting', value: '200 x 250 cm' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vtkX7ReV_vig94UvWCKzy11t8c7SA-MLMn-5FlgOWQsvOE4BydICRdB0Dtt0mKaKRihy6mEw_hBGoLEtE1t01t-FZ7pxf6r_VcCRIvzXBTY0n647G0DhrJYqQZBbTE9qHnNpm90l4jkW4_NfNUwPCWYhLT3pk3SdQifYkRPCjYzDWfZwXAnzF1oIIyEXk7odgjSptOnGhtnXvKbp4CT8zKbZjAkuGVqLunuKXJH8iLyjNCKT68v2aszFF1ErCjGiuCQ3LMN97X7m',
    ],
    category: 'plisse-horren',
    tags: ['vast', 'permanent'],
  },
  {
    id: 'plisse-hor-binnenmontage',
    slug: 'binnenmontage',
    name: 'Binnenmontage Hor',
    shortDescription: 'Hor voor montage aan de binnenzijde',
    description: 'De binnenmontage hor wordt aan de binnenzijde van het kozijn geplaatst. Ideaal wanneer buitenmontage niet mogelijk is of wanneer u de buitenzijde van uw woning ongewijzigd wilt laten.',
    price: 79,
    pricePerCm2: 0.0009,
    features: [
      'Montage aan binnenzijde kozijn',
      'Geen wijzigingen aan buitenzijde',
      'Geschikt voor huurwoningen',
      'Eenvoudig te verwijderen',
      'Klembevestiging mogelijk',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Framemateriaal', value: 'Aluminium' },
      { label: 'Bevestiging', value: 'Inklemmen of schroeven' },
      { label: 'Framekleuren', value: 'Wit, Crème, Antraciet, Zwart' },
      { label: 'Max. afmeting', value: '150 x 200 cm' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi',
    ],
    category: 'plisse-horren',
    tags: ['binnen', 'huurwoning'],
  },
  {
    id: 'plisse-hor-gordijn-combinatie',
    slug: 'hor-gordijn-combinatie',
    name: 'Hor + Gordijn Combinatie',
    shortDescription: '2-in-1: insectenwering én zonwering',
    description: 'De ultieme combinatie van insectenwering en zonwering in één systeem. Kies zelf wanneer u de hor of het gordijn gebruikt. Ruimtebesparend en multifunctioneel.',
    price: 299,
    pricePerCm2: 0.002,
    features: [
      '2-in-1 systeem',
      'Insectenwering én zonwering',
      'Onafhankelijk te bedienen',
      'Ruimtebesparend design',
      'Premium kwaliteit materialen',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Framemateriaal', value: 'Aluminium' },
      { label: 'Gaastype', value: 'Polyester plissé' },
      { label: 'Gordijnstof', value: 'Verduisterend of lichtdoorlatend' },
      { label: 'Framekleuren', value: 'Wit, Antraciet, Zwart' },
      { label: 'Max. afmeting', value: '200 x 240 cm' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    ],
    category: 'plisse-horren',
    tags: ['combinatie', 'premium', 'bestseller'],
  },
  {
    id: 'plisse-hor-drempelloos',
    slug: 'drempelloos',
    name: 'Drempelloze Plissé Hor',
    shortDescription: 'Geen drempel, maximaal comfort',
    description: 'De drempelloze plissé hor heeft geen onderprofiel op de vloer. Ideaal voor een vloeiende overgang tussen binnen en buiten, en perfect voor mensen met mobiliteitsbeperkingen.',
    price: 229,
    pricePerCm2: 0.0015,
    features: [
      'Geen drempel/onderprofiel',
      'Vloeiende overgang binnen-buiten',
      'Geschikt voor rolstoelen en rollators',
      'Magneetgeleiding aan onderzijde',
      'Elegant en onopvallend',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Framemateriaal', value: 'Aluminium' },
      { label: 'Ondergeleiding', value: 'Magneet (geen drempel)' },
      { label: 'Framekleuren', value: 'Wit, Antraciet, Zwart' },
      { label: 'Max. afmeting', value: '240 x 260 cm' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    ],
    category: 'plisse-horren',
    tags: ['drempelloos', 'toegankelijk', 'premium'],
  },
];

// ============================================
// PLISSÉ GORDIJNEN (Plissé Curtains)
// ============================================

export const plisseGordijnenProducts: Product[] = [
  {
    id: 'plisse-gordijn-honeycomb',
    slug: 'honeycomb',
    name: 'Honeycomb / Duette Gordijn',
    shortDescription: 'Maximale isolatie met honingraatstructuur',
    description: 'Het Honeycomb gordijn (ook bekend als Duette) heeft een unieke honingraatstructuur die lucht opsluit voor optimale isolatie. Bespaar tot 25% op uw energiekosten.',
    price: 129,
    pricePerCm2: 0.0015,
    features: [
      'Honingraatstructuur voor isolatie',
      'Tot 25% energiebesparing',
      'Geluiddempend effect',
      'Top-down/bottom-up bediening mogelijk',
      'Single of double cell beschikbaar',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Structuur', value: 'Honeycomb (Single/Double Cell)' },
      { label: 'Stoftype', value: 'Transparant, Semi-transparant, Verduisterend' },
      { label: 'Kleuren', value: '100+ kleuren' },
      { label: 'Max. afmeting', value: '300 x 400 cm' },
      { label: 'Bediening', value: 'Koord, Smartcord of Elektrisch' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    ],
    category: 'plisse-gordijnen',
    tags: ['isolatie', 'energiebesparing', 'bestseller'],
  },
  {
    id: 'plisse-gordijn-verduisterend',
    slug: 'verduisterend',
    name: 'Verduisterend Plissé Gordijn',
    shortDescription: '100% verduistering voor optimale slaap',
    description: 'Het verduisterende plissé gordijn blokkeert 100% van het licht. Perfect voor slaapkamers, thuisbioscopen of iedereen die houdt van complete duisternis.',
    price: 99,
    pricePerCm2: 0.0012,
    features: [
      '100% lichtblokkering',
      'Ideaal voor slaapkamers',
      'Thermisch isolerend',
      'Ruimtebesparend plissésysteem',
      'Vele kleuren beschikbaar',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Lichtdoorlatendheid', value: '0% (volledig verduisterend)' },
      { label: 'Kleuren', value: '50+ kleuren' },
      { label: 'Max. afmeting', value: '200 x 260 cm' },
      { label: 'Bediening', value: 'Koord, Handgreep of Elektrisch' },
      { label: 'Uitvoering', value: 'Standaard of Top-down/Bottom-up' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
    ],
    category: 'plisse-gordijnen',
    tags: ['verduisterend', 'slaapkamer', 'populair'],
  },
  {
    id: 'plisse-gordijn-lichtdoorlatend',
    slug: 'lichtdoorlatend',
    name: 'Lichtdoorlatend Plissé (70%)',
    shortDescription: 'Zachte lichtfiltering met 70% doorlatendheid',
    description: 'Het lichtdoorlatende plissé gordijn filtert 70% van het zonlicht voor een aangename sfeer. Behoudt privacy terwijl natuurlijk licht binnenkomt.',
    price: 79,
    pricePerCm2: 0.001,
    features: [
      '70% lichtdoorlatend',
      'Zachte, gefilterde lichtinval',
      'Privacy overdag',
      'UV-bescherming',
      'Grote kleurenselectie',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Lichtdoorlatendheid', value: '70%' },
      { label: 'Kleuren', value: '80+ kleuren' },
      { label: 'Max. afmeting', value: '200 x 260 cm' },
      { label: 'Bediening', value: 'Koord, Handgreep of Elektrisch' },
      { label: 'UV-bescherming', value: 'Ja' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX',
    ],
    category: 'plisse-gordijnen',
    tags: ['lichtdoorlatend', 'woonkamer'],
  },
  {
    id: 'plisse-gordijn-kleuren',
    slug: 'kleuropties',
    name: 'Plissé Gordijn Kleuropties',
    shortDescription: 'Ontdek ons uitgebreide kleurenpalet',
    description: 'Kies uit meer dan 100 kleuren voor uw plissé gordijn. Van neutrale tinten tot opvallende kleuren, wij hebben de perfecte match voor uw interieur.',
    price: 69,
    pricePerCm2: 0.0009,
    features: [
      '100+ kleuren beschikbaar',
      'Gratis kleurstalen',
      'Kleuren te combineren',
      'Op maat gemaakt',
      'Snelle levering',
      '5 jaar garantie',
    ],
    specifications: [
      { label: 'Beschikbare kleuren', value: '100+' },
      { label: 'Stalen', value: 'Gratis op aanvraag' },
      { label: 'Stoftypes', value: 'Verduisterend, Semi-transparant, Transparant' },
      { label: 'Max. afmeting', value: '200 x 260 cm' },
      { label: 'Levertijd', value: '2-3 weken' },
      { label: 'Garantie', value: '5 jaar' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    ],
    category: 'plisse-gordijnen',
    tags: ['kleuren', 'stalen'],
  },
];

// ============================================
// HUISDECORATIE (Home Decoration - Future)
// ============================================

export const huisdecoratieProducts: Product[] = [
  {
    id: 'huisdecoratie-info',
    slug: 'info',
    name: 'Huisdecoratie Collectie',
    shortDescription: 'Binnenkort beschikbaar',
    description: 'Onze huisdecoratie collectie wordt binnenkort uitgebreid. Neem contact met ons op voor meer informatie.',
    price: 0,
    features: ['Binnenkort beschikbaar'],
    specifications: [],
    images: [],
    category: 'huisdecoratie',
    tags: ['coming-soon'],
  },
];

// ============================================
// CATEGORIES
// ============================================

export const productCategories: ProductCategory[] = [
  {
    id: 'plisse-horren',
    slug: 'plisse-horren',
    name: 'Plissé Horren',
    description: 'Hoogwaardige plissé horren voor deuren, ramen en balkons. Ruimtebesparend en elegant.',
    icon: 'fa-bug',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    products: plisseHorrenProducts,
  },
  {
    id: 'plisse-gordijnen',
    slug: 'plisse-gordijnen',
    name: 'Plissé Gordijnen',
    description: 'Stijlvolle plissé gordijnen met verschillende lichtdoorlatendheid opties. Van verduisterend tot transparant.',
    icon: 'fa-sun',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    products: plisseGordijnenProducts,
  },
  {
    id: 'huisdecoratie',
    slug: 'huisdecoratie',
    name: 'Huisdecoratie',
    description: 'Aanvullende raambekleding en huisdecoratie producten. Binnenkort uitgebreid assortiment.',
    icon: 'fa-home',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX',
    products: huisdecoratieProducts,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getAllProducts = (): Product[] => {
  return [...plisseHorrenProducts, ...plisseGordijnenProducts, ...huisdecoratieProducts];
};

export const getProductBySlug = (categorySlug: string, productSlug: string): Product | undefined => {
  const allProducts = getAllProducts();
  return allProducts.find(p => p.category === categorySlug && p.slug === productSlug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return getAllProducts().filter(p => p.category === categorySlug);
};

export const getCategoryBySlug = (slug: string): ProductCategory | undefined => {
  return productCategories.find(c => c.slug === slug);
};

export const getPopularProducts = (): Product[] => {
  return getAllProducts().filter(p => p.tags.includes('populair') || p.tags.includes('bestseller'));
};

export const getProductsForCalculator = () => {
  return getAllProducts()
    .filter(p => p.price > 0)
    .map(p => ({
      id: p.id,
      name: p.name,
      basePrice: p.price,
      pricePerCm2: p.pricePerCm2 || 0.001,
    }));
};
