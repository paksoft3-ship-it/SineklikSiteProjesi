import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Jaloezieën op Maat | Window Specialist',
  description: 'Hoogwaardige jaloezieën op maat in aluminium en hout. Perfecte lichtregulatie voor elk interieur.',
};

const features = [
  { icon: 'fa-sliders-h', title: 'Perfecte lichtregulatie', description: 'Kantelbare lamellen voor optimale lichtinval.' },
  { icon: 'fa-palette', title: 'Groot kleurenaanbod', description: 'Meer dan 100 kleuren beschikbaar.' },
  { icon: 'fa-ruler', title: 'Diverse lamelbreedte', description: '25mm, 35mm of 50mm lamellen.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie op alle producten.' },
];

const specifications = [
  { label: 'Materiaal', value: 'Aluminium of Hout' },
  { label: 'Lamelbreedte', value: '25mm, 35mm, 50mm' },
  { label: 'Kleuren', value: '100+ kleuren' },
  { label: 'Max. afmeting', value: '300 x 300 cm' },
  { label: 'Bediening', value: 'Koord, Stang of Elektrisch' },
  { label: 'Garantie', value: '5 jaar' },
];

export default function JaloeziePage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/products/window-decoration" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Raamdecoratie
              </Link>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Jaloezieën</h1>
              <p className="text-lg text-gray-300 mb-6">
                Tijdloos en functioneel. Perfecte lichtregulatie met kantelbare lamellen in aluminium of hout.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€59,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link href="/quote" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-base font-bold rounded-lg text-white hover:bg-white/10 transition">
                  <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
                </Link>
              </div>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX" alt="Jaloezieën" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">Specificaties</h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            {specifications.map((spec, index) => (
              <div key={index} className={`flex justify-between p-4 ${index !== specifications.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}>
                <span className="text-gray-600 dark:text-gray-400">{spec.label}</span>
                <span className="font-medium text-gray-900 dark:text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">Klaar om te bestellen?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Configureer uw jaloezieën op maat.</p>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
