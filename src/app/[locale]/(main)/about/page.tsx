'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const stats = [
  { value: '15.000+', label: 'Tevreden klanten' },
  { value: '5 jaar', label: 'Garantie' },
  { value: '50+', label: 'Producten' },
  { value: '4.8/5', label: 'Klantwaardering' },
];

const values = [
  {
    icon: 'fa-gem',
    title: 'Kwaliteit',
    description: 'Wij gebruiken alleen de beste materialen voor duurzame producten.',
  },
  {
    icon: 'fa-handshake',
    title: 'Service',
    description: 'Persoonlijke aandacht en deskundig advies voor elke klant.',
  },
  {
    icon: 'fa-leaf',
    title: 'Duurzaamheid',
    description: 'Milieuvriendelijke productie en lange levensduur.',
  },
  {
    icon: 'fa-euro-sign',
    title: 'Eerlijke prijzen',
    description: 'Hoge kwaliteit voor een scherpe prijs, zonder verborgen kosten.',
  },
];

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.premium },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const cardVariants = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

export default function OverOnsPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
            >
              <motion.h1
                className="font-display text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
              >
                Wij zijn <span className="text-primary">Window Specialist</span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: durations.slow, delay: 0.2, ease: easings.premium }}
              >
                Al meer dan 10 jaar zijn wij de specialist in raamdecoratie en horren op maat.
                Wij geloven dat elk raam uniek is en verdient een oplossing die perfect past
                bij jouw woning en levensstijl.
              </motion.p>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={statVariants}
                  >
                    <motion.div
                      className="text-3xl font-bold text-primary mb-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: durations.fast }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: durations.slow, delay: 0.3, ease: easings.premium }}
            >
              <motion.img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl3KWyH6a5djj9VrolidPqThfUURYlhlwIoEocXZNCmRXosPIO3biSqFLYg7UeZlYFzyD6DhUGLhVCyiH_EU4nIw-U5qwrx8lPHQuzVFVZgKr5CCS9_C3cGuGMIbeU9D1umLoYg4LxUkzha8oK6YCJE4SIPNel6oHsS70P8kXGZJxhi30YXlOs-j1tixfaSAh7_4y3To6zjgNCdv5EzlVx98Mad5xdQniWJBg66CE887oc7hR5UQ0OV-fQiqaBl0xdwmXlmAZWFzWL"
                alt="Window Specialist team"
                className="rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: durations.normal }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
                Ons Verhaal
              </h2>
            </div>
          </ScrollAnimation>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <ScrollAnimation variant="fadeUp" delay={0.1}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Window Specialist begon in 2014 met een simpele missie: het aanbieden van hoogwaardige
                raamdecoratie en horren tegen eerlijke prijzen. Wat begon als een klein familiebedrijf
                is uitgegroeid tot een van de meest vertrouwde namen in Nederland.
              </p>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeUp" delay={0.2}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Wij geloven in de kracht van maatwerk. Elk raam is anders, en daarom produceren wij
                al onze producten op maat. Zo weet je zeker dat je altijd een perfecte pasvorm krijgt.
              </p>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeUp" delay={0.3}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Met meer dan 15.000 tevreden klanten en een gemiddelde waardering van 4.8 sterren,
                zijn wij trots op wat we hebben bereikt. Maar we stoppen niet - we blijven innoveren
                en verbeteren om jou de beste ervaring te bieden.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
                Onze Waarden
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Dit zijn de principes waar wij elke dag naar leven en werken.
              </p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {values.map((value, index) => (
              <StaggerItem key={index} variant="fadeUp">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center h-full"
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={`fas ${value.icon} text-2xl text-primary`}></i>
                  </motion.div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation variant="fadeUp">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
              Klaar om te beginnen?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation variant="fadeUp" delay={0.1}>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Ontdek ons assortiment of neem contact met ons op voor persoonlijk advies.
            </p>
          </ScrollAnimation>
          <ScrollAnimation variant="fadeUp" delay={0.2}>
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
                  <i className="fas fa-envelope mr-2"></i> Neem contact op
                </motion.span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
