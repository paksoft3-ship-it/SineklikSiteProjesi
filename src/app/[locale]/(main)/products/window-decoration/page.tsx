import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Raamdecoratie op Maat | Window Specialist',
  description: 'Ontdek ons uitgebreide assortiment raamdecoratie op maat. Jaloezieën, rolgordijnen, plissé gordijnen en meer.',
};

const categories = [
  {
    id: 'jaloezieen',
    name: 'Jaloezieën',
    description: 'Aluminium en houten jaloezieën in diverse breedtes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX',
    price: 'Vanaf €59,-',
    link: '/products/window-decoration',
  },
  {
    id: 'rolgordijnen',
    name: 'Rolgordijnen',
    description: 'Verduisterend of lichtdoorlatend in vele kleuren.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
    price: 'Vanaf €49,-',
    link: '/products/window-decoration',
  },
  {
    id: 'plisse-gordijnen',
    name: 'Plissé Gordijnen',
    description: 'Stijlvol en functioneel met uitstekende isolatie.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    price: 'Vanaf €79,-',
    link: '/products/plisse-curtains',
  },
  {
    id: 'duette-shades',
    name: 'Duette® Shades',
    description: 'Premium isolerende gordijnen met honingraatstructuur.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3wY702i7jmzp34Q',
    price: 'Vanaf €129,-',
    link: '/products/plisse-curtains/honeycomb',
  },
] as const;

export default function RaamdecoratieePage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/20 text-blue-200 font-bold text-sm mb-6 tracking-wide uppercase">
              Raamdecoratie
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Raamdecoratie op Maat
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Van stijlvolle jaloezieën tot isolerende duette shades. Ontdek de perfecte raamdecoratie voor jouw interieur.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.link as any}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    src={category.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">{category.price}</span>
                    <span className="text-primary">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
            Hulp nodig bij het kiezen?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Gebruik onze configurator om de perfecte raamdecoratie te vinden voor jouw kamer.
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
