'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer } from '@/components/animations/ScrollAnimation';

const Footer = () => {
  // We use root translations where possible or namespaces
  const tFooter = useTranslations('Footer'); // For specific footer config
  const tHeader = useTranslations('Header'); // To re-use product names

  const trustBadges = [
    {
      icon: 'fa-shield-alt',
      title: tFooter('trust.risk_free.title'),
      description: tFooter('trust.risk_free.desc'),
    },
    {
      icon: 'fa-undo-alt',
      title: tFooter('trust.returns.title'),
      description: tFooter('trust.returns.desc'),
    },
    {
      icon: 'fa-undo-alt',
      title: tFooter('trust.returns.title'),
      description: tFooter('trust.returns.desc'),
    },
  ];

  return (
    <footer className="bg-secondary dark:bg-bg-dark-1">
      {/* Trust Badges Section */}
      <ScrollAnimation variant="fadeUp">
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
      </ScrollAnimation>

      {/* Main Footer Content */}
      <ScrollAnimation variant="fadeUp" delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h5 className="font-display font-bold text-xl text-white mb-4">
                <span className="text-white">Window</span>
                <span className="text-primary">Specialist</span>
              </h5>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {tFooter('columns.company_desc')}
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-gray-400">KVK:</strong> 12345678
              </p>
            </div>

            {/* Plissé Horren Links */}
            <div>
              <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
                {tHeader('nav.horren')}
              </h6>
              <ul className="space-y-3 text-sm">
                <li><Link href="/products/plisse-screens/door" className="text-gray-400 hover:text-primary transition">{tHeader('items.horren.deur')}</Link></li>
                <li><Link href="/products/plisse-screens/window" className="text-gray-400 hover:text-primary transition">{tHeader('items.horren.raam')}</Link></li>
                <li><Link href="/products/plisse-screens/glass-balcony" className="text-gray-400 hover:text-primary transition">{tHeader('items.horren.balkon')}</Link></li>
                <li><Link href="/products/plisse-screens/screen-curtain" className="text-gray-400 hover:text-primary transition">{tHeader('items.horren.combi')}</Link></li>
                <li><Link href="/products/plisse-screens/barrier-free" className="text-gray-400 hover:text-primary transition">{tHeader('items.horren.drempel')}</Link></li>
              </ul>
            </div>

            {/* Plissé Gordijnen Links */}
            <div>
              <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
                {tHeader('nav.gordijnen')}
              </h6>
              <ul className="space-y-3 text-sm">
                <li><Link href="/products/plisse-curtains/honeycomb" className="text-gray-400 hover:text-primary transition">{tHeader('items.gordijnen.honeycomb')}</Link></li>
                <li><Link href="/products/plisse-curtains/blackout" className="text-gray-400 hover:text-primary transition">{tHeader('items.gordijnen.verduisterend')}</Link></li>
                <li><Link href="/products/plisse-curtains/light-filtering" className="text-gray-400 hover:text-primary transition">{tHeader('items.gordijnen.licht')}</Link></li>
                <li><Link href="/products/plisse-curtains/colors" className="text-gray-400 hover:text-primary transition">{tHeader('items.gordijnen.kleur')}</Link></li>
              </ul>
            </div>

            {/* Service Links */}
            <div>
              <h6 className="font-bold text-white uppercase text-sm tracking-wider mb-4">
                {tFooter('columns.service')}
              </h6>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-primary transition">FAQ</Link></li>
                <li><Link href="/measurement-guide" className="text-gray-400 hover:text-primary transition">{tHeader('nav.meetgids')}</Link></li>
                <li><Link href="/warranty" className="text-gray-400 hover:text-primary transition">Garantie</Link></li>
              </ul>
            </div>

            {/* Specialist Badge / Review Widget */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg">
                <h6 className="font-display font-bold text-primary text-sm mb-4">
                  {tFooter('columns.specialist')}
                </h6>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <i className="fas fa-check text-primary text-xs"></i>
                    {tFooter('specialist_points.price')}
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <i className="fas fa-check text-primary text-xs"></i>
                    {tFooter('specialist_points.delivery')}
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <i className="fas fa-check text-primary text-xs"></i>
                    {tFooter('specialist_points.advice')}
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
      </ScrollAnimation>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p>© 2024 Window Specialist. Alle rechten voorbehouden.</p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="hover:text-gray-300 transition">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-gray-300 transition">
                  Voorwaarden
                </Link>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3 transition-all duration-300">
              <i className="fab fa-cc-visa text-2xl"></i>
              <i className="fab fa-cc-mastercard text-2xl"></i>
              <i className="fab fa-cc-paypal text-2xl"></i>
              <i className="fas fa-credit-card text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
