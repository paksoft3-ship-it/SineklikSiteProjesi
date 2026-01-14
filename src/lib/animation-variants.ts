/**
 * Animation Variants Library
 * Reusable Framer Motion variants for consistent animations
 */

import { Variants } from 'framer-motion';
import { easings, durations, delays, transforms, shadows, springs } from './animation-config';

// ============================================
// SCROLL REVEAL VARIANTS
// ============================================

export const scrollRevealVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: transforms.slideDistance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.normal, ease: easings.premium },
    },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -transforms.slideDistance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.normal, ease: easings.premium },
    },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -transforms.slideDistance * 1.5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: durations.normal, ease: easings.premium },
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: transforms.slideDistance * 1.5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: durations.normal, ease: easings.premium },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: durations.normal, ease: easings.premium },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: durations.slow, ease: easings.smooth },
    },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.15 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: durations.slow, ease: easings.smooth },
    },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: durations.slow, ease: easings.premium },
    },
  },
  rotateIn: {
    hidden: { opacity: 0, rotateY: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: durations.slow, ease: easings.premium },
    },
  },
  clipReveal: {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: {
      clipPath: 'inset(0% 0 0 0)',
      transition: { duration: durations.dramatic, ease: easings.luxurious },
    },
  },
  slideReveal: {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: durations.dramatic, ease: easings.luxurious },
    },
  },
  // Pop in with overshoot
  popIn: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ...springs.bouncy },
    },
  },
  // Dramatic entrance from bottom
  riseUp: {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.dramatic, ease: easings.easeOutExpo },
    },
  },
};

// ============================================
// CONTAINER / STAGGER VARIANTS
// ============================================

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delays.stagger,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerVariants = (
  staggerDelay = delays.stagger,
  childDelay = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay,
    },
  },
});

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easings.premium },
  },
};

// ============================================
// CARD HOVER VARIANTS
// ============================================

export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: shadows.sm,
    transition: { duration: durations.hover, ease: easings.smooth },
  },
  hover: {
    scale: transforms.scaleSubtle,
    y: transforms.liftY,
    boxShadow: shadows.xl,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
  tap: {
    scale: transforms.scalePressed,
    transition: { duration: durations.instant },
  },
};

export const cardLiftVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: shadows.sm,
    transition: { duration: durations.hover, ease: easings.smooth },
  },
  hover: {
    y: transforms.liftY,
    boxShadow: shadows.xl,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

export const cardSubtleVariants: Variants = {
  rest: {
    y: 0,
    transition: { duration: durations.hover, ease: easings.smooth },
  },
  hover: {
    y: transforms.subtleLiftY,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

// ============================================
// IMAGE HOVER VARIANTS
// ============================================

export const imageHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: durations.dramatic, ease: easings.premium },
  },
};

export const imageZoomRotateVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 2,
    transition: { duration: durations.dramatic, ease: easings.premium },
  },
};

export const imageOverlayVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: durations.normal, ease: easings.premium },
  },
};

// Ken Burns effect for images
export const kenBurnsVariants: Variants = {
  initial: { scale: 1, x: 0, y: 0 },
  animate: {
    scale: 1.1,
    x: [0, 10, -10, 0],
    y: [0, -10, 10, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear',
    },
  },
};

// ============================================
// BUTTON VARIANTS
// ============================================

export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: transforms.scaleHover,
    transition: { duration: durations.fast, ease: easings.snappy },
  },
  tap: {
    scale: transforms.scalePressed,
    transition: { duration: durations.instant },
  },
};

export const buttonSubtleVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: transforms.scaleSubtle,
    transition: { duration: durations.fast, ease: easings.smooth },
  },
  tap: {
    scale: 0.98,
    transition: { duration: durations.instant },
  },
};

export const buttonGlowVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 14px 0 rgba(0, 123, 255, 0.3)',
  },
  hover: {
    scale: transforms.scaleHover,
    boxShadow: shadows.glow.primary,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
  tap: {
    scale: transforms.scalePressed,
    transition: { duration: durations.instant },
  },
};

// ============================================
// ICON / BADGE VARIANTS
// ============================================

export const iconHoverVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { ...springs.snappy },
  },
};

export const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springs.bouncy },
  },
};

export const badgePulseVariants: Variants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: easings.smooth,
    },
  },
};

// ============================================
// LINK / TEXT VARIANTS
// ============================================

export const linkUnderlineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: durations.fast, ease: easings.smooth },
  },
};

export const arrowSlideVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: { duration: durations.fast, ease: easings.smooth },
  },
};

// ============================================
// PAGE TRANSITION VARIANTS
// ============================================

export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: durations.pageTransition, ease: easings.luxurious },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)',
    transition: { duration: durations.fast, ease: easings.premium },
  },
};

export const pageSlideVariants: Variants = {
  initial: { x: '100%', opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: durations.pageTransition, ease: easings.luxurious },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: durations.fast, ease: easings.premium },
  },
};

export const pageScaleVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.pageTransition, ease: easings.smooth },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: { duration: durations.fast },
  },
};

// ============================================
// DROPDOWN / MENU VARIANTS
// ============================================

export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: durations.dropdown, ease: easings.smooth },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: { duration: durations.fast },
  },
};

export const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.fast, ease: easings.smooth },
  },
};

export const mobileMenuVariants: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: durations.normal, ease: easings.luxurious },
  },
  exit: {
    x: '100%',
    transition: { duration: durations.fast, ease: easings.premium },
  },
};

// ============================================
// MODAL VARIANTS
// ============================================

export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.normal },
  },
  exit: {
    opacity: 0,
    transition: { duration: durations.fast },
  },
};

export const modalContentVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: durations.modal, ease: easings.smooth },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: durations.fast },
  },
};

// ============================================
// FORM / INPUT VARIANTS
// ============================================

export const inputFocusVariants: Variants = {
  rest: {
    boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
    borderColor: 'rgb(209, 213, 219)',
  },
  focus: {
    boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.2)',
    borderColor: 'rgb(0, 123, 255)',
    transition: { duration: durations.fast },
  },
};

export const errorShakeVariants: Variants = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 },
  },
};

// ============================================
// FLOATING / TOOLTIP VARIANTS
// ============================================

export const floatingButtonVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
  },
  hover: {
    scale: 1.1,
    boxShadow: '0 8px 25px 0 rgba(0, 0, 0, 0.3)',
    transition: { ...springs.snappy },
  },
  tap: {
    scale: 0.95,
    transition: { duration: durations.instant },
  },
};

export const tooltipVariants: Variants = {
  hidden: { opacity: 0, y: 5, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: durations.tooltip, ease: easings.smooth },
  },
};

// ============================================
// ACCORDION VARIANTS
// ============================================

export const accordionContentVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: durations.normal, ease: easings.premium },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: durations.normal, ease: easings.premium },
  },
};

export const accordionChevronVariants: Variants = {
  closed: { rotate: 0 },
  open: {
    rotate: 180,
    transition: { ...springs.gentle },
  },
};

// ============================================
// LOADING / SPINNER VARIANTS
// ============================================

export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: easings.smooth,
    },
  },
};

export const typingDotsVariants: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: easings.smooth,
    },
  },
};

// ============================================
// SUCCESS / CELEBRATION VARIANTS
// ============================================

export const successCheckVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: durations.slow, ease: easings.easeOutCubic },
  },
};

export const celebrationVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { ...springs.bouncy },
  },
};

// ============================================
// PARALLAX VARIANTS
// ============================================

export const parallaxVariants = (speed = 0.5): Variants => ({
  initial: { y: 0 },
  scroll: {
    y: speed * 100,
    transition: { type: 'tween', ease: 'linear' },
  },
});

// ============================================
// RIPPLE EFFECT VARIANTS
// ============================================

export const rippleVariants: Variants = {
  initial: { width: 0, height: 0, opacity: 0.5 },
  animate: {
    width: 200,
    height: 200,
    opacity: 0,
    transition: { duration: durations.ripple, ease: 'easeOut' },
  },
  exit: { opacity: 0 },
};
