import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn, paddingClasses } from '../utils';

export interface CardContentProps extends ComponentProps {
  as?: 'div' | 'main' | 'section';
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const baseClasses = 'flex-1';

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardContent.displayName = 'CardContent';

export default CardContent;
