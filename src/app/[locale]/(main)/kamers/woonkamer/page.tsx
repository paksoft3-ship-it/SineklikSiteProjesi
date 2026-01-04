import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Woonkamer Raamdecoratie & Horren | Window Specialist',
  description: 'Ontdek de beste raamdecoratie en horren voor uw woonkamer. Van jaloezieën tot inzethorren.',
};

const recommendations = [
  { id: 1, type: 'horren', name: 'Plissé Hordeuren', description: 'Ideaal voor de tuin- of balkondeur.', price: 'Vanaf €199,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA', link: '/products/plisse-screens/door' },
  { id: 2, type: 'raamdecoratie', name: 'Plissé Gordijnen', description: 'Stijlvolle zonwering voor de woonkamer.', price: 'Vanaf €89,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv', link: '/products/plisse-curtains' },
] as const;

export default function WoonkamerPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi"
            alt="Woonkamer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-green-100 text-green-700">
                <i className="fas fa-bug mr-1"></i>Insectenwering
              </span>
              <span className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-yellow-100 text-yellow-700">
                <i className="fas fa-sun mr-1"></i>Licht Privacy
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Woonkamer
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Creëer de perfecte sfeer in uw woonkamer met onze raamdecoratie en horren.
              Van lichtdoorlatend tot verduisterend, wij hebben de oplossing.
            </p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">
            Aanbevolen voor de woonkamer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((item) => (
              <Link
                key={item.id}
                href={item.link as any}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded mb-3 ${item.type === 'horren'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    }`}>
                    {item.type}
                  </span>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
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

      {/* Package Suggestion */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX"
                  alt="Woonkamer Stijl Pack"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 bg-secondary text-white text-xs font-bold rounded mb-4">
                  POPULAIR PAKKET
                </span>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Woonkamer Stijl Pack
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Combineer houten jaloezieën (50mm) met een plissé hordeur voor de ultieme
                  woonkameroplossing. Stijlvol en functioneel.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 block">Vanaf</span>
                    <span className="text-3xl font-bold text-primary">€289,-</span>
                  </div>
                  <Link href="/products/packages" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                    <i className="fas fa-box-open mr-2"></i> Bekijk Woonkamer Pakket
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50 dark:bg-gray-800 rounded-3xl p-12">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">Maatwerk advies nodig?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Onze experts helpen u graag bij het samenstellen van de perfecte oplossing voor uw woonkamer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/configurator" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-secondary hover:bg-gray-800 transition">
              <i className="fas fa-sliders-h mr-2"></i> Configurator
            </Link>
            <Link href="/quote" className="inline-flex justify-center items-center px-6 py-3 border-2 border-secondary dark:border-white text-base font-bold rounded-lg text-secondary dark:text-white hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition">
              <i className="fas fa-calculator mr-2"></i> Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
