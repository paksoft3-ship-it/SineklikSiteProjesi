import { Metadata } from 'next';
import ProductConfigurator from '@/components/product/ProductConfigurator';

export const metadata: Metadata = {
  title: 'Plissé Hordeur Configureren | Window Specialist',
  description: 'Configureer uw plissé hordeur op maat. Ruimtebesparend design voor balkons en terrassen. Kies uw opties en zie direct de prijs.',
};

const productData = {
  id: 'plisse-hordeur',
  name: 'Plissé Hordeur - Op Maat',
  description: 'Ruimtebesparende plissé hordeur voor balkons, terrassen en tuindeuren. Eenvoudig te bedienen met één hand.',
  basePrice: 199,
  oldPrice: 249,
  deliveryDays: 10,
  images: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
  ],
  configOptions: [
    {
      id: 'breedte',
      label: 'Breedte',
      infoTitle: 'Breedtematen plissé hordeur',
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
      label: 'Hoogte',
      infoTitle: 'Hoogtematen plissé hordeur',
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
      label: 'Uitvoering',
      infoTitle: 'Uitvoering opties',
      infoContent: 'Kies tussen een enkele of dubbele uitvoering. Een dubbele uitvoering opent naar twee kanten en is ideaal voor bredere openingen.',
      options: [
        { value: 'enkel', label: 'Enkele uitvoering (1-zijdig)', price: 0 },
        { value: 'dubbel', label: 'Dubbele uitvoering (2-zijdig)', price: 75 },
      ],
    },
    {
      id: 'profiel',
      label: 'Profielbreedte',
      infoTitle: 'Profielbreedte informatie',
      infoContent: 'Het 3.5cm profiel is geschikt voor de meeste standaard situaties. Kies voor het 4cm profiel bij grotere openingen of wanneer extra stevigheid gewenst is.',
      options: [
        { value: '35', label: '3.5 cm (standaard)', price: 0 },
        { value: '40', label: '4 cm (extra stevig)', price: 25 },
      ],
    },
    {
      id: 'gaastype',
      label: 'Gaastype',
      infoTitle: 'Gaastype opties',
      infoContent: 'Standaard polyester gaas is geschikt voor de meeste situaties. Pet-Screen is extra sterk en bestand tegen huisdieren. Poll-Tex filtert tevens pollen voor hooikoortslijders.',
      options: [
        { value: 'standaard', label: 'Standaard polyester', price: 0 },
        { value: 'pet-screen', label: 'Pet-Screen (huisdiervriendelijk)', price: 35 },
        { value: 'poll-tex', label: 'Poll-Tex (pollenwerend)', price: 55 },
        { value: 'rvs', label: 'RVS gaas (extra duurzaam)', price: 75 },
      ],
    },
    {
      id: 'drempel',
      label: 'Drempeloptie',
      infoTitle: 'Drempelopties',
      infoContent: 'Kies voor een drempelloos systeem wanneer u geen struikelgevaar wilt of voor toegankelijkheid met rolstoel/rollator. Het magneet systeem houdt de hor op zijn plaats zonder vaste drempel.',
      options: [
        { value: 'standaard', label: 'Standaard drempel', price: 0 },
        { value: 'laag', label: 'Lage drempel (15mm)', price: 20 },
        { value: 'drempelloos', label: 'Drempelloos (magneet)', price: 45 },
      ],
    },
    {
      id: 'framekleur',
      label: 'Framekleur',
      infoTitle: 'Beschikbare framekleuren',
      infoContent: 'Kies de kleur van het aluminium frame. Alle kleuren zijn verkrijgbaar in matte afwerking voor een stijlvolle uitstraling.',
      options: [
        { value: 'wit', label: 'Wit (RAL 9016)', price: 0 },
        { value: 'creme', label: 'Crème (RAL 9001)', price: 0 },
        { value: 'antraciet', label: 'Antraciet (RAL 7016)', price: 25 },
        { value: 'zwart', label: 'Zwart (RAL 9005)', price: 25 },
      ],
    },
    {
      id: 'montage',
      label: 'Montageservice',
      infoTitle: 'Montageservice',
      infoContent: 'Laat uw plissé hordeur professioneel monteren door onze vakkundige monteurs. Inclusief inmeten, montage en instructie.',
      options: [
        { value: 'zelf', label: 'Zelf monteren', price: 0 },
        { value: 'montage', label: 'Professionele montage', price: 75 },
      ],
    },
  ],
};

export default function PlisseHordeurConfiguratorPage() {
  return <ProductConfigurator product={productData} />;
}
