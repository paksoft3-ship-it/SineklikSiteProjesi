import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plissé Gordijnen op Maat | Window Specialist',
  description: 'Stijlvolle plissé gordijnen: verduisterend, lichtdoorlatend of isolerend honeycomb. Op maat gemaakt met 5 jaar garantie.',
};

const products = [
  {
    id: 'honeycomb',
    name: 'Honeycomb / Duette',
    description: 'Maximale isolatie met honingraatstructuur. Bespaar tot 25% op energiekosten.',
    price: 129,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    badge: 'Bestseller',
    features: ['Energiebesparing', '100+ kleuren'],
  },
  {
    id: 'verduisterend',
    name: 'Verduisterend Plissé',
    description: '100% lichtblokkering voor optimale slaap. Ideaal voor slaapkamers.',
    price: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
    badge: 'Populair',
    features: ['100% verduisterend', 'Thermisch'],
  },
  {
    id: 'lichtdoorlatend',
    name: 'Lichtdoorlatend Plissé (70%)',
    description: 'Zachte lichtfiltering met 70% doorlatendheid. Behoudt privacy.',
    price: 79,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX',
    badge: null,
    features: ['70% doorlatend', 'UV-bescherming'],
  },
  {
    id: 'kleuropties',
    name: 'Kleuropties & Stalen',
    description: 'Ontdek 100+ kleuren. Bestel gratis stalen om thuis te bekijken.',
    price: 69,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    badge: 'Gratis Stalen',
    features: ['100+ kleuren', 'Gratis stalen'],
  },
];

const features = [
  { icon: 'fa-sun', title: 'Lichtregulatie', description: 'Van transparant tot verduisterend' },
  { icon: 'fa-temperature-low', title: 'Isolerend', description: 'Bespaar op energiekosten' },
  { icon: 'fa-palette', title: '100+ Kleuren', description: 'Perfect passend bij uw interieur' },
  { icon: 'fa-shield-alt', title: '5 Jaar Garantie', description: 'Uitgebreide garantie' },
];

const lightOptions = [
  { name: 'Verduisterend', light: '0%', description: 'Volledige blokkering', icon: 'fa-moon', color: 'bg-gray-800' },
  { name: 'Semi-transparant', light: '30-50%', description: 'Zachte filtering', icon: 'fa-cloud-sun', color: 'bg-gray-400' },
  { name: 'Lichtdoorlatend', light: '70%', description: 'Natuurlijk licht', icon: 'fa-sun', color: 'bg-yellow-300' },
  { name: 'Transparant', light: '90%', description: 'Privacy overdag', icon: 'fa-eye', color: 'bg-blue-200' },
];

export default function PlisseGordijnenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
              <i className="fas fa-sun mr-2"></i>Zonwering & Privacy
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Plissé Gordijnen</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Stijlvolle plissé gordijnen met verschillende lichtdoorlatendheid opties. 
              Van verduisterend tot transparant, precies op maat gemaakt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/configurator" className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition shadow-lg">
                <i className="fas fa-sliders-h mr-2"></i> Configureren
              </Link>
              <Link href="/stalen" className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
                <i className="fas fa-swatchbook mr-2"></i> Gratis stalen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className={`fas ${feature.icon} text-primary`}></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Options */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-secondary dark:text-white mb-6 text-center">
            Kies uw gewenste lichtdoorlatendheid
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lightOptions.map((option, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                <div className={`w-16 h-16 ${option.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <i className={`fas ${option.icon} text-2xl ${option.color === 'bg-gray-800' ? 'text-white' : 'text-gray-700'}`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{option.name}</h3>
                <p className="text-primary font-bold">{option.light}</p>
                <p className="text-xs text-gray-500">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">
            Kies uw type plissé gordijn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/producten/plisse-gordijnen/${product.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold rounded ${
                      product.badge === 'Bestseller' ? 'bg-yellow-500 text-yellow-900' :
                      product.badge === 'Populair' ? 'bg-primary text-white' :
                      product.badge === 'Gratis Stalen' ? 'bg-green-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feat, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 rounded">
                        {feat}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500">Vanaf</span>
                      <span className="text-xl font-bold text-primary ml-1">€{product.price},-</span>
                    </div>
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition">
                      <i className="fas fa-arrow-right text-sm"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Twijfelt u over de kleur?
          </h2>
          <p className="text-blue-100 mb-8">
            Bestel gratis stalen en bekijk de kleuren in uw eigen interieur.
          </p>
          <Link href="/stalen" className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-swatchbook mr-2"></i> Gratis stalen aanvragen
          </Link>
        </div>
      </section>
    </div>
  );
}
