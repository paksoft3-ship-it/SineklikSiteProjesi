'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  photos?: string[];
  verified: boolean;
  helpful: number;
  room?: string;
  product?: string;
}

const sampleReviews: Review[] = [
  {
    id: '1',
    author: 'Jan de Vries',
    rating: 5,
    date: '15 dec 2024',
    title: 'Uitstekende kwaliteit en service!',
    content: 'Na lang zoeken eindelijk de perfecte hordeur gevonden. De montage was eenvoudig en het resultaat is prachtig. Zeer tevreden met de aanschaf!',
    photos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv',
    ],
    verified: true,
    helpful: 24,
    room: 'Woonkamer',
    product: 'Plissé Hordeur',
  },
  {
    id: '2',
    author: 'Maria Bakker',
    rating: 5,
    date: '10 dec 2024',
    title: 'Eindelijk goed slapen!',
    content: 'De verduisterende plissé gordijnen zijn fantastisch. Onze slaapkamer is nu volledig donker en we slapen veel beter. De kleur past perfect bij ons interieur.',
    photos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    ],
    verified: true,
    helpful: 18,
    room: 'Slaapkamer',
    product: 'Verduisterend Plissé',
  },
  {
    id: '3',
    author: 'Peter Jansen',
    rating: 4,
    date: '5 dec 2024',
    title: 'Goede prijs-kwaliteit verhouding',
    content: 'Het product is goed en de levering was snel. De montage duurde iets langer dan verwacht, maar het eindresultaat is prima.',
    verified: true,
    helpful: 12,
    room: 'Keuken',
    product: 'Raamhor',
  },
  {
    id: '4',
    author: 'Sophie van Dijk',
    rating: 5,
    date: '1 dec 2024',
    title: 'Prachtige honeycomb gordijnen',
    content: 'De honeycomb gordijnen zien er geweldig uit en isoleren echt goed. We merken nu al verschil in onze energierekening!',
    photos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDB0oxZFLAIg7HSWTW78WnzlxUE03IvGb0ZmuqdMOArvYOkmkFWuqqkX',
    ],
    verified: true,
    helpful: 31,
    room: 'Woonkamer',
    product: 'Honeycomb Gordijn',
  },
];

interface PhotoReviewsProps {
  reviews?: Review[];
  showFilters?: boolean;
}

export default function PhotoReviews({
  reviews = sampleReviews,
  showFilters = true,
}: PhotoReviewsProps) {
  const [filter, setFilter] = useState<'all' | 'photos' | '5star' | '4star'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'recent' | 'helpful'>('recent');

  const filteredReviews = reviews.filter((review) => {
    if (filter === 'photos') return review.photos && review.photos.length > 0;
    if (filter === '5star') return review.rating === 5;
    if (filter === '4star') return review.rating === 4;
    return true;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'helpful') return b.helpful - a.helpful;
    return 0; // Assume already sorted by date
  });

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  const photoCount = reviews.filter((r) => r.photos && r.photos.length > 0).length;

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <motion.i
                  key={i}
                  className={`fas fa-star ${
                    i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {reviews.length} beoordelingen
            </p>
          </div>

          {/* Rating Breakdown */}
          <div className="flex-1 w-full md:w-auto">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = reviews.filter((r) => r.rating === rating).length;
              const percentage = (count / reviews.length) * 100;
              return (
                <div key={rating} className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-6">{rating}</span>
                  <i className="fas fa-star text-yellow-400 text-xs"></i>
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-yellow-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5, delay: (5 - rating) * 0.1 }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-8">{count}</span>
                </div>
              );
            })}
          </div>

          {/* Photo Preview */}
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              <i className="fas fa-camera mr-1"></i> {photoCount} foto{"'"}s van klanten
            </p>
            <div className="flex gap-2">
              {reviews
                .flatMap((r) => r.photos || [])
                .slice(0, 4)
                .map((photo, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedPhoto(photo)}
                    className="w-14 h-14 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </motion.button>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Alle' },
              { id: 'photos', label: 'Met foto\'s' },
              { id: '5star', label: '5 sterren' },
              { id: '4star', label: '4 sterren' },
            ].map((option) => (
              <motion.button
                key={option.id}
                onClick={() => setFilter(option.id as typeof filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === option.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
          >
            <option value="recent">Meest recent</option>
            <option value="helpful">Meest nuttig</option>
          </select>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        <AnimatePresence>
          {sortedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {review.author}
                      </span>
                      {review.verified && (
                        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                          <i className="fas fa-check mr-1"></i>Geverifieerd
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{review.date}</span>
                      {review.product && (
                        <>
                          <span>•</span>
                          <span>{review.product}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star text-sm ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {review.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {review.content}
              </p>

              {/* Photos */}
              {review.photos && review.photos.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {review.photos.map((photo, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setSelectedPhoto(photo)}
                      className="w-20 h-20 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img src={photo} alt="" className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Tags & Helpful */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {review.room && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 rounded">
                      <i className="fas fa-home mr-1"></i>{review.room}
                    </span>
                  )}
                </div>
                <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition">
                  <i className="far fa-thumbs-up"></i>
                  <span>Nuttig ({review.helpful})</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-times"></i>
            </motion.button>
            <motion.img
              src={selectedPhoto}
              alt=""
              className="max-w-full max-h-full rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
