import { Metadata } from 'next';
import { Link } from '@/navigation';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

// Import data
import pagesData from '@/data/nl/pages.json';

export const metadata: Metadata = {
  title: pagesData.faq.metaTitle,
  description: pagesData.faq.metaDescription,
};

// JSON-LD Structured Data for FAQ
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pagesData.faq.categories.flatMap((category) =>
    category.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  const { faq } = pagesData;

  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {faq.hero.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {faq.hero.subtitle}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {faq.categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition shadow-sm"
              >
                {category.title}
              </a>
            ))}
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faq.categories.map((category) => (
              <div key={category.id} id={category.id}>
                <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-6">
                  {category.title}
                </h2>
                <FAQAccordion questions={category.questions} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              {faq.cta.title}
            </h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              {faq.cta.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-primary text-primary bg-white hover:bg-gray-100 shadow-lg focus:ring-primary"
            >
              {faq.cta.button}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
