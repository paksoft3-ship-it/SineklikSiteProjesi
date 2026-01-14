'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Skip to main content link
export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Ga naar hoofdinhoud
    </a>
  );
}

// Accessibility toolbar
export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 'normal',
    highContrast: false,
    reducedMotion: false,
    dyslexicFont: false,
    focusIndicators: false,
  });

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem('a11y-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    const html = document.documentElement;

    // Font size
    html.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl');
    switch (settings.fontSize) {
      case 'small':
        html.classList.add('text-sm');
        break;
      case 'large':
        html.classList.add('text-lg');
        break;
      case 'xlarge':
        html.classList.add('text-xl');
        break;
      default:
        html.classList.add('text-base');
    }

    // High contrast
    html.classList.toggle('high-contrast', settings.highContrast);

    // Reduced motion
    html.classList.toggle('reduce-motion', settings.reducedMotion);

    // Dyslexic font
    html.classList.toggle('dyslexic-font', settings.dyslexicFont);

    // Focus indicators
    html.classList.toggle('focus-visible-ring', settings.focusIndicators);

    // Save settings
    localStorage.setItem('a11y-settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-40 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toegankelijkheidsopties"
        aria-expanded={isOpen}
      >
        <i className="fas fa-universal-access text-xl"></i>
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed bottom-40 right-4 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              role="dialog"
              aria-label="Toegankelijkheidsinstellingen"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-gray-900 dark:text-white">
                    Toegankelijkheid
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"
                    aria-label="Sluiten"
                  >
                    <i className="fas fa-times text-gray-500"></i>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                {/* Font Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <i className="fas fa-text-height mr-2"></i>Tekstgrootte
                  </label>
                  <div className="flex gap-2">
                    {[
                      { value: 'small', label: 'A', size: 'text-sm' },
                      { value: 'normal', label: 'A', size: 'text-base' },
                      { value: 'large', label: 'A', size: 'text-lg' },
                      { value: 'xlarge', label: 'A', size: 'text-xl' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() =>
                          setSettings({ ...settings, fontSize: option.value })
                        }
                        className={`flex-1 py-2 rounded-lg font-bold transition ${option.size} ${
                          settings.fontSize === option.value
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        aria-pressed={settings.fontSize === option.value}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Toggle Options */}
                {[
                  {
                    key: 'highContrast',
                    icon: 'fa-adjust',
                    label: 'Hoog contrast',
                    description: 'Verhoogd kleurcontrast',
                  },
                  {
                    key: 'reducedMotion',
                    icon: 'fa-pause',
                    label: 'Verminder beweging',
                    description: 'Minder animaties',
                  },
                  {
                    key: 'dyslexicFont',
                    icon: 'fa-font',
                    label: 'Dyslexie-lettertype',
                    description: 'Makkelijker te lezen',
                  },
                  {
                    key: 'focusIndicators',
                    icon: 'fa-bullseye',
                    label: 'Focus indicatoren',
                    description: 'Duidelijkere focus',
                  },
                ].map((option) => (
                  <div
                    key={option.key}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <i className={`fas ${option.icon} text-gray-600 dark:text-gray-400`}></i>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          {option.label}
                        </p>
                        <p className="text-xs text-gray-500">{option.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setSettings({
                          ...settings,
                          [option.key]: !settings[option.key as keyof typeof settings],
                        })
                      }
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        settings[option.key as keyof typeof settings]
                          ? 'bg-primary'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={Boolean(settings[option.key as keyof typeof settings])}
                      aria-label={option.label}
                    >
                      <motion.div
                        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow"
                        animate={{
                          x: settings[option.key as keyof typeof settings] ? 24 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </button>
                  </div>
                ))}

                {/* Reset Button */}
                <button
                  onClick={() =>
                    setSettings({
                      fontSize: 'normal',
                      highContrast: false,
                      reducedMotion: false,
                      dyslexicFont: false,
                      focusIndicators: false,
                    })
                  }
                  className="w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm font-medium"
                >
                  <i className="fas fa-undo mr-2"></i>Reset instellingen
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Focus trap for modals
export function useFocusTrap(isActive: boolean) {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('[role="dialog"]');
    if (!modal) return;

    const focusableContent = modal.querySelectorAll(focusableElements);
    const firstFocusable = focusableContent[0] as HTMLElement;
    const lastFocusable = focusableContent[focusableContent.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstFocusable?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);
}

// Screen reader only text
export function SrOnly({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

// Live region for announcements
export function LiveRegion({
  message,
  priority = 'polite',
}: {
  message: string;
  priority?: 'polite' | 'assertive';
}) {
  return (
    <div
      role="status"
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}

// Keyboard shortcut handler
export function useKeyboardShortcuts(shortcuts: Record<string, () => void>) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = `${e.ctrlKey || e.metaKey ? 'Ctrl+' : ''}${e.shiftKey ? 'Shift+' : ''}${e.key.toUpperCase()}`;

      if (shortcuts[key]) {
        e.preventDefault();
        shortcuts[key]();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}
