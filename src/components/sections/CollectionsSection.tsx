'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const CollectionsSection = () => {
  const t = useTranslations('HomePage.collections');

  const collections = [
    {
      id: 'plisse-horren',
      title: t('horren.title'),
      description: t('horren.description'),
      link: '/producten/plisse-horren',
      linkText: t('horren.link'),
      images: [
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      ],
      subProducts: ['Deur', 'Raam', 'Glazen Balkon', 'Drempelloos'],
    },
    {
      id: 'plisse-gordijnen',
      title: t('gordijnen.title'),
      description: t('gordijnen.description'),
      link: '/producten/plisse-gordijnen',
      linkText: t('gordijnen.link'),
      images: [
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      ],
      colors: ['#E8E4E0', '#8B7355', '#4A4A4A', '#2C2C2C', '#F5F5DC'],
      subProducts: ['Honeycomb', 'Verduisterend', 'Lichtdoorlatend', 'Kleuropties'],
    },
  ];

  const teamAvatars = [
    { name: 'Jan', color: 'bg-blue-500' },
    { name: 'Sophie', color: 'bg-pink-500' },
    { name: 'Mark', color: 'bg-green-500' },
    { name: 'Anna', color: 'bg-purple-500' },
    { name: 'Peter', color: 'bg-yellow-500' },
  ];

  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({
    'plisse-horren': 0,
    'plisse-gordijnen': 0,
  });

  const handleImageChange = (collectionId: string, index: number) => {
    setActiveImages((prev) => ({ ...prev, [collectionId]: index }));
  };

  // Avatar animation variants
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    }),
  };

  // Badge slide-in animation
  const badgeVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  // Image crossfade transition
  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  // Color dot animation
  const colorDotVariants = {
    rest: { scale: 1, boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)' },
    hover: {
      scale: 1.2,
      boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.3)',
      transition: { duration: durations.fast }
    },
    selected: {
      scale: 1.15,
      boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.5)',
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-12">
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, ease: easings.smooth }}
            >
              {t('title')}
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, ease: easings.smooth, delay: 0.1 }}
            >
              {t('description')}
            </motion.p>

            {/* Team Avatars with staggered animation */}
            <div className="flex justify-center items-center gap-1 mb-8">
              {teamAvatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={avatarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, y: -4, zIndex: 10 }}
                  className={`w-10 h-10 ${avatar.color} rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-sm shadow-md -ml-2 first:ml-0 cursor-pointer relative`}
                >
                  {avatar.name.charAt(0)}
                </motion.div>
              ))}
              <motion.div
                className="ml-2 text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                +15.000 tevreden klanten
              </motion.div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Collections Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.2}>
          {collections.map((collection, collectionIndex) => (
            <StaggerItem key={collection.id} variant="fadeUp">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: durations.slow, delay: collectionIndex * 0.15 }}
              >
                {/* Main Image with crossfade */}
                <Link
                  href={collection.link as any}
                  className="block relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImages[collection.id]}
                      src={collection.images[activeImages[collection.id]]}
                      alt={collection.title}
                      className="w-full h-full object-cover"
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: durations.normal, ease: easings.smooth }}
                    />
                  </AnimatePresence>

                  {/* Hover zoom effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: durations.slow }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Sub-products badges with staggered slide-in */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {collection.subProducts.map((sub, idx) => (
                      <motion.span
                        key={idx}
                        custom={idx}
                        variants={badgeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 bg-white/90 text-secondary text-xs font-semibold rounded shadow-sm"
                      >
                        {sub}
                      </motion.span>
                    ))}
                  </div>
                </Link>

                {/* Thumbnails or Color Dots */}
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {collection.id === 'plisse-horren' ? (
                    // Thumbnail gallery for Horren
                    collection.images.map((img, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleImageChange(collection.id, index)}
                        className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${activeImages[collection.id] === index
                          ? 'border-primary shadow-md'
                          : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </motion.button>
                    ))
                  ) : (
                    // Color dots for Gordijnen with animation
                    <div className="flex items-center gap-2">
                      {collection.colors?.map((color, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleImageChange(collection.id, index % collection.images.length)}
                          className="w-6 h-6 rounded-full border-2 transition-all"
                          style={{ backgroundColor: color }}
                          variants={colorDotVariants}
                          initial="rest"
                          whileHover="hover"
                          animate={activeImages[collection.id] === index % collection.images.length ? 'selected' : 'rest'}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Title & Description with reveal animation */}
                <motion.h3
                  className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {collection.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-400 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {collection.description}
                </motion.p>

                {/* Animated Link */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={collection.link as any}
                    className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition group/link"
                  >
                    {collection.linkText}
                    <motion.i
                      className="fas fa-arrow-right ml-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: durations.fast }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CollectionsSection;
