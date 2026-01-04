'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  tracking?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  orders: Order[];
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo orders for testing
const demoOrders: Order[] = [
  {
    id: 'ORD-2024-001',
    date: '2024-12-15',
    status: 'delivered',
    total: 349,
    items: [
      { name: 'Plissé Hordeur - Wit', quantity: 1, price: 249 },
      { name: 'Professionele montage', quantity: 1, price: 75 },
      { name: 'Tochtstrip premium', quantity: 1, price: 25 },
    ],
    tracking: 'NL123456789',
  },
  {
    id: 'ORD-2024-002',
    date: '2024-12-28',
    status: 'shipped',
    total: 178,
    items: [
      { name: 'Honeycomb Gordijn - Grijs', quantity: 2, price: 89 },
    ],
    tracking: 'NL987654321',
  },
  {
    id: 'ORD-2025-001',
    date: '2025-01-02',
    status: 'processing',
    total: 299,
    items: [
      { name: 'Glazen Balkon Hor - Antraciet', quantity: 1, price: 299 },
    ],
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('ws_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setOrders(demoOrders);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo login - in production, this would call your API
    if (email && password.length >= 6) {
      const newUser: User = {
        id: 'user_' + Date.now(),
        email,
        name: email.split('@')[0],
      };
      setUser(newUser);
      setOrders(demoOrders);
      localStorage.setItem('ws_user', JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (name && email && password.length >= 6) {
      const newUser: User = {
        id: 'user_' + Date.now(),
        email,
        name,
      };
      setUser(newUser);
      setOrders([]);
      localStorage.setItem('ws_user', JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    setOrders([]);
    localStorage.removeItem('ws_user');
  };

  const updateProfile = async (data: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem('ws_user', JSON.stringify(updatedUser));
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        orders,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
