import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plissé Gordijn Kleuren & Gratis Stalen | Window Specialist',
  description: 'Kies uit 100+ kleuren voor uw plissé gordijn. Bestel gratis stalen om thuis te bekijken. Perfect passend bij uw interieur.',
};

const colorCategories = [
  {
    name: 'Wit & Crème',
    description: 'Tijdloze neutralen',
    colors: ['#FFFFFF', '#FAFAFA', '#F5F5F5', '#FAF0E6', '#FFF8DC', '#FFFFF0'],
  },
  {
    name: 'Grijs & Antraciet',
    description: 'Modern en stijlvol',
    colors: ['#D3D3D3', '#A9A9A9', '#808080', '#696969', '#4A4A4A', '#2C2C2C'],
  },
  {
    name: 'Blauw',
    description: 'Rustig en sereen',
    colors: ['#E6F3FF', '#B8D4E8', '#6B9AC4', '#4A90D9', '#2B5797', '#1E3A5F'],
  },
  {
    name: 'Groen',
    description: 'Natuurlijk en fris',
    colors: ['#E8F5E9', '#A5D6A7', '#66BB6A', '#43A047', '#2E7D32', '#1B5E20'],
  },
  {
    name: 'Beige & Bruin',
    description: 'Warm en gezellig',
    colors: ['#F5F5DC', '#D2B48C', '#BC9F77', '#8B7355', '#6B4423', '#4A3728'],
  },
  {
    name: 'Rood & Bordeaux',
    description: 'Krachtig en elegant',
    colors: ['#FFE4E1', '#E57373', '#EF5350', '#C62828', '#8B0000', '#5C1010'],
  },
];

const features = [
  { icon: 'fa-palette', title: '100+ Kleuren', description: 'Uitgebreid kleurenpalet.' },
  { icon: 'fa-envelope-open', title: 'Gratis Stalen', description: 'Bekijk thuis in uw interieur.' },
  { icon: 'fa-truck', title: 'Snelle Levering', description: 'Stalen binnen 3 werkdagen.' },
  { icon: 'fa-check-circle', title: 'Op Maat', description: 'Elk gordijn wordt speciaal voor u gemaakt.' },
];

export default function KleuroptiesPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/producten/plisse-gordijnen" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
              <i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Gordijnen
            </Link>
            <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded mb-4 ml-2">
              GRATIS STALEN
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Kleuropties & Stalen</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Kies uit meer dan 100 kleuren voor uw plissé gordijn. Bestel gratis stalen en bekijk de kleuren 
              in uw eigen interieur voordat u beslist.
            </p>
            <Link href="/stalen" className="inline-flex items-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition shadow-lg">
              <i className="fas fa-swatchbook mr-2"></i> Bestel gratis stalen
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <i className={`fas ${feature.icon} text-xl text-primary`}></i>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">
            Ontdek ons kleurenpalet
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                <div className="flex gap-2">
                  {category.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-10 h-10 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer hover:scale-110 transition"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            Dit is slechts een selectie. Bestel stalen voor het volledige kleurenpalet.
          </p>
        </div>
      </section>

      {/* How to order samples */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">
            Hoe werkt het?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Kies kleuren</h3>
              <p className="text-gray-500 text-sm">Selecteer max. 5 kleuren die u wilt bekijken.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Bestel gratis</h3>
              <p className="text-gray-500 text-sm">Stalen zijn volledig gratis, inclusief verzending.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Ontvang thuis</h3>
              <p className="text-gray-500 text-sm">Binnen 3 werkdagen in uw brievenbus.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Beslis rustig</h3>
              <p className="text-gray-500 text-sm">Bekijk de kleuren in uw eigen interieur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Niet zeker van de kleur?</h2>
          <p className="text-blue-100 mb-8">Bestel gratis stalen en bekijk de kleuren thuis in uw eigen interieur.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/stalen" className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
              <i className="fas fa-swatchbook mr-2"></i> Bestel gratis stalen
            </Link>
            <Link href="/configurator" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
              <i className="fas fa-sliders-h mr-2"></i> Naar configurator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
