'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations, delays } from '@/lib/animation-config';

const PopularProductsSection = () => {
  const t = useTranslations('HomePage.popular');
  const tHeader = useTranslations('Header');

  const products = [
    {
      id: 'plisse-hor-deur',
      name: tHeader('items.horren.deur'),
      description: t('products.door_desc'),
      price: 199,
      image: '/images/products/plisse-hordeur.png',
      link: '/producten/plisse-horren/deur',
      badge: tHeader('badges.populair'),
    },
    {
      id: 'plisse-gordijn-honeycomb',
      name: tHeader('items.gordijnen.honeycomb'),
      description: t('products.honey_desc'),
      price: 129,
      image: '/images/collections/gordijnen.png',
      link: '/producten/plisse-gordijnen/honeycomb',
      badge: tHeader('badges.bestseller'),
    },
    {
      id: 'plisse-gordijn-verduisterend',
      name: tHeader('items.gordijnen.verduisterend'),
      description: t('products.blackout_desc'),
      price: 99,
      image: '/images/products/gordijn-verduisterend.png',
      link: '/producten/plisse-gordijnen/verduisterend',
      badge: null,
    },
    {
      id: 'plisse-hor-raam',
      name: tHeader('items.horren.raam'),
      description: t('products.window_desc'),
      price: 89,
      image: '/images/products/raam-hor.png',
      link: '/producten/plisse-horren/raam',
      badge: null,
    },
  ];

  // Card hover variants
  const cardVariants = {
    rest: {
      y: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    hover: {
      y: -8,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: { duration: durations.normal, ease: easings.smooth },
    },
  };

  // Badge animation
  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 500, damping: 15, delay: 0.3 },
    },
  };

  // CTA button animation
  const ctaVariants = {
    rest: { backgroundColor: 'rgb(249 250 251)' },
    hover: {
      backgroundColor: '#007BFF',
      color: '#fff',
      transition: { duration: durations.fast },
    },
  };

  return (
    <section className="py-20 bg-bg-light-1 dark:bg-bg-dark-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <motion.h2
                className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: durations.normal }}
              >
                {t('title')}
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: durations.normal, delay: 0.1 }}
              >
                {t('subtitle')}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, delay: 0.2 }}
              whileHover={{ x: 4 }}
            >
              <Link
                href="/products/plisse-screens"
                className="mt-4 md:mt-0 inline-flex items-center text-primary font-semibold hover:text-primary-dark transition"
              >
                {t('view_all')}
                <motion.i
                  className="fas fa-arrow-right ml-2"
                  whileHover={{ x: 4 }}
                  transition={{ duration: durations.fast }}
                />
              </Link>
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {products.map((product, index) => (
            <StaggerItem key={product.id} variant="fadeUp">
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="h-full"
              >
                <Link
                  href={product.link as any}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors duration-300 group block h-full"
                >
                  {/* Badge */}
                  {product.badge && (
                    <motion.span
                      className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded mb-4"
                      variants={badgeVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {product.badge}
                    </motion.span>
                  )}

                  {/* Image Preview */}
                  <motion.div
                    className="mb-6 aspect-square rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: durations.fast }}
                  >
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: durations.slow, ease: easings.premium }}
                    />
                  </motion.div>

                  {/* Product Info */}
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>

                  {/* Price with animation */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-sm text-gray-500">{t('from')} </span>
                    <motion.span
                      className="text-2xl font-bold text-primary"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: durations.fast }}
                    >
                      €{product.price}
                    </motion.span>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.span
                    className="block w-full text-center py-3 bg-gray-50 dark:bg-gray-700/50 text-primary font-medium rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('view_btn')}
                  </motion.span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PopularProductsSection;
