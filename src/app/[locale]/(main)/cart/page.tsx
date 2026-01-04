'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';

export default function CartPage() {
    const t = useTranslations('Cart'); // Assuming we might add translations later, but for now using hardcoded or generic

    // Mock data for visualization until we have real cart state
    const mockItems = [
        {
            id: 1,
            title: 'Plissé Hordeur - Premium',
            subtitle: 'Op maat gemaakt',
            price: 249.00,
            image: '/images/products/plisse/door-1.jpg',
            specs: ['Breedte: 90cm', 'Hoogte: 210cm', 'Kleur: Antraciet (RAL 7016)']
        }
    ];

    const subtotal = 249.00;
    const shipping = 0;
    const total = 249.00;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">
                        Winkelwagen
                    </h1>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        <ScrollAnimation delay={0.1}>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
                                {mockItems.map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                                        {/* Image Placeholder */}
                                        <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-xl flex-shrink-0 relative overflow-hidden">
                                            {/* Ideally use actual image, placeholder for now */}
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                                <i className="fas fa-image text-2xl"></i>
                                            </div>
                                        </div>

                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
                                                    <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400 mb-3">
                                                        {item.specs.map((spec, idx) => (
                                                            <span key={idx} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                                                {spec}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <span className="font-bold text-lg text-primary">€{item.price.toFixed(2)}</span>
                                            </div>

                                            <div className="flex justify-between items-end mt-2">
                                                <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-600 rounded-lg p-1">
                                                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition">-</button>
                                                    <span className="w-8 text-center text-sm font-medium">1</span>
                                                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition">+</button>
                                                </div>
                                                <button className="text-red-500 hover:text-red-600 text-sm font-medium transition">
                                                    <i className="far fa-trash-alt mr-1"></i> Verwijderen
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <ScrollAnimation delay={0.2}>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 sticky top-24">
                                <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6">
                                    Overzicht
                                </h2>

                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Subtotaal</span>
                                        <span>€{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Verzendkosten</span>
                                        <span className="text-green-500 font-medium">Gratis</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-lg text-gray-900 dark:text-white">Totaal</span>
                                        <span className="font-bold text-2xl text-primary">€{total.toFixed(2)}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Inclusief BTW</p>
                                </div>

                                <Link href="/success" className="block w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl text-center shadow-lg shadow-primary/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                                    Afrekenen <i className="fas fa-arrow-right ml-2"></i>
                                </Link>

                                <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs">
                                    <i className="fas fa-lock"></i> Veilig betalen met SSL
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}
