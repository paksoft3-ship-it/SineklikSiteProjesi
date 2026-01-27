import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/animations.css';
import { AuthProvider } from '@/context/AuthContext';
import FloatingActionButtons from '@/components/ui/FloatingActionButtons';
import TrustWidget from '@/components/ui/TrustWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.windowspecialist.nl'),
  title: {
    default: 'Window Specialist - Raamdecoratie & Horren op Maat',
    template: '%s | Window Specialist',
  },
  description:
    'De specialist in raamdecoratie en horren op maat. Jaloezieën, rolgordijnen, inzethorren en plissé hordeuren. Gratis meetadvies en snelle levering.',
  keywords: [
    'horren op maat',
    'raamdecoratie',
    'inzethorren',
    'plissé hordeuren',
    'jaloezieën',
    'rolgordijnen',
    'insectenhorren',
    'dakraamhorren',
  ],
  authors: [{ name: 'Window Specialist' }],
  creator: 'Window Specialist',
  publisher: 'Window Specialist',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    // locale: 'nl_NL', // Dynamic now
    url: 'https://www.windowspecialist.nl',
    siteName: 'Window Specialist',
    title: 'Window Specialist - Raamdecoratie & Horren op Maat',
    description:
      'De specialist in raamdecoratie en horren op maat. Gratis meetadvies en snelle levering door heel Nederland.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Window Specialist - Raamdecoratie & Horren op Maat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Window Specialist - Raamdecoratie & Horren op Maat',
    description:
      'De specialist in raamdecoratie en horren op maat. Gratis meetadvies en snelle levering.',
    images: ['https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F4F8' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            {children}
            <FloatingActionButtons />
            <TrustWidget />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
