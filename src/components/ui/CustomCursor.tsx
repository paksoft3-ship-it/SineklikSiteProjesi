'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CustomCursorProps {
  enabled?: boolean;
}

export default function CustomCursor({ enabled = true }: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'pointer' | 'text' | 'grab' | 'hidden'>('default');
  const [cursorText, setCursorText] = useState('');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!enabled) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setCursorVariant('pointer');
        const label = target.getAttribute('data-cursor-text') || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        if (label) setCursorText(label);
        else setCursorText('');
      } else if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        setCursorVariant('text');
        setCursorText('');
      } else if (
        target.getAttribute('draggable') === 'true' ||
        target.classList.contains('cursor-grab')
      ) {
        setCursorVariant('grab');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'rgb(0, 123, 255)',
      mixBlendMode: 'difference' as const,
    },
    pointer: {
      width: cursorText ? 80 : 40,
      height: cursorText ? 80 : 40,
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      border: '2px solid rgb(0, 123, 255)',
      mixBlendMode: 'normal' as const,
    },
    text: {
      width: 4,
      height: 24,
      backgroundColor: 'rgb(0, 123, 255)',
      borderRadius: 2,
      mixBlendMode: 'difference' as const,
    },
    grab: {
      width: 50,
      height: 50,
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      border: '2px dashed rgb(0, 123, 255)',
      mixBlendMode: 'normal' as const,
    },
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
    },
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={cursorVariant}
        variants={variants}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {cursorText && cursorVariant === 'pointer' && (
          <span className="text-primary text-xs font-bold whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Trailing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.5 : 0,
        }}
      />
    </>
  );
}

// Hook to control cursor from anywhere
export function useCursor() {
  const setCursorText = (text: string) => {
    document.body.setAttribute('data-cursor-text', text);
  };

  const resetCursor = () => {
    document.body.removeAttribute('data-cursor-text');
  };

  return { setCursorText, resetCursor };
}
