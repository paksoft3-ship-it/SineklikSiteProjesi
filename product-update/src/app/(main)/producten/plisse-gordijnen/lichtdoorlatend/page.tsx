import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lichtdoorlatend Plissé Gordijn (70%) op Maat | Window Specialist',
  description: 'Zachte lichtfiltering met 70% doorlatendheid. Behoudt privacy terwijl natuurlijk licht binnenkomt. Op maat gemaakt met 5 jaar garantie.',
};

const features = [
  { icon: 'fa-sun', title: '70% Lichtdoorlatend', description: 'Zachte, gefilterde lichtinval.' },
  { icon: 'fa-user-shield', title: 'Privacy overdag', description: 'Kijk naar buiten, onzichtbaar van buiten.' },
  { icon: 'fa-shield-virus', title: 'UV-bescherming', description: 'Beschermt meubels tegen verkleuring.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie inbegrepen.' },
];

const specifications = [
  { label: 'Lichtdoorlatendheid', value: '70%' },
  { label: 'Kleuren', value: '80+ kleuren' },
  { label: 'Max. afmeting', value: '200 x 260 cm' },
  { label: 'Bediening', value: 'Koord, Handgreep of Elektrisch' },
  { label: 'UV-bescherming', value: 'Ja' },
  { label: 'Garantie', value: '5 jaar' },
];

export default function LichtdoorlatendPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/producten/plisse-gordijnen" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Gordijnen
              </Link>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Lichtdoorlatend Plissé (70%)</h1>
              <p className="text-lg text-gray-300 mb-6">
                Het lichtdoorlatende plissé gordijn filtert 70% van het zonlicht voor een aangename sfeer. 
                Behoudt privacy terwijl natuurlijk licht binnenkomt.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€79,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition shadow-lg">
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link href="/stalen" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
                  <i className="fas fa-swatchbook mr-2"></i> Gratis stalen
                </Link>
              </div>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX" alt="Lichtdoorlatend Plissé" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Light visualization */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-800 dark:to-bg-dark-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">Lichtdoorlatendheid visualisatie</h2>
          <div className="relative h-32 bg-gradient-to-r from-gray-900 via-yellow-400 to-yellow-100 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <div className="text-white">
                <p className="font-bold">0%</p>
                <p className="text-xs">Verduisterend</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1 h-full bg-primary absolute"></div>
                <div className="bg-primary text-white px-4 py-2 rounded-full font-bold relative z-10">70%</div>
              </div>
              <div className="text-gray-800">
                <p className="font-bold">100%</p>
                <p className="text-xs">Transparant</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-500">Uw plissé gordijn laat 70% van het licht door voor een zachte, aangename sfeer.</p>
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

      {/* Specifications */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
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
          <h2 className="font-display text-3xl font-bold text-white mb-4">Natuurlijk licht, optimale privacy</h2>
          <p className="text-blue-100 mb-8">Configureer uw lichtdoorlatende plissé gordijn op maat.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/configurator" className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
              <i className="fas fa-sliders-h mr-2"></i> Start configurator
            </Link>
            <Link href="/stalen" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
              <i className="fas fa-swatchbook mr-2"></i> Gratis stalen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
