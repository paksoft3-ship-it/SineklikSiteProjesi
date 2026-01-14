'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const recommendations = [
  { id: 1, type: 'horren', name: 'Inzethorren', description: 'Perfect voor draaikiepramen.', price: 'Vanaf €49,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EK0QEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKvV8UdSB7y3i7KmIdF-YgtPhmtVi', link: '/products/plisse-screens/insight' },
  { id: 2, type: 'raamdecoratie', name: 'Verduisterend', description: 'Essentieel voor de slaapkamer.', price: 'Vanaf €99,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv', link: '/products/plisse-curtains/blackout' },
  { id: 3, type: 'raamdecoratie', name: 'Duette® Shades', description: 'Isolerend en verduisterend.', price: 'Vanaf €129,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q', link: '/producten/raamdecoratie/duette-shades' },
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

export default function SlaapkamerPage() {
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv"
            alt="Slaapkamer"
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
                className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-blue-100 text-blue-700"
              >
                <i className="fas fa-moon mr-1"></i>Verduistering
              </motion.span>
              <motion.span
                variants={tagVariants}
                className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-green-100 text-green-700"
              >
                <i className="fas fa-bug mr-1"></i>Insectenwering
              </motion.span>
            </motion.div>
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, ease: easings.premium }}
            >
              Slaapkamer
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
            >
              Een goede nachtrust begint bij de juiste raamdecoratie. Verduisterend voor optimale slaap.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">
              Aanbevolen voor de slaapkamer
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

      {/* Package Suggestion */}
      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <ScrollAnimation variant="fadeUp">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">
              Populair: Slaapkamer Comfort Pack
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Verduisterend rolgordijn + inzet hor vanaf €149,-
            </p>
            <Link href="/products/packages">
              <motion.span
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 123, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-box-open mr-2"></i> Bekijk Slaapkamer Pakket
              </motion.span>
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
