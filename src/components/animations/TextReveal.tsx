'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Character-by-character reveal
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

export function CharacterReveal({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.02,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {text.split('').map((char, idx) => (
        <motion.span
          key={idx}
          className="inline-block"
          variants={charVariants}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Word-by-word reveal
export function WordReveal({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.1,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ perspective: 1000 }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          className="inline-block mr-[0.25em]"
          variants={wordVariants}
          style={{ transformOrigin: 'center bottom' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Line reveal with mask
export function LineReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : { y: '100%' }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Blur reveal
export function BlurReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)' }
          : { opacity: 0, filter: 'blur(10px)' }
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// Typewriter effect
export function Typewriter({
  text,
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const characters = text.split('');

  return (
    <span ref={ref} className={className}>
      {characters.map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0,
            delay: delay + (idx * speed) / 1000,
          }}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-current ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </span>
  );
}

// Split text reveal (for headings)
export function SplitTextReveal({
  text,
  className = '',
  delay = 0,
  as: Component = 'h2',
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const words = text.split(' ');

  return (
    <Component ref={ref} className={`overflow-hidden ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', rotateX: -80 }}
            animate={isInView ? { y: 0, rotateX: 0 } : { y: '100%', rotateX: -80 }}
            transition={{
              duration: 0.8,
              delay: delay + idx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: 'bottom center' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

// Animated Counter
export function AnimatedCounter({
  value,
  className = '',
  duration = 2,
  prefix = '',
  suffix = '',
}: {
  value: number;
  className?: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {isInView && (
          <CountUp target={value} duration={duration} />
        )}
      </motion.span>
      {suffix}
    </span>
  );
}

function CountUp({ target, duration }: { target: number; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {target.toLocaleString()}
      </motion.span>
    </motion.span>
  );
}

// Gradient text reveal
export function GradientTextReveal({
  text,
  className = '',
  gradient = 'from-primary via-blue-400 to-purple-500',
}: {
  text: string;
  className?: string;
  gradient?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={`bg-gradient-to-r ${gradient} bg-clip-text ${className}`}
      initial={{
        backgroundPosition: '200% center',
        color: 'transparent',
      }}
      animate={isInView ? {
        backgroundPosition: '0% center',
        color: 'transparent',
      } : {}}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      style={{ backgroundSize: '200% auto' }}
    >
      {text}
    </motion.span>
  );
}
