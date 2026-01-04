import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Populaire Pakketten | Window Specialist',
  description: 'Ontdek onze populaire combinatie pakketten van raamdecoratie en horren.',
};

const packages = [
  {
    id: 'slaapkamer-pack',
    name: 'Slaapkamer Comfort Pack',
    description: 'De ideale combinatie voor een goede nachtrust. Verduistering en frisse lucht zonder muggen.',
    price: 149,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    features: ['Verduisterend Plissé Gordijn', 'Inzethor op maat', 'Gratis montage'],
    badge: 'BESTSELLER',
    link: '/products/packages/bedroom',
  },
  {
    id: 'woonkamer-pack',
    name: 'Woonkamer Stijl Pack',
    description: 'Geef uw woonkamer een upgrade met stijlvolle raamdecoratie en een praktische hordeur.',
    price: 289,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDB0oxZFLAIg7HSWTW78WnzlxUE03IvGb0ZmuqdMOArvYOkmkFWuqqkX',
    features: ['Jaloezieën of Plissé', 'Plissé Hordeur', 'Advies aan huis'],
    badge: null,
    link: '/products/packages/living',
  },
  {
    id: 'zolder-pack',
    name: 'Zolder Isolatie Pack',
    description: 'Houd de hitte buiten in de zomer en de warmte binnen in de winter.',
    price: 199,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vtkX7ReV_vig94UvWCKzy11t8c7SA-MLMn-5FlgOWQsvOE4BydICRdB0Dtt0mKaKRihy6mEw_hBGoLEtE1t01t-FZ7pxf6r_VcCRIvzXBTY0n647G0DhrJYqQZBbTE9qHnNpm90l4jkW4_NfNUwPCWYhLT3pk3SdQifYkRPCjYzDWfZwXAnzF1oIIyEXk7odgjSptOnGhtnXvKbp4CT8zKbZjAkuGVqLunuKXJH8iLyjNCKT68v2aszFF1ErCjGiuCQ3LMN97X7m',
    features: ['Duette® Shade (Isolerend)', 'Dakraamhor', 'Zonwering advies'],
    badge: 'ENERGIEBESPARING',
    link: '/products/packages/attic',
  },
] as const;

export default function PakkettenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-blue-200 font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-tags mr-2"></i>Voordeel Pakketten
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Populaire Combinaties
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Onze meest gekozen combinaties van raamdecoratie en horren.
              Speciaal samengesteld voor optimaal comfort en voordeel.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link
                key={pkg.id}
                href={pkg.link as any}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-64 bg-gray-200">
                  <img
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    src={pkg.image}
                  />
                  {pkg.badge && (
                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded">
                      {pkg.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">Vanaf</span>
                      <span className="font-bold text-xl text-primary">€ {pkg.price},-</span>
                    </div>
                    <button className="text-primary bg-blue-50 dark:bg-blue-900/30 group-hover:bg-primary group-hover:text-white p-2 rounded-lg transition">
                      <i className="fas fa-chevron-right"></i>
                    </button>
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
            Andere wensen?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Stel je eigen combinatie samen met onze configurator of vraag een offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/configurator"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
            >
              <i className="fas fa-sliders-h mr-2"></i> Start configurator
            </Link>
            <Link
              href="/quote"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-base font-bold rounded-lg text-primary bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
