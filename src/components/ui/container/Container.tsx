import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn, paddingClasses, marginClasses } from '../utils';

export interface ContainerProps extends ComponentProps {
  as?: 'div' | 'section' | 'main' | 'article' | 'aside' | 'header' | 'footer' | 'nav';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'screen';
  centered?: boolean;
  maxWidth?: boolean;
  background?: 'transparent' | 'white' | 'gray' | 'primary' | 'secondary' | 'gradient';
  border?: boolean | 'thin' | 'medium' | 'thick';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      size = 'md',
      centered = false,
      maxWidth = true,
      background = 'transparent',
      border = false,
      padding = 'md',
      margin = 'none',
      ...props
    },
    ref
  ) => {
    const baseClasses = 'w-full';

    const sizeClasses = {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
      screen: 'max-w-screen-xl',
    };

    const centeredClasses = centered ? 'mx-auto' : '';
    const maxWidthClasses = maxWidth ? sizeClasses[size] : '';

    const backgroundClasses = {
      transparent: '',
      white: 'bg-white dark:bg-gray-800',
      gray: 'bg-gray-50 dark:bg-gray-900',
      primary: 'bg-gray-50 dark:bg-gray-900/20',
      secondary: 'bg-gray-100 dark:bg-gray-800',
      gradient: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900',
    };

    const borderClasses = {
      false: '',
      true: 'border border-gray-200 dark:border-gray-700',
      thin: 'border border-gray-200 dark:border-gray-700',
      medium: 'border-2 border-gray-300 dark:border-gray-600',
      thick: 'border-4 border-gray-400 dark:border-gray-500',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          maxWidthClasses,
          centeredClasses,
          backgroundClasses[background],
          borderClasses[border],
          paddingClasses[padding],
          marginClasses[margin],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;
