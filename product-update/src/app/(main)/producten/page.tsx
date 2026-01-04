import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Producten | Plissé Horren & Gordijnen op Maat | Window Specialist',
  description: 'Ontdek ons complete assortiment plissé horren en gordijnen. Hoogwaardige kwaliteit, op maat gemaakt met 5 jaar garantie.',
};

const categories = [
  {
    id: 'plisse-horren',
    name: 'Plissé Horren',
    description: 'Hoogwaardige plissé horren voor deuren, ramen en balkons. Ruimtebesparend en elegant.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    icon: 'fa-bug',
    products: ['Plissé Hordeur', 'Plissé Raamhor', 'Glazen Balkon Hor', 'Vaste Hor', 'Binnenmontage', 'Hor + Gordijn Combi', 'Drempelloos'],
    startPrice: 69,
    link: '/producten/plisse-horren',
  },
  {
    id: 'plisse-gordijnen',
    name: 'Plissé Gordijnen',
    description: 'Stijlvolle plissé gordijnen met verschillende lichtdoorlatendheid opties. Van verduisterend tot transparant.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    icon: 'fa-sun',
    products: ['Honeycomb / Duette', 'Verduisterend', 'Lichtdoorlatend (70%)', 'Kleuropties'],
    startPrice: 69,
    link: '/producten/plisse-gordijnen',
  },
  {
    id: 'huisdecoratie',
    name: 'Huisdecoratie',
    description: 'Aanvullende raambekleding en huisdecoratie producten. Binnenkort uitgebreid assortiment beschikbaar.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX',
    icon: 'fa-home',
    products: ['Binnenkort beschikbaar'],
    startPrice: null,
    link: '/producten/huisdecoratie',
    comingSoon: true,
  },
];

const features = [
  { icon: 'fa-ruler-combined', title: 'Op Maat', description: 'Elk product wordt precies op uw maten gemaakt' },
  { icon: 'fa-shield-alt', title: '5 Jaar Garantie', description: 'Uitgebreide garantie op alle producten' },
  { icon: 'fa-truck', title: 'Gratis Bezorging', description: 'Gratis verzending vanaf €50' },
  { icon: 'fa-swatchbook', title: 'Gratis Stalen', description: 'Bekijk kleuren in uw eigen interieur' },
];

export default function ProductenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Onze Producten</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Ontdek ons complete assortiment plissé horren en gordijnen. Hoogwaardige kwaliteit, 
            op maat gemaakt voor uw woning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/configurator" className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition">
              <i className="fas fa-sliders-h mr-2"></i> Configurator
            </Link>
            <Link href="/stalen" className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
              <i className="fas fa-swatchbook mr-2"></i> Gratis stalen
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className={`fas ${feature.icon} text-primary`}></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    {category.comingSoon && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="px-4 py-2 bg-white text-gray-800 font-bold rounded-full">Binnenkort beschikbaar</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <i className={`fas ${category.icon} text-xl text-primary`}></i>
                      </div>
                      <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                        {category.name}
                      </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {category.description}
                    </p>
                    
                    {/* Products list */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Producten</p>
                      <div className="flex flex-wrap gap-2">
                        {category.products.map((product, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {category.startPrice ? (
                        <div>
                          <span className="text-sm text-gray-500">Vanaf</span>
                          <span className="text-2xl font-bold text-primary ml-2">€{category.startPrice},-</span>
                        </div>
                      ) : (
                        <div></div>
                      )}
                      {!category.comingSoon && (
                        <Link 
                          href={category.link}
                          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition"
                        >
                          Bekijk collectie <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Niet zeker welk product u nodig heeft?
          </h2>
          <p className="text-blue-100 mb-8">
            Onze experts helpen u graag bij het maken van de juiste keuze.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
              <i className="fas fa-phone mr-2"></i> Neem contact op
            </Link>
            <Link href="/meetgids" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
              <i className="fas fa-ruler mr-2"></i> Meetgids
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
