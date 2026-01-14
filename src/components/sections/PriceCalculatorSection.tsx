'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations, springs } from '@/lib/animation-config';

const PriceCalculatorSection = () => {
  const t = useTranslations('HomePage.calculator');
  const tHeader = useTranslations('Header');

  const products = [
    { id: 'plisse-hor-deur', name: t('products.plisse_hor_deur'), basePrice: 199, pricePerCm2: 0.0014, category: tHeader('nav.horren') },
    { id: 'plisse-hor-raam', name: t('products.plisse_hor_raam'), basePrice: 89, pricePerCm2: 0.001, category: tHeader('nav.horren') },
    { id: 'plisse-hor-glazen-balkon', name: t('products.plisse_hor_balcony'), basePrice: 249, pricePerCm2: 0.0016, category: tHeader('nav.horren') },
    { id: 'plisse-hor-vast', name: t('products.plisse_hor_fixed'), basePrice: 69, pricePerCm2: 0.0008, category: tHeader('nav.horren') },
    { id: 'plisse-hor-binnenmontage', name: t('products.plisse_hor_inside'), basePrice: 79, pricePerCm2: 0.0009, category: tHeader('nav.horren') },
    { id: 'plisse-hor-combinatie', name: t('products.plisse_hor_combi'), basePrice: 299, pricePerCm2: 0.002, category: tHeader('nav.horren') },
    { id: 'plisse-hor-drempelloos', name: t('products.plisse_hor_threshold'), basePrice: 229, pricePerCm2: 0.0015, category: tHeader('nav.horren') },
    { id: 'plisse-gordijn-honeycomb', name: t('products.plisse_curtain_honeycomb'), basePrice: 129, pricePerCm2: 0.0015, category: tHeader('nav.gordijnen') },
    { id: 'plisse-gordijn-verduisterend', name: t('products.plisse_curtain_blackout'), basePrice: 99, pricePerCm2: 0.0012, category: tHeader('nav.gordijnen') },
    { id: 'plisse-gordijn-lichtdoorlatend', name: t('products.plisse_curtain_light'), basePrice: 79, pricePerCm2: 0.001, category: tHeader('nav.gordijnen') },
    { id: 'plisse-gordijn-standaard', name: t('products.plisse_curtain_standard'), basePrice: 69, pricePerCm2: 0.0009, category: tHeader('nav.gordijnen') },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(200);
  const [professionalInstall, setProfessionalInstall] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  // Animated price values using springs
  const springMin = useSpring(0, { stiffness: 100, damping: 30 });
  const springMax = useSpring(0, { stiffness: 100, damping: 30 });
  const displayMin = useTransform(springMin, (value) => Math.round(value));
  const displayMax = useTransform(springMax, (value) => Math.round(value));

  useEffect(() => {
    const product = products.find((p) => p.id === selectedProduct);
    if (product) {
      const area = width * height;
      const baseCalculation = product.basePrice + area * product.pricePerCm2;
      const installCost = professionalInstall ? 45 : 0;

      const minPrice = Math.round(baseCalculation + installCost);
      const maxPrice = Math.round(baseCalculation * 1.2 + installCost);

      setPriceRange({ min: minPrice, max: maxPrice });
      springMin.set(minPrice);
      springMax.set(maxPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct, width, height, professionalInstall]);

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: durations.slow,
        ease: easings.premium,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 15 },
    },
  };

  const trustBadgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + i * 0.15, duration: durations.normal },
    }),
  };

  // Toggle animation variants
  const toggleVariants = {
    off: { x: 4 },
    on: { x: 28 },
  };

  // Input focus animation
  const inputFocusVariants = {
    rest: { scale: 1, boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)' },
    focus: {
      scale: 1.02,
      boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.15)',
      transition: { duration: durations.fast },
    },
  };

  return (
    <section className="py-20 bg-bg-light-1 dark:bg-bg-dark-2 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimation variant="fadeLeft">
            <div className="text-gray-900 dark:text-white">
              <motion.span
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.i
                  className="fas fa-check-circle mr-2"
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15, delay: 0.2 }}
                />
                {t('badge_inclusive')}
              </motion.span>

              <motion.h2
                className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: durations.slow, ease: easings.smooth }}
              >
                {t('title')}
                <br />
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: durations.normal }}
                >
                  {t('title_highlight')}
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: durations.normal }}
              >
                {t('description')}
              </motion.p>

              {/* Trust Badges with stagger animation */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: 'fa-truck', text: t('badges.delivery') },
                  { icon: 'fa-shield-alt', text: t('badges.warranty') },
                  { icon: 'fa-tools', text: t('badges.install') },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    custom={index}
                    variants={trustBadgeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ duration: durations.fast }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <i className={`fas ${badge.icon} text-primary`}></i>
                    </motion.div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Calculator Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: durations.normal }}
          >
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <i className="fas fa-calculator text-primary"></i>
              </motion.div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                {t('form.title')}
              </h3>
            </motion.div>

            {/* Product Selection */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('form.product_label')}
              </label>
              <motion.div
                className="relative"
                variants={inputFocusVariants}
                initial="rest"
                whileFocus="focus"
              >
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white appearance-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                >
                  {Object.entries(groupedProducts).map(([category, prods]) => (
                    <optgroup key={category} label={category}>
                      {prods.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <motion.i
                  className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                />
              </motion.div>
            </motion.div>

            {/* Dimensions */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('form.width')}
                </label>
                <motion.input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  min={30}
                  max={300}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Bijv: 120"
                  whileFocus={{ scale: 1.02, boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.15)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('form.height')}
                </label>
                <motion.input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  min={30}
                  max={400}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Bijv: 200"
                  whileFocus={{ scale: 1.02, boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.15)' }}
                />
              </div>
            </motion.div>

            {/* Professional Installation Toggle with spring animation */}
            <motion.div
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{t('form.install_title')}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('form.install_desc')}</p>
              </div>
              <motion.button
                onClick={() => setProfessionalInstall(!professionalInstall)}
                className={`relative w-14 h-8 rounded-full transition-colors ${professionalInstall ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow"
                  variants={toggleVariants}
                  animate={professionalInstall ? 'on' : 'off'}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </motion.div>

            {/* Animated Price Display */}
            <motion.div
              className="flex items-center justify-between mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">{t('form.estimated_price')}</span>
              <div className="text-right">
                <motion.div
                  className="text-3xl font-bold text-primary"
                  key={`${priceRange.min}-${priceRange.max}`}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.span>{displayMin}</motion.span>
                  <span> - </span>
                  <span>€</span>
                  <motion.span>{displayMax}</motion.span>
                </motion.div>
                <span className="block text-xs text-gray-500 dark:text-gray-400">{t('form.vat_included')}</span>
              </div>
            </motion.div>

            {/* CTA Button with ripple and glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/quote">
                <motion.span
                  className="w-full inline-flex justify-center items-center px-6 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition shadow-lg shadow-blue-500/30 cursor-pointer"
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 40px -12px rgba(0, 123, 255, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.i
                    className="fas fa-file-alt mr-2"
                    whileHover={{ rotate: 10 }}
                  />
                  {t('form.cta')}
                </motion.span>
              </Link>
            </motion.div>

            <motion.p
              className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {t('form.disclaimer')}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculatorSection;
