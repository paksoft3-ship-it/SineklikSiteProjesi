'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SavingsData {
  energySaved: number; // kWh per year
  co2Reduced: number; // kg per year
  moneySaved: number; // EUR per year
  treesEquivalent: number;
}

interface SustainabilityDashboardProps {
  productType?: 'honeycomb' | 'plisse' | 'blackout';
  windowCount?: number;
  windowArea?: number; // m²
}

const calculateSavings = (
  productType: string,
  windowCount: number,
  windowArea: number
): SavingsData => {
  // Savings factors per m² per year
  const factors = {
    honeycomb: { energy: 45, co2: 18, money: 12 },
    plisse: { energy: 25, co2: 10, money: 7 },
    blackout: { energy: 35, co2: 14, money: 9 },
  };

  const factor = factors[productType as keyof typeof factors] || factors.plisse;
  const totalArea = windowArea * windowCount;

  return {
    energySaved: Math.round(factor.energy * totalArea),
    co2Reduced: Math.round(factor.co2 * totalArea),
    moneySaved: Math.round(factor.money * totalArea),
    treesEquivalent: Math.round((factor.co2 * totalArea) / 21), // 1 tree absorbs ~21kg CO2/year
  };
};

export default function SustainabilityDashboard({
  productType = 'honeycomb',
  windowCount = 5,
  windowArea = 1.5,
}: SustainabilityDashboardProps) {
  const [savings, setSavings] = useState<SavingsData>({
    energySaved: 0,
    co2Reduced: 0,
    moneySaved: 0,
    treesEquivalent: 0,
  });
  const [animatedValues, setAnimatedValues] = useState<SavingsData>({
    energySaved: 0,
    co2Reduced: 0,
    moneySaved: 0,
    treesEquivalent: 0,
  });
  const [localWindowCount, setLocalWindowCount] = useState(windowCount);
  const [localWindowArea, setLocalWindowArea] = useState(windowArea);

  useEffect(() => {
    const newSavings = calculateSavings(productType, localWindowCount, localWindowArea);
    setSavings(newSavings);
  }, [productType, localWindowCount, localWindowArea]);

  // Animate values
  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues({
        energySaved: Math.round(savings.energySaved * easeOut),
        co2Reduced: Math.round(savings.co2Reduced * easeOut),
        moneySaved: Math.round(savings.moneySaved * easeOut),
        treesEquivalent: Math.round(savings.treesEquivalent * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedValues(savings);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [savings]);

  const stats = [
    {
      icon: 'fa-bolt',
      label: 'Energiebesparing',
      value: animatedValues.energySaved,
      unit: 'kWh/jaar',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
    {
      icon: 'fa-leaf',
      label: 'CO₂ Reductie',
      value: animatedValues.co2Reduced,
      unit: 'kg/jaar',
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      icon: 'fa-euro-sign',
      label: 'Geldbesparing',
      value: animatedValues.moneySaved,
      unit: 'EUR/jaar',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      icon: 'fa-tree',
      label: 'Equivalent aan',
      value: animatedValues.treesEquivalent,
      unit: 'bomen',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <i className="fas fa-globe-europe text-white text-xl"></i>
          </motion.div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Duurzaamheid Dashboard
            </h3>
            <p className="text-green-100 text-sm">
              Uw bijdrage aan een groenere wereld
            </p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          Bereken uw besparing
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Aantal ramen</label>
            <input
              type="number"
              value={localWindowCount}
              onChange={(e) => setLocalWindowCount(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              max="50"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Gem. oppervlakte (m²)</label>
            <input
              type="number"
              value={localWindowArea}
              onChange={(e) => setLocalWindowArea(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
              min="0.5"
              max="10"
              step="0.1"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                <i className={`fas ${stat.icon} ${stat.color}`}></i>
              </div>
              <motion.p
                className="text-2xl font-bold text-gray-900 dark:text-white"
                key={stat.value}
              >
                {stat.label.includes('Geld') ? '€' : ''}{stat.value.toLocaleString()}
              </motion.p>
              <p className="text-xs text-gray-500">{stat.unit}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Impact */}
      <div className="px-6 pb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Visuele Impact: Bomen geplant
          </p>
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: Math.min(animatedValues.treesEquivalent, 30) }).map((_, idx) => (
              <motion.i
                key={idx}
                className="fas fa-tree text-green-500"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.05, type: 'spring' }}
              />
            ))}
            {animatedValues.treesEquivalent > 30 && (
              <span className="text-sm text-gray-500 ml-2">
                +{animatedValues.treesEquivalent - 30} meer
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-center gap-6">
          {[
            { icon: 'fa-recycle', label: 'Recyclebaar' },
            { icon: 'fa-seedling', label: 'Duurzaam' },
            { icon: 'fa-certificate', label: 'ISO 14001' },
          ].map((cert, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              <i className={`fas ${cert.icon} text-green-500`}></i>
              <span className="text-xs">{cert.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <i className="fas fa-info-circle mr-1"></i>
            Gebaseerd op gemiddeld energieverbruik
          </p>
          <motion.button
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold text-sm hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meer info
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Compact Badge version
export function EcoBadge({ savings }: { savings?: number }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.i
        className="fas fa-leaf text-green-600"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="text-sm font-medium text-green-700 dark:text-green-300">
        Bespaar {savings || 25}% energie
      </span>
    </motion.div>
  );
}
