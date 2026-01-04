import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'yellow' | 'red' | 'gray' | 'primary';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge = ({ children, variant = 'gray', size = 'sm', className }: BadgeProps) => {
  const baseStyles = 'inline-flex items-center font-semibold tracking-wide uppercase rounded';

  const variants = {
    green: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    red: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    gray: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    primary: 'bg-primary/10 text-primary dark:bg-primary/20',
  };

  const sizes = {
    sm: 'px-2 py-1 text-[10px]',
    md: 'px-3 py-1.5 text-xs',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};

export default Badge;
