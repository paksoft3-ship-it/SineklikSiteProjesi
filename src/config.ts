import { Pathnames } from 'next-intl/routing';

export const locales = ['en', 'nl'] as const;
export const defaultLocale = 'nl' as const;

export const pathnames = {
    '/': '/',
    '/admin': '/admin', // Admin doesn't need translation
    '/admin/dashboard': '/admin/dashboard',
    '/admin/bestellingen': '/admin/bestellingen',
    '/admin/offertes': '/admin/offertes',
    '/admin/producten': '/admin/producten',
    '/admin/blog': '/admin/blog',
    '/admin/producten/nieuw': '/admin/producten/nieuw',
    '/admin/blog/nieuw': '/admin/blog/nieuw',
    '/admin/instellingen': '/admin/instellingen',

    // Main Pages
    '/about': {
        en: '/about-us',
        nl: '/over-ons'
    },
    '/contact': {
        en: '/contact',
        nl: '/contact'
    },
    '/faq': {
        en: '/faq',
        nl: '/veelgestelde-vragen'
    },
    '/measurement-guide': {
        en: '/measurement-guide',
        nl: '/meetgids'
    },

    // Products Index
    '/products': {
        en: '/products',
        nl: '/producten'
    },
    '/products/window-decoration': {
        en: '/products/window-decoration',
        nl: '/producten/raamdecoratie'
    },
    '/products/screens': {
        en: '/products/screens',
        nl: '/producten/horren'
    },
    '/products/packages': {
        en: '/products/packages',
        nl: '/producten/pakketten'
    },

    // Plissé Horren
    '/products/plisse-screens': {
        en: '/products/plisse-screens',
        nl: '/producten/plisse-horren'
    },
    '/products/plisse-screens/door': {
        en: '/products/plisse-screens/door',
        nl: '/producten/plisse-horren/deur'
    },
    '/products/plisse-screens/window': {
        en: '/products/plisse-screens/window',
        nl: '/producten/plisse-horren/raam'
    },
    '/products/plisse-screens/glass-balcony': {
        en: '/products/plisse-screens/glass-balcony',
        nl: '/producten/plisse-horren/glazen-balkon'
    },
    '/products/plisse-screens/fixed': {
        en: '/products/plisse-screens/fixed',
        nl: '/producten/plisse-horren/vaste-hor'
    },
    '/products/plisse-screens/insight': {
        en: '/products/plisse-screens/insight',
        nl: '/producten/plisse-horren/binnenmontage'
    },
    '/products/plisse-screens/screen-curtain': {
        en: '/products/plisse-screens/screen-curtain',
        nl: '/producten/plisse-horren/hor-gordijn-combinatie'
    },
    '/products/plisse-screens/barrier-free': {
        en: '/products/plisse-screens/barrier-free',
        nl: '/producten/plisse-horren/drempelloos'
    },

    // Plissé Gordijnen
    '/products/plisse-curtains': {
        en: '/products/plisse-curtains',
        nl: '/producten/plisse-gordijnen'
    },
    '/products/plisse-curtains/honeycomb': {
        en: '/products/plisse-curtains/honeycomb',
        nl: '/producten/plisse-gordijnen/honeycomb'
    },
    '/products/plisse-curtains/blackout': {
        en: '/products/plisse-curtains/blackout',
        nl: '/producten/plisse-gordijnen/verduisterend'
    },
    '/products/plisse-curtains/light-filtering': {
        en: '/products/plisse-curtains/light-filtering',
        nl: '/producten/plisse-gordijnen/lichtdoorlatend'
    },
    '/products/plisse-curtains/colors': {
        en: '/products/plisse-curtains/colors',
        nl: '/producten/plisse-gordijnen/kleuropties'
    },

    // Footer / Other
    '/privacy': {
        en: '/privacy',
        nl: '/privacy'
    },
    '/terms': {
        en: '/terms',
        nl: '/voorwaarden'
    },
    '/warranty': {
        en: '/warranty',
        nl: '/garantie'
    },
    '/configurator': {
        en: '/configurator',
        nl: '/configurator'
    },
    '/quote': {
        en: '/quote',
        nl: '/offerte'
    },
    '/account': {
        en: '/account',
        nl: '/mijn-account'
    },
    '/success': {
        en: '/success',
        nl: '/bedankt'
    },
    '/cart': {
        en: '/cart',
        nl: '/winkelwagen'
    },

    // Blog
    '/blog': {
        en: '/blog',
        nl: '/blog'
    },

    // Service Pages
    '/service/delivery': {
        en: '/service/delivery',
        nl: '/service/bezorging'
    },
    '/service/faq': {
        en: '/service/faq',
        nl: '/service/veelgestelde-vragen'
    },

    // Curtains (Gordijnen)
    '/products/curtains': {
        en: '/products/curtains',
        nl: '/producten/gordijnen'
    },
    '/products/curtains/blackout': {
        en: '/products/curtains/blackout',
        nl: '/producten/gordijnen/verduisterend'
    },
    '/products/curtains/light-filtering': {
        en: '/products/curtains/light-filtering',
        nl: '/producten/gordijnen/lichtdoorlatend'
    },
    '/products/curtains/sheer': {
        en: '/products/curtains/sheer',
        nl: '/producten/gordijnen/transparant'
    },
    '/products/curtains/drapes': {
        en: '/products/curtains/drapes',
        nl: '/producten/gordijnen/overgordijnen'
    },
    '/products/curtains/inbetween': {
        en: '/products/curtains/inbetween',
        nl: '/producten/gordijnen/inbetween'
    },
    '/products/curtains/voiles': {
        en: '/products/curtains/voiles',
        nl: '/producten/gordijnen/vitrages'
    },
    '/products/curtains/custom': {
        en: '/products/curtains/custom',
        nl: '/producten/gordijnen/op-maat'
    },
    '/products/curtains/rails': {
        en: '/products/curtains/rails',
        nl: '/producten/gordijnen/rails'
    },
    '/products/curtains/rods': {
        en: '/products/curtains/rods',
        nl: '/producten/gordijnen/roedes'
    },
    '/products/curtains/rail-rods': {
        en: '/products/curtains/rail-rods',
        nl: '/producten/gordijnen/rail-roedes'
    },

    // Venetian Blinds (Jaloezieën)
    '/products/venetian-blinds': {
        en: '/products/venetian-blinds',
        nl: '/producten/jaloezieen'
    },
    '/products/venetian/wood': {
        en: '/products/venetian/wood',
        nl: '/producten/jaloezieen/hout'
    },
    '/products/venetian/bamboo': {
        en: '/products/venetian/bamboo',
        nl: '/producten/jaloezieen/bamboe'
    },
    '/products/venetian/aluminum': {
        en: '/products/venetian/aluminum',
        nl: '/producten/jaloezieen/aluminium'
    },
    '/products/venetian/pvc': {
        en: '/products/venetian/pvc',
        nl: '/producten/jaloezieen/pvc'
    },
    '/products/venetian/custom': {
        en: '/products/venetian/custom',
        nl: '/producten/jaloezieen/op-maat'
    },
    '/products/venetian/ready-made': {
        en: '/products/venetian/ready-made',
        nl: '/producten/jaloezieen/kant-en-klaar'
    },

    // Wooden Blinds (Houten Jaloezieën)
    '/products/wooden-blinds': {
        en: '/products/wooden-blinds',
        nl: '/producten/houten-jaloezieen'
    },
    '/products/wooden-blinds/50mm': {
        en: '/products/wooden-blinds/50mm',
        nl: '/producten/houten-jaloezieen/50mm'
    },
    '/products/wooden-blinds/63mm': {
        en: '/products/wooden-blinds/63mm',
        nl: '/producten/houten-jaloezieen/63mm'
    },
    '/products/wooden-blinds/bamboo': {
        en: '/products/wooden-blinds/bamboo',
        nl: '/producten/houten-jaloezieen/bamboe'
    },
    '/products/wooden-blinds/basswood': {
        en: '/products/wooden-blinds/basswood',
        nl: '/producten/houten-jaloezieen/lindehout'
    },
    '/products/wooden-blinds/white': {
        en: '/products/wooden-blinds/white',
        nl: '/producten/houten-jaloezieen/wit'
    },
    '/products/wooden-blinds/black': {
        en: '/products/wooden-blinds/black',
        nl: '/producten/houten-jaloezieen/zwart'
    },

    // Roller Blinds (Rolgordijnen)
    '/products/roller-blinds': {
        en: '/products/roller-blinds',
        nl: '/producten/rolgordijnen'
    },
    '/products/roller-blinds/blackout': {
        en: '/products/roller-blinds/blackout',
        nl: '/producten/rolgordijnen/verduisterend'
    },
    '/products/roller-blinds/light-filtering': {
        en: '/products/roller-blinds/light-filtering',
        nl: '/producten/rolgordijnen/lichtdoorlatend'
    },
    '/products/roller-blinds/sheer': {
        en: '/products/roller-blinds/sheer',
        nl: '/producten/rolgordijnen/transparant'
    },
    '/products/roller-blinds/screen': {
        en: '/products/roller-blinds/screen',
        nl: '/producten/rolgordijnen/screen'
    },
    '/products/roller-blinds/custom': {
        en: '/products/roller-blinds/custom',
        nl: '/producten/rolgordijnen/op-maat'
    },
    '/products/roller-blinds/ready-made': {
        en: '/products/roller-blinds/ready-made',
        nl: '/producten/rolgordijnen/kant-en-klaar'
    },
    '/products/roller/blackout': {
        en: '/products/roller/blackout',
        nl: '/producten/roller/verduisterend'
    },
    '/products/roller/light-filtering': {
        en: '/products/roller/light-filtering',
        nl: '/producten/roller/lichtdoorlatend'
    },
    '/products/roller/sheer': {
        en: '/products/roller/sheer',
        nl: '/producten/roller/transparant'
    },
    '/products/roller/custom': {
        en: '/products/roller/custom',
        nl: '/producten/roller/op-maat'
    },
    '/products/roller/ready-made': {
        en: '/products/roller/ready-made',
        nl: '/producten/roller/kant-en-klaar'
    },

    // Duo Roller Blinds (Duo Rolgordijnen)
    '/products/duo-roller-blinds': {
        en: '/products/duo-roller-blinds',
        nl: '/producten/duo-rolgordijnen'
    },
    '/products/duo-roller-blinds/blackout': {
        en: '/products/duo-roller-blinds/blackout',
        nl: '/producten/duo-rolgordijnen/verduisterend'
    },
    '/products/duo-roller-blinds/light-filtering': {
        en: '/products/duo-roller-blinds/light-filtering',
        nl: '/producten/duo-rolgordijnen/lichtdoorlatend'
    },
    '/products/duo-roller-blinds/custom': {
        en: '/products/duo-roller-blinds/custom',
        nl: '/producten/duo-rolgordijnen/op-maat'
    },
    '/products/duo-roller-blinds/ready-made': {
        en: '/products/duo-roller-blinds/ready-made',
        nl: '/producten/duo-rolgordijnen/kant-en-klaar'
    },
    '/products/duo-roller/blackout': {
        en: '/products/duo-roller/blackout',
        nl: '/producten/duo-roller/verduisterend'
    },
    '/products/duo-roller/light-filtering': {
        en: '/products/duo-roller/light-filtering',
        nl: '/producten/duo-roller/lichtdoorlatend'
    },
    '/products/duo-roller/custom': {
        en: '/products/duo-roller/custom',
        nl: '/producten/duo-roller/op-maat'
    },
    '/products/duo-roller/ready-made': {
        en: '/products/duo-roller/ready-made',
        nl: '/producten/duo-roller/kant-en-klaar'
    },

    // Plissé (Plissé Gordijnen)
    '/products/plisse': {
        en: '/products/plisse',
        nl: '/producten/plisse'
    },
    '/products/plisse/blackout': {
        en: '/products/plisse/blackout',
        nl: '/producten/plisse/verduisterend'
    },
    '/products/plisse/light-filtering': {
        en: '/products/plisse/light-filtering',
        nl: '/producten/plisse/lichtdoorlatend'
    },
    '/products/plisse/sheer': {
        en: '/products/plisse/sheer',
        nl: '/producten/plisse/transparant'
    },
    '/products/plisse/custom': {
        en: '/products/plisse/custom',
        nl: '/producten/plisse/op-maat'
    },
    '/products/plisse/ready-made': {
        en: '/products/plisse/ready-made',
        nl: '/producten/plisse/kant-en-klaar'
    },

    // Roman Blinds (Vouwgordijnen)
    '/products/roman-blinds': {
        en: '/products/roman-blinds',
        nl: '/producten/vouwgordijnen'
    },
    '/products/roman-blinds/blackout': {
        en: '/products/roman-blinds/blackout',
        nl: '/producten/vouwgordijnen/verduisterend'
    },
    '/products/roman-blinds/light-filtering': {
        en: '/products/roman-blinds/light-filtering',
        nl: '/producten/vouwgordijnen/lichtdoorlatend'
    },
    '/products/roman-blinds/inbetween': {
        en: '/products/roman-blinds/inbetween',
        nl: '/producten/vouwgordijnen/inbetween'
    },
    '/products/roman-blinds/linen': {
        en: '/products/roman-blinds/linen',
        nl: '/producten/vouwgordijnen/linnen'
    },

    // Screens sub-pages
    '/products/screens/inset': {
        en: '/products/screens/inset',
        nl: '/producten/horren/inzethorren'
    },
    '/products/screens/doors': {
        en: '/products/screens/doors',
        nl: '/producten/horren/deuren'
    },
    '/products/screens/fixed': {
        en: '/products/screens/fixed',
        nl: '/producten/horren/vaste-horren'
    },
    '/products/screens/windows': {
        en: '/products/screens/windows',
        nl: '/producten/horren/ramen'
    },
    '/products/screens/roller': {
        en: '/products/screens/roller',
        nl: '/producten/horren/rolhorren'
    },
    '/products/screens/fly-curtains': {
        en: '/products/screens/fly-curtains',
        nl: '/producten/horren/vliegengordijnen'
    },
    '/products/screens/custom': {
        en: '/products/screens/custom',
        nl: '/producten/horren/op-maat'
    },
    '/products/screens/ready-made': {
        en: '/products/screens/ready-made',
        nl: '/producten/horren/kant-en-klaar'
    },

    // Plissé Screens sub-pages
    '/products/plisse-screens/inset-screens': {
        en: '/products/plisse-screens/inset-screens',
        nl: '/producten/plisse-horren/inzethorren'
    },
    '/products/plisse-screens/doors': {
        en: '/products/plisse-screens/doors',
        nl: '/producten/plisse-horren/deuren'
    },
    '/products/plisse-screens/windows': {
        en: '/products/plisse-screens/windows',
        nl: '/producten/plisse-horren/ramen'
    },
    '/products/plisse-screens/roller': {
        en: '/products/plisse-screens/roller',
        nl: '/producten/plisse-horren/rolhorren'
    },
    '/products/plisse-screens/fly-curtain': {
        en: '/products/plisse-screens/fly-curtain',
        nl: '/producten/plisse-horren/vliegengordijn'
    },
    '/products/plisse-screens/custom': {
        en: '/products/plisse-screens/custom',
        nl: '/producten/plisse-horren/op-maat'
    },
    '/products/plisse-screens/ready-made': {
        en: '/products/plisse-screens/ready-made',
        nl: '/producten/plisse-horren/kant-en-klaar'
    }
} satisfies Pathnames<typeof locales>;

// Use this type to ensure type safety in your app
export type Locale = (typeof locales)[number];
