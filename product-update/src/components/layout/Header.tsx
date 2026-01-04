'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TopBar from './TopBar';

const plisseHorrenItems = [
  { name: 'Plissé Hordeur', href: '/producten/plisse-horren/deur', badge: 'Populair' },
  { name: 'Plissé Raamhor', href: '/producten/plisse-horren/raam' },
  { name: 'Glazen Balkon Hor', href: '/producten/plisse-horren/glazen-balkon' },
  { name: 'Vaste Plissé Hor', href: '/producten/plisse-horren/vaste-hor' },
  { name: 'Binnenmontage Hor', href: '/producten/plisse-horren/binnenmontage' },
  { name: 'Hor + Gordijn Combi', href: '/producten/plisse-horren/hor-gordijn-combinatie', badge: 'Bestseller' },
  { name: 'Drempelloze Hor', href: '/producten/plisse-horren/drempelloos' },
];

const plisseGordijnenItems = [
  { name: 'Honeycomb / Duette', href: '/producten/plisse-gordijnen/honeycomb', badge: 'Bestseller' },
  { name: 'Verduisterend Plissé', href: '/producten/plisse-gordijnen/verduisterend', badge: 'Populair' },
  { name: 'Lichtdoorlatend (70%)', href: '/producten/plisse-gordijnen/lichtdoorlatend' },
  { name: 'Kleuropties & Stalen', href: '/producten/plisse-gordijnen/kleuropties' },
];

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-bg-dark-2/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="bg-white p-2 rounded-lg shadow-sm">
                <span className="font-display font-bold text-xl">
                  <span className="text-secondary">Window</span>
                  <span className="text-primary">Specialist</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1 items-center">
              {/* Plissé Horren Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('horren')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/producten/plisse-horren" 
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Plissé Horren
                  <i className="fas fa-chevron-down text-xs ml-1"></i>
                </Link>
                {activeDropdown === 'horren' && (
                  <div className="absolute top-full left-0 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 mt-1">
                    {plisseHorrenItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition"
                      >
                        {item.name}
                        {item.badge && (
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            item.badge === 'Bestseller' ? 'bg-yellow-100 text-yellow-700' : 'bg-primary/10 text-primary'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                      <Link
                        href="/producten/plisse-horren"
                        className="flex items-center px-4 py-2 text-sm text-primary font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        Alle horren bekijken <i className="fas fa-arrow-right ml-2"></i>
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
                  href="/producten/plisse-gordijnen" 
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Plissé Gordijnen
                  <i className="fas fa-chevron-down text-xs ml-1"></i>
                </Link>
                {activeDropdown === 'gordijnen' && (
                  <div className="absolute top-full left-0 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 mt-1">
                    {plisseGordijnenItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition"
                      >
                        {item.name}
                        {item.badge && (
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            item.badge === 'Bestseller' ? 'bg-yellow-100 text-yellow-700' : 'bg-primary/10 text-primary'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                      <Link
                        href="/producten/plisse-gordijnen"
                        className="flex items-center px-4 py-2 text-sm text-primary font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        Alle gordijnen bekijken <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/configurator" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Configurator
              </Link>
              <Link href="/meetgids" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Meetgids
              </Link>
              <Link href="/over-ons" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Over Ons
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/stalen" className="text-sm font-medium text-primary hover:text-blue-700 transition">
                <i className="fas fa-swatchbook mr-1"></i> Gratis stalen
              </Link>
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary p-2">
                <i className="fas fa-search text-lg"></i>
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary relative p-2">
                <i className="fas fa-shopping-cart text-lg"></i>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition"
              >
                {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none p-2"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                <div className="px-4 py-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Plissé Horren</p>
                  {plisseHorrenItems.slice(0, 4).map((item, index) => (
                    <Link key={index} href={item.href} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary">
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/producten/plisse-horren" className="block py-2 text-primary font-semibold">
                    Alle horren →
                  </Link>
                </div>
                <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Plissé Gordijnen</p>
                  {plisseGordijnenItems.map((item, index) => (
                    <Link key={index} href={item.href} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/configurator" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium">
                    Configurator
                  </Link>
                  <Link href="/meetgids" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium">
                    Meetgids
                  </Link>
                  <Link href="/over-ons" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium">
                    Over Ons
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
