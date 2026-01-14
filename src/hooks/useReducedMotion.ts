'use client';

/**
 * Reduced Motion Hook
 * Respects user's accessibility preferences for reduced motion
 */

import { useEffect, useState } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * @returns boolean indicating if user prefers reduced motion
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if we're on the client
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Returns animation variants based on reduced motion preference
 * If user prefers reduced motion, returns simplified variants
 */
export const useAccessibleAnimation = <T extends Record<string, unknown>>(
  fullVariants: T,
  reducedVariants?: Partial<T>
): T => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion && reducedVariants) {
    return { ...fullVariants, ...reducedVariants } as T;
  }

  if (prefersReducedMotion) {
    // Return variants with instant transitions
    const instantVariants = Object.keys(fullVariants).reduce((acc, key) => {
      const variant = fullVariants[key];
      if (typeof variant === 'object' && variant !== null) {
        acc[key] = {
          ...variant,
          transition: { duration: 0 },
        };
      } else {
        acc[key] = variant;
      }
      return acc;
    }, {} as Record<string, unknown>);

    return instantVariants as T;
  }

  return fullVariants;
};

/**
 * Hook to get animation duration based on reduced motion preference
 * Returns 0 if user prefers reduced motion
 */
export const useAnimationDuration = (duration: number): number => {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? 0 : duration;
};

/**
 * Hook to conditionally disable animations
 */
export const useAnimationEnabled = (): boolean => {
  const prefersReducedMotion = useReducedMotion();
  return !prefersReducedMotion;
};

export default useReducedMotion;
