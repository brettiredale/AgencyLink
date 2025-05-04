import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
  fluid = false,
}) => {
  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-7xl': !fluid,
        },
        className
      )}
    >
      {children}
    </Component>
  );
};