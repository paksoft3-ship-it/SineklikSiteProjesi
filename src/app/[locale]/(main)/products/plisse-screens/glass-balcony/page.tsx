import { Metadata } from 'next';
import ProductConfigurator from '@/components/product/ProductConfigurator';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Glazen Balkon Hor Configureren | Window Specialist',
  description: 'Configureer uw glazen balkon hor op maat. Speciaal ontworpen voor glazen balkonsystemen. Kies uw opties en zie direct de prijs.',
};

export default async function GlazenBalkonConfiguratorPage() {
  const t = await getTranslations('Products.glazen_balkon_hor');

  const productData = {
    id: 'glazen-balkon-hor',
    name: t('name'),
    description: t('description'),
    basePrice: 249,
    oldPrice: 299,
    deliveryDays: 12,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqSc6Kf_Rcj1FerlaQzT6ZaNAUZEFzJj2BRHKS4sYSxZo8Klj-y9d3kGl2Ff9x3Q8E9mSleF2JTu4N5cHGCWUlPS8RH9DzW4jBlXTPuGAdwUQSoQ9gvDa7-Vn_rDZ7BKLXBUkhl8sgwK-EXQY_G6scFFtrLT_03qO2z19CvP833Tg2KFtUovXKc4_KUZS2BUrjYoPLo5b-1OdZzkv4v8Zo_VlX6krEMAgbSW6OJqTUg_wRnkFELt65_VlvNX8AZtAvCUtpmnXZMmZA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPe47aptIh0CmFyoCa1_w-OUlTXKXl2CJtovUQFZs5iRQ5Qo25vh2UPj6qeAorSlsAwlW3jaD6wYUrvADYk77wawHRq0Z2v1tZO8qvQ1b5C_nm3wlowdIrcftUD_lxzrkRfrqVZrIFC8dPEkhgLrUHyNOCgyoCS9XYPe-_HZBHlFSw9XLfhfXVVdU3EKdQEuvdDwaAhi_780d4AaZ0bdj4R3BmFRehqV70AwiViEuojFYcFMtWKxV8UdSB7y3i7KmIdF-YgtPhmtVi',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vtkX7ReV_vig94UvWCKzy11t8c7SA-MLMn-5FlgOWQsvOE4BydICRdB0Dtt0mKaKRihy6mEw_hBGoLEtE1t01t-FZ7pxf6r_VcCRIvzXBTY0n647G0DhrJYqQZBbTE9qHnNpm90l4jkW4_NfNUwPCWYhLT3pk3SdQifYkRPCjYzDWfZwXAnzF1oIIyEXk7odgjSptOnGhtnXvKbp4CT8zKbZjAkuGVqLunuKXJH8iLyjNCKT68v2aszFF1ErCjGiuCQ3LMN97X7m',
    ],
    configOptions: [
      {
        id: 'hoogte',
        label: t('options.height.label'),
        infoTitle: t('options.height.infoTitle'),
        infoContent: {
          headers: ['Werkhoogte', 'Marge'],
          rows: [
            ['2000 mm', '1990 mm - 2020 mm'],
            ['2050 mm', '2040 mm - 2070 mm'],
            ['2100 mm', '2090 mm - 2120 mm'],
            ['2150 mm', '2140 mm - 2170 mm'],
            ['2200 mm', '2190 mm - 2220 mm'],
            ['2250 mm', '2240 mm - 2270 mm'],
            ['2300 mm', '2290 mm - 2320 mm'],
            ['2350 mm', '2340 mm - 2370 mm'],
            ['2400 mm', '2390 mm - 2420 mm'],
            ['2450 mm', '2440 mm - 2470 mm'],
            ['2500 mm', '2490 mm - 2520 mm'],
            ['2550 mm', '2540 mm - 2570 mm'],
            ['2600 mm', '2590 mm - 2620 mm'],
          ],
        },
        options: [
          { value: '2000', label: '2000 mm', price: 0 },
          { value: '2100', label: '2100 mm', price: 15 },
          { value: '2200', label: '2200 mm', price: 30 },
          { value: '2300', label: '2300 mm', price: 45 },
          { value: '2400', label: '2400 mm', price: 60 },
          { value: '2500', label: '2500 mm', price: 75 },
          { value: '2600', label: '2600 mm', price: 90 },
        ],
        required: true,
      },
      {
        id: 'funderingsbalk',
        label: t('options.foundation_beam.label'),
        infoTitle: t('options.foundation_beam.infoTitle'),
        infoContent: t('options.foundation_beam.infoContent'),
        options: [
          { value: 'geen', label: t('options.foundation_beam.none'), price: 0 },
          { value: 'aluminium', label: t('options.foundation_beam.aluminum'), price: 45 },
          { value: 'rvs', label: t('options.foundation_beam.rvs'), price: 75 },
        ],
      },
      {
        id: 'glasopvang',
        label: t('options.glass_catch.label'),
        infoTitle: t('options.glass_catch.infoTitle'),
        infoContent: t('options.glass_catch.infoContent'),
        options: [
          { value: 'geen', label: t('options.glass_catch.none'), price: 0 },
          { value: 'standaard', label: t('options.glass_catch.standard'), price: 25 },
          { value: 'breed', label: t('options.glass_catch.wide'), price: 35 },
        ],
      },
      {
        id: 'steel-look',
        label: t('options.steel_look.label'),
        infoTitle: t('options.steel_look.infoTitle'),
        infoContent: t('options.steel_look.infoContent'),
        options: [
          { value: 'geen', label: t('options.steel_look.none'), price: 0 },
          { value: 'horizontaal', label: t('options.steel_look.horizontal'), price: 35 },
          { value: 'verticaal', label: t('options.steel_look.vertical'), price: 35 },
          { value: 'beide', label: t('options.steel_look.both'), price: 60 },
        ],
      },
      {
        id: 'tochtstrip',
        label: t('options.draft_strip.label'),
        infoTitle: t('options.draft_strip.infoTitle'),
        infoContent: t('options.draft_strip.infoContent'),
        options: [
          { value: 'geen', label: t('options.draft_strip.none'), price: 0 },
          { value: 'standaard', label: t('options.draft_strip.standard'), price: 15 },
          { value: 'premium', label: t('options.draft_strip.premium'), price: 25 },
        ],
      },
      {
        id: 'meenemer',
        label: t('options.carrier.label'),
        infoTitle: t('options.carrier.infoTitle'),
        infoContent: t('options.carrier.infoContent'),
        options: [
          { value: 'geen', label: t('options.carrier.none'), price: 0 },
          { value: 'enkel', label: t('options.carrier.single'), price: 20 },
          { value: 'dubbel', label: t('options.carrier.double'), price: 35 },
        ],
      },
      {
        id: 'deurgreep',
        label: t('options.handle.label'),
        infoTitle: t('options.handle.infoTitle'),
        infoContent: t('options.handle.infoContent'),
        options: [
          { value: 'standaard', label: t('options.handle.standard'), price: 0 },
          { value: 'zwart', label: t('options.handle.black'), price: 15 },
          { value: 'rvs', label: t('options.handle.rvs'), price: 25 },
          { value: 'premium', label: t('options.handle.premium'), price: 35 },
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
    ],
  };

  return <ProductConfigurator product={productData} />;
}
