import { Metadata } from 'next';
import ProductConfigurator from '@/components/product/ProductConfigurator';

export const metadata: Metadata = {
  title: 'Honeycomb / Duette Gordijn Configureren | Window Specialist',
  description: 'Configureer uw Honeycomb gordijn op maat. Maximale isolatie met honingraatstructuur. Bespaar tot 25% op energiekosten.',
};

const productData = {
  id: 'honeycomb-gordijn',
  name: 'Honeycomb / Duette Gordijn - Op Maat',
  description: 'Het Honeycomb gordijn heeft een unieke honingraatstructuur die lucht opsluit voor optimale isolatie.',
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
      label: 'Breedte',
      infoTitle: 'Breedtematen Honeycomb gordijn',
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
      label: 'Hoogte',
      infoTitle: 'Hoogtematen Honeycomb gordijn',
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
      label: 'Celstructuur',
      infoTitle: 'Single Cell vs Double Cell',
      infoContent: 'Single Cell heeft één laag honingraat en biedt goede isolatie. Double Cell heeft twee lagen en biedt maximale isolatie met tot 25% energiebesparing.',
      options: [
        { value: 'single', label: 'Single Cell (standaard isolatie)', price: 0 },
        { value: 'double', label: 'Double Cell (maximale isolatie)', price: 45 },
      ],
    },
    {
      id: 'lichtdoorlatendheid',
      label: 'Lichtdoorlatendheid',
      infoTitle: 'Lichtdoorlatendheid opties',
      infoContent: 'Kies de gewenste lichtdoorlatendheid. Transparant laat veel licht door, semi-transparant filtert het licht, verduisterend blokkeert al het licht.',
      options: [
        { value: 'transparant', label: 'Transparant (70%)', price: 0 },
        { value: 'semi', label: 'Semi-transparant (40%)', price: 15 },
        { value: 'verduisterend', label: 'Verduisterend (0%)', price: 35 },
      ],
    },
    {
      id: 'bediening',
      label: 'Bedieningstype',
      infoTitle: 'Bedieningsopties',
      infoContent: 'Koordbediening is standaard en betrouwbaar. Smartcord is een koordloze oplossing, veilig voor kinderen. Elektrisch biedt maximaal comfort.',
      options: [
        { value: 'koord', label: 'Koordbediening', price: 0 },
        { value: 'smartcord', label: 'Smartcord (koordloos)', price: 25 },
        { value: 'elektrisch', label: 'Elektrisch (met afstandsbediening)', price: 125 },
      ],
    },
    {
      id: 'uitvoering',
      label: 'Uitvoering',
      infoTitle: 'Uitvoering opties',
      infoContent: 'Standaard: gordijn beweegt van boven naar beneden. Top-down/Bottom-up: gordijn kan zowel van boven als van onder geopend worden voor meer flexibiliteit.',
      options: [
        { value: 'standaard', label: 'Standaard (top naar bottom)', price: 0 },
        { value: 'tdbu', label: 'Top-down / Bottom-up', price: 35 },
        { value: 'dag-nacht', label: 'Dag & Nacht (twee stoffen)', price: 75 },
      ],
    },
    {
      id: 'kleur',
      label: 'Kleur',
      infoTitle: 'Kleuropties',
      infoContent: 'Kies uit meer dan 100 kleuren. Bestel gratis stalen om de kleur thuis te bekijken voordat u beslist.',
      options: [
        { value: 'wit', label: 'Wit', price: 0 },
        { value: 'creme', label: 'Crème', price: 0 },
        { value: 'grijs', label: 'Lichtgrijs', price: 0 },
        { value: 'antraciet', label: 'Antraciet', price: 0 },
        { value: 'beige', label: 'Beige', price: 0 },
        { value: 'anders', label: 'Andere kleur (zie stalen)', price: 0 },
      ],
    },
    {
      id: 'montage',
      label: 'Montageservice',
      infoTitle: 'Montageservice',
      infoContent: 'Laat uw Honeycomb gordijn professioneel monteren door onze vakkundige monteurs. Inclusief inmeten, montage en instructie.',
      options: [
        { value: 'zelf', label: 'Zelf monteren (incl. instructie)', price: 0 },
        { value: 'montage', label: 'Professionele montage', price: 45 },
      ],
    },
  ],
};

export default function HoneycombConfiguratorPage() {
  return <ProductConfigurator product={productData} />;
}
