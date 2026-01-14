'use client';

/**
 * Custom Animation Hooks
 * Reusable hooks for common animation patterns
 */

import { useInView, useMotionValue, useSpring, useTransform, UseInViewOptions } from 'framer-motion';
import { useRef, useState, useEffect, useCallback, RefObject } from 'react';
import { delays } from '@/lib/animation-config';

// ============================================
// SCROLL ANIMATION HOOK
// ============================================

interface ScrollAnimationOptions {
  once?: boolean;
  amount?: number | 'all' | 'some';
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { rootMargin, ...rest } = options;
  const viewOptions: UseInViewOptions = {
    once: true,
    amount: 0.3,
    ...rest,
  };
  if (rootMargin) {
    viewOptions.margin = rootMargin as any;
  }
  const isInView = useInView(ref, viewOptions);

  return { ref, isInView };
};

// ============================================
// RIPPLE EFFECT HOOK
// ============================================

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const useRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  }, []);

  const clearRipples = useCallback(() => {
    setRipples([]);
  }, []);

  return { ripples, createRipple, clearRipples };
};

// ============================================
// MAGNETIC HOVER HOOK
// ============================================

interface MagneticPosition {
  x: number;
  y: number;
}

export const useMagneticHover = (strength = 0.3) => {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState<MagneticPosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) * strength;
      const y = (e.clientY - centerY) * strength;
      setPosition({ x, y });
    },
    [strength]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return { ref, position, isHovered };
};

// ============================================
// 3D TILT HOOK
// ============================================

export const useTilt = (maxTilt = 15) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (event.clientX - rect.left) / rect.width - 0.5;
    const yPos = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

// ============================================
// PARALLAX SCROLL HOOK
// ============================================

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset(scrollProgress * speed * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

// ============================================
// ANIMATED COUNTER HOOK
// ============================================

interface UseCounterOptions {
  duration?: number;
  delay?: number;
  decimals?: number;
}

export const useAnimatedCounter = (
  endValue: number,
  options: UseCounterOptions = {}
) => {
  const { duration = 2000, delay = 0, decimals = 0 } = options;
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(endValue);
        return;
      }

      const progress = (now - startTime) / duration;
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeProgress * endValue;

      setCount(Number(currentValue.toFixed(decimals)));
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, hasAnimated, endValue, duration, delay, decimals]);

  return { ref, count };
};

// ============================================
// STAGGER CHILDREN HOOK
// ============================================

export const useStaggerChildren = (
  itemCount: number,
  staggerDelay: number = delays.stagger
) => {
  const staggerDelays = Array.from({ length: itemCount }, (_, i) => i * staggerDelay);
  return { delays: staggerDelays };
};

// ============================================
// HOVER STATE HOOK
// ============================================

export const useHoverState = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocus: () => setIsHovered(true),
    onBlur: () => setIsHovered(false),
  };

  return { isHovered, hoverProps };
};

// ============================================
// SCROLL PROGRESS HOOK
// ============================================

export const useScrollProgress = (ref?: RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        // Element-based progress
        const rect = ref.current.getBoundingClientRect();
        const elementProgress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setProgress(Math.min(Math.max(elementProgress, 0), 1));
      } else {
        // Page-based progress
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};

// ============================================
// MOUSE POSITION HOOK
// ============================================

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

export const useMousePosition = (ref?: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const normalizedX = (x / rect.width) * 2 - 1;
        const normalizedY = (y / rect.height) * 2 - 1;
        setMousePosition({ x, y, normalizedX, normalizedY });
      } else {
        const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
        const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
          normalizedX,
          normalizedY,
        });
      }
    };

    const element = ref?.current || window;
    element.addEventListener('mousemove', handleMouseMove as EventListener);
    return () =>
      element.removeEventListener('mousemove', handleMouseMove as EventListener);
  }, [ref]);

  return mousePosition;
};

// ============================================
// INTERSECTION ANIMATION HOOK
// ============================================

interface UseIntersectionAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionAnimation = (
  options: UseIntersectionAnimationOptions = {}
) => {
  const { threshold = 0.3, rootMargin = '0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return { ref, isVisible };
};
