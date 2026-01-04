import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Keuken Raamdecoratie & Horren | Window Specialist',
  description: 'Vochtbestendige raamdecoratie en horren voor uw keuken. Privacy én functionaliteit.',
};

const recommendations = [
  { id: 1, type: 'raamdecoratie', name: 'Aluminium Jaloezieën', description: 'Vochtbestendig en makkelijk schoon.', price: 'Vanaf €59,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX', link: '/producten/raamdecoratie/jaloezieen' },
  { id: 2, type: 'horren', name: 'Inzethorren', description: 'Ventileer zonder fruitvliegjes.', price: 'Vanaf €49,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi', link: '/producten/horren/inzethorren' },
  { id: 3, type: 'raamdecoratie', name: 'Rolgordijnen', description: 'Strak en functioneel.', price: 'Vanaf €49,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp', link: '/producten/raamdecoratie/rolgordijnen' },
];

export default function KeukenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA15JTxuk4QRhK_kzs52hFFVW3mjuS5eDVJwf5cUk2EXbTVtYK9pfeDWIlQrp0uRP5TUWl9hnRfzxRGkr87zzT0aQnmmtRVSQXqm2hmYERTu9dEnUP0zfAL4nTJFi2hwdLsgaaolYbAditcU-hi8sczRTrB11LfcbYF2jWOdClM03F7VXVkttujjhlGKdlXgdBPBz72q4NrBoB-bomH08o8IXd9pmwaoq8StTznlclCoenXSjhJ_jUKVTJHLdJ7Hhgvr58ZRZrGzXv" alt="Keuken" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-gray-100 text-gray-700"><i className="fas fa-tint mr-1"></i>Vochtbestendig</span>
              <span className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-yellow-100 text-yellow-700"><i className="fas fa-eye-slash mr-1"></i>Privacy</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Keuken</h1>
            <p className="text-lg text-gray-200 max-w-2xl">Vochtbestendige raamdecoratie die makkelijk schoon te maken is. Ideaal voor de keuken.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">Aanbevolen voor de keuken</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((item) => (
              <Link key={item.id} href={item.link} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded mb-3 ${item.type === 'horren' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{item.type}</span>
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
