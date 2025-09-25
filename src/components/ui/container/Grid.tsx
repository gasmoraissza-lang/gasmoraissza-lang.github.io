import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface GridProps extends ComponentProps {
  as?: 'div' | 'section' | 'main' | 'article';
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'auto' | 'none';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  gapX?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  gapY?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  };
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      cols = 'auto',
      gap = 'md',
      gapX,
      gapY,
      responsive,
      align = 'stretch',
      justify = 'start',
      ...props
    },
    ref
  ) => {
    const baseClasses = 'grid';

    const colsClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
      auto: 'grid-cols-auto',
      none: 'grid-cols-none',
    };

    const gapClasses = {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };

    const gapXClasses = {
      none: 'gap-x-0',
      xs: 'gap-x-1',
      sm: 'gap-x-2',
      md: 'gap-x-4',
      lg: 'gap-x-6',
      xl: 'gap-x-8',
    };

    const gapYClasses = {
      none: 'gap-y-0',
      xs: 'gap-y-1',
      sm: 'gap-y-2',
      md: 'gap-y-4',
      lg: 'gap-y-6',
      xl: 'gap-y-8',
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

    const responsiveClasses = responsive
      ? Object.entries(responsive)
          .map(([breakpoint, cols]) => {
            const breakpointPrefix = breakpoint === 'sm' ? 'sm:' : 
                                   breakpoint === 'md' ? 'md:' : 
                                   breakpoint === 'lg' ? 'lg:' : 
                                   breakpoint === 'xl' ? 'xl:' : '';
            return `${breakpointPrefix}grid-cols-${cols}`;
          })
          .join(' ')
      : '';

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          colsClasses[cols],
          gapClasses[gap],
          gapX && gapXClasses[gapX],
          gapY && gapYClasses[gapY],
          alignClasses[align],
          justifyClasses[justify],
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

Grid.displayName = 'Grid';

export default Grid;
