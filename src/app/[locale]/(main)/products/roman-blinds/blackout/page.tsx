'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';

const products = [
  { id: 'roman-blackout-white', name: 'Vouwgordijn Verduisterend Wit', description: 'Klassiek wit met 100% verduistering.', price: 99, features: ['100% verduisterend', 'Wit', 'Thermisch'] },
  { id: 'roman-blackout-grey', name: 'Vouwgordijn Verduisterend Grijs', description: 'Modern grijs met volledige lichtblokkering.', price: 99, features: ['100% verduisterend', 'Grijs', 'Modern'] },
  { id: 'roman-blackout-cream', name: 'Vouwgordijn Verduisterend Crème', description: 'Warme crème kleur voor een huiselijke sfeer.', price: 109, features: ['100% verduisterend', 'Crème', 'Warm'] },
];

export default function RomanBlackoutPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/roman-blinds" className="inline-flex items-center text-gray-300 hover:text-white mb-4"><i className="fas fa-arrow-left mr-2"></i> Terug naar Vouwgordijnen</Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Verduisterende Vouwgordijnen</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">100% lichtblokkering voor optimale slaap.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all" whileHover={{ y: -8 }}>
                <div className="h-48 overflow-hidden"><img alt={product.name} className="w-full h-full object-cover" src="/images/nav/roman_blackout_1769528343726.png" /></div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{product.features.map((f, i) => <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">{f}</span>)}</div>
                  <div className="flex justify-between items-center">
                    <div><span className="text-xs text-gray-500">Vanaf</span><span className="text-xl font-bold text-primary ml-1">€{product.price},-</span></div>
                    <Link href="/configurator" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition">Configureren</Link>
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
