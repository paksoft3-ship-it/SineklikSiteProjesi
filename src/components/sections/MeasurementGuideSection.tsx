'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const MeasurementGuideSection = () => {
  const t = useTranslations('HomePage.measurement');

  return (
    <section className="py-24 bg-bg-light-2 dark:bg-bg-dark-2 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gray-200 dark:bg-gray-800 opacity-20 transform skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Card */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl relative">
              <div className="absolute -top-6 -left-6 bg-secondary text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg text-2xl font-bold">
                <i className="fas fa-ruler-combined"></i>
              </div>
              <img
                alt={t('image_alt')}
                className="rounded-xl w-full object-cover h-64 md:h-80 mb-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl3KWyH6a5djj9VrolidPqThfUURYlhlwIoEocXZNCmRXosPIO3biSqFLYg7UeZlYFzyD6DhUGLhVCyiH_EU4nIw-U5qwrx8lPHQuzVFVZgKr5CCS9_C3cGuGMIbeU9D1umLoYg4LxUkzha8oK6YCJE4SIPNel6oHsS70P8kXGZJxhi30YXlOs-j1tixfaSAh7_4y3To6zjgNCdv5EzlVx98Mad5xdQniWJBg66CE887oc7hR5UQ0OV-fQiqaBl0xdwmXlmAZWFzWL"
              />
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  !
                </div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  {t.rich('alert', {
                    bold: (chunks) => <span className="font-bold underline">{chunks}</span>
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('description')}
            </p>

            <ul className="space-y-6 mb-8">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary text-xl mt-1 mr-4"></i>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t('steps.video_title')}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{t('steps.video_desc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-primary text-xl mt-1 mr-4"></i>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t('steps.insurance_title')}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{t('steps.insurance_desc')}</p>
                </div>
              </li>
            </ul>

            <Link
              href="/measurement-guide"
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30 focus:ring-primary min-w-[200px]"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurementGuideSection;
