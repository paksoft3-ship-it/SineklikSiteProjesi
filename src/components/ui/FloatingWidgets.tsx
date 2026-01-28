'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import MobileBottomBar from './MobileBottomBar';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    sources?: string[];
}

// Website knowledge base for RAG
const knowledgeBase = {
    products: {
        'plisse-horren': {
            name: 'Plissé Horren',
            types: ['Plissé Hordeur', 'Plissé Raamhor', 'Glazen Balkon Hor', 'Vaste Hor', 'Binnenmontage', 'Hor + Gordijn Combi', 'Drempelloze Hor'],
            prices: '€69 - €299',
            features: ['Aluminium frame', '5 jaar garantie', 'Op maat gemaakt', 'Professionele montage beschikbaar'],
        },
        'plisse-gordijnen': {
            name: 'Plissé Gordijnen',
            types: ['Honeycomb/Duette', 'Verduisterend', 'Lichtdoorlatend (70%)', 'Kleuropties'],
            prices: '€69 - €129',
            features: ['100+ kleuren', 'Energiebesparend', 'Top-down/bottom-up mogelijk', 'Gratis stalen'],
        },
    },
    services: {
        delivery: {
            nl: 'Gratis bezorging vanaf €50. Levertijd 10-14 werkdagen voor op maat gemaakte producten.',
            en: 'Free delivery from €50. Delivery time 10-14 working days for custom-made products.',
        },
        installation: {
            nl: 'Professionele montage beschikbaar voor €45-€75 afhankelijk van product.',
            en: 'Professional installation available for €45-€75 depending on product.',
        },
        samples: {
            nl: 'Gratis kleurstalen beschikbaar. Bestel via onze website en ontvang binnen 3 werkdagen.',
            en: 'Free color samples available. Order via our website and receive within 3 working days.',
        },
        warranty: {
            nl: '5 jaar garantie op alle producten.',
            en: '5 year warranty on all products.',
        },
        returns: {
            nl: 'Standaardmaten kunnen binnen 30 dagen kosteloos worden geretourneerd. Maatwerk uitgesloten.',
            en: 'Standard sizes can be returned free of charge within 30 days. Custom-made excluded.',
        },
    },
    contact: {
        phone: '+31 (0)20 123 4567',
        email: 'info@windowspecialist.nl',
        address: 'Herengracht 123, 1015 BK Amsterdam',
        hours: {
            nl: 'Ma-Vr: 09:00-18:00, Za: 10:00-17:00',
            en: 'Mon-Fri: 09:00-18:00, Sat: 10:00-17:00',
        },
    },
    faq: {
        measurement: {
            nl: 'Meet de binnenzijde van het kozijn op 3 punten (boven, midden, onder) en neem de kleinste maat.',
            en: 'Measure the inside of the frame at 3 points (top, middle, bottom) and take the smallest measurement.',
        },
        selfInstall: {
            nl: 'Ja, al onze producten worden geleverd met duidelijke montage-instructies.',
            en: 'Yes, all our products come with clear installation instructions.',
        },
        honeycomb: {
            nl: 'Double cell heeft twee lagen honingraat voor maximale isolatie.',
            en: 'Double cell has two layers of honeycomb for maximum insulation.',
        },
        childSafe: {
            nl: 'Ja, we bieden koordloze opties (Smartcord) die volledig kindveilig zijn.',
            en: 'Yes, we offer cordless options (Smartcord) that are fully child-safe.',
        },
    },
};

const FloatingWidgets = () => {
    const t = useTranslations('Chatbot');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const phoneNumber = '31612345678';
    const whatsappMessage = encodeURIComponent('Hallo, ik heb een vraag over uw producten.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    const phoneUrl = `tel:+${phoneNumber}`;

    useEffect(() => {
        if (!isInitialized) {
            setMessages([{
                id: '1',
                role: 'assistant',
                content: t('chat.welcome'),
                timestamp: new Date(),
            }]);
            setIsInitialized(true);
        }
    }, [t, isInitialized]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const searchKnowledge = (query: string): { answer: string; sources: string[] } => {
        const queryLower = query.toLowerCase();
        const sources: string[] = [];
        let answer = '';
        const locale = 'nl';

        if (queryLower.includes('hor') || queryLower.includes('insect') || queryLower.includes('mug') || queryLower.includes('screen') || queryLower.includes('product')) {
            const product = knowledgeBase.products['plisse-horren'];
            answer = `${t('responses.products_horren')}\n\nBeschikbare types: ${product.types.join(', ')}.\n\nPrijzen: ${product.prices}`;
            sources.push('Products > Plissé Screens');
        }

        if (queryLower.includes('gordijn') || queryLower.includes('curtain') || queryLower.includes('zonwering')) {
            const product = knowledgeBase.products['plisse-gordijnen'];
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.products_gordijnen')}\n\nBeschikbare types: ${product.types.join(', ')}.\n\nPrijzen: ${product.prices}`;
            sources.push('Products > Plissé Curtains');
        }

        if (queryLower.includes('lever') || queryLower.includes('bezorg') || queryLower.includes('verzend')) {
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.shipping')}: ${knowledgeBase.services.delivery[locale]}`;
            sources.push('Service > Delivery');
        }

        if (queryLower.includes('contact') || queryLower.includes('telefoon') || queryLower.includes('email')) {
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.contact_reach')}:\n📞 ${knowledgeBase.contact.phone}\n✉️ ${knowledgeBase.contact.email}`;
            sources.push('Contact');
        }

        if (queryLower.includes('prijs') || queryLower.includes('kost') || queryLower.includes('€')) {
            answer += answer ? '\n\n' : '';
            answer += `Onze prijzen:\n• Plissé Horren: ${knowledgeBase.products['plisse-horren'].prices}\n• Plissé Gordijnen: ${knowledgeBase.products['plisse-gordijnen'].prices}`;
            sources.push('Prices');
        }

        if (!answer) {
            answer = `${t('responses.default_response')}\n📞 ${knowledgeBase.contact.phone}`;
            sources.push('General');
        }

        return { answer, sources };
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

        const { answer, sources } = searchKnowledge(input);

        const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: answer,
            timestamp: new Date(),
            sources,
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setIsTyping(false);
    };

    const quickActions = [
        { label: t('quick_actions.products'), query: t('quick_queries.products') },
        { label: t('quick_actions.prices'), query: t('quick_queries.prices') },
        { label: t('quick_actions.delivery'), query: t('quick_queries.delivery') },
        { label: t('quick_actions.contact'), query: t('quick_queries.contact') },
    ];

    const actionButtons = [
        {
            id: 'phone',
            label: t('buttons.phone'),
            icon: 'fas fa-phone',
            color: 'bg-blue-500 hover:bg-blue-600',
            href: phoneUrl,
            isLink: true,
        },
        {
            id: 'whatsapp',
            label: t('buttons.whatsapp'),
            icon: 'fab fa-whatsapp',
            color: 'bg-green-500 hover:bg-green-600',
            href: whatsappUrl,
            isLink: true,
        },
        {
            id: 'chat',
            label: t('buttons.chat'),
            icon: 'fas fa-comments',
            color: 'bg-primary hover:bg-blue-600',
            onClick: () => {
                setIsChatOpen(true);
                setIsExpanded(false);
            },
            isLink: false,
        },
    ];

    const handleChatOpen = () => {
        setIsChatOpen(true);
        setIsReviewOpen(false);
    };

    const handleReviewOpen = () => {
        setIsReviewOpen(!isReviewOpen);
        setIsChatOpen(false);
    };

    return (
        <>
            {/* Mobile Bottom Bar */}
            <MobileBottomBar onChatOpen={handleChatOpen} onReviewOpen={handleReviewOpen} />

            {/* Desktop: Trust Widget (Right side, vertically centered) */}
            <motion.div
                className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#E5006C] shadow-lg rounded-l-xl p-2 border border-r-0 border-white/20 flex-col items-center gap-3 cursor-pointer group transition-all"
                onMouseEnter={() => setIsReviewOpen(true)}
                onMouseLeave={() => setIsReviewOpen(false)}
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

            {/* Review Popup */}
            <AnimatePresence>
                {isReviewOpen && (
                    <>
                        {/* Desktop popup (appears to the left) */}
                        <motion.div
                            className="hidden md:block fixed right-16 top-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-[300px] border border-gray-100 dark:border-gray-700"
                            initial={{ x: 50, opacity: 0, scale: 0.95 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: 50, opacity: 0, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onMouseEnter={() => setIsReviewOpen(true)}
                            onMouseLeave={() => setIsReviewOpen(false)}
                        >
                            <TrustContent />
                        </motion.div>

                        {/* Mobile popup (appears above the bottom bar) */}
                        <motion.div
                            className="block md:hidden fixed bottom-20 right-4 left-4 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 border border-gray-100 dark:border-gray-700"
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                            <button
                                onClick={() => setIsReviewOpen(false)}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                            <TrustContent />
                        </motion.div>

                        {/* Mobile backdrop */}
                        <motion.div
                            className="block md:hidden fixed inset-0 bg-black/30 z-40"
                            style={{ bottom: '72px' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsReviewOpen(false)}
                        />
                    </>
                )}
            </AnimatePresence>

            {/* Desktop: Floating Action Buttons */}
            <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="flex flex-col gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {actionButtons.map((button, index) => (
                                <motion.div
                                    key={button.id}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg shadow-lg whitespace-nowrap">
                                        {button.label}
                                    </span>

                                    {button.isLink ? (
                                        <motion.a
                                            href={button.href}
                                            target={button.id === 'whatsapp' ? '_blank' : undefined}
                                            rel={button.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                                            className={`w-12 h-12 ${button.color} text-white rounded-full flex items-center justify-center shadow-lg`}
                                            whileHover={{ scale: 1.15 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i className={`${button.icon} text-lg`}></i>
                                        </motion.a>
                                    ) : (
                                        <motion.button
                                            onClick={button.onClick}
                                            className={`w-12 h-12 ${button.color} text-white rounded-full flex items-center justify-center shadow-lg`}
                                            whileHover={{ scale: 1.15 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i className={`${button.icon} text-lg`}></i>
                                        </motion.button>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`w-14 h-14 ${isExpanded ? 'bg-gray-600' : 'bg-primary'} text-white rounded-full shadow-lg flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                >
                    <i className={`fas ${isExpanded ? 'fa-plus' : 'fa-headset'} text-xl`} />
                </motion.button>
            </div>

            {/* Chat Window (Both mobile and desktop) */}
            <AnimatePresence>
                {isChatOpen && (
                    <>
                        {/* Desktop chat window */}
                        <motion.div
                            className="hidden md:flex fixed bottom-6 right-6 z-50 w-96 h-[600px] max-h-[80vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex-col overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        >
                            <ChatContent
                                messages={messages}
                                input={input}
                                setInput={setInput}
                                handleSend={handleSend}
                                isTyping={isTyping}
                                quickActions={quickActions}
                                messagesEndRef={messagesEndRef}
                                onClose={() => setIsChatOpen(false)}
                                t={t}
                            />
                        </motion.div>

                        {/* Mobile chat window (full screen with bottom bar space) */}
                        <motion.div
                            className="flex md:hidden fixed inset-x-0 top-0 z-50 bg-white dark:bg-gray-800 flex-col overflow-hidden"
                            style={{ bottom: '72px' }}
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <ChatContent
                                messages={messages}
                                input={input}
                                setInput={setInput}
                                handleSend={handleSend}
                                isTyping={isTyping}
                                quickActions={quickActions}
                                messagesEndRef={messagesEndRef}
                                onClose={() => setIsChatOpen(false)}
                                t={t}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

// Trust/Review Content Component
function TrustContent() {
    return (
        <>
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
        </>
    );
}

// Chat Content Component
interface ChatContentProps {
    messages: Message[];
    input: string;
    setInput: (value: string) => void;
    handleSend: () => void;
    isTyping: boolean;
    quickActions: { label: string; query: string }[];
    messagesEndRef: React.RefObject<HTMLDivElement>;
    onClose: () => void;
    t: (key: string) => string;
}

function ChatContent({
    messages,
    input,
    setInput,
    handleSend,
    isTyping,
    quickActions,
    messagesEndRef,
    onClose,
    t
}: ChatContentProps) {
    return (
        <>
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-blue-600 text-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <i className="fas fa-robot"></i>
                        </div>
                        <div>
                            <h3 className="font-bold">{t('chat.title')}</h3>
                            <p className="text-xs text-blue-100 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                {t('chat.status')}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                ? 'bg-primary text-white rounded-br-sm'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                                }`}
                        >
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            {message.sources && message.sources.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                                    <p className="text-xs opacity-70">
                                        <i className="fas fa-info-circle mr-1"></i>
                                        {t('chat.source')}: {message.sources.join(', ')}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-bl-sm px-4 py-3">
                            <div className="flex gap-1">
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className="w-2 h-2 bg-gray-400 rounded-full"
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 0.6,
                                            delay: i * 0.1,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && (
                <div className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2">
                        {quickActions.map((action, index) => (
                            <button
                                key={index}
                                onClick={() => setInput(action.query)}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition"
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={t('chat.placeholder')}
                        className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-full focus:ring-2 focus:ring-primary text-sm"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="w-10 h-10 bg-primary hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition"
                    >
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">
                    {t('chat.footer')}
                </p>
            </div>
        </>
    );
}

export default FloatingWidgets;
