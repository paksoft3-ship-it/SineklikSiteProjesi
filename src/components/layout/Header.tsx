'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/navigation';
import TopBar from './TopBar';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/context/AuthContext';
import { AuthModal, UserDropdown } from '@/components/auth';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const t = useTranslations('Header');
  const { isAuthenticated, isLoading } = useAuth();



  type NavItem = {
    name: string;
    href: any;
    badge?: string;
    image: string;
  };

  const plisseHorrenItems: NavItem[] = [
    { name: t('items.horren.deur'), href: '/products/plisse-screens/door', badge: t('badges.populair'), image: '/images/nav/nav-hor-deur.jpg' },
    { name: t('items.horren.raam'), href: '/products/plisse-screens/window', image: '/images/nav/nav-hor-raam.jpg' },
    { name: t('items.horren.balkon'), href: '/products/plisse-screens/glass-balcony', image: '/images/nav/nav-hor-balkon.jpg' },
    { name: t('items.horren.vaste'), href: '/products/plisse-screens/fixed', image: '/images/nav/nav-hor-vaste.jpg' },
    { name: t('items.horren.binnen'), href: '/products/plisse-screens/insight', image: '/images/nav/nav-hor-binnen.jpg' },
    { name: t('items.horren.combi'), href: '/products/plisse-screens/screen-curtain', badge: t('badges.bestseller'), image: '/images/nav/nav-hor-combi.jpg' },
    { name: t('items.horren.drempel'), href: '/products/plisse-screens/barrier-free', image: '/images/nav/nav-hor-drempel.jpg' },
  ];

  const plisseGordijnenItems: NavItem[] = [
    { name: t('items.gordijnen.honeycomb'), href: '/products/plisse-curtains/honeycomb', badge: t('badges.bestseller'), image: '/images/nav/nav-gordijn-honeycomb.jpg' },
    { name: t('items.gordijnen.verduisterend'), href: '/products/plisse-curtains/blackout', badge: t('badges.populair'), image: '/images/nav/nav-gordijn-verduisterend.jpg' },
    { name: t('items.gordijnen.licht'), href: '/products/plisse-curtains/light-filtering', image: '/images/nav/nav-gordijn-licht.jpg' },
    { name: t('items.gordijnen.kleur'), href: '/products/plisse-curtains/colors', image: '/images/nav/nav-gordijn-kleur.jpg' },
  ];

  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Navigation */}
      {/* Header Container */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-bg-dark-2/90 backdrop-blur-md shadow-sm">

        {/* Row 2: Logo and Actions */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo (Left) */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="bg-white p-2 rounded-lg shadow-sm">
                  <span className="font-display font-bold text-xl">
                    <span className="text-secondary">Window</span>
                    <span className="text-primary">Specialist</span>
                  </span>
                </Link>
              </div>

              {/* Actions (Right) */}
              <div className="flex items-center space-x-4">
                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-4">
                  {/* Auth Section */}
                  {isLoading ? (
                    <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                  ) : isAuthenticated ? (
                    <UserDropdown />
                  ) : (
                    <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full hover:shadow-md transition-all duration-300 hover:border-primary/50">
                      <button
                        onClick={() => {
                          setAuthMode('signup');
                          setIsAuthModalOpen(true);
                        }}
                        className="group flex items-center gap-2 pl-4 pr-3 py-2.5 rounded-l-full"
                      >
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">
                          Sign up with Google
                        </span>
                      </button>

                      <div className="h-4 w-px bg-gray-200 dark:bg-gray-600"></div>

                      <button
                        onClick={() => {
                          setAuthMode('login');
                          setIsAuthModalOpen(true);
                        }}
                        className="group pl-3 pr-4 py-2.5 rounded-r-full"
                      >
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                          Login / Sign up
                        </span>
                      </button>
                    </div>
                  )}

                  <LanguageSwitcher />

                  <button className="text-gray-600 dark:text-gray-300 hover:text-primary p-2">
                    <i className="fas fa-search text-lg"></i>
                  </button>
                  <button className="text-gray-600 dark:text-gray-300 hover:text-primary relative p-2">
                    <i className="fas fa-shopping-cart text-lg"></i>
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </button>

                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                  <LanguageSwitcher />
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none p-2"
                  >
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Navigation (Desktop Only) */}
        <div className="hidden lg:block border-b border-gray-200 dark:border-gray-700 relative z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center h-14">
              <nav className="flex space-x-1 items-center w-full justify-center">

                {/* Mega Menu Item: Plissé Horren */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('horren')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/products/plisse-screens' as any}
                    className={`flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'horren'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.horren')}
                    <i className={`fas fa-chevron-down text-[10px] ml-1 transition-transform duration-300 ${activeDropdown === 'horren' ? 'rotate-180' : ''}`}></i>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={`absolute top-full left-0 pt-4 w-full transition-all duration-300 origin-top ${activeDropdown === 'horren' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden max-h-[70vh] overflow-y-auto">
                      <div className="p-8">
                        <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                          <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                            {t('nav.horren')}
                          </h3>
                          <Link href={'/products/plisse-screens' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2">
                            {t('nav.view_all_horren')} <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>

                        <div className="grid grid-cols-5 gap-6">
                          {plisseHorrenItems.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="group/item block relative"
                            >
                              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100 dark:bg-gray-800 relative">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/10 transition-colors duration-300" />

                                {/* Badge */}
                                {item.badge && (
                                  <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm ${item.badge === t('badges.bestseller')
                                    ? 'bg-yellow-400 text-yellow-900'
                                    : 'bg-primary text-white'
                                    }`}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-center text-sm">
                                {item.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Footer / CTA area inside dropdown (Optional) */}
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {t('nav.custom_sizes_available')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mega Menu Item: Plissé Gordijnen */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('gordijnen')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/products/plisse-curtains' as any}
                    className={`flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'gordijnen'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.gordijnen')}
                    <i className={`fas fa-chevron-down text-[10px] ml-1 transition-transform duration-300 ${activeDropdown === 'gordijnen' ? 'rotate-180' : ''}`}></i>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={`absolute top-full left-0 pt-4 w-full transition-all duration-300 origin-top ${activeDropdown === 'gordijnen' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden max-h-[70vh] overflow-y-auto">
                      <div className="p-8">
                        <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                          <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                            {t('nav.gordijnen')}
                          </h3>
                          <Link href={'/products/plisse-curtains' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2">
                            {t('nav.view_all_gordijnen')} <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>

                        <div className="grid grid-cols-5 gap-6">
                          {plisseGordijnenItems.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="group/item block relative"
                            >
                              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100 dark:bg-gray-800 relative">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/10 transition-colors duration-300" />

                                {item.badge && (
                                  <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm ${item.badge === t('badges.bestseller')
                                    ? 'bg-yellow-400 text-yellow-900'
                                    : 'bg-primary text-white'
                                    }`}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-center text-sm">
                                {item.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {t('nav.premium_fabrics')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href={'/configurator' as any} className="px-5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">
                  {t('nav.configurator')}
                </Link>
                <Link href={'/measurement-guide' as any} className="px-5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">
                  {t('nav.meetgids')}
                </Link>
                <Link href={'/about' as any} className="px-5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">
                  {t('nav.over_ons')}
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Moved inside header container for sticky behavior if possible, or outside for overlay) */}
        {/* Keeping existing mobile logic but ensuring it renders below the header container if needed */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-y-auto max-h-[80vh]">
            <div className="flex flex-col space-y-2 py-4">
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.horren')}</p>
                {plisseHorrenItems.slice(0, 4).map((item, index) => (
                  <Link key={index} href={item.href} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary">
                    {item.name}
                  </Link>
                ))}
                <Link href="/products/plisse-screens" className="block py-2 text-primary font-semibold">
                  {t('nav.view_all_horren')} →
                </Link>
              </div>
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.gordijnen')}</p>
                {plisseGordijnenItems.map((item, index) => (
                  <Link key={index} href={item.href} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                <Link href="/configurator" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium">
                  {t('nav.configurator')}
                </Link>
                <Link href="/measurement-guide" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium">
                  {t('nav.meetgids')}
                </Link>
                <Link href="/about" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium">
                  {t('nav.over_ons')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;
