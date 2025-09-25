import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface LabelProps extends ComponentProps {
  as?: 'label' | 'span' | 'div';
  htmlFor?: string;
  required?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray' | 'white' | 'black' | 'muted';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  disabled?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      children,
      className,
      as: Component = 'label',
      htmlFor,
      required = false,
      size = 'md',
      color = 'black',
      weight = 'medium',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'block transition-colors duration-200';

    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    const colorClasses = {
      primary: 'text-black dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-400',
      success: 'text-gray-700 dark:text-gray-300',
      warning: 'text-gray-600 dark:text-gray-400',
      error: 'text-gray-800 dark:text-gray-200',
      gray: 'text-gray-500 dark:text-gray-400',
      white: 'text-white',
      black: 'text-gray-900 dark:text-white',
      muted: 'text-gray-500 dark:text-gray-400',
    };

    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    };

    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer';

    return (
      <Component
        ref={ref}
        htmlFor={htmlFor}
        className={cn(
          baseClasses,
          sizeClasses[size],
          colorClasses[color],
          weightClasses[weight],
          disabledClasses,
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span className="text-black dark:text-white ml-1" aria-label="required">
            *
          </span>
        )}
      </Component>
    );
  }
);

Label.displayName = 'Label';

export default Label;
