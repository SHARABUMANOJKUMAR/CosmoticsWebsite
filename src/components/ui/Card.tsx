import React from 'react';

export type CardVariant = 'base' | 'elevated' | 'bordered' | 'soft' | 'champagne' | 'glass';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  className?: string;
  children: React.ReactNode;
}

const paddingStyleMap: Record<CardPadding, string> = {
  none: '0',
  sm: 'var(--spacing-3)',
  md: 'var(--spacing-6)',
  lg: 'var(--spacing-8)',
  xl: 'var(--spacing-10)'
};

export const Card: React.FC<CardProps> = ({
  variant = 'base',
  padding = 'none',
  hoverable = false,
  className = '',
  style,
  children,
  ...props
}) => {
  const classes = [
    'card-base',
    `card-${variant}`,
    hoverable ? 'hoverable-card' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const inlineStyles: React.CSSProperties = {
    padding: paddingStyleMap[padding],
    ...style
  };

  return (
    <div className={classes} style={inlineStyles} {...props}>
      {children}
    </div>
  );
};
