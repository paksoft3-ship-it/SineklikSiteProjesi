'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function QuizCTASection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const t = useTranslations('HomePage');

  const tools = [
    {
      id: 1,
      icon: 'fa-clipboard-list',
      key: 'quiz',
      color: 'from-blue-500 to-blue-600',
      link: '/tools/quiz',
    },
    {
      id: 2,
      icon: 'fa-palette',
      key: 'colorMatcher',
      color: 'from-purple-500 to-purple-600',
      link: '/tools/color-matcher',
    },
    {
      id: 3,
      icon: 'fa-calendar-check',
      key: 'scheduler',
      color: 'from-green-500 to-green-600',
      link: '/tools/scheduler',
    },
    {
      id: 4,
      icon: 'fa-leaf',
      key: 'sustainability',
      color: 'from-teal-500 to-teal-600',
      link: '/tools/sustainability',
    },
  ];

  // Helper to safely get badge translation
  const getBadge = (key: string) => {
    try {
      return t(`quizCTA.tools.${key}.badge`);
    } catch {
      return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-gray-900 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-12">
            <motion.span
              className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-tools mr-2"></i>
              {t('quizCTA.badge')}
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              {t('quizCTA.title')}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t('quizCTA.description')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => {
            const badge = getBadge(tool.key);
            return (
              <ScrollAnimation key={tool.id} variant="fadeUp" delay={idx * 0.1}>
                <Link href={tool.link as any}>
                  <motion.div
                    className="relative h-full"
                    onHoverStart={() => setHoveredCard(tool.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`h-full bg-gradient-to-br ${tool.color} rounded-2xl p-6 text-white relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                      </div>

                      {/* Badge */}
                      {badge && (
                        <motion.span
                          className="absolute top-4 right-4 px-2 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {badge}
                        </motion.span>
                      )}

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.div
                          className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4"
                          animate={{
                            scale: hoveredCard === tool.id ? 1.1 : 1,
                            rotate: hoveredCard === tool.id ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <i className={`fas ${tool.icon} text-2xl`}></i>
                        </motion.div>
                        <h3 className="font-bold text-lg mb-2">
                          {t(`quizCTA.tools.${tool.key}.title`)}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
                          {t(`quizCTA.tools.${tool.key}.desc`)}
                        </p>
                        <motion.div
                          className="flex items-center gap-2 text-sm font-semibold"
                          animate={{ x: hoveredCard === tool.id ? 5 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span>{t('quizCTA.start')}</span>
                          <i className="fas fa-arrow-right"></i>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
