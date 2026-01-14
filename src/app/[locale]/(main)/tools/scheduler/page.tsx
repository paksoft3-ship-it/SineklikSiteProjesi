'use client';

import { motion } from 'framer-motion';
import InstallationScheduler from '@/components/scheduler/InstallationScheduler';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function SchedulerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-bg-dark-1 dark:to-bg-dark-2">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-calendar-check mr-2"></i>
              Afspraak Planner
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Plan een Gratis Inmeetafspraak
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Onze experts komen bij u thuis voor een gratis inmeting en advies.
              Kies een datum en tijd die u uitkomt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scheduler */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation variant="fadeUp">
            <InstallationScheduler />
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Wat krijgt u?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: 'fa-ruler',
                title: 'Gratis Inmeten',
                desc: 'Professionele opmeting',
              },
              {
                icon: 'fa-comments',
                title: 'Persoonlijk Advies',
                desc: 'Op maat voor uw situatie',
              },
              {
                icon: 'fa-swatchbook',
                title: 'Stalen Bekijken',
                desc: 'In uw eigen ruimte',
              },
              {
                icon: 'fa-file-invoice',
                title: 'Offerte ter Plekke',
                desc: 'Direct duidelijkheid',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`fas ${item.icon} text-green-600 dark:text-green-400 text-lg`}></i>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
