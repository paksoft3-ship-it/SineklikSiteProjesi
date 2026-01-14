'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface WindowPosition {
  top: string;
  left: string;
  width: string;
  height: string;
}

interface CurtainDemoProps {
  className?: string;
  curtainColor?: string;
  roomImage?: string;
  windowPosition?: WindowPosition;
}

// Default window position calculated from room-dutch-interior.png
// Measured from the inner edge of the dark window frame
const defaultWindowPosition: WindowPosition = {
  top: '10%',
  left: '33%',
  width: '34%',
  height: 'calc(62% + 40px)',
};

// Roller shade window position - adjusted for third demo
const rollerShadeWindowPosition: WindowPosition = {
  top: '9%',
  left: 'calc(34% - 2px)',
  width: '32%',
  height: 'calc(62% + 40px)',
};

export default function CurtainDemo({
  className = '',
  curtainColor = '#4a5568',
  roomImage = '/images/demo/room-dutch-interior.png',
  windowPosition = defaultWindowPosition,
}: CurtainDemoProps) {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Room Image as base */}
        <img
          src={roomImage}
          alt="Room interior"
          className="w-full h-full object-cover"
        />

        {/* Curtains Container - positioned exactly over the window */}
        <div
          className="absolute"
          style={{
            top: windowPosition.top,
            left: windowPosition.left,
            width: windowPosition.width,
            height: windowPosition.height,
          }}
        >
          {/* Left Curtain */}
          <motion.div
            className="absolute top-0 left-0 h-full origin-left"
            style={{
              background: `linear-gradient(90deg, ${curtainColor} 0%, ${curtainColor}ee 50%, ${curtainColor}dd 100%)`,
              boxShadow: '4px 0 15px rgba(0,0,0,0.4)',
            }}
            initial={{ width: '8%' }}
            animate={{ width: isClosed ? '51%' : '8%' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Curtain Folds */}
            <div className="absolute inset-0 flex">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-full"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.15) 100%)'
                      : 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Curtain */}
          <motion.div
            className="absolute top-0 right-0 h-full origin-right"
            style={{
              background: `linear-gradient(270deg, ${curtainColor} 0%, ${curtainColor}ee 50%, ${curtainColor}dd 100%)`,
              boxShadow: '-4px 0 15px rgba(0,0,0,0.4)',
            }}
            initial={{ width: '8%' }}
            animate={{ width: isClosed ? '51%' : '8%' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Curtain Folds */}
            <div className="absolute inset-0 flex">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-full"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(270deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.15) 100%)'
                      : 'linear-gradient(270deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Curtain Rod */}
          <div className="absolute -top-4 -left-2 -right-2 h-2 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-md" />
          <div className="absolute -top-5 -left-3 w-3 h-3 bg-gray-400 rounded-full shadow-sm" />
          <div className="absolute -top-5 -right-3 w-3 h-3 bg-gray-400 rounded-full shadow-sm" />
        </div>

        {/* Darkness Overlay - appears when curtains close */}
        <motion.div
          className="absolute inset-0 bg-gray-900 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isClosed ? 0.5 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Room ambient light indicator */}
        <motion.div
          className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm"
          animate={{ opacity: 1 }}
        >
          <motion.div
            animate={{
              color: isClosed ? '#94a3b8' : '#fbbf24',
              scale: isClosed ? 1 : [1, 1.1, 1],
            }}
            transition={{
              scale: { repeat: Infinity, duration: 2 },
              color: { duration: 0.5 }
            }}
          >
            {isClosed ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </motion.div>
          <span>{isClosed ? 'Dark Mode' : 'Bright Room'}</span>
        </motion.div>
      </div>

      {/* Toggle Control */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3">
        <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {isClosed ? 'Open Curtains' : 'Close Curtains'}
        </span>

        <button
          onClick={() => setIsClosed(!isClosed)}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isClosed ? 'bg-gray-600' : 'bg-amber-500'
            }`}
        >
          <motion.div
            className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
            animate={{ left: isClosed ? '4px' : 'calc(100% - 28px)' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            {isClosed ? (
              <Moon className="w-3 h-3 text-gray-600" />
            ) : (
              <Sun className="w-3 h-3 text-amber-500" />
            )}
          </motion.div>
        </button>
      </div>
    </div>
  );
}

// Vertical Blinds Version
export function BlindDemo({
  className = '',
  blindColor = '#e5e7eb',
  slats = 12,
}: {
  className?: string;
  blindColor?: string;
  slats?: number;
}) {
  const [openPercent, setOpenPercent] = useState(0); // 0 = closed (flat), 100 = fully open (vertical)

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        {/* Room Image as base */}
        <div className="absolute inset-0">
          <img
            src="/images/demo/room-modern-office.png"
            alt="Modern Office"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Light effect - increases as blinds open more */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-transparent pointer-events-none"
          animate={{ opacity: openPercent / 100 }}
          transition={{ duration: 0.3 }}
        />

        {/* Window Area for Blinds - Positioned over the office window */}
        <div className="absolute top-[15%] left-[calc(25%+75px)] w-[calc(50%-160px)] h-[calc(42%+5px)] overflow-hidden">
          {/* Top Bar / Header Rail */}
          <div className="absolute -top-1 -left-2 -right-2 h-3 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm shadow-md z-10" />
          <div className="absolute -top-2 -left-3 w-3 h-3 bg-gray-400 rounded-full shadow-sm z-10" />
          <div className="absolute -top-2 -right-3 w-3 h-3 bg-gray-400 rounded-full shadow-sm z-10" />

          {/* Blinds Container */}
          <div className="relative w-full h-full flex pt-2">
            {[...Array(slats)].map((_, i) => (
              <motion.div
                key={i}
                className="h-full origin-center"
                style={{
                  background: `linear-gradient(180deg, ${blindColor} 0%, ${blindColor}cc 100%)`,
                  boxShadow: '1px 0 3px rgba(0,0,0,0.1)',
                  width: `${100 / slats}%`,
                }}
                animate={{
                  rotateY: (openPercent / 100) * 90,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.02,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>
        </div>

        {/* Darkness Overlay - darker when blinds are more closed */}
        <motion.div
          className="absolute inset-0 bg-gray-900 pointer-events-none"
          animate={{ opacity: (100 - openPercent) / 100 * 0.4 }}
          transition={{ duration: 0.5 }}
        />

        {/* Control */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-3">
          <div className="flex items-center gap-4 text-white text-sm">
            <Moon className="w-4 h-4" />
            <span className="w-16 text-center">{openPercent}% Open</span>
            <Sun className="w-4 h-4 text-amber-400" />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={openPercent}
            onChange={(e) => setOpenPercent(Number(e.target.value))}
            className="w-48 h-2 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab"
          />
        </div>
      </div>
    </div>
  );
}

// Roller Shade Version
export function RollerShadeDemo({
  className = '',
  shadeColor = '#374151',
  roomImage = '/images/demo/room-dutch-interior.png',
  windowPosition = rollerShadeWindowPosition,
}: {
  className?: string;
  shadeColor?: string;
  roomImage?: string;
  windowPosition?: WindowPosition;
}) {
  const [openPercent, setOpenPercent] = useState(80);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Room Image as base */}
        <img
          src={roomImage}
          alt="Room"
          className="w-full h-full object-cover"
        />

        {/* Roller Shade Container - positioned exactly over the window */}
        <div
          className="absolute"
          style={{
            top: windowPosition.top,
            left: windowPosition.left,
            width: windowPosition.width,
            height: windowPosition.height,
          }}
        >
          {/* Roller Shade */}
          <motion.div
            className="absolute top-0 left-0 right-0 origin-top overflow-hidden"
            style={{ background: shadeColor }}
            animate={{ height: `${100 - openPercent}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Shade texture */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
              }}
            />

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gray-700 shadow-lg" />
          </motion.div>

          {/* Roller tube at top */}
          <div className="absolute -top-2 -left-1 -right-1 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-md" />
        </div>

        {/* Darkness based on shade position */}
        <motion.div
          className="absolute inset-0 bg-gray-900 pointer-events-none"
          animate={{ opacity: (100 - openPercent) / 100 * 0.5 }}
          transition={{ duration: 0.3 }}
        />

        {/* Control */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-3">
          <div className="flex items-center gap-4 text-white text-sm">
            <Moon className="w-4 h-4" />
            <span className="w-16 text-center">{openPercent}% Open</span>
            <Sun className="w-4 h-4 text-amber-400" />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={openPercent}
            onChange={(e) => setOpenPercent(Number(e.target.value))}
            className="w-48 h-2 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab"
          />
        </div>
      </div>
    </div>
  );
}
