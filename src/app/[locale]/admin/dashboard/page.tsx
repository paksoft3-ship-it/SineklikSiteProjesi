import { Metadata } from 'next';
import { Link } from '@/navigation';
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  FileText,
  Users,
  Euro,
  ArrowRight,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Dashboard | Admin Panel',
};

// Mock data - in production, this would come from a database
const stats = [
  {
    label: 'Totale omzet',
    value: '€24,580',
    change: '+12.5%',
    trend: 'up',
    icon: Euro,
    color: 'bg-green-500',
  },
  {
    label: 'Bestellingen',
    value: '156',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'bg-blue-500',
  },
  {
    label: 'Offertes',
    value: '42',
    change: '+15.3%',
    trend: 'up',
    icon: FileText,
    color: 'bg-purple-500',
  },
  {
    label: 'Nieuwe klanten',
    value: '89',
    change: '-2.1%',
    trend: 'down',
    icon: Users,
    color: 'bg-orange-500',
  },
];

const recentOrders = [
  {
    id: 'WS-ABC123',
    customer: 'Jan de Vries',
    product: 'Inzethor Standaard',
    amount: '€149,00',
    status: 'processing',
    date: '2 uur geleden',
  },
  {
    id: 'WS-DEF456',
    customer: 'Sophie Jansen',
    product: 'Plissé Hordeur',
    amount: '€289,00',
    status: 'shipped',
    date: '5 uur geleden',
  },
  {
    id: 'WS-GHI789',
    customer: 'Mark Bakker',
    product: 'Rolgordijn Verduisterend',
    amount: '€89,00',
    status: 'pending',
    date: 'Gisteren',
  },
  {
    id: 'WS-JKL012',
    customer: 'Lisa van Dam',
    product: 'Dakraamhor VELUX',
    amount: '€129,00',
    status: 'delivered',
    date: 'Gisteren',
  },
];

const recentQuotes = [
  {
    id: 'Q-ABC123',
    customer: 'Peter Smit',
    products: '3x Inzethor, 1x Plissé',
    amount: '€567,00',
    status: 'pending',
    date: '1 uur geleden',
  },
  {
    id: 'Q-DEF456',
    customer: 'Anna Visser',
    products: '2x Rolgordijn',
    amount: '€198,00',
    status: 'contacted',
    date: '3 uur geleden',
  },
  {
    id: 'Q-GHI789',
    customer: 'Tom Hendriks',
    products: 'Woonkamer Stijl Pack',
    amount: '€289,00',
    status: 'quoted',
    date: 'Gisteren',
  },
];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  processing: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  shipped: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  delivered: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  contacted: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  quoted: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
};

const statusLabels: Record<string, string> = {
  pending: 'In afwachting',
  processing: 'In behandeling',
  shipped: 'Verzonden',
  delivered: 'Afgeleverd',
  contacted: 'Gecontacteerd',
  quoted: 'Offerte verstuurd',
};

export default function AdminDashboardPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welkom terug! Hier is een overzicht van uw winkel.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', stat.color)}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span
                className={cn(
                  'flex items-center text-sm font-medium',
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                )}
              >
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Recente bestellingen
            </h2>
            <Link
              href="/admin/bestellingen"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Bekijk alles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentOrders.map((order) => (
              <div key={order.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {order.id}
                  </span>
                  <span
                    className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium',
                      statusColors[order.status]
                    )}
                  >
                    {statusLabels[order.status]}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">{order.customer}</p>
                    <p className="text-gray-500 dark:text-gray-500">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">{order.amount}</p>
                    <p className="text-gray-500 dark:text-gray-500">{order.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Quotes */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Recente offertes
            </h2>
            <Link
              href="/admin/offertes"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Bekijk alles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentQuotes.map((quote) => (
              <div key={quote.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {quote.id}
                  </span>
                  <span
                    className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium',
                      statusColors[quote.status]
                    )}
                  >
                    {statusLabels[quote.status]}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">{quote.customer}</p>
                    <p className="text-gray-500 dark:text-gray-500">{quote.products}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">{quote.amount}</p>
                    <p className="text-gray-500 dark:text-gray-500">{quote.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Snelle acties
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/admin/producten/nieuw"
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition"
          >
            <Package className="w-6 h-6 text-primary" />
            <span className="font-medium">Product toevoegen</span>
          </Link>
          <Link
            href="/admin/blog/nieuw"
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition"
          >
            <FileText className="w-6 h-6 text-primary" />
            <span className="font-medium">Blog schrijven</span>
          </Link>
          <Link
            href="/admin/offertes"
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition"
          >
            <Clock className="w-6 h-6 text-primary" />
            <span className="font-medium">Offertes bekijken</span>
          </Link>
          <Link
            href="/admin/instellingen"
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition"
          >
            <AlertCircle className="w-6 h-6 text-primary" />
            <span className="font-medium">Instellingen</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
