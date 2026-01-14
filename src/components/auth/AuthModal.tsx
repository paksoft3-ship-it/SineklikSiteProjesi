'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { easings, durations } from '@/lib/animation-config';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, signup } = useAuth();

  // Reset mode when initialMode changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setError('');
    }
  }, [isOpen, initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      let success = false;

      if (mode === 'login') {
        success = await login(email, password);
        if (!success) {
          setError('Ongeldige inloggegevens. Probeer opnieuw.');
        }
      } else {
        if (password.length < 6) {
          setError('Wachtwoord moet minimaal 6 tekens bevatten.');
          setIsSubmitting(false);
          return;
        }
        success = await signup(name, email, password);
        if (!success) {
          setError('Registratie mislukt. Probeer opnieuw.');
        }
      }

      if (success) {
        onClose();
        setEmail('');
        setPassword('');
        setName('');
      }
    } catch (err) {
      setError('Er is een fout opgetreden. Probeer later opnieuw.');
    }

    setIsSubmitting(false);
  };

  // Backdrop animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: durations.normal, ease: easings.smooth },
    },
    exit: {
      opacity: 0,
      transition: { duration: durations.fast, ease: easings.smooth },
    },
  };

  // Modal animation variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: { duration: durations.fast, ease: easings.smooth },
    },
  };

  // Tab underline animation
  const tabUnderlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
  };

  // Form content slide animation
  const formContentVariants = {
    hidden: { opacity: 0, x: mode === 'login' ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: durations.normal, ease: easings.smooth },
    },
    exit: {
      opacity: 0,
      x: mode === 'login' ? 20 : -20,
      transition: { duration: durations.fast },
    },
  };

  // Stagger container for form fields
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Individual field animation
  const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.normal, ease: easings.smooth },
    },
  };

  // Error shake animation
  const errorVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        x: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: durations.fast },
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: durations.fast },
    },
  };

  // Button hover variants
  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: durations.fast, ease: easings.snappy },
    },
    tap: { scale: 0.98 },
  };

  // Close button variants
  const closeButtonVariants = {
    rest: { rotate: 0 },
    hover: {
      rotate: 90,
      transition: { duration: durations.normal, ease: easings.smooth },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              variants={closeButtonVariants}
              initial="rest"
              whileHover="hover"
            >
              <i className="fas fa-times text-xl"></i>
            </motion.button>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setMode('login')}
                className={`flex-1 py-4 text-center font-semibold text-sm transition-colors relative ${mode === 'login'
                    ? 'text-primary'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
              >
                Inloggen
                {mode === 'login' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                    variants={tabUnderlineVariants}
                    initial="hidden"
                    animate="visible"
                    layoutId="tabUnderline"
                  />
                )}
              </button>
              <button
                onClick={() => setMode('signup')}
                className={`flex-1 py-4 text-center font-semibold text-sm transition-colors relative ${mode === 'signup'
                    ? 'text-primary'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
              >
                Registreren
                {mode === 'signup' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                    variants={tabUnderlineVariants}
                    initial="hidden"
                    animate="visible"
                    layoutId="tabUnderline"
                  />
                )}
              </button>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  variants={formContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Header Text */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: durations.normal }}
                  >
                    <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-2">
                      {mode === 'login' ? 'Welkom terug' : 'Maak een account'}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {mode === 'login'
                        ? 'Log in om toegang te krijgen tot uw bestellingen'
                        : 'Registreer om uw bestellingen te beheren'}
                    </p>
                  </motion.div>

                  {/* Social Login (Prominent) */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: durations.normal }}
                  >
                    <motion.button
                      className="w-full py-3 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-3 group"
                      variants={buttonVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <motion.img
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {mode === 'login' ? 'Inloggen met Google' : 'Aanmelden met Google'}
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    className="relative mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: durations.normal }}
                  >
                    <div className="absolute inset-0 flex items-center">
                      <motion.div
                        className="w-full border-t border-gray-200 dark:border-gray-700"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.25, duration: durations.normal, ease: easings.smooth }}
                      />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white dark:bg-gray-800 text-gray-500">of met e-mail</span>
                    </div>
                  </motion.div>

                  {/* Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    variants={formContainerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <AnimatePresence mode="wait">
                      {mode === 'signup' && (
                        <motion.div
                          key="name-field"
                          variants={fieldVariants}
                          initial="hidden"
                          animate="visible"
                          exit={{ opacity: 0, y: -10, transition: { duration: durations.fast } }}
                        >
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Naam
                          </label>
                          <div className="relative">
                            <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <motion.input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                              placeholder="Uw naam"
                              required
                              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div variants={fieldVariants}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-mailadres
                      </label>
                      <div className="relative">
                        <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <motion.input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                          placeholder="uw@email.nl"
                          required
                          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fieldVariants}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Wachtwoord
                      </label>
                      <div className="relative">
                        <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <motion.input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                          placeholder="••••••••"
                          required
                          minLength={6}
                          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
                        />
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {error && (
                        <motion.div
                          className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm flex items-center gap-2"
                          variants={errorVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <i className="fas fa-exclamation-circle flex-shrink-0"></i>
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-primary hover:bg-blue-600 disabled:bg-blue-400 text-white font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                      variants={buttonVariants}
                      initial="rest"
                      whileHover={!isSubmitting ? 'hover' : undefined}
                      whileTap={!isSubmitting ? 'tap' : undefined}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span
                            key="loading"
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.i
                              className="fas fa-spinner"
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            />
                            Even geduld...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="submit"
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            {mode === 'login' ? 'Inloggen' : 'Account aanmaken'}
                            <motion.i
                              className="fas fa-arrow-right text-sm"
                              whileHover={{ x: 3 }}
                            />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.form>

                  {/* Footer Info */}
                  <motion.p
                    className="text-center text-xs text-gray-400 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: durations.normal }}
                  >
                    Door door te gaan gaat u akkoord met onze{' '}
                    <a href="#" className="underline hover:text-gray-600 dark:hover:text-gray-300">voorwaarden</a>
                    {' '}en{' '}
                    <a href="#" className="underline hover:text-gray-600 dark:hover:text-gray-300">privacybeleid</a>.
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
