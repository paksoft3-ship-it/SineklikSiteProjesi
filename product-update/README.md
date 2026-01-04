# Window Specialist - Product Update

This update restructures the product catalog based on client specifications:

## New Product Structure

### 📦 Plissé Horren (Insect Screens)
| Product | Slug | Price |
|---------|------|-------|
| Plissé Hordeur | `/plisse-horren/deur` | €199 |
| Plissé Raamhor | `/plisse-horren/raam` | €89 |
| Glazen Balkon Hor | `/plisse-horren/glazen-balkon` | €249 |
| Vaste Plissé Hor | `/plisse-horren/vaste-hor` | €69 |
| Binnenmontage Hor | `/plisse-horren/binnenmontage` | €79 |
| Hor + Gordijn Combinatie | `/plisse-horren/hor-gordijn-combinatie` | €299 |
| Drempelloze Plissé Hor | `/plisse-horren/drempelloos` | €229 |

**Features:**
- Aluminum frames in 3.5cm and 4cm profiles
- Frame colors: White, Cream, Anthracite, Black
- 5-year warranty on all products

### 🌞 Plissé Gordijnen (Curtains)
| Product | Slug | Price |
|---------|------|-------|
| Honeycomb / Duette | `/plisse-gordijnen/honeycomb` | €129 |
| Verduisterend (Blackout) | `/plisse-gordijnen/verduisterend` | €99 |
| Lichtdoorlatend 70% | `/plisse-gordijnen/lichtdoorlatend` | €79 |
| Kleuropties & Stalen | `/plisse-gordijnen/kleuropties` | €69 |

**Features:**
- 100+ colors available
- Free samples
- Different light transmission options
- Top-down/bottom-up operation available

### 🏠 Huisdecoratie
- Coming soon placeholder page
- Email signup for notifications

## Files Included

### Data Layer
```
src/lib/products.ts
```
Centralized product data with TypeScript interfaces and helper functions.

### Components

**Layout:**
```
src/components/layout/
├── TopBar.tsx      # Announcement bar
├── Header.tsx      # Navigation with dropdowns
├── Footer.tsx      # Trust badges + links
└── index.ts
```

**Sections:**
```
src/components/sections/
├── CollectionsSection.tsx     # Two-column collections
├── PriceCalculatorSection.tsx # Interactive calculator
├── PopularProductsSection.tsx # 4-column grid
└── index.ts
```

### Pages
```
src/app/(main)/producten/
├── page.tsx                          # Main products overview
├── plisse-horren/
│   ├── page.tsx                      # Category page
│   ├── deur/page.tsx
│   ├── raam/page.tsx
│   ├── glazen-balkon/page.tsx
│   ├── vaste-hor/page.tsx
│   ├── binnenmontage/page.tsx
│   ├── hor-gordijn-combinatie/page.tsx
│   └── drempelloos/page.tsx
├── plisse-gordijnen/
│   ├── page.tsx                      # Category page
│   ├── honeycomb/page.tsx
│   ├── verduisterend/page.tsx
│   ├── lichtdoorlatend/page.tsx
│   └── kleuropties/page.tsx
└── huisdecoratie/
    └── page.tsx                      # Coming soon
```

## Integration

### Step 1: Copy files
```bash
# Unzip and copy all files
unzip product-update.zip
cp -r product-update/src/* your-project/src/
```

### Step 2: Update imports in your pages

**Homepage sections:**
```tsx
import { 
  CollectionsSection, 
  PriceCalculatorSection, 
  PopularProductsSection 
} from '@/components/sections';

// Use in your homepage
<CollectionsSection />
<PriceCalculatorSection />
<PopularProductsSection />
```

**Layout components:**
```tsx
import { TopBar, Header, Footer } from '@/components/layout';

// In your layout
<TopBar />
<Header />
<main>{children}</main>
<Footer />
```

### Step 3: Using product data
```tsx
import { 
  getAllProducts, 
  getProductBySlug, 
  getProductsByCategory,
  productCategories 
} from '@/lib/products';

// Get all products
const products = getAllProducts();

// Get products by category
const horren = getProductsByCategory('plisse-horren');

// Get specific product
const hordeur = getProductBySlug('plisse-horren', 'deur');
```

## Design Notes

All components use the existing design system:
- **Primary:** #007BFF (blue)
- **Secondary:** #001845 (dark navy)
- **Font:** Outfit (display), Inter (body)
- **Icons:** Font Awesome
- **Shadows:** shadow-lg shadow-blue-500/30 for buttons

## URL Structure

| Old URLs | New URLs |
|----------|----------|
| `/producten/horren/inzethorren` | `/producten/plisse-horren/raam` |
| `/producten/horren/plisse-hordeuren` | `/producten/plisse-horren/deur` |
| `/producten/raamdecoratie/plisse-gordijnen` | `/producten/plisse-gordijnen` |
| `/producten/raamdecoratie/duette-shades` | `/producten/plisse-gordijnen/honeycomb` |

## Requirements
- Next.js 14+
- Tailwind CSS
- Font Awesome CDN (already in layout)
- TypeScript

## Support
For questions about this update, contact your development team.
