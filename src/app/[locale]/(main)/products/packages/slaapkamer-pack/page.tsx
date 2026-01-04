import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Slaapkamer Comfort Pack | Window Specialist',
  description: 'Verduisterend rolgordijn + inzet hor op maat. De perfecte combinatie voor een goede nachtrust.',
};

const features = [
  {
    icon: 'fa-moon',
    title: '100% Verduistering',
    description: 'Slaap in complete duisternis dankzij het verduisterende rolgordijn.',
  },
  {
    icon: 'fa-bug',
    title: 'Insectenwering',
    description: 'Houd muggen en andere insecten buiten met de inzet hor.',
  },
  {
    icon: 'fa-wind',
    title: 'Frisse lucht',
    description: 'Geniet van frisse lucht zonder ongewenste gasten.',
  },
  {
    icon: 'fa-tools',
    title: 'Eenvoudige montage',
    description: 'Beide producten zijn eenvoudig zelf te monteren.',
  },
];

const included = [
  'Verduisterend rolgordijn op maat',
  'Inzet hor op maat',
  'Montagemateriaal',
  'Duidelijke montage-instructies',
  'Video handleiding',
  '5 jaar garantie',
];

export default function SlaapkamerPackPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-4">
                BESTSELLER
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Slaapkamer Comfort Pack
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                De perfecte combinatie voor een goede nachtrust. Verduisterend rolgordijn
                en inzet hor op maat, samen voor een voordelige prijs.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-5xl font-bold text-primary">€149,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/configurator"
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
                >
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-base font-bold rounded-lg text-white hover:bg-white/10 transition"
                >
                  <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp"
                alt="Slaapkamer Comfort Pack"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-12 text-center">
            Waarom dit pakket?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${feature.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">
                Wat zit er in dit pakket?
              </h2>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp"
                  alt="Rolgordijn"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-gray-900 dark:text-white">Verduisterend Rolgordijn</h4>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv"
                  alt="Inzet Hor"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-gray-900 dark:text-white">Inzet Hor</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
            Klaar voor een betere nachtrust?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Configureer nu uw Slaapkamer Comfort Pack op maat.
          </p>
          <Link
            href="/configurator"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
          >
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
