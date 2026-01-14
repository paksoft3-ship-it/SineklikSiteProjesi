'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SustainabilityDashboard from '@/components/sustainability/SustainabilityDashboard';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function SustainabilityPage() {
  const t = useTranslations('SustainabilityPage');

  const benefits = [
    {
      icon: 'fa-thermometer-half',
      key: 'insulation',
      color: 'text-orange-500 bg-orange-100 dark:bg-orange-900/30',
    },
    {
      icon: 'fa-euro-sign',
      key: 'costs',
      color: 'text-green-500 bg-green-100 dark:bg-green-900/30',
    },
    {
      icon: 'fa-globe-europe',
      key: 'co2',
      color: 'text-teal-500 bg-teal-100 dark:bg-teal-900/30',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-bg-dark-1 dark:to-bg-dark-2">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-leaf mr-2"></i>
              {t('badge')}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation variant="fadeUp">
            <SustainabilityDashboard
              productType="honeycomb"
              windowCount={5}
              windowArea={12}
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('why.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {t(`why.${item.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t(`why.${item.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
