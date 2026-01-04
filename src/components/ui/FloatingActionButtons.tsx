'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

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
            nl: 'Meet de binnenzijde van het kozijn op 3 punten (boven, midden, onder) en neem de kleinste maat. Bekijk onze meetgids voor gedetailleerde instructies.',
            en: 'Measure the inside of the frame at 3 points (top, middle, bottom) and take the smallest measurement. View our measuring guide for detailed instructions.',
        },
        selfInstall: {
            nl: 'Ja, al onze producten worden geleverd met duidelijke montage-instructies. Voor wie dat wenst, bieden we ook professionele montage aan.',
            en: 'Yes, all our products come with clear installation instructions. For those who prefer, we also offer professional installation.',
        },
        honeycomb: {
            nl: 'Double cell heeft twee lagen honingraat voor maximale isolatie (tot 25% energiebesparing). Single cell is goedkoper maar biedt minder isolatie.',
            en: 'Double cell has two layers of honeycomb for maximum insulation (up to 25% energy savings). Single cell is cheaper but offers less insulation.',
        },
        childSafe: {
            nl: 'Ja, we bieden koordloze opties (Smartcord) die volledig kindveilig zijn.',
            en: 'Yes, we offer cordless options (Smartcord) that are fully child-safe.',
        },
    },
};

const FloatingActionButtons = () => {
    const t = useTranslations('Chatbot');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const phoneNumber = '31612345678'; // Replace with actual number
    const whatsappMessage = encodeURIComponent('Hallo, ik heb een vraag over uw producten.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    const phoneUrl = `tel:+${phoneNumber}`;

    // Initialize welcome message with translation
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

    // RAG search with locale awareness
    const searchKnowledge = (query: string): { answer: string; sources: string[] } => {
        const queryLower = query.toLowerCase();
        const sources: string[] = [];
        let answer = '';

        // Detect locale from query patterns
        const isEnglish = queryLower.includes('product') || queryLower.includes('price') ||
            queryLower.includes('delivery') || queryLower.includes('contact') ||
            queryLower.includes('what') || queryLower.includes('how');
        const locale = isEnglish ? 'en' : 'nl';

        // Check for product queries
        if (queryLower.includes('hor') || queryLower.includes('insect') || queryLower.includes('mug') ||
            queryLower.includes('screen') || queryLower.includes('product')) {
            const product = knowledgeBase.products['plisse-horren'];
            answer = `${t('responses.products_horren')}\n\n${t('responses.available_types')}: ${product.types.join(', ')}.\n\n${t('responses.prices_label')}: ${product.prices}\n\n${t('responses.features')}: ${product.features.join(', ')}.`;
            sources.push('Products > Plissé Screens');
        }

        if (queryLower.includes('gordijn') || queryLower.includes('curtain') || queryLower.includes('zonwering') ||
            queryLower.includes('verduister') || queryLower.includes('honeycomb') || queryLower.includes('blackout')) {
            const product = knowledgeBase.products['plisse-gordijnen'];
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.products_gordijnen')}\n\n${t('responses.available_types')}: ${product.types.join(', ')}.\n\n${t('responses.prices_label')}: ${product.prices}\n\n${t('responses.features')}: ${product.features.join(', ')}.`;
            sources.push('Products > Plissé Curtains');
        }

        // Check for service queries
        if (queryLower.includes('lever') || queryLower.includes('bezorg') || queryLower.includes('verzend') ||
            queryLower.includes('deliver') || queryLower.includes('ship')) {
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.shipping')}: ${knowledgeBase.services.delivery[locale]}`;
            sources.push('Service > Delivery');
        }

        if (queryLower.includes('montage') || queryLower.includes('instal') || queryLower.includes('plaats')) {
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.installation')}: ${knowledgeBase.services.installation[locale]}`;
            sources.push('Service > Installation');
        }

        if (queryLower.includes('staal') || queryLower.includes('kleur') || queryLower.includes('sample') || queryLower.includes('color')) {
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.samples')}: ${knowledgeBase.services.samples[locale]}`;
            sources.push('Service > Samples');
        }

        if (queryLower.includes('garantie') || queryLower.includes('warranty')) {
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.warranty')}: ${knowledgeBase.services.warranty[locale]}`;
            sources.push('Service > Warranty');
        }

        if (queryLower.includes('retour') || queryLower.includes('terugstuur') || queryLower.includes('return')) {
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.returns')}: ${knowledgeBase.services.returns[locale]}`;
            sources.push('Service > Returns');
        }

        // Check for contact queries
        if (queryLower.includes('contact') || queryLower.includes('telefoon') || queryLower.includes('email') ||
            queryLower.includes('adres') || queryLower.includes('bereik') || queryLower.includes('phone') || queryLower.includes('address')) {
            answer += answer ? '\n\n' : '';
            answer += `${t('responses.contact_reach')}:\n📞 ${knowledgeBase.contact.phone}\n✉️ ${knowledgeBase.contact.email}\n📍 ${knowledgeBase.contact.address}\n🕐 ${knowledgeBase.contact.hours[locale]}`;
            sources.push('Contact');
        }

        // Check for FAQ queries
        if (queryLower.includes('meet') || queryLower.includes('opmeten') || queryLower.includes('measure')) {
            answer += answer ? '\n\n' : '';
            answer += knowledgeBase.faq.measurement[locale];
            sources.push('FAQ > Measuring');
        }

        if ((queryLower.includes('zelf') && queryLower.includes('monter')) || queryLower.includes('self install')) {
            answer += answer ? '\n\n' : '';
            answer += knowledgeBase.faq.selfInstall[locale];
            sources.push('FAQ > Self Installation');
        }

        if (queryLower.includes('single') || queryLower.includes('double') || queryLower.includes('cell')) {
            answer += answer ? '\n\n' : '';
            answer += knowledgeBase.faq.honeycomb[locale];
            sources.push('FAQ > Honeycomb Types');
        }

        if (queryLower.includes('kind') || queryLower.includes('veilig') || queryLower.includes('koord') ||
            queryLower.includes('child') || queryLower.includes('safe')) {
            answer += answer ? '\n\n' : '';
            answer += knowledgeBase.faq.childSafe[locale];
            sources.push('FAQ > Child Safety');
        }

        // Check for price queries
        if (queryLower.includes('prijs') || queryLower.includes('kost') || queryLower.includes('€') ||
            queryLower.includes('euro') || queryLower.includes('price') || queryLower.includes('cost')) {
            answer += answer ? '\n\n' : '';
            const priceInfo = locale === 'nl'
                ? `Onze prijzen:\n• Plissé Horren: ${knowledgeBase.products['plisse-horren'].prices}\n• Plissé Gordijnen: ${knowledgeBase.products['plisse-gordijnen'].prices}\n\nGebruik onze prijscalculator voor een exacte prijsberekening op maat.`
                : `Our prices:\n• Pleated Screens: ${knowledgeBase.products['plisse-horren'].prices}\n• Pleated Curtains: ${knowledgeBase.products['plisse-gordijnen'].prices}\n\nUse our price calculator for an exact custom price calculation.`;
            answer += priceInfo;
            sources.push('Prices');
        }

        // Default response if no match
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

        // Simulate typing delay
        await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

        // Get RAG response
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

    return (
        <>
            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
                {/* Expanded buttons */}
                {isExpanded && (
                    <div className="flex flex-col gap-3 animate-fadeIn">
                        {actionButtons.map((button, index) => (
                            <div
                                key={button.id}
                                className="flex items-center gap-3 animate-slideUp"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* Label */}
                                <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg shadow-lg whitespace-nowrap">
                                    {button.label}
                                </span>

                                {/* Button */}
                                {button.isLink ? (
                                    <a
                                        href={button.href}
                                        target={button.id === 'whatsapp' ? '_blank' : undefined}
                                        rel={button.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                                        className={`w-12 h-12 ${button.color} text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110`}
                                        aria-label={button.label}
                                    >
                                        <i className={`${button.icon} text-lg`}></i>
                                    </a>
                                ) : (
                                    <button
                                        onClick={button.onClick}
                                        className={`w-12 h-12 ${button.color} text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110`}
                                        aria-label={button.label}
                                    >
                                        <i className={`${button.icon} text-lg`}></i>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Main toggle button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`w-14 h-14 ${isExpanded ? 'bg-gray-600 rotate-45' : 'bg-primary'} hover:bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all duration-300`}
                    aria-label={isExpanded ? 'Close menu' : 'Open contact menu'}
                >
                    <i className={`fas ${isExpanded ? 'fa-plus' : 'fa-headset'} text-xl`}></i>
                </button>
            </div>

            {/* Chat Window */}
            {isChatOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[80vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-fadeIn">
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
                                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                        {t('chat.status')}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsChatOpen(false)}
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
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
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
                                        onClick={() => {
                                            setInput(action.query);
                                        }}
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
                </div>
            )}
        </>
    );
};

export default FloatingActionButtons;
