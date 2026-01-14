'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const PopularCombinationsSection = () => {
  const t = useTranslations('HomePage.combinations');
  const tHeader = useTranslations('Header');

  const packages = [
    {
      id: 'slaapkamer-pack',
      name: t('packages.bedroom.name'),
      description: t('packages.bedroom.desc'),
      price: 149,
      badge: tHeader('badges.bestseller'), // Reusing bestseller from header
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600',
      link: '/products/packages/bedroom',
    },
    {
      id: 'woonkamer-pack',
      name: t('packages.living.name'),
      description: t('packages.living.desc'),
      price: 289,
      badge: null,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
      link: '/products/packages/living',
    },
    {
      id: 'zolder-pack',
      name: t('packages.attic.name'),
      description: t('packages.attic.desc'),
      price: 199,
      badge: null,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      link: '/products/packages/attic',
    },
  ];

  return (
    <section className="py-20 bg-bg-light-1 dark:bg-bg-dark-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-2">
              {t('title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>
          <Link
            href="/products/packages"
            className="hidden md:inline-flex items-center font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            {t('view_deals')} <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 bg-gray-200">
                <img
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                  src={pkg.image}
                />
                {pkg.badge && (
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded">
                    {pkg.badge}
                  </div>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center -mt-6 relative z-10 px-4">
                <Link
                  href="/products/packages"
                  className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30 focus:ring-primary w-full sm:w-auto shadow-md"
                >
                  {t('cta.view_packages')}
                </Link>
                {/* 
                 // TODO: Removed second CTA to reduce clutter or fix layout if needed. 
                 // Assuming user wants clickable cards mainly, but buttons inside cards is tricky.
                 // The design shows buttons overlapping the image bottom.
                 // Let's keep buttons working.
                */}
              </div>
              <div className="p-6 pt-8">
                <Link href={pkg.link as any} className="block group">
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">{t('from')}</span>
                      <span className="font-bold text-xl text-primary">€ {pkg.price},-</span>
                    </div>
                    <span className="text-primary bg-blue-50 dark:bg-blue-900/30 group-hover:bg-primary group-hover:text-white p-2 rounded-lg transition">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products/packages"
            className="inline-flex items-center text-white font-semibold hover:text-white/80 transition"
          >
            {t('view_all_packages')} <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCombinationsSection;
