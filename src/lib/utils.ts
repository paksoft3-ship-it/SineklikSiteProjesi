import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price in Euro
 */
export function formatPrice(price: number, locale: string = 'nl-NL'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Format date
 */
export function formatDate(date: string | Date, locale: string = 'nl-NL'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Generate slug from string
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate text with ellipsis
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + '...';
}

/**
 * Calculate price based on dimensions and options
 */
export function calculatePrice(
  basePrice: number,
  width: number,
  height: number,
  pricePerCm2: number,
  optionModifiers: number[] = []
): number {
  const area = width * height;
  const areaPrice = area * pricePerCm2;
  const totalModifiers = optionModifiers.reduce((sum, mod) => sum + mod, 0);
  return Math.max(basePrice, basePrice + areaPrice + totalModifiers);
}

/**
 * Calculate VAT
 */
export function calculateVAT(price: number, rate: number = 0.21): number {
  return price * rate;
}

/**
 * Calculate total with VAT
 */
export function calculateTotalWithVAT(price: number, rate: number = 0.21): number {
  return price * (1 + rate);
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Dutch phone number
 */
export function isValidDutchPhone(phone: string): boolean {
  const phoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$/;
  const cleanPhone = phone.replace(/[\s-]/g, '');
  return phoneRegex.test(cleanPhone);
}

/**
 * Validate Dutch postal code
 */
export function isValidDutchPostalCode(postalCode: string): boolean {
  const postalRegex = /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/;
  return postalRegex.test(postalCode);
}

/**
 * Generate order number
 */
export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `WS-${timestamp}-${random}`;
}

/**
 * Generate unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Get estimated delivery date
 */
export function getEstimatedDelivery(workingDays: number): Date {
  const date = new Date();
  let daysAdded = 0;
  
  while (daysAdded < workingDays) {
    date.setDate(date.getDate() + 1);
    const dayOfWeek = date.getDay();
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysAdded++;
    }
  }
  
  return date;
}

/**
 * Format delivery date range
 */
export function formatDeliveryRange(minDays: number, maxDays: number, locale: string = 'nl-NL'): string {
  const minDate = getEstimatedDelivery(minDays);
  const maxDate = getEstimatedDelivery(maxDays);
  
  const formatOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
  };
  
  const minFormatted = new Intl.DateTimeFormat(locale, formatOptions).format(minDate);
  const maxFormatted = new Intl.DateTimeFormat(locale, formatOptions).format(maxDate);
  
  return `${minFormatted} - ${maxFormatted}`;
}

/**
 * Local storage helper with SSR support
 */
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Handle storage errors silently
    }
  },
  remove: (key: string): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Handle storage errors silently
    }
  },
};

/**
 * Get contrast color for background
 */
export function getContrastColor(hexColor: string): 'black' | 'white' {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? 'black' : 'white';
}
