import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn, paddingClasses, roundedClasses, shadowClasses, borderClasses } from '../utils';

export interface CardProps extends ComponentProps {
  as?: 'div' | 'section' | 'article' | 'aside';
  interactive?: boolean;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      variant = 'default',
      padding = 'md',
      rounded = 'lg',
      shadow = 'md',
      border = true,
      interactive = false,
      hover = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'bg-white dark:bg-gray-800 transition-all duration-200';
    
    const variantClasses = {
      default: 'border-gray-200 dark:border-gray-700',
      primary: 'border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700/20',
      secondary: 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/20',
      success: 'border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700/20',
      warning: 'border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700/20',
      error: 'border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700/20',
      ghost: 'border-transparent bg-transparent',
      outline: 'border-gray-300 bg-transparent dark:border-gray-600',
      link: 'border-transparent bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800',
      filled: 'border-transparent bg-gray-100 dark:bg-gray-700',
    };

    const interactiveClasses = interactive
      ? 'cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
      : '';

    const hoverClasses = hover
      ? 'hover:shadow-lg hover:-translate-y-1'
      : '';

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          paddingClasses[padding],
          roundedClasses[rounded],
          shadowClasses[shadow],
          border === false ? 'border-0' : 
          border === true ? 'border' : 
          border === 'thin' ? 'border border-gray-200' :
          border === 'medium' ? 'border-2 border-gray-300' :
          border === 'thick' ? 'border-4 border-gray-400' : '',
          interactiveClasses,
          hoverClasses,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card;
