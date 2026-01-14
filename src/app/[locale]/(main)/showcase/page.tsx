'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

// Import all components
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import TiltCard, {
  FloatingCard,
  MagneticButton,
  GlassCard,
  SpotlightCard,
  MorphCard,
} from '@/components/ui/TiltCard';
import { LiveViewers, StockWarning, UrgencyTimer, TrendingBadge } from '@/components/ui/SocialProof';
import { TrustBadgesBar, PaymentBadges, SecurityBadge, ReviewSummary, GuaranteeBadge, CertificationBadges } from '@/components/ui/TrustBadges';
import LightboxGallery, { MasonryGallery } from '@/components/ui/LightboxGallery';
import CurtainDemo, { BlindDemo, RollerShadeDemo } from '@/components/ui/CurtainDemo';
import { CharacterReveal, WordReveal, BlurReveal, Typewriter, AnimatedCounter, GradientTextReveal } from '@/components/animations/TextReveal';
import { EcoBadge } from '@/components/sustainability/SustainabilityDashboard';
import Badge, {
  StatusBadge,
  CountBadge,
  CategoryBadge,
  DiscountBadge,
  NewBadge,
  BestsellerBadge,
  RatingBadge,
  ShippingBadge,
} from '@/components/ui/Badge';

const sampleImages = [
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', alt: 'Living Room', caption: 'Modern living room with natural light' },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600', alt: 'Bedroom', caption: 'Cozy bedroom setup' },
  { src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600', alt: 'Modern Room', caption: 'Contemporary interior design' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', alt: 'Kitchen', caption: 'Bright kitchen space' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', alt: 'Attic', caption: 'Stylish attic room' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', alt: 'Balcony', caption: 'Beautiful balcony view' },
];

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [counter, setCounter] = useState(2547);
  const [selectedBadges, setSelectedBadges] = useState<string[]>(['option1']);
  const [notificationCount, setNotificationCount] = useState(5);
  const t = useTranslations('ShowcasePage');
  const tHome = useTranslations('HomePage');

  const futureDate = new Date();
  futureDate.setHours(futureDate.getHours() + 5);

  const categories = [
    { id: 'all', label: t('categories.all'), icon: 'fa-th-large' },
    { id: 'ui', label: t('categories.ui'), icon: 'fa-cube' },
    { id: 'cards', label: 'Cards', icon: 'fa-clone' },
    { id: 'badges', label: 'Badges', icon: 'fa-tag' },
    { id: 'social', label: t('categories.social'), icon: 'fa-users' },
    { id: 'trust', label: t('categories.trust'), icon: 'fa-shield-alt' },
    { id: 'animations', label: t('categories.animations'), icon: 'fa-magic' },
  ];

  const shouldShow = (category: string) => activeCategory === 'all' || activeCategory === category;

  const toggleBadge = (badge: string) => {
    setSelectedBadges(prev =>
      prev.includes(badge) ? prev.filter(b => b !== badge) : [...prev, badge]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-bg-dark-1">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary via-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`fas ${cat.icon} text-xs`}></i>
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* UI Components */}
        <AnimatePresence>
          {shouldShow('ui') && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-cube text-primary"></i>
                {t('categories.ui')}
              </h2>

              <div className="grid gap-8">
                {/* Before/After Slider */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">BeforeAfterSlider</h3>
                  <p className="text-sm text-gray-500 mb-4">Interactive comparison slider with smooth drag functionality</p>
                  <div className="max-w-lg">
                    <BeforeAfterSlider
                      beforeImage="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"
                      afterImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600"
                      beforeLabel={tHome('beforeAfter.before')}
                      afterLabel={tHome('beforeAfter.after')}
                    />
                  </div>
                </div>

                {/* Curtain Demo */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">CurtainDemo</h3>
                  <p className="text-sm text-gray-500 mb-4">Interactive curtain with light/dark room effect - toggle to open/close</p>
                  <CurtainDemo />
                </div>

                {/* Blind Demo */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">BlindDemo</h3>
                  <p className="text-sm text-gray-500 mb-4">Vertical blinds with adjustable angle for light control</p>
                  <BlindDemo />
                </div>

                {/* Roller Shade Demo */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">RollerShadeDemo</h3>
                  <p className="text-sm text-gray-500 mb-4">Roller shade with smooth sliding control</p>
                  <RollerShadeDemo />
                </div>

                {/* Tools Links */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Tools</h3>
                  <p className="text-sm text-gray-500 mb-4">Interactive tools for customers</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: 'Product Quiz', link: '/tools/quiz', icon: 'fa-clipboard-list', color: 'bg-blue-500', desc: 'Find your perfect product' },
                      { title: 'Color Matcher', link: '/tools/color-matcher', icon: 'fa-palette', color: 'bg-purple-500', desc: 'Match colors to your interior' },
                      { title: 'Appointment Planner', link: '/tools/scheduler', icon: 'fa-calendar-check', color: 'bg-green-500', desc: 'Schedule a consultation' },
                      { title: 'Energy Calculator', link: '/tools/sustainability', icon: 'fa-leaf', color: 'bg-teal-500', desc: 'Calculate energy savings' },
                      { title: 'Virtual Showroom', link: '/tools/showroom', icon: 'fa-vr-cardboard', color: 'bg-indigo-500', desc: 'Explore products in 3D' },
                    ].map((tool) => (
                      <Link key={tool.link} href={tool.link as any}>
                        <motion.div
                          className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition group"
                          whileHover={{ x: 5 }}
                        >
                          <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                            <i className={`fas ${tool.icon} text-lg`}></i>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{tool.title}</h3>
                            <p className="text-sm text-gray-500">{tool.desc}</p>
                          </div>
                          <i className="fas fa-chevron-right text-gray-400 group-hover:text-primary transition-colors"></i>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">LightboxGallery</h3>
                  <p className="text-sm text-gray-500 mb-4">Click any image to open fullscreen with zoom controls</p>
                  <LightboxGallery images={sampleImages} columns={4} />
                </div>

                {/* Masonry Gallery */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">MasonryGallery</h3>
                  <p className="text-sm text-gray-500 mb-4">Pinterest-style masonry layout with lightbox</p>
                  <MasonryGallery images={sampleImages.slice(0, 4)} columns={3} />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Card Components */}
        <AnimatePresence>
          {shouldShow('cards') && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-clone text-primary"></i>
                Interactive Cards
              </h2>

              <div className="grid gap-8">
                {/* Tilt Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">TiltCard</h3>
                  <p className="text-sm text-gray-500 mb-4">3D tilt effect following cursor with glare and shine</p>
                  <div className="flex flex-wrap gap-6">
                    <TiltCard className="w-56 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-xl">
                      <div className="text-center">
                        <i className="fas fa-cube text-3xl mb-2"></i>
                        <p>Hover for 3D</p>
                      </div>
                    </TiltCard>
                    <TiltCard borderGlow className="w-56 h-36 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold shadow-xl">
                      <div className="text-center">
                        <i className="fas fa-lightbulb text-3xl mb-2"></i>
                        <p>With Glow</p>
                      </div>
                    </TiltCard>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">FloatingCard</h3>
                  <p className="text-sm text-gray-500 mb-4">Multiple animation modes: vertical, horizontal, orbit, wave, bounce</p>
                  <div className="flex flex-wrap gap-8 items-end">
                    <div className="text-center">
                      <FloatingCard mode="vertical" className="w-32 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold mb-2">
                        Vertical
                      </FloatingCard>
                      <span className="text-xs text-gray-500">mode="vertical"</span>
                    </div>
                    <div className="text-center">
                      <FloatingCard mode="orbit" className="w-32 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold mb-2">
                        Orbit
                      </FloatingCard>
                      <span className="text-xs text-gray-500">mode="orbit"</span>
                    </div>
                    <div className="text-center">
                      <FloatingCard mode="bounce" className="w-32 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold mb-2">
                        Bounce
                      </FloatingCard>
                      <span className="text-xs text-gray-500">mode="bounce"</span>
                    </div>
                    <div className="text-center">
                      <FloatingCard mode="wave" className="w-32 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold mb-2">
                        Wave
                      </FloatingCard>
                      <span className="text-xs text-gray-500">mode="wave"</span>
                    </div>
                  </div>
                </div>

                {/* Magnetic Button */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">MagneticButton</h3>
                  <p className="text-sm text-gray-500 mb-4">Button follows cursor with magnetic effect, ripple on click</p>
                  <div className="flex flex-wrap gap-4">
                    <MagneticButton ripple className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-bold shadow-lg">
                      Click for Ripple
                    </MagneticButton>
                    <MagneticButton ripple glow glowColor="rgba(139, 92, 246, 0.5)" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold shadow-lg">
                      With Glow
                    </MagneticButton>
                  </div>
                </div>

                {/* Glass Card */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6">
                  <h3 className="font-semibold mb-2 text-white">GlassCard</h3>
                  <p className="text-sm text-white/70 mb-4">Glassmorphism effect with animated border</p>
                  <div className="flex flex-wrap gap-4">
                    <GlassCard className="w-56 h-32 rounded-xl p-4 flex flex-col justify-center">
                      <i className="fas fa-gem text-2xl text-white mb-2"></i>
                      <p className="text-white font-semibold">Glass Effect</p>
                      <p className="text-white/70 text-sm">With blur backdrop</p>
                    </GlassCard>
                  </div>
                </div>

                {/* Spotlight Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">SpotlightCard</h3>
                  <p className="text-sm text-gray-500 mb-4">Spotlight follows cursor position</p>
                  <SpotlightCard className="w-64 h-36 bg-gray-900 rounded-xl p-4 flex flex-col justify-center">
                    <i className="fas fa-bolt text-2xl text-yellow-400 mb-2"></i>
                    <p className="text-white font-semibold">Spotlight Effect</p>
                    <p className="text-gray-400 text-sm">Move cursor around</p>
                  </SpotlightCard>
                </div>

                {/* Morph Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">MorphCard</h3>
                  <p className="text-sm text-gray-500 mb-4">Shape morphs on hover with organic animation</p>
                  <MorphCard className="w-56 h-32 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold">
                    <div className="text-center">
                      <i className="fas fa-shapes text-2xl mb-2"></i>
                      <p>Hover to Morph</p>
                    </div>
                  </MorphCard>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Badge Components */}
        <AnimatePresence>
          {shouldShow('badges') && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-tag text-primary"></i>
                Badge Components
              </h2>

              <div className="grid gap-8">
                {/* Color Variants */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Color Variants</h3>
                  <p className="text-sm text-gray-500 mb-4">All available color variants</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="blue">Blue</Badge>
                    <Badge variant="green">Green</Badge>
                    <Badge variant="yellow">Yellow</Badge>
                    <Badge variant="red">Red</Badge>
                    <Badge variant="purple">Purple</Badge>
                    <Badge variant="orange">Orange</Badge>
                    <Badge variant="teal">Teal</Badge>
                    <Badge variant="pink">Pink</Badge>
                    <Badge variant="gray">Gray</Badge>
                    <Badge variant="gradient">Gradient</Badge>
                  </div>
                </div>

                {/* Outlined Variants */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Outlined Variants</h3>
                  <p className="text-sm text-gray-500 mb-4">With outlined style</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" outlined>Primary</Badge>
                    <Badge variant="blue" outlined>Blue</Badge>
                    <Badge variant="green" outlined>Green</Badge>
                    <Badge variant="red" outlined>Red</Badge>
                    <Badge variant="purple" outlined>Purple</Badge>
                  </div>
                </div>

                {/* Sizes */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Sizes</h3>
                  <p className="text-sm text-gray-500 mb-4">XS, SM, MD, LG sizes available</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="primary" size="xs">Extra Small</Badge>
                    <Badge variant="primary" size="sm">Small</Badge>
                    <Badge variant="primary" size="md">Medium</Badge>
                    <Badge variant="primary" size="lg">Large</Badge>
                  </div>
                </div>

                {/* With Icons */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">With Icons</h3>
                  <p className="text-sm text-gray-500 mb-4">Badges with left or right icons</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="green" icon={<i className="fas fa-check text-[0.7em]"></i>}>Verified</Badge>
                    <Badge variant="blue" icon={<i className="fas fa-info text-[0.7em]"></i>}>Info</Badge>
                    <Badge variant="yellow" icon={<i className="fas fa-star text-[0.7em]"></i>}>Featured</Badge>
                    <Badge variant="red" icon={<i className="fas fa-heart text-[0.7em]"></i>} iconPosition="right">Favorite</Badge>
                  </div>
                </div>

                {/* With Dot */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">With Status Dot</h3>
                  <p className="text-sm text-gray-500 mb-4">Status indicator dots with optional pulse</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="green" dot>Online</Badge>
                    <Badge variant="red" dot pulse>Live</Badge>
                    <Badge variant="yellow" dot>Away</Badge>
                    <Badge variant="gray" dot>Offline</Badge>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">With Glow Effect</h3>
                  <p className="text-sm text-gray-500 mb-4">Glowing badges for emphasis</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" glow>Primary Glow</Badge>
                    <Badge variant="purple" glow>Purple Glow</Badge>
                    <Badge variant="gradient" glow>Gradient Glow</Badge>
                  </div>
                </div>

                {/* Preset Badges */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Preset Badges</h3>
                  <p className="text-sm text-gray-500 mb-4">Ready-to-use badge presets</p>
                  <div className="flex flex-wrap gap-3">
                    <NewBadge />
                    <BestsellerBadge />
                    <DiscountBadge percentage={25} />
                    <RatingBadge rating={4.8} />
                    <ShippingBadge type="free" />
                    <ShippingBadge type="express" />
                  </div>
                </div>

                {/* Status Badges */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Status Badges</h3>
                  <p className="text-sm text-gray-500 mb-4">Pre-configured status indicators</p>
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge status="success" />
                    <StatusBadge status="warning" />
                    <StatusBadge status="error" />
                    <StatusBadge status="info" />
                    <StatusBadge status="pending" />
                    <StatusBadge status="active" />
                    <StatusBadge status="inactive" />
                  </div>
                </div>

                {/* Count Badge */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Count Badge</h3>
                  <p className="text-sm text-gray-500 mb-4">Animated notification counter</p>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <button className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <i className="fas fa-bell text-gray-600 dark:text-gray-300"></i>
                      </button>
                      <div className="absolute -top-1 -right-1">
                        <CountBadge count={notificationCount} />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setNotificationCount(c => c + 1)}
                        className="px-3 py-1 bg-green-500 text-white rounded text-sm"
                      >
                        +1
                      </button>
                      <button
                        onClick={() => setNotificationCount(c => Math.max(0, c - 1))}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                      >
                        -1
                      </button>
                      <button
                        onClick={() => setNotificationCount(0)}
                        className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badges */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Category Badges (Selectable)</h3>
                  <p className="text-sm text-gray-500 mb-4">Click to select/deselect</p>
                  <div className="flex flex-wrap gap-2">
                    {['option1', 'option2', 'option3', 'option4'].map(opt => (
                      <CategoryBadge
                        key={opt}
                        color="primary"
                        selected={selectedBadges.includes(opt)}
                        onClick={() => toggleBadge(opt)}
                      >
                        {opt.toUpperCase()}
                      </CategoryBadge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Social Proof */}
        <AnimatePresence>
          {shouldShow('social') && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-users text-primary"></i>
                {t('categories.social')}
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-wrap gap-6 items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">LiveViewers</p>
                    <LiveViewers productName="Plissé Hordeur" minViewers={8} maxViewers={15} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">StockWarning</p>
                    <StockWarning stock={3} threshold={5} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">UrgencyTimer</p>
                    <UrgencyTimer endTime={futureDate} label="Offer ends" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">TrendingBadge</p>
                    <TrendingBadge rank={1} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">EcoBadge</p>
                    <EcoBadge savings={245} />
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Trust Badges */}
        <AnimatePresence>
          {shouldShow('trust') && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-shield-alt text-primary"></i>
                {t('categories.trust')}
              </h2>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">TrustBadgesBar (Grid)</h3>
                  <TrustBadgesBar variant="grid" />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Individual Badges</h3>
                  <div className="flex flex-wrap gap-6 items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">PaymentBadges</p>
                      <PaymentBadges />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">SecurityBadge</p>
                      <SecurityBadge />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">ReviewSummary</p>
                      <ReviewSummary rating={4.8} totalReviews={2547} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">CertificationBadges</p>
                      <CertificationBadges />
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">GuaranteeBadge</h3>
                  <GuaranteeBadge />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Text Animations */}
        <AnimatePresence>
          {shouldShow('animations') && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <i className="fas fa-magic text-primary"></i>
                {t('categories.animations')}
              </h2>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">CharacterReveal</h3>
                  <CharacterReveal
                    text="Window Specialist"
                    className="text-3xl font-bold text-primary"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">WordReveal</h3>
                  <WordReveal
                    text="The best window decoration for your home"
                    className="text-2xl font-semibold text-gray-900 dark:text-white"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">BlurReveal</h3>
                  <BlurReveal className="text-xl text-gray-700 dark:text-gray-300">
                    This element appears with a blur effect
                  </BlurReveal>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Typewriter</h3>
                  <Typewriter
                    text="Welcome to Window Specialist..."
                    className="text-xl font-mono text-gray-900 dark:text-white"
                    speed={100}
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">AnimatedCounter</h3>
                  <div className="flex items-center gap-4">
                    <AnimatedCounter
                      value={counter}
                      className="text-4xl font-bold text-primary"
                      suffix=" customers"
                    />
                    <button
                      onClick={() => setCounter(c => c + 100)}
                      className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
                    >
                      +100
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">GradientTextReveal</h3>
                  <GradientTextReveal
                    text="Premium Quality"
                    className="text-3xl font-bold"
                    gradient="from-blue-500 via-purple-500 to-pink-500"
                  />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
