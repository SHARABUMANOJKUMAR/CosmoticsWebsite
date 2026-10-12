import React from 'react';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'eyebrow';

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: TypographyElement;
  color?: 'primary' | 'secondary' | 'muted' | 'light' | 'inverse' | 'accent' | 'burgundy';
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}

const defaultElementMap: Record<TypographyVariant, TypographyElement> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  eyebrow: 'span'
};

const colorStyleMap: Record<string, string> = {
  primary: 'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  muted: 'var(--text-muted)',
  light: 'var(--text-light)',
  inverse: 'var(--text-inverse)',
  accent: 'var(--color-rose-gold)',
  burgundy: 'var(--color-deep-burgundy)'
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  color,
  align,
  className = '',
  children,
  style,
  ...props
}) => {
  const Component = as || defaultElementMap[variant] || 'p';
  const variantClass = `typography-${variant}`;
  
  const inlineStyles: React.CSSProperties = {
    ...style,
    ...(color ? { color: colorStyleMap[color] } : {}),
    ...(align ? { textAlign: align } : {})
  };

  return React.createElement(
    Component,
    {
      className: `${variantClass} ${className}`.trim(),
      style: inlineStyles,
      ...props
    },
    children
  );
};
