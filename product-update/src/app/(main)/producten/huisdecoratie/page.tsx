import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Huisdecoratie - Binnenkort Beschikbaar | Window Specialist',
  description: 'Onze huisdecoratie collectie wordt binnenkort uitgebreid. Neem contact op voor meer informatie.',
};

export default function HuisdecoratieCollectionPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="fas fa-home text-4xl text-primary"></i>
          </div>
          <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-300 text-sm font-semibold rounded-full mb-4">
            BINNENKORT BESCHIKBAAR
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Huisdecoratie</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            We werken hard aan het uitbreiden van onze huisdecoratie collectie. 
            Binnenkort vindt u hier aanvullende raambekleding en decoratieproducten.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">
              Interesse in onze nieuwe collectie?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Laat uw e-mailadres achter en wij informeren u zodra de collectie beschikbaar is.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Uw e-mailadres"
                  className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition"
                >
                  Aanmelden
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We sturen maximaal 1 mail. U kunt zich altijd afmelden.
              </p>
            </form>
          </div>

          {/* Alternative products */}
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-secondary dark:text-white mb-6 text-center">
              Bekijk onze huidige collectie
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/producten/plisse-horren" className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition">
                    <i className="fas fa-bug text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Plissé Horren</h4>
                    <p className="text-sm text-gray-500">Bekijk onze insectenwering →</p>
                  </div>
                </div>
              </Link>
              <Link href="/producten/plisse-gordijnen" className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition">
                    <i className="fas fa-sun text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Plissé Gordijnen</h4>
                    <p className="text-sm text-gray-500">Bekijk onze zonwering →</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">
            Vragen over onze producten?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Onze experts helpen u graag verder.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition">
            <i className="fas fa-phone mr-2"></i> Neem contact op
          </Link>
        </div>
      </section>
    </div>
  );
}
