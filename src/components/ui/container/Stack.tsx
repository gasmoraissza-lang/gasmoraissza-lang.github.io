import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface StackProps extends ComponentProps {
  as?: 'div' | 'section' | 'main' | 'article' | 'aside' | 'header' | 'footer' | 'nav';
  direction?: 'vertical' | 'horizontal';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  responsive?: {
    sm?: {
      direction?: 'vertical' | 'horizontal';
      spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      align?: 'start' | 'center' | 'end' | 'stretch';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    };
    md?: {
      direction?: 'vertical' | 'horizontal';
      spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      align?: 'start' | 'center' | 'end' | 'stretch';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    };
    lg?: {
      direction?: 'vertical' | 'horizontal';
      spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      align?: 'start' | 'center' | 'end' | 'stretch';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    };
    xl?: {
      direction?: 'vertical' | 'horizontal';
      spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      align?: 'start' | 'center' | 'end' | 'stretch';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    };
  };
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      direction = 'vertical',
      spacing = 'md',
      align = 'stretch',
      justify = 'start',
      wrap = false,
      responsive,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'flex';

    const directionClasses = {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    };

    const spacingClasses = {
      none: '',
      xs: direction === 'vertical' ? 'space-y-1' : 'space-x-1',
      sm: direction === 'vertical' ? 'space-y-2' : 'space-x-2',
      md: direction === 'vertical' ? 'space-y-4' : 'space-x-4',
      lg: direction === 'vertical' ? 'space-y-6' : 'space-x-6',
      xl: direction === 'vertical' ? 'space-y-8' : 'space-x-8',
    };

    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    };

    const wrapClasses = wrap ? 'flex-wrap' : 'flex-nowrap';

    const responsiveClasses = responsive
      ? Object.entries(responsive)
          .map(([breakpoint, config]) => {
            const breakpointPrefix = breakpoint === 'sm' ? 'sm:' : 
                                   breakpoint === 'md' ? 'md:' : 
                                   breakpoint === 'lg' ? 'lg:' : 
                                   breakpoint === 'xl' ? 'xl:' : '';
            
            const configDirection = config.direction || direction;
            const configSpacing = config.spacing || spacing;
            
            return [
              config.direction && `${breakpointPrefix}${directionClasses[configDirection]}`,
              config.spacing && `${breakpointPrefix}${spacingClasses[configSpacing]}`,
              config.align && `${breakpointPrefix}${alignClasses[config.align]}`,
              config.justify && `${breakpointPrefix}${justifyClasses[config.justify]}`,
            ].filter(Boolean).join(' ');
          })
          .join(' ')
      : '';

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          directionClasses[direction],
          spacingClasses[spacing],
          alignClasses[align],
          justifyClasses[justify],
          wrapClasses,
          responsiveClasses,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = 'Stack';

export default Stack;
