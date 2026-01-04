// ==========================================
// COMMON TYPES
// ==========================================

export interface Locale {
  code: string;
  name: string;
  flag: string;
}

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// ==========================================
// NAVIGATION TYPES
// ==========================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: string;
}

export interface Navigation {
  menu: NavItem[];
  mobileMenu: {
    open: string;
    close: string;
  };
  cart: string;
  search: string;
  searchPlaceholder: string;
}

// ==========================================
// PRODUCT TYPES
// ==========================================

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  subcategories?: ProductSubcategory[];
}

export interface ProductSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  startingPrice: number;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface ProductOption {
  name: string;
  type: 'color' | 'select' | 'radio';
  values: ProductOptionValue[];
}

export interface ProductOptionValue {
  id: string;
  label: string;
  value?: string;
  priceModifier: number;
}

export interface ProductSpecifications {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  subcategoryId: string;
  description: string;
  shortDescription: string;
  price: number;
  comparePrice?: number | null;
  images: string[];
  features: string[];
  specifications: ProductSpecifications;
  options: ProductOption[];
  inStock: boolean;
  deliveryTime: string;
  freeShipping: boolean;
  badge?: string | null;
  seo: SEOData;
}

export interface ProductFilter {
  id: string;
  label: string;
  value?: string | number;
  min?: number;
  max?: number | null;
}

export interface ProductFilters {
  rooms: ProductFilter[];
  features: ProductFilter[];
  priceRanges: ProductFilter[];
  colors: ProductFilter[];
}

// ==========================================
// ROOM TYPES
// ==========================================

export interface RoomTag {
  label: string;
  type: 'green' | 'blue' | 'yellow' | 'red' | 'gray';
  icon: string;
}

export interface Room {
  id: string;
  name: string;
  slug: string;
  image: string;
  tags: RoomTag[];
  description: string;
}

// ==========================================
// PACKAGE / COMBINATION TYPES
// ==========================================

export interface Package {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  badge?: string | null;
  includes: string[];
}

// ==========================================
// TESTIMONIAL TYPES
// ==========================================

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  date?: string;
}

// ==========================================
// CONFIGURATOR TYPES
// ==========================================

export interface ConfiguratorStep {
  id: number;
  title: string;
  description: string;
}

export interface ConfiguratorRoom {
  id: string;
  name: string;
  icon: string;
  description: string;
  recommendedProducts: string[];
  tips: string[];
}

export interface ConfiguratorProduct {
  id: string;
  name: string;
  basePrice: number;
  image: string;
  description: string;
  forRooms: string[];
  measurementType: 'dagmaat' | 'glasmaat' | 'doorgang';
}

export interface ConfiguratorOption {
  id: string;
  name: string;
  description?: string;
  hex?: string;
  priceModifier: number;
}

export interface ConfiguratorState {
  step: number;
  selectedRoom: string | null;
  selectedProduct: string | null;
  dimensions: {
    width: number | null;
    height: number | null;
  };
  options: {
    frameColor: string | null;
    meshType: string | null;
    fabricType: string | null;
    operationType: string | null;
  };
  quantity: number;
  calculatedPrice: number;
}

// ==========================================
// QUOTE / ORDER TYPES
// ==========================================

export interface QuoteItem {
  productId: string;
  productName: string;
  quantity: number;
  dimensions: {
    width: number;
    height: number;
  };
  options: Record<string, string>;
  price: number;
}

export interface QuoteRequest {
  id?: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
      street: string;
      postalCode: string;
      city: string;
      country: string;
    };
  };
  items: QuoteItem[];
  message?: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
  totalPrice: number;
  status: 'pending' | 'contacted' | 'quoted' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
      street: string;
      postalCode: string;
      city: string;
      country: string;
    };
  };
  items: QuoteItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  paymentMethod: 'ideal' | 'paypal' | 'bancontact' | 'cod'; // cod = Cash on Delivery
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// ==========================================
// CART TYPES
// ==========================================

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  dimensions: {
    width: number;
    height: number;
  };
  options: Record<string, string>;
  unitPrice: number;
  totalPrice: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
  itemCount: number;
}

// ==========================================
// CONTACT TYPES
// ==========================================

export interface ContactInfo {
  address: {
    label: string;
    value: string;
  };
  phone: {
    label: string;
    value: string;
  };
  email: {
    label: string;
    value: string;
  };
  whatsapp: {
    label: string;
    value: string;
  };
  workingHours: {
    label: string;
    days: {
      day: string;
      hours: string;
    }[];
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// ==========================================
// FAQ TYPES
// ==========================================

export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  questions: FAQQuestion[];
}

// ==========================================
// BLOG TYPES
// ==========================================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  seo: SEOData;
}

// ==========================================
// ADMIN TYPES
// ==========================================

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  avatar?: string;
  lastLogin: string;
}

export interface DashboardStats {
  totalOrders: number;
  pendingOrders: number;
  totalRevenue: number;
  totalCustomers: number;
  recentOrders: Order[];
  recentQuotes: QuoteRequest[];
}

export interface SEOSettings {
  globalTitle: string;
  globalDescription: string;
  defaultOgImage: string;
  googleAnalyticsId: string;
  googleTagManagerId: string;
  facebookPixelId: string;
  robots: {
    index: boolean;
    follow: boolean;
  };
}

// ==========================================
// LANDING PAGE TYPES
// ==========================================

export interface LandingPageUSP {
  icon: string;
  title: string;
  description: string;
}

export interface LandingPageSection {
  title: string;
  content: string;
}

export interface LandingPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  usps: LandingPageUSP[];
  sections: LandingPageSection[];
  ctaPrimary: string;
  ctaSecondary: string;
  schema: Record<string, any>;
}

// ==========================================
// FORM VALIDATION TYPES
// ==========================================

export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState<T> {
  data: T;
  errors: ValidationError[];
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
}
