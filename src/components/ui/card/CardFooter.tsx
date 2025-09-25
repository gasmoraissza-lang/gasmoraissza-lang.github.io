import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn, paddingClasses, borderClasses } from '../utils';

export interface CardFooterProps extends ComponentProps {
  as?: 'div' | 'footer';
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      padding = 'md',
      border = 'thin',
      ...props
    },
    ref
  ) => {
    const baseClasses = 'border-t border-gray-200 dark:border-gray-700';

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          paddingClasses[padding],
          borderClasses[border],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export default CardFooter;
