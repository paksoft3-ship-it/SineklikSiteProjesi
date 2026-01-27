'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TrustWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sidebar Button/Badge */}
            <motion.div
                className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#E5006C] shadow-lg rounded-l-xl p-2 border border-r-0 border-white/20 flex flex-col items-center gap-3 cursor-pointer group transition-all"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E5006C] font-bold text-lg shadow-sm">
                    <i className="fas fa-check"></i>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E5006C] font-bold text-xs shadow-sm">
                    9,6
                </div>
            </motion.div>

            {/* Expanded Card */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed right-16 top-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-[300px] border border-gray-100 dark:border-gray-700"
                        initial={{ x: 50, opacity: 0, scale: 0.95 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: 50, opacity: 0, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-[#E5006C] rounded-lg flex items-center justify-center text-white shadow-md">
                                <i className="fas fa-check-circle text-2xl"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">Reviews & Zekerheden</h3>
                                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                    <span className="text-gray-900 dark:text-white font-bold ml-1">9,6</span>
                                    <span className="text-gray-500 text-xs">(4805)</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            {[
                                'Echte ondernemers',
                                'Veilig online',
                                'Goede voorwaarden',
                                'Betrouwbare info'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs flex-shrink-0 shadow-sm">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="text-[#E5006C] font-bold">WebwinkelKeur</span>
                            </div>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#E5006C] hover:border-[#E5006C] transition-colors"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
