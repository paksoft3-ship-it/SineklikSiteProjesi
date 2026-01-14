'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { easings, durations } from '@/lib/animation-config';

interface Question {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: Question[];
}

const FAQAccordion = ({ questions }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Item stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.normal,
        ease: easings.smooth,
      },
    },
  };

  // Content expand/collapse animation
  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: durations.normal, ease: easings.smooth },
        opacity: { duration: durations.fast },
      },
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: durations.normal, ease: easings.smooth },
        opacity: { duration: durations.normal, delay: 0.1 },
      },
    },
  };

  // Chevron rotation animation
  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  // Card hover effect
  const cardVariants = {
    rest: {
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      y: 0,
    },
    hover: {
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      y: -2,
      transition: { duration: durations.fast, ease: easings.smooth },
    },
  };

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {questions.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="rounded-xl overflow-hidden"
        >
          <motion.div
            className="bg-white dark:bg-gray-800"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
          >
            {/* Question Button */}
            <motion.button
              onClick={() => toggleQuestion(index)}
              className={cn(
                'w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors',
                openIndex === index
                  ? 'bg-primary/5 dark:bg-primary/10'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              )}
              aria-expanded={openIndex === index}
              whileTap={{ scale: 0.995 }}
            >
              <motion.span
                className="font-semibold text-gray-900 dark:text-white"
                animate={{
                  color: openIndex === index ? '#007BFF' : undefined,
                }}
                transition={{ duration: durations.fast }}
              >
                {item.question}
              </motion.span>

              <motion.div
                variants={chevronVariants}
                animate={openIndex === index ? 'open' : 'closed'}
                transition={{ duration: durations.normal, ease: easings.snappy }}
              >
                <ChevronDown
                  className={cn(
                    'w-5 h-5 flex-shrink-0 transition-colors',
                    openIndex === index ? 'text-primary' : 'text-gray-500'
                  )}
                />
              </motion.div>
            </motion.button>

            {/* Answer Content */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  variants={contentVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="overflow-hidden"
                >
                  <motion.div
                    className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: durations.fast, delay: 0.1 }}
                  >
                    {item.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FAQAccordion;
