# Window Specialist - E-commerce Website

A modern, responsive e-commerce website for window decorations (raamdecoratie) and insect screens (horren) targeting the Netherlands market. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

### Customer-Facing Features
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Mode**: System preference detection with manual toggle
- **Product Configurator**: Step-by-step product configuration with real-time pricing
- **Room-Based Navigation**: Browse products by room type
- **Quote System**: Multi-step quote request form with email notifications
- **Multilingual Ready**: i18n support for Dutch, English, German, Turkish
- **SEO Optimized**: Meta tags, structured data (Schema.org), sitemap
- **Landing Pages**: Dedicated pages for Google Ads campaigns
- **WhatsApp Integration**: Floating chat button for customer support

### Admin Panel Features (Structure Ready)
- Dashboard with statistics
- Products CRUD management
- Quote requests management
- Order management (for cash on delivery)
- Testimonials management
- Blog/content management
- SEO settings
- Customer management

### Technical Features
- **Next.js 14**: App Router, Server Components
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **EmailJS**: Quote and contact form notifications
- **React Hook Form + Zod**: Form validation
- **JSON-driven Content**: Easy content updates
- **Schema.org**: Structured data for SEO

## 📁 Project Structure

```
window-specialist/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── (main)/              # Public pages
│   │   │   ├── producten/       # Product pages
│   │   │   ├── kamers/          # Room pages
│   │   │   ├── configurator/    # Product configurator
│   │   │   ├── landing/         # Google Ads landing pages
│   │   │   ├── contact/
│   │   │   ├── faq/
│   │   │   ├── over-ons/
│   │   │   ├── offerte/
│   │   │   └── ...
│   │   ├── admin/               # Admin panel
│   │   │   ├── dashboard/
│   │   │   ├── producten/
│   │   │   ├── offertes/
│   │   │   ├── bestellingen/
│   │   │   └── ...
│   │   └── api/                 # API routes
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   ├── layout/              # Header, Footer
│   │   ├── sections/            # Page sections
│   │   ├── forms/               # Form components
│   │   ├── cards/               # Card components
│   │   ├── configurator/        # Configurator components
│   │   └── admin/               # Admin components
│   ├── data/
│   │   └── nl/                  # Dutch content JSON files
│   │       ├── common.json      # Navigation, footer, etc.
│   │       ├── products.json    # Products data
│   │       ├── pages.json       # Page content
│   │       ├── seo.json         # SEO & landing pages
│   │       └── configurator.json
│   ├── lib/
│   │   ├── utils.ts             # Utility functions
│   │   └── email.ts             # EmailJS service
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── hooks/                   # Custom React hooks
│   └── styles/
│       └── globals.css          # Global styles
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd window-specialist
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure EmailJS (for quote/contact forms):
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create email templates for:
     - Quote notifications
     - Contact form
     - Order confirmations
   - Add your credentials to `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE=quote_template
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=contact_template
NEXT_PUBLIC_EMAILJS_TEMPLATE_ORDER=order_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Content Updates

All content is managed through JSON files in `src/data/nl/`:

- **common.json**: Site-wide content (navigation, footer, testimonials)
- **products.json**: Product categories, products, filters
- **pages.json**: Static page content (about, contact, FAQ, etc.)
- **seo.json**: SEO keywords, landing pages, structured data
- **configurator.json**: Configurator steps, rooms, options

### Adding Products

Edit `src/data/nl/products.json`:

```json
{
  "products": [
    {
      "id": "unique-id",
      "name": "Product Name",
      "slug": "product-slug",
      "categoryId": "category-id",
      "subcategoryId": "subcategory-id",
      "description": "Product description...",
      "price": 99,
      "images": ["/images/products/product.jpg"],
      "features": ["Feature 1", "Feature 2"],
      "options": [...]
    }
  ]
}
```

### Adding Landing Pages

1. Add content to `src/data/nl/seo.json`:
```json
{
  "landingPages": {
    "new-landing-page": {
      "slug": "new-landing-page",
      "metaTitle": "...",
      "metaDescription": "...",
      "h1": "...",
      ...
    }
  }
}
```

2. Create page file in `src/app/(main)/landing/new-landing-page/page.tsx`

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

### Colors
- Primary: `#007BFF` (blue)
- Secondary: `#001845` (navy)
- Light backgrounds: `#F0F4F8`, `#F5F5F5`
- Dark backgrounds: `#111827`, `#1F2937`

### Fonts
- Sans: Inter
- Display: Outfit

### Custom Classes
```css
.btn-primary     /* Primary button */
.btn-secondary   /* Secondary button */
.btn-outline     /* Outline button */
.card            /* Card container */
.input           /* Form input */
.label           /* Form label */
.badge-*         /* Status badges */
```

## 📧 Email Templates

### Quote Request Template
Required variables:
- `customer_name`, `customer_email`, `customer_phone`
- `customer_address`
- `product_type`, `dimensions`, `quantity`, `options`
- `estimated_price`, `message`
- `date`

### Contact Form Template
Required variables:
- `from_name`, `from_email`, `from_phone`
- `subject`, `message`
- `date`

## 🔍 SEO

### Implemented Features
- Meta tags on all pages
- Open Graph tags
- Twitter Cards
- JSON-LD structured data (Organization, Product, FAQ)
- Semantic HTML
- Image optimization

### Google Ads Integration
Landing pages are optimized for:
- Fast loading (Next.js optimization)
- Clear CTAs
- Trust indicators
- Conversion tracking ready

## 🔒 Security

- XSS protection headers
- CSRF protection on forms
- Input validation with Zod
- Rate limiting on API routes (recommended for production)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚧 Future Enhancements

- [ ] Admin panel authentication
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Payment gateway integration (Mollie/Stripe)
- [ ] Inventory management
- [ ] Order tracking
- [ ] Customer accounts
- [ ] Wishlist functionality
- [ ] Product reviews

## 📄 License

This project is proprietary. All rights reserved.

## 👥 Support

For support, email info@windowspecialist.nl or use the WhatsApp chat.
