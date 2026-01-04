import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Balkon Hordeuren | Window Specialist',
  description: 'Plissé hordeuren en schuifhorren voor uw balkon. Houd insecten buiten.',
};

const recommendations = [
  { id: 1, type: 'horren', name: 'Plissé Hordeuren', description: 'Ruimtebesparend en elegant.', price: 'Vanaf €199,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA', link: '/producten/horren/plisse-hordeuren' },
  { id: 2, type: 'horren', name: 'Schuifhorren', description: 'Ideaal voor schuifpuien.', price: 'Vanaf €149,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv', link: '/producten/horren/schuifhorren' },
];

export default function BalkonPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA" alt="Balkon" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-green-100 text-green-700"><i className="fas fa-shield-alt mr-1"></i>Hordeuren</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Balkon</h1>
            <p className="text-lg text-gray-200 max-w-2xl">Geniet van uw balkon zonder last van insecten. Onze hordeuren bieden de perfecte oplossing.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">Aanbevolen voor het balkon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recommendations.map((item) => (
              <Link key={item.id} href={item.link} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded mb-3 bg-green-100 text-green-700">{item.type}</span>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">{item.price}</span>
                    <span className="text-primary"><i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">Hulp nodig bij het kiezen?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Gebruik onze configurator voor persoonlijk advies.</p>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
