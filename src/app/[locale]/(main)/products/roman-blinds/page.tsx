import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Vouwgordijnen op Maat | Window Specialist',
  description: 'Ontdek ons uitgebreide assortiment vouwgordijnen. Verduisterend, lichtdoorlatend, inbetween en linnen.',
};

const categories = [
  { id: 'blackout', name: 'Verduisterend', description: '100% lichtblokkering voor slaapkamers.', image: '/images/nav/roman_blackout_1769528343726.png', price: 'Vanaf €99,-', link: '/products/roman-blinds/blackout' },
  { id: 'light-filtering', name: 'Lichtdoorlatend', description: 'Zachte lichtfiltering met privacy.', image: '/images/nav/roman_light_1769528427366.png', price: 'Vanaf €79,-', link: '/products/roman-blinds/light-filtering' },
  { id: 'inbetween', name: 'Inbetween', description: 'Perfecte balans tussen licht en privacy.', image: '/images/nav/roman_inbetween_1769528574630.png', price: 'Vanaf €89,-', link: '/products/roman-blinds/inbetween' },
  { id: 'linen', name: 'Linnen', description: 'Natuurlijke linnen look voor een warme sfeer.', image: '/images/nav/roman_linen_1769528689271.png', price: 'Vanaf €109,-', link: '/products/roman-blinds/linen' },
];

export default function RomanBlindsPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-layer-group mr-2"></i>Raamdecoratie
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Vouwgordijnen</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Elegante vouwgordijnen met strakke plooien voor een luxe uitstraling.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <Link key={cat.id} href={cat.link as any} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden"><img alt={cat.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" src={cat.image} /></div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{cat.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">{cat.price}</span>
                    <span className="text-primary"><i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Configureer uw vouwgordijnen</h2>
          <p className="text-blue-100 mb-8">Gebruik onze handige configurator om uw perfecte vouwgordijnen samen te stellen.</p>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
