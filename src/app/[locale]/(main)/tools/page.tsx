'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function ToolsPage() {
  const t = useTranslations('ToolsPage');

  const tools = [
    {
      id: 'quiz',
      icon: 'fa-clipboard-list',
      color: 'from-blue-500 to-blue-600',
      link: '/tools/quiz',
    },
    {
      id: 'colorMatcher',
      icon: 'fa-palette',
      color: 'from-purple-500 to-pink-500',
      link: '/tools/color-matcher',
    },
    {
      id: 'scheduler',
      icon: 'fa-calendar-check',
      color: 'from-green-500 to-teal-500',
      link: '/tools/scheduler',
    },
    {
      id: 'sustainability',
      icon: 'fa-leaf',
      color: 'from-teal-500 to-green-500',
      link: '/tools/sustainability',
    },
    {
      id: 'showroom',
      icon: 'fa-vr-cardboard',
      color: 'from-indigo-500 to-purple-500',
      link: '/tools/showroom',
    },
  ];

  // Helper to safely get badge
  const getBadge = (id: string) => {
    try {
      const badge = t(`tools.${id}.badge`);
      return badge !== `tools.${id}.badge` ? badge : null;
    } catch {
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-bg-dark-1 dark:to-bg-dark-2">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-secondary via-gray-900 to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-tools mr-2"></i>
              {t('badge')}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => {
              const badge = getBadge(tool.id);
              return (
                <ScrollAnimation key={tool.id} variant="fadeUp" delay={idx * 0.1}>
                  <Link href={tool.link as any}>
                    <motion.div
                      className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ y: -8 }}
                    >
                      {/* Gradient Header */}
                      <div className={`h-32 bg-gradient-to-br ${tool.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.i
                            className={`fas ${tool.icon} text-white/30 text-6xl`}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        {badge && (
                          <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                            {badge}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                            {t(`tools.${tool.id}.title`)}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <i className="fas fa-clock"></i>
                            {t(`tools.${tool.id}.duration`)}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {t(`tools.${tool.id}.description`)}
                        </p>
                        <motion.div
                          className="flex items-center gap-2 text-primary font-semibold text-sm"
                          whileHover={{ x: 5 }}
                        >
                          <span>{t('start_tool')}</span>
                          <i className="fas fa-arrow-right"></i>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('help.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t('help.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              <i className="fas fa-phone"></i>
              {t('help.contact')}
            </Link>
            <Link
              href="/configurator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:border-primary transition"
            >
              <i className="fas fa-cog"></i>
              {t('help.configurator')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
