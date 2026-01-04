'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TopBar from './TopBar';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <Link href="/" className="bg-white p-2 rounded-lg">
                <img
                  alt="Window Specialist"
                  className="h-12 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiOHYaezIngx-RMwWkJuHRfWDsrwx4KRoy_Xi5wXv2vnGaqtzn7s3qAN72VdyaCAp_bagTDWZz2D6T5eTHLFOhqn7ofuaoT0i0ua61oiTys3oveTqqBoRv4cbyhQV4b_cVFDZn-V7IciDJLXXEuQJhnYLB8lkEcC1skHWqejaKxKxF3QmQZVMnKFS4BvyLy1C901DJwJT_Wuw5alCecWfCMT5yPxDR0aUkDbdlzZoz-v4XZplwMfxXF5C7ZFgZfN632wb8877baAHb"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/producten/raamdecoratie" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition">
                Raamdecoratie
              </Link>
              <Link href="/producten/horren" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition">
                Horren
              </Link>
              <Link href="/configurator" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition">
                Configurator
              </Link>
              <Link href="/over-ons" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition">
                Over Ons
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary">
                <i className="fas fa-search text-xl"></i>
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary relative">
                <i className="fas fa-shopping-cart text-xl"></i>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition"
              >
                {isDark ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon"></i>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link href="/producten/raamdecoratie" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition px-4 py-2">
                  Raamdecoratie
                </Link>
                <Link href="/producten/horren" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition px-4 py-2">
                  Horren
                </Link>
                <Link href="/configurator" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition px-4 py-2">
                  Configurator
                </Link>
                <Link href="/over-ons" className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition px-4 py-2">
                  Over Ons
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
