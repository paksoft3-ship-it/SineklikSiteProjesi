'use client';

import { Link } from '@/navigation';

export default function CustomScreensPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/products/screens" className="inline-flex items-center text-gray-300 hover:text-white mb-4"><i className="fas fa-arrow-left mr-2"></i> Terug naar Horren</Link>
            <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-300 text-sm font-semibold rounded-full mb-4"><i className="fas fa-star mr-2"></i>Bestseller</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Horren op Maat</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Volledig op maat gemaakte horren voor een perfecte pasvorm.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-6">Perfecte pasvorm gegarandeerd</h2>
              <div className="space-y-4">
                {[
                  { icon: 'fa-ruler-combined', title: 'Exact op maat', desc: 'Tot op de millimeter nauwkeurig' },
                  { icon: 'fa-palette', title: 'Framekleuren', desc: 'Wit, antraciet, bruin en meer' },
                  { icon: 'fa-shield-alt', title: 'Diverse gaastypes', desc: 'Standaard, pet-screen, poll-tex' },
                  { icon: 'fa-truck', title: 'Gratis levering', desc: 'Binnen 2-3 weken geleverd' },
                  { icon: 'fa-shield-alt', title: '5 jaar garantie', desc: 'Uitgebreide garantie' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"><i className={`fas ${item.icon} text-primary`}></i></div>
                    <div><h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/configurator" className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition">
                  <i className="fas fa-sliders-h mr-2"></i> Start configurator
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="/images/nav/nav-hor-raam.jpg" alt="Horren op maat" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Begin vandaag nog</h2>
          <p className="text-blue-100 mb-8">Gebruik onze handige configurator om uw perfecte hor samen te stellen.</p>
          <Link href="/configurator" className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Configureren
          </Link>
        </div>
      </section>
    </div>
  );
}
