'use client';

import { useState, useRef, useEffect } from 'react';

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
      description: 'Hoogwaardige plissé horren voor deuren, ramen en balkons. Ruimtebesparend en elegant.',
      types: ['Plissé Hordeur', 'Plissé Raamhor', 'Glazen Balkon Hor', 'Vaste Hor', 'Binnenmontage', 'Hor + Gordijn Combi', 'Drempelloze Hor'],
      prices: 'Vanaf €69 tot €299',
      features: ['Aluminium frame', '5 jaar garantie', 'Op maat gemaakt', 'Professionele montage beschikbaar'],
    },
    'plisse-gordijnen': {
      name: 'Plissé Gordijnen',
      description: 'Stijlvolle plissé gordijnen met verschillende lichtdoorlatendheid opties.',
      types: ['Honeycomb/Duette', 'Verduisterend', 'Lichtdoorlatend (70%)', 'Kleuropties'],
      prices: 'Vanaf €69 tot €129',
      features: ['100+ kleuren', 'Energiebesparend', 'Top-down/bottom-up mogelijk', 'Gratis stalen'],
    },
  },
  services: {
    delivery: 'Gratis bezorging vanaf €50. Levertijd 10-14 werkdagen voor op maat gemaakte producten.',
    installation: 'Professionele montage beschikbaar voor €45-€75 afhankelijk van product.',
    samples: 'Gratis kleurstalen beschikbaar. Bestel via onze website en ontvang binnen 3 werkdagen.',
    warranty: '5 jaar garantie op alle producten.',
    returns: 'Standaardmaten kunnen binnen 30 dagen kosteloos worden geretourneerd. Maatwerk uitgesloten.',
  },
  contact: {
    phone: '+31 (0)20 123 4567',
    email: 'info@windowspecialist.nl',
    address: 'Herengracht 123, 1015 BK Amsterdam',
    hours: 'Ma-Vr: 09:00-18:00, Za: 10:00-17:00',
  },
  faq: [
    { q: 'Hoe meet ik mijn raam?', a: 'Meet de binnenzijde van het kozijn op 3 punten (boven, midden, onder) en neem de kleinste maat. Bekijk onze meetgids voor gedetailleerde instructies.' },
    { q: 'Kan ik zelf monteren?', a: 'Ja, al onze producten worden geleverd met duidelijke montage-instructies. Voor wie dat wenst, bieden we ook professionele montage aan.' },
    { q: 'Wat is het verschil tussen single en double cell?', a: 'Double cell heeft twee lagen honingraat voor maximale isolatie (tot 25% energiebesparing). Single cell is goedkoper maar biedt minder isolatie.' },
    { q: 'Zijn de producten kindveilig?', a: 'Ja, we bieden koordloze opties (Smartcord) die volledig kindveilig zijn.' },
  ],
};

// Simple RAG search function
const searchKnowledge = (query: string): { answer: string; sources: string[] } => {
  const queryLower = query.toLowerCase();
  const sources: string[] = [];
  let answer = '';

  // Check for product queries
  if (queryLower.includes('hor') || queryLower.includes('insect') || queryLower.includes('mug')) {
    const product = knowledgeBase.products['plisse-horren'];
    answer = `${product.description}\n\nBeschikbare types: ${product.types.join(', ')}.\n\nPrijzen: ${product.prices}\n\nKenmerken: ${product.features.join(', ')}.`;
    sources.push('Producten > Plissé Horren');
  }
  
  if (queryLower.includes('gordijn') || queryLower.includes('zonwering') || queryLower.includes('verduister') || queryLower.includes('honeycomb')) {
    const product = knowledgeBase.products['plisse-gordijnen'];
    answer += answer ? '\n\n' : '';
    answer += `${product.description}\n\nBeschikbare types: ${product.types.join(', ')}.\n\nPrijzen: ${product.prices}\n\nKenmerken: ${product.features.join(', ')}.`;
    sources.push('Producten > Plissé Gordijnen');
  }

  // Check for service queries
  if (queryLower.includes('lever') || queryLower.includes('bezorg') || queryLower.includes('verzend')) {
    answer += answer ? '\n\n' : '';
    answer += `Verzending: ${knowledgeBase.services.delivery}`;
    sources.push('Service > Bezorging');
  }

  if (queryLower.includes('montage') || queryLower.includes('instal') || queryLower.includes('plaats')) {
    answer += answer ? '\n\n' : '';
    answer += `Montage: ${knowledgeBase.services.installation}`;
    sources.push('Service > Montage');
  }

  if (queryLower.includes('staal') || queryLower.includes('kleur') || queryLower.includes('sample')) {
    answer += answer ? '\n\n' : '';
    answer += `Stalen: ${knowledgeBase.services.samples}`;
    sources.push('Service > Stalen');
  }

  if (queryLower.includes('garantie') || queryLower.includes('warranty')) {
    answer += answer ? '\n\n' : '';
    answer += `Garantie: ${knowledgeBase.services.warranty}`;
    sources.push('Service > Garantie');
  }

  if (queryLower.includes('retour') || queryLower.includes('terugstuur') || queryLower.includes('ruil')) {
    answer += answer ? '\n\n' : '';
    answer += `Retourneren: ${knowledgeBase.services.returns}`;
    sources.push('Service > Retourneren');
  }

  // Check for contact queries
  if (queryLower.includes('contact') || queryLower.includes('telefoon') || queryLower.includes('email') || queryLower.includes('adres') || queryLower.includes('bereik')) {
    answer += answer ? '\n\n' : '';
    answer += `U kunt ons bereiken via:\n📞 ${knowledgeBase.contact.phone}\n✉️ ${knowledgeBase.contact.email}\n📍 ${knowledgeBase.contact.address}\n🕐 ${knowledgeBase.contact.hours}`;
    sources.push('Contact');
  }

  // Check for FAQ queries
  if (queryLower.includes('meet') || queryLower.includes('opmeten')) {
    answer += answer ? '\n\n' : '';
    answer += knowledgeBase.faq[0].a;
    sources.push('FAQ > Opmeten');
  }

  if (queryLower.includes('zelf') && queryLower.includes('monter')) {
    answer += answer ? '\n\n' : '';
    answer += knowledgeBase.faq[1].a;
    sources.push('FAQ > Zelf monteren');
  }

  if (queryLower.includes('single') || queryLower.includes('double') || queryLower.includes('cell')) {
    answer += answer ? '\n\n' : '';
    answer += knowledgeBase.faq[2].a;
    sources.push('FAQ > Honeycomb types');
  }

  if (queryLower.includes('kind') || queryLower.includes('veilig') || queryLower.includes('koord')) {
    answer += answer ? '\n\n' : '';
    answer += knowledgeBase.faq[3].a;
    sources.push('FAQ > Kindveiligheid');
  }

  // Check for price queries
  if (queryLower.includes('prijs') || queryLower.includes('kost') || queryLower.includes('€') || queryLower.includes('euro')) {
    answer += answer ? '\n\n' : '';
    answer += `Onze prijzen:\n• Plissé Horren: ${knowledgeBase.products['plisse-horren'].prices}\n• Plissé Gordijnen: ${knowledgeBase.products['plisse-gordijnen'].prices}\n\nGebruik onze prijscalculator voor een exacte prijsberekening op maat.`;
    sources.push('Prijzen');
  }

  // Default response if no match
  if (!answer) {
    answer = `Bedankt voor uw vraag! Ik kan u helpen met informatie over:\n\n• **Producten**: Plissé horren en gordijnen\n• **Prijzen**: Vanaf €69\n• **Services**: Bezorging, montage, stalen\n• **Contact**: Telefoon, email, adres\n\nKunt u uw vraag specifieker stellen? Of neem direct contact met ons op:\n📞 ${knowledgeBase.contact.phone}`;
    sources.push('Algemeen');
  }

  return { answer, sources };
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hallo! 👋 Welkom bij Window Specialist. Hoe kan ik u vandaag helpen?\n\nIk kan u informeren over onze producten, prijzen, levertijden en meer.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    { label: 'Producten', query: 'Welke producten verkopen jullie?' },
    { label: 'Prijzen', query: 'Wat zijn de prijzen?' },
    { label: 'Levertijd', query: 'Wat is de levertijd?' },
    { label: 'Contact', query: 'Hoe kan ik contact opnemen?' },
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary hover:bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center transition-transform hover:scale-110 ${isOpen ? 'hidden' : ''}`}
      >
        <i className="fas fa-comments text-xl"></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] max-h-[80vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-robot"></i>
                </div>
                <div>
                  <h3 className="font-bold">Window Specialist</h3>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Online - Direct antwoord
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
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
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-xs opacity-70">
                        <i className="fas fa-info-circle mr-1"></i>
                        Bron: {message.sources.join(', ')}
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
                placeholder="Typ uw vraag..."
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
              Antwoorden zijn gebaseerd op onze website informatie
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
