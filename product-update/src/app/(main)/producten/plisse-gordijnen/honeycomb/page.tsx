import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Honeycomb / Duette Gordijn op Maat | Window Specialist',
  description: 'Honeycomb gordijnen met honingraatstructuur voor maximale isolatie. Bespaar tot 25% op energiekosten. Op maat gemaakt met 5 jaar garantie.',
};

const features = [
  { icon: 'fa-leaf', title: 'Energiebesparend', description: 'Tot 25% besparing op energiekosten.' },
  { icon: 'fa-temperature-high', title: 'Honingraatisolatie', description: 'Unieke celstructuur voor optimale isolatie.' },
  { icon: 'fa-volume-mute', title: 'Geluidsdemping', description: 'Vermindert geluidsoverlast van buiten.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie op alle producten.' },
];

const specifications = [
  { label: 'Structuur', value: 'Honeycomb (Single/Double Cell)' },
  { label: 'Stoftype', value: 'Transparant, Semi-transparant, Verduisterend' },
  { label: 'Kleuren', value: '100+ kleuren' },
  { label: 'Max. afmeting', value: '300 x 400 cm' },
  { label: 'Bediening', value: 'Koord, Smartcord of Elektrisch' },
  { label: 'Uitvoering', value: 'Standaard of Top-down/Bottom-up' },
  { label: 'Garantie', value: '5 jaar' },
];

const cellOptions = [
  { name: 'Single Cell', description: 'Eén laag honingraat. Compact en effectief.', savings: '15%' },
  { name: 'Double Cell', description: 'Dubbele laag voor maximale isolatie.', savings: '25%' },
];

export default function HoneycombPage() {
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
              <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold rounded mb-4 ml-2">
                BESTSELLER
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Honeycomb / Duette</h1>
              <p className="text-lg text-gray-300 mb-6">
                Het Honeycomb gordijn heeft een unieke honingraatstructuur die lucht opsluit voor optimale isolatie. 
                Bespaar tot 25% op uw energiekosten terwijl u geniet van stijlvol design.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€129,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link href="/stalen" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-base font-bold rounded-lg text-white hover:bg-white/10 transition">
                  <i className="fas fa-swatchbook mr-2"></i> Gratis stalen
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q" 
                alt="Honeycomb Gordijn" 
                className="rounded-2xl shadow-xl" 
              />
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

      {/* Cell Options */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">Kies uw celstructuur</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cellOptions.map((option, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{option.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{option.description}</p>
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold">
                  Tot {option.savings} energiebesparing
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Klaar om energie te besparen?</h2>
          <p className="text-blue-100 mb-8">Configureer uw Honeycomb gordijn op maat en start met besparen.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-primary bg-white hover:bg-gray-100 transition">
              <i className="fas fa-sliders-h mr-2"></i> Start configurator
            </Link>
            <Link href="/stalen" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-bold rounded-lg text-white hover:bg-white/10 transition">
              <i className="fas fa-swatchbook mr-2"></i> Gratis stalen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
