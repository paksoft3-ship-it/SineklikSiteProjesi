import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Horren op Maat | Window Specialist',
  description: 'Ontdek ons uitgebreide assortiment horren op maat. Inzethorren, plissé hordeuren, dakraamhorren en meer.',
};

const categories = [
  {
    id: 'inzethorren',
    name: 'Inzethorren',
    description: 'Eenvoudig te plaatsen zonder boren of schroeven.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxrkrRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi',
    price: 'Vanaf €49,-',
    link: '/products/plisse-screens/insight',
  },
  {
    id: 'plisse-hordeuren',
    name: 'Plissé Hordeuren',
    description: 'Ruimtebesparend en elegant voor balkons en terrassen.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    price: 'Vanaf €199,-',
    link: '/products/plisse-screens/door',
  },
  {
    id: 'dakraamhorren',
    name: 'Dakraamhorren',
    description: 'Speciaal voor VELUX en andere dakraammerken.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vtkX7ReV_vig94UvWCKzy11t8c7SA-MLMn-5FlgOWQsvOE4BydICRdB0Dtt0mKaKRihy6mEw_hBGoLEtE1t01t-FZ7pxf6r_VcCRIvzXBTY0n647G0DhrJYqQZBbTE9qHnNpm90l4jkW4_NfNUwPCWYhLT3pk3SdQifYkRPCjYzDWfZwXAnzF1oIIyEXk7odgjSptOnGhtnXvKbp4CT8zKbZjAkuGVqLunuKXJH8iLyjNCKT68v2aszFF1ErCjGiuCQ3LMN97X7m',
    price: 'Vanaf €89,-',
    link: '/products/plisse-screens/window',
  },
  {
    id: 'schuifhorren',
    name: 'Schuifhorren',
    description: 'Ideaal voor grote ramen en schuifpuien.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv',
    price: 'Vanaf €149,-',
    link: '/products/plisse-screens',
  },
] as const;

export default function HorrenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100/20 text-green-200 font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-bug mr-2"></i>Insectenwering
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Horren op Maat
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Houd insecten buiten en geniet van frisse lucht. Horren op maat voor elk type raam en deur.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Features */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
              Waarom horren van Window Specialist?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-ruler-combined text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Op Maat Gemaakt</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Elke hor wordt op maat gemaakt voor een perfecte pasvorm.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">5 Jaar Garantie</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Al onze horren komen met 5 jaar garantie.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-2xl text-primary"></i>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Eenvoudige Montage</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Zelf te monteren met duidelijke instructies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
            Weet je niet welke hor je nodig hebt?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Gebruik onze configurator om de perfecte hor te vinden voor jouw situatie.
          </p>
          <Link
            href="/configurator"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
          >
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
