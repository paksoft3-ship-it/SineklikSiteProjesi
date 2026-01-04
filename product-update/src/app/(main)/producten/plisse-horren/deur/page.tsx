import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plissé Hordeur op Maat | Window Specialist',
  description: 'Ruimtebesparende plissé hordeur voor balkons en terrassen. Eenvoudig te bedienen met één hand. Op maat gemaakt met 5 jaar garantie.',
};

const features = [
  { icon: 'fa-compress-arrows-alt', title: 'Ruimtebesparend', description: 'Plisséconstructie neemt minimale ruimte in.' },
  { icon: 'fa-hand-pointer', title: 'Eenvoudige bediening', description: 'Bedien met één hand, soepel en stil.' },
  { icon: 'fa-expand-arrows-alt', title: 'Grote openingen', description: 'Geschikt tot 240cm breed.' },
  { icon: 'fa-shield-alt', title: '5 jaar garantie', description: 'Kwaliteitsgarantie op alle onderdelen.' },
];

const specifications = [
  { label: 'Framemateriaal', value: 'Aluminium' },
  { label: 'Gaastype', value: 'Polyester plissé' },
  { label: 'Framekleuren', value: 'Wit, Crème, Antraciet, Zwart' },
  { label: 'Max. afmeting', value: '240 x 260 cm' },
  { label: 'Uitvoering', value: 'Enkel of dubbel' },
  { label: 'Profielbreedte', value: '3.5cm (standaard) of 4cm' },
  { label: 'Garantie', value: '5 jaar' },
];

const relatedProducts = [
  { name: 'Plissé Raamhor', price: 89, link: '/producten/plisse-horren/raam' },
  { name: 'Drempelloze Hor', price: 229, link: '/producten/plisse-horren/drempelloos' },
  { name: 'Hor + Gordijn Combi', price: 299, link: '/producten/plisse-horren/hor-gordijn-combinatie' },
];

export default function PlisseHordeurPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/producten/plisse-horren" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Horren
              </Link>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded mb-4 ml-2">
                POPULAIR
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Plissé Hordeur</h1>
              <p className="text-lg text-gray-300 mb-6">
                De plissé hordeur is de ideale oplossing voor balkons, terrassen en tuindeuren. 
                Door het plissésysteem neemt de hor minimale ruimte in beslag wanneer geopend.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€199,-</span>
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
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA" 
                alt="Plissé Hordeur" 
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

      {/* Specifications */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">Specificaties</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                {specifications.map((spec, index) => (
                  <div key={index} className={`flex justify-between p-4 ${index !== specifications.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}>
                    <span className="text-gray-600 dark:text-gray-400">{spec.label}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">Profielopties</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-600">3.5</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">3.5cm Profiel</h3>
                      <p className="text-sm text-gray-500">Standaard - geschikt voor de meeste ramen en deuren</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center font-bold text-primary">4.0</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">4cm Profiel</h3>
                      <p className="text-sm text-gray-500">Extra sterk - voor grote openingen en balkons</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">Gerelateerde producten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <Link key={index} href={product.link} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">Vanaf €{product.price},-</span>
                  <i className="fas fa-arrow-right text-primary"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Klaar om te bestellen?</h2>
          <p className="text-blue-100 mb-8">Configureer uw plissé hordeur op maat en ontvang direct een prijsindicatie.</p>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-primary bg-white hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
