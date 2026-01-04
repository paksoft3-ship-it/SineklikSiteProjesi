'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const PopularProductsSection = () => {
  const t = useTranslations('HomePage.popular');
  const tHeader = useTranslations('Header'); // To reuse product names and badges

  const products = [
    {
      id: 'plisse-hor-deur',
      name: tHeader('items.horren.deur'),
      description: t('products.door_desc'),
      price: 199,
      image: '/images/products/plisse-hordeur.png',
      link: '/producten/plisse-horren/deur',
      badge: tHeader('badges.populair'),
    },
    {
      id: 'plisse-gordijn-honeycomb',
      name: tHeader('items.gordijnen.honeycomb'),
      description: t('products.honey_desc'),
      price: 129,
      image: '/images/collections/gordijnen.png',
      link: '/producten/plisse-gordijnen/honeycomb',
      badge: tHeader('badges.bestseller'),
    },
    {
      id: 'plisse-gordijn-verduisterend',
      name: tHeader('items.gordijnen.verduisterend'),
      description: t('products.blackout_desc'),
      price: 99,
      image: '/images/products/gordijn-verduisterend.png',
      link: '/producten/plisse-gordijnen/verduisterend',
      badge: null,
    },
    {
      id: 'plisse-hor-raam',
      name: tHeader('items.horren.raam'),
      description: t('products.window_desc'),
      price: 89,
      image: '/images/products/raam-hor.png',
      link: '/producten/plisse-horren/raam',
      badge: null,
    },
  ];

  return (
    <section className="py-20 bg-bg-light-1 dark:bg-bg-dark-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-2">
              {t('title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>
          <Link
            href="/products/plisse-screens"
            className="mt-4 md:mt-0 inline-flex items-center text-primary font-semibold hover:text-primary-dark transition group-hover:translate-x-1 duration-300"
          >
            {t('view_all')}
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link as any}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group block"
            >
              {/* Badge */}
              {product.badge && (
                <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded mb-4">
                  {product.badge}
                </span>
              )}

              {/* Image Preview */}
              <div className="mb-6 aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-sm text-gray-500">{t('from')} </span>
                <span className="text-2xl font-bold text-primary">€{product.price}</span>
              </div>

              {/* CTA Button */}
              <span className="block w-full text-center py-3 bg-gray-50 dark:bg-gray-700/50 group-hover:bg-primary text-primary group-hover:text-white font-medium rounded-xl transition-colors duration-300">
                {t('view_btn')}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
