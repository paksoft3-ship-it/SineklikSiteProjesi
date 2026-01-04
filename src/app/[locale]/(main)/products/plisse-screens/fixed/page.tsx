import { Metadata } from 'next';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Vaste Plissé Hor op Maat | Window Specialist',
  description: 'Permanente plissé hor voor vaste ramen. Strakke afwerking, onderhoudsvrij. Op maat gemaakt met 5 jaar garantie.',
};

const specifications = [
  { label: 'Framemateriaal', value: 'Aluminium' },
  { label: 'Gaastype', value: 'Glasvezel of RVS' },
  { label: 'Framekleuren', value: 'Wit, Crème, Antraciet, Zwart' },
  { label: 'Max. afmeting', value: '200 x 250 cm' },
  { label: 'Montage', value: 'Permanent in kozijn' },
  { label: 'Garantie', value: '5 jaar' },
];

export default function VasteHorPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link href="/products/plisse-screens" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4">
                <i className="fas fa-arrow-left mr-2"></i> Terug naar Plissé Horren
              </Link>
              <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded mb-4 ml-2">
                BUDGET
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Vaste Plissé Hor</h1>
              <p className="text-lg text-gray-300 mb-6">
                De vaste plissé hor is ideaal voor ramen die niet geopend hoeven te worden voor de hor.
                Een permanente, nette oplossing die perfect past bij uw kozijn.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-sm text-gray-400">Vanaf</span>
                <span className="text-4xl font-bold text-primary">€69,-</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition shadow-lg">
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </Link>
                <Link href="/quote" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
                  <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8vtkX7ReV_vig94UvWCKzy11t8c7SA-MLMn-5FlgOWQsvOE4BydICRdB0Dtt0mKaKRihy6mEw_hBGoLEtE1t01t-FZ7pxf6r_VcCRIvzXBTY0n647G0DhrJYqQZBbTE9qHnNpm90l4jkW4_NfNUwPCWYhLT3pk3SdQifYkRPCjYzDWfZwXAnzF1oIIyEXk7odgjSptOnGhtnXvKbp4CT8zKbZjAkuGVqLunuKXJH8iLyjNCKT68v2aszFF1ErCjGiuCQ3LMN97X7m"
                alt="Vaste Plissé Hor"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8 text-center">Specificaties</h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            {specifications.map((spec, index) => (
              <div key={index} className={`flex justify-between p-4 ${index !== specifications.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}>
                <span className="text-gray-600 dark:text-gray-400">{spec.label}</span>
                <span className="font-medium text-gray-900 dark:text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Klaar om te bestellen?</h2>
          <Link href="/configurator" className="inline-flex justify-center items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
            <i className="fas fa-sliders-h mr-2"></i> Start configurator
          </Link>
        </div>
      </section>
    </div>
  );
}
