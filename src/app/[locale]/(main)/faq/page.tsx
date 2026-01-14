'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

// Import data
import pagesData from '@/data/nl/pages.json';

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

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.premium },
  },
};

const categoryButtonVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { duration: durations.fast, ease: easings.snappy },
  },
  tap: { scale: 0.95 },
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
      <section className="bg-secondary dark:bg-bg-dark-2 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.premium }}
          >
            {faq.hero.title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
          >
            {faq.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <ScrollAnimation variant="fadeUp">
            <motion.div
              className="flex flex-wrap gap-2 mb-12 justify-center"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
            >
              {faq.categories.map((category, index) => (
                <motion.a
                  key={category.id}
                  href={`#${category.id}`}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition shadow-sm"
                  variants={categoryButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {category.title}
                </motion.a>
              ))}
            </motion.div>
          </ScrollAnimation>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faq.categories.map((category, categoryIndex) => (
              <ScrollAnimation key={category.id} variant="fadeUp" delay={categoryIndex * 0.1}>
                <div id={category.id}>
                  <motion.h2
                    className="font-display text-2xl font-bold text-secondary dark:text-white mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: durations.normal, ease: easings.smooth }}
                  >
                    {category.title}
                  </motion.h2>
                  <FAQAccordion questions={category.questions} />
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollAnimation variant="fadeUp" delay={0.2}>
            <motion.div
              className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center overflow-hidden relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: durations.normal }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ backgroundPosition: '0% 0%' }}
                animate={{ backgroundPosition: '100% 100%' }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  background: 'radial-gradient(circle at 50% 50%, white 0%, transparent 50%)',
                  backgroundSize: '200% 200%',
                }}
              />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                {faq.cta.title}
              </h3>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10">
                {faq.cta.description}
              </p>
              <Link href="/contact">
                <motion.span
                  className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-primary text-primary bg-white hover:bg-gray-100 shadow-lg focus:ring-primary cursor-pointer relative z-10"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {faq.cta.button}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.span>
              </Link>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
