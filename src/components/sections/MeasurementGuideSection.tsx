'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const MeasurementGuideSection = () => {
  const t = useTranslations('HomePage.measurement');

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: durations.slow,
        ease: easings.premium,
      },
    },
  };

  // Icon badge animation
  const iconBadgeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  // Step animation variants (alternating sides)
  const stepVariants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? 30 : -30,
    }),
    visible: (isEven: boolean) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: durations.normal,
        ease: easings.smooth,
      },
    }),
  };

  // Check icon animation
  const checkIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.2 + i * 0.2,
        type: 'spring',
        stiffness: 500,
        damping: 15,
      },
    }),
  };

  // Image zoom animation
  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: durations.slow, ease: easings.smooth },
    },
  };

  // Alert box animation
  const alertVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: durations.normal,
        ease: easings.smooth,
      },
    },
  };

  const steps = [
    { title: t('steps.video_title'), desc: t('steps.video_desc') },
    { title: t('steps.insurance_title'), desc: t('steps.insurance_desc') },
  ];

  return (
    <section className="py-24 bg-bg-light-2 dark:bg-bg-dark-2 relative overflow-hidden">
      {/* Animated Background Shape */}
      <motion.div
        className="absolute right-0 top-0 h-full w-1/3 bg-gray-200 dark:bg-gray-800 opacity-20 transform skew-x-12 translate-x-20"
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 80, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easings.premium }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Card */}
          <motion.div
            className="lg:w-1/2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl relative"
              whileHover={{ y: -8, boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.25)' }}
              transition={{ duration: durations.normal }}
            >
              {/* Animated Icon Badge */}
              <motion.div
                className="absolute -top-6 -left-6 bg-secondary text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg text-2xl font-bold z-10"
                variants={iconBadgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <motion.i
                  className="fas fa-ruler-combined"
                  whileHover={{ rotate: -10 }}
                  transition={{ duration: durations.fast }}
                />
              </motion.div>

              {/* Image with zoom effect */}
              <motion.div
                className="rounded-xl overflow-hidden mb-6"
                variants={imageVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.img
                  alt={t('image_alt')}
                  className="w-full object-cover h-64 md:h-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl3KWyH6a5djj9VrolidPqThfUURYlhlwIoEocXZNCmRXosPIO3biSqFLYg7UeZlYFzyD6DhUGLhVCyiH_EU4nIw-U5qwrx8lPHQuzVFVZgKr5CCS9_C3cGuGMIbeU9D1umLoYg4LxUkzha8oK6YCJE4SIPNel6oHsS70P8kXGZJxhi30YXlOs-j1tixfaSAh7_4y3To6zjgNCdv5EzlVx98Mad5xdQniWJBg66CE887oc7hR5UQ0OV-fQiqaBl0xdwmXlmAZWFzWL"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: durations.slow, ease: easings.premium }}
                />
              </motion.div>

              {/* Alert Box with animation */}
              <motion.div
                className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex items-center gap-4"
                variants={alertVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  !
                </motion.div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  {t.rich('alert', {
                    bold: (chunks) => <span className="font-bold underline">{chunks}</span>
                  })}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <ScrollAnimation variant="fadeRight" className="lg:w-1/2">
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.slow, ease: easings.smooth }}
            >
              {t('title')}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: durations.normal }}
            >
              {t('description')}
            </motion.p>

            {/* Steps with staggered animation */}
            <ul className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  custom={index % 2 === 0}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: durations.fast }}
                >
                  <motion.i
                    className="fas fa-check-circle text-primary text-xl mt-1 mr-4"
                    custom={index}
                    variants={checkIconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: durations.fast }}
                  />
                  <div>
                    <motion.h4
                      className="font-bold text-gray-900 dark:text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {step.title}
                    </motion.h4>
                    <motion.p
                      className="text-gray-500 dark:text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {step.desc}
                    </motion.p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button with animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: durations.normal }}
            >
              <Link href="/measurement-guide">
                <motion.span
                  className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30 min-w-[200px] cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px -12px rgba(0, 123, 255, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.i
                    className="fas fa-play-circle mr-2"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: durations.fast }}
                  />
                  {t('cta')}
                </motion.span>
              </Link>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default MeasurementGuideSection;
