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
    href: string;
    badge?: string;
    image: string;
  };

  type NavCategory = {
    title: string;
    items: NavItem[];
  };

  const plisseHorrenCategories: NavCategory[] = [
    {
      title: t('categories.soort_hor'),
      items: [
        { name: t('items.horren.inzethorren'), href: '/products/plisse-screens/inset-screens', image: '/images/nav/horren-inset.png' },
        { name: t('items.horren.hordeuren'), href: '/products/plisse-screens/doors', badge: t('badges.populair'), image: '/images/nav/horren-door.png' },
        { name: t('items.horren.voorzethorren'), href: '/products/plisse-screens/fixed', image: '/images/nav/horren-fixed.png' },
        { name: t('items.horren.raamhorren'), href: '/products/plisse-screens/windows', image: '/images/nav/horren-window.png' },
        { name: t('items.horren.rolhorren'), href: '/products/plisse-screens/roller', image: '/images/nav/horren-roller.png' },
        { name: t('items.horren.vliegengordijn'), href: '/products/plisse-screens/fly-curtain', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=400' },
      ]
    },
    {
      title: t('categories.collectie'),
      items: [
        { name: t('items.horren.op_maat'), href: '/products/plisse-screens/custom', badge: t('badges.bestseller'), image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400' },
        { name: t('items.horren.kant_en_klaar'), href: '/products/plisse-screens/ready-made', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400' }
      ]
    }
  ];

  const plisseGordijnenCategories: NavCategory[] = [
    {
      title: t('categories.soort_stof'),
      items: [
        { name: t('items.plisse_gordijnen.verduisterend'), href: '/products/plisse/blackout', image: '/images/nav/curtain-blackout.png' },
        { name: t('items.plisse_gordijnen.lichtdoorlatend'), href: '/products/plisse/light-filtering', image: '/images/nav/curtain-light.png' },
        { name: t('items.plisse_gordijnen.transparant'), href: '/products/plisse/sheer', image: '/images/nav/curtain-sheer.png' },
      ]
    },
    {
      title: t('categories.collectie'),
      items: [
        { name: t('items.plisse_gordijnen.op_maat'), href: '/products/plisse/custom', badge: t('badges.bestseller'), image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400' },
        { name: t('items.plisse_gordijnen.kant_en_klaar'), href: '/products/plisse/ready-made', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400' },
      ]
    }
  ];

  const rolgordijnenCategories: NavCategory[] = [
    {
      title: t('categories.soort_stof'),
      items: [
        { name: t('items.rolgordijnen.verduisterend'), href: '/products/roller-blinds/blackout', image: '/images/nav/curtain-blackout.png' },
        { name: t('items.rolgordijnen.lichtdoorlatend'), href: '/products/roller-blinds/light-filtering', image: '/images/nav/curtain-light.png' },
        { name: t('items.rolgordijnen.transparant'), href: '/products/roller-blinds/sheer', image: '/images/nav/curtain-sheer.png' },
        { name: t('items.rolgordijnen.screen'), href: '/products/roller-blinds/screen', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400' },
      ]
    },
    {
      title: t('categories.collectie'),
      items: [
        { name: t('items.rolgordijnen.op_maat'), href: '/products/roller-blinds/custom', badge: t('badges.bestseller'), image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400' },
        { name: t('items.rolgordijnen.kant_en_klaar'), href: '/products/roller-blinds/ready-made', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400' },
      ]
    }
  ];

  const houtenJaloezieenCategories: NavCategory[] = [
    {
      title: t('categories.lamelbreedte'),
      items: [
        { name: t('items.houten_jaloezieen.lamel_50'), href: '/products/wooden-blinds/50mm', image: 'https://images.unsplash.com/photo-1615876234833-10a8c2f21652?w=400' },
        { name: t('items.houten_jaloezieen.lamel_63'), href: '/products/wooden-blinds/63mm', image: 'https://images.unsplash.com/photo-1593696140826-c58b09b6b80f?w=400' },
      ]
    },
    {
      title: t('categories.materiaal'),
      items: [
        { name: t('items.houten_jaloezieen.bamboe'), href: '/products/wooden-blinds/bamboo', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400' },
        { name: t('items.houten_jaloezieen.basswood'), href: '/products/wooden-blinds/basswood', image: 'https://images.unsplash.com/photo-1620023473138-0c6a5a228383?w=400' },
      ]
    },
    {
      title: t('categories.kleur'),
      items: [
        { name: t('items.houten_jaloezieen.zwart'), href: '/products/wooden-blinds/black', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400' },
        { name: t('items.houten_jaloezieen.wit'), href: '/products/wooden-blinds/white', image: 'https://images.unsplash.com/photo-1594056157018-028f8f03758b?w=400' },
      ]
    }
  ];

  const gordijnenCategories: NavCategory[] = [
    {
      title: t('categories.soort_stof'),
      items: [
        { name: t('items.gordijnen.verduisterend'), href: '/products/curtains/blackout', image: '/images/nav/curtain-blackout.png' },
        { name: t('items.gordijnen.lichtdoorlatend'), href: '/products/curtains/light-filtering', image: '/images/nav/curtain-light.png' },
        { name: t('items.gordijnen.transparant'), href: '/products/curtains/sheer', image: '/images/nav/curtain-sheer.png' },
      ]
    },
    {
      title: t('categories.collectie'),
      items: [
        { name: t('items.gordijnen.overgordijnen'), href: '/products/curtains/drapes', image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=400' },
        { name: t('items.gordijnen.inbetween'), href: '/products/curtains/inbetween', image: '/images/nav/curtain-inbetween.png' },
        { name: t('items.gordijnen.vitrages'), href: '/products/curtains/voiles', image: '/images/nav/curtain-sheer.png' }, // Reuse sheer for vitrages
        { name: t('items.gordijnen.op_maat'), href: '/products/curtains/custom', badge: t('badges.bestseller'), image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400' },
      ]
    },
    {
      title: t('categories.rails_roedes'),
      items: [
        { name: t('items.gordijnen.gordijnrails'), href: '/products/curtains/rails', image: '/images/nav/curtain-rails.png' },
        { name: t('items.gordijnen.gordijnroedes'), href: '/products/curtains/rods', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400' },
        { name: t('items.gordijnen.railroedes'), href: '/products/curtains/rail-rods', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400' },
      ]
    }
  ];

  const duoRolgordijnenCategories: NavCategory[] = [
    {
      title: t('categories.soort_stof'),
      items: [
        { name: t('items.duo_rolgordijnen.verduisterend'), href: '/products/duo-roller-blinds/blackout', image: '/images/nav/curtain-blackout.png' },
        { name: t('items.duo_rolgordijnen.lichtdoorlatend'), href: '/products/duo-roller-blinds/light-filtering', image: '/images/nav/curtain-light.png' },
      ]
    },
    {
      title: t('categories.collectie'),
      items: [
        { name: t('items.duo_rolgordijnen.op_maat'), href: '/products/duo-roller-blinds/custom', badge: t('badges.bestseller'), image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400' },
        { name: t('items.duo_rolgordijnen.kant_en_klaar'), href: '/products/duo-roller-blinds/ready-made', image: 'https://images.unsplash.com/photo-1449824913929-4bba42b8f04b?w=400' },
      ]
    }
  ];

  const vouwgordijnenItems: NavItem[] = [
    { name: t('items.vouwgordijnen.verduisterend'), href: '/products/roman-blinds/blackout', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400' },
    { name: t('items.vouwgordijnen.lichtdoorlatend'), href: '/products/roman-blinds/light-filtering', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400' },
    { name: t('items.vouwgordijnen.inbetween'), href: '/products/roman-blinds/inbetween', image: 'https://images.unsplash.com/photo-1620023473138-0c6a5a228383?w=400' },
    { name: t('items.vouwgordijnen.linen'), href: '/products/roman-blinds/linen', image: 'https://images.unsplash.com/photo-1560410714-a95c34cb3622?w=400' },
  ];

  const serviceContactItems: NavItem[] = [
    { name: t('items.service_contact.bezorging_montage'), href: '/service/delivery', image: '/images/nav/service-delivery.png' },
    { name: t('items.service_contact.faq'), href: '/service/faq', image: '/images/nav/service-faq.png' },
    { name: t('items.service_contact.contact'), href: '/contact', image: '/images/nav/service-contact.png' },
    { name: t('items.service_contact.over_ons'), href: '/about', image: '/images/nav/service-about.png' },
    { name: t('items.service_contact.blog'), href: '/blog', image: '/images/nav/service-blog.png' },
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

                            <div className="grid grid-cols-2 gap-12">
                              {plisseHorrenCategories.map((category, idx) => (
                                <div key={idx}>
                                  <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    {category.title}
                                    <span className="h-px flex-1 bg-gray-100 dark:bg-gray-800"></span>
                                  </h4>
                                  <div className="space-y-4">
                                    {category.items.map((item, itemIdx) => (
                                      <motion.div
                                        key={itemIdx}
                                        initial="hidden"
                                        animate="visible"
                                        custom={itemIdx}
                                        variants={menuItemVariants}
                                      >
                                        <Link
                                          href={item.href as any}
                                          className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                        >
                                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover/item:shadow-md transition-all">
                                            <img
                                              src={item.image}
                                              alt={item.name}
                                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                          </div>
                                          <div className="flex-1 py-1">
                                            <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-sm">
                                              {item.name}
                                            </p>
                                            {item.badge && (
                                              <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge === t('badges.bestseller')
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-primary/10 text-primary'
                                                }`}>
                                                {item.badge}
                                              </span>
                                            )}
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
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

                            <div className="grid grid-cols-2 gap-12">
                              {plisseGordijnenCategories.map((category, idx) => (
                                <div key={idx}>
                                  <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    {category.title}
                                    <span className="h-px flex-1 bg-gray-100 dark:bg-gray-800"></span>
                                  </h4>
                                  <div className="space-y-4">
                                    {category.items.map((item, itemIdx) => (
                                      <motion.div
                                        key={itemIdx}
                                        initial="hidden"
                                        animate="visible"
                                        custom={itemIdx}
                                        variants={menuItemVariants}
                                      >
                                        <Link
                                          href={item.href as any}
                                          className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                        >
                                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover/item:shadow-md transition-all">
                                            <img
                                              src={item.image}
                                              alt={item.name}
                                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                          </div>
                                          <div className="flex-1 py-1">
                                            <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-sm">
                                              {item.name}
                                            </p>
                                            {item.badge && (
                                              <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge === t('badges.bestseller')
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-primary/10 text-primary'
                                                }`}>
                                                {item.badge}
                                              </span>
                                            )}
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
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

                {/* Mega Menu Item: Houten Jaloezieën */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('houten_jaloezieen')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/products/wooden-blinds' as any}
                    className={`relative flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'houten_jaloezieen'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.houten_jaloezieen')}
                    <motion.i
                      className="fas fa-chevron-down text-[10px] ml-1"
                      animate={{ rotate: activeDropdown === 'houten_jaloezieen' ? 180 : 0 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                    />
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === 'houten_jaloezieen' && (
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
                                {t('nav.houten_jaloezieen')}
                              </h3>
                              <Link href={'/products/wooden-blinds' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2">
                                {t('nav.view_all_houten_jaloezieen')}
                                <motion.i
                                  className="fas fa-arrow-right"
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: durations.fast }}
                                />
                              </Link>
                            </motion.div>
                            <div className="grid grid-cols-3 gap-10">
                              {houtenJaloezieenCategories.map((category, idx) => (
                                <div key={idx}>
                                  <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    {category.title}
                                    <span className="h-px flex-1 bg-gray-100 dark:bg-gray-800"></span>
                                  </h4>
                                  <div className="space-y-4">
                                    {category.items.map((item, itemIdx) => (
                                      <motion.div
                                        key={itemIdx}
                                        initial="hidden"
                                        animate="visible"
                                        custom={itemIdx}
                                        variants={menuItemVariants}
                                      >
                                        <Link
                                          href={item.href as any}
                                          className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                        >
                                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover/item:shadow-md transition-all">
                                            <img
                                              src={item.image}
                                              alt={item.name}
                                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                          </div>
                                          <div className="flex-1 py-1">
                                            <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-sm">
                                              {item.name}
                                            </p>
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Menu Item: Gordijnen */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('gordijnen_main')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/products/curtains' as any}
                    className={`relative flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'gordijnen_main'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.gordijnen_main')}
                    <motion.i
                      className="fas fa-chevron-down text-[10px] ml-1"
                      animate={{ rotate: activeDropdown === 'gordijnen_main' ? 180 : 0 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                    />
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === 'gordijnen_main' && (
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
                                {t('nav.gordijnen_main')}
                              </h3>
                              <Link href={'/products/curtains' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2">
                                {t('nav.view_all_gordijnen_main')}
                                <motion.i
                                  className="fas fa-arrow-right"
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: durations.fast }}
                                />
                              </Link>
                            </motion.div>
                            <div className="grid grid-cols-3 gap-10">
                              {gordijnenCategories.map((category, idx) => (
                                <div key={idx}>
                                  <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    {category.title}
                                    <span className="h-px flex-1 bg-gray-100 dark:bg-gray-800"></span>
                                  </h4>
                                  <div className="space-y-4">
                                    {category.items.map((item, itemIdx) => (
                                      <motion.div
                                        key={itemIdx}
                                        initial="hidden"
                                        animate="visible"
                                        custom={itemIdx}
                                        variants={menuItemVariants}
                                      >
                                        <Link
                                          href={item.href as any}
                                          className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                        >
                                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover/item:shadow-md transition-all">
                                            <img
                                              src={item.image}
                                              alt={item.name}
                                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                          </div>
                                          <div className="flex-1 py-1">
                                            <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-sm">
                                              {item.name}
                                            </p>
                                            {item.badge && (
                                              <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge === t('badges.bestseller')
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-primary/10 text-primary'
                                                }`}>
                                                {item.badge}
                                              </span>
                                            )}
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Menu Item: Rolgordijnen */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('rolgordijnen')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/products/roller-blinds' as any}
                    className={`relative flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'rolgordijnen'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.rolgordijnen')}
                    <motion.i
                      className="fas fa-chevron-down text-[10px] ml-1"
                      animate={{ rotate: activeDropdown === 'rolgordijnen' ? 180 : 0 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                    />
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === 'rolgordijnen' && (
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
                                {t('nav.rolgordijnen')}
                              </h3>
                              <Link href={'/products/roller-blinds' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2">
                                {t('nav.view_all_rolgordijnen')}
                                <motion.i
                                  className="fas fa-arrow-right"
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: durations.fast }}
                                />
                              </Link>
                            </motion.div>
                            <div className="grid grid-cols-2 gap-12">
                              {rolgordijnenCategories.map((category, idx) => (
                                <div key={idx}>
                                  <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    {category.title}
                                    <span className="h-px flex-1 bg-gray-100 dark:bg-gray-800"></span>
                                  </h4>
                                  <div className="space-y-4">
                                    {category.items.map((item, itemIdx) => (
                                      <motion.div
                                        key={itemIdx}
                                        initial="hidden"
                                        animate="visible"
                                        custom={itemIdx}
                                        variants={menuItemVariants}
                                      >
                                        <Link
                                          href={item.href as any}
                                          className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                        >
                                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover/item:shadow-md transition-all">
                                            <img
                                              src={item.image}
                                              alt={item.name}
                                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                          </div>
                                          <div className="flex-1 py-1">
                                            <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-sm">
                                              {item.name}
                                            </p>
                                            {item.badge && (
                                              <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge === t('badges.bestseller')
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-primary/10 text-primary'
                                                }`}>
                                                {item.badge}
                                              </span>
                                            )}
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Menu Item: Duo Rolgordijnen */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('duo_rolgordijnen')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/products/double-roller-blinds' as any}
                    className={`relative flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'duo_rolgordijnen'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.duo_rolgordijnen')}
                    <motion.i
                      className="fas fa-chevron-down text-[10px] ml-1"
                      animate={{ rotate: activeDropdown === 'duo_rolgordijnen' ? 180 : 0 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                    />
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === 'duo_rolgordijnen' && (
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
                                {t('nav.duo_rolgordijnen')}
                              </h3>
                              <Link href={'/products/double-roller-blinds' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2">
                                {t('nav.view_all_duo_rolgordijnen')}
                                <motion.i
                                  className="fas fa-arrow-right"
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: durations.fast }}
                                />
                              </Link>
                            </motion.div>
                            <div className="grid grid-cols-2 gap-12">
                              {duoRolgordijnenCategories.map((category, idx) => (
                                <div key={idx}>
                                  <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    {category.title}
                                    <span className="h-px flex-1 bg-gray-100 dark:bg-gray-800"></span>
                                  </h4>
                                  <div className="space-y-4">
                                    {category.items.map((item, itemIdx) => (
                                      <motion.div
                                        key={itemIdx}
                                        initial="hidden"
                                        animate="visible"
                                        custom={itemIdx}
                                        variants={menuItemVariants}
                                      >
                                        <Link
                                          href={item.href as any}
                                          className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                        >
                                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover/item:shadow-md transition-all">
                                            <img
                                              src={item.image}
                                              alt={item.name}
                                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                          </div>
                                          <div className="flex-1 py-1">
                                            <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-sm">
                                              {item.name}
                                            </p>
                                            {item.badge && (
                                              <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge === t('badges.bestseller')
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-primary/10 text-primary'
                                                }`}>
                                                {item.badge}
                                              </span>
                                            )}
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Menu Item: Vouwgordijnen */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('vouwgordijnen')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/products/roman-blinds' as any}
                    className={`relative flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'vouwgordijnen'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.vouwgordijnen')}
                    <motion.i
                      className="fas fa-chevron-down text-[10px] ml-1"
                      animate={{ rotate: activeDropdown === 'vouwgordijnen' ? 180 : 0 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                    />
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === 'vouwgordijnen' && (
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
                                {t('nav.vouwgordijnen')}
                              </h3>
                              <Link href={'/products/roman-blinds' as any} className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center gap-2">
                                {t('nav.view_all_vouwgordijnen')}
                                <motion.i
                                  className="fas fa-arrow-right"
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: durations.fast }}
                                />
                              </Link>
                            </motion.div>
                            <div className="grid grid-cols-2 gap-4">
                              {vouwgordijnenItems.map((item, index) => (
                                <motion.div
                                  key={index}
                                  custom={index}
                                  initial="hidden"
                                  animate="visible"
                                  variants={menuItemVariants}
                                >
                                  <Link
                                    href={item.href as any}
                                    className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                  >
                                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover/item:shadow-md transition-all">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                      />
                                    </div>
                                    <div className="flex-1 py-1">
                                      <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-sm">
                                        {item.name}
                                      </p>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Menu Item: Service & Contact */}
                <div
                  className="group"
                  onMouseEnter={() => setActiveDropdown('service_contact')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={'/contact' as any}
                    className={`relative flex items-center gap-1 px-5 py-2 text-sm font-semibold tracking-wide transition rounded-full ${activeDropdown === 'service_contact'
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {t('nav.service_contact')}
                    <motion.i
                      className="fas fa-chevron-down text-[10px] ml-1"
                      animate={{ rotate: activeDropdown === 'service_contact' ? 180 : 0 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                    />
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === 'service_contact' && (
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
                                {t('nav.service_contact')}
                              </h3>
                            </motion.div>
                            <div className="grid grid-cols-2 gap-4">
                              {serviceContactItems.map((item, index) => (
                                <motion.div
                                  key={index}
                                  custom={index}
                                  initial="hidden"
                                  animate="visible"
                                  variants={menuItemVariants}
                                >
                                  <Link
                                    href={item.href as any}
                                    className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                  >
                                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover/item:shadow-md transition-all">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                      />
                                    </div>
                                    <div className="flex-1 py-1">
                                      <p className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary transition-colors text-sm">
                                        {item.name}
                                      </p>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
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
        </div >

        {/* Mobile Menu with slide animation */}
        <AnimatePresence>
          {
            mobileMenuOpen && (
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
                    {plisseHorrenCategories.flatMap(c => c.items).slice(0, 4).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link href={item.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
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
                    {plisseGordijnenCategories.flatMap(c => c.items).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link href={item.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="px-4 py-2 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.houten_jaloezieen')}</p>
                    {houtenJaloezieenCategories.flatMap(c => c.items).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link href={item.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="px-4 py-2 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.26 }}
                  >
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.gordijnen_main')}</p>
                    {gordijnenCategories.flatMap(c => c.items).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link href={item.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="px-4 py-2 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.265 }}
                  >
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.rolgordijnen')}</p>
                    {rolgordijnenCategories.flatMap(c => c.items).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link href={item.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="px-4 py-2 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.27 }}
                  >
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.duo_rolgordijnen')}</p>
                    {duoRolgordijnenCategories.flatMap(c => c.items).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link href={item.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="px-4 py-2 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.28 }}
                  >
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.vouwgordijnen')}</p>
                    {vouwgordijnenItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link href={item.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="px-4 py-2 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.29 }}
                  >
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('nav.service_contact')}</p>
                    {serviceContactItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link href={item.href as any} className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
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
            )
          }
        </AnimatePresence >
      </header >

      {/* Auth Modal */}
      < AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />

      {/* Enhanced Search Modal */}
      <AnimatePresence>
        {
          isSearchOpen && (
            <EnhancedSearch
              variant="modal"
              onClose={() => setIsSearchOpen(false)}
            />
          )
        }
      </AnimatePresence >
    </>
  );
};

export default Header;
