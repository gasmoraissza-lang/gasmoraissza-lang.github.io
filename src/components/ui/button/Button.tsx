import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn, sizeClasses } from '../utils';

export interface ButtonProps extends ComponentProps {
  as?: 'button' | 'a' | 'div';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost' | 'outline' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const Button = forwardRef<any, ButtonProps>(
  (
    {
      children,
      className,
      as: Component = 'button',
      variant = 'default',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      type = 'button',
      href,
      target,
      rel,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl',
    };

    const variantClasses = {
      default: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
      primary: 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      success: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500',
      warning: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      error: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700',
      link: 'text-black hover:text-gray-800 underline focus:ring-gray-500 dark:text-white dark:hover:text-gray-300',
    };

    const roundedClasses = 'rounded-md';
    const fullWidthClasses = fullWidth ? 'w-full' : '';
    const loadingClasses = loading ? 'cursor-wait' : '';

    const buttonProps = Component === 'button' ? { type, disabled: disabled || loading } : {};
    const linkProps = Component === 'a' ? { href, target, rel } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          roundedClasses,
          fullWidthClasses,
          loadingClasses,
          className
        )}
        onClick={onClick}
        {...buttonProps}
        {...linkProps}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
