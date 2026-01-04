import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glazen Balkon Hor op Maat | Window Specialist',
  description: 'Plissé hor speciaal voor glazen balkonsystemen. Compatibel met alle gangbare systemen. Op maat gemaakt met 5 jaar garantie.',
};

const features = [
  { icon: 'fa-building', title: 'Glazen balkons', description: 'Speciaal ontwikkeld voor glazen balkonsystemen.' },
  { icon: 'fa-check-circle', title: 'Universeel compatibel', description: 'Past op alle gangbare balkonsystemen.' },
  { icon: 'fa-eye-slash', title: 'Minimaal zichtbaar', description: 'Onopvallende profielen voor maximaal uitzicht.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie op alle onderdelen.' },
];

const specifications = [
  { label: 'Framemateriaal', value: 'Aluminium' },
  { label: 'Compatibiliteit', value: 'Alle glazen balkonsystemen' },
  { label: 'Gaastype', value: 'Polyester plissé' },
  { label: 'Framekleuren', value: 'Wit, Antraciet, Zwart' },
  { label: 'Max. afmeting', value: '300 x 260 cm' },
  { label: 'Montage', value: 'Professioneel aanbevolen' },
  { label: 'Garantie', value: '5 jaar' },
];

export default function GlazenBalkonHorPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/producten/plisse-horren" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Horren
              </Link>
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded mb-4 ml-2">
                PREMIUM
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Glazen Balkon Hor</h1>
              <p className="text-lg text-gray-300 mb-6">
                Deze plissé hor is speciaal ontwikkeld voor glazen balkonsystemen. Perfect passend 
                bij populaire merken en systemen. Houdt insecten buiten terwijl u geniet van uw uitzicht.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€249,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition shadow-lg">
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link href="/offerte" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
                  <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv" 
                alt="Glazen Balkon Hor" 
                className="rounded-2xl shadow-xl" 
              />
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

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Klaar om te bestellen?</h2>
          <p className="text-blue-100 mb-8">Configureer uw glazen balkon hor op maat.</p>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
