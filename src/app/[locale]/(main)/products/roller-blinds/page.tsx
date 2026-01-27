import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Rolgordijnen op Maat | Window Specialist',
  description: 'Ontdek ons uitgebreide assortiment rolgordijnen. Verduisterend, lichtdoorlatend, transparant en meer.',
};

const categories = [
  {
    id: 'blackout',
    name: 'Verduisterend',
    description: '100% lichtblokkering voor slaapkamers en thuisbioscopen.',
    image: '/images/nav/curtain-blackout.png',
    price: 'Vanaf €69,-',
    link: '/products/roller/blackout',
  },
  {
    id: 'light-filtering',
    name: 'Lichtdoorlatend',
    description: 'Zachte lichtfiltering met behoud van privacy.',
    image: '/images/nav/curtain-light.png',
    price: 'Vanaf €49,-',
    link: '/products/roller/light-filtering',
  },
  {
    id: 'sheer',
    name: 'Transparant',
    description: 'Maximaal licht met subtiele privacy.',
    image: '/images/nav/curtain-sheer.png',
    price: 'Vanaf €39,-',
    link: '/products/roller/sheer',
  },
];

const collections = [
  {
    id: 'custom',
    name: 'Op Maat',
    description: 'Volledig op maat gemaakt voor een perfecte pasvorm.',
    image: '/images/nav/nav-gordijn-verduisterend.jpg',
    price: 'Vanaf €49,-',
    link: '/products/roller/custom',
    badge: 'Bestseller',
  },
  {
    id: 'ready-made',
    name: 'Kant en Klaar',
    description: 'Direct beschikbaar in standaardmaten.',
    image: '/images/nav/nav-gordijn-verduisterend.jpg',
    price: 'Vanaf €19,-',
    link: '/products/roller/ready-made',
  },
];

export default function RollerBlindsPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-scroll mr-2"></i>Raamdecoratie
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Rolgordijnen
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Strak en modern design voor elk interieur. Van verduisterend tot transparant.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">
            Soort Stof
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">
            Collectie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((item) => (
              <Link
                key={item.id}
                href={item.link as any}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex">
                  <div className="w-1/3 overflow-hidden">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                      src={item.image}
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
              Waarom rolgordijnen van Window Specialist?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-sun', title: 'Lichtregulatie', desc: 'Van verduisterend tot transparant' },
              { icon: 'fa-palette', title: '100+ Kleuren', desc: 'Uitgebreide collectie' },
              { icon: 'fa-shield-alt', title: '5 Jaar Garantie', desc: 'Uitgebreide garantie' },
              { icon: 'fa-truck', title: 'Gratis Levering', desc: 'In heel Nederland' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${feature.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Configureer uw rolgordijnen
          </h2>
          <p className="text-blue-100 mb-8">
            Gebruik onze handige configurator om uw perfecte rolgordijnen samen te stellen.
          </p>
          <Link
            href="/configurator"
            className="inline-flex justify-center items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
          >
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
