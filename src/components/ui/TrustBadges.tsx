'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Badge {
  icon: string;
  titleKey: string;
  color: string;
}

const badgeConfig: Badge[] = [
  { icon: 'fa-shield-alt', titleKey: 'guarantee', color: 'text-green-600' },
  { icon: 'fa-truck', titleKey: 'shipping', color: 'text-blue-600' },
  { icon: 'fa-undo', titleKey: 'returns', color: 'text-purple-600' },
  { icon: 'fa-headset', titleKey: 'support', color: 'text-orange-600' },
  { icon: 'fa-lock', titleKey: 'secure', color: 'text-teal-600' },
  { icon: 'fa-star', titleKey: 'rating', color: 'text-yellow-600' },
];

const paymentLogos = [
  { name: 'iDEAL', icon: 'fa-building-columns' },
  { name: 'Visa', icon: 'fa-cc-visa' },
  { name: 'Mastercard', icon: 'fa-cc-mastercard' },
  { name: 'PayPal', icon: 'fa-cc-paypal' },
  { name: 'Klarna', icon: 'fa-credit-card' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function TrustBadgesBar({
  variant = 'horizontal',
}: {
  variant?: 'horizontal' | 'grid';
}) {
  const t = useTranslations('TrustBadges');

  const badges = badgeConfig.map(badge => ({
    ...badge,
    title: t(`badges.${badge.titleKey}.title`),
    description: t(`badges.${badge.titleKey}.desc`),
  }));

  if (variant === 'grid') {
    return (
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div
              className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center ${badge.color}`}
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <i className={`fas ${badge.icon} text-xl`}></i>
            </motion.div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{badge.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{badge.description}</p>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <div className="overflow-hidden bg-gray-50 dark:bg-gray-900 py-4">
      <motion.div
        className="flex items-center gap-8 animate-marquee"
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...badges, ...badges].map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-3 whitespace-nowrap px-4"
          >
            <div className={`${badge.color}`}>
              <i className={`fas ${badge.icon} text-lg`}></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-sm">{badge.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{badge.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function PaymentBadges() {
  const t = useTranslations('TrustBadges');

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">{t('pay_with')}</span>
      {paymentLogos.map((payment, index) => (
        <motion.div
          key={index}
          className="w-12 h-8 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center"
          variants={itemVariants}
          whileHover={{ scale: 1.1, y: -2 }}
        >
          <i className={`fab ${payment.icon} text-xl text-gray-600 dark:text-gray-300`}></i>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function SecurityBadge() {
  const t = useTranslations('TrustBadges');

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.i
        className="fas fa-lock text-green-600"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="text-sm font-medium text-green-700 dark:text-green-300">
        {t('ssl_secured')}
      </span>
    </motion.div>
  );
}

export function ReviewSummary({
  rating = 4.8,
  totalReviews = 2547,
}: {
  rating?: number;
  totalReviews?: number;
}) {
  const t = useTranslations('Common');
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <motion.i
            key={i}
            className={`fas ${
              i < fullStars
                ? 'fa-star text-yellow-400'
                : i === fullStars && hasHalfStar
                ? 'fa-star-half-alt text-yellow-400'
                : 'fa-star text-gray-300'
            } text-sm`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
      <span className="font-bold text-gray-900 dark:text-white">{rating}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        ({totalReviews.toLocaleString()} {t('trust_badges.reviews')})
      </span>
    </motion.div>
  );
}

export function GuaranteeBadge() {
  const t = useTranslations('Common');

  return (
    <motion.div
      className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full w-24 h-24 flex items-center justify-center shadow-lg"
      initial={{ rotate: -10, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex flex-col items-center justify-center">
        <motion.i
          className="fas fa-award text-yellow-500 text-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs font-bold text-gray-900 dark:text-white">5 {t('trust_badges.guarantee').toUpperCase()}</span>
      </div>
    </motion.div>
  );
}

export function CertificationBadges() {
  const t = useTranslations('TrustBadges');

  const certifications = [
    { key: 'iso', icon: 'fa-certificate' },
    { key: 'ce', icon: 'fa-check-circle' },
    { key: 'tuv', icon: 'fa-shield-alt' },
  ];

  return (
    <motion.div
      className="flex items-center gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <i className={`fas ${cert.icon} text-gray-600 dark:text-gray-400`}></i>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {t(`certifications.${cert.key}`)}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
