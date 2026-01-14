'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ReactNode, useRef, useState, CSSProperties } from 'react';
import { easings, durations, transforms, shadows, springs } from '@/lib/animation-config';
import {
  cardHoverVariants,
  cardLiftVariants,
  imageHoverVariants,
  imageOverlayVariants,
  linkUnderlineVariants,
  iconHoverVariants,
  floatingButtonVariants
} from '@/lib/animation-variants';

// ============================================
// 3D TILT CARD EFFECT
// ============================================

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
  style?: CSSProperties;
}

export const TiltCard = ({
  children,
  className = '',
  tiltAmount = transforms.rotateTilt,
  glareEnabled = false,
  style,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), springs.default);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), springs.default);

  // Glare effect
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (event.clientX - rect.left) / rect.width - 0.5;
    const yPos = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.2) 0%, transparent 50%)`,
            borderRadius: 'inherit',
          }}
        />
      )}
    </motion.div>
  );
};

// ============================================
// MAGNETIC HOVER EFFECT
// ============================================

interface MagneticHoverProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  style?: CSSProperties;
}

export const MagneticHover = ({
  children,
  className = '',
  strength = 0.3,
  style,
}: MagneticHoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * strength);
    y.set((event.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// LIFT CARD EFFECT
// ============================================

interface LiftCardProps {
  children: ReactNode;
  className?: string;
  liftAmount?: number;
  style?: CSSProperties;
}

export const LiftCard = ({
  children,
  className = '',
  liftAmount = transforms.liftY,
  style,
}: LiftCardProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: {
          y: 0,
          boxShadow: shadows.sm,
          transition: { duration: durations.hover, ease: easings.smooth },
        },
        hover: {
          y: liftAmount,
          boxShadow: shadows.xl,
          transition: { duration: durations.normal, ease: easings.smooth },
        },
        tap: {
          y: liftAmount / 2,
          transition: { duration: durations.instant },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// IMAGE HOVER WITH ZOOM AND OVERLAY
// ============================================

interface ImageHoverProps {
  src: string;
  alt: string;
  className?: string;
  overlayContent?: ReactNode;
  zoomAmount?: number;
  overlayClassName?: string;
}

export const ImageHover = ({
  src,
  alt,
  className = '',
  overlayContent,
  zoomAmount = 1.1,
  overlayClassName = '',
}: ImageHoverProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        variants={{
          rest: { scale: 1 },
          hover: {
            scale: zoomAmount,
            transition: { duration: durations.dramatic, ease: easings.premium },
          },
        }}
      />
      {overlayContent && (
        <motion.div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center ${overlayClassName}`}
          variants={imageOverlayVariants}
        >
          {overlayContent}
        </motion.div>
      )}
    </motion.div>
  );
};

// ============================================
// ANIMATED LINK WITH UNDERLINE
// ============================================

interface AnimatedLinkProps {
  children: ReactNode;
  href?: string;
  className?: string;
  underlineColor?: string;
  underlineHeight?: number;
  onClick?: () => void;
}

export const AnimatedLink = ({
  children,
  href,
  className = '',
  underlineColor = 'currentColor',
  underlineHeight = 2,
  onClick,
}: AnimatedLinkProps) => {
  const Component = href ? motion.a : motion.span;

  return (
    <Component
      href={href}
      className={`relative inline-block cursor-pointer ${className}`}
      initial="rest"
      whileHover="hover"
      onClick={onClick}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full origin-left"
        style={{
          height: underlineHeight,
          backgroundColor: underlineColor,
        }}
        variants={linkUnderlineVariants}
      />
    </Component>
  );
};

// ============================================
// SCALE ON HOVER
// ============================================

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  style?: CSSProperties;
}

export const ScaleOnHover = ({
  children,
  className = '',
  scale = transforms.scaleHover,
  style,
}: ScaleOnHoverProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ scale }}
      whileTap={{ scale: transforms.scalePressed }}
      transition={{ duration: durations.fast, ease: easings.snappy }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// ICON HOVER EFFECT
// ============================================

interface IconHoverProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const IconHover = ({
  children,
  className = '',
  style,
}: IconHoverProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial="rest"
      whileHover="hover"
      variants={iconHoverVariants}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// FLOATING BUTTON
// ============================================

interface FloatingButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export const FloatingButton = ({
  children,
  className = '',
  onClick,
  style,
}: FloatingButtonProps) => {
  return (
    <motion.button
      className={className}
      style={style}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={floatingButtonVariants}
    >
      {children}
    </motion.button>
  );
};

// ============================================
// GLOW ON HOVER
// ============================================

interface GlowOnHoverProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
  style?: CSSProperties;
}

export const GlowOnHover = ({
  children,
  className = '',
  glowColor = 'rgba(0, 123, 255, 0.5)',
  glowSize = 30,
  style,
}: GlowOnHoverProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{
        boxShadow: `0 0 ${glowSize}px ${glowColor}`,
        transition: { duration: durations.normal, ease: easings.smooth },
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// HOVER REVEAL (Show content on hover)
// ============================================

interface HoverRevealProps {
  children: ReactNode;
  revealContent: ReactNode;
  className?: string;
  revealClassName?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const HoverReveal = ({
  children,
  revealContent,
  className = '',
  revealClassName = '',
  direction = 'up',
}: HoverRevealProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const revealVariants = {
    up: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute ${revealClassName}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={revealVariants[direction]}
            transition={{ duration: durations.fast, ease: easings.smooth }}
          >
            {revealContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================
// BOUNCE ON HOVER
// ============================================

interface BounceOnHoverProps {
  children: ReactNode;
  className?: string;
  bounceHeight?: number;
  style?: CSSProperties;
}

export const BounceOnHover = ({
  children,
  className = '',
  bounceHeight = 4,
  style,
}: BounceOnHoverProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{
        y: [0, -bounceHeight, 0],
        transition: {
          duration: 0.4,
          ease: easings.smooth,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// SHAKE ON HOVER
// ============================================

interface ShakeOnHoverProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  style?: CSSProperties;
}

export const ShakeOnHover = ({
  children,
  className = '',
  intensity = 3,
  style,
}: ShakeOnHoverProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{
        rotate: [0, -intensity, intensity, -intensity, intensity, 0],
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// CARD WITH ALL EFFECTS COMBINED
// ============================================

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  enableTilt?: boolean;
  enableLift?: boolean;
  enableGlow?: boolean;
  tiltAmount?: number;
  glowColor?: string;
  style?: CSSProperties;
}

export const AnimatedCard = ({
  children,
  className = '',
  enableTilt = true,
  enableLift = true,
  enableGlow = false,
  tiltAmount = 10,
  glowColor = 'rgba(0, 123, 255, 0.3)',
  style,
}: AnimatedCardProps) => {
  const content = enableTilt ? (
    <TiltCard tiltAmount={tiltAmount}>
      {children}
    </TiltCard>
  ) : (
    children
  );

  if (enableLift && enableGlow) {
    return (
      <LiftCard className={className} style={style}>
        <GlowOnHover glowColor={glowColor}>
          {content}
        </GlowOnHover>
      </LiftCard>
    );
  }

  if (enableLift) {
    return (
      <LiftCard className={className} style={style}>
        {content}
      </LiftCard>
    );
  }

  if (enableGlow) {
    return (
      <GlowOnHover className={className} glowColor={glowColor} style={style}>
        {content}
      </GlowOnHover>
    );
  }

  return (
    <motion.div className={className} style={style}>
      {content}
    </motion.div>
  );
};

// Export all components
export default {
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
};
