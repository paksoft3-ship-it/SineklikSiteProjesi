import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Houten Jaloezieën op Maat | Window Specialist',
  description: 'Ontdek ons uitgebreide assortiment houten jaloezieën. 50mm, 63mm, bamboe en basswood.',
};

const categories = [
  { id: '50mm', name: '50mm Lamel', description: 'Klassieke 50mm lamelbreedte.', image: '/images/nav/wood_50mm_1769528823646.png', price: 'Vanaf €89,-', link: '/products/wooden-blinds/50mm' },
  { id: '63mm', name: '63mm Lamel', description: 'Brede 63mm lamellen voor meer licht.', image: '/images/nav/wood_63mm_1769528959629.png', price: 'Vanaf €99,-', link: '/products/wooden-blinds/63mm' },
  { id: 'bamboo', name: 'Bamboe', description: 'Duurzaam en milieuvriendelijk.', image: '/images/nav/wood_bamboo_1769529056827.png', price: 'Vanaf €79,-', link: '/products/wooden-blinds/bamboo' },
  { id: 'basswood', name: 'Basswood', description: 'Premium basswood hout.', image: '/images/nav/wood_basswood_1769529125768.png', price: 'Vanaf €109,-', link: '/products/wooden-blinds/basswood' },
  { id: 'black', name: 'Zwart', description: 'Moderne zwarte afwerking.', image: '/images/nav/wood_black_1769529224964.png', price: 'Vanaf €99,-', link: '/products/wooden-blinds/black' },
  { id: 'white', name: 'Wit', description: 'Klassieke witte afwerking.', image: '/images/nav/wood_white_1769529243896.png', price: 'Vanaf €89,-', link: '/products/wooden-blinds/white' },
];

export default function WoodenBlindsPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-tree mr-2"></i>Premium Hout
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Houten Jaloezieën</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Warme, natuurlijke uitstraling met premium houtsoorten. Tijdloze elegantie.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <h2 className="font-display text-3xl font-bold text-white mb-4">Configureer uw houten jaloezieën</h2>
          <p className="text-blue-100 mb-8">Gebruik onze handige configurator om uw perfecte houten jaloezieën samen te stellen.</p>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
