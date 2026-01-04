'use client';

import { useTranslations } from 'next-intl';

const TestimonialsSection = () => {
  const t = useTranslations('HomePage.testimonials');

  const testimonials = [
    {
      id: 1,
      name: t('reviews.review1.name'),
      location: t('reviews.review1.location'),
      avatar: 'J',
      rating: 5,
      text: t('reviews.review1.text'),
    },
    {
      id: 2,
      name: t('reviews.review2.name'),
      location: t('reviews.review2.location'),
      avatar: 'S',
      rating: 5,
      text: t('reviews.review2.text'),
    },
    {
      id: 3,
      name: t('reviews.review3.name'),
      location: t('reviews.review3.location'),
      avatar: 'M',
      rating: 4.5,
      text: t('reviews.review3.text'),
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-12">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-left"
            >
              <div className="flex text-yellow-400 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-gray-500">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400 font-medium">
          <span>{t('trustpilot.excellent')}</span>
          <div className="flex text-green-500">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <span>{t('trustpilot.score')}</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
