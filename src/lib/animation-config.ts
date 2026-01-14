/**
 * Animation Configuration
 * Premium easing curves, durations, and delays for the entire website
 */

// Premium easing curves for luxurious, smooth animations
export const easings = {
  // Smooth, elegant ease for general use
  premium: [0.25, 0.1, 0.25, 1.0] as const,
  // Bouncy but refined for interactive elements
  smooth: [0.43, 0.13, 0.23, 0.96] as const,
  // Extra smooth for page transitions
  luxurious: [0.6, 0.01, 0.05, 0.95] as const,
  // Quick response with overshoot for micro-interactions
  snappy: [0.68, -0.55, 0.265, 1.55] as const,
  // Gentle deceleration
  easeOutQuart: [0.25, 1, 0.5, 1] as const,
  // Natural deceleration
  easeOutCubic: [0.33, 1, 0.68, 1] as const,
  // Dramatic entrance
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
};

// Spring configurations for Framer Motion
export const springs = {
  // Default spring for most animations
  default: { type: 'spring' as const, stiffness: 300, damping: 30 },
  // Bouncy spring for playful elements
  bouncy: { type: 'spring' as const, stiffness: 400, damping: 20 },
  // Gentle spring for subtle animations
  gentle: { type: 'spring' as const, stiffness: 200, damping: 25 },
  // Snappy spring for quick responses
  snappy: { type: 'spring' as const, stiffness: 500, damping: 35 },
  // Slow spring for dramatic reveals
  slow: { type: 'spring' as const, stiffness: 100, damping: 20 },
};

// Duration constants in seconds
export const durations = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.4,
  slow: 0.6,
  dramatic: 0.8,
  pageTransition: 0.5,
  // Specific durations
  ripple: 0.6,
  hover: 0.3,
  tooltip: 0.2,
  dropdown: 0.25,
  modal: 0.35,
};

// Delay constants for staggering and sequencing
export const delays = {
  // Stagger delay between items
  stagger: 0.08,
  // Delay between sections
  section: 0.15,
  // Cascade effect delay
  cascade: 0.12,
  // Character animation delay
  character: 0.03,
  // Button feedback delay
  feedback: 0.1,
};

// Viewport options for scroll-triggered animations
export const viewportOptions = {
  // Default: trigger when 30% visible
  default: { once: true, amount: 0.3 as const },
  // Early trigger for headers/heroes
  early: { once: true, amount: 0.1 as const },
  // Late trigger for footers
  late: { once: true, amount: 0.5 as const },
  // Repeat animation on every scroll
  repeat: { once: false, amount: 0.3 as const },
  // Custom margin for earlier trigger
  eager: { once: true, margin: '-10%' },
};

// Common transform values
export const transforms = {
  // Hover lift
  liftY: -8,
  // Subtle lift
  subtleLiftY: -4,
  // Slide distances
  slideDistance: 40,
  // Scale values
  scaleHover: 1.05,
  scalePressed: 0.95,
  scaleSubtle: 1.02,
  // Rotation values
  rotateTilt: 15,
  rotateSubtle: 3,
};

// Shadow presets for elevation animations
export const shadows = {
  none: '0 0 0 0 rgba(0, 0, 0, 0)',
  sm: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  glow: {
    primary: '0 0 30px rgba(0, 123, 255, 0.5)',
    success: '0 0 30px rgba(34, 197, 94, 0.5)',
    danger: '0 0 30px rgba(239, 68, 68, 0.5)',
  },
};

// Color transition values
export const colorTransitions = {
  primary: {
    default: '#007BFF',
    hover: '#0056b3',
  },
};
