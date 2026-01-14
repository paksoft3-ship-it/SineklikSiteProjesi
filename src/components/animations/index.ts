/**
 * Animation Components
 * Central export for all animation-related components
 */

// Plisse Animation (existing)
export { default as PlisseAnimation } from './PlisseAnimation';

// Scroll Animations
export {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  ParallaxScroll,
  TextReveal,
  AnimatedCounter,
  RevealOnScroll,
  BlurReveal,
  ScaleOnScroll,
  RotateIn,
} from './ScrollAnimation';

// Hover Effects
export {
  TiltCard,
  MagneticHover,
  LiftCard,
  ImageHover,
  AnimatedLink,
  ScaleOnHover,
  IconHover,
  FloatingButton,
  GlowOnHover,
  HoverReveal,
  BounceOnHover,
  ShakeOnHover,
  AnimatedCard,
} from './HoverEffects';

// Page Transitions
export {
  PageTransition,
  SlidePageTransition,
  ScalePageTransition,
  BlurPageTransition,
  CustomPageTransition,
  FadeWrapper,
  SectionTransition,
} from './PageTransition';
