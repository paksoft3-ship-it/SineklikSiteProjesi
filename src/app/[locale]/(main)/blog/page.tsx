import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Blog | Window Specialist',
  description: 'Tips, inspiratie en nieuws over raamdecoratie en horren.',
};

const posts = [
  {
    id: 1,
    title: 'De beste raamdecoratie voor de slaapkamer',
    excerpt: 'Ontdek welke raamdecoratie het beste past bij uw slaapkamer voor optimale slaap en privacy.',
    image: '/images/nav/nav-gordijn-verduisterend.jpg',
    date: '15 januari 2026',
    category: 'Tips',
  },
  {
    id: 2,
    title: 'Houten jaloezieën: tijdloze elegantie',
    excerpt: 'Waarom houten jaloezieën een uitstekende keuze zijn voor elk interieur.',
    image: '/images/nav/wood_50mm_1769528823646.png',
    date: '10 januari 2026',
    category: 'Inspiratie',
  },
  {
    id: 3,
    title: 'Horren onderhouden: zo blijven ze mooi',
    excerpt: 'Praktische tips voor het onderhoud van uw horren zodat ze jarenlang meegaan.',
    image: '/images/nav/horren-inset.png',
    date: '5 januari 2026',
    category: 'Onderhoud',
  },
  {
    id: 4,
    title: 'Energiebesparing met raamdecoratie',
    excerpt: 'Hoe de juiste raamdecoratie kan helpen bij het besparen van energie in uw woning.',
    image: '/images/nav/nav-gordijn-honeycomb.jpg',
    date: '1 januari 2026',
    category: 'Tips',
  },
  {
    id: 5,
    title: 'Trends in raamdecoratie 2026',
    excerpt: 'De nieuwste trends op het gebied van raamdecoratie voor dit jaar.',
    image: '/images/nav/nav-gordijn-kleur.jpg',
    date: '20 december 2025',
    category: 'Trends',
  },
  {
    id: 6,
    title: 'Kindveilige raamdecoratie kiezen',
    excerpt: 'Waar moet u op letten bij het kiezen van veilige raamdecoratie voor kinderkamers?',
    image: '/images/nav/curtain-light.png',
    date: '15 december 2025',
    category: 'Veiligheid',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-newspaper mr-2"></i>Nieuws & Tips
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Tips, inspiratie en nieuws over raamdecoratie en horren.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img alt={post.title} className="w-full h-full object-cover" src={post.image} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}` as any} className="text-primary font-semibold text-sm hover:underline">
                    Lees meer <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Blijf op de hoogte</h2>
          <p className="text-blue-100 mb-8">Schrijf u in voor onze nieuwsbrief en ontvang tips en aanbiedingen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Uw e-mailadres" className="px-6 py-3 rounded-lg text-gray-900 w-full sm:w-auto" />
            <button className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
              Inschrijven
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
