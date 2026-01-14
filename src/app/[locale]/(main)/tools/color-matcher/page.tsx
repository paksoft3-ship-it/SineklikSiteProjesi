'use client';

import { motion } from 'framer-motion';
import ColorMatchingTool from '@/components/tools/ColorMatchingTool';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function ColorMatcherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-bg-dark-1 dark:to-bg-dark-2">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-palette mr-2"></i>
              Kleur Matcher Tool
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Vind de Perfecte Kleur
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Upload een foto van uw kamer en wij analyseren de kleuren om de
              perfecte match te vinden voor uw raamdecoratie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation variant="fadeUp">
            <ColorMatchingTool />
          </ScrollAnimation>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Hoe werkt het?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                icon: 'fa-camera',
                title: 'Upload Foto',
                desc: 'Maak een foto van uw kamer',
              },
              {
                step: '2',
                icon: 'fa-magic',
                title: 'Kleur Analyse',
                desc: 'Wij detecteren de kleuren',
              },
              {
                step: '3',
                icon: 'fa-check-circle',
                title: 'Perfecte Match',
                desc: 'Ontvang aanbevelingen',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <i className={`fas ${item.icon} text-purple-600 dark:text-purple-400 text-xl`}></i>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
