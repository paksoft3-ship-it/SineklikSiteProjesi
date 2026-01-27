'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'voile-classic',
    name: 'Klassieke Vitrage',
    description: 'Tijdloze witte vitrage voor een frisse uitstraling.',
    price: 39,
    image: '/images/nav/curtain-sheer.png',
    features: ['Transparant', 'Wit', 'Klassiek'],
  },
  {
    id: 'voile-linen',
    name: 'Linnen Vitrage',
    description: 'Natuurlijke linnen vitrage met subtiele textuur.',
    price: 49,
    image: '/images/nav/curtain-sheer.png',
    features: ['Semi-transparant', 'Linnen look', 'Natuurlijk'],
  },
  {
    id: 'voile-embroidered',
    name: 'Geborduurd Vitrage',
    description: 'Elegant vitrage met subtiel borduurwerk.',
    price: 59,
    image: '/images/nav/curtain-sheer.png',
    features: ['Transparant', 'Geborduurd', 'Decoratief'],
  },
];

export default function VoilesPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/curtains" className="inline-flex items-center text-gray-300 hover:text-white mb-4">
              <i className="fas fa-arrow-left mr-2"></i> Terug naar Gordijnen
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Vitrages
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Lichte, transparante stoffen voor een subtiele en elegante look.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="h-48 overflow-hidden">
                  <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feat, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">{feat}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-500">Vanaf</span>
                      <span className="text-xl font-bold text-primary ml-1">€{product.price},-</span>
                    </div>
                    <Link href="/configurator" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition">
                      Configureren
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">Gratis kleurstalen</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Bestel gratis stalen en bekijk de kleuren in uw eigen interieur.</p>
          <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition">
            <i className="fas fa-swatchbook mr-2"></i> Gratis stalen aanvragen
          </Link>
        </div>
      </section>
    </div>
  );
}
