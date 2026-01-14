'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import VirtualShowroom from '@/components/showroom/VirtualShowroom';

export default function ShowroomPage() {
  const t = useTranslations('ShowroomPage');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-bg-dark-1 dark:to-bg-dark-2">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-vr-cardboard mr-2"></i>
              {t('badge')}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showroom */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <VirtualShowroom />
        </div>
      </section>
    </div>
  );
}
