'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const categories = [
  {
    id: 'horren',
    name: 'Horren op Maat',
    description: 'Houd insecten buiten met onze hoogwaardige horren.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    icon: 'fa-bug',
    products: ['Inzethorren', 'Plissé Hordeuren', 'Dakraamhorren', 'Schuifhorren'],
    startPrice: 49,
    link: '/products/screens',
    comingSoon: false,
  },
  {
    id: 'raamdecoratie',
    name: 'Raamdecoratie',
    description: 'Stijlvolle raamdecoratie voor elke kamer en elk raamtype.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDB0oxZFLAIg7HSWTW78WnzlxUE03IvGb0ZmuqdMOArvYOkmkFWuqqkX',
    icon: 'fa-sun',
    products: ['Jaloezieën', 'Rolgordijnen', 'Plissé Gordijnen', 'Duette® Shades'],
    startPrice: 49,
    link: '/products/window-decoration',
    comingSoon: false,
  },
  {
    id: 'pakketten',
    name: 'Voordeelpakketten',
    description: 'Profiteer van extra korting met onze samengestelde pakketten.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDB0oxZFLAIg7HSWTW78WnzlxUE03IvGb0ZmuqdMOArvYOkmkFWuqqkX',
    icon: 'fa-box-open',
    products: ['Slaapkamer Comfort', 'Woonkamer Stijl', 'Zolder Isolatie'],
    startPrice: 149,
    link: '/products/packages',
    comingSoon: false,
  },
  {
    id: 'onderhoud',
    name: 'Onderhoud & Service',
    description: 'Alles voor het onderhoud van uw horren en raamdecoratie.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29jY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
    icon: 'fa-tools',
    products: ['Schoonmaak', 'Onderdelen', 'Service'],
    startPrice: null,
    link: '/service',
    comingSoon: true,
  },
] as const;

const features = [
  { icon: 'fa-ruler-combined', title: 'Op Maat', description: 'Elk product wordt precies op uw maten gemaakt' },
  { icon: 'fa-shield-alt', title: '5 Jaar Garantie', description: 'Uitgebreide garantie op alle producten' },
  { icon: 'fa-truck', title: 'Gratis Bezorging', description: 'Gratis verzending vanaf €50' },
  { icon: 'fa-swatchbook', title: 'Gratis Stalen', description: 'Bekijk kleuren in uw eigen interieur' },
];

// Animation variants
const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

const categoryCardVariants = {
  rest: { boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' },
  hover: {
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

export default function ProductenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.premium }}
          >
            Onze Producten
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
          >
            Ontdek ons complete assortiment plissé horren en gordijnen. Hoogwaardige kwaliteit,
            op maat gemaakt voor uw woning.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, delay: 0.2, ease: easings.premium }}
          >
            <Link href="/configurator">
              <motion.span
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-sliders-h mr-2"></i> Configurator
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-swatchbook mr-2"></i> Gratis stalen
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                variants={featureVariants}
              >
                <motion.div
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={`fas ${feature.icon} text-primary`}></i>
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((category, index) => (
              <ScrollAnimation key={category.id} variant="fadeUp" delay={index * 0.1}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden"
                  variants={categoryCardVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <motion.img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      {category.comingSoon && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <motion.span
                            className="px-4 py-2 bg-white text-gray-800 font-bold rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            Binnenkort beschikbaar
                          </motion.span>
                        </div>
                      )}
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <i className={`fas ${category.icon} text-xl text-primary`}></i>
                        </motion.div>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                          {category.name}
                        </h2>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {category.description}
                      </p>

                      {/* Products list */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Producten</p>
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ staggerChildren: 0.05 }}
                        >
                          {category.products.map((product, idx) => (
                            <motion.span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full"
                              variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                              }}
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 123, 255, 0.1)' }}
                            >
                              {product}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>

                      <div className="flex items-center justify-between">
                        {category.startPrice ? (
                          <div>
                            <span className="text-sm text-gray-500">Vanaf</span>
                            <span className="text-2xl font-bold text-primary ml-2">€{category.startPrice},-</span>
                          </div>
                        ) : (
                          <div></div>
                        )}
                        {!category.comingSoon && (
                          <Link href={category.link as any}>
                            <motion.span
                              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Bekijk collectie <i className="fas fa-arrow-right ml-2"></i>
                            </motion.span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary overflow-hidden">
        <ScrollAnimation variant="fadeUp">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Niet zeker welk product u nodig heeft?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts helpen u graag bij het maken van de juiste keuze.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.span
                  className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-phone mr-2"></i> Neem contact op
                </motion.span>
              </Link>
              <Link href="/measurement-guide">
                <motion.span
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-ruler mr-2"></i> Meetgids
                </motion.span>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
