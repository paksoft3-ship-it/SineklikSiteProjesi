'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

// Import data
import pagesData from '@/data/nl/pages.json';

// Animation variants
const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.5 },
  },
};

const contactItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

export default function ContactPage() {
  const { contact } = pagesData;

  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1">
      {/* Hero Section */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.premium }}
          >
            {contact.hero.title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
          >
            {contact.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <ScrollAnimation variant="fadeUp">
                <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">
                  Contactgegevens
                </h2>
              </ScrollAnimation>

              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                {/* Address */}
                <motion.div
                  className="flex items-start gap-4"
                  variants={contactItemVariants}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.info.address.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {contact.info.address.value}
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start gap-4"
                  variants={contactItemVariants}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Phone className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.info.phone.label}
                    </h3>
                    <motion.a
                      href={`tel:${contact.info.phone.value.replace(/\s/g, '')}`}
                      className="text-primary hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      {contact.info.phone.value}
                    </motion.a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  className="flex items-start gap-4"
                  variants={contactItemVariants}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.info.email.label}
                    </h3>
                    <motion.a
                      href={`mailto:${contact.info.email.value}`}
                      className="text-primary hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      {contact.info.email.value}
                    </motion.a>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div
                  className="flex items-start gap-4"
                  variants={contactItemVariants}
                >
                  <motion.div
                    className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center flex-shrink-0"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.info.whatsapp.label}
                    </h3>
                    <motion.a
                      href={`https://wa.me/${contact.info.whatsapp.value.replace(/\s/g, '').replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      {contact.info.whatsapp.value}
                    </motion.a>
                  </div>
                </motion.div>

                {/* Working Hours */}
                <motion.div
                  className="flex items-start gap-4"
                  variants={contactItemVariants}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Clock className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {contact.info.workingHours.label}
                    </h3>
                    <ul className="space-y-1">
                      {contact.info.workingHours.days.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex justify-between text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                        >
                          <span>{item.day}</span>
                          <span className="ml-8">{item.hours}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* Map Placeholder */}
              <ScrollAnimation variant="fadeUp" delay={0.3}>
                <motion.div
                  className="mt-8 bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: durations.normal }}
                >
                  <p className="text-gray-500 dark:text-gray-400">
                    Google Maps integratie
                  </p>
                </motion.div>
              </ScrollAnimation>
            </div>

            {/* Contact Form */}
            <div>
              <ScrollAnimation variant="fadeUp" delay={0.2}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm"
                  whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: durations.normal }}
                >
                  <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-6">
                    {contact.form.title}
                  </h2>
                  <ContactForm />
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
