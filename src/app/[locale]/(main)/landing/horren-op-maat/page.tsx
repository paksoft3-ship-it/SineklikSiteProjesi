import { Metadata } from 'next';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import {
  Ruler,
  Shield,
  Truck,
  Headphones,
  Check,
  Star,
  ArrowRight,
} from 'lucide-react';

// Import data
import seoData from '@/data/nl/seo.json';
import commonData from '@/data/nl/common.json';

const landingPage = seoData.landingPages['horren-op-maat'];

export const metadata: Metadata = {
  title: landingPage.metaTitle,
  description: landingPage.metaDescription,
};

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Horren op Maat',
  description: landingPage.metaDescription,
  brand: {
    '@type': 'Brand',
    name: 'Window Specialist',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '49',
    highPrice: '299',
    offerCount: '100+',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '156',
  },
};

const iconMap: Record<string, React.ReactNode> = {
  ruler: <Ruler className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  truck: <Truck className="w-8 h-8" />,
  headphones: <Headphones className="w-8 h-8" />,
};

const products = [
  {
    name: 'Inzethorren',
    description: 'Eenvoudig te plaatsen zonder boren',
    price: 49,
    image: '/images/products/inzethorren.jpg',
    features: ['Aluminium frame', 'Glasvezel gaas', 'Zelf te monteren'],
  },
  {
    name: 'Plissé Hordeuren',
    description: 'Ruimtebesparend en elegant',
    price: 199,
    image: '/images/products/plisse-hordeuren.jpg',
    features: ['Vouwt volledig weg', 'Fluisterstil', 'Premium kwaliteit'],
  },
  {
    name: 'Dakraamhorren',
    description: 'Voor VELUX en alle merken',
    price: 89,
    image: '/images/products/dakraamhorren.jpg',
    features: ['UV-bestendig', 'Eenvoudige montage', 'Perfecte pasvorm'],
  },
];

export default function HorrenOpMaatPage() {
  const t = useTranslations('HomePage');

  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-blue-900 dark:from-bg-dark-2 dark:to-bg-dark-1 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" size="md" className="mb-6">
                ⭐ 4.8/5 op basis van 156+ reviews
              </Badge>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {landingPage.h1}
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                {landingPage.heroSubtitle}
              </p>

              {/* Trust indicators */}
              <ul className="space-y-3 mb-8">
                {['Gratis meetadvies', '5 jaar garantie', 'Snelle levering', 'Betalen bij aflevering mogelijk'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    {landingPage.ctaPrimary}
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <i className="fas fa-file-invoice mr-2"></i>
                    {t('cta.quote')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Hero Afbeelding
                </div>
              </div>

              {/* Floating price badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <p className="text-sm text-gray-500 mb-1">Vanaf</p>
                <p className="text-3xl font-bold text-primary">€49,-</p>
                <p className="text-sm text-gray-500">op maat gemaakt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {landingPage.usps.map((usp) => (
              <div key={usp.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {iconMap[usp.icon] || <Check className="w-8 h-8" />}
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {usp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
              Onze horren collectie
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Kies uit onze uitgebreide collectie horren op maat. Elk product wordt geproduceerd op basis van uw exacte afmetingen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                    Product Afbeelding
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Vanaf</p>
                      <p className="text-2xl font-bold text-primary">€{product.price},-</p>
                    </div>
                    <Link href="/configurator">
                      <Button size="sm">Configureren</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {landingPage.sections.map((section, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
              Wat onze klanten zeggen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commonData.testimonials.items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(testimonial.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                        }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om uw horren te bestellen?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Configureer uw horren op maat en ontvang direct een prijsindicatie. Of vraag een vrijblijvende offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/configurator">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Start configurator
              </Button>
            </Link>
            <Link href="/quote">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Offerte aanvragen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
