import { Metadata } from 'next';
import ProductConfigurator from '@/components/product/ProductConfigurator';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Honeycomb / Duette Gordijn Configureren | Window Specialist',
  description: 'Configureer uw Honeycomb gordijn op maat. Maximale isolatie met honingraatstructuur. Bespaar tot 25% op energiekosten.',
};

export default async function HoneycombConfiguratorPage() {
  const t = await getTranslations('Products.honeycomb_gordijn');

  const productData = {
    id: 'honeycomb-gordijn',
    name: t('name'),
    description: t('description'),
    basePrice: 129,
    oldPrice: 169,
    deliveryDays: 14,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY4KO7R8cYzhiiDQF3lEU0O2aFS-YeBKBIa4iRXIWR38-_lzxIZTo1MdWYAUUS3Aeoa8wKNTTdptuMJymhiKUwV5ZmeTfx9mGQi2Lfd6-ZU2Hba11PxRuypd3boEmLw6Op6Mzwc125LS4htWFvhwKQjYTzcPnGtoY-F2e53uXtFp6WzFeBEcRIR2CcuHYh_tFXOBW6ppeu3W_Fa8eEr6xDBP0oxZFLAIg7HSWTW78WnzlxUE03IvGbE0ZmuqdMOArvYOkmkFWuqqkX',
    ],
    configOptions: [
      {
        id: 'breedte',
        label: t('options.width.label'),
        infoTitle: t('options.width.infoTitle'),
        infoContent: {
          headers: ['Werkbreedte', 'Marge'],
          rows: [
            ['400 mm', '390 mm - 420 mm'],
            ['600 mm', '590 mm - 620 mm'],
            ['800 mm', '790 mm - 820 mm'],
            ['1000 mm', '990 mm - 1020 mm'],
            ['1200 mm', '1190 mm - 1220 mm'],
            ['1400 mm', '1390 mm - 1420 mm'],
            ['1600 mm', '1590 mm - 1620 mm'],
            ['1800 mm', '1790 mm - 1820 mm'],
            ['2000 mm', '1990 mm - 2020 mm'],
          ],
        },
        options: [
          { value: '400', label: '400 mm', price: 0 },
          { value: '600', label: '600 mm', price: 0 },
          { value: '800', label: '800 mm', price: 15 },
          { value: '1000', label: '1000 mm', price: 30 },
          { value: '1200', label: '1200 mm', price: 45 },
          { value: '1400', label: '1400 mm', price: 60 },
          { value: '1600', label: '1600 mm', price: 80 },
          { value: '1800', label: '1800 mm', price: 100 },
          { value: '2000', label: '2000 mm', price: 120 },
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
            ['600 mm', '590 mm - 620 mm'],
            ['800 mm', '790 mm - 820 mm'],
            ['1000 mm', '990 mm - 1020 mm'],
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
          { value: '600', label: '600 mm', price: 0 },
          { value: '800', label: '800 mm', price: 0 },
          { value: '1000', label: '1000 mm', price: 15 },
          { value: '1200', label: '1200 mm', price: 25 },
          { value: '1400', label: '1400 mm', price: 35 },
          { value: '1600', label: '1600 mm', price: 50 },
          { value: '1800', label: '1800 mm', price: 65 },
          { value: '2000', label: '2000 mm', price: 80 },
          { value: '2200', label: '2200 mm', price: 100 },
          { value: '2400', label: '2400 mm', price: 120 },
        ],
        required: true,
      },
      {
        id: 'celstructuur',
        label: t('options.cell_structure.label'),
        infoTitle: t('options.cell_structure.infoTitle'),
        infoContent: t('options.cell_structure.infoContent'),
        options: [
          { value: 'single', label: t('options.cell_structure.single'), price: 0 },
          { value: 'double', label: t('options.cell_structure.double'), price: 45 },
        ],
      },
      {
        id: 'lichtdoorlatendheid',
        label: t('options.transparency.label'),
        infoTitle: t('options.transparency.infoTitle'),
        infoContent: t('options.transparency.infoContent'),
        options: [
          { value: 'transparant', label: t('options.transparency.transparent'), price: 0 },
          { value: 'semi', label: t('options.transparency.semi'), price: 15 },
          { value: 'verduisterend', label: t('options.transparency.blackout'), price: 35 },
        ],
      },
      {
        id: 'bediening',
        label: t('options.operation.label'),
        infoTitle: t('options.operation.infoTitle'),
        infoContent: t('options.operation.infoContent'),
        options: [
          { value: 'koord', label: t('options.operation.cord'), price: 0 },
          { value: 'smartcord', label: t('options.operation.smartcord'), price: 25 },
          { value: 'elektrisch', label: t('options.operation.electric'), price: 125 },
        ],
      },
      {
        id: 'uitvoering',
        label: t('options.execution.label'),
        infoTitle: t('options.execution.infoTitle'),
        infoContent: t('options.execution.infoContent'),
        options: [
          { value: 'standaard', label: t('options.execution.standard'), price: 0 },
          { value: 'tdbu', label: t('options.execution.tdbu'), price: 35 },
          { value: 'dag-nacht', label: t('options.execution.day_night'), price: 75 },
        ],
      },
      {
        id: 'kleur',
        label: t('options.color.label'),
        infoTitle: t('options.color.infoTitle'),
        infoContent: t('options.color.infoContent'),
        options: [
          { value: 'wit', label: t('options.color.white'), price: 0 },
          { value: 'creme', label: t('options.color.cream'), price: 0 },
          { value: 'grijs', label: t('options.color.grey'), price: 0 },
          { value: 'antraciet', label: t('options.color.anthracite'), price: 0 },
          { value: 'beige', label: t('options.color.beige'), price: 0 },
          { value: 'anders', label: t('options.color.other'), price: 0 },
        ],
      },
      {
        id: 'montage',
        label: t('options.mounting.label'),
        infoTitle: t('options.mounting.infoTitle'),
        infoContent: t('options.mounting.infoContent'),
        options: [
          { value: 'zelf', label: t('options.mounting.self'), price: 0 },
          { value: 'montage', label: t('options.mounting.pro'), price: 45 },
        ],
      },
    ],
  };

  return <ProductConfigurator product={productData} />;
}
