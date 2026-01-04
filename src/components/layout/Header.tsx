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
    href: any; // We use 'any' here to avoid complex circular type inference with Pathnames, as proper typing would require importing Pathnames from config which might loop
    badge?: string;
  };

  const plisseHorrenItems: NavItem[] = [
    { name: t('items.horren.deur'), href: '/products/plisse-screens/door', badge: t('badges.populair') },
    { name: t('items.horren.raam'), href: '/products/plisse-screens/window' },
    { name: t('items.horren.balkon'), href: '/products/plisse-screens/glass-balcony' },
    { name: t('items.horren.vaste'), href: '/products/plisse-screens/fixed' },
    { name: t('items.horren.binnen'), href: '/products/plisse-screens/insight' },
    { name: t('items.horren.combi'), href: '/products/plisse-screens/screen-curtain', badge: t('badges.bestseller') },
    { name: t('items.horren.drempel'), href: '/products/plisse-screens/barrier-free' },
  ];

  const plisseGordijnenItems: NavItem[] = [
    { name: t('items.gordijnen.honeycomb'), href: '/products/plisse-curtains/honeycomb', badge: t('badges.bestseller') },
    { name: t('items.gordijnen.verduisterend'), href: '/products/plisse-curtains/blackout', badge: t('badges.populair') },
    { name: t('items.gordijnen.licht'), href: '/products/plisse-curtains/light-filtering' },
    { name: t('items.gordijnen.kleur'), href: '/products/plisse-curtains/colors' },
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
        <div className="hidden lg:block border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-14">
              <nav className="flex space-x-1 items-center w-full justify-center">
                {/* Plissé Horren Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('horren')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/products/plisse-screens"
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t('nav.horren')}
                    <i className="fas fa-chevron-down text-xs ml-1"></i>
                  </Link>
                  {activeDropdown === 'horren' && (
                    <div className="absolute top-full left-0 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 mt-1 z-50">
                      {plisseHorrenItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition"
                        >
                          {item.name}
                          {item.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded ${item.badge === t('badges.bestseller') ? 'bg-yellow-100 text-yellow-700' : 'bg-primary/10 text-primary'
                              }`}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                      <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                        <Link
                          href="/products/plisse-screens"
                          className="flex items-center px-4 py-2 text-sm text-primary font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                          {t('nav.view_all_horren')} <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Plissé Gordijnen Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('gordijnen')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/products/plisse-curtains"
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t('nav.gordijnen')}
                    <i className="fas fa-chevron-down text-xs ml-1"></i>
                  </Link>
                  {activeDropdown === 'gordijnen' && (
                    <div className="absolute top-full left-0 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 mt-1 z-50">
                      {plisseGordijnenItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition"
                        >
                          {item.name}
                          {item.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded ${item.badge === t('badges.bestseller') ? 'bg-yellow-100 text-yellow-700' : 'bg-primary/10 text-primary'
                              }`}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                      <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                        <Link
                          href="/products/plisse-curtains"
                          className="flex items-center px-4 py-2 text-sm text-primary font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                          {t('nav.view_all_gordijnen')} <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/configurator" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  {t('nav.configurator')}
                </Link>
                <Link href="/measurement-guide" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  {t('nav.meetgids')}
                </Link>
                <Link href="/about" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
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
