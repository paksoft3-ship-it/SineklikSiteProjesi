'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function AccountPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, orders, logout } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <i className="fas fa-spinner fa-spin text-3xl text-primary"></i>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'processing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'shipped': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return 'fa-clock';
      case 'processing': return 'fa-cog fa-spin';
      case 'shipped': return 'fa-truck';
      case 'delivered': return 'fa-check-circle';
      default: return 'fa-question';
    }
  };

  return (
    <div className="min-h-screen bg-bg-light-1 dark:bg-bg-dark-1 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-secondary dark:text-white mb-2">
            Welkom, {user?.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Beheer uw bestellingen, adressen en accountinstellingen.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              {/* User Avatar */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl font-bold text-primary">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{user?.name}</h3>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <Link
                  href="/account"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium"
                >
                  <i className="fas fa-home w-5"></i>
                  Dashboard
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
                >
                  <i className="fas fa-box w-5"></i>
                  Bestellingen
                </Link>
                <Link
                  href="/account/addresses"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
                >
                  <i className="fas fa-map-marker-alt w-5"></i>
                  Adressen
                </Link>
                <Link
                  href="/account/settings"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
                >
                  <i className="fas fa-cog w-5"></i>
                  Instellingen
                </Link>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition"
                >
                  <i className="fas fa-sign-out-alt w-5"></i>
                  Uitloggen
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <i className="fas fa-box text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{orders.length}</p>
                    <p className="text-sm text-gray-500">Totaal bestellingen</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <i className="fas fa-truck text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {orders.filter(o => o.status === 'shipped').length}
                    </p>
                    <p className="text-sm text-gray-500">Onderweg</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <i className="fas fa-check-circle text-xl text-green-600"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {orders.filter(o => o.status === 'delivered').length}
                    </p>
                    <p className="text-sm text-gray-500">Bezorgd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold text-secondary dark:text-white">
                  Recente bestellingen
                </h2>
                <Link href="/account/orders" className="text-primary text-sm font-medium hover:underline">
                  Alles bekijken →
                </Link>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-shopping-bag text-2xl text-gray-400"></i>
                  </div>
                  <p className="text-gray-500 mb-4">U heeft nog geen bestellingen geplaatst.</p>
                  <Link
                    href="/producten"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition"
                  >
                    <i className="fas fa-shopping-cart"></i>
                    Bekijk producten
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-primary/50 transition"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">{order.id}</p>
                          <p className="text-sm text-gray-500">Besteld op {order.date}</p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getStatusColor(order.status)}`}>
                          <i className={`fas ${getStatusIcon(order.status)} mr-1`}></i>
                          {getStatusText(order.status)}
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              {item.quantity}x {item.name}
                            </span>
                            <span className="text-gray-900 dark:text-white">€{item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-gray-900 dark:text-white">
                            Totaal: €{order.total.toFixed(2)}
                          </span>
                          {order.tracking && (
                            <span className="text-sm text-gray-500">
                              <i className="fas fa-barcode mr-1"></i>
                              {order.tracking}
                            </span>
                          )}
                        </div>
                        <Link
                          href={`/account/orders/${order.id}`}
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          Details bekijken →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
