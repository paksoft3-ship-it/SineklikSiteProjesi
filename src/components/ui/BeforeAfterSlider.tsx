'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Voor',
  afterLabel = 'Na',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl cursor-ew-resize select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <motion.span
          className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {afterLabel}
        </motion.span>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <motion.span
          className="absolute top-4 left-4 px-3 py-1 bg-gray-700 text-white text-sm font-bold rounded-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {beforeLabel}
        </motion.span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Handle Circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: isDragging
              ? '0 0 20px rgba(0, 123, 255, 0.5)'
              : '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="flex items-center gap-1">
            <i className="fas fa-chevron-left text-primary text-xs"></i>
            <i className="fas fa-chevron-right text-primary text-xs"></i>
          </div>
        </motion.div>

        {/* Vertical Line Glow */}
        <div
          className="absolute inset-0 w-1 transition-all duration-300"
          style={{
            background: isDragging
              ? 'linear-gradient(to bottom, transparent, rgba(0, 123, 255, 0.8), transparent)'
              : 'white'
          }}
        />
      </div>

      {/* Instructions Overlay */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <i className="fas fa-arrows-alt-h mr-2"></i>
        Sleep om te vergelijken
      </motion.div>
    </div>
  );
}
