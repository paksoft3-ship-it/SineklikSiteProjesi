'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/navigation';
import TopBar from './TopBar';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/context/AuthContext';
import { AuthModal, UserDropdown } from '@/components/auth';
import EnhancedSearch from '@/components/search/EnhancedSearch';
import { dropdownVariants, mobileMenuVariants, badgePulseVariants } from '@/lib/animation-variants';
import { easings, durations, delays } from '@/lib/animation-config';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const t = useTranslations('Header');
  const { isAuthenticated, isLoading } = useAuth();

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  type NavItem = {
    name: string;
    href: any;
    badge?: string;
    image: string;
  };

  const plisseHorrenItems: NavItem[] = [
    { name: t('items.horren.deur'), href: '/products/plisse-screens/door', badge: t('badges.populair'), image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400' },
    { name: t('items.horren.raam'), href: '/products/plisse-screens/window', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400' },
    { name: t('items.horren.balkon'), href: '/products/plisse-screens/glass-balcony', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400' },
    { name: t('items.horren.vaste'), href: '/products/plisse-screens/fixed', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400' },
    { name: t('items.horren.binnen'), href: '/products/plisse-screens/insight', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400' },
    { name: t('items.horren.combi'), href: '/products/plisse-screens/screen-curtain', badge: t('badges.bestseller'), image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400' },
    { name: t('items.horren.drempel'), href: '/products/plisse-screens/barrier-free', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=400' },
  ];

  const plisseGordijnenItems: NavItem[] = [
    { name: t('items.gordijnen.honeycomb'), href: '/products/plisse-curtains/honeycomb', badge: t('badges.bestseller'), image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400' },
    { name: t('items.gordijnen.verduisterend'), href: '/products/plisse-curtains/blackout', badge: t('badges.populair'), image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400' },
    { name: t('items.gordijnen.licht'), href: '/products/plisse-curtains/light-filtering', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=400' },
    { name: t('items.gordijnen.kleur'), href: '/products/plisse-curtains/colors', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400' },
  ];

  // Animation variants for dropdown items
  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delays.stagger,
        duration: durations.fast,
        ease: easings.smooth,
      },
    }),
  };

  // Icon button animation
  const iconButtonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: durations.fast, ease: easings.snappy } },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-bg-dark-2/90 backdrop-blur-md shadow-sm">

        {/* Row 2: Logo and Actions */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo (Left) with hover animation */}
              <motion.div
                className="flex-shrink-0 flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: durations.fast, ease: easings.smooth }}
              >
                <Link href="/" className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="font-display font-bold text-xl">
                    <span className="text-secondary">Window</span>
                    <span className="text-primary">Specialist</span>
                  </span>
                </Link>
              </motion.div>

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
                    <motion.div
                      className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full hover:shadow-md transition-all duration-300 hover:border-primary/50"
                      whileHover={{ y: -2 }}
                      transition={{ duration: durations.fast }}
                    >
                      <button
                        onClick={() => {
                          setAuthMode('signup');
                          setIsAuthModalOpen(true);
                        }}
                        className="group flex items-center gap-2 pl-4 pr-3 py-2.5 rounded-l-full"
                      >
                        <motion.img
                          src="https://www.google.com/favicon.ico"
                          alt="Google"
                          className="w-4 h-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">
                          {t('auth.sign_up_google')}
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
                          {t('auth.login_signup')}
                        </span>
                      </button>
                    </motion.div>
                  )}

                  <LanguageSwitcher />

                  <motion.button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={t('search.open')}
                  >
                    <i className="fas fa-search text-sm"></i>
                    <span className="text-sm hidden xl:inline">{t('search.placeholder')}</span>
                    <kbd className="hidden xl:inline-block px-1.5 py-0.5 bg-white dark:bg-gray-700 rounded text-xs text-gray-400">
                      ⌘K
                    </kbd>
                  </motion.button>

                  <motion.button
                    className="text-gray-600 dark:text-gray-300 hover:text-primary relative p-2"
                    variants={iconButtonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <i className="fas fa-shopping-cart text-lg"></i>
                    <motion.span
                      className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                      initial="initial"
                      animate="pulse"
                      variants={badgePulseVariants}
                    >
                      0
                    </motion.span>
                  </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                  <LanguageSwitcher />
                  <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none p-2"
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.i
                      className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}
                      animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                      transition={{ duration: durations.fast }}
                    />
                  </motion.button>
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
                    className={`relative flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'horren'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.horren')}
                    <motion.i
                      className="fas fa-chevron-down text-[10px] ml-1"
                      animate={{ rotate: activeDropdown === 'horren' ? 180 : 0 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                    />
                  </Link>

                  {/* Mega Menu Dropdown with Framer Motion */}
                  <AnimatePresence>
                    {activeDropdown === 'horren' && (
                      <motion.div
                        className="absolute top-full left-0 pt-4 w-full"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                      >
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden max-h-[70vh] overflow-y-auto">
                          <div className="p-8">
                            <motion.div
                              className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-800 pb-4"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1, duration: durations.fast }}
                            >
                              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                                {t('nav.horren')}
                              </h3>
                              <Link href={'/products/plisse-screens' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2 group/link">
                                {t('nav.view_all_horren')}
                                <motion.i
                                  className="fas fa-arrow-right"
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: durations.fast }}
                                />
                              </Link>
                            </motion.div>

                            <div className="grid grid-cols-5 gap-6">
                              {plisseHorrenItems.map((item, index) => (
                                <motion.div
                                  key={index}
                                  custom={index}
                                  initial="hidden"
                                  animate="visible"
                                  variants={menuItemVariants}
                                >
                                  <Link
                                    href={item.href}
                                    className="group/item block relative"
                                  >
                                    <motion.div
                                      className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100 dark:bg-gray-800 relative"
                                      whileHover={{ y: -4 }}
                                      transition={{ duration: durations.fast }}
                                    >
                                      <motion.img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: durations.slow }}
                                      />
                                      <motion.div
                                        className="absolute inset-0 bg-black/0"
                                        whileHover={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                                        transition={{ duration: durations.fast }}
                                      />

                                      {item.badge && (
                                        <motion.span
                                          className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm ${item.badge === t('badges.bestseller')
                                            ? 'bg-yellow-400 text-yellow-900'
                                            : 'bg-primary text-white'
                                            }`}
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          transition={{ delay: index * 0.05 + 0.2, type: 'spring', stiffness: 500 }}
                                        >
                                          {item.badge}
                                        </motion.span>
                                      )}
                                    </motion.div>
                                    <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-center text-sm">
                                      {item.name}
                                    </p>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <motion.div
                            className="bg-gray-50 dark:bg-gray-800/50 p-4 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {t('nav.custom_sizes_available')}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Menu Item: Plissé Gordijnen */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('gordijnen')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/products/plisse-curtains' as any}
                    className={`relative flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'gordijnen'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.gordijnen')}
                    <motion.i
                      className="fas fa-chevron-down text-[10px] ml-1"
                      animate={{ rotate: activeDropdown === 'gordijnen' ? 180 : 0 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                    />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === 'gordijnen' && (
                      <motion.div
                        className="absolute top-full left-0 pt-4 w-full"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                      >
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden max-h-[70vh] overflow-y-auto">
                          <div className="p-8">
                            <motion.div
                              className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-800 pb-4"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1, duration: durations.fast }}
                            >
                              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                                {t('nav.gordijnen')}
                              </h3>
                              <Link href={'/products/plisse-curtains' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2">
                                {t('nav.view_all_gordijnen')}
                                <motion.i
                                  className="fas fa-arrow-right"
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: durations.fast }}
                                />
                              </Link>
                            </motion.div>

                            <div className="grid grid-cols-5 gap-6">
                              {plisseGordijnenItems.map((item, index) => (
                                <motion.div
                                  key={index}
                                  custom={index}
                                  initial="hidden"
                                  animate="visible"
                                  variants={menuItemVariants}
                                >
                                  <Link
                                    href={item.href}
                                    className="group/item block relative"
                                  >
                                    <motion.div
                                      className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100 dark:bg-gray-800 relative"
                                      whileHover={{ y: -4 }}
                                      transition={{ duration: durations.fast }}
                                    >
                                      <motion.img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: durations.slow }}
                                      />
                                      <motion.div
                                        className="absolute inset-0 bg-black/0"
                                        whileHover={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                                        transition={{ duration: durations.fast }}
                                      />

                                      {item.badge && (
                                        <motion.span
                                          className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm ${item.badge === t('badges.bestseller')
                                            ? 'bg-yellow-400 text-yellow-900'
                                            : 'bg-primary text-white'
                                            }`}
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          transition={{ delay: index * 0.05 + 0.2, type: 'spring', stiffness: 500 }}
                                        >
                                          {item.badge}
                                        </motion.span>
                                      )}
                                    </motion.div>
                                    <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-center text-sm">
                                      {item.name}
                                    </p>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <motion.div
                            className="bg-gray-50 dark:bg-gray-800/50 p-4 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {t('nav.premium_fabrics')}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Nav Links with animated underline */}
                {[
                  { href: '/configurator', label: t('nav.configurator') },
                  { href: '/measurement-guide', label: t('nav.meetgids') },
                  { href: '/tools', label: t('nav.tools') },
                  { href: '/showcase', label: t('nav.showcase') },
                  { href: '/about', label: t('nav.over_ons') },
                ].map((link) => (
                  <motion.div
                    key={link.href}
                    className="relative"
                    whileHover="hover"
                    initial="rest"
                  >
                    <Link
                      href={link.href as any}
                      className="px-5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-y-auto max-h-[80vh]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col space-y-2 py-4">
                <motion.div
                  className="px-4 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.horren')}</p>
                  {plisseHorrenItems.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link href={item.href} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <Link href="/products/plisse-screens" className="block py-2 text-primary font-semibold">
                    {t('nav.view_all_horren')} →
                  </Link>
                </motion.div>

                <motion.div
                  className="px-4 py-2 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.gordijnen')}</p>
                  {plisseGordijnenItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <Link href={item.href} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="px-4 py-2 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    { href: '/configurator', label: t('nav.configurator') },
                    { href: '/measurement-guide', label: t('nav.meetgids') },
                    { href: '/tools', label: t('nav.tools') },
                    { href: '/showcase', label: t('nav.showcase') },
                    { href: '/about', label: t('nav.over_ons') },
                  ].map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <Link href={link.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition-colors">
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />

      {/* Enhanced Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <EnhancedSearch
            variant="modal"
            onClose={() => setIsSearchOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
