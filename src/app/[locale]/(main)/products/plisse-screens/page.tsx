'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const products = [
  {
    id: 'deur',
    name: 'Plissé Hordeur',
    description: 'Ruimtebesparende hordeur voor balkons en terrassen. Eenvoudig te bedienen met één hand.',
    price: 199,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    badge: 'Populair',
    features: ['Max. 240x260cm', 'Enkel/Dubbel'],
    link: '/products/plisse-screens/door',
  },
  {
    id: 'raam',
    name: 'Plissé Raamhor',
    description: 'Elegante raamhor met compact plissésysteem. Ideaal voor draai-kiepramen.',
    price: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi',
    badge: null,
    features: ['3.5cm/4cm profiel', 'Zonder boren'],
    link: '/products/plisse-screens/window',
  },
  {
    id: 'glazen-balkon',
    name: 'Glazen Balkon Hor',
    description: 'Speciaal ontworpen voor glazen balkonsystemen. Minimaal zichtbare profielen.',
    price: 249,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv',
    badge: 'Premium',
    features: ['Max. 300x260cm', 'Alle systemen'],
    link: '/products/plisse-screens/glass-balcony',
  },
  {
    id: 'vaste-hor',
    name: 'Vaste Plissé Hor',
    description: 'Permanente oplossing voor vaste ramen. Strakke, nette afwerking.',
    price: 69,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vtkX7ReV_vig94UvWCKzy11t8c7SA-MLMn-5FlgOWQsvOE4BydICRdB0Dtt0mKaKRihy6mEw_hBGoLEtE1t01t-FZ7pxf6r_VcCRIvzXBTY0n647G0DhrJYqQZBbTE9qHnNpm90l4jkW4_NfNUwPCWYhLT3pk3SdQifYkRPCjYzDWfZwXAnzF1oIIyEXk7odgjSptOnGhtnXvKbp4CT8zKbZjAkuGVqLunuKXJH8iLyjNCKT68v2aszFF1ErCjGiuCQ3LMN97X7m',
    badge: 'Budget',
    features: ['Max. 200x250cm', 'Onderhoudsvrij'],
    link: '/products/plisse-screens/fixed',
  },
  {
    id: 'binnenmontage',
    name: 'Binnenmontage Hor',
    description: 'Montage aan binnenzijde kozijn. Ideaal voor huurwoningen.',
    price: 79,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi',
    badge: null,
    features: ['Klembevestiging', 'Verwijderbaar'],
    link: '/products/plisse-screens/insight',
  },
  {
    id: 'hor-gordijn-combinatie',
    name: 'Hor + Gordijn Combinatie',
    description: '2-in-1: insectenwering én zonwering in één systeem.',
    price: 299,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    badge: 'Bestseller',
    features: ['2-in-1 systeem', 'Onafhankelijk'],
    link: '/products/plisse-screens/screen-curtain',
  },
  {
    id: 'drempelloos',
    name: 'Drempelloze Plissé Hor',
    description: 'Geen drempel voor vloeiende overgang. Geschikt voor rolstoelen.',
    price: 229,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    badge: 'Toegankelijk',
    features: ['Magneetgeleiding', 'Max. 240x260cm'],
    link: '/products/plisse-screens/barrier-free',
  },
];

const features = [
  { icon: 'fa-ruler-combined', title: 'Op Maat', description: 'Elke hor wordt precies op maat gemaakt' },
  { icon: 'fa-shield-alt', title: '5 Jaar Garantie', description: 'Uitgebreide garantie op alle producten' },
  { icon: 'fa-truck', title: 'Gratis Bezorging', description: 'Gratis verzending vanaf €50' },
  { icon: 'fa-tools', title: 'Montageservice', description: 'Professionele montage beschikbaar' },
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

const cardVariants = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    transition: { duration: durations.normal, ease: easings.smooth },
  },
};

export default function PlisseHorrenPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.span
              className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: durations.normal, ease: easings.smooth }}
            >
              <i className="fas fa-bug mr-2"></i>Insectenwering
            </motion.span>
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, ease: easings.premium }}
            >
              Plissé Horren
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, delay: 0.1, ease: easings.premium }}
            >
              Hoogwaardige plissé horren voor deuren, ramen en balkons.
              Ruimtebesparend, elegant en op maat gemaakt voor uw situatie.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.slow, delay: 0.2, ease: easings.premium }}
            >
              <Link href="/configurator">
                <motion.span
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-sliders-h mr-2"></i> Configureren
                </motion.span>
              </Link>
              <Link href="/quote">
                <motion.span
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-file-alt mr-2"></i> Offerte aanvragen
                </motion.span>
              </Link>
            </motion.div>
          </div>
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation variant="fadeUp">
            <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">
              Kies uw type plissé hor
            </h2>
          </ScrollAnimation>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" staggerDelay={0.05}>
            {products.map((product) => (
              <StaggerItem key={product.id} variant="fadeUp">
                <Link href={product.link as any} className="block h-full">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm h-full"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      {product.badge && (
                        <motion.span
                          className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold rounded ${product.badge === 'Bestseller' ? 'bg-yellow-500 text-yellow-900' :
                            product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                              product.badge === 'Populair' ? 'bg-primary text-white' :
                                product.badge === 'Budget' ? 'bg-green-500 text-white' :
                                  'bg-blue-500 text-white'
                            }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {product.badge}
                        </motion.span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feat, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 rounded">
                            {feat}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-500">Vanaf</span>
                          <span className="text-xl font-bold text-primary ml-1">€{product.price},-</span>
                        </div>
                        <motion.span
                          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary"
                          whileHover={{ backgroundColor: 'rgb(0, 123, 255)', color: 'white' }}
                          transition={{ duration: durations.fast }}
                        >
                          <i className="fas fa-arrow-right text-sm"></i>
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
      <section className="py-16 bg-primary overflow-hidden">
        <ScrollAnimation variant="fadeUp">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts helpen u graag de juiste plissé hor te vinden voor uw situatie.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.span
                  className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-phone mr-2"></i> Bel ons
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
