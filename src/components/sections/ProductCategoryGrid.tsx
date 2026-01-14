'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimation';
import { easings, durations } from '@/lib/animation-config';

const ProductCategoryGrid = () => {
    const t = useTranslations('HomePage.categoryGrid');

    const categories = [
        {
            id: 'jalozieen',
            name: t('categories.jalozieen'),
            image: '/images/categories/jalozieen.jpg',
            link: '/producten/jalozieen',
        },
        {
            id: 'plisse-gordijnen',
            name: t('categories.plisseGordijnen'),
            image: '/images/categories/plisse-gordijnen.jpg',
            link: '/producten/plisse-gordijnen',
        },
        {
            id: 'duette',
            name: t('categories.duette'),
            image: '/images/categories/duette.jpg',
            link: '/producten/duette',
        },
        {
            id: 'rolgordijnen',
            name: t('categories.rolgordijnen'),
            image: '/images/categories/rolgordijnen.jpg',
            link: '/producten/rolgordijnen',
        },
        {
            id: 'horren',
            name: t('categories.horren'),
            image: '/images/categories/horren.jpg',
            link: '/producten/plisse-horren',
        },
        {
            id: 'vouwgordijnen',
            name: t('categories.vouwgordijnen'),
            image: '/images/categories/vouwgordijnen.jpg',
            link: '/producten/vouwgordijnen',
        },
        {
            id: 'gordijnen',
            name: t('categories.gordijnen'),
            image: '/images/categories/gordijnen.jpg',
            link: '/producten/gordijnen',
        },
        {
            id: 'lamellen',
            name: t('categories.lamellen'),
            image: '/images/categories/lamellen.jpg',
            link: '/producten/lamellen',
        },
    ];

    // Card 3D tilt effect variants
    const cardVariants = {
        rest: {
            y: 0,
            rotateX: 0,
            rotateY: 0,
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
        },
        hover: {
            y: -12,
            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.35)',
            transition: {
                duration: durations.normal,
                ease: easings.smooth,
            },
        },
    };

    // Image animation
    const imageVariants = {
        rest: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.15,
            rotate: 2,
            transition: {
                duration: durations.slow,
                ease: easings.premium,
            },
        },
    };

    // Title slide up animation
    const titleVariants = {
        rest: { y: 8, opacity: 0.9 },
        hover: {
            y: 0,
            opacity: 1,
            transition: {
                duration: durations.fast,
                ease: easings.smooth,
            },
        },
    };

    // View Collection link animation
    const linkVariants = {
        rest: { opacity: 0, y: 10 },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                duration: durations.fast,
                ease: easings.smooth,
            },
        },
    };

    // Container stagger animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: durations.normal,
                ease: easings.smooth,
            },
        },
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title & Description with animation */}
                <ScrollAnimation variant="fadeUp">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: durations.slow, ease: easings.smooth }}
                    >
                        <motion.h2
                            className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: durations.normal, delay: 0.1 }}
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: durations.normal, delay: 0.2 }}
                        >
                            {t('description')}
                        </motion.p>
                    </motion.div>
                </ScrollAnimation>

                {/* Grid with staggered animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            className="perspective-1000"
                        >
                            <motion.div
                                variants={cardVariants}
                                initial="rest"
                                whileHover="hover"
                                className="h-full"
                            >
                                <Link
                                    href={category.link as any}
                                    className="group relative aspect-[4/5] block rounded-2xl overflow-hidden shadow-lg"
                                >
                                    {/* Image with zoom + rotation */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <motion.img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover"
                                            variants={imageVariants}
                                            initial="rest"
                                            whileHover="hover"
                                        />
                                    </div>

                                    {/* Gradient Overlay */}
                                    <motion.div
                                        className="absolute inset-0"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 0.9 }}
                                        transition={{ duration: durations.normal }}
                                        style={{
                                            background: `linear-gradient(
                                                to top,
                                                rgba(15, 35, 75, 0.95) 0%,
                                                rgba(15, 35, 75, 0.6) 40%,
                                                rgba(15, 35, 75, 0.1) 80%,
                                                transparent 100%
                                            )`
                                        }}
                                    />

                                    {/* Content with slide-up animation */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                                        <motion.h3
                                            className="font-display text-xl md:text-2xl font-bold text-white text-center mb-2 drop-shadow-md"
                                            variants={titleVariants}
                                        >
                                            {category.name}
                                        </motion.h3>

                                        <motion.div
                                            className="flex justify-center"
                                            variants={linkVariants}
                                        >
                                            <motion.span
                                                className="text-white/90 text-sm font-medium tracking-wide border-b border-primary pb-0.5"
                                                whileHover={{ color: '#007BFF' }}
                                            >
                                                View Collection
                                            </motion.span>
                                        </motion.div>
                                    </div>

                                    {/* Hover shine effect */}
                                    <motion.div
                                        className="absolute inset-0 pointer-events-none"
                                        initial={{ x: '-100%', opacity: 0 }}
                                        whileHover={{ x: '100%', opacity: 0.3 }}
                                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                        }}
                                    />
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductCategoryGrid;
