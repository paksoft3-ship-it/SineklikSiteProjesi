import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Slaapkamer Raamdecoratie & Horren | Window Specialist',
  description: 'Ontdek de beste verduisterende raamdecoratie en horren voor uw slaapkamer.',
};

const recommendations = [
  { id: 1, type: 'raamdecoratie', name: 'Verduisterend Rolgordijn', description: 'Slaap in complete duisternis.', price: 'Vanaf €49,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSycOcfKJHj-HbKjFf8t5-aSRWlwiEhbC6Y8IRx5jwE8SxwhOBzjpw-Fkjal1qxlYIqXhErDjbEFBy3Wj-00-GnxIurXB6xbP1D7arsoyoYnZWwieZL3T5eHNxjK_r0lpgnqLbfmbPIhRNRpASRmwN_G9Z5BzbQz6MFrDodyd6ySVp5kuNtlzU4r4ZWtQpfEHi8BEx0iKQzyBJw7RdB0ssg75PqZSEL6s0N29XjY9oW3pPcKYGvhh-OuGQ1F0yqnw8s7C64omkIIp', link: '/producten/raamdecoratie/rolgordijnen' },
  { id: 2, type: 'horren', name: 'Inzethorren', description: 'Frisse lucht zonder muggen.', price: 'Vanaf €49,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv', link: '/producten/horren/inzethorren' },
  { id: 3, type: 'raamdecoratie', name: 'Duette® Shades', description: 'Isolerend en verduisterend.', price: 'Vanaf €129,-', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawAgImZOKKD70Z5MscFOK3OWOurJi410Z5zReowrEWrvPBl9--pzNmYRlNOW7ndUFh770zGia-bpcjnq_c9W8TTXR3dRaGBAim0_FI8gYZ7PJDLH2mxiRJNAfoIBJBUll0soKq0RtLX4k8OauZznDAvsYl5BjX4yMnFOO_Ff8GKsQqHt3Rcy54yzRDybO4A8wv1q954GyjwrNhwDrOzNFu0poB3hIkgw8NU8QaZ_MoiFIFCNUXIJlglJjoELf3w4Y702i7jmzp34Q', link: '/producten/raamdecoratie/duette-shades' },
];

export default function SlaapkamerPage() {
  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1 min-h-screen">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAExX0NTbJP3_czX72nHNiuqmgWSygAOdWApuaRMDaoXpQ8sJfgFr9_ZNO9Oc4rIToNwt6eJQ2SAxnfc_ow-4XuDQgbvOyvm1kJ_nN-YVe391T02Mb-baA_5Q3wKIpIWmuIW9z10gHIVQAW9Iu_IG9ZjNwDowkRgD-TLuTqUITC0OK4JuCBasKaNmC_nanjC2fNMD-E8-Ea1G3kKOtjz2rwOweeI7MUSxtjjVa9kReX2itPbzKbnuaU4APFHqpYoMD4IcMXj0EUuAv" alt="Slaapkamer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-blue-100 text-blue-700"><i className="fas fa-moon mr-1"></i>Verduistering</span>
              <span className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-green-100 text-green-700"><i className="fas fa-bug mr-1"></i>Insectenwering</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Slaapkamer</h1>
            <p className="text-lg text-gray-200 max-w-2xl">Een goede nachtrust begint bij de juiste raamdecoratie. Verduisterend voor optimale slaap.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-8">Aanbevolen voor de slaapkamer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((item) => (
              <Link key={item.id} href={item.link} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded mb-3 ${item.type === 'horren' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{item.type}</span>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">{item.price}</span>
                    <span className="text-primary"><i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light-2 dark:bg-bg-dark-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-4">Populair: Slaapkamer Comfort Pack</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Verduisterend rolgordijn + inzet hor vanaf €149,-</p>
          <Link href="/producten/pakketten/slaapkamer-pack" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
            Bekijk pakket <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
