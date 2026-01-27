'use client';

import { Link } from '@/navigation';

const products = [
  { id: 1, name: 'Standaard Wit 60x180', price: '€29,-', image: '/images/nav/nav-gordijn-kleur.jpg' },
  { id: 2, name: 'Standaard Grijs 80x180', price: '€35,-', image: '/images/nav/nav-gordijn-kleur.jpg' },
  { id: 3, name: 'Standaard Beige 100x180', price: '€39,-', image: '/images/nav/nav-gordijn-kleur.jpg' },
  { id: 4, name: 'Standaard Zwart 120x180', price: '€45,-', image: '/images/nav/nav-gordijn-kleur.jpg' },
];

export default function RollerBlindsReadyMadePage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/roller-blinds" className="inline-flex items-center text-gray-300 hover:text-white mb-4"><i className="fas fa-arrow-left mr-2"></i> Terug naar Rolgordijnen</Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Kant-en-klare Rolgordijnen</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Direct leverbaar in standaardmaten - binnen 3-5 werkdagen in huis.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-primary font-bold">{product.price}</p>
                  <button className="mt-3 inline-flex items-center text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    <i className="fas fa-shopping-cart mr-2"></i> Bestellen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">Liever op maat?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Configureer uw rolgordijn op maat voor de perfecte pasvorm.</p>
          <Link href="/products/roller-blinds/custom" className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition">
            <i className="fas fa-sliders-h mr-2"></i> Op maat configureren
          </Link>
        </div>
      </section>
    </div>
  );
}
