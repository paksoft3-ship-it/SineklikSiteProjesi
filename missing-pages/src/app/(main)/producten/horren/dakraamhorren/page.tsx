import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dakraamhorren op Maat | Window Specialist',
  description: 'Dakraamhorren op maat voor VELUX en andere merken. Bescherm uw zolder tegen insecten.',
};

const features = [
  { icon: 'fa-check-circle', title: 'Compatibel met VELUX', description: 'Past op alle gangbare dakraammerken.' },
  { icon: 'fa-sun', title: 'UV-bestendig', description: 'Langdurig mooi door UV-bestendig materiaal.' },
  { icon: 'fa-wind', title: 'Goede ventilatie', description: 'Fijnmazig gaas voor optimale luchtstroom.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie op alle producten.' },
];

const specifications = [
  { label: 'Framemateriaal', value: 'Aluminium' },
  { label: 'Gaastype', value: 'Glasvezel UV-bestendig' },
  { label: 'Framekleuren', value: 'Wit, Grijs, Zwart' },
  { label: 'Compatibiliteit', value: 'VELUX, Fakro, Roto' },
  { label: 'Bevestiging', value: 'Klikbevestiging' },
  { label: 'Garantie', value: '5 jaar' },
];

export default function DakraamhorrenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/producten/horren" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Horren
              </Link>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Dakraamhorren</h1>
              <p className="text-lg text-gray-300 mb-6">
                Speciaal ontworpen voor dakramen. Compatibel met VELUX en andere populaire merken.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€89,-</span>
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
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8vtkX7ReV_vig94UvWCKzy11t8c7SA-MLMn-5FlgOWQsvOE4BydICRdB0Dtt0mKaKRihy6mEw_hBGoLEtE1t01t-FZ7pxf6r_VcCRIvzXBTY0n647G0DhrJYqQZBbTE9qHnNpm90l4jkW4_NfNUwPCWYhLT3pk3SdQifYkRPCjYzDWfZwXAnzF1oIIyEXk7odgjSptOnGhtnXvKbp4CT8zKbZjAkuGVqLunuKXJH8iLyjNCKT68v2aszFF1ErCjGiuCQ3LMN97X7m" alt="Dakraamhorren" className="rounded-2xl shadow-xl" />
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

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">Klaar om te bestellen?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Configureer uw dakraamhor op maat.</p>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
