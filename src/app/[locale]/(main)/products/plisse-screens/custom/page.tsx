'use client';

import { Link } from '@/navigation';

export default function PlisseCustomPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/plisse-screens" className="inline-flex items-center text-gray-300 hover:text-white mb-4"><i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Horren</Link>
            <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-300 text-sm font-semibold rounded-full mb-4"><i className="fas fa-star mr-2"></i>Bestseller</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Plissé Horren op Maat</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Volledig op maat gemaakte plissé horren voor een perfecte pasvorm.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-8">Onze plissé horren worden exact op maat gemaakt voor uw specifieke situatie.</p>
          <Link href="/configurator" className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition">
            <i className="fas fa-sliders-h mr-2"></i> Configureren
          </Link>
        </div>
      </section>
    </div>
  );
}
