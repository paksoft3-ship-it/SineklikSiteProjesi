import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SkipToMain, AccessibilityToolbar } from '@/components/accessibility/A11yEnhancements';
import { RecentPurchases } from '@/components/ui/SocialProof';
import TrustWidget from '@/components/ui/TrustWidget';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Accessibility: Skip to main content link */}
      <SkipToMain />

      <Header />
      <main id="main-content" className="flex-grow">{children}</main>
      <Footer />

      {/* Accessibility toolbar for user preferences */}
      <AccessibilityToolbar />

      {/* Trust Widget */}
      <TrustWidget />

      {/* Social proof: Recent purchases notification */}
      <RecentPurchases interval={40000} />
    </div>
  );
}

