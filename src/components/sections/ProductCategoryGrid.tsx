'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {categories.map((category) => (
                        <motion.div key={category.id} variants={item}>
                            <Link
                                href={category.link as any}
                                className="group relative aspect-[4/5] block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                            >
                                {/* Image */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <motion.img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7 }}
                                    />
                                </div>

                                {/* Gradient Overlay - Matching Hero Section Style */}
                                <div
                                    className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-300"
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

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-white text-center mb-2 drop-shadow-md">
                                        {category.name}
                                    </h3>

                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                                        <span className="text-white/90 text-sm font-medium tracking-wide border-b border-primary pb-0.5">
                                            View Collection
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductCategoryGrid;
