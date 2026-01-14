'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Live Viewers Counter
export function LiveViewers({
  productName,
  minViewers = 5,
  maxViewers = 25,
}: {
  productName?: string;
  minViewers?: number;
  maxViewers?: number;
}) {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    // Initial random viewers
    setViewers(Math.floor(Math.random() * (maxViewers - minViewers + 1)) + minViewers);

    // Simulate fluctuation
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const newValue = prev + change;
        return Math.max(minViewers, Math.min(maxViewers, newValue));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [minViewers, maxViewers]);

  return (
    <motion.div
      className="flex items-center gap-2 text-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
      </span>
      <span className="text-gray-600 dark:text-gray-400">
        <motion.span
          key={viewers}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-gray-900 dark:text-white"
        >
          {viewers}
        </motion.span>
        {' '}mensen bekijken dit{productName ? ` (${productName})` : ''}
      </span>
    </motion.div>
  );
}

// Recent Purchase Notification
interface PurchaseNotification {
  id: number;
  name: string;
  location: string;
  product: string;
  time: string;
  image?: string;
}

const samplePurchases: PurchaseNotification[] = [
  { id: 1, name: 'Jan', location: 'Amsterdam', product: 'Plissé Hordeur', time: '2 min geleden', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA' },
  { id: 2, name: 'Maria', location: 'Rotterdam', product: 'Plissé Gordijn', time: '5 min geleden', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q' },
  { id: 3, name: 'Peter', location: 'Den Haag', product: 'Raamhor', time: '8 min geleden', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi' },
  { id: 4, name: 'Sophie', location: 'Utrecht', product: 'Honeycomb Gordijn', time: '12 min geleden', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q' },
  { id: 5, name: 'Kees', location: 'Eindhoven', product: 'Schuifhor', time: '15 min geleden', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv' },
];

export function RecentPurchases({ interval = 8000 }: { interval?: number }) {
  const [currentPurchase, setCurrentPurchase] = useState<PurchaseNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let purchaseIndex = 0;

    const showNotification = () => {
      setCurrentPurchase(samplePurchases[purchaseIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      purchaseIndex = (purchaseIndex + 1) % samplePurchases.length;
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Then show at regular intervals
    const intervalId = setInterval(showNotification, interval);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, [interval]);

  return (
    <AnimatePresence>
      {isVisible && currentPurchase && (
        <motion.div
          className="fixed bottom-24 left-4 z-50 max-w-sm"
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 flex items-center gap-3 border border-gray-100 dark:border-gray-700">
            {currentPurchase.image && (
              <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={currentPurchase.image}
                  alt={currentPurchase.product}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-white font-medium">
                <span className="font-bold">{currentPurchase.name}</span> uit{' '}
                <span className="text-primary">{currentPurchase.location}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                heeft <span className="font-semibold">{currentPurchase.product}</span> gekocht
              </p>
              <p className="text-xs text-gray-400 mt-1">{currentPurchase.time}</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <i className="fas fa-times text-xs"></i>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Stock Warning
export function StockWarning({
  stock = 5,
  threshold = 10,
}: {
  stock?: number;
  threshold?: number;
}) {
  if (stock > threshold) return null;

  return (
    <motion.div
      className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.i
        className="fas fa-exclamation-triangle"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <span>
        Nog maar <span className="font-bold">{stock}</span> op voorraad!
      </span>
    </motion.div>
  );
}

// Urgency Timer
export function UrgencyTimer({
  endTime,
  label = 'Aanbieding eindigt over:',
}: {
  endTime: Date;
  label?: string;
}) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-red-600 text-white rounded-lg px-3 py-2 min-w-[50px]"
      >
        <span className="text-xl font-bold">{String(value).padStart(2, '0')}</span>
      </motion.div>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
      <p className="text-sm text-red-700 dark:text-red-300 mb-3 text-center font-medium">
        <i className="fas fa-clock mr-2"></i>{label}
      </p>
      <div className="flex justify-center gap-2">
        <TimeBlock value={timeLeft.hours} label="uur" />
        <span className="text-2xl text-red-600 self-start pt-2">:</span>
        <TimeBlock value={timeLeft.minutes} label="min" />
        <span className="text-2xl text-red-600 self-start pt-2">:</span>
        <TimeBlock value={timeLeft.seconds} label="sec" />
      </div>
    </div>
  );
}

// Trending Badge
export function TrendingBadge({ rank = 1 }: { rank?: number }) {
  return (
    <motion.div
      className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <motion.i
        className="fas fa-fire"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <span>#{rank} Trending</span>
    </motion.div>
  );
}
