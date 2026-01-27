'use client';

import { useState } from 'react';
import { Link } from '@/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    category: 'Bestellen',
    items: [
      { q: 'Hoe bestel ik een product op maat?', a: 'Gebruik onze configurator om uw product samen te stellen. Voer de afmetingen in, kies uw opties en plaats de bestelling.' },
      { q: 'Kan ik mijn bestelling wijzigen?', a: 'Binnen 24 uur na bestelling kunt u gratis wijzigingen doorgeven. Neem contact met ons op.' },
      { q: 'Wat zijn de betaalmethoden?', a: 'Wij accepteren iDEAL, PayPal, Bancontact, creditcard en achteraf betalen.' },
    ]
  },
  {
    category: 'Levering',
    items: [
      { q: 'Wat is de levertijd?', a: 'Maatwerk producten worden binnen 2-3 weken geleverd. Kant en klaar producten binnen 3-5 werkdagen.' },
      { q: 'Is bezorging gratis?', a: 'Ja, wij leveren gratis in heel Nederland.' },
      { q: 'Kan ik de bezorging volgen?', a: 'Ja, u ontvangt een track & trace code per e-mail zodra uw bestelling is verzonden.' },
    ]
  },
  {
    category: 'Montage',
    items: [
      { q: 'Kan ik zelf monteren?', a: 'Ja, al onze producten zijn geschikt voor zelfmontage. Duidelijke instructies worden meegeleverd.' },
      { q: 'Bieden jullie montageservice aan?', a: 'Ja, wij bieden professionele montage door ervaren monteurs in heel Nederland.' },
      { q: 'Hoeveel kost montage?', a: 'Montagekosten starten vanaf €49,- voor 1-3 producten.' },
    ]
  },
  {
    category: 'Garantie & Retour',
    items: [
      { q: 'Hoeveel garantie krijg ik?', a: 'Al onze producten komen met 5 jaar garantie op materiaal en fabricagefouten.' },
      { q: 'Kan ik retourneren?', a: 'Kant en klaar producten kunt u binnen 14 dagen retourneren. Maatwerk is uitgesloten van retour tenzij defect.' },
      { q: 'Wat als mijn product beschadigd is?', a: 'Neem direct contact met ons op met foto\'s van de schade. Wij lossen het snel op.' },
    ]
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="bg-secondary dark:bg-bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
              <i className="fas fa-question-circle mr-2"></i>Hulp
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Veelgestelde Vragen</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Antwoorden op de meest gestelde vragen.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="font-display text-xl font-bold text-secondary dark:text-white mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const id = `${catIndex}-${itemIndex}`;
                  const isOpen = openItems.includes(id);
                  return (
                    <div key={itemIndex} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white">{item.q}</span>
                        <motion.i
                          className="fas fa-chevron-down text-gray-400"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">{item.a}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">Staat uw vraag er niet bij?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Neem gerust contact met ons op, wij helpen u graag verder.</p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition">
            <i className="fas fa-envelope mr-2"></i> Contact opnemen
          </Link>
        </div>
      </section>
    </div>
  );
}
