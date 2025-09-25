import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn, sizeClasses } from '../utils';

export interface TextProps extends ComponentProps {
  as?: 'p' | 'span' | 'div' | 'strong' | 'em' | 'small' | 'mark' | 'del' | 'ins' | 'sub' | 'sup';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray' | 'white' | 'black' | 'muted';
  decoration?: 'none' | 'underline' | 'line-through' | 'overline';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  truncate?: boolean;
  italic?: boolean;
}

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      className,
      as: Component = 'p',
      size = 'md',
      weight = 'normal',
      align = 'left',
      color = 'black',
      decoration = 'none',
      transform = 'none',
      truncate = false,
      italic = false,
      ...props
    },
    ref
  ) => {
    const sizeClassesMap = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    };

    const weightClasses = {
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    };

    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
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

    const decorationClasses = {
      none: 'no-underline',
      underline: 'underline',
      'line-through': 'line-through',
      overline: 'overline',
    };

    const transformClasses = {
      none: 'normal-case',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          sizeClassesMap[size],
          weightClasses[weight],
          alignClasses[align],
          colorClasses[color],
          decorationClasses[decoration],
          transformClasses[transform],
          truncate && 'truncate',
          italic && 'italic',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

export default Text;
