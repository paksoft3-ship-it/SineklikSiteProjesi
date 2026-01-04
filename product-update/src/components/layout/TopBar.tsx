'use client';

import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="bg-secondary dark:bg-gray-900 py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap text-white">
          <div className="flex items-center gap-2">
            <i className="fas fa-check text-primary"></i>
            <i className="fas fa-check text-primary -ml-2"></i>
            <span>Gratis levering*</span>
          </div>
          <span className="hidden md:inline text-gray-500">|</span>
          <div className="flex items-center gap-2">
            <i className="fas fa-check text-primary"></i>
            <i className="fas fa-check text-primary -ml-2"></i>
            <span>15.000+ tevreden klanten</span>
          </div>
          <span className="hidden md:inline text-gray-500">|</span>
          <div className="flex items-center gap-2">
            <i className="fas fa-check text-primary"></i>
            <i className="fas fa-check text-primary -ml-2"></i>
            <Link href="/reviews" className="hover:text-primary transition underline">
              Klantbeoordeling 4.8
            </Link>
            <div className="flex text-yellow-400 text-xs">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
