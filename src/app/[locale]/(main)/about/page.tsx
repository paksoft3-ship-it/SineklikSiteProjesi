import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Over Ons | Window Specialist',
  description: 'Leer meer over Window Specialist - de specialist in raamdecoratie en horren op maat.',
};

const stats = [
  { value: '15.000+', label: 'Tevreden klanten' },
  { value: '5 jaar', label: 'Garantie' },
  { value: '50+', label: 'Producten' },
  { value: '4.8/5', label: 'Klantwaardering' },
];

const values = [
  {
    icon: 'fa-gem',
    title: 'Kwaliteit',
    description: 'Wij gebruiken alleen de beste materialen voor duurzame producten.',
  },
  {
    icon: 'fa-handshake',
    title: 'Service',
    description: 'Persoonlijke aandacht en deskundig advies voor elke klant.',
  },
  {
    icon: 'fa-leaf',
    title: 'Duurzaamheid',
    description: 'Milieuvriendelijke productie en lange levensduur.',
  },
  {
    icon: 'fa-euro-sign',
    title: 'Eerlijke prijzen',
    description: 'Hoge kwaliteit voor een scherpe prijs, zonder verborgen kosten.',
  },
];

export default function OverOnsPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Wij zijn <span className="text-primary">Window Specialist</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Al meer dan 10 jaar zijn wij de specialist in raamdecoratie en horren op maat.
                Wij geloven dat elk raam uniek is en verdient een oplossing die perfect past
                bij jouw woning en levensstijl.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl3KWyH6a5djj9VrolidPqThfUURYlhlwIoEocXZNCmRXosPIO3biSqFLYg7UeZlYFzyD6DhUGLhVCyiH_EU4nIw-U5qwrx8lPHQuzVFVZgKr5CCS9_C3cGuGMIbeU9D1umLoYg4LxUkzha8oK6YCJE4SIPNel6oHsS70P8kXGZJxhi30YXlOs-j1tixfaSAh7_4y3To6zjgNCdv5EzlVx98Mad5xdQniWJBg66CE887oc7hR5UQ0OV-fQiqaBl0xdwmXlmAZWFzWL"
                alt="Window Specialist team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
              Ons Verhaal
            </h2>
          </div>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Window Specialist begon in 2014 met een simpele missie: het aanbieden van hoogwaardige
              raamdecoratie en horren tegen eerlijke prijzen. Wat begon als een klein familiebedrijf
              is uitgegroeid tot een van de meest vertrouwde namen in Nederland.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Wij geloven in de kracht van maatwerk. Elk raam is anders, en daarom produceren wij
              al onze producten op maat. Zo weet je zeker dat je altijd een perfecte pasvorm krijgt.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Met meer dan 15.000 tevreden klanten en een gemiddelde waardering van 4.8 sterren,
              zijn wij trots op wat we hebben bereikt. Maar we stoppen niet - we blijven innoveren
              en verbeteren om jou de beste ervaring te bieden.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
              Onze Waarden
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dit zijn de principes waar wij elke dag naar leven en werken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${value.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Ontdek ons assortiment of neem contact met ons op voor persoonlijk advies.
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
              <i className="fas fa-envelope mr-2"></i> Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
