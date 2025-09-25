import { ReactNode } from 'react';

export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

export interface VariantProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost' | 'outline' | 'link' | 'filled';
}

export interface SizeProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ColorProps {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray' | 'white' | 'black';
}

export interface SpacingProps {
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface BorderProps {
  border?: boolean | 'thin' | 'medium' | 'thick';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface ShadowProps {
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export type ComponentProps = BaseProps & 
  VariantProps & 
  SizeProps & 
  ColorProps & 
  SpacingProps & 
  BorderProps & 
  ShadowProps;

export type ComponentVariant<T extends string> = {
  [K in T]: string;
};
