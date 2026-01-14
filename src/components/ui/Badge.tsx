'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easings, durations } from '@/lib/animation-config';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'yellow' | 'red' | 'gray' | 'primary';
  size?: 'sm' | 'md';
  className?: string;
  pulse?: boolean;
  animate?: boolean;
  delay?: number;
}

const Badge = ({
  children,
  variant = 'gray',
  size = 'sm',
  className,
  pulse = false,
  animate = true,
  delay = 0,
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center font-semibold tracking-wide uppercase rounded';

  const variants = {
    green: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    red: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    gray: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    primary: 'bg-primary/10 text-primary dark:bg-primary/20',
  };

  const sizes = {
    sm: 'px-2 py-1 text-[10px]',
    md: 'px-3 py-1.5 text-xs',
  };

  // Animation variants
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay,
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    },
  };

  // Hover animation
  const hoverVariants = {
    rest: { scale: 1, brightness: 1 },
    hover: {
      scale: 1.08,
      transition: { duration: durations.fast, ease: easings.snappy },
    },
  };

  if (!animate) {
    return (
      <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        pulse && 'animate-subtlePulse',
        className
      )}
      variants={badgeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
    >
      <motion.span
        variants={hoverVariants}
        initial="rest"
        whileHover="hover"
        className="inline-flex items-center"
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default Badge;
