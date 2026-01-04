import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Drempelloze Plissé Hor op Maat | Window Specialist',
  description: 'Plissé hordeur zonder drempel voor vloeiende overgang. Geschikt voor rolstoelen en rollators. Op maat gemaakt met 5 jaar garantie.',
};

const features = [
  { icon: 'fa-road', title: 'Geen drempel', description: 'Vloeiende overgang binnen-buiten.' },
  { icon: 'fa-wheelchair', title: 'Toegankelijk', description: 'Geschikt voor rolstoelen en rollators.' },
  { icon: 'fa-magnet', title: 'Magneetgeleiding', description: 'Stabiel zonder onderprofiel.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie inbegrepen.' },
];

const specifications = [
  { label: 'Framemateriaal', value: 'Aluminium' },
  { label: 'Ondergeleiding', value: 'Magneet (geen drempel)' },
  { label: 'Gaastype', value: 'Polyester plissé' },
  { label: 'Framekleuren', value: 'Wit, Antraciet, Zwart' },
  { label: 'Max. afmeting', value: '240 x 260 cm' },
  { label: 'Garantie', value: '5 jaar' },
];

export default function DrempelloosPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/producten/plisse-horren" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Horren
              </Link>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded mb-4 ml-2">
                TOEGANKELIJK
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Drempelloze Plissé Hor</h1>
              <p className="text-lg text-gray-300 mb-6">
                De drempelloze plissé hor heeft geen onderprofiel op de vloer. Ideaal voor een vloeiende overgang 
                tussen binnen en buiten, en perfect voor mensen met mobiliteitsbeperkingen.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€229,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition shadow-lg">
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link href="/offerte" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
                  <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
                </Link>
              </div>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA" alt="Drempelloze Plissé Hor" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${feature.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">Voordelen drempelloos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Valpreventie</h3>
                  <p className="text-gray-500 text-sm">Geen struikelgevaar door afwezigheid van drempel.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Makkelijk schoonmaken</h3>
                  <p className="text-gray-500 text-sm">Geen profiel op de vloer waar vuil blijft liggen.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Strak design</h3>
                  <p className="text-gray-500 text-sm">Elegant en onopvallend zonder onderprofiel.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-green-600"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">WMO geschikt</h3>
                  <p className="text-gray-500 text-sm">Mogelijk in aanmerking voor vergoeding via gemeente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">Specificaties</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            {specifications.map((spec, index) => (
              <div key={index} className={`flex justify-between p-4 ${index !== specifications.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}>
                <span className="text-gray-600 dark:text-gray-400">{spec.label}</span>
                <span className="font-medium text-gray-900 dark:text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Toegankelijk wonen</h2>
          <p className="text-blue-100 mb-8">Configureer uw drempelloze plissé hor op maat.</p>
          <Link href="/configurator" className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
