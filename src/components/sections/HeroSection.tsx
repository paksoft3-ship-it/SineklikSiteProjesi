'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const t = useTranslations('HomePage.hero');

  const panels = [
    {
      id: 'horren',
      title: t('horren.title'),
      description: t('horren.description'),
      image: '/images/hero/horren-hero-v2.jpg',
      link: '/producten/plisse-horren',
      buttonText: t('horren.button'),
      tags: [
        t('horren.tags.door'),
        t('horren.tags.window'),
        t('horren.tags.balcony'),
      ],
    },
    {
      id: 'gordijnen',
      title: t('gordijnen.title'),
      description: t('gordijnen.description'),
      image: '/images/hero/gordijnen-hero-v2.jpg',
      link: '/producten/plisse-gordijnen',
      buttonText: t('gordijnen.button'),
      tags: [
        t('gordijnen.tags.blackout'),
        t('gordijnen.tags.honeycomb'),
        t('gordijnen.tags.lightFiltering'),
      ],
    },
  ];

  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <motion.img
                src={panel.image}
                alt={panel.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Blue Gradient Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
              style={{
                background: `linear-gradient(
                  to top,
                  rgba(15, 35, 75, 0.95) 0%,
                  rgba(15, 35, 75, 0.7) 30%,
                  rgba(15, 35, 75, 0.4) 60%,
                  rgba(15, 35, 75, 0.2) 100%
                )`
              }}
            />

            {/* Divider Line Between Panels */}
            {index === 0 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block absolute right-0 top-0 w-px bg-white/20 z-20"
              />
            )}

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 xl:p-12 z-10">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                className="font-display text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-bold text-white mb-3 leading-tight"
              >
                {panel.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                className="text-white/80 text-base sm:text-lg mb-5 max-w-md leading-relaxed"
              >
                {panel.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {panel.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                    className="px-4 py-1.5 bg-white/15 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20 cursor-default transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
              >
                <Link
                  href={panel.link as any}
                  className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:gap-3 group/btn shadow-lg shadow-blue-900/20"
                >
                  <span>{panel.buttonText}</span>
                  <i className="fas fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
