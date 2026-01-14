'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const TestimonialsSection = () => {
  const t = useTranslations('HomePage.testimonials');

  const testimonials = [
    {
      id: 1,
      name: t('reviews.review1.name'),
      location: t('reviews.review1.location'),
      avatar: 'J',
      avatarColor: 'bg-blue-500',
      rating: 5,
      text: t('reviews.review1.text'),
    },
    {
      id: 2,
      name: t('reviews.review2.name'),
      location: t('reviews.review2.location'),
      avatar: 'S',
      avatarColor: 'bg-pink-500',
      rating: 5,
      text: t('reviews.review2.text'),
    },
    {
      id: 3,
      name: t('reviews.review3.name'),
      location: t('reviews.review3.location'),
      avatar: 'M',
      avatarColor: 'bg-green-500',
      rating: 4.5,
      text: t('reviews.review3.text'),
    },
  ];

  // Star animation variants
  const starVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 500,
        damping: 15,
      },
    }),
  };

  // Card hover variants with subtle 3D tilt
  const cardVariants = {
    rest: {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    hover: {
      y: -8,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
      transition: { duration: durations.normal, ease: easings.smooth },
    },
  };

  // Avatar bounce animation
  const avatarVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.15,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  };

  // Quote icon animation
  const quoteVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 0.1,
      scale: 1,
      rotate: 0,
      transition: { duration: durations.slow, ease: easings.premium },
    },
  };

  const renderStars = (rating: number, testimonialId: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <motion.i
          key={`${testimonialId}-star-${i}`}
          className="fas fa-star"
          custom={i}
          variants={starVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ duration: durations.fast }}
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <motion.i
          key={`${testimonialId}-half`}
          className="fas fa-star-half-alt"
          custom={fullStars}
          variants={starVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ duration: durations.fast }}
        />
      );
    }

    return stars;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <ScrollAnimation variant="fadeUp">
          <motion.h2
            className="font-display text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: durations.normal, ease: easings.smooth }}
          >
            {t('title')}
          </motion.h2>
        </ScrollAnimation>

        {/* Testimonials Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.id} variant="scaleUp">
              <motion.div
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-left relative overflow-hidden h-full"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
              >
                {/* Background Quote Icon */}
                <motion.i
                  className="fas fa-quote-right text-9xl text-gray-900 dark:text-white absolute -top-4 -right-4 pointer-events-none"
                  variants={quoteVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                {/* Stars with staggered animation */}
                <div className="flex text-yellow-400 mb-4 relative z-10">
                  {renderStars(testimonial.rating, testimonial.id)}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  className="text-gray-700 dark:text-gray-300 mb-6 italic relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Author Info */}
                <div className="flex items-center relative z-10">
                  <motion.div
                    className={`w-10 h-10 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold mr-3`}
                    variants={avatarVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <motion.h4
                      className="font-bold text-sm text-gray-900 dark:text-white"
                      whileHover={{ x: 4 }}
                      transition={{ duration: durations.fast }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <span className="text-xs text-gray-500">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trustpilot Rating */}
        <ScrollAnimation delay={0.4} variant="fadeUp">
          <motion.div
            className="mt-12 flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: durations.fast }}
            >
              {t('trustpilot.excellent')}
            </motion.span>
            <div className="flex text-green-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.i
                  key={i}
                  className="fas fa-star"
                  custom={i}
                  variants={starVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.3, y: -4 }}
                  transition={{ duration: durations.fast }}
                />
              ))}
            </div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: durations.fast }}
            >
              {t('trustpilot.score')}
            </motion.span>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;
