import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface InputProps extends ComponentProps {
  as?: 'input' | 'textarea';
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'filled' | 'outline' | 'ghost';
  state?: 'default' | 'success' | 'warning' | 'error';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number | string;
  min?: number | string;
  step?: number | string;
  pattern?: string;
  name?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rows?: number;
}

const Input = forwardRef<any, InputProps>(
  (
    {
      className,
      as: Component = 'input',
      type = 'text',
      size = 'md',
      variant = 'outline',
      state = 'default',
      placeholder,
      value,
      defaultValue,
      disabled = false,
      readOnly = false,
      required = false,
      autoComplete,
      autoFocus = false,
      maxLength,
      minLength,
      max,
      min,
      step,
      pattern,
      name,
      id,
      onChange,
      onFocus,
      onBlur,
      leftIcon,
      rightIcon,
      rows,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'w-full transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';

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

    const inputProps = Component === 'input' ? { type } : {};
    const textareaProps = Component === 'textarea' ? { rows: rows || 3 } : {};

    const hasIcons = leftIcon || rightIcon;
    const iconClasses = hasIcons ? 'pl-10 pr-10' : '';

    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {leftIcon}
          </div>
        )}
        <Component
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
          step={step}
          pattern={pattern}
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
          {...inputProps}
          {...textareaProps}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
