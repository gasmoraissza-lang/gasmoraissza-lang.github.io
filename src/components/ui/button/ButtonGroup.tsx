import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface ButtonGroupProps extends ComponentProps {
  as?: 'div' | 'section';
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  attached?: boolean;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      orientation = 'horizontal',
      spacing = 'sm',
      attached = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex';

    const orientationClasses = {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    };

    const spacingClasses = {
      none: '',
      xs: orientation === 'horizontal' ? 'space-x-1' : 'space-y-1',
      sm: orientation === 'horizontal' ? 'space-x-2' : 'space-y-2',
      md: orientation === 'horizontal' ? 'space-x-4' : 'space-y-4',
      lg: orientation === 'horizontal' ? 'space-x-6' : 'space-y-6',
    };

    const attachedClasses = attached
      ? orientation === 'horizontal'
        ? '[&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none'
        : '[&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none [&>*:not(:first-child):not(:last-child)]:rounded-none'
      : '';

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          orientationClasses[orientation],
          spacingClasses[spacing],
          attachedClasses,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
