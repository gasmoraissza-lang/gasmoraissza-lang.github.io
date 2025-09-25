import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn, paddingClasses, borderClasses } from '../utils';

export interface CardHeaderProps extends ComponentProps {
  as?: 'div' | 'header';
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
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
    const baseClasses = 'border-b border-gray-200 dark:border-gray-700';

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

CardHeader.displayName = 'CardHeader';

export default CardHeader;
