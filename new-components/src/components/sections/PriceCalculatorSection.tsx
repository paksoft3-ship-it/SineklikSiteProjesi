'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const products = [
  { id: 'jaloezie-hout', name: 'Houten Jaloezieën (50mm)', basePrice: 89, pricePerCm2: 0.0012 },
  { id: 'jaloezie-aluminium', name: 'Aluminium Jaloezieën (25mm)', basePrice: 59, pricePerCm2: 0.0008 },
  { id: 'rolgordijn', name: 'Rolgordijn Verduisterend', basePrice: 49, pricePerCm2: 0.0007 },
  { id: 'plisse', name: 'Plissé Gordijn', basePrice: 79, pricePerCm2: 0.001 },
  { id: 'duette', name: 'Duette® Shades', basePrice: 129, pricePerCm2: 0.0015 },
  { id: 'inzethor', name: 'Inzethor op Maat', basePrice: 49, pricePerCm2: 0.0006 },
  { id: 'plisse-hordeur', name: 'Plissé Hordeur', basePrice: 199, pricePerCm2: 0.0014 },
];

const PriceCalculatorSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(200);
  const [professionalInstall, setProfessionalInstall] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  useEffect(() => {
    const product = products.find((p) => p.id === selectedProduct);
    if (product) {
      const area = width * height;
      const baseCalculation = product.basePrice + area * product.pricePerCm2;
      const installCost = professionalInstall ? 45 : 0;
      
      const minPrice = Math.round(baseCalculation + installCost);
      const maxPrice = Math.round(baseCalculation * 1.2 + installCost);
      
      setPriceRange({ min: minPrice, max: maxPrice });
    }
  }, [selectedProduct, width, height, professionalInstall]);

  return (
    <section className="py-20 bg-secondary dark:bg-bg-dark-2 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <i className="fas fa-check-circle mr-2"></i>
              All-inclusive service
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Geen verborgen kosten.
              <br />
              <span className="text-primary">Volledige transparantie.</span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Voer uw afmetingen in en ontvang direct een eerlijke prijsindicatie. 
              Geen verrassingen, alles inbegrepen inclusief montageservice.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <i className="fas fa-truck text-primary"></i>
                </div>
                <span className="text-sm text-blue-100">Gratis bezorging</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <i className="fas fa-shield-alt text-primary"></i>
                </div>
                <span className="text-sm text-blue-100">5 Jaar Garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <i className="fas fa-tools text-primary"></i>
                </div>
                <span className="text-sm text-blue-100">Snelle Montage</span>
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <i className="fas fa-calculator text-primary"></i>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                Direct Prijs Berekenen
              </h3>
            </div>

            {/* Product Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Selectie
              </label>
              <div className="relative">
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white appearance-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                >
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>

            {/* Dimensions */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Breedte (cm)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  min={30}
                  max={300}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Bijv: 120"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hoogte (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  min={30}
                  max={400}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Bijv: 200"
                />
              </div>
            </div>

            {/* Professional Installation Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl mb-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Professionele Montage</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Door vakkundig team</p>
              </div>
              <button
                onClick={() => setProfessionalInstall(!professionalInstall)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  professionalInstall ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                    professionalInstall ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Price Display */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-500 dark:text-gray-400">Geschatte Prijs</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">
                  €{priceRange.min} - €{priceRange.max}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">Incl. BTW</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/offerte"
              className="w-full inline-flex justify-center items-center px-6 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition shadow-lg shadow-blue-500/30"
            >
              <i className="fas fa-file-alt mr-2"></i>
              Gratis Offerte Aanvragen
            </Link>

            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
              Vrijblijvend • Binnen 24 uur reactie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculatorSection;
