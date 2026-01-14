'use client';

import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ZoomIn,
  Expand
} from 'lucide-react';

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

// Helper to render portal safely
function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}

export default function LightboxGallery({
  images,
  columns = 3,
  gap = 'md',
}: LightboxGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

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
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setZoomLevel(1);
    document.body.style.overflow = '';
  };

  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
      setZoomLevel(1);
    }
  }, [selectedIndex, images.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      setZoomLevel(1);
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

  // Cleanup overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={image.thumbnail || image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 font-medium text-sm">
                <ZoomIn className="w-4 h-4" />
                View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox Modal via Portal */}
      <Portal>
        <AnimatePresence>
          {selectedIndex !== null && currentImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black"
              onClick={closeLightbox}
            >
              {/* Main Image Container - Rendered first to stay behind controls */}
              <div
                className="absolute inset-0 flex items-center justify-center p-4 md:p-16 z-0"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.2s ease-out',
                  }}
                  onDoubleClick={() => setZoomLevel(z => z > 1 ? 1 : 2)}
                />
              </div>

              {/* Controls Layer - higher z-index */}
              <div className="relative z-10 w-full h-full pointer-events-none">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition pointer-events-auto backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 text-white text-sm bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {selectedIndex + 1} / {images.length}
                </div>

                {/* Zoom Controls */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 rounded-full px-2 py-1 pointer-events-auto backdrop-blur-sm">
                  <button
                    onClick={(e) => { e.stopPropagation(); setZoomLevel(z => Math.max(1, z - 0.5)); }}
                    className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white text-xs w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); setZoomLevel(z => Math.min(4, z + 0.5)); }}
                    className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Previous Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition pointer-events-auto backdrop-blur-sm"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition pointer-events-auto backdrop-blur-sm"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Caption */}
                {currentImage.caption && (
                  <div className="absolute bottom-20 left-0 right-0 text-center pointer-events-auto">
                    <span className="inline-block bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                      {currentImage.caption}
                    </span>
                  </div>
                )}

                {/* Thumbnails */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-auto">
                  <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); setZoomLevel(1); }}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${selectedIndex === index
                            ? 'ring-2 ring-white scale-110'
                            : 'opacity-50 hover:opacity-100'
                          }`}
                      >
                        <img
                          src={image.thumbnail || image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}

// Masonry Gallery with Lightbox
export function MasonryGallery({
  images,
  columns = 3,
}: {
  images: GalleryImage[];
  columns?: number;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setZoomLevel(1);
    document.body.style.overflow = '';
  };

  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
      setZoomLevel(1);
    }
  }, [selectedIndex, images.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      setZoomLevel(1);
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

  // Cleanup overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Distribute images into columns
  const columnArrays: GalleryImage[][] = Array.from({ length: columns }, () => []);
  images.forEach((image, index) => {
    columnArrays[index % columns].push(image);
  });

  const getOriginalIndex = (colIndex: number, imgIndex: number) => {
    return imgIndex * columns + colIndex;
  };

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <div className="flex gap-4">
        {columnArrays.map((column, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-4">
            {column.map((image, imgIndex) => {
              const originalIndex = getOriginalIndex(colIndex, imgIndex);
              return (
                <motion.button
                  key={originalIndex}
                  onClick={() => openLightbox(originalIndex)}
                  className="relative rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 font-medium text-sm">
                      <Expand className="w-4 h-4" />
                      <span>View</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox Modal via Portal */}
      <Portal>
        <AnimatePresence>
          {selectedIndex !== null && currentImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black"
              onClick={closeLightbox}
            >
              {/* Main Image Container - Rendered first to stay behind controls */}
              <div
                className="absolute inset-0 flex items-center justify-center p-4 md:p-16 z-0"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.2s ease-out',
                  }}
                  onDoubleClick={() => setZoomLevel(z => z > 1 ? 1 : 2)}
                />
              </div>

              {/* Controls Layer */}
              <div className="relative z-10 w-full h-full pointer-events-none">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition pointer-events-auto backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 text-white text-sm bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {selectedIndex + 1} / {images.length}
                </div>

                {/* Zoom Controls */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 rounded-full px-2 py-1 pointer-events-auto backdrop-blur-sm">
                  <button
                    onClick={(e) => { e.stopPropagation(); setZoomLevel(z => Math.max(1, z - 0.5)); }}
                    className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white text-xs w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); setZoomLevel(z => Math.min(4, z + 0.5)); }}
                    className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Previous Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition pointer-events-auto backdrop-blur-sm"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition pointer-events-auto backdrop-blur-sm"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Caption */}
                {currentImage.caption && (
                  <div className="absolute bottom-20 left-0 right-0 text-center pointer-events-auto">
                    <span className="inline-block bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                      {currentImage.caption}
                    </span>
                  </div>
                )}

                {/* Thumbnails */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-auto">
                  <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); setZoomLevel(1); }}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${selectedIndex === index
                            ? 'ring-2 ring-white scale-110'
                            : 'opacity-50 hover:opacity-100'
                          }`}
                      >
                        <img
                          src={image.thumbnail || image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
