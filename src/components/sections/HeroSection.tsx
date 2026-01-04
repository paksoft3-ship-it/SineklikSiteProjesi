'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

import { PlisseAnimation } from '@/components/animations';

const HeroSection = () => {
  const t = useTranslations('HomePage.hero');

  const heroImages = [
    '/images/hero/slide-1.png',
    '/images/hero/slide-2.png',
    '/images/hero/slide-3.png',
  ];

  return (
    <section className="relative bg-bg-light-1 dark:bg-bg-dark-1 overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <PlisseAnimation
          images={heroImages}
          autoPlay={true}
          interval={8000}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-bg-dark-1 dark:via-bg-dark-1/80 dark:to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-1/2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
            {t('badge')}
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary dark:text-white leading-tight mb-6">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={"#kamers" as any}
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
            >
              <i className="fas fa-home mr-2"></i> {t('cta_room')}
            </Link>
            <Link
              href="/configurator"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-base font-bold rounded-lg text-primary bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              <i className="fas fa-sliders-h mr-2"></i> {t('cta_config')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
