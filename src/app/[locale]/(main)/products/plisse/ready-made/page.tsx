'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';

const products = [
  { id: 'plisse-ready-60', name: 'Plissé 60cm', description: 'Standaardmaat 60cm breed.', price: 29, features: ['60cm breed', 'Direct leverbaar'] },
  { id: 'plisse-ready-80', name: 'Plissé 80cm', description: 'Standaardmaat 80cm breed.', price: 35, features: ['80cm breed', 'Direct leverbaar'] },
  { id: 'plisse-ready-100', name: 'Plissé 100cm', description: 'Standaardmaat 100cm breed.', price: 39, features: ['100cm breed', 'Direct leverbaar'] },
  { id: 'plisse-ready-120', name: 'Plissé 120cm', description: 'Standaardmaat 120cm breed.', price: 45, features: ['120cm breed', 'Direct leverbaar'] },
];

export default function ReadyMadePlissePage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/plisse-curtains" className="inline-flex items-center text-gray-300 hover:text-white mb-4">
              <i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Gordijnen
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Kant en Klaar Plissé</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Direct beschikbaar in standaardmaten.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all" whileHover={{ y: -8 }}>
                <div className="h-40 overflow-hidden bg-gray-100"><img alt={product.name} className="w-full h-full object-cover" src="/images/nav/roman_light_1769528427366.png" /></div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{product.features.map((f, i) => <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">{f}</span>)}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">€{product.price},-</span>
                    <Link href="/cart" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition">Bestellen</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
