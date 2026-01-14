'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { easings, durations } from '@/lib/animation-config';

const HeroSection = () => {
  const t = useTranslations('HomePage.hero');
  const sectionRef = useRef<HTMLDivElement>(null);

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
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200',
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
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200',
      link: '/producten/plisse-gordijnen',
      buttonText: t('gordijnen.button'),
      tags: [
        t('gordijnen.tags.blackout'),
        t('gordijnen.tags.honeycomb'),
        t('gordijnen.tags.lightFiltering'),
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

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.slow,
              delay: index * 0.2,
              ease: easings.premium,
            }}
            className="relative group overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
          >
            {/* Background Image with Parallax */}
            <motion.div
              className="absolute inset-0"
              style={{ y: backgroundY }}
            >
              <motion.img
                src={panel.image}
                alt={panel.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: easings.smooth }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>

            {/* Blue Gradient Overlay with animation */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 0.9 }}
              transition={{ duration: durations.normal }}
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
                  <motion.span
                    key={idx}
                    variants={tagItemVariants}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      y: -2,
                    }}
                    className="px-4 py-1.5 bg-white/15 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20 cursor-default transition-colors"
                  >
                    {tag}
                  </motion.span>
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
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
