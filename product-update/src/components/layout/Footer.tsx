'use client';

import Link from 'next/link';

const trustBadges = [
  {
    icon: 'fa-shield-alt',
    title: 'Geen Risico, Wel Zekerheid',
    description: 'Al onze producten vallen onder 5 jaar garantie. Zorgeloos gebruik.',
  },
  {
    icon: 'fa-undo-alt',
    title: 'Gratis Retourneren',
    description: 'Standaardmaten kunnen binnen 30 dagen kosteloos worden geretourneerd.',
  },
  {
    icon: 'fa-swatchbook',
    title: 'Gratis Stalen',
    description: 'Beslis pas nadat u de textuur en kleur in uw eigen huis heeft gezien.',
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-bg-dark-1">
      {/* Trust Badges Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${badge.icon} text-2xl text-primary`}></i>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h5 className="font-display font-bold text-xl text-white mb-4">
              <span className="text-white">Window</span>
              <span className="text-primary">Specialist</span>
            </h5>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Al meer dan 10 jaar de specialist in plissé horren en gordijnen voor Nederlandse woningen. Vakmanschap, kwaliteit en persoonlijke service.
            </p>
            <p className="text-gray-500 text-sm">
              <strong className="text-gray-400">KVK:</strong> 12345678
            </p>
          </div>

          {/* Plissé Horren Links */}
          <div>
            <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
              Plissé Horren
            </h6>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/producten/plisse-horren/deur" className="text-gray-400 hover:text-primary transition">
                  Plissé Hordeur
                </Link>
              </li>
              <li>
                <Link href="/producten/plisse-horren/raam" className="text-gray-400 hover:text-primary transition">
                  Plissé Raamhor
                </Link>
              </li>
              <li>
                <Link href="/producten/plisse-horren/glazen-balkon" className="text-gray-400 hover:text-primary transition">
                  Glazen Balkon Hor
                </Link>
              </li>
              <li>
                <Link href="/producten/plisse-horren/hor-gordijn-combinatie" className="text-gray-400 hover:text-primary transition">
                  Hor + Gordijn Combi
                </Link>
              </li>
              <li>
                <Link href="/producten/plisse-horren/drempelloos" className="text-gray-400 hover:text-primary transition">
                  Drempelloze Hor
                </Link>
              </li>
            </ul>
          </div>

          {/* Plissé Gordijnen Links */}
          <div>
            <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
              Plissé Gordijnen
            </h6>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/producten/plisse-gordijnen/honeycomb" className="text-gray-400 hover:text-primary transition">
                  Honeycomb / Duette
                </Link>
              </li>
              <li>
                <Link href="/producten/plisse-gordijnen/verduisterend" className="text-gray-400 hover:text-primary transition">
                  Verduisterend
                </Link>
              </li>
              <li>
                <Link href="/producten/plisse-gordijnen/lichtdoorlatend" className="text-gray-400 hover:text-primary transition">
                  Lichtdoorlatend (70%)
                </Link>
              </li>
              <li>
                <Link href="/producten/plisse-gordijnen/kleuropties" className="text-gray-400 hover:text-primary transition">
                  Kleuropties & Stalen
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
              Service
            </h6>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/meetgids" className="text-gray-400 hover:text-primary transition">
                  Meetinstructies
                </Link>
              </li>
              <li>
                <Link href="/stalen" className="text-gray-400 hover:text-primary transition">
                  Gratis Stalen
                </Link>
              </li>
              <li>
                <Link href="/garantie" className="text-gray-400 hover:text-primary transition">
                  Garantie
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialist Badge / Review Widget */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg">
              <h6 className="font-display font-bold text-primary text-sm mb-4">
                Dé Plissé Specialist
              </h6>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-primary text-xs"></i>
                  Scherpe prijzen, geen verborgen kosten
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-primary text-xs"></i>
                  Gratis bezorging vanaf €50
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-primary text-xs"></i>
                  Deskundig advies via chat/telefoon
                </li>
              </ul>

              {/* Review */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    J
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Jan de Vries</p>
                    <div className="flex text-yellow-400 text-xs">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  "Mooi product voor de prijs!"
                </p>
              </div>

              {/* Trustpilot Style Rating */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex text-green-500 text-sm">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-xs text-gray-500">4.721 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 Window Specialist. Alle rechten voorbehouden.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-gray-300 transition">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="hover:text-gray-300 transition">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
