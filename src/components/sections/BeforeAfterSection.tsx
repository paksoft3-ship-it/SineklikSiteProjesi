'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function BeforeAfterSection() {
  const t = useTranslations('HomePage');

  const transformations = [
    {
      id: 1,
      key: 'living',
      before: '/images/showroom/living-before.png',
      after: '/images/showroom/living-after.png',
    },
    {
      id: 2,
      key: 'bedroom',
      before: '/images/showroom/bedroom-before.png',
      after: '/images/showroom/bedroom-after.png',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-bg-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-12">
            <motion.span
              className="inline-block px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-magic mr-2"></i>
              {t('beforeAfter.badge')}
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
              {t('beforeAfter.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('beforeAfter.description')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {transformations.map((item, idx) => (
            <ScrollAnimation key={item.id} variant="fadeUp" delay={idx * 0.2}>
              <motion.div
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  beforeLabel={t('beforeAfter.before')}
                  afterLabel={t('beforeAfter.after')}
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {t(`beforeAfter.items.${item.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t(`beforeAfter.items.${item.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
