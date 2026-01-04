import { Metadata } from 'next';
import ProductConfigurator from '@/components/configurator/ProductConfigurator';

// Import data
import configuratorData from '@/data/nl/configurator.json';

export const metadata: Metadata = {
  title: configuratorData.configurator.metaTitle,
  description: configuratorData.configurator.metaDescription,
};

export default function ConfiguratorPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Product Configurator
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Configureer uw horren of raamdecoratie op maat. Selecteer uw kamer, kies uw product en voer uw maten in.
          </p>
        </div>
      </section>

      {/* Configurator Component */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductConfigurator />
        </div>
      </section>
    </div>
  );
}
