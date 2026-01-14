'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations, delays } from '@/lib/animation-config';

const Footer = () => {
  const tFooter = useTranslations('Footer');
  const tHeader = useTranslations('Header');

  const trustBadges = [
    {
      icon: 'fa-shield-alt',
      title: tFooter('trust.risk_free.title'),
      description: tFooter('trust.risk_free.desc'),
    },
    {
      icon: 'fa-undo-alt',
      title: tFooter('trust.returns.title'),
      description: tFooter('trust.returns.desc'),
    },
    {
      icon: 'fa-undo-alt',
      title: tFooter('trust.returns.title'),
      description: tFooter('trust.returns.desc'),
    },
  ];

  // Animation for footer links
  const linkVariants = {
    rest: { x: 0 },
    hover: {
      x: 4,
      color: '#007BFF',
      transition: { duration: durations.fast, ease: easings.smooth }
    },
  };

  // Animation for icons
  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: durations.fast, ease: easings.snappy }
    },
  };

  // Star animation variants
  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 500,
        damping: 15,
      },
    }),
  };

  return (
    <footer className="bg-secondary dark:bg-bg-dark-1">
      {/* Trust Badges Section */}
      <ScrollAnimation variant="fadeUp">
        <div className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {trustBadges.map((badge, index) => (
                <StaggerItem key={index} variant="fadeUp">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ y: -4 }}
                    transition={{ duration: durations.fast }}
                  >
                    <motion.div
                      className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 123, 255, 0.3)' }}
                      transition={{ duration: durations.fast }}
                    >
                      <motion.i
                        className={`fas ${badge.icon} text-2xl text-primary`}
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: durations.fast }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {badge.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {badge.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </ScrollAnimation>

      {/* Main Footer Content */}
      <ScrollAnimation variant="fadeUp" delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, delay: 0.1 }}
            >
              <motion.h5
                className="font-display font-bold text-xl text-white mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-white">Window</span>
                <span className="text-primary">Specialist</span>
              </motion.h5>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {tFooter('columns.company_desc')}
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-gray-400">KVK:</strong> 12345678
              </p>
            </motion.div>

            {/* Plissé Horren Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, delay: 0.2 }}
            >
              <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
                {tHeader('nav.horren')}
              </h6>
              <ul className="space-y-3 text-sm">
                {[
                  { href: '/products/plisse-screens/door', label: tHeader('items.horren.deur') },
                  { href: '/products/plisse-screens/window', label: tHeader('items.horren.raam') },
                  { href: '/products/plisse-screens/glass-balcony', label: tHeader('items.horren.balkon') },
                  { href: '/products/plisse-screens/screen-curtain', label: tHeader('items.horren.combi') },
                  { href: '/products/plisse-screens/barrier-free', label: tHeader('items.horren.drempel') },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <motion.div
                      variants={linkVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <Link href={link.href as any} className="text-gray-400 hover:text-primary transition inline-block">
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Plissé Gordijnen Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, delay: 0.3 }}
            >
              <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
                {tHeader('nav.gordijnen')}
              </h6>
              <ul className="space-y-3 text-sm">
                {[
                  { href: '/products/plisse-curtains/honeycomb', label: tHeader('items.gordijnen.honeycomb') },
                  { href: '/products/plisse-curtains/blackout', label: tHeader('items.gordijnen.verduisterend') },
                  { href: '/products/plisse-curtains/light-filtering', label: tHeader('items.gordijnen.licht') },
                  { href: '/products/plisse-curtains/colors', label: tHeader('items.gordijnen.kleur') },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <motion.div
                      variants={linkVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <Link href={link.href as any} className="text-gray-400 hover:text-primary transition inline-block">
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Service Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, delay: 0.4 }}
            >
              <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
                {tFooter('columns.service')}
              </h6>
              <ul className="space-y-3 text-sm">
                {[
                  { href: '/contact', label: 'Contact' },
                  { href: '/faq', label: 'FAQ' },
                  { href: '/measurement-guide', label: tHeader('nav.meetgids') },
                  { href: '/warranty', label: 'Garantie' },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <motion.div
                      variants={linkVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <Link href={link.href as any} className="text-gray-400 hover:text-primary transition inline-block">
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Specialist Badge / Review Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, delay: 0.5 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg"
                whileHover={{ y: -4, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: durations.normal }}
              >
                <h6 className="font-display font-bold text-primary text-sm mb-4">
                  {tFooter('columns.specialist')}
                </h6>
                <ul className="space-y-2 text-sm mb-4">
                  {[
                    tFooter('specialist_points.price'),
                    tFooter('specialist_points.delivery'),
                    tFooter('specialist_points.advice'),
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <motion.i
                        className="fas fa-check text-primary text-xs"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 500 }}
                      />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Review */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: durations.fast }}
                    >
                      J
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Jan de Vries</p>
                      <div className="flex text-yellow-400 text-xs">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <motion.i
                            key={i}
                            className="fas fa-star"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={starVariants}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    "Mooi product voor de prijs!"
                  </p>
                </div>

                {/* Trustpilot Style Rating */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex text-green-500 text-sm">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.i
                          key={i}
                          className="fas fa-star"
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={starVariants}
                        />
                      ))}
                    </div>
                    <motion.span
                      className="text-xs text-gray-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      4.721 reviews
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: durations.normal }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p>© 2024 Window Specialist. Alle rechten voorbehouden.</p>
              <div className="flex space-x-6">
                {[
                  { href: '/privacy', label: 'Privacy' },
                  { href: '/terms', label: 'Voorwaarden' },
                ].map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ y: -2 }}
                    transition={{ duration: durations.fast }}
                  >
                    <Link href={link.href as any} className="hover:text-gray-300 transition">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {['fa-cc-visa', 'fa-cc-mastercard', 'fa-cc-paypal', 'fa-credit-card'].map((icon, index) => (
                <motion.i
                  key={icon}
                  className={`fab ${icon.startsWith('fa-cc') ? 'fab' : 'fas'} ${icon} text-2xl text-gray-500`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, color: '#fff' }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
