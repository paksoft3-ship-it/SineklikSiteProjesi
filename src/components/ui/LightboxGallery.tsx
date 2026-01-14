'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
}

interface LightboxGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export default function LightboxGallery({
  images,
  columns = 3,
  gap = 'md',
}: LightboxGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  };

  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
      setIsZoomed(false);
    }
  }, [selectedIndex, images.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      setIsZoomed(false);
    }
  }, [selectedIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goNext, goPrev]);

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square rounded-xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={image.thumbnail || image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <motion.div
                className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ scale: [0.8, 1] }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-search-plus text-gray-700"></i>
              </motion.div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white">
              <span className="text-sm">
                {selectedIndex + 1} / {images.length}
              </span>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`fas ${isZoomed ? 'fa-search-minus' : 'fa-search-plus'}`}></i>
                </motion.button>
                <motion.button
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-times"></i>
                </motion.button>
              </div>
            </div>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center p-4 relative">
              {/* Previous Button */}
              <motion.button
                onClick={goPrev}
                className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-10"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-chevron-left"></i>
              </motion.button>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <motion.img
                    src={images[selectedIndex].src}
                    alt={images[selectedIndex].alt}
                    className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
                    animate={{ scale: isZoomed ? 1.5 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Button */}
              <motion.button
                onClick={goNext}
                className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition z-10"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-chevron-right"></i>
              </motion.button>
            </div>

            {/* Caption */}
            {images[selectedIndex].caption && (
              <motion.div
                className="p-4 text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p>{images[selectedIndex].caption}</p>
              </motion.div>
            )}

            {/* Thumbnails */}
            <div className="p-4 overflow-x-auto">
              <div className="flex gap-2 justify-center">
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsZoomed(false);
                    }}
                    className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition ${
                      selectedIndex === index
                        ? 'ring-2 ring-white'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image.thumbnail || image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Masonry variant
export function MasonryGallery({
  images,
  columns = 3,
}: {
  images: GalleryImage[];
  columns?: number;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Distribute images into columns
  const columnArrays: GalleryImage[][] = Array.from({ length: columns }, () => []);
  images.forEach((image, index) => {
    columnArrays[index % columns].push(image);
  });

  return (
    <>
      <div className="flex gap-4">
        {columnArrays.map((column, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-4">
            {column.map((image, imgIndex) => {
              const originalIndex = imgIndex * columns + colIndex;
              return (
                <motion.button
                  key={originalIndex}
                  onClick={() => setSelectedIndex(originalIndex)}
                  className="relative rounded-xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <motion.div
                      className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <i className="fas fa-expand text-gray-700"></i>
                    </motion.div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox would go here - similar to above */}
    </>
  );
}
