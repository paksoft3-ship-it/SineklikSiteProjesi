'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { easings, durations } from '@/lib/animation-config';

const TopBar = () => {
  const t = useTranslations('TopBar');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.normal,
        ease: easings.smooth,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.fast, ease: easings.smooth },
    },
  };

  const checkIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 500, damping: 15 },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        type: 'spring',
        stiffness: 500,
        damping: 15,
      },
    }),
  };

  return (
    <motion.div
      className="bg-secondary dark:bg-gray-900 py-2 text-sm overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-center items-center gap-4 md:gap-8 flex-wrap text-white"
          variants={containerVariants}
        >
          {/* Free Delivery */}
          <motion.div
            className="flex items-center gap-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.i
              className="fas fa-check text-primary"
              variants={checkIconVariants}
            />
            <motion.i
              className="fas fa-check text-primary -ml-2"
              variants={checkIconVariants}
            />
            <span>{t('free_delivery')}</span>
          </motion.div>

          <motion.span
            className="hidden md:inline text-gray-500"
            variants={itemVariants}
          >
            |
          </motion.span>

          {/* Happy Customers */}
          <motion.div
            className="flex items-center gap-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.i
              className="fas fa-check text-primary"
              variants={checkIconVariants}
            />
            <motion.i
              className="fas fa-check text-primary -ml-2"
              variants={checkIconVariants}
            />
            <span>{t('satisfied_customers')}</span>
          </motion.div>

          <motion.span
            className="hidden md:inline text-gray-500"
            variants={itemVariants}
          >
            |
          </motion.span>

          {/* Rating */}
          <motion.div
            className="flex items-center gap-2"
            variants={itemVariants}
          >
            <motion.i
              className="fas fa-check text-primary"
              variants={checkIconVariants}
            />
            <motion.i
              className="fas fa-check text-primary -ml-2"
              variants={checkIconVariants}
            />
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/about" className="hover:text-primary transition underline">
                {t('customer_rating')}
              </Link>
            </motion.div>
            <div className="flex text-yellow-400 text-xs">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.i
                  key={i}
                  className="fas fa-star"
                  custom={i}
                  variants={starVariants}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ duration: durations.fast }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopBar;
