'use client';

import { motion } from 'framer-motion';
import ProductRecommendationQuiz from '@/components/quiz/ProductRecommendationQuiz';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-bg-dark-1 dark:to-bg-dark-2">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-clipboard-list mr-2"></i>
              Product Advies Quiz
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Vind Uw Perfecte Product
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Beantwoord 5 eenvoudige vragen en ontvang gepersonaliseerd advies
              gebaseerd op uw wensen en situatie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation variant="fadeUp">
            <ProductRecommendationQuiz />
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-clock',
                title: '2 Minuten',
                desc: 'Snel en eenvoudig',
              },
              {
                icon: 'fa-bullseye',
                title: 'Persoonlijk Advies',
                desc: 'Op maat voor u',
              },
              {
                icon: 'fa-euro-sign',
                title: 'Inclusief Prijzen',
                desc: 'Direct inzicht',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-primary text-xl`}></i>
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
