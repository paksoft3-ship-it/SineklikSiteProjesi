'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { easings, durations } from '@/lib/animation-config';

const HeroSection = () => {
  const t = useTranslations('HomePage.hero');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  // Text moves UP (negative) on scroll for a layered parallax effect
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  // Fade out content as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const panels = [
    {
      id: 'horren',
      title: t('horren.title'),
      description: t('horren.description'),
      image: '/images/hero/sineklik-hero-main.png',
      link: '/producten/plisse-horren',
      buttonText: t('horren.button'),
      tags: [
        { label: t('horren.tags.door'), href: '/products/plisse-screens/doors' },
        { label: t('horren.tags.window'), href: '/products/plisse-screens/windows' },
        { label: t('horren.tags.balcony'), href: '/products/plisse-screens/doors' },
      ],
    },
    {
      id: 'gordijnen',
      title: t('gordijnen.title'),
      description: t('gordijnen.description'),
      image: '/images/hero/perde-hero-main.png',
      link: '/producten/plisse-gordijnen',
      buttonText: t('gordijnen.button'),
      tags: [
        { label: t('gordijnen.tags.blackout'), href: '/products/curtains/blackout' },
        { label: t('gordijnen.tags.honeycomb'), href: '/products/plisse-curtains/honeycomb' },
        { label: t('gordijnen.tags.lightFiltering'), href: '/products/curtains/light-filtering' },
      ],
    },
  ];

  // Text reveal animation variants
  const textRevealVariants = {
    hidden: { opacity: 0, y: 50, skewY: 2 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: durations.slow,
        ease: easings.premium,
      },
    },
  };

  // Tag stagger animation
  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const tagItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.3)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px -12px rgba(0, 123, 255, 0.5)',
      transition: { duration: durations.fast, ease: easings.snappy },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Divider line animation
  const dividerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: '100%',
      opacity: 1,
      transition: {
        duration: 1,
        ease: easings.smooth,
        delay: 0.4,
      },
    },
  };

  // Panel hover animation variants
  const panelVariants = {
    initial: {
      scale: 1,
      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 0 40px 0 rgba(0, 123, 255, 0.3)',
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 p-2 lg:p-4">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            variants={panelVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredPanel(panel.id)}
            onHoverEnd={() => setHoveredPanel(null)}
            transition={{
              duration: durations.slow,
              delay: index * 0.2,
              ease: easings.premium,
            }}
            className="relative group overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] border-4 border-white dark:border-gray-800 rounded-3xl cursor-pointer"
          >
            {/* Background Image with Parallax */}
            <motion.div
              className="absolute inset-0"
              style={{ y: backgroundY }}
            >
              <motion.img
                src={panel.image}
                alt={panel.title}
                className="w-full h-full object-cover transition-transform duration-700"
                initial={{ scale: 1.05 }}
                animate={{ scale: hoveredPanel === panel.id ? 1.15 : 1 }}
                transition={{ duration: 0.7, ease: easings.smooth }}
              />
            </motion.div>

            {/* Blue Gradient Overlay with animation */}
            <motion.div
              className="absolute inset-0 transition-opacity duration-500"
              animate={{ opacity: hoveredPanel === panel.id ? 0.85 : 0.7 }}
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

            {/* Hover Border Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredPanel === panel.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: 'inset 0 0 0 4px rgba(0, 123, 255, 0.5), inset 0 0 30px rgba(0, 123, 255, 0.2)',
              }}
            />

            {/* Hover Arrow Indicator */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{ [index === 0 ? 'right' : 'left']: '20px' }}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{
                opacity: hoveredPanel === panel.id ? 1 : 0,
                x: hoveredPanel === panel.id ? 0 : (index === 0 ? -20 : 20)
              }}
              transition={{ duration: 0.3, ease: easings.snappy }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
                animate={{
                  scale: hoveredPanel === panel.id ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <i className={`fas fa-arrow-${index === 0 ? 'right' : 'left'} text-white text-lg`}></i>
              </motion.div>
            </motion.div>

            {/* Pulse Ring Effect on Hover */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: hoveredPanel === panel.id ? [1, 2, 2.5] : 0,
                opacity: hoveredPanel === panel.id ? [0.3, 0.1, 0] : 0
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            >
              <div className="w-32 h-32 rounded-full border-2 border-white/30" />
            </motion.div>

            {/* Animated Divider Line Between Panels */}
            {index === 0 && (
              <motion.div
                className="hidden lg:block absolute right-0 top-0 w-px bg-white/20 z-20"
                variants={dividerVariants}
                initial="hidden"
                animate="visible"
              />
            )}

            {/* Content with text reveal animation */}
            <motion.div
              className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 xl:p-12 pb-16 sm:pb-20 lg:pb-24 z-10"
              style={{ y: textY, opacity: textOpacity }}
            >
              {/* Title with reveal animation */}
              <motion.h1
                className="font-display text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-bold text-white mb-3 leading-tight"
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + (index * 0.2) }}
              >
                {panel.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-white/80 text-base sm:text-lg mb-5 max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.normal,
                  delay: 0.4 + (index * 0.2),
                  ease: easings.smooth,
                }}
              >
                {panel.description}
              </motion.p>

              {/* Tags with stagger animation */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                variants={tagContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {panel.tags.map((tag, idx) => (
                  <Link key={idx} href={tag.href as any}>
                    <motion.span
                      variants={tagItemVariants}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        y: -2,
                      }}
                      className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20 cursor-pointer transition-colors hover:bg-white/25"
                    >
                      {tag.label}
                    </motion.span>
                  </Link>
                ))}
              </motion.div>

              {/* CTA Button with ripple effect */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: durations.normal,
                  delay: 0.6 + (index * 0.2),
                  ease: easings.smooth,
                }}
              >
                <Link href={panel.link as any}>
                  <motion.span
                    className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 group/btn shadow-lg shadow-blue-900/20 cursor-pointer"
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>{panel.buttonText}</span>
                    <motion.i
                      className="fas fa-arrow-right text-sm"
                      initial={{ x: 0 }}
                      whileHover={{ x: 6 }}
                      transition={{ duration: durations.fast }}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hover shine effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{
                x: hoveredPanel === panel.id ? '100%' : '-100%',
                opacity: hoveredPanel === panel.id ? 1 : 0
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
              }}
            />

            {/* Corner Badge on Hover */}
            <motion.div
              className="absolute top-6 right-6 z-20 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{
                opacity: hoveredPanel === panel.id ? 1 : 0,
                scale: hoveredPanel === panel.id ? 1 : 0.8,
                y: hoveredPanel === panel.id ? 0 : -10
              }}
              transition={{ duration: 0.3, ease: easings.snappy }}
            >
              <div className="px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold flex items-center gap-2 shadow-lg">
                <i className="fas fa-eye"></i>
                <span>{index === 0 ? 'Bekijk Horren' : 'Bekijk Gordijnen'}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
