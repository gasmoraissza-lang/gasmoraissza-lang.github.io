import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface FlexProps extends ComponentProps {
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer' | 'nav';
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  gapX?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  gapY?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  responsive?: {
    sm?: {
      direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
      wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
      align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    };
    md?: {
      direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
      wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
      align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    };
    lg?: {
      direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
      wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
      align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    };
    xl?: {
      direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
      wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
      align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    };
  };
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      direction = 'row',
      wrap = 'nowrap',
      gap = 'none',
      gapX,
      gapY,
      align = 'start',
      justify = 'start',
      responsive,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'flex';

    const directionClasses = {
      row: 'flex-row',
      col: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'col-reverse': 'flex-col-reverse',
    };

    const wrapClasses = {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
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
      baseline: 'items-baseline',
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
          .map(([breakpoint, config]) => {
            const breakpointPrefix = breakpoint === 'sm' ? 'sm:' : 
                                   breakpoint === 'md' ? 'md:' : 
                                   breakpoint === 'lg' ? 'lg:' : 
                                   breakpoint === 'xl' ? 'xl:' : '';
            
            return [
              config.direction && `${breakpointPrefix}${directionClasses[config.direction]}`,
              config.wrap && `${breakpointPrefix}${wrapClasses[config.wrap]}`,
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
          wrapClasses[wrap],
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

Flex.displayName = 'Flex';

export default Flex;
