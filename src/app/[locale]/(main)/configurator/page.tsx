'use client';

import { motion } from 'framer-motion';
import ProductConfigurator from '@/components/configurator/ProductConfigurator';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

// Animation variants
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

const features = [
  { icon: 'fa-ruler-combined', text: 'Op maat gemaakt' },
  { icon: 'fa-shield-alt', text: '5 jaar garantie' },
  { icon: 'fa-truck', text: 'Gratis bezorging' },
];

export default function ConfiguratorPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          >
            <i className="fas fa-sliders-h text-4xl text-primary"></i>
          </motion.div>
          <motion.h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.premium }}
          >
            Product Configurator
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
          >
            Configureer uw horren of raamdecoratie op maat. Selecteer uw kamer, kies uw product en voer uw maten in.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-gray-300"
                variants={featureVariants}
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <i className={`fas ${feature.icon} text-primary text-sm`}></i>
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Configurator Component */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp" delay={0.2}>
            <ProductConfigurator />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
