'use client';

import { useState, useEffect } from 'react';

interface PlisseAnimationProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  activeIndex?: number;
  onIndexChange?: (index: number) => void;
  onClick?: () => void;
  className?: string;
}

const PlisseAnimation = ({
  images,
  autoPlay = true,
  interval = 5000,
  activeIndex: controlledIndex,
  onIndexChange,
  onClick,
  className
}: PlisseAnimationProps) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState<'wave' | 'fold' | 'slide'>('wave');

  const isControlled = controlledIndex !== undefined;
  const currentIndex = isControlled ? controlledIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex]); // Added currentIndex dependency

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      handleIndexChange(nextIndex);
      setTimeout(() => setIsAnimating(false), 800);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      handleIndexChange(prevIndex);
      setTimeout(() => setIsAnimating(false), 800);
    }, 400);
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      handleIndexChange(index);
      setTimeout(() => setIsAnimating(false), 800);
    }, 400);
  };

  const containerClasses = className || "relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800";

  return (
    <div className={containerClasses}>
      {/* SVG Filter for wave effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="wave-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.05"
              numOctaves="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="2s"
                values="0.01 0.05;0.02 0.08;0.01 0.05"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Image Container with Animation */}
      <div
        className="relative w-full h-full cursor-pointer"
        onClick={onClick}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              } ${isAnimating && index === currentIndex ? 'plisse-wave-animation' : ''}`}
          >
            {/* Pleated overlay effect */}
            <div className="absolute inset-0 z-20 pointer-events-none plisse-pleats opacity-30" />

            {/* Main Image */}
            <img
              src={image}
              alt={`Plissé product ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-700 ${isAnimating && index === currentIndex ? 'scale-105' : 'scale-100'
                }`}
            />

            {/* Wave overlay during animation */}
            {isAnimating && index === currentIndex && (
              <div className="absolute inset-0 z-30">
                {/* Horizontal wave lines */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-[5%] bg-gradient-to-b from-transparent via-white/10 to-transparent wave-line"
                    style={{
                      top: `${i * 5}%`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Pleated curtain fold effect overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 plisse-folds" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition disabled:opacity-50"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition disabled:opacity-50"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
              ? 'w-6 bg-white'
              : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

      {/* Animation indicator */}
      {isAnimating && (
        <div className="absolute top-4 right-4 z-30 px-3 py-1 bg-primary/80 text-white text-xs font-medium rounded-full">
          <i className="fas fa-wind mr-1"></i> Plissé effect
        </div>
      )}
    </div>
  );
};

export default PlisseAnimation;
