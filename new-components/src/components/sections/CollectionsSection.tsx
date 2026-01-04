'use client';

import { useState } from 'react';
import Link from 'next/link';

const collections = [
  {
    id: 'horren',
    title: 'Horren (Screens)',
    titleNL: 'Horren',
    description: 'Keep nature out, let fresh air in. Invisible protection for every window type.',
    descriptionNL: 'Houd insecten buiten, laat frisse lucht binnen. Onzichtbare bescherming voor elk raamtype.',
    link: '/producten/horren',
    linkText: 'Shop Screens',
    linkTextNL: 'Bekijk Horren',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vtkX7ReV_vig94UvWCKzy11t8c7SA-MLMn-5FlgOWQsvOE4BydICRdB0Dtt0mKaKRihy6mEw_hBGoLEtE1t01t-FZ7pxf6r_VcCRIvzXBTY0n647G0DhrJYqQZBbTE9qHnNpm90l4jkW4_NfNUwPCWYhLT3pk3SdQifYkRPCjYzDWfZwXAnzF1oIIyEXk7odgjSptOnGhtnXvKbp4CT8zKbZjAkuGVqLunuKXJH8iLyjNCKT68v2aszFF1ErCjGiuCQ3LMN97X7m',
    ],
  },
  {
    id: 'raamdecoratie',
    title: 'Gordijnen (Curtains)',
    titleNL: 'Raamdecoratie',
    description: 'Privacy and style in every fold. Custom fabrics tailored to your exact height.',
    descriptionNL: 'Privacy en stijl in elke plooi. Op maat gemaakte stoffen voor uw exacte afmetingen.',
    link: '/producten/raamdecoratie',
    linkText: 'Shop Curtains',
    linkTextNL: 'Bekijk Raamdecoratie',
    colors: ['#E8E4E0', '#8B7355', '#4A4A4A', '#2C2C2C', '#F5F5DC'],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    ],
  },
];

const teamAvatars = [
  { name: 'Jan', color: 'bg-blue-500' },
  { name: 'Sophie', color: 'bg-pink-500' },
  { name: 'Mark', color: 'bg-green-500' },
  { name: 'Anna', color: 'bg-purple-500' },
  { name: 'Peter', color: 'bg-yellow-500' },
];

const CollectionsSection = () => {
  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({
    horren: 0,
    raamdecoratie: 0,
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
            Onze Collecties
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Kies tussen onze op maat gemaakte horren of luxe raamdecoratie.
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
                  alt={collection.titleNL}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Thumbnails or Color Dots */}
              <div className="flex items-center gap-2 mb-4">
                {collection.id === 'horren' ? (
                  // Thumbnail gallery for Horren
                  collection.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(collection.id, index)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImages[collection.id] === index
                          ? 'border-primary shadow-md'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))
                ) : (
                  // Color dots for Raamdecoratie
                  <div className="flex items-center gap-2">
                    {collection.colors?.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageChange(collection.id, index % collection.images.length)}
                        className={`w-6 h-6 rounded-full border-2 transition-all ${
                          activeImages[collection.id] === index % collection.images.length
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
                {collection.titleNL}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {collection.descriptionNL}
              </p>

              {/* Link */}
              <Link
                href={collection.link}
                className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition"
              >
                {collection.linkTextNL}
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
