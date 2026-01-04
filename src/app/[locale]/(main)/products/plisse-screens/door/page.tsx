import { Metadata } from 'next';
import ProductConfigurator from '@/components/product/ProductConfigurator';
import { getTranslations } from 'next-intl/server';
import { ScrollAnimation } from '@/components/animations/ScrollAnimation';


export const metadata: Metadata = {
  title: 'Plissé Hordeur Configureren | Window Specialist',
  description: 'Configureer uw plissé hordeur op maat. Ruimtebesparend design voor balkons en terrassen. Kies uw opties en zie direct de prijs.',
};

export default async function PlisseHordeurConfiguratorPage() {
  const t = await getTranslations('Products.plisse_hordeur');

  const productData = {
    id: 'plisse-hordeur',
    name: t('name'),
    description: t('description'),
    basePrice: 199,
    oldPrice: 249,
    deliveryDays: 10,
    images: [
      '/images/products/plisse-hordeur.png',
      '/images/products/raam-hor.png',
      '/images/collections/horren.png',
      '/images/products/window-detail-ref.png',
    ],
    configOptions: [
      {
        id: 'breedte',
        label: t('options.width.label'),
        infoTitle: t('options.width.infoTitle'),
        infoContent: {
          headers: ['Werkbreedte', 'Marge'],
          rows: [
            ['800 mm', '790 mm - 820 mm'],
            ['900 mm', '890 mm - 920 mm'],
            ['1000 mm', '990 mm - 1020 mm'],
            ['1100 mm', '1090 mm - 1120 mm'],
            ['1200 mm', '1190 mm - 1220 mm'],
            ['1400 mm', '1390 mm - 1420 mm'],
            ['1600 mm', '1590 mm - 1620 mm'],
            ['1800 mm', '1790 mm - 1820 mm'],
            ['2000 mm', '1990 mm - 2020 mm'],
            ['2200 mm', '2190 mm - 2220 mm'],
            ['2400 mm', '2390 mm - 2420 mm'],
          ],
        },
        options: [
          { value: '800', label: '800 mm', price: 0 },
          { value: '1000', label: '1000 mm', price: 0 },
          { value: '1200', label: '1200 mm', price: 15 },
          { value: '1400', label: '1400 mm', price: 30 },
          { value: '1600', label: '1600 mm', price: 45 },
          { value: '1800', label: '1800 mm', price: 60 },
          { value: '2000', label: '2000 mm', price: 80 },
          { value: '2200', label: '2200 mm', price: 100 },
          { value: '2400', label: '2400 mm', price: 120 },
        ],
        required: true,
      },
      {
        id: 'hoogte',
        label: t('options.height.label'),
        infoTitle: t('options.height.infoTitle'),
        infoContent: {
          headers: ['Werkhoogte', 'Marge'],
          rows: [
            ['2000 mm', '1990 mm - 2020 mm'],
            ['2100 mm', '2090 mm - 2120 mm'],
            ['2200 mm', '2190 mm - 2220 mm'],
            ['2300 mm', '2290 mm - 2320 mm'],
            ['2400 mm', '2390 mm - 2420 mm'],
            ['2500 mm', '2490 mm - 2520 mm'],
            ['2600 mm', '2590 mm - 2620 mm'],
          ],
        },
        options: [
          { value: '2000', label: '2000 mm', price: 0 },
          { value: '2100', label: '2100 mm', price: 10 },
          { value: '2200', label: '2200 mm', price: 20 },
          { value: '2300', label: '2300 mm', price: 30 },
          { value: '2400', label: '2400 mm', price: 40 },
          { value: '2500', label: '2500 mm', price: 55 },
          { value: '2600', label: '2600 mm', price: 70 },
        ],
        required: true,
      },
      {
        id: 'uitvoering',
        label: t('options.execution.label'),
        infoTitle: t('options.execution.infoTitle'),
        infoContent: t('options.execution.infoContent'),
        options: [
          { value: 'enkel', label: t('options.execution.single'), price: 0 },
          { value: 'dubbel', label: t('options.execution.double'), price: 75 },
        ],
      },
      {
        id: 'profiel',
        label: t('options.profile.label'),
        infoTitle: t('options.profile.infoTitle'),
        infoContent: t('options.profile.infoContent'),
        options: [
          { value: '35', label: t('options.profile.std'), price: 0 },
          { value: '40', label: t('options.profile.sturdy'), price: 25 },
        ],
      },
      {
        id: 'gaastype',
        label: t('options.mesh.label'),
        infoTitle: t('options.mesh.infoTitle'),
        infoContent: t('options.mesh.infoContent'),
        options: [
          { value: 'standaard', label: t('options.mesh.std'), price: 0 },
          { value: 'pet-screen', label: t('options.mesh.pet'), price: 35 },
          { value: 'poll-tex', label: t('options.mesh.poll'), price: 55 },
          { value: 'rvs', label: t('options.mesh.rvs'), price: 75 },
        ],
      },
      {
        id: 'drempel',
        label: t('options.threshold.label'),
        infoTitle: t('options.threshold.infoTitle'),
        infoContent: t('options.threshold.infoContent'),
        options: [
          { value: 'standaard', label: t('options.threshold.std'), price: 0 },
          { value: 'laag', label: t('options.threshold.low'), price: 20 },
          { value: 'drempelloos', label: t('options.threshold.none'), price: 45 },
        ],
      },
      {
        id: 'framekleur',
        label: t('options.color.label'),
        infoTitle: t('options.color.infoTitle'),
        infoContent: t('options.color.infoContent'),
        options: [
          { value: 'wit', label: t('options.color.white'), price: 0 },
          { value: 'creme', label: t('options.color.cream'), price: 0 },
          { value: 'antraciet', label: t('options.color.anthracite'), price: 25 },
          { value: 'zwart', label: t('options.color.black'), price: 25 },
        ],
      },
      {
        id: 'montage',
        label: t('options.mounting.label'),
        infoTitle: t('options.mounting.infoTitle'),
        infoContent: t('options.mounting.infoContent'),
        options: [
          { value: 'zelf', label: t('options.mounting.self'), price: 0 },
          { value: 'montage', label: t('options.mounting.pro'), price: 75 },
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
      <ScrollAnimation variant="fadeUp">
        <ProductConfigurator product={productData} />
      </ScrollAnimation>
    </div>
  );
}
