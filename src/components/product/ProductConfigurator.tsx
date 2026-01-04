'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PlisseAnimation } from '@/components/animations';

interface ConfigOption {
  id: string;
  label: string;
  infoTitle: string;
  infoContent: string | { headers: string[]; rows: string[][] };
  options: { value: string; label: string; price: number }[];
  required?: boolean;
}

interface ProductConfiguratorProps {
  product: {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    oldPrice?: number;
    images: string[];
    deliveryDays: number;
    configOptions: ConfigOption[];
  };
}

const ProductConfigurator = ({ product }: ProductConfiguratorProps) => {
  const t = useTranslations('ProductConfigurator');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeInfoPopup, setActiveInfoPopup] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [totalPrice, setTotalPrice] = useState(product.basePrice);
  const [showARModal, setShowARModal] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const goToPrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  // Calculate total price based on selections
  useEffect(() => {
    let price = product.basePrice;

    product.configOptions.forEach((option) => {
      const selectedValue = selectedOptions[option.id];
      if (selectedValue) {
        const selectedOpt = option.options.find((o) => o.value === selectedValue);
        if (selectedOpt) {
          price += selectedOpt.price;
        }
      }
    });

    setTotalPrice(price);
  }, [selectedOptions, product]);

  const handleOptionChange = (optionId: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));
  };

  const getPriceBreakdown = () => {
    const breakdown: { label: string; price: number }[] = [
      { label: 'Product', price: product.basePrice },
    ];

    product.configOptions.forEach((option) => {
      const selectedValue = selectedOptions[option.id];
      if (selectedValue) {
        const selectedOpt = option.options.find((o) => o.value === selectedValue);
        if (selectedOpt && selectedOpt.price > 0) {
          breakdown.push({ label: option.label, price: selectedOpt.price });
        }
      }
    });

    return breakdown;
  };

  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products/plisse-screens" className="hover:text-primary">Plissé Horren</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Price Summary */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="font-display font-bold text-lg text-secondary dark:text-white mb-4">
                {t('summary_title')}
              </h3>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{t('option_header')}</span>
                  <span>{t('price_header')}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                {getPriceBreakdown().map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                    <span className="text-gray-900 dark:text-white">€{item.price.toFixed(2)}</span>
                  </div>
                ))}

                {/* Show zero options */}
                {product.configOptions
                  .filter((opt) => !selectedOptions[opt.id] ||
                    opt.options.find((o) => o.value === selectedOptions[opt.id])?.price === 0)
                  .slice(0, 5)
                  .map((opt) => (
                    <div key={opt.id} className="flex justify-between text-gray-400">
                      <span>{opt.label}</span>
                      <span>€0,00</span>
                    </div>
                  ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                <div className="flex justify-between font-bold">
                  <span className="text-secondary dark:text-white">{t('total')}</span>
                  <span className="text-primary text-xl">€{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* AR Button - Left Side */}
              <button
                onClick={() => setShowARModal(true)}
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-primary hover:bg-primary/5 transition group"
              >
                <div className="w-10 h-10 border-2 border-gray-300 group-hover:border-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-gray-400 group-hover:text-primary text-sm">AR</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary">
                  {t('view_ar')}
                </span>
              </button>
            </div>
          </div>

          {/* Center Column - Product Images */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-4 group">
                <PlisseAnimation
                  images={product.images}
                  activeIndex={activeImage}
                  onIndexChange={setActiveImage}
                  autoPlay={false}
                  onClick={() => setShowLightbox(true)}
                  className="w-full h-full"
                />

                {/* Zoom hint overlay - only visual, shows on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg">
                    <i className="fas fa-search-plus text-xl text-primary"></i>
                  </div>
                </div>
                {/* Image counter */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                  {activeImage + 1} / {product.images.length}
                </div>

                {product.oldPrice && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                    -{Math.round((1 - product.basePrice / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${activeImage === index
                      ? 'border-primary'
                      : 'border-transparent hover:border-gray-300'
                      }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}

                {/* AR Button in Gallery */}
                <button
                  onClick={() => setShowARModal(true)}
                  className="flex-shrink-0 w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center hover:border-primary hover:bg-primary/5 transition group"
                >
                  <div className="w-8 h-8 border border-gray-300 group-hover:border-primary rounded flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-gray-400 group-hover:text-primary">AR</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Configuration */}
          <div className="lg:col-span-4">
            {/* Product Header */}
            <div className="mb-6">
              <h1 className="font-display text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-3">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-lg">€{product.oldPrice.toFixed(2)}</span>
                )}
                <span className="text-3xl font-bold text-primary">€{totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-green-600 flex items-center gap-2">
                <i className="fas fa-truck"></i>
                {t('delivery_time', { days: product.deliveryDays })}
              </p>
            </div>

            {/* Standard Included */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">{t('standard_included')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-primary mr-1"></i> Bovenrail en onderrail
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-primary mr-1"></i> Glasprofiel incl. wielen
                </span>
              </div>
            </div>

            {/* Configuration Options */}
            <div className="space-y-4">
              <p className="font-semibold text-secondary dark:text-white">{t('configure_title')}</p>

              {product.configOptions.map((option) => (
                <div key={option.id} className="relative">
                  <label className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <span className="uppercase tracking-wider">{option.label}:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowARModal(true)}
                        className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition"
                        title={t('view_ar')}
                      >
                        <i className="fas fa-cube text-xs"></i>
                      </button>
                      <button
                        onClick={() => setActiveInfoPopup(activeInfoPopup === option.id ? null : option.id)}
                        className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition"
                      >
                        <i className="fas fa-info text-xs"></i>
                      </button>
                    </div>
                  </label>

                  <div className="relative">
                    <select
                      value={selectedOptions[option.id] || ''}
                      onChange={(e) => handleOptionChange(option.id, e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl appearance-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white"
                    >
                      <option value="">{t('choose_option')}</option>
                      {option.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label} {opt.price > 0 ? `(+€${opt.price.toFixed(2)})` : ''}
                        </option>
                      ))}
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>

                  {/* Info Popup - Centered Modal */}
                  {activeInfoPopup === option.id && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-fadeIn max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-display font-bold text-xl text-secondary dark:text-white">{option.infoTitle}</h4>
                          <button
                            onClick={() => setActiveInfoPopup(null)}
                            className="text-gray-400 hover:text-gray-600 p-1"
                          >
                            <i className="fas fa-times text-xl"></i>
                          </button>
                        </div>

                        {typeof option.infoContent === 'string' ? (
                          <p className="text-gray-600 dark:text-gray-400">{option.infoContent}</p>
                        ) : (
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700">
                                  {option.infoContent.headers.map((header, i) => (
                                    <th key={i} className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {option.infoContent.rows.map((row, i) => (
                                  <tr key={i} className="border-b border-gray-100 dark:border-gray-700">
                                    {row.map((cell, j) => (
                                      <td key={j} className="px-4 py-3 text-gray-600 dark:text-gray-400">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        <button
                          onClick={() => setActiveInfoPopup(null)}
                          className="mt-6 w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                        >
                          Sluiten
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* AR Button - Right Side */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={() => setShowARModal(true)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-primary hover:bg-primary/5 transition group"
              >
                <div className="w-10 h-10 border-2 border-gray-300 group-hover:border-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-gray-400 group-hover:text-primary text-sm">AR</span>
                </div>
                <div className="text-left">
                  <span className="block text-xs text-gray-500">AR Button</span>
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary">
                    {t('view_ar')}
                  </span>
                </div>
              </button>
            </div>

            {/* Add to Cart */}
            <div className="mt-8 space-y-3">
              <button className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                <i className="fas fa-shopping-cart"></i>
                {t('add_to_cart')}
              </button>
              <button className="w-full py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl transition flex items-center justify-center gap-2">
                <i className="fas fa-file-alt"></i>
                {t('request_quote')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {
        showLightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => { setShowLightbox(false); setIsZoomed(false); }}
          >
            {/* Close button */}
            <button
              onClick={() => { setShowLightbox(false); setIsZoomed(false); }}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition z-10"
            >
              <i className="fas fa-times text-white text-xl"></i>
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-2 rounded-full">
              {activeImage + 1} / {product.images.length}
            </div>

            {/* Navigation arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevImage(); setIsZoomed(false); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition z-10"
                >
                  <i className="fas fa-chevron-left text-white text-2xl"></i>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNextImage(); setIsZoomed(false); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition z-10"
                >
                  <i className="fas fa-chevron-right text-white text-2xl"></i>
                </button>
              </>
            )}

            {/* Main image */}
            <div
              className={`relative max-w-[90vw] max-h-[85vh] ${isZoomed ? 'cursor-zoom-out overflow-auto' : 'cursor-zoom-in'}`}
              onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className={`transition-transform duration-300 ${isZoomed ? 'scale-150' : 'max-w-full max-h-[85vh] object-contain'}`}
              />
            </div>

            {/* Zoom hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
              <i className={`fas ${isZoomed ? 'fa-search-minus' : 'fa-search-plus'}`}></i>
              {isZoomed ? 'Klik om uit te zoomen' : 'Klik om in te zoomen'}
            </div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-xl">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setActiveImage(index); setIsZoomed(false); }}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition ${activeImage === index ? 'border-primary' : 'border-transparent hover:border-white/50'
                    }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )
      }

      {/* AR Modal */}
      {
        showARModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display font-bold text-xl text-secondary dark:text-white">
                  {t('ar_modal_title')}
                </h3>
                <button
                  onClick={() => setShowARModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="text-center py-8">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-400">AR</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {t('ar_modal_desc')}
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl inline-block mb-4">
                  {/* Placeholder for QR Code */}
                  <div className="w-32 h-32 bg-white dark:bg-gray-600 rounded grid grid-cols-5 gap-1 p-2">
                    {[...Array(25)].map((_, i) => (
                      <div
                        key={i}
                        className={`${Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'} rounded-sm`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {t('ar_modal_link')}
                </p>
              </div>

              <button
                onClick={() => setShowARModal(false)}
                className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                {t('close')}
              </button>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default ProductConfigurator;
