'use client';

import { useState, useRef, ReactNode, CSSProperties } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareOpacity?: number;
  scale?: number;
  perspective?: number;
  glareColor?: string;
  borderGlow?: boolean;
  shadowColor?: string;
}

// Premium 3D Tilt Card with glare, shine, and border glow effects
export default function TiltCard({
  children,
  className = '',
  tiltAmount = 15,
  glareOpacity = 0.3,
  scale = 1.02,
  perspective = 1000,
  glareColor = 'rgba(255,255,255,0.4)',
  borderGlow = false,
  shadowColor = 'rgba(0, 123, 255, 0.3)',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  // Dynamic shadow based on tilt
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective,
      }}
      whileHover={{ scale }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Border glow effect */}
      {borderGlow && (
        <motion.div
          className="absolute -inset-0.5 rounded-2xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${shadowColor}, transparent, ${shadowColor})`,
            opacity: isHovered ? 1 : 0,
            filter: 'blur(8px)',
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Main content wrapper */}
      <div className="relative z-10">{children}</div>

      {/* Glare Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden z-20"
        style={{
          opacity: isHovered ? glareOpacity : 0,
          background: `radial-gradient(circle at var(--glare-x) var(--glare-y), ${glareColor} 0%, transparent 50%)`,
          '--glare-x': glareX,
          '--glare-y': glareY,
        } as CSSProperties & { '--glare-x': any; '--glare-y': any }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine Line Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden z-20"
        initial={{ backgroundPosition: '-200% 0' }}
        animate={{
          backgroundPosition: isHovered ? '200% 0' : '-200% 0',
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.1) 50%, transparent 55%)',
          backgroundSize: '200% 100%',
          opacity: isHovered ? 0.6 : 0,
        }}
      />

      {/* Reflection/Mirror effect at bottom */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none rounded-b-2xl overflow-hidden z-20"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.1), transparent)',
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Enhanced Floating Card with multiple animation modes
export function FloatingCard({
  children,
  className = '',
  floatAmount = 10,
  duration = 3,
  rotateAmount = 2,
  mode = 'vertical',
  shadow = true,
}: {
  children: ReactNode;
  className?: string;
  floatAmount?: number;
  duration?: number;
  rotateAmount?: number;
  mode?: 'vertical' | 'horizontal' | 'orbit' | 'wave' | 'bounce';
  shadow?: boolean;
}) {
  const getAnimation = () => {
    switch (mode) {
      case 'vertical':
        return {
          y: [0, -floatAmount, 0],
          rotate: [0, rotateAmount, 0, -rotateAmount, 0],
        };
      case 'horizontal':
        return {
          x: [0, floatAmount, 0, -floatAmount, 0],
        };
      case 'orbit':
        return {
          x: [0, floatAmount, 0, -floatAmount, 0],
          y: [0, -floatAmount / 2, 0, floatAmount / 2, 0],
          rotate: [0, 5, 0, -5, 0],
        };
      case 'wave':
        return {
          y: [0, -floatAmount, floatAmount / 2, -floatAmount / 2, 0],
          rotate: [0, rotateAmount, -rotateAmount, rotateAmount / 2, 0],
        };
      case 'bounce':
        return {
          y: [0, -floatAmount * 1.5, 0],
          scale: [1, 1.02, 1],
        };
      default:
        return { y: [0, -floatAmount, 0] };
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      animate={getAnimation()}
      transition={{
        duration,
        repeat: Infinity,
        ease: mode === 'bounce' ? 'easeOut' : 'easeInOut',
      }}
    >
      {children}
      {/* Dynamic shadow */}
      {shadow && (
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full bg-black/20 blur-md"
          animate={{
            scale: mode === 'vertical' ? [1, 0.8, 1] : [1, 1.1, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.div>
  );
}

// Enhanced Magnetic Button with ripple and glow effects
export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  ripple = true,
  glow = false,
  glowColor = 'rgba(0, 123, 255, 0.5)',
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  ripple?: boolean;
  glow?: boolean;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 400, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 400, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ripple || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;

    const newRipple = { x: rippleX, y: rippleY, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      {glow && (
        <motion.div
          className="absolute -inset-1 rounded-xl pointer-events-none"
          style={{
            background: glowColor,
            filter: 'blur(10px)',
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: r.x,
              top: r.y,
              width: 10,
              height: 10,
              marginLeft: -5,
              marginTop: -5,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 20, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

// New: Parallax Card - Card with depth layers
export function ParallaxCard({
  children,
  className = '',
  layers = 3,
  depth = 20,
}: {
  children: ReactNode;
  className?: string;
  layers?: number;
  depth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) / 10);
    y.set((e.clientY - centerY) / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Depth layers */}
      {[...Array(layers)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            x: useTransform(xSpring, (v) => v * (i + 1) * 0.5),
            y: useTransform(ySpring, (v) => v * (i + 1) * 0.5),
            z: (i + 1) * depth,
            opacity: 0.1 - i * 0.03,
            background: 'inherit',
            transform: `translateZ(${(i + 1) * depth}px)`,
          }}
        />
      ))}
    </motion.div>
  );
}

// New: Glass Card - Glassmorphism effect card
export function GlassCard({
  children,
  className = '',
  blur = 10,
  opacity = 0.1,
  borderOpacity = 0.2,
}: {
  children: ReactNode;
  className?: string;
  blur?: number;
  opacity?: number;
  borderOpacity?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
      }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}

      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-inherit"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 0%', '200% 0%'] : '0% 0%',
        }}
        transition={{ duration: 1.5, ease: 'linear', repeat: isHovered ? Infinity : 0 }}
      />

      {/* Light reflection */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// New: Spotlight Card - Card with spotlight effect following cursor
export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 123, 255, 0.15)',
  spotlightSize = 200,
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
    >
      {children}

      {/* Spotlight */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: spotlightSize,
          height: spotlightSize,
          left: mousePosition.x - spotlightSize / 2,
          top: mousePosition.y - spotlightSize / 2,
          background: `radial-gradient(circle, ${spotlightColor}, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />

      {/* Border highlight */}
      <motion.div
        className="absolute inset-0 rounded-inherit pointer-events-none"
        style={{
          border: '1px solid transparent',
          borderImage: isHovered
            ? `radial-gradient(${spotlightSize}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3), transparent) 1`
            : 'none',
        }}
      />
    </motion.div>
  );
}

// New: Morphing Card - Card that morphs shape on hover
export function MorphCard({
  children,
  className = '',
  morphAmount = 20,
}: {
  children: ReactNode;
  className?: string;
  morphAmount?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const borderRadius = isHovered
    ? `${30 + morphAmount}% ${70 - morphAmount}% ${70 - morphAmount}% ${30 + morphAmount}% / ${30 + morphAmount}% ${30 + morphAmount}% ${70 - morphAmount}% ${70 - morphAmount}%`
    : '16px';

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      animate={{
        borderRadius,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {children}

      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0px 0px', '20px 20px'] : '0px 0px',
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}
