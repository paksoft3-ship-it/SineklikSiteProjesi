'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easings, durations } from '@/lib/animation-config';
import { ReactNode } from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'yellow' | 'red' | 'gray' | 'primary' | 'purple' | 'orange' | 'teal' | 'pink' | 'gradient';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  pulse?: boolean;
  animate?: boolean;
  delay?: number;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  dot?: boolean;
  dotColor?: string;
  removable?: boolean;
  onRemove?: () => void;
  outlined?: boolean;
  glow?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

const Badge = ({
  children,
  variant = 'gray',
  size = 'sm',
  className,
  pulse = false,
  animate = true,
  delay = 0,
  icon,
  iconPosition = 'left',
  dot = false,
  dotColor,
  removable = false,
  onRemove,
  outlined = false,
  glow = false,
  rounded = 'full',
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center font-semibold tracking-wide uppercase transition-all duration-200';

  const variants = {
    green: outlined
      ? 'border-2 border-green-500 text-green-600 dark:text-green-400 bg-transparent'
      : 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    blue: outlined
      ? 'border-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-transparent'
      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    yellow: outlined
      ? 'border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 bg-transparent'
      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
    red: outlined
      ? 'border-2 border-red-500 text-red-600 dark:text-red-400 bg-transparent'
      : 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
    gray: outlined
      ? 'border-2 border-gray-400 text-gray-600 dark:text-gray-400 bg-transparent'
      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    primary: outlined
      ? 'border-2 border-primary text-primary bg-transparent'
      : 'bg-primary/10 text-primary dark:bg-primary/20',
    purple: outlined
      ? 'border-2 border-purple-500 text-purple-600 dark:text-purple-400 bg-transparent'
      : 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
    orange: outlined
      ? 'border-2 border-orange-500 text-orange-600 dark:text-orange-400 bg-transparent'
      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
    teal: outlined
      ? 'border-2 border-teal-500 text-teal-600 dark:text-teal-400 bg-transparent'
      : 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
    pink: outlined
      ? 'border-2 border-pink-500 text-pink-600 dark:text-pink-400 bg-transparent'
      : 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
    gradient: 'bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white',
  };

  const glowVariants: Record<string, string> = {
    green: 'shadow-green-500/50',
    blue: 'shadow-blue-500/50',
    yellow: 'shadow-yellow-500/50',
    red: 'shadow-red-500/50',
    gray: 'shadow-gray-500/50',
    primary: 'shadow-primary/50',
    purple: 'shadow-purple-500/50',
    orange: 'shadow-orange-500/50',
    teal: 'shadow-teal-500/50',
    pink: 'shadow-pink-500/50',
    gradient: 'shadow-purple-500/50',
  };

  const dotColors: Record<string, string> = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    gray: 'bg-gray-500',
    primary: 'bg-primary',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    teal: 'bg-teal-500',
    pink: 'bg-pink-500',
    gradient: 'bg-gradient-to-r from-primary to-pink-500',
  };

  const sizes = {
    xs: 'px-1.5 py-0.5 text-[9px] gap-1',
    sm: 'px-2 py-1 text-[10px] gap-1.5',
    md: 'px-3 py-1.5 text-xs gap-2',
    lg: 'px-4 py-2 text-sm gap-2',
  };

  const roundedClasses = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
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
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  // Hover animation
  const hoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: { duration: durations.fast, ease: easings.snappy },
    },
  };

  const content = (
    <>
      {/* Status dot */}
      {dot && (
        <motion.span
          className={cn(
            'w-2 h-2 rounded-full flex-shrink-0',
            dotColor || dotColors[variant]
          )}
          animate={pulse ? { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] } : {}}
          transition={pulse ? { duration: 1.5, repeat: Infinity } : {}}
        />
      )}

      {/* Left icon */}
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}

      {/* Content */}
      <span>{children}</span>

      {/* Right icon */}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}

      {/* Remove button */}
      {removable && (
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1 -mr-1 w-4 h-4 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-times text-[8px]"></i>
        </motion.button>
      )}
    </>
  );

  if (!animate) {
    return (
      <span
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          roundedClasses[rounded],
          glow && `shadow-lg ${glowVariants[variant]}`,
          className
        )}
      >
        {content}
      </span>
    );
  }

  return (
    <motion.span
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        roundedClasses[rounded],
        pulse && 'animate-subtlePulse',
        glow && `shadow-lg ${glowVariants[variant]}`,
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
        className="inline-flex items-center gap-inherit"
        style={{ gap: 'inherit' }}
      >
        {content}
      </motion.span>
    </motion.span>
  );
};

export default Badge;

// Status Badge with icon presets
export function StatusBadge({
  status,
  size = 'sm',
  showIcon = true,
  className,
}: {
  status: 'success' | 'warning' | 'error' | 'info' | 'pending' | 'active' | 'inactive';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}) {
  const statusConfig: Record<string, { variant: BadgeProps['variant']; icon: string; label: string; pulse?: boolean }> = {
    success: { variant: 'green', icon: 'fa-check', label: 'Success' },
    warning: { variant: 'yellow', icon: 'fa-exclamation-triangle', label: 'Warning' },
    error: { variant: 'red', icon: 'fa-times', label: 'Error' },
    info: { variant: 'blue', icon: 'fa-info', label: 'Info' },
    pending: { variant: 'orange', icon: 'fa-clock', label: 'Pending', pulse: true },
    active: { variant: 'green', icon: 'fa-circle', label: 'Active', pulse: true },
    inactive: { variant: 'gray', icon: 'fa-circle', label: 'Inactive' },
  };

  const config = statusConfig[status];

  return (
    <Badge
      variant={config.variant}
      size={size}
      icon={showIcon ? <i className={`fas ${config.icon} text-[0.6em]`}></i> : undefined}
      pulse={config.pulse}
      className={className}
    >
      {config.label}
    </Badge>
  );
}

// Count Badge (for notifications, cart items, etc.)
export function CountBadge({
  count,
  max = 99,
  variant = 'red',
  size = 'xs',
  className,
}: {
  count: number;
  max?: number;
  variant?: BadgeProps['variant'];
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}) {
  const displayCount = count > max ? `${max}+` : count.toString();

  return (
    <AnimatePresence mode="wait">
      {count > 0 && (
        <motion.span
          key={count}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        >
          <Badge
            variant={variant}
            size={size}
            className={cn('min-w-[1.25rem] justify-center', className)}
            rounded="full"
          >
            {displayCount}
          </Badge>
        </motion.span>
      )}
    </AnimatePresence>
  );
}

// Category Badge with hover effect
export function CategoryBadge({
  children,
  color = 'primary',
  onClick,
  selected = false,
  className,
}: {
  children: ReactNode;
  color?: BadgeProps['variant'];
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant={selected ? color : 'gray'}
        size="md"
        className={cn(
          'cursor-pointer transition-all',
          selected && 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900',
          selected && color === 'primary' && 'ring-primary',
          selected && color === 'blue' && 'ring-blue-500',
          selected && color === 'green' && 'ring-green-500',
          className
        )}
        glow={selected}
      >
        {children}
      </Badge>
    </motion.button>
  );
}

// Discount Badge
export function DiscountBadge({
  percentage,
  size = 'sm',
  className,
}: {
  percentage: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <Badge
      variant="red"
      size={size}
      icon={<i className="fas fa-tag text-[0.7em]"></i>}
      className={cn('font-bold', className)}
      pulse
      glow
    >
      -{percentage}%
    </Badge>
  );
}

// New Badge
export function NewBadge({
  size = 'sm',
  className,
}: {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <Badge
      variant="gradient"
      size={size}
      icon={<i className="fas fa-sparkles text-[0.7em]"></i>}
      className={cn('font-bold', className)}
      glow
    >
      NEW
    </Badge>
  );
}

// Bestseller Badge
export function BestsellerBadge({
  size = 'sm',
  className,
}: {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <Badge
      variant="orange"
      size={size}
      icon={<i className="fas fa-fire text-[0.7em]"></i>}
      className={cn('font-bold', className)}
      pulse
    >
      BESTSELLER
    </Badge>
  );
}

// Rating Badge
export function RatingBadge({
  rating,
  size = 'sm',
  showStars = true,
  className,
}: {
  rating: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showStars?: boolean;
  className?: string;
}) {
  const fullStars = Math.floor(rating);

  return (
    <Badge
      variant="yellow"
      size={size}
      icon={showStars ? <i className="fas fa-star text-[0.7em]"></i> : undefined}
      className={className}
    >
      {rating.toFixed(1)}
      {showStars && (
        <span className="ml-1 flex">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`fas fa-star text-[0.5em] ${
                i < fullStars ? 'text-yellow-500' : 'text-yellow-300'
              }`}
            />
          ))}
        </span>
      )}
    </Badge>
  );
}

// Shipping Badge
export function ShippingBadge({
  type = 'free',
  size = 'sm',
  className,
}: {
  type?: 'free' | 'fast' | 'express';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const config = {
    free: { variant: 'green' as const, icon: 'fa-truck', label: 'FREE SHIPPING' },
    fast: { variant: 'blue' as const, icon: 'fa-shipping-fast', label: 'FAST DELIVERY' },
    express: { variant: 'purple' as const, icon: 'fa-rocket', label: 'EXPRESS' },
  };

  const { variant, icon, label } = config[type];

  return (
    <Badge
      variant={variant}
      size={size}
      icon={<i className={`fas ${icon} text-[0.7em]`}></i>}
      className={className}
    >
      {label}
    </Badge>
  );
}
