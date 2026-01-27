'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'duo-blackout-white',
    name: 'Duo Verduisterend Wit',
    description: 'Wit duo rolgordijn met 100% verduistering.',
    price: 89,
    image: '/images/nav/curtain-blackout.png',
    features: ['100% verduisterend', 'Wit', 'Premium kwaliteit'],
  },
  {
    id: 'duo-blackout-grey',
    name: 'Duo Verduisterend Grijs',
    description: 'Grijs duo rolgordijn met 100% verduistering.',
    price: 89,
    image: '/images/nav/curtain-blackout.png',
    features: ['100% verduisterend', 'Grijs', 'Modern'],
  },
  {
    id: 'duo-blackout-black',
    name: 'Duo Verduisterend Zwart',
    description: 'Zwart duo rolgordijn voor maximale verduistering.',
    price: 99,
    image: '/images/nav/curtain-blackout.png',
    features: ['100% verduisterend', 'Zwart', 'Stijlvol'],
  },
];

export default function DuoBlackoutPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/duo-roller-blinds" className="inline-flex items-center text-gray-300 hover:text-white mb-4">
              <i className="fas fa-arrow-left mr-2"></i> Terug naar Duo Rolgordijnen
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Duo Verduisterend
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              100% lichtblokkering in gesloten stand. Perfect voor slaapkamers.
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
    </div>
  );
}
