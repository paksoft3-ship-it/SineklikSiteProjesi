'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const measurementTypes = [
  {
    id: 'dagmaat',
    name: 'Dagmaat',
    description: 'De binnenmaat van het raamkozijn, van binnenrand tot binnenrand.',
    steps: [
      'Meet de breedte op 3 punten: boven, midden en onder.',
      'Noteer de kleinste maat als de breedte.',
      'Meet de hoogte op 3 punten: links, midden en rechts.',
      'Noteer de kleinste maat als de hoogte.',
    ],
    products: ['Inzethorren', 'Plissé gordijnen'],
  },
  {
    id: 'glasmaat',
    name: 'Glasmaat',
    description: 'De maat van het glas, inclusief de rubber afdichting.',
    steps: [
      'Meet de zichtbare breedte van het glas.',
      'Meet de zichtbare hoogte van het glas.',
      'Tel 10mm bij voor de overlapping aan beide zijden.',
    ],
    products: ['Rolgordijnen', 'Jaloezieën'],
  },
  {
    id: 'doorgang',
    name: 'Doorgang',
    description: 'De vrije doorgang van een deur of opening.',
    steps: [
      'Meet de breedte van de opening op vloerniveau.',
      'Meet de hoogte van de opening aan beide zijden.',
      'Controleer of er voldoende ruimte is voor het frame.',
    ],
    products: ['Plissé hordeuren', 'Schuifhorren'],
  },
];

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

const cardVariants = {
  rest: { boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' },
  hover: {
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

const productTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 15 },
  },
};

const tipCardVariants = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

export default function MeetgidsPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.div
              className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <i className="fas fa-ruler-combined text-4xl text-primary"></i>
            </motion.div>
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, ease: easings.premium }}
            >
              Meetgids
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
            >
              Correct meten is essentieel voor een perfecte pasvorm.
              Volg onze stap-voor-stap instructies voor het beste resultaat.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <motion.section
        className="py-6 bg-green-50 dark:bg-green-900/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.normal, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-center gap-4 text-center"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: durations.slow, delay: 0.4 }}
          >
            <motion.i
              className="fas fa-shield-alt text-2xl text-green-600"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
            ></motion.i>
            <p className="text-green-800 dark:text-green-300 font-medium">
              <span className="font-bold">Gratis meetverzekering:</span> Verkeerd gemeten? Wij vervangen het product gratis!
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Measurement Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-12 text-center">
              Soorten metingen
            </h2>
          </ScrollAnimation>

          <div className="space-y-12">
            {measurementTypes.map((type, index) => (
              <ScrollAnimation key={type.id} variant="fadeUp" delay={index * 0.1}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden"
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <span className="text-2xl font-bold text-primary">{index + 1}</span>
                          </motion.div>
                          <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                            {type.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {type.description}
                        </p>
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ staggerChildren: 0.05 }}
                        >
                          {type.products.map((product, idx) => (
                            <motion.span
                              key={idx}
                              className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                              variants={productTagVariants}
                              whileHover={{ scale: 1.05 }}
                            >
                              {product}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                      <div className="lg:w-2/3">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                          Stappen:
                        </h4>
                        <motion.ol
                          className="space-y-3"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ staggerChildren: 0.1 }}
                        >
                          {type.steps.map((step, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-3"
                              variants={stepVariants}
                            >
                              <motion.span
                                className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                              >
                                {idx + 1}
                              </motion.span>
                              <span className="text-gray-700 dark:text-gray-300">{step}</span>
                            </motion.li>
                          ))}
                        </motion.ol>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-12 text-center">
              Tips voor het meten
            </h2>
          </ScrollAnimation>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            <StaggerItem variant="fadeUp">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center h-full"
                variants={tipCardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-ruler text-2xl text-primary"></i>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Gebruik een metalen meetlint
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Een metalen meetlint geeft nauwkeurigere resultaten dan een stoffen meetlint.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem variant="fadeUp">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center h-full"
                variants={tipCardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-redo text-2xl text-primary"></i>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Meet altijd 3 keer
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Meet op meerdere punten en gebruik de kleinste maat voor een goede pasvorm.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem variant="fadeUp">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center h-full"
                variants={tipCardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div
                  className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <i className="fas fa-pencil-alt text-2xl text-primary"></i>
                </motion.div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Noteer in centimeters
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Noteer alle maten in centimeters voor consistentie en nauwkeurigheid.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <ScrollAnimation variant="fadeUp">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
              Klaar om te bestellen?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Start de configurator en voer uw maten in voor een directe prijsindicatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator">
                <motion.span
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30 cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 123, 255, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-sliders-h mr-2"></i> Start configurator
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-base font-bold rounded-lg text-primary bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-question-circle mr-2"></i> Hulp nodig?
                </motion.span>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
