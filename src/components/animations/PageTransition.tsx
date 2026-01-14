'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { pageTransitionVariants, pageSlideVariants, pageScaleVariants } from '@/lib/animation-variants';
import { easings, durations } from '@/lib/animation-config';

// ============================================
// TYPES
// ============================================

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

type TransitionType = 'fade' | 'slide' | 'scale' | 'blur';

interface CustomPageTransitionProps extends PageTransitionProps {
  type?: TransitionType;
}

// ============================================
// MAIN PAGE TRANSITION (Fade + Blur)
// ============================================

export const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================
// SLIDE PAGE TRANSITION
// ============================================

export const SlidePageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageSlideVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================
// SCALE PAGE TRANSITION
// ============================================

export const ScalePageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageScaleVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================
// BLUR PAGE TRANSITION
// ============================================

export const BlurPageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className={className}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: durations.pageTransition, ease: easings.luxurious },
        }}
        exit={{
          opacity: 0,
          filter: 'blur(10px)',
          transition: { duration: durations.fast, ease: easings.premium },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================
// CONFIGURABLE PAGE TRANSITION
// ============================================

export const CustomPageTransition = ({
  children,
  className = '',
  type = 'fade',
}: CustomPageTransitionProps) => {
  const pathname = usePathname();

  const variantsMap = {
    fade: pageTransitionVariants,
    slide: pageSlideVariants,
    scale: pageScaleVariants,
    blur: {
      initial: { opacity: 0, filter: 'blur(10px)' },
      animate: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: durations.pageTransition, ease: easings.luxurious },
      },
      exit: {
        opacity: 0,
        filter: 'blur(10px)',
        transition: { duration: durations.fast, ease: easings.premium },
      },
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variantsMap[type]}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================
// SIMPLE FADE WRAPPER (No pathname dependency)
// ============================================

interface FadeWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeWrapper = ({ children, className = '', delay = 0 }: FadeWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: durations.pageTransition,
          delay,
          ease: easings.luxurious,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// SECTION TRANSITION WRAPPER
// ============================================

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SectionTransition = ({
  children,
  className = '',
  delay = 0,
}: SectionTransitionProps) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: durations.normal,
        delay,
        ease: easings.premium,
      }}
    >
      {children}
    </motion.section>
  );
};

// Default export
export default PageTransition;
