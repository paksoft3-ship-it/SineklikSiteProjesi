'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const RoomsSection = () => {
  const t = useTranslations('HomePage.rooms');

  const rooms = [
    {
      id: 'woonkamer',
      name: t('items.woonkamer'),
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
      tags: [
        { label: t('tags.insect_protection'), icon: 'fa-bug', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
        { label: t('tags.light_privacy'), icon: 'fa-sun', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' },
      ],
    },
    {
      id: 'slaapkamer',
      name: t('items.slaapkamer'),
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
      tags: [
        { label: t('tags.blackout'), icon: 'fa-moon', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' },
        { label: t('tags.insect_protection'), icon: 'fa-bug', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
      ],
    },
    {
      id: 'keuken',
      name: t('items.keuken'),
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      tags: [
        { label: t('tags.moisture_proof'), icon: 'fa-tint', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
        { label: t('tags.privacy'), icon: 'fa-eye-slash', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' },
      ],
    },
    {
      id: 'balkon',
      name: t('items.balkon'),
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      tags: [
        { label: t('tags.door_screens'), icon: 'fa-shield-alt', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
      ],
    },
    {
      id: 'zolder',
      name: t('items.zolder'),
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      tags: [
        { label: t('tags.heat_protection'), icon: 'fa-temperature-low', color: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' },
        { label: t('tags.insect_protection'), icon: 'fa-bug', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
      ],
    },
  ];

  // Card hover variants with 3D tilt effect
  const cardVariants = {
    rest: {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    hover: {
      y: -8,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: { duration: durations.normal, ease: easings.smooth },
    },
  };

  // Tag animation variants
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    }),
  };

  // Image Ken Burns effect
  const imageVariants = {
    rest: { scale: 1, x: 0, y: 0 },
    hover: {
      scale: 1.15,
      x: 5,
      y: -5,
      transition: { duration: 8, ease: 'linear' },
    },
  };

  return (
    <section className="py-20 bg-bg-light-2 dark:bg-bg-dark-2" id="kamers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16">
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
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.normal, ease: easings.smooth, delay: 0.1 }}
            >
              {t('description')}
            </motion.p>
          </div>
        </ScrollAnimation>

        {/* Rooms Grid with stagger animation */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={0.1}>
          {rooms.map((room, index) => (
            <StaggerItem key={room.id} variant="fadeUp">
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="h-full"
              >
                <Link
                  href={`/kamers/${room.id}` as any}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm block h-full"
                >
                  {/* Image with Ken Burns effect */}
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      alt={room.name}
                      className="w-full h-full object-cover"
                      src={room.image}
                      variants={imageVariants}
                      initial="rest"
                      whileHover="hover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <motion.h3
                      className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ duration: durations.fast }}
                    >
                      {room.name}
                    </motion.h3>

                    {/* Tags with staggered pop-in animation */}
                    <div className="flex flex-wrap gap-2">
                      {room.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className={`px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded ${tag.color}`}
                          custom={tagIndex}
                          variants={tagVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: durations.fast }}
                        >
                          <motion.i
                            className={`fas ${tag.icon} mr-1`}
                            whileHover={{ rotate: 15 }}
                            transition={{ duration: durations.fast }}
                          />
                          {tag.label}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: durations.normal }}
                  />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default RoomsSection;
