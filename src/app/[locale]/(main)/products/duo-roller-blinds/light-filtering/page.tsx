'use client';

import { Link } from '@/navigation';

const products = [
  { id: 1, name: 'Duo Lichtdoorlatend Wit', price: '€69,-', image: '/images/nav/nav-gordijn-kleur.jpg' },
  { id: 2, name: 'Duo Lichtdoorlatend Linnen', price: '€75,-', image: '/images/nav/nav-gordijn-kleur.jpg' },
  { id: 3, name: 'Duo Lichtdoorlatend Beige', price: '€72,-', image: '/images/nav/nav-gordijn-kleur.jpg' },
  { id: 4, name: 'Duo Lichtdoorlatend Taupe', price: '€75,-', image: '/images/nav/nav-gordijn-kleur.jpg' },
];

export default function DuoRollerBlindsLightFilteringPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/duo-roller-blinds" className="inline-flex items-center text-gray-300 hover:text-white mb-4"><i className="fas fa-arrow-left mr-2"></i> Terug naar Duo Rolgordijnen</Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Lichtdoorlatende Duo Rolgordijnen</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Zebra-effect met zachte lichtfiltering en stijlvol design.</p>
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
                  <Link href="/configurator" className="mt-3 inline-flex items-center text-sm text-primary hover:underline">
                    Configureren <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Op maat gemaakt</h2>
          <p className="text-blue-100 mb-8">Configureer uw lichtdoorlatende duo rolgordijn precies op maat.</p>
          <Link href="/configurator" className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
