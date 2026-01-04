'use client';

import Link from 'next/link';

const products = [
  {
    id: 'houten-jaloezieen',
    name: 'Houten Jaloezieën',
    description: 'Natuurlijke en warme uitstraling',
    price: 89,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    textureColor: 'linear-gradient(135deg, #D2691E 0%, #8B4513 50%, #A0522D 100%)',
    link: '/producten/raamdecoratie/jaloezieen',
  },
  {
    id: 'zebra-rolgordijn',
    name: 'Zebra Rolgordijn',
    description: 'Praktische lichtcontrole',
    price: 79,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=300&fit=crop',
    textureColor: 'linear-gradient(0deg, #8B7355 0%, #A68B5B 25%, #8B7355 50%, #A68B5B 75%, #8B7355 100%)',
    link: '/producten/raamdecoratie/rolgordijnen',
  },
  {
    id: 'verticale-lamellen',
    name: 'Verticale Lamellen',
    description: 'Ideaal voor grote ramen',
    price: 99,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop',
    textureColor: 'linear-gradient(90deg, #B8B8B8 0%, #D3D3D3 10%, #B8B8B8 20%, #D3D3D3 30%, #B8B8B8 40%, #D3D3D3 50%, #B8B8B8 60%, #D3D3D3 70%, #B8B8B8 80%, #D3D3D3 90%, #B8B8B8 100%)',
    link: '/producten/raamdecoratie/plisse-gordijnen',
  },
  {
    id: 'premium-rolgordijn',
    name: 'Premium Rolgordijn',
    description: 'Minimalistisch en stijlvol',
    price: 69,
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=400&h=300&fit=crop',
    textureColor: 'linear-gradient(180deg, #F5F5DC 0%, #E8E4D9 100%)',
    link: '/producten/raamdecoratie/rolgordijnen',
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
              Populaire Opties
            </h2>
            <p className="text-blue-200">
              Startprijzen voor verschillende behoeften.
            </p>
          </div>
          <Link
            href="/producten/raamdecoratie"
            className="mt-4 md:mt-0 inline-flex items-center text-primary font-semibold hover:text-blue-400 transition"
          >
            Alle modellen bekijken
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800/50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group"
            >
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
              <Link
                href={product.link}
                className="block w-full text-center py-3 bg-gray-700/50 hover:bg-primary text-white font-medium rounded-xl transition-colors duration-300"
              >
                Bekijken
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
