'use client';

import { Link } from '@/navigation';

export default function PlisseReadyMadePage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/plisse-screens" className="inline-flex items-center text-gray-300 hover:text-white mb-4"><i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Horren</Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Kant en Klaar Plissé Horren</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Direct beschikbaar in standaardmaten.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-8">Onze kant en klaar plissé horren zijn direct leverbaar en eenvoudig te monteren.</p>
          <Link href="/cart" className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition">
            <i className="fas fa-shopping-cart mr-2"></i> Bekijk assortiment
          </Link>
        </div>
      </section>
    </div>
  );
}
