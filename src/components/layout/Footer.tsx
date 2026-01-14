'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const Footer = () => {
  const tFooter = useTranslations('Footer');
  const tHeader = useTranslations('Header');
  const tCommon = useTranslations('Common');
  const [email, setEmail] = useState('');

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
      icon: 'fa-award',
      title: tFooter('trust.quality.title'),
      description: tFooter('trust.quality.desc'),
    },
  ];

  const linkVariants = {
    rest: { x: 0 },
    hover: {
      x: 4,
      color: '#007BFF',
      transition: { duration: durations.fast, ease: easings.smooth }
    },
  };

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

  const socialLinks = [
    { icon: 'fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fa-pinterest-p', href: '#', label: 'Pinterest' },
    { icon: 'fa-linkedin-in', href: '#', label: 'LinkedIn' },
  ];

  const paymentMethods = [
    { icon: 'fa-building-columns', name: 'iDEAL' },
    { icon: 'fa-cc-visa', name: 'Visa' },
    { icon: 'fa-cc-mastercard', name: 'Mastercard' },
    { icon: 'fa-cc-paypal', name: 'PayPal' },
    { icon: 'fa-credit-card', name: 'Klarna' },
  ];

  const certifications = [
    { icon: 'fa-certificate', name: 'ISO 9001' },
    { icon: 'fa-check-circle', name: 'CE' },
    { icon: 'fa-shield-alt', name: 'TÜV' },
  ];

  return (
    <footer className="bg-secondary dark:bg-bg-dark-1">
      {/* Scrolling Trust Badges Marquee */}
      <div className="overflow-hidden bg-gray-800 dark:bg-gray-900 py-3 border-b border-gray-700">
        <motion.div
          className="flex items-center gap-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-12 whitespace-nowrap">
              {[
                { icon: 'fa-shield-alt', text: `5 ${tCommon('trust_badges.guarantee')}`, color: 'text-green-400' },
                { icon: 'fa-truck', text: tCommon('trust_badges.free_shipping'), color: 'text-blue-400' },
                { icon: 'fa-undo', text: `30 ${tCommon('trust_badges.returns')}`, color: 'text-purple-400' },
                { icon: 'fa-headset', text: tCommon('trust_badges.support'), color: 'text-orange-400' },
                { icon: 'fa-lock', text: tCommon('trust_badges.secure'), color: 'text-teal-400' },
                { icon: 'fa-star', text: '4.8/5 ' + tCommon('trust_badges.rating'), color: 'text-yellow-400' },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4">
                  <i className={`fas ${badge.icon} ${badge.color}`}></i>
                  <span className="text-gray-300 text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info - 2 columns */}
            <motion.div
              className="lg:col-span-2"
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
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {tFooter('columns.company_desc')}
              </p>

              {/* Social Links */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-white mb-3">{tFooter('bottom.social_follow')}</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <i className={`fab ${social.icon}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="text-gray-500 text-sm space-y-1">
                <p><strong className="text-gray-400">KVK:</strong> 12345678</p>
                <p><strong className="text-gray-400">BTW:</strong> NL123456789B01</p>
              </div>
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
                    <motion.div variants={linkVariants} initial="rest" whileHover="hover">
                      <Link href={link.href as any} className="text-gray-400 hover:text-primary transition inline-flex items-center gap-2">
                        <i className="fas fa-chevron-right text-[8px] text-primary opacity-0 group-hover:opacity-100"></i>
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
                    <motion.div variants={linkVariants} initial="rest" whileHover="hover">
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
                  { href: '/configurator', label: tHeader('nav.configurator') },
                  { href: '/about', label: tHeader('nav.over_ons') },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <motion.div variants={linkVariants} initial="rest" whileHover="hover">
                      <Link href={link.href as any} className="text-gray-400 hover:text-primary transition inline-block">
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, delay: 0.5 }}
            >
              {/* Newsletter */}
              <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-4 mb-4">
                <h6 className="font-bold text-white text-sm mb-2">{tFooter('newsletter.title')}</h6>
                <p className="text-gray-400 text-xs mb-3">{tFooter('newsletter.desc')}</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={tFooter('newsletter.placeholder')}
                    className="flex-1 px-3 py-2 bg-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <motion.button
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </motion.button>
                </div>
              </div>

              {/* Trustpilot Style Rating */}
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl p-4"
                whileHover={{ y: -2 }}
                transition={{ duration: durations.fast }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-green-500 text-lg">
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
                  <span className="font-bold text-gray-900 dark:text-white">4.8</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  2.500+ {tCommon('trust_badges.reviews')}
                </p>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" alt="Trustpilot" className="h-4 dark:invert" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Bottom Bar - Redesigned */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Payment Methods & Certifications Row */}
          <motion.div
            className="py-6 border-b border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Payment Methods */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-sm text-gray-400 font-medium">{tCommon('trust_badges.pay_with')}</span>
                <div className="flex items-center gap-3">
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      className="w-14 h-9 bg-white dark:bg-gray-800 rounded-md flex items-center justify-center shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <i className={`fab ${method.icon} text-xl text-gray-700 dark:text-gray-300`}></i>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Security Badge */}
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-green-900/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <motion.i
                  className="fas fa-lock text-green-400"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="text-sm text-green-300 font-medium">
                  {tCommon('trust_badges.ssl_secured')}
                </span>
              </motion.div>

              {/* Certifications */}
              <div className="flex items-center gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className={`fas ${cert.icon} text-gray-400`}></i>
                    <span className="text-xs font-medium text-gray-300">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copyright & Legal Links Row */}
          <motion.div
            className="py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright & Made In */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
                <p>{tFooter('bottom.copyright', { year: new Date().getFullYear() })}</p>
                <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇳🇱</span>
                  <span>{tFooter('bottom.made_in')}</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                {[
                  { href: '/privacy', label: tFooter('bottom.privacy') },
                  { href: '/voorwaarden', label: tFooter('bottom.terms') },
                  { href: '/cookies', label: tFooter('bottom.cookies') },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ y: -2 }}
                    transition={{ duration: durations.fast }}
                  >
                    <Link
                      href={link.href as any}
                      className="text-gray-500 hover:text-gray-300 transition"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
