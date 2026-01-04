'use client';

import Link from 'next/link';

const products = [
  {
    id: 'plisse-hor-deur',
    name: 'Plissé Hordeur',
    description: 'Ruimtebesparend voor balkons',
    price: 199,
    textureColor: 'linear-gradient(135deg, #E8E4E0 0%, #D3CFC7 50%, #C4BFB6 100%)',
    link: '/producten/plisse-horren/deur',
    badge: 'Populair',
  },
  {
    id: 'plisse-gordijn-honeycomb',
    name: 'Honeycomb Gordijn',
    description: 'Maximale isolatie',
    price: 129,
    textureColor: 'linear-gradient(180deg, #8B7355 0%, #A68B5B 25%, #8B7355 50%, #A68B5B 75%, #8B7355 100%)',
    link: '/producten/plisse-gordijnen/honeycomb',
    badge: 'Bestseller',
  },
  {
    id: 'plisse-gordijn-verduisterend',
    name: 'Verduisterend Plissé',
    description: '100% lichtblokkering',
    price: 99,
    textureColor: 'linear-gradient(180deg, #2C2C2C 0%, #4A4A4A 50%, #2C2C2C 100%)',
    link: '/producten/plisse-gordijnen/verduisterend',
    badge: null,
  },
  {
    id: 'plisse-hor-raam',
    name: 'Plissé Raamhor',
    description: 'Compact en elegant',
    price: 89,
    textureColor: 'linear-gradient(135deg, #F5F5DC 0%, #E8E4D9 100%)',
    link: '/producten/plisse-horren/raam',
    badge: null,
  },
];

const PopularProductsSection = () => {
  return (
    <section className="py-20 bg-secondary dark:bg-bg-dark-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
              Populaire Producten
            </h2>
            <p className="text-blue-200">
              Onze meest gekozen plissé horren en gordijnen.
            </p>
          </div>
          <Link
            href="/producten/plisse-horren"
            className="mt-4 md:mt-0 inline-flex items-center text-primary font-semibold hover:text-blue-400 transition"
          >
            Alle producten bekijken
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="bg-gray-800/50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group block"
            >
              {/* Badge */}
              {product.badge && (
                <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded mb-4">
                  {product.badge}
                </span>
              )}

              {/* Texture Preview */}
              <div className="mb-6">
                <div
                  className="w-32 h-24 mx-auto rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ background: product.textureColor }}
                />
              </div>

              {/* Product Info */}
              <h3 className="font-display text-lg font-bold text-white mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-sm text-gray-500">vanaf </span>
                <span className="text-2xl font-bold text-primary">€{product.price}</span>
              </div>

              {/* CTA Button */}
              <span className="block w-full text-center py-3 bg-gray-700/50 group-hover:bg-primary text-white font-medium rounded-xl transition-colors duration-300">
                Bekijken
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
