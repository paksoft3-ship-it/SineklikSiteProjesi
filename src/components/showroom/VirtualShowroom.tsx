'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Hotspot {
  id: string;
  x: number;
  y: number;
  product: {
    name: string;
    description: string;
    price: number;
    image: string;
    link: string;
  };
}

interface ShowroomScene {
  id: string;
  name: string;
  image: string;
  hotspots: Hotspot[];
}

const showroomScenes: ShowroomScene[] = [
  {
    id: 'living-room',
    name: 'Woonkamer',
    image: '/images/showroom/living-room.png',
    hotspots: [
      {
        id: '1',
        x: 30,
        y: 40,
        product: {
          name: 'Honeycomb Gordijn',
          description: 'Isolerend duette gordijn in wit',
          price: 129,
          image: '/images/showroom/living-after.png',
          link: '/products/plisse-curtains/honeycomb',
        },
      },
      {
        id: '2',
        x: 70,
        y: 35,
        product: {
          name: 'Plissé Gordijn',
          description: 'Lichtdoorlatend plissé in crème',
          price: 79,
          image: '/images/showroom/living-after.png',
          link: '/products/plisse-curtains/light-filtering',
        },
      },
    ],
  },
  {
    id: 'bedroom',
    name: 'Slaapkamer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
    hotspots: [
      {
        id: '3',
        x: 50,
        y: 30,
        product: {
          name: 'Verduisterend Plissé',
          description: '100% lichtblokkering voor optimale slaap',
          price: 99,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
          link: '/products/plisse-curtains/blackout',
        },
      },
    ],
  },
  {
    id: 'balcony',
    name: 'Balkon',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    hotspots: [
      {
        id: '4',
        x: 45,
        y: 50,
        product: {
          name: 'Plissé Hordeur',
          description: 'Ruimtebesparende hordeur voor balkons',
          price: 199,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
          link: '/products/plisse-screens/door',
        },
      },
    ],
  },
];

export default function VirtualShowroom() {
  const [activeScene, setActiveScene] = useState(showroomScenes[0]);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={`bg-gray-900 rounded-2xl overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="font-display text-xl font-bold text-white">Virtuele Showroom</h3>
          <p className="text-sm text-gray-400">
            Klik op de hotspots om producten te bekijken
          </p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
          </motion.button>
        </div>
      </div>

      {/* Scene Selector */}
      <div className="bg-gray-800/50 px-6 py-3 flex gap-2 overflow-x-auto">
        {showroomScenes.map((scene) => (
          <motion.button
            key={scene.id}
            onClick={() => {
              setActiveScene(scene);
              setActiveHotspot(null);
            }}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${activeScene.id === scene.id
                ? 'bg-primary text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {scene.name}
          </motion.button>
        ))}
      </div>

      {/* Main Viewer */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScene.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative aspect-video"
          >
            <img
              src={activeScene.image}
              alt={activeScene.name}
              className="w-full h-full object-cover"
            />

            {/* Hotspots */}
            {activeScene.hotspots.map((hotspot) => (
              <motion.button
                key={hotspot.id}
                className={`absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center transition-all ${activeHotspot?.id === hotspot.id
                    ? 'bg-primary scale-125'
                    : 'bg-white/90 hover:bg-primary hover:scale-110'
                  }`}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                onClick={() => setActiveHotspot(hotspot)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
              >
                <i
                  className={`fas fa-plus text-sm ${activeHotspot?.id === hotspot.id ? 'text-white' : 'text-gray-700'
                    }`}
                ></i>

                {/* Pulse Effect */}
                <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping"></span>
              </motion.button>
            ))}

            {/* Product Info Panel */}
            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute top-4 right-4 w-80 bg-white rounded-xl shadow-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="absolute top-2 right-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition z-10"
                  >
                    <i className="fas fa-times text-sm"></i>
                  </button>

                  <div className="h-40 overflow-hidden">
                    <img
                      src={activeHotspot.product.image}
                      alt={activeHotspot.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="font-display text-lg font-bold text-gray-900 mb-1">
                      {activeHotspot.product.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">
                      {activeHotspot.product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        €{activeHotspot.product.price},-
                      </span>
                      <motion.a
                        href={activeHotspot.product.link}
                        className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-blue-600 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Bekijken
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Hints */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
              <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                <i className="fas fa-hand-pointer mr-2"></i>
                {activeScene.hotspots.length} producten in deze ruimte
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">
              <i className="fas fa-info-circle mr-1"></i>
              Klik op de + iconen om productdetails te bekijken
            </span>
          </div>
          <motion.button
            className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-calendar mr-2"></i>
            Plan een afspraak
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Mini Showroom Preview
export function ShowroomPreview() {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={showroomScenes[0].image}
        alt="Virtual Showroom"
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
        <div className="flex items-center gap-2 mb-2">
          <motion.span
            className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            NIEUW
          </motion.span>
          <span className="text-white/80 text-sm">3D Experience</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-2">
          Virtuele Showroom
        </h3>
        <p className="text-white/70 text-sm mb-4">
          Ontdek onze producten in een realistische omgeving
        </p>
        <motion.span
          className="inline-flex items-center text-primary font-semibold"
          whileHover={{ x: 5 }}
        >
          Start de tour <i className="fas fa-arrow-right ml-2"></i>
        </motion.span>
      </div>

      {/* Animated Hotspot Preview */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 0 0 rgba(255,255,255,0.4)',
            '0 0 0 15px rgba(255,255,255,0)',
            '0 0 0 0 rgba(255,255,255,0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="fas fa-plus text-primary text-xs"></i>
      </motion.div>
    </motion.div>
  );
}
