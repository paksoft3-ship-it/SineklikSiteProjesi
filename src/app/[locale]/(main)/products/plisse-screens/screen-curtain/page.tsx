import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Hor + Gordijn Combinatie op Maat | Window Specialist',
  description: '2-in-1 systeem: insectenwering én zonwering in één. Ruimtebesparend en multifunctioneel. Op maat gemaakt met 5 jaar garantie.',
};

const features = [
  { icon: 'fa-layer-group', title: '2-in-1 Systeem', description: 'Hor én gordijn in één frame.' },
  { icon: 'fa-hand-pointer', title: 'Onafhankelijk bedienbaar', description: 'Kies zelf wat u wanneer gebruikt.' },
  { icon: 'fa-compress-arrows-alt', title: 'Ruimtebesparend', description: 'Slechts één systeem nodig.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Premium kwaliteitsgarantie.' },
];

const specifications = [
  { label: 'Framemateriaal', value: 'Aluminium' },
  { label: 'Gaastype', value: 'Polyester plissé' },
  { label: 'Gordijnstof', value: 'Verduisterend of lichtdoorlatend' },
  { label: 'Framekleuren', value: 'Wit, Antraciet, Zwart' },
  { label: 'Max. afmeting', value: '200 x 240 cm' },
  { label: 'Garantie', value: '5 jaar' },
];

export default function HorGordijnCombinatiePage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/products/plisse-screens" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Horren
              </Link>
              <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold rounded mb-4 ml-2">
                BESTSELLER
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Hor + Gordijn Combinatie</h1>
              <p className="text-lg text-gray-300 mb-6">
                De ultieme combinatie van insectenwering en zonwering in één systeem.
                Kies zelf wanneer u de hor of het gordijn gebruikt. Ruimtebesparend en multifunctioneel.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€299,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition shadow-lg">
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link href="/quote" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
                  <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
                </Link>
              </div>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q" alt="Hor + Gordijn Combinatie" className="rounded-2xl shadow-xl" />
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

      {/* How it works */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">Hoe werkt het?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Eén frame</h3>
              <p className="text-gray-500 text-sm">Beide systemen zitten in één compact aluminium frame.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Twee functies</h3>
              <p className="text-gray-500 text-sm">Schuif de hor dicht voor insectenwering, het gordijn voor zonwering.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Onafhankelijk</h3>
              <p className="text-gray-500 text-sm">Gebruik ze samen of apart, precies zoals u wilt.</p>
            </div>
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
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Twee functies, één systeem</h2>
          <p className="text-blue-100 mb-8">Configureer uw Hor + Gordijn combinatie op maat.</p>
          <Link href="/configurator" className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
