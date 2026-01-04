# Product Detail Page Update - Configurator with Info Popups & AR

This update adds a comprehensive product configurator similar to the reference screenshots, including:
- **Price summary sidebar** (Overzicht samenstelling)
- **Image gallery with thumbnails**
- **Configuration options with info popups**
- **AR button integration**
- **Dynamic pricing**

## Features

### 1. Price Summary Sidebar (Left)
- Shows all selected options and their prices
- Updates dynamically when options change
- Displays total price
- Includes AR button

### 2. Product Image Gallery (Center)
- Main product image
- Thumbnail gallery for switching images
- AR button in gallery
- Discount badge on images

### 3. Configuration Options (Right)
- Dropdown selects for each option
- Info button (ℹ️) for each option
- Popup with detailed information or measurement tables
- Real-time price updates

### 4. AR Integration
- AR buttons in multiple locations
- Modal with QR code for AR viewing
- Placeholder for WebXR/AR.js integration

## Files Included

```
src/
├── components/
│   └── product/
│       ├── ProductConfigurator.tsx   # Main configurator component
│       └── index.ts
├── styles/
│   └── product-configurator.css      # Custom animations
└── app/(main)/producten/
    ├── plisse-horren/
    │   ├── deur/page.tsx             # Hordeur configurator
    │   └── glazen-balkon/page.tsx    # Glazen Balkon configurator
    └── plisse-gordijnen/
        └── honeycomb/page.tsx        # Honeycomb configurator
```

## Integration Steps

### Step 1: Copy Files
```bash
unzip product-detail-update.zip
cp -r product-detail-update/src/* your-project/src/
```

### Step 2: Import CSS
Add the CSS import to your `globals.css` or `layout.tsx`:

```css
/* In globals.css */
@import './styles/product-configurator.css';
```

Or in Tailwind config, add the animation:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
```

### Step 3: Create Product Pages
Use the `ProductConfigurator` component with your product data:

```tsx
import ProductConfigurator from '@/components/product/ProductConfigurator';

const productData = {
  id: 'my-product',
  name: 'Product Name',
  description: 'Description',
  basePrice: 199,
  oldPrice: 249, // optional, for discount display
  deliveryDays: 10,
  images: ['url1', 'url2', 'url3'],
  configOptions: [
    {
      id: 'option1',
      label: 'Option Label',
      infoTitle: 'Info Popup Title',
      infoContent: 'Text content' // or table object
      options: [
        { value: 'val1', label: 'Option 1', price: 0 },
        { value: 'val2', label: 'Option 2', price: 25 },
      ],
    },
    // ... more options
  ],
};

export default function ProductPage() {
  return <ProductConfigurator product={productData} />;
}
```

## Configuration Option Types

### Text Info Popup
```ts
{
  id: 'option-id',
  label: 'Option Label',
  infoTitle: 'Popup Title',
  infoContent: 'This is the description text that appears in the popup.',
  options: [...]
}
```

### Table Info Popup
```ts
{
  id: 'hoogte',
  label: 'Hoogte',
  infoTitle: 'Hoogtematen',
  infoContent: {
    headers: ['Werkhoogte', 'Marge'],
    rows: [
      ['2000 mm', '1990 mm - 2020 mm'],
      ['2100 mm', '2090 mm - 2120 mm'],
      // ... more rows
    ],
  },
  options: [...]
}
```

## AR Integration

The AR buttons are currently placeholder implementations. To integrate actual AR:

### Option 1: WebXR (recommended)
```tsx
// Add WebXR model viewer
import '@google/model-viewer';

<model-viewer
  src="/models/product.glb"
  ar
  ar-modes="webxr scene-viewer quick-look"
  camera-controls
/>
```

### Option 2: AR.js
```tsx
// For marker-based AR
import 'ar.js';
```

### Option 3: 8th Wall / Zappar
For more advanced AR experiences, integrate their SDKs.

## Customization

### Change Colors
The component uses Tailwind classes. Update these in the component or override via CSS:
- Primary: `text-primary`, `bg-primary`
- Secondary: `text-secondary`, `bg-secondary`

### Add More Options
Simply add more objects to the `configOptions` array. The component handles any number of options.

### Custom Validation
Add validation logic in the `handleOptionChange` function:
```tsx
const handleOptionChange = (optionId: string, value: string) => {
  // Add validation
  if (optionId === 'height' && value > maxHeight) {
    alert('Height exceeds maximum');
    return;
  }
  setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));
};
```

## Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

WebXR AR requires:
- Chrome on Android
- Safari on iOS 15+
