'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ColorSwatch {
  id: string;
  name: string;
  hex: string;
  category: string;
}

const colorSwatches: ColorSwatch[] = [
  // Neutrals
  { id: 'n1', name: 'Puur Wit', hex: '#FFFFFF', category: 'Neutraal' },
  { id: 'n2', name: 'Crème', hex: '#FFFDD0', category: 'Neutraal' },
  { id: 'n3', name: 'Lichtgrijs', hex: '#D3D3D3', category: 'Neutraal' },
  { id: 'n4', name: 'Antraciet', hex: '#293133', category: 'Neutraal' },
  { id: 'n5', name: 'Zwart', hex: '#1A1A1A', category: 'Neutraal' },
  // Blues
  { id: 'b1', name: 'Hemelsblauw', hex: '#87CEEB', category: 'Blauw' },
  { id: 'b2', name: 'Oceaanblauw', hex: '#4682B4', category: 'Blauw' },
  { id: 'b3', name: 'Marineblauw', hex: '#1F3A60', category: 'Blauw' },
  // Greens
  { id: 'g1', name: 'Mintgroen', hex: '#98FF98', category: 'Groen' },
  { id: 'g2', name: 'Saliegroen', hex: '#9DC183', category: 'Groen' },
  { id: 'g3', name: 'Bosgroen', hex: '#228B22', category: 'Groen' },
  // Warm
  { id: 'w1', name: 'Zandbeige', hex: '#F5DEB3', category: 'Warm' },
  { id: 'w2', name: 'Terracotta', hex: '#E2725B', category: 'Warm' },
  { id: 'w3', name: 'Bordeaux', hex: '#722F37', category: 'Warm' },
  // Earth
  { id: 'e1', name: 'Taupe', hex: '#8B8589', category: 'Aardetinten' },
  { id: 'e2', name: 'Chocolade', hex: '#7B3F00', category: 'Aardetinten' },
  { id: 'e3', name: 'Cognac', hex: '#9A463D', category: 'Aardetinten' },
];

interface ColorMatchingToolProps {
  onColorSelect?: (color: ColorSwatch) => void;
}

export default function ColorMatchingTool({ onColorSelect }: ColorMatchingToolProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [extractedColors, setExtractedColors] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<ColorSwatch | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const categories = ['all', ...Array.from(new Set(colorSwatches.map((c) => c.category)))];

  const filteredSwatches = activeCategory === 'all'
    ? colorSwatches
    : colorSwatches.filter((c) => c.category === activeCategory);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setIsAnalyzing(true);
        // Simulate color extraction
        setTimeout(() => {
          extractColorsFromImage(e.target?.result as string);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const extractColorsFromImage = (imageSrc: string) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Simple color extraction (sample from different areas)
      const colors: string[] = [];
      const samplePoints = [
        { x: img.width * 0.25, y: img.height * 0.25 },
        { x: img.width * 0.75, y: img.height * 0.25 },
        { x: img.width * 0.5, y: img.height * 0.5 },
        { x: img.width * 0.25, y: img.height * 0.75 },
        { x: img.width * 0.75, y: img.height * 0.75 },
      ];

      samplePoints.forEach((point) => {
        const pixel = ctx.getImageData(point.x, point.y, 1, 1).data;
        const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2])
          .toString(16)
          .slice(1)}`;
        if (!colors.includes(hex)) {
          colors.push(hex);
        }
      });

      setExtractedColors(colors);
      setIsAnalyzing(false);
    };
    img.src = imageSrc;
  };

  const handleColorSelect = (color: ColorSwatch) => {
    setSelectedColor(color);
    onColorSelect?.(color);
  };

  const getMatchingSwatches = (extractedHex: string): ColorSwatch[] => {
    // Simple color distance matching
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const colorDistance = (hex1: string, hex2: string) => {
      const rgb1 = hexToRgb(hex1);
      const rgb2 = hexToRgb(hex2);
      if (!rgb1 || !rgb2) return Infinity;
      return Math.sqrt(
        Math.pow(rgb1.r - rgb2.r, 2) +
        Math.pow(rgb1.g - rgb2.g, 2) +
        Math.pow(rgb1.b - rgb2.b, 2)
      );
    };

    return colorSwatches
      .map((swatch) => ({
        ...swatch,
        distance: colorDistance(extractedHex, swatch.hex),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);
  };

  return (
    <div className="space-y-6">
      {/* Hidden Canvas for Image Processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Upload Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
          <i className="fas fa-magic mr-2 text-primary"></i>
          Kleuradvies op basis van uw interieur
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Upload een foto van uw kamer en wij analyseren de kleuren om de perfecte match te vinden.
        </p>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />

        {!uploadedImage ? (
          <motion.button
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-primary transition"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <i className="fas fa-camera text-2xl text-primary"></i>
            </motion.div>
            <p className="font-semibold text-gray-900 dark:text-white mb-1">
              Upload een foto van uw kamer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sleep een foto hierheen of klik om te uploaden
            </p>
          </motion.button>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-64 object-cover"
              />
              {isAnalyzing && (
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-center text-white">
                    <motion.div
                      className="w-12 h-12 border-4 border-white border-t-transparent rounded-full mx-auto mb-3"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <p className="font-semibold">Kleuren analyseren...</p>
                  </div>
                </motion.div>
              )}
              <button
                onClick={() => {
                  setUploadedImage(null);
                  setExtractedColors([]);
                }}
                className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition"
              >
                <i className="fas fa-times text-gray-600"></i>
              </button>
            </div>

            {/* Extracted Colors */}
            {extractedColors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-semibold text-gray-900 dark:text-white mb-3">
                  Gedetecteerde kleuren in uw kamer:
                </p>
                <div className="flex gap-3 flex-wrap">
                  {extractedColors.map((color, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center"
                    >
                      <div
                        className="w-12 h-12 rounded-lg shadow-md mb-1 border-2 border-white"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-gray-500">{color}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Matching Recommendations */}
                <div className="mt-6">
                  <p className="font-semibold text-gray-900 dark:text-white mb-3">
                    <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                    Onze aanbevelingen:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {extractedColors.slice(0, 2).flatMap((color) =>
                      getMatchingSwatches(color).map((swatch) => (
                        <motion.button
                          key={`${color}-${swatch.id}`}
                          onClick={() => handleColorSelect(swatch)}
                          className={`p-3 rounded-xl border-2 transition ${
                            selectedColor?.id === swatch.id
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div
                            className="w-full h-8 rounded-lg mb-2 shadow-sm"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {swatch.name}
                          </p>
                          <p className="text-xs text-gray-500">{swatch.category}</p>
                        </motion.button>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Manual Color Selection */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
          <i className="fas fa-palette mr-2 text-primary"></i>
          Of kies handmatig een kleur
        </h3>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'Alle kleuren' : category}
            </motion.button>
          ))}
        </div>

        {/* Color Grid */}
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3"
          layout
        >
          <AnimatePresence>
            {filteredSwatches.map((swatch) => (
              <motion.button
                key={swatch.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => handleColorSelect(swatch)}
                className={`relative aspect-square rounded-xl shadow-sm transition group ${
                  selectedColor?.id === swatch.id
                    ? 'ring-2 ring-primary ring-offset-2'
                    : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
                }`}
                style={{ backgroundColor: swatch.hex }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedColor?.id === swatch.id && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                      <i className="fas fa-check text-primary text-xs"></i>
                    </div>
                  </motion.div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-1 bg-black/50 opacity-0 group-hover:opacity-100 transition rounded-b-xl">
                  <p className="text-white text-[10px] text-center truncate">
                    {swatch.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected Color Info */}
        <AnimatePresence>
          {selectedColor && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-xl shadow-md"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {selectedColor.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedColor.category} • {selectedColor.hex}
                </p>
              </div>
              <motion.button
                className="px-4 py-2 bg-primary text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Toepassen
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
