'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const recommendations = [
  { id: 1, type: 'horren', name: 'Plissé Hordeuren', description: 'Ideaal voor de tuin- of balkondeur.', price: 'Vanaf €199,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA', link: '/products/plisse-screens/door' },
  { id: 2, type: 'raamdecoratie', name: 'Plissé Gordijnen', description: 'Stijlvolle zonwering voor de woonkamer.', price: 'Vanaf €89,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv', link: '/products/plisse-curtains' },
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

export default function WoonkamerPage() {
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi"
            alt="Woonkamer"
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
                className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-green-100 text-green-700"
              >
                <i className="fas fa-bug mr-1"></i>Insectenwering
              </motion.span>
              <motion.span
                variants={tagVariants}
                className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-yellow-100 text-yellow-700"
              >
                <i className="fas fa-sun mr-1"></i>Licht Privacy
              </motion.span>
            </motion.div>
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, ease: easings.premium }}
            >
              Woonkamer
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
            >
              Creëer de perfecte sfeer in uw woonkamer met onze raamdecoratie en horren.
              Van lichtdoorlatend tot verduisterend, wij hebben de oplossing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">
              Aanbevolen voor de woonkamer
            </h2>
          </ScrollAnimation>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {recommendations.map((item) => (
              <StaggerItem key={item.id} variant="fadeUp">
                <Link
                  href={item.link as any}
                  className="block h-full"
                >
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
                      <span className={`inline-block px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded mb-3 ${item.type === 'horren'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        }`}>
                        {item.type}
                      </span>
                      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {item.description}
                      </p>
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

      {/* Package Suggestion */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)' }}
              transition={{ duration: durations.normal }}
            >
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <motion.img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX"
                    alt="Woonkamer Stijl Pack"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.span
                    className="inline-block w-fit px-3 py-1 bg-secondary text-white text-xs font-bold rounded mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: durations.normal }}
                  >
                    POPULAIR PAKKET
                  </motion.span>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Woonkamer Stijl Pack
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Combineer houten jaloezieën (50mm) met een plissé hordeur voor de ultieme
                    woonkameroplossing. Stijlvol en functioneel.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 block">Vanaf</span>
                      <span className="text-3xl font-bold text-primary">€289,-</span>
                    </div>
                    <Link href="/products/packages">
                      <motion.span
                        className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="fas fa-box-open mr-2"></i> Bekijk Woonkamer Pakket
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <ScrollAnimation variant="fadeUp">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50 dark:bg-gray-800 rounded-3xl p-12">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">Maatwerk advies nodig?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Onze experts helpen u graag bij het samenstellen van de perfecte oplossing voor uw woonkamer.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator">
                <motion.span
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-secondary hover:bg-gray-800 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-sliders-h mr-2"></i> Configurator
                </motion.span>
              </Link>
              <Link href="/quote">
                <motion.span
                  className="inline-flex justify-center items-center px-6 py-3 border-2 border-secondary dark:border-white text-base font-bold rounded-lg text-secondary dark:text-white hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-calculator mr-2"></i> Offerte aanvragen
                </motion.span>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
