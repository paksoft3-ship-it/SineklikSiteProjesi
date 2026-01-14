'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ShowroomPreview } from '@/components/showroom/VirtualShowroom';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function VirtualShowroomSection() {
  const t = useTranslations('HomePage');

  const features = [
    {
      icon: 'fa-eye',
      titleKey: 'visualization',
    },
    {
      icon: 'fa-mouse-pointer',
      titleKey: 'hotspots',
    },
    {
      icon: 'fa-palette',
      titleKey: 'colorMatcher',
    },
    {
      icon: 'fa-mobile-alt',
      titleKey: 'ar',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-bg-dark-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-12">
            <motion.span
              className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-vr-cardboard mr-2"></i>
              {t('virtualShowroom.badge')}
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
              {t('virtualShowroom.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('virtualShowroom.description')}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Showroom Preview */}
            <div>
              <ShowroomPreview />
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${feature.icon} text-primary text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t(`virtualShowroom.features.${feature.titleKey}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(`virtualShowroom.features.${feature.titleKey}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href={"/tools/showroom" as any}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
                >
                  <i className="fas fa-expand"></i>
                  {t('virtualShowroom.cta')}
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
