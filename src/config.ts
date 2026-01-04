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
    }
} satisfies Pathnames<typeof locales>;

// Use this type to ensure type safety in your app
export type Locale = (typeof locales)[number];
