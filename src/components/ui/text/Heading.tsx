import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface HeadingProps extends ComponentProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray' | 'white' | 'black' | 'muted';
  gradient?: boolean;
  underline?: boolean;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      className,
      as,
      level = 1,
      weight = 'bold',
      align = 'left',
      color = 'black',
      gradient = false,
      underline = false,
      ...props
    },
    ref
  ) => {
    const Component = as || (`h${level}` as keyof JSX.IntrinsicElements);

    const sizeClasses = {
      1: 'text-4xl md:text-5xl lg:text-6xl',
      2: 'text-3xl md:text-4xl lg:text-5xl',
      3: 'text-2xl md:text-3xl lg:text-4xl',
      4: 'text-xl md:text-2xl lg:text-3xl',
      5: 'text-lg md:text-xl lg:text-2xl',
      6: 'text-base md:text-lg lg:text-xl',
    };

    const weightClasses = {
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

    const gradientClasses = gradient
      ? 'bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent'
      : '';

    const underlineClasses = underline ? 'border-b-2 border-black dark:border-white pb-2' : '';

    return (
      <Component
        ref={ref}
        className={cn(
          sizeClasses[level],
          weightClasses[weight],
          alignClasses[align],
          colorClasses[color],
          gradientClasses,
          underlineClasses,
          'leading-tight',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
