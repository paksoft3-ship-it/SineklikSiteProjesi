'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/navigation';

interface SearchResult {
  id: string;
  type: 'product' | 'category' | 'page' | 'article';
  title: string;
  description?: string;
  image?: string;
  price?: number;
  link: string;
  badge?: string;
}

interface RecentSearch {
  query: string;
  timestamp: number;
}

const sampleProducts: SearchResult[] = [
  {
    id: '1',
    type: 'product',
    title: 'Plissé Hordeur',
    description: 'Ruimtebesparende hordeur voor balkons',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    price: 199,
    link: '/products/plisse-screens/door',
    badge: 'Populair',
  },
  {
    id: '2',
    type: 'product',
    title: 'Honeycomb Gordijn',
    description: 'Maximale isolatie met honingraatstructuur',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
    price: 129,
    link: '/products/plisse-curtains/honeycomb',
    badge: 'Bestseller',
  },
  {
    id: '3',
    type: 'product',
    title: 'Verduisterend Plissé',
    description: '100% lichtblokkering voor slaapkamers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
    price: 99,
    link: '/products/plisse-curtains/blackout',
  },
  {
    id: '4',
    type: 'category',
    title: 'Plissé Horren',
    description: 'Bekijk alle plissé horren',
    link: '/products/plisse-screens',
  },
  {
    id: '5',
    type: 'category',
    title: 'Plissé Gordijnen',
    description: 'Bekijk alle plissé gordijnen',
    link: '/products/plisse-curtains',
  },
  {
    id: '6',
    type: 'page',
    title: 'Meetgids',
    description: 'Hoe u correct meet voor op maat producten',
    link: '/measurement-guide',
  },
  {
    id: '7',
    type: 'page',
    title: 'Contact',
    description: 'Neem contact met ons op',
    link: '/contact',
  },
];

const popularSearches = ['plissé hordeur', 'verduisterend', 'honeycomb', 'raamhor'];

interface EnhancedSearchProps {
  variant?: 'modal' | 'inline';
  onClose?: () => void;
}

export default function EnhancedSearch({ variant = 'modal', onClose }: EnhancedSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('recentSearches');
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
    inputRef.current?.focus();
  }, []);

  // Search logic
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const filtered = sampleProducts.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  }, []);

  // Debounced search
  useEffect(() => {
    const debounce = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => clearTimeout(debounce);
  }, [query, performSearch]);

  // Save to recent searches
  const saveRecentSearch = (searchQuery: string) => {
    const newSearch: RecentSearch = { query: searchQuery, timestamp: Date.now() };
    const updated = [newSearch, ...recentSearches.filter((s) => s.query !== searchQuery)].slice(
      0,
      5
    );
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      saveRecentSearch(query);
      // Navigate to selected result
    } else if (e.key === 'Escape') {
      onClose?.();
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'product':
        return 'fa-box';
      case 'category':
        return 'fa-folder';
      case 'page':
        return 'fa-file';
      case 'article':
        return 'fa-newspaper';
      default:
        return 'fa-search';
    }
  };

  const content = (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full mx-auto">
      {/* Search Input */}
      <div className="relative border-b border-gray-200 dark:border-gray-700">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Zoek producten, categorieën..."
          className="w-full pl-12 pr-12 py-4 bg-transparent text-gray-900 dark:text-white text-lg focus:outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <i className="fas fa-times text-xs"></i>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="max-h-[60vh] overflow-y-auto p-4">
        {/* Loading */}
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <motion.div
              className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )}

        {/* No Query - Show Recent & Popular */}
        {!query && !isLoading && (
          <div className="space-y-6">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Recente zoekopdrachten
                  </span>
                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    Wissen
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setQuery(search.query)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-history text-xs text-gray-400"></i>
                      {search.query}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div>
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 block">
                Populaire zoekopdrachten
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setQuery(term)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-fire text-xs"></i>
                    {term}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 block">
                Snelle links
              </span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'fa-sliders-h', label: 'Configurator', link: '/configurator' },
                  { icon: 'fa-ruler', label: 'Meetgids', link: '/measurement-guide' },
                  { icon: 'fa-swatchbook', label: 'Stalen', link: '/contact' },
                  { icon: 'fa-phone', label: 'Contact', link: '/contact' },
                ].map((item, idx) => (
                  <Link key={idx} href={item.link as any}>
                    <motion.div
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className={`fas ${item.icon} text-primary text-sm`}></i>
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && !isLoading && (
          <>
            {results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result, idx) => (
                  <Link
                    key={result.id}
                    href={result.link as any}
                    onClick={() => saveRecentSearch(query)}
                  >
                    <motion.div
                      className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition ${
                        selectedIndex === idx
                          ? 'bg-primary/10'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      {result.image ? (
                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={result.image}
                            alt={result.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className={`fas ${getTypeIcon(result.type)} text-gray-400`}></i>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {result.title}
                          </span>
                          {result.badge && (
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                              {result.badge}
                            </span>
                          )}
                        </div>
                        {result.description && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {result.description}
                          </p>
                        )}
                        <span className="text-xs text-primary capitalize">{result.type}</span>
                      </div>
                      {result.price && (
                        <span className="font-bold text-primary">€{result.price},-</span>
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-2xl text-gray-400"></i>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Geen resultaten gevonden voor "{query}"
                </p>
                <p className="text-sm text-gray-500">
                  Probeer andere zoekwoorden of bekijk onze categorieën
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span>
            <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">↑↓</kbd> navigeren
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Enter</kbd> selecteren
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Esc</kbd> sluiten
          </span>
        </div>
        <span>Powered by AI</span>
      </div>
    </div>
  );

  if (variant === 'modal') {
    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </motion.div>
      </motion.div>
    );
  }

  return content;
}

// Compact search trigger button
export function SearchTrigger({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <i className="fas fa-search"></i>
      <span className="text-sm">Zoeken...</span>
      <kbd className="hidden sm:inline-block px-2 py-0.5 bg-white dark:bg-gray-700 rounded text-xs ml-2">
        ⌘K
      </kbd>
    </motion.button>
  );
}
