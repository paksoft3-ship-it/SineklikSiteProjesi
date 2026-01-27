import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Bezorging & Montage | Window Specialist',
  description: 'Informatie over bezorging en professionele montage van uw raamdecoratie.',
};

export default function DeliveryPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-truck mr-2"></i>Service
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Bezorging & Montage</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Wij zorgen voor snelle bezorging en professionele montage van uw raamdecoratie.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-truck text-3xl text-primary"></i>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">Gratis Bezorging</h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i><span>Gratis bezorging in heel Nederland</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i><span>Levertijd 2-3 weken voor maatwerk</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i><span>Kant en klaar producten binnen 3-5 werkdagen</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i><span>Track & trace informatie per e-mail</span></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-tools text-3xl text-primary"></i>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">Professionele Montage</h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i><span>Ervaren monteurs in heel Nederland</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i><span>Montage op afspraak</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i><span>Gratis inmeten bij montage</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i><span>Garantie op vakkundige installatie</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8 text-center">Montagekosten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Standaard', price: '€49,-', desc: '1-3 producten', features: ['Montage op afspraak', 'Inclusief afwerking'] },
              { title: 'Uitgebreid', price: '€99,-', desc: '4-8 producten', features: ['Montage op afspraak', 'Inclusief afwerking', 'Gratis inmeten'] },
              { title: 'Compleet', price: 'Op aanvraag', desc: '9+ producten', features: ['Montage op afspraak', 'Inclusief afwerking', 'Gratis inmeten', 'Projectbegeleiding'] },
            ].map((plan, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
                <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center justify-center gap-2"><i className="fas fa-check text-green-500"></i>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">Vragen over bezorging of montage?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Neem gerust contact met ons op, wij helpen u graag verder.</p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition">
            <i className="fas fa-envelope mr-2"></i> Contact opnemen
          </Link>
        </div>
      </section>
    </div>
  );
}
