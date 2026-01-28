'use client';

import { motion } from 'framer-motion';

interface MobileBottomBarProps {
    onChatOpen: () => void;
    onReviewOpen: () => void;
}

interface BottomBarButton {
    id: string;
    label: string;
    icon: string;
    color: string;
    badge?: string;
    href?: string;
    external?: boolean;
    onClick?: () => void;
}

const MobileBottomBar = ({ onChatOpen, onReviewOpen }: MobileBottomBarProps) => {
    const phoneNumber = '31612345678';
    const whatsappMessage = encodeURIComponent('Hallo, ik heb een vraag over uw producten.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    const phoneUrl = `tel:+${phoneNumber}`;

    const buttons: BottomBarButton[] = [
        {
            id: 'review',
            label: 'Review',
            icon: 'fas fa-star',
            badge: '9,6',
            color: 'bg-[#E5006C]',
            onClick: onReviewOpen,
        },
        {
            id: 'call',
            label: 'Bellen',
            icon: 'fas fa-phone',
            color: 'bg-blue-500',
            href: phoneUrl,
        },
        {
            id: 'whatsapp',
            label: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            color: 'bg-green-500',
            href: whatsappUrl,
            external: true,
        },
        {
            id: 'chat',
            label: 'Chat',
            icon: 'fas fa-comments',
            color: 'bg-primary',
            onClick: onChatOpen,
        },
    ];

    return (
        <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', damping: 25, stiffness: 300 }}
        >
            {/* Background with blur */}
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                {/* Safe area padding for iOS */}
                <div className="flex items-center justify-around px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
                    {buttons.map((button) => (
                        button.href ? (
                            <motion.a
                                key={button.id}
                                href={button.href}
                                target={button.external ? '_blank' : undefined}
                                rel={button.external ? 'noopener noreferrer' : undefined}
                                className="flex flex-col items-center gap-1 p-2 min-w-[60px]"
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className={`relative w-10 h-10 ${button.color} text-white rounded-full flex items-center justify-center shadow-md`}>
                                    <i className={`${button.icon} text-base`}></i>
                                    {button.badge && (
                                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-[#E5006C] text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                            {button.badge}
                                        </span>
                                    )}
                                </div>
                                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
                                    {button.label}
                                </span>
                            </motion.a>
                        ) : (
                            <motion.button
                                key={button.id}
                                onClick={button.onClick}
                                className="flex flex-col items-center gap-1 p-2 min-w-[60px]"
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className={`relative w-10 h-10 ${button.color} text-white rounded-full flex items-center justify-center shadow-md`}>
                                    <i className={`${button.icon} text-base`}></i>
                                    {button.badge && (
                                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-[#E5006C] text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                            {button.badge}
                                        </span>
                                    )}
                                </div>
                                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
                                    {button.label}
                                </span>
                            </motion.button>
                        )
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default MobileBottomBar;
