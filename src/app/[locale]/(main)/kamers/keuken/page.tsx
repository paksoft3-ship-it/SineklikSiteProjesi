'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const recommendations = [
  { id: 1, type: 'horren', name: 'Rolhorren', description: 'Eenvoudig te bedienen.', price: 'Vanaf €99,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp', link: '/products/screens' },
  { id: 2, type: 'raamdecoratie', name: 'Jaloezieën', description: 'Vochtbestendig en stijlvol.', price: 'Vanaf €89,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWqqukX', link: '/products/window-decoration' },
] as const;

// Animation variants
const cardVariants = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 15 },
  },
};

export default function KeukenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: easings.smooth }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA15JTxuk4QRhK_kzs52hFFVW3mjuS5eDVJwf5cUk2EXbTVtYK9pfeDWIlQrp0uRP5TUWl9hnRfzxRGkr87zzT0aQnmmtRVSQXqm2hmYERTu9dEnUP0zfAL4nTJFi2hwdLsgaaolYbAditcU-hi8sczRTrB11LfcbYF2jWOdClM03F7VXVkttujjhlGKdlXgdBPBz72q4NrBoB-bomH08o8IXd9pmwaoq8StTznlclCoenXSjhJ_jUKVTJHLdJ7Hhgvr58ZRZrGzXv"
            alt="Keuken"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent"></div>
        </motion.div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              <motion.span
                variants={tagVariants}
                className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-gray-100 text-gray-700"
              >
                <i className="fas fa-tint mr-1"></i>Vochtbestendig
              </motion.span>
              <motion.span
                variants={tagVariants}
                className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-yellow-100 text-yellow-700"
              >
                <i className="fas fa-eye-slash mr-1"></i>Privacy
              </motion.span>
            </motion.div>
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, ease: easings.premium }}
            >
              Keuken
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
            >
              Vochtbestendige raamdecoratie die makkelijk schoon te maken is. Ideaal voor de keuken.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">
              Aanbevolen voor de keuken
            </h2>
          </ScrollAnimation>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {recommendations.map((item) => (
              <StaggerItem key={item.id} variant="fadeUp">
                <Link href={item.link as any} className="block h-full">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm h-full"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <div className="h-48 overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-6">
                      <span className={`inline-block px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded mb-3 ${item.type === 'horren' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {item.type}
                      </span>
                      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary">{item.price}</span>
                        <motion.span
                          className="text-primary"
                          whileHover={{ x: 5 }}
                          transition={{ duration: durations.fast }}
                        >
                          <i className="fas fa-arrow-right"></i>
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <ScrollAnimation variant="fadeUp">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Gebruik onze configurator voor persoonlijk advies.
            </p>
            <Link href="/configurator">
              <motion.span
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 123, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-sliders-h mr-2"></i> Start configurator
              </motion.span>
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
