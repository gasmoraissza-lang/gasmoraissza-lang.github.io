import { forwardRef } from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils';

export interface InputGroupProps extends ComponentProps {
  as?: 'div' | 'fieldset';
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  attached?: boolean;
}

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  (
    {
      children,
      className,
      as: Component = 'div',
      orientation = 'vertical',
      spacing = 'sm',
      size = 'md',
      attached = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'flex';

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
        ? '[&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:last-child)]:border-r-0'
        : '[&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:last-child)]:border-b-0'
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

InputGroup.displayName = 'InputGroup';

export default InputGroup;
