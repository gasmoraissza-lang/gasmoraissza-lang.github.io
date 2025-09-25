import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface BadgeProps extends ComponentProps {
  as?: 'span' | 'div';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'subtle';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      className,
      as: Component = 'span',
      variant = 'default',
      size = 'md',
      rounded = 'full',
      dot = false,
      removable = false,
      onRemove,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center font-medium transition-colors duration-200';

    const sizeClasses = {
      xs: 'px-1.5 py-0.5 text-xs',
      sm: 'px-2 py-1 text-xs',
      md: 'px-2.5 py-1.5 text-sm',
      lg: 'px-3 py-2 text-base',
    };

    const variantClasses = {
      default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      primary: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      success: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      warning: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      error: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      outline: 'border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300',
      subtle: 'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    };

    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    const dotSizeClasses = {
      xs: 'w-1 h-1',
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-2.5 h-2.5',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          roundedClasses[rounded],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'mr-1.5 bg-current opacity-75 rounded-full',
              dotSizeClasses[size]
            )}
          />
        )}
        {children}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1.5 inline-flex items-center justify-center w-3 h-3 rounded-full hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-colors"
            aria-label="Remove"
          >
            <svg
              className="w-2 h-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </Component>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
