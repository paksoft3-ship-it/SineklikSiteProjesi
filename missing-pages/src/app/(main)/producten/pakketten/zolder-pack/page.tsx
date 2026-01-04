import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zolder Isolatie Pack | Window Specialist',
  description: 'Duette® Shades + Dakraamhor. Maximale isolatie en insectenwering voor uw zolder.',
};

const features = [
  { icon: 'fa-temperature-low', title: 'Warmte-isolatie', description: 'Houdt warmte binnen in de winter.' },
  { icon: 'fa-sun', title: 'Koelte in zomer', description: 'Houdt warmte buiten in de zomer.' },
  { icon: 'fa-bug', title: 'Insectenwering', description: 'Dakraamhor houdt insecten buiten.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie op alle producten.' },
];

const included = ['Duette® Shades op maat', 'Dakraamhor op maat', 'Montagemateriaal', 'Montage-instructies', 'Video handleiding', '5 jaar garantie'];

export default function ZolderPackPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/producten/pakketten" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Pakketten
              </Link>
              <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded mb-4 ml-2">ENERGIEBESPARING</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Zolder Isolatie Pack</h1>
              <p className="text-lg text-gray-300 mb-6">
                Maximale isolatie met Duette® Shades en bescherming tegen insecten met een dakraamhor.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€199,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link href="/offerte" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-base font-bold rounded-lg text-white hover:bg-white/10 transition">
                  <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
                </Link>
              </div>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q" alt="Zolder Isolatie Pack" className="rounded-2xl shadow-xl" />
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
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">Wat zit er in dit pakket?</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-green-600 dark:text-green-400 text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">Klaar voor een comfortabele zolder?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Configureer nu uw Zolder Isolatie Pack op maat.</p>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
