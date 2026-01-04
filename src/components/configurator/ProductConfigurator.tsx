'use client';

import { useState, useMemo } from 'react';
import { cn, formatPrice, calculatePrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import {
  Sofa,
  Bed,
  UtensilsCrossed,
  DoorOpen,
  Home,
  ChevronRight,
  ChevronLeft,
  Check,
  Ruler,
  Info,
  ShoppingCart,
  FileText,
  Plus,
  Minus,
} from 'lucide-react';
import { triggerAddToCartCelebration } from '@/lib/celebration';
import { useRouter } from '@/navigation';
import { PaymentIcons } from '@/components/ui/PaymentIcons';

// Import data
import configuratorData from '@/data/nl/configurator.json';

const { configurator } = configuratorData;

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  sofa: <Sofa className="w-8 h-8" />,
  bed: <Bed className="w-8 h-8" />,
  utensils: <UtensilsCrossed className="w-8 h-8" />,
  'door-open': <DoorOpen className="w-8 h-8" />,
  home: <Home className="w-8 h-8" />,
};

interface ConfigState {
  step: number;
  selectedRoom: string | null;
  selectedProductType: 'horren' | 'raamdecoratie' | null;
  selectedProduct: string | null;
  dimensions: {
    width: number | string;
    height: number | string;
  };
  options: {
    frameColor: string;
    meshType: string;
    fabricType: string;
    operationType: string;
  };
  quantity: number;
}

const ProductConfigurator = () => {
  const router = useRouter();
  const [config, setConfig] = useState<ConfigState>({
    step: 1,
    selectedRoom: null,
    selectedProductType: null,
    selectedProduct: null,
    dimensions: {
      width: '',
      height: '',
    },
    options: {
      frameColor: 'wit',
      meshType: 'standaard',
      fabricType: 'lichtdoorlatend',
      operationType: 'ketting',
    },
    quantity: 1,
  });

  const [buttonState, setButtonState] = useState<'idle' | 'celebrating' | 'done'>('idle');

  // Get selected room data
  const selectedRoomData = useMemo(() => {
    return configurator.rooms.find((r) => r.id === config.selectedRoom);
  }, [config.selectedRoom]);

  // Get available products for selected room
  const availableProducts = useMemo(() => {
    if (!config.selectedRoom || !config.selectedProductType) return [];

    const products = configurator.productTypes[config.selectedProductType];
    return products.filter((p) => p.forRooms.includes(config.selectedRoom!));
  }, [config.selectedRoom, config.selectedProductType]);

  // Get selected product data
  const selectedProductData = useMemo(() => {
    if (!config.selectedProductType || !config.selectedProduct) return null;
    return configurator.productTypes[config.selectedProductType].find(
      (p) => p.id === config.selectedProduct
    );
  }, [config.selectedProductType, config.selectedProduct]);

  // Calculate price
  const calculatedPrice = useMemo(() => {
    if (!selectedProductData || !config.dimensions.width || !config.dimensions.height) {
      return 0;
    }

    const width = Number(config.dimensions.width);
    const height = Number(config.dimensions.height);
    const basePrice = selectedProductData.basePrice;
    const pricePerCm2 = configurator.priceCalculation.pricePerCm2[
      config.selectedProduct as keyof typeof configurator.priceCalculation.pricePerCm2
    ] || 0.004;

    // Get option modifiers
    const modifiers: number[] = [];

    const frameColor = configurator.options.frameColors.find(
      (c) => c.id === config.options.frameColor
    );
    if (frameColor) modifiers.push(frameColor.priceModifier);

    const meshType = configurator.options.meshTypes.find(
      (m) => m.id === config.options.meshType
    );
    if (meshType) modifiers.push(meshType.priceModifier);

    const operationType = configurator.options.operationTypes.find(
      (o) => o.id === config.options.operationType
    );
    if (operationType) modifiers.push(operationType.priceModifier);

    const price = calculatePrice(basePrice, width, height, pricePerCm2, modifiers);
    return Math.max(price, configurator.priceCalculation.minimumPrice) * config.quantity;
  }, [selectedProductData, config.dimensions, config.options, config.quantity, config.selectedProduct]);

  // Step navigation
  const goToStep = (step: number) => {
    setConfig((prev) => ({ ...prev, step }));
  };

  const nextStep = () => {
    if (config.step < 5) {
      setConfig((prev) => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const prevStep = () => {
    if (config.step > 1) {
      setConfig((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  // Step 1: Room Selection
  const renderRoomSelection = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Kies uw ruimte
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {configurator.rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => {
              setConfig((prev) => ({
                ...prev,
                selectedRoom: room.id,
                selectedProduct: null,
              }));
              nextStep();
            }}
            className={cn(
              'p-3 sm:p-6 rounded-2xl border-2 transition-all text-center hover:border-primary hover:shadow-lg',
              config.selectedRoom === room.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
            )}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              {iconMap[room.icon] || <Home className="w-8 h-8" />}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              {room.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {room.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  // Step 2: Product Type Selection
  const renderProductTypeSelection = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Wat zoekt u?
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Kies het type product voor uw {selectedRoomData?.name.toLowerCase()}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => {
            setConfig((prev) => ({
              ...prev,
              selectedProductType: 'horren',
              selectedProduct: null,
            }));
            nextStep();
          }}
          className={cn(
            'p-4 sm:p-8 rounded-2xl border-2 transition-all text-left hover:border-primary hover:shadow-lg',
            config.selectedProductType === 'horren'
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
          )}
        >
          <div className="w-16 h-16 mb-4 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Horren
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Bescherm uw huis tegen insecten met onze horren op maat.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="green">Insectenwering</Badge>
            <Badge variant="gray">Op maat</Badge>
          </div>
        </button>

        <button
          onClick={() => {
            setConfig((prev) => ({
              ...prev,
              selectedProductType: 'raamdecoratie',
              selectedProduct: null,
            }));
            nextStep();
          }}
          className={cn(
            'p-4 sm:p-8 rounded-2xl border-2 transition-all text-left hover:border-primary hover:shadow-lg',
            config.selectedProductType === 'raamdecoratie'
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
          )}
        >
          <div className="w-16 h-16 mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Raamdecoratie
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Jaloezieën, rolgordijnen en meer voor de perfecte sfeer.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="blue">Lichtregulatie</Badge>
            <Badge variant="yellow">Privacy</Badge>
          </div>
        </button>
      </div>
    </div>
  );

  // Step 3: Product Selection
  const renderProductSelection = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Selecteer uw product
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Aanbevolen producten voor uw {selectedRoomData?.name.toLowerCase()}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {availableProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => {
              setConfig((prev) => ({ ...prev, selectedProduct: product.id }));
              nextStep();
            }}
            className={cn(
              'p-3 sm:p-6 rounded-2xl border-2 transition-all text-left hover:border-primary hover:shadow-lg',
              config.selectedProduct === product.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
            )}
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Afbeelding</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {product.description}
            </p>
            <p className="text-lg font-bold text-primary">
              Vanaf {formatPrice(product.basePrice)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  // Step 4: Dimensions & Options
  const renderDimensionsOptions = () => {
    const measurementType = selectedProductData?.measurementType || 'dagmaat';
    const instructions = configurator.measurementInstructions[measurementType as keyof typeof configurator.measurementInstructions];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Dimensions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Ruler className="w-5 h-5 text-primary" />
            Afmetingen
          </h2>

          {/* Measurement Instructions */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              {instructions.title}
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-400 mb-3">
              {instructions.description}
            </p>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
              {instructions.steps.slice(0, 3).map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Dimension Inputs */}
          <div className="space-y-4">
            <div>
              <label className="label">Breedte (cm)</label>
              <input
                type="number"
                value={config.dimensions.width}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    dimensions: { ...prev.dimensions, width: e.target.value },
                  }))
                }
                placeholder="bijv. 120"
                className="input"
                min="10"
                max="300"
              />
            </div>
            <div>
              <label className="label">Hoogte (cm)</label>
              <input
                type="number"
                value={config.dimensions.height}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    dimensions: { ...prev.dimensions, height: e.target.value },
                  }))
                }
                placeholder="bijv. 150"
                className="input"
                min="10"
                max="300"
              />
            </div>
            <div>
              <label className="label">Aantal</label>
              <input
                type="number"
                value={config.quantity}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    quantity: Math.max(1, parseInt(e.target.value) || 1),
                  }))
                }
                className="input"
                min="1"
                max="99"
              />
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Opties
          </h2>

          {/* Frame Color */}
          <div className="mb-6">
            <label className="label">Framekleur</label>
            <div className="flex flex-wrap gap-3">
              {configurator.options.frameColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() =>
                    setConfig((prev) => ({
                      ...prev,
                      options: { ...prev.options, frameColor: color.id },
                    }))
                  }
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition',
                    config.options.frameColor === color.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 dark:border-gray-700'
                  )}
                >
                  <span
                    className="w-5 h-5 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-sm">{color.name}</span>
                  {color.priceModifier > 0 && (
                    <span className="text-xs text-gray-500">
                      +{formatPrice(color.priceModifier)}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mesh Type (for horren) */}
          {config.selectedProductType === 'horren' && (
            <div className="mb-6">
              <label className="label">Gaastype</label>
              <div className="space-y-2">
                {configurator.options.meshTypes.map((mesh) => (
                  <button
                    key={mesh.id}
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        options: { ...prev.options, meshType: mesh.id },
                      }))
                    }
                    className={cn(
                      'w-full flex items-center justify-between px-4 py-3 rounded-lg border-2 transition text-left',
                      config.options.meshType === mesh.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 dark:border-gray-700'
                    )}
                  >
                    <div>
                      <span className="font-medium">{mesh.name}</span>
                      <p className="text-sm text-gray-500">{mesh.description}</p>
                    </div>
                    {mesh.priceModifier > 0 && (
                      <span className="text-sm font-medium text-primary">
                        +{formatPrice(mesh.priceModifier)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Operation Type (for raamdecoratie) */}
          {config.selectedProductType === 'raamdecoratie' && (
            <div className="mb-6">
              <label className="label">Bediening</label>
              <div className="space-y-2">
                {configurator.options.operationTypes.map((op) => (
                  <button
                    key={op.id}
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        options: { ...prev.options, operationType: op.id },
                      }))
                    }
                    className={cn(
                      'w-full flex items-center justify-between px-4 py-3 rounded-lg border-2 transition text-left',
                      config.options.operationType === op.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 dark:border-gray-700'
                    )}
                  >
                    <span className="font-medium">{op.name}</span>
                    {op.priceModifier > 0 && (
                      <span className="text-sm font-medium text-primary">
                        +{formatPrice(op.priceModifier)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Step 5: Summary
  const renderSummary = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Configuration Summary */}
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Uw configuratie
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Ruimte</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {selectedRoomData?.name}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Product</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {selectedProductData?.name}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Afmetingen</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {config.dimensions.width} x {config.dimensions.height} cm
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Framekleur</span>
            <span className="font-medium text-gray-900 dark:text-white capitalize">
              {config.options.frameColor}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Aantal</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {config.quantity}
            </span>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Prijsoverzicht
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Subtotaal</span>
            <span className="font-medium">{formatPrice(calculatedPrice / 1.21)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">BTW (21%)</span>
            <span className="font-medium">{formatPrice(calculatedPrice - calculatedPrice / 1.21)}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
            <span className="font-bold text-gray-900 dark:text-white">Totaal</span>
            <span className="text-2xl font-bold text-primary">{formatPrice(calculatedPrice)}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-nowrap items-stretch gap-2 sm:gap-4 w-full min-w-0">
            {/* Quantity Selector */}
            <div
              className={cn(
                "flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl",
                "px-[clamp(0.25rem,1.2vw,1rem)]",
                "gap-[clamp(0.25rem,1vw,0.75rem)]",
                "flex-none shrink min-w-[88px]"
              )}
            >
              <button
                onClick={() =>
                  setConfig((prev) => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))
                }
                className={cn(
                  "flex items-center justify-center rounded-lg transition text-primary",
                  // responsive square button size
                  "w-[clamp(1.5rem,5vw,2rem)] h-[clamp(2.5rem,6vw,3rem)]",
                  "hover:bg-gray-200 dark:hover:bg-gray-700",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                disabled={config.quantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus className="w-[clamp(0.75rem,2.2vw,1rem)] h-[clamp(0.75rem,2.2vw,1rem)]" />
              </button>

              <span
                className={cn(
                  "text-center font-bold tabular-nums",
                  "w-[clamp(1.25rem,3vw,1.75rem)]",
                  "text-[clamp(0.75rem,2.2vw,1.125rem)]"
                )}
              >
                {config.quantity}
              </span>

              <button
                onClick={() => setConfig((prev) => ({ ...prev, quantity: prev.quantity + 1 }))}
                className={cn(
                  "flex items-center justify-center rounded-lg transition text-primary",
                  "w-[clamp(1.5rem,5vw,2rem)] h-[clamp(2.5rem,6vw,3rem)]",
                  "hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
                aria-label="Increase quantity"
              >
                <Plus className="w-[clamp(0.75rem,2.2vw,1rem)] h-[clamp(0.75rem,2.2vw,1rem)]" />
              </button>
            </div>

            {/* Add to cart */}
            <Button
              className={cn(
                "flex-1 px-4 lg:px-2 xl:px-4 transition-all duration-300 active:scale-95 h-12",
                buttonState === "celebrating" && "!bg-[#FF1493] !text-white scale-105 !border-[#FF1493]",
                buttonState === "done" && "!bg-gray-500 !text-white scale-95 !border-gray-500"
              )}
              size="lg"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (buttonState !== 'idle') return;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (rect.left + rect.width / 2) / window.innerWidth;
                const y = (rect.top + rect.height / 2) / window.innerHeight;
                const w = rect.width / window.innerWidth;
                const h = rect.height / window.innerHeight;

                setButtonState('celebrating');
                triggerAddToCartCelebration(x, y, w, h);

                setTimeout(() => {
                  router.push('/cart');
                }, 100);
              }}
            >
              <div className="flex items-center justify-center gap-2 w-full text-nowrap">
                {buttonState === "celebrating" ? (
                  <Check className="shrink-0 w-5 h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                ) : (
                  <ShoppingCart className="shrink-0 w-5 h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                )}

                <span className="font-bold whitespace-nowrap !text-sm lg:!text-xs xl:!text-sm">
                  {buttonState === "celebrating" ? "Toegevoegd!" : "Toevoegen aan winkelwagen"}
                </span>
              </div>
            </Button>
          </div>

          {/* Payment Icons */}
          <div className="px-1">
            <PaymentIcons />
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-2 mb-2">
            <Check className="w-4 h-4 text-green-500" />
            Gratis verzending vanaf €50
          </p>
          <p className="flex items-center gap-2 mb-2">
            <Check className="w-4 h-4 text-green-500" />
            Levertijd: 5-7 werkdagen
          </p>
          <p className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            5 jaar garantie
          </p>
        </div>
      </div>
    </div >
  );

  // Render current step
  const renderStep = () => {
    switch (config.step) {
      case 1:
        return renderRoomSelection();
      case 2:
        return renderProductTypeSelection();
      case 3:
        return renderProductSelection();
      case 4:
        return renderDimensionsOptions();
      case 5:
        return renderSummary();
      default:
        return renderRoomSelection();
    }
  };

  return (
    <div>
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {configurator.steps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center"
            >
              <button
                onClick={() => step.id <= config.step && goToStep(step.id)}
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-bold transition',
                  step.id < config.step
                    ? 'bg-green-500 text-white'
                    : step.id === config.step
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                )}
                disabled={step.id > config.step}
              >
                {step.id < config.step ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </button>
              {index < configurator.steps.length - 1 && (
                <div
                  className={cn(
                    'w-12 md:w-24 h-1 mx-2',
                    step.id < config.step
                      ? 'bg-green-500'
                      : 'bg-gray-200 dark:bg-gray-700'
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Stap {config.step}: {configurator.steps[config.step - 1].title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {configurator.steps[config.step - 1].description}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8">{renderStep()}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={config.step === 1}
          leftIcon={<ChevronLeft className="w-5 h-5" />}
        >
          Vorige
        </Button>
        {config.step < 5 && (
          <Button
            onClick={nextStep}
            disabled={
              (config.step === 1 && !config.selectedRoom) ||
              (config.step === 2 && !config.selectedProductType) ||
              (config.step === 3 && !config.selectedProduct) ||
              (config.step === 4 && (!config.dimensions.width || !config.dimensions.height))
            }
            rightIcon={<ChevronRight className="w-5 h-5" />}
          >
            Volgende
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductConfigurator;
