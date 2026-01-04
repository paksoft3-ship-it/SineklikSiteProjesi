import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verduisterend Plissé Gordijn op Maat | Window Specialist',
  description: '100% lichtblokkering voor optimale slaap. Ideaal voor slaapkamers en thuisbioscopen. Op maat gemaakt met 5 jaar garantie.',
};

const features = [
  { icon: 'fa-moon', title: '100% Verduisterend', description: 'Volledige lichtblokkering.' },
  { icon: 'fa-bed', title: 'Ideaal voor slaapkamers', description: 'Optimale nachtrust.' },
  { icon: 'fa-temperature-low', title: 'Thermisch isolerend', description: 'Houdt warmte/koude buiten.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie inbegrepen.' },
];

const specifications = [
  { label: 'Lichtdoorlatendheid', value: '0% (volledig verduisterend)' },
  { label: 'Kleuren', value: '50+ kleuren' },
  { label: 'Max. afmeting', value: '200 x 260 cm' },
  { label: 'Bediening', value: 'Koord, Handgreep of Elektrisch' },
  { label: 'Uitvoering', value: 'Standaard of Top-down/Bottom-up' },
  { label: 'Garantie', value: '5 jaar' },
];

const useCases = [
  { icon: 'fa-bed', title: 'Slaapkamer', description: 'Perfect voor een goede nachtrust, ook overdag.' },
  { icon: 'fa-baby', title: 'Kinderkamer', description: 'Ideaal voor het middagdutje van uw kinderen.' },
  { icon: 'fa-film', title: 'Thuisbioscoop', description: 'Creëer de perfecte bioscoopervaring.' },
  { icon: 'fa-briefcase', title: 'Thuiskantoor', description: 'Voorkom schittering op uw beeldscherm.' },
];

export default function VerduisterendPage() {
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
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded mb-4 ml-2">
                POPULAIR
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Verduisterend Plissé</h1>
              <p className="text-lg text-gray-300 mb-6">
                Het verduisterende plissé gordijn blokkeert 100% van het licht. Perfect voor slaapkamers, 
                thuisbioscopen of iedereen die houdt van complete duisternis.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€99,-</span>
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
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp" alt="Verduisterend Plissé" className="rounded-2xl shadow-xl" />
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

      {/* Use Cases */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">Ideaal voor</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${useCase.icon} text-xl text-white`}></i>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-500 text-sm">{useCase.description}</p>
              </div>
            ))}
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
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-moon text-3xl text-primary"></i>
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Complete duisternis, totale rust</h2>
          <p className="text-gray-400 mb-8">Configureer uw verduisterende plissé gordijn op maat.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/configurator" className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition">
              <i className="fas fa-sliders-h mr-2"></i> Start configurator
            </Link>
            <Link href="/stalen" className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-lg hover:bg-gray-800 transition">
              <i className="fas fa-swatchbook mr-2"></i> Gratis stalen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
