'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { pageTransitionVariants } from '@/lib/animation-variants';

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      {children}
    </motion.div>
  );
}
