'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, logout, orders } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pendingOrders = orders.filter(o => o.status !== 'delivered').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'shipped': return 'bg-purple-100 text-purple-700';
      case 'delivered': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'In afwachting';
      case 'processing': return 'In behandeling';
      case 'shipped': return 'Verzonden';
      case 'delivered': return 'Bezorgd';
      default: return status;
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
          {user?.name?.split(' ')[0]}
        </span>
        {pendingOrders > 0 && (
          <span className="w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {pendingOrders}
          </span>
        )}
        <i className={`fas fa-chevron-down text-xs text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-fadeIn">
          {/* User Info Header */}
          <div className="p-4 bg-gradient-to-r from-primary to-blue-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="text-white">
                <p className="font-bold">{user?.name}</p>
                <p className="text-sm text-blue-100">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 border-b border-gray-200 dark:border-gray-700">
            <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700">
              <p className="text-2xl font-bold text-primary">{orders.length}</p>
              <p className="text-xs text-gray-500">Bestellingen</p>
            </div>
            <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700">
              <p className="text-2xl font-bold text-purple-500">{orders.filter(o => o.status === 'shipped').length}</p>
              <p className="text-xs text-gray-500">Onderweg</p>
            </div>
            <div className="p-3 text-center">
              <p className="text-2xl font-bold text-green-500">{orders.filter(o => o.status === 'delivered').length}</p>
              <p className="text-xs text-gray-500">Bezorgd</p>
            </div>
          </div>

          {/* Recent Orders */}
          {orders.length > 0 && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Recente bestellingen</p>
              <div className="space-y-2">
                {orders.slice(0, 2).map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{order.id}</p>
                      <p className="text-xs text-gray-500">€{order.total.toFixed(2)}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Menu Items */}
          <div className="p-2">
            <Link
              href="/account"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <i className="fas fa-user text-gray-400 w-5"></i>
              <span className="text-sm text-gray-700 dark:text-gray-300">Mijn account</span>
            </Link>
            <Link
              href="/account/orders"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <i className="fas fa-box text-gray-400 w-5"></i>
              <span className="text-sm text-gray-700 dark:text-gray-300">Mijn bestellingen</span>
              {pendingOrders > 0 && (
                <span className="ml-auto px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {pendingOrders} actief
                </span>
              )}
            </Link>
            <Link
              href="/account/shipping"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <i className="fas fa-truck text-gray-400 w-5"></i>
              <span className="text-sm text-gray-700 dark:text-gray-300">Verzending & tracking</span>
            </Link>
            <Link
              href="/account/addresses"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <i className="fas fa-map-marker-alt text-gray-400 w-5"></i>
              <span className="text-sm text-gray-700 dark:text-gray-300">Adressen</span>
            </Link>
            <Link
              href="/account/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <i className="fas fa-cog text-gray-400 w-5"></i>
              <span className="text-sm text-gray-700 dark:text-gray-300">Instellingen</span>
            </Link>
          </div>

          {/* Logout */}
          <div className="p-2 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition"
            >
              <i className="fas fa-sign-out-alt w-5"></i>
              <span className="text-sm">Uitloggen</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
