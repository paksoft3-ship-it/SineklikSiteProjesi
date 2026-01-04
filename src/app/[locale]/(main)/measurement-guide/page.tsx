import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Meetgids | Window Specialist',
  description: 'Leer hoe u correct meet voor horren en raamdecoratie met onze stap-voor-stap meetgids.',
};

const measurementTypes = [
  {
    id: 'dagmaat',
    name: 'Dagmaat',
    description: 'De binnenmaat van het raamkozijn, van binnenrand tot binnenrand.',
    steps: [
      'Meet de breedte op 3 punten: boven, midden en onder.',
      'Noteer de kleinste maat als de breedte.',
      'Meet de hoogte op 3 punten: links, midden en rechts.',
      'Noteer de kleinste maat als de hoogte.',
    ],
    products: ['Inzethorren', 'Plissé gordijnen'],
  },
  {
    id: 'glasmaat',
    name: 'Glasmaat',
    description: 'De maat van het glas, inclusief de rubber afdichting.',
    steps: [
      'Meet de zichtbare breedte van het glas.',
      'Meet de zichtbare hoogte van het glas.',
      'Tel 10mm bij voor de overlapping aan beide zijden.',
    ],
    products: ['Rolgordijnen', 'Jaloezieën'],
  },
  {
    id: 'doorgang',
    name: 'Doorgang',
    description: 'De vrije doorgang van een deur of opening.',
    steps: [
      'Meet de breedte van de opening op vloerniveau.',
      'Meet de hoogte van de opening aan beide zijden.',
      'Controleer of er voldoende ruimte is voor het frame.',
    ],
    products: ['Plissé hordeuren', 'Schuifhorren'],
  },
];

export default function MeetgidsPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-ruler-combined text-4xl text-primary"></i>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Meetgids
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Correct meten is essentieel voor een perfecte pasvorm.
              Volg onze stap-voor-stap instructies voor het beste resultaat.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="py-6 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-center">
            <i className="fas fa-shield-alt text-2xl text-green-600"></i>
            <p className="text-green-800 dark:text-green-300 font-medium">
              <span className="font-bold">Gratis meetverzekering:</span> Verkeerd gemeten? Wij vervangen het product gratis!
            </p>
          </div>
        </div>
      </section>

      {/* Measurement Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-12 text-center">
            Soorten metingen
          </h2>

          <div className="space-y-12">
            {measurementTypes.map((type, index) => (
              <div
                key={type.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{index + 1}</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                          {type.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {type.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {type.products.map((product, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                        Stappen:
                      </h4>
                      <ol className="space-y-3">
                        {type.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-12 text-center">
            Tips voor het meten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-ruler text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Gebruik een metalen meetlint
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Een metalen meetlint geeft nauwkeurigere resultaten dan een stoffen meetlint.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-redo text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Meet altijd 3 keer
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Meet op meerdere punten en gebruik de kleinste maat voor een goede pasvorm.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-pencil-alt text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Noteer in centimeters
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Noteer alle maten in centimeters voor consistentie en nauwkeurigheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
            Klaar om te bestellen?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Start de configurator en voer uw maten in voor een directe prijsindicatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/configurator"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
            >
              <i className="fas fa-sliders-h mr-2"></i> Start configurator
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-base font-bold rounded-lg text-primary bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              <i className="fas fa-question-circle mr-2"></i> Hulp nodig?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
