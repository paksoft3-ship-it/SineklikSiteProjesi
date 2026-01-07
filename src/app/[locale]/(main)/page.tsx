import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import RoomsSection from '@/components/sections/RoomsSection';
import ProductCategoryGrid from '@/components/sections/ProductCategoryGrid';
import { TestimonialsSlider } from '@/components/testimonials';

import PriceCalculatorSection from '@/components/sections/PriceCalculatorSection';
import PopularProductsSection from '@/components/sections/PopularProductsSection';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Window Specialist - Raamdecoratie & Horren op Maat',
  description:
    'De specialist in raamdecoratie en horren op maat. Creëer de perfecte sfeer in elke kamer. Van verduistering voor de slaapkamer tot sfeerlicht in de woonkamer.',
  openGraph: {
    title: 'Window Specialist - Raamdecoratie & Horren op Maat',
    description:
      'Creëer de perfecte sfeer in elke kamer. Van verduistering voor de slaapkamer tot sfeerlicht in de woonkamer.',
    type: 'website',
  },
};

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Window Specialist',
  url: 'https://www.windowspecialist.nl',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.windowspecialist.nl/zoeken?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Window Specialist',
  url: 'https://www.windowspecialist.nl',
  logo: 'https://www.windowspecialist.nl/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31-20-123-4567',
    contactType: 'customer service',
    availableLanguage: ['Dutch', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Industrieweg 123',
    addressLocality: 'Amsterdam',
    postalCode: '1234 AB',
    addressCountry: 'NL',
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      {/* Page Sections */}
      {/* Page Sections */}
      <HeroSection />

      <ScrollAnimation>
        <ProductCategoryGrid />
      </ScrollAnimation>

      <ScrollAnimation>
        <PriceCalculatorSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <RoomsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <PopularProductsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <TestimonialsSlider />
      </ScrollAnimation>
    </>
  );
}
