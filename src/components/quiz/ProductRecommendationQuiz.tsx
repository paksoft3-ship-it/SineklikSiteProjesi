'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/navigation';

interface QuizOption {
  id: string;
  label: string;
  icon: string;
  description?: string;
}

interface QuizStep {
  id: string;
  question: string;
  subtitle?: string;
  options: QuizOption[];
  multiple?: boolean;
}

interface ProductRecommendation {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  matchScore: number;
  features: string[];
  link: string;
}

const quizSteps: QuizStep[] = [
  {
    id: 'room',
    question: 'Voor welke ruimte zoekt u een oplossing?',
    subtitle: 'Selecteer de kamer waar u het product wilt plaatsen',
    options: [
      { id: 'woonkamer', label: 'Woonkamer', icon: 'fa-couch', description: 'Grote ramen, veel daglicht' },
      { id: 'slaapkamer', label: 'Slaapkamer', icon: 'fa-bed', description: 'Verduistering gewenst' },
      { id: 'keuken', label: 'Keuken', icon: 'fa-utensils', description: 'Vochtbestendig nodig' },
      { id: 'badkamer', label: 'Badkamer', icon: 'fa-bath', description: 'Vochtbestendig essentieel' },
      { id: 'balkon', label: 'Balkon/Terras', icon: 'fa-door-open', description: 'Deur of schuifpui' },
      { id: 'zolder', label: 'Zolder', icon: 'fa-house-user', description: 'Dakraam of schuin raam' },
    ],
  },
  {
    id: 'need',
    question: 'Wat is uw primaire behoefte?',
    subtitle: 'U kunt meerdere opties selecteren',
    multiple: true,
    options: [
      { id: 'insects', label: 'Insectenwering', icon: 'fa-bug', description: 'Houd insecten buiten' },
      { id: 'privacy', label: 'Privacy', icon: 'fa-eye-slash', description: 'Voorkom inkijk' },
      { id: 'light', label: 'Lichtregulatie', icon: 'fa-sun', description: 'Beheer daglicht' },
      { id: 'insulation', label: 'Isolatie', icon: 'fa-temperature-low', description: 'Warmte/koude weren' },
      { id: 'decoration', label: 'Decoratie', icon: 'fa-palette', description: 'Sfeer creëren' },
    ],
  },
  {
    id: 'window_type',
    question: 'Welk type raam of deur heeft u?',
    options: [
      { id: 'draai-kiep', label: 'Draai-kiepraam', icon: 'fa-window-restore', description: 'Standaard openslaand raam' },
      { id: 'schuif', label: 'Schuifraam/-pui', icon: 'fa-arrows-alt-h', description: 'Horizontaal schuivend' },
      { id: 'vast', label: 'Vast raam', icon: 'fa-square', description: 'Niet te openen' },
      { id: 'dakraam', label: 'Dakraam', icon: 'fa-skylight', description: 'Velux of ander merk' },
      { id: 'deur', label: 'Deur', icon: 'fa-door-open', description: 'Enkele of dubbele deur' },
    ],
  },
  {
    id: 'budget',
    question: 'Wat is uw budget per raam/deur?',
    options: [
      { id: 'budget', label: 'Budget', icon: 'fa-euro-sign', description: 'Tot €100' },
      { id: 'mid', label: 'Middensegment', icon: 'fa-coins', description: '€100 - €200' },
      { id: 'premium', label: 'Premium', icon: 'fa-gem', description: '€200+' },
    ],
  },
  {
    id: 'installation',
    question: 'Hoe wilt u het product monteren?',
    options: [
      { id: 'diy', label: 'Zelf monteren', icon: 'fa-hammer', description: 'DIY met handleiding' },
      { id: 'professional', label: 'Professionele montage', icon: 'fa-user-hard-hat', description: 'Wij komen langs' },
      { id: 'no-drill', label: 'Zonder boren', icon: 'fa-times-circle', description: 'Ideaal voor huurders' },
    ],
  },
];

const sampleRecommendations: ProductRecommendation[] = [
  {
    id: '1',
    name: 'Plissé Hordeur',
    description: 'De perfecte oplossing voor uw situatie. Ruimtebesparend en elegant.',
    price: 199,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    matchScore: 95,
    features: ['Ruimtebesparend', 'Eenvoudige montage', '5 jaar garantie'],
    link: '/products/plisse-screens/door',
  },
  {
    id: '2',
    name: 'Honeycomb Gordijn',
    description: 'Uitstekende isolatie én lichtregulatie in één.',
    price: 129,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    matchScore: 88,
    features: ['Energiebesparend', '100+ kleuren', 'Isolerend'],
    link: '/products/plisse-curtains/honeycomb',
  },
  {
    id: '3',
    name: 'Verduisterend Plissé',
    description: 'Perfect voor slaapkamers. 100% lichtblokkering.',
    price: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
    matchScore: 82,
    features: ['100% verduisterend', 'Thermisch isolerend', 'Kindveilig'],
    link: '/products/plisse-curtains/blackout',
  },
];

export default function ProductRecommendationQuiz({
  onComplete,
}: {
  onComplete?: (recommendations: ProductRecommendation[]) => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isComplete, setIsComplete] = useState(false);

  const step = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  const handleSelect = (optionId: string) => {
    if (step.multiple) {
      const current = (answers[step.id] as string[]) || [];
      const newAnswers = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      setAnswers({ ...answers, [step.id]: newAnswers });
    } else {
      setAnswers({ ...answers, [step.id]: optionId });

      // Auto-advance for single-select
      setTimeout(() => {
        if (currentStep < quizSteps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setIsComplete(true);
          onComplete?.(sampleRecommendations);
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
      onComplete?.(sampleRecommendations);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  const isSelected = (optionId: string) => {
    const answer = answers[step.id];
    if (Array.isArray(answer)) {
      return answer.includes(optionId);
    }
    return answer === optionId;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Stap {currentStep + 1} van {quizSteps.length}</span>
                <span>{Math.round(progress)}% voltooid</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <motion.h2
                    className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {step.question}
                  </motion.h2>
                  {step.subtitle && (
                    <motion.p
                      className="text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {step.subtitle}
                    </motion.p>
                  )}
                </div>

                {/* Options Grid */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                >
                  {step.options.map((option) => (
                    <motion.button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                        isSelected(option.id)
                          ? 'border-primary bg-primary/5 shadow-lg'
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary/50 bg-white dark:bg-gray-800'
                      }`}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSelected(option.id) && (
                        <motion.div
                          className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500 }}
                        >
                          <i className="fas fa-check text-white text-xs"></i>
                        </motion.div>
                      )}
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                        isSelected(option.id) ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-primary'
                      }`}>
                        <i className={`fas ${option.icon}`}></i>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {option.label}
                      </h3>
                      {option.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {option.description}
                        </p>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <motion.button
                onClick={handleBack}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  currentStep === 0
                    ? 'opacity-0 pointer-events-none'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-arrow-left mr-2"></i> Vorige
              </motion.button>

              {step.multiple && (
                <motion.button
                  onClick={handleNext}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!answers[step.id] || (answers[step.id] as string[]).length === 0}
                >
                  Volgende <i className="fas fa-arrow-right ml-2"></i>
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Success Animation */}
            <motion.div
              className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            >
              <motion.i
                className="fas fa-check text-3xl text-green-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>

            <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Uw persoonlijke aanbevelingen!
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Op basis van uw antwoorden hebben we de beste producten voor u geselecteerd.
            </p>

            {/* Recommendations */}
            <div className="space-y-4">
              {sampleRecommendations.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Link href={product.link as any}>
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition text-left"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-full">
                            {product.matchScore}% match
                          </span>
                          {index === 0 && (
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                              <i className="fas fa-star mr-1"></i>Top aanbeveling
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-primary font-bold">Vanaf €{product.price},-</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <i className="fas fa-chevron-right text-gray-400"></i>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <motion.button
                onClick={handleRestart}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-redo mr-2"></i> Opnieuw beginnen
              </motion.button>
              <Link href="/configurator">
                <motion.span
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-sliders-h mr-2"></i> Direct configureren
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
