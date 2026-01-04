'use client';

import { motion, useInView, UseInViewOptions, Variant } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    variant?: 'fadeUp' | 'fadeIn' | 'scaleUp' | 'slideLeft' | 'slideRight';
    delay?: number;
    duration?: number;
    viewport?: UseInViewOptions;
}

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
};

export const ScrollAnimation = ({
    children,
    className = '',
    variant = 'fadeUp',
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-10%" },
}: ScrollAnimationProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={variants[variant]}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({
    children,
    className = '',
    staggerDelay = 0.1,
    viewport = { once: true, margin: "-10%" },
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    viewport?: UseInViewOptions;
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ staggerChildren: staggerDelay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className = '',
    variant = 'fadeUp',
}: {
    children: ReactNode;
    className?: string;
    variant?: 'fadeUp' | 'fadeIn' | 'scaleUp';
}) => {
    return (
        <motion.div
            variants={variants[variant]}
            className={className}
        >
            {children}
        </motion.div>
    );
};
