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
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseLeave={() => {
        handleEnd();
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
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
          className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full shadow-lg"
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
          className="absolute top-4 left-4 px-3 py-1 bg-gray-700 text-white text-sm font-bold rounded-full shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {beforeLabel}
        </motion.span>
      </div>

      {/* Slider Handle - Fixed position, no scale on hover */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
          width: '4px'
        }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Vertical Line */}
        <div
          className="absolute inset-0 w-1 transition-all duration-300"
          style={{
            background: isDragging
              ? 'linear-gradient(to bottom, transparent, rgba(0, 123, 255, 0.9), transparent)'
              : 'linear-gradient(to bottom, transparent 5%, white 20%, white 80%, transparent 95%)',
            boxShadow: isDragging ? '0 0 15px rgba(0, 123, 255, 0.5)' : '0 0 10px rgba(0, 0, 0, 0.3)'
          }}
        />

        {/* Handle Circle - Centered, no position change on hover */}
        <div
          className="absolute left-1/2 top-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize"
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: isDragging
              ? '0 0 25px rgba(0, 123, 255, 0.6), 0 4px 20px rgba(0, 0, 0, 0.3)'
              : isHovered
              ? '0 6px 25px rgba(0, 0, 0, 0.25)'
              : '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="flex items-center gap-1.5">
            <motion.i
              className="fas fa-chevron-left text-primary text-xs"
              animate={{ x: isDragging ? -2 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <div className="w-px h-4 bg-gray-300" />
            <motion.i
              className="fas fa-chevron-right text-primary text-xs"
              animate={{ x: isDragging ? 2 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        {/* Pulse ring effect when dragging */}
        {isDragging && (
          <motion.div
            className="absolute left-1/2 top-1/2 w-14 h-14 rounded-full border-2 border-primary/50"
            style={{ transform: 'translate(-50%, -50%)' }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        )}
      </div>

      {/* Instructions Overlay */}
      <motion.div
        className="absolute bottom-4 left-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full pointer-events-none"
        style={{ transform: 'translateX(-50%)' }}
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
