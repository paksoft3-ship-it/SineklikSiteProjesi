import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Gordijnen op Maat | Window Specialist',
  description: 'Ontdek ons uitgebreide assortiment gordijnen op maat. Overgordijnen, vitrages, inbetween en meer.',
};

const categories = [
  {
    id: 'blackout',
    name: 'Verduisterende Gordijnen',
    description: '100% lichtblokkering voor optimale slaap en privacy.',
    image: '/images/nav/curtain-blackout.png',
    price: 'Vanaf €89,-',
    link: '/products/curtains/blackout',
  },
  {
    id: 'light-filtering',
    name: 'Lichtdoorlatende Gordijnen',
    description: 'Zachte lichtfiltering met behoud van privacy.',
    image: '/images/nav/curtain-light.png',
    price: 'Vanaf €69,-',
    link: '/products/curtains/light-filtering',
  },
  {
    id: 'sheer',
    name: 'Transparante Gordijnen',
    description: 'Elegante vitrages voor een luchtige sfeer.',
    image: '/images/nav/curtain-sheer.png',
    price: 'Vanaf €49,-',
    link: '/products/curtains/sheer',
  },
  {
    id: 'drapes',
    name: 'Overgordijnen',
    description: 'Luxe overgordijnen voor een warme uitstraling.',
    image: '/images/nav/nav-gordijn-verduisterend.jpg',
    price: 'Vanaf €99,-',
    link: '/products/curtains/drapes',
  },
  {
    id: 'inbetween',
    name: 'Inbetween Gordijnen',
    description: 'De perfecte balans tussen privacy en lichtinval.',
    image: '/images/nav/curtain-inbetween.png',
    price: 'Vanaf €79,-',
    link: '/products/curtains/inbetween',
  },
  {
    id: 'voiles',
    name: 'Vitrages',
    description: 'Lichte, transparante stoffen voor een subtiele look.',
    image: '/images/nav/curtain-sheer.png',
    price: 'Vanaf €39,-',
    link: '/products/curtains/voiles',
  },
];

const accessories = [
  {
    id: 'rails',
    name: 'Gordijnrails',
    description: 'Strakke rails voor een moderne look.',
    image: '/images/nav/curtain-rails.png',
    price: 'Vanaf €29,-',
    link: '/products/curtains/rails',
  },
  {
    id: 'rods',
    name: 'Gordijnroedes',
    description: 'Klassieke roedes voor een tijdloze uitstraling.',
    image: '/images/nav/curtain-rails.png',
    price: 'Vanaf €39,-',
    link: '/products/curtains/rods',
  },
  {
    id: 'rail-rods',
    name: 'Railroedes',
    description: 'Combinatie van rail en roede voor flexibiliteit.',
    image: '/images/nav/curtain-rails.png',
    price: 'Vanaf €49,-',
    link: '/products/curtains/rail-rods',
  },
];

export default function CurtainsPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-window-maximize mr-2"></i>Raamdecoratie
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Gordijnen op Maat
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Sfeer en stijl voor elk interieur. Van verduisterend tot transparant, wij hebben de perfecte gordijnen voor u.
            </p>
          </div>
        </div>
      </section>

      {/* Fabric Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">
            Soort Stof
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Rails & Rods */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">
            Rails & Roedes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessories.map((item) => (
              <Link
                key={item.id}
                href={item.link as any}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    src={item.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">{item.price}</span>
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

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
              Waarom gordijnen van Window Specialist?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-ruler-combined text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Op Maat Gemaakt</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Perfecte pasvorm voor elk raam.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-palette text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">100+ Kleuren</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Uitgebreide kleurencollectie.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">5 Jaar Garantie</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Uitgebreide garantie op al onze producten.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Gratis Levering</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Gratis bezorging in heel Nederland.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Op maat gemaakt, speciaal voor u
          </h2>
          <p className="text-blue-100 mb-8">
            Gebruik onze configurator om uw perfecte gordijnen samen te stellen.
          </p>
          <Link
            href="/configurator"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-primary bg-white hover:bg-gray-100 transition shadow-lg"
          >
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
