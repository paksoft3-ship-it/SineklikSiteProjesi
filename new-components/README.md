# New Components for Window Specialist

## Components Included

### 1. CollectionsSection
A two-column layout showcasing the main product collections (Horren and Raamdecoratie) with:
- Interactive image gallery with thumbnails
- Color selector dots
- Team avatars showing customer count
- Shop links

### 2. PriceCalculatorSection  
An interactive price calculator with:
- Dark blue background (matching your secondary color)
- Product dropdown selector
- Width/height input fields
- Professional installation toggle
- Real-time price calculation
- CTA button for quote request
- Trust badges (delivery, warranty, installation)

### 3. PopularProductsSection
A product grid on dark background showing:
- 4 popular products with texture previews
- Product name, description, and starting price
- Hover effects
- "View all" link

## Integration Steps

1. Copy the files from `src/components/sections/` to your project's `src/components/sections/` folder

2. Import and use in your pages:

```tsx
import CollectionsSection from '@/components/sections/CollectionsSection';
import PriceCalculatorSection from '@/components/sections/PriceCalculatorSection';
import PopularProductsSection from '@/components/sections/PopularProductsSection';

// In your page component:
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <PriceCalculatorSection />
      <PopularProductsSection />
      {/* ... other sections */}
    </>
  );
}
```

## Styling Notes

All components use your existing Tailwind config with:
- `primary` color (#007BFF)
- `secondary` color (#001845)
- `bg-light-1`, `bg-light-2` backgrounds
- `font-display` for headings (Outfit)
- Font Awesome icons

No additional dependencies required!
