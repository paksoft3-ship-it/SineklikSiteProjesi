'use client';

import { useState } from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const CollectionsSection = () => {
  const t = useTranslations('HomePage.collections');

  // We construct the collections array inside the component to use the hook
  const collections = [
    {
      id: 'plisse-horren',
      title: t('horren.title'),
      description: t('horren.description'),
      link: '/producten/plisse-horren',
      linkText: t('horren.link'),
      images: [
        '/images/collections/horren.png',
      ],
      subProducts: ['Deur', 'Raam', 'Glazen Balkon', 'Drempelloos'], // Could translate these too if critical
    },
    {
      id: 'plisse-gordijnen',
      title: t('gordijnen.title'),
      description: t('gordijnen.description'),
      link: '/producten/plisse-gordijnen',
      linkText: t('gordijnen.link'),
      images: [
        '/images/collections/gordijnen.png',
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

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t('description')}
          </p>

          {/* Team Avatars */}
          <div className="flex justify-center items-center gap-1 mb-8">
            {teamAvatars.map((avatar, index) => (
              <div
                key={index}
                className={`w-10 h-10 ${avatar.color} rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-sm shadow-md -ml-2 first:ml-0`}
              >
                {avatar.name.charAt(0)}
              </div>
            ))}
            <div className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              +15.000 tevreden klanten
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={collection.images[activeImages[collection.id]]}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Sub-products badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {collection.subProducts.map((sub, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/90 text-secondary text-xs font-semibold rounded">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thumbnails or Color Dots */}
              <div className="flex items-center gap-2 mb-4">
                {collection.id === 'plisse-horren' ? (
                  // Thumbnail gallery for Horren
                  collection.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(collection.id, index)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${activeImages[collection.id] === index
                        ? 'border-primary shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))
                ) : (
                  // Color dots for Gordijnen
                  <div className="flex items-center gap-2">
                    {collection.colors?.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageChange(collection.id, index % collection.images.length)}
                        className={`w-6 h-6 rounded-full border-2 transition-all ${activeImages[collection.id] === index % collection.images.length
                          ? 'border-primary scale-110'
                          : 'border-gray-300 dark:border-gray-600'
                          }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {collection.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {collection.description}
              </p>

              {/* Link */}
              <Link
                href={collection.link as any}
                className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition"
              >
                {collection.linkText}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
