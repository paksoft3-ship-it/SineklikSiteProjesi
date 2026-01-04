'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const RoomsSection = () => {
  const t = useTranslations('HomePage.rooms');

  const rooms = [
    {
      id: 'woonkamer',
      name: t('items.woonkamer'),
      image: '/images/hero/slide-1.png',
      tags: [
        { label: t('tags.insect_protection'), icon: 'fa-bug', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
        { label: t('tags.light_privacy'), icon: 'fa-sun', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' },
      ],
    },
    {
      id: 'slaapkamer',
      name: t('items.slaapkamer'),
      image: '/images/hero/slide-2.png',
      tags: [
        { label: t('tags.blackout'), icon: 'fa-moon', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' },
        { label: t('tags.insect_protection'), icon: 'fa-bug', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
      ],
    },
    {
      id: 'keuken',
      name: t('items.keuken'),
      image: '/images/hero/slide-3.png',
      tags: [
        { label: t('tags.moisture_proof'), icon: 'fa-tint', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
        { label: t('tags.privacy'), icon: 'fa-eye-slash', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' },
      ],
    },
    {
      id: 'balkon',
      name: t('items.balkon'),
      image: '/images/products/plisse-hordeur.png',
      tags: [
        { label: t('tags.door_screens'), icon: 'fa-shield-alt', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
      ],
    },
    {
      id: 'zolder',
      name: t('items.zolder'),
      image: '/images/products/room-zolder.png',
      tags: [
        { label: t('tags.heat_protection'), icon: 'fa-temperature-low', color: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' },
        { label: t('tags.insect_protection'), icon: 'fa-bug', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-bg-light-2 dark:bg-bg-dark-2" id="kamers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/kamers/${room.id}` as any}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={room.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  src={room.image}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {room.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {room.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded ${tag.color}`}
                    >
                      <i className={`fas ${tag.icon} mr-1`}></i>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
