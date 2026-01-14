'use client';

import { forwardRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { buttonVariants, buttonGlowVariants, arrowSlideVariants, rippleVariants } from '@/lib/animation-variants';
import { durations } from '@/lib/animation-config';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Enable pulse animation for CTA buttons */
  pulse?: boolean;
  /** Enable glow effect on hover */
  glow?: boolean;
  /** Enable shine sweep effect on hover */
  shine?: boolean;
  /** Animate arrow icon on hover */
  animateArrow?: boolean;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      pulse = false,
      glow = false,
      shine = false,
      animateArrow = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const createRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const id = Date.now();

      setRipples((prev) => [...prev, { x, y, id }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, durations.ripple * 1000);
    }, []);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        createRipple(event);
        onClick?.(event);
      },
      [createRipple, onClick]
    );

    const baseStyles =
      'relative inline-flex justify-center items-center font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const variants = {
      primary: cn(
        'bg-primary text-white shadow-lg shadow-blue-500/30 focus:ring-primary',
        glow && 'hover:shadow-[0_0_30px_rgba(0,123,255,0.5)]'
      ),
      secondary: cn(
        'border-2 border-primary text-primary bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 focus:ring-primary'
      ),
      outline: cn(
        'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-primary hover:text-primary focus:ring-primary'
      ),
      ghost: cn(
        'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-gray-500'
      ),
      danger: cn(
        'bg-red-600 text-white shadow-lg shadow-red-500/30 focus:ring-red-500',
        glow && 'hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]'
      ),
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const motionVariants = glow ? buttonGlowVariants : buttonVariants;

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          pulse && 'animate-subtle-pulse',
          shine && 'btn-shine',
          className
        )}
        disabled={disabled || isLoading}
        variants={motionVariants}
        initial="rest"
        whileHover={!disabled && !isLoading ? 'hover' : undefined}
        whileTap={!disabled && !isLoading ? 'tap' : undefined}
        onClick={handleClick}
        {...props}
      >
        {/* Ripple Effect Container */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute bg-white/30 rounded-full pointer-events-none"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={rippleVariants}
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </AnimatePresence>

        {/* Button Content */}
        <span className="relative z-10 flex items-center">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.span
                key="loader"
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                transition={{ duration: durations.fast }}
                className="mr-2"
              >
                <Loader2 className="w-4 h-4 animate-spin" />
              </motion.span>
            ) : leftIcon ? (
              <motion.span
                key="leftIcon"
                className="mr-2"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: durations.fast }}
              >
                {leftIcon}
              </motion.span>
            ) : null}
          </AnimatePresence>

          {children}

          {!isLoading && rightIcon && (
            <motion.span
              className="ml-2"
              variants={animateArrow ? arrowSlideVariants : undefined}
              initial={animateArrow ? 'rest' : undefined}
              whileHover={animateArrow ? 'hover' : undefined}
            >
              {rightIcon}
            </motion.span>
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
