'use client';

import { motion, useInView, UseInViewOptions, Variants } from 'framer-motion';
import { useRef, ReactNode, CSSProperties } from 'react';
import { scrollRevealVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animation-variants';
import { easings, durations, delays } from '@/lib/animation-config';

// ============================================
// TYPES
// ============================================

type AnimationVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'fadeIn'
  | 'scaleUp'
  | 'scaleDown'
  | 'blurIn'
  | 'rotateIn'
  | 'clipReveal'
  | 'slideReveal'
  | 'popIn'
  | 'riseUp';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  viewport?: UseInViewOptions;
  once?: boolean;
  amount?: number | 'all' | 'some';
  /** Custom index for stagger animations */
  custom?: number;
  /** Add this element as a stagger child */
  asChild?: boolean;
  style?: CSSProperties;
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  viewport?: UseInViewOptions;
  style?: CSSProperties;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  style?: CSSProperties;
}

// ============================================
// SCROLL ANIMATION COMPONENT
// ============================================

export const ScrollAnimation = ({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  duration,
  viewport,
  once = true,
  amount = 0.3,
  custom = 0,
  asChild = false,
  style,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount,
    ...viewport,
  });

  const selectedVariant = scrollRevealVariants[variant] || scrollRevealVariants.fadeUp;

  // Create custom transition with delay
  const customTransition = {
    duration: duration || durations.normal,
    delay: delay + custom * delays.stagger,
    ease: easings.premium,
  };

  // If used as a stagger child, use the variants directly
  if (asChild) {
    return (
      <motion.div
        className={className}
        style={style}
        variants={selectedVariant}
        custom={custom}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: customTransition,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// STAGGER CONTAINER COMPONENT
// ============================================

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = delays.stagger,
  delayChildren = 0.1,
  viewport = { once: true, margin: '-10%' },
  style,
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainerVariants(staggerDelay, delayChildren)}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// STAGGER ITEM COMPONENT
// ============================================

export const StaggerItem = ({
  children,
  className = '',
  variant = 'fadeUp',
  style,
}: StaggerItemProps) => {
  const selectedVariant = scrollRevealVariants[variant] || staggerItemVariants;

  return (
    <motion.div
      variants={selectedVariant}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// PARALLAX SCROLL COMPONENT
// ============================================

interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  style?: CSSProperties;
}

export const ParallaxScroll = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  style,
}: ParallaxScrollProps) => {
  const initialY = direction === 'up' ? 50 * speed : -50 * speed;

  return (
    <motion.div
      className={className}
      style={{ ...style, willChange: 'transform' }}
      initial={{ y: initialY }}
      whileInView={{ y: 0 }}
      viewport={{ once: false, margin: '-20%' }}
      transition={{
        duration: durations.dramatic,
        ease: easings.premium,
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// TEXT REVEAL ANIMATION (Character by Character)
// ============================================

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const TextReveal = ({
  text,
  className = '',
  delay = 0,
  charDelay = delays.character,
  as: Component = 'span',
}: TextRevealProps) => {
  const characters = text.split('');
  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: durations.normal,
                delay: delay + index * charDelay,
                ease: easings.smooth,
              },
            },
          }}
          style={{ display: 'inline-block' }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

// ============================================
// ANIMATED COUNTER COMPONENT
// ============================================

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const AnimatedCounter = ({
  value,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useRef(0);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {isInView ? value.toFixed(decimals) : '0'}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

// ============================================
// REVEAL ON SCROLL (Clip Path Animation)
// ============================================

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const RevealOnScroll = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: RevealOnScrollProps) => {
  const clipPaths = {
    up: {
      hidden: 'inset(100% 0 0 0)',
      visible: 'inset(0% 0 0 0)',
    },
    down: {
      hidden: 'inset(0 0 100% 0)',
      visible: 'inset(0 0 0% 0)',
    },
    left: {
      hidden: 'inset(0 100% 0 0)',
      visible: 'inset(0 0% 0 0)',
    },
    right: {
      hidden: 'inset(0 0 0 100%)',
      visible: 'inset(0 0 0 0%)',
    },
  };

  return (
    <motion.div
      className={className}
      initial={{ clipPath: clipPaths[direction].hidden }}
      whileInView={{ clipPath: clipPaths[direction].visible }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: durations.dramatic,
        delay,
        ease: easings.luxurious,
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// BLUR REVEAL COMPONENT
// ============================================

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: number;
}

export const BlurReveal = ({
  children,
  className = '',
  delay = 0,
  blur = 12,
}: BlurRevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: durations.slow,
        delay,
        ease: easings.premium,
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// SCALE ON SCROLL COMPONENT
// ============================================

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
  fromScale?: number;
  toScale?: number;
  delay?: number;
}

export const ScaleOnScroll = ({
  children,
  className = '',
  fromScale = 0.8,
  toScale = 1,
  delay = 0,
}: ScaleOnScrollProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: fromScale }}
      whileInView={{ opacity: 1, scale: toScale }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: durations.slow,
        delay,
        ease: easings.smooth,
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// ROTATE IN COMPONENT
// ============================================

interface RotateInProps {
  children: ReactNode;
  className?: string;
  degrees?: number;
  delay?: number;
}

export const RotateIn = ({
  children,
  className = '',
  degrees = -15,
  delay = 0,
}: RotateInProps) => {
  return (
    <motion.div
      className={className}
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, rotateY: degrees, scale: 0.95 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: durations.slow,
        delay,
        ease: easings.premium,
      }}
    >
      {children}
    </motion.div>
  );
};

// Default export for convenience
export default ScrollAnimation;
