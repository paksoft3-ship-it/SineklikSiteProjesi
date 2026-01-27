'use client';

import { Link } from '@/navigation';

export default function RollerBlindsCustomPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/roller-blinds" className="inline-flex items-center text-gray-300 hover:text-white mb-4"><i className="fas fa-arrow-left mr-2"></i> Terug naar Rolgordijnen</Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Rolgordijnen op Maat</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Configureer uw perfecte rolgordijn met onze maatwerk service.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-ruler', title: 'Exacte Maten', desc: 'Tot op de millimeter nauwkeurig gemaakt voor uw ramen.' },
              { icon: 'fa-palette', title: 'Kleurkeuze', desc: 'Kies uit honderden kleuren en stoffen.' },
              { icon: 'fa-cog', title: 'Bediening', desc: 'Ketting, veer of elektrische bediening.' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Start uw configuratie</h2>
          <p className="text-blue-100 mb-8">Ontwerp uw perfecte rolgordijn in enkele stappen.</p>
          <Link href="/configurator" className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
