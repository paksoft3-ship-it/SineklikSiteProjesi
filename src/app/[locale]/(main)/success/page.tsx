'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { triggerCelebration } from '@/lib/celebration';

export default function BedanktPage() {
    const t = useTranslations('HomePage'); // Using existing translations for now or generic

    useEffect(() => {
        // Trigger celebration on mount
        triggerCelebration();
    }, []);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
                <i className="fas fa-check text-4xl text-green-600 dark:text-green-400"></i>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Bedankt voor uw bestelling!
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
                We hebben uw bestelling succesvol ontvangen. U ontvangt binnen enkele minuten een bevestiging per e-mail.
            </p>

            <div className="flex gap-4">
                <Link
                    href="/"
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    Terug naar home
                </Link>
            </div>
        </div>
    );
}
