'use client';

import { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  date: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jan de Vries',
    location: 'Amsterdam',
    rating: 5,
    text: 'Uitstekende kwaliteit plissé hordeur. Past perfect en de montage was eenvoudig. De klant service was ook top, ze hebben me geholpen met opmeten via videocall.',
    product: 'Plissé Hordeur',
    date: 'December 2024',
  },
  {
    id: 2,
    name: 'Sophie van den Berg',
    location: 'Rotterdam',
    rating: 5,
    text: 'De Honeycomb gordijnen zijn prachtig! Merk echt verschil in de temperatuur in huis. De isolatie werkt uitstekend en de kleur past perfect bij mijn interieur.',
    product: 'Honeycomb Gordijn',
    date: 'November 2024',
  },
  {
    id: 3,
    name: 'Mark Jansen',
    location: 'Utrecht',
    rating: 5,
    text: 'Heel tevreden met de drempelloze hordeur voor mijn glazen schuifpui. Mijn moeder met rollator kan nu makkelijk naar buiten. Aanrader!',
    product: 'Drempelloze Hor',
    date: 'December 2024',
  },
  {
    id: 4,
    name: 'Anna Bakker',
    location: 'Den Haag',
    rating: 5,
    text: 'Snelle levering en perfecte pasvorm. De verduisterende plissé gordijnen in de slaapkamer zijn geweldig - eindelijk goed slapen ook als de zon vroeg op komt!',
    product: 'Verduisterend Plissé',
    date: 'Oktober 2024',
  },
  {
    id: 5,
    name: 'Peter Smit',
    location: 'Eindhoven',
    rating: 4,
    text: 'Goede prijs-kwaliteitverhouding. Het glazen balkon systeem werkt perfect met de plissé hor. Eindelijk kunnen we de deuren open laten zonder muggen.',
    product: 'Glazen Balkon Hor',
    date: 'September 2024',
  },
  {
    id: 6,
    name: 'Linda Mulder',
    location: 'Groningen',
    rating: 5,
    text: 'De combinatie hor + gordijn is briljant! Twee functies in één systeem. Bespaart ruimte en ziet er strak uit. Zeer tevreden met mijn aankoop.',
    product: 'Hor + Gordijn Combi',
    date: 'November 2024',
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-bg-light-2 dark:bg-bg-dark-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            <i className="fas fa-star mr-2"></i>Klantbeoordelingen
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meer dan 15.000 tevreden klanten gingen u voor. Lees hun ervaringen.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p className="text-2xl font-bold text-secondary dark:text-white">4.8/5</p>
            <p className="text-sm text-gray-500">Gemiddelde score</p>
          </div>
          <div className="text-center border-l border-gray-300 dark:border-gray-600 pl-8">
            <p className="text-2xl font-bold text-secondary dark:text-white">15.000+</p>
            <p className="text-sm text-gray-500">Tevreden klanten</p>
          </div>
          <div className="text-center border-l border-gray-300 dark:border-gray-600 pl-8">
            <p className="text-2xl font-bold text-secondary dark:text-white">4.721</p>
            <p className="text-sm text-gray-500">Reviews</p>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${i < testimonial.rating ? '' : 'text-gray-300'}`}
                        ></i>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4">
                      "{testimonial.text}"
                    </p>

                    {/* Product Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {testimonial.product}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.location} • {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Bekijk alle reviews
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
