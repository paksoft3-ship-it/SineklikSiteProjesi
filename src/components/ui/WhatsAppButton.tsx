'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easings, durations } from '@/lib/animation-config';

const WhatsAppButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const phoneNumber = '31612345678';
  const message = encodeURIComponent('Hallo, ik heb een vraag over uw producten.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Button animation variants
  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: '0 10px 30px -12px rgba(34, 197, 94, 0.4)',
    },
    hover: {
      scale: 1.15,
      boxShadow: '0 15px 40px -10px rgba(34, 197, 94, 0.5)',
      transition: { duration: durations.fast, ease: easings.snappy },
    },
    tap: { scale: 0.9 },
  };

  // Tooltip animation variants
  const tooltipVariants = {
    hidden: {
      opacity: 0,
      y: 8,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 4,
      scale: 0.95,
      transition: { duration: durations.fast },
    },
  };

  // Pulse ring animation
  const pulseRingVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: 1.5,
      opacity: 0,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            className="absolute bottom-full right-0 mb-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.p
              className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Hulp nodig? Chat met ons!
            </motion.p>
            <motion.div
              className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white dark:bg-gray-800"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.05 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Ring Effect */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        variants={pulseRingVariants}
        initial="initial"
        animate="animate"
      />

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500/50"
        aria-label="Chat op WhatsApp"
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </motion.svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
