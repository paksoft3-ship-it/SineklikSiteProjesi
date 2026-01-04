# Footer & TopBar Components for Window Specialist

## Components Included

### 1. TopBar
A dark announcement bar that sits above the header with:
- Double checkmarks (✓✓) in primary blue
- "Gratis levering*" 
- "15.000+ tevreden klanten"
- "Klantbeoordeling 4.8" with yellow stars
- Clickable review link

### 2. Header (Updated)
The existing header now includes TopBar integration:
- TopBar renders above the navigation
- Sticky navigation below
- All existing functionality preserved

### 3. Footer (Completely Redesigned)
A professional footer with:

**Trust Badges Section (top)**
- "Geen Risico, Wel Zekerheid" - 5 year warranty
- "Gratis Retourneren" - 30 day returns  
- "Gratis Stalen" - Free samples

**Main Footer Content**
- Company info with logo
- Products links
- Rooms (Kamers) links
- Service links
- Specialist widget with checkmarks and review

**Bottom Bar**
- Copyright
- Privacy & Terms links

## Integration Steps

### Option 1: Replace existing files
Simply replace your existing `Header.tsx` and `Footer.tsx` files:

```bash
cp src/components/layout/TopBar.tsx your-project/src/components/layout/
cp src/components/layout/Header.tsx your-project/src/components/layout/
cp src/components/layout/Footer.tsx your-project/src/components/layout/
```

### Option 2: Keep TopBar separate
If you want to use TopBar independently:

```tsx
// In your layout.tsx or page
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

## Styling Notes

All components use your existing Tailwind config:
- Primary: #007BFF (blue)
- Secondary: #001845 (dark navy) - used for footer/topbar background
- Font Awesome icons
- Outfit font for display headings

## Customization

### Change trust badges:
Edit the `trustBadges` array in `Footer.tsx`

### Change announcement text:
Edit the content in `TopBar.tsx`

### Change footer links:
Edit the Link components in the footer sections
