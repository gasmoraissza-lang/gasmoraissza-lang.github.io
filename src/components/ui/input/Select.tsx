import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface SelectProps extends ComponentProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'filled' | 'outline' | 'ghost';
  state?: 'default' | 'success' | 'warning' | 'error';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      size = 'md',
      variant = 'outline',
      state = 'default',
      placeholder,
      value,
      defaultValue,
      disabled = false,
      required = false,
      name,
      id,
      onChange,
      onFocus,
      onBlur,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'w-full transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer';

    const sizeClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-3 py-2.5 text-base',
      lg: 'px-4 py-3 text-lg',
      xl: 'px-5 py-4 text-xl',
    };

    const variantClasses = {
      default: 'bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-600',
      filled: 'bg-gray-100 border-0 dark:bg-gray-700',
      outline: 'bg-transparent border border-gray-300 dark:border-gray-600',
      ghost: 'bg-transparent border-0 border-b border-gray-300 dark:border-gray-600',
    };

    const stateClasses = {
      default: 'focus:ring-2 focus:ring-gray-500 focus:border-gray-500',
      success: 'border-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-gray-500',
      warning: 'border-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-gray-400',
      error: 'border-gray-700 focus:ring-2 focus:ring-gray-700 focus:border-gray-700',
    };

    const roundedClasses = 'rounded-md';

    const hasIcons = leftIcon || rightIcon;
    const iconClasses = hasIcons ? 'pl-10 pr-10' : '';

    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {leftIcon}
          </div>
        )}
        <select
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          required={required}
          name={name}
          id={id}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cn(
            baseClasses,
            sizeClasses[size],
            variantClasses[variant],
            stateClasses[state],
            roundedClasses,
            iconClasses,
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            {rightIcon}
          </div>
        )}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;