'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

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
  // (Optional: depending on desired behavior, but good for consistency)
  if (!isOpen && mode !== initialMode) {
    setMode(initialMode);
  }

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

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
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
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
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        <div className="p-6">

          {/* Header Text */}
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-2">
              {mode === 'login' ? 'Welkom terug' : 'Maak een account'}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {mode === 'login'
                ? 'Log in om toegang te krijgen tot uw bestellingen'
                : 'Registreer om uw bestellingen te beheren'}
            </p>
          </div>

          {/* Social Login (Prominent) */}
          <div className="mb-6">
            <button className="w-full py-3 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-3 group">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {mode === 'login' ? 'Inloggen met Google' : 'Aanmelden met Google'}
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-800 text-gray-500">of met e-mail</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Naam
                </label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                    placeholder="Uw naam"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                E-mailadres
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                  placeholder="uw@email.nl"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Wachtwoord
              </label>
              <div className="relative">
                <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                <i className="fas fa-exclamation-circle flex-shrink-0"></i>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary hover:bg-blue-600 disabled:bg-blue-400 text-white font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Even geduld...
                </>
              ) : (
                <>
                  {mode === 'login' ? 'Inloggen' : 'Account aanmaken'}
                  <i className="fas fa-arrow-right text-sm"></i>
                </>
              )}
            </button>
          </form>

          {/* Footer Info */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Door door te gaan gaat u akkoord met onze{' '}
            <a href="#" className="underline hover:text-gray-600 dark:hover:text-gray-300">voorwaarden</a>
            {' '}en{' '}
            <a href="#" className="underline hover:text-gray-600 dark:hover:text-gray-300">privacybeleid</a>.
          </p>

        </div>
      </div>
    </div>
  );
};

export default AuthModal;
