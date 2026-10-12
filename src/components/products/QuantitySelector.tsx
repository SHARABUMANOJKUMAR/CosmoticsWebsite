import React from 'react';
import { Minus, Plus } from 'lucide-react';

export interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md';
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onDecrease,
  onIncrease,
  min = 1,
  max = 99,
  size = 'md'
}) => {
  const isSm = size === 'sm';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'var(--color-white)',
        padding: isSm ? '2px 6px' : '4px 8px'
      }}
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        style={{
          width: isSm ? '24px' : '30px',
          height: isSm ? '24px' : '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          color: quantity <= min ? 'var(--text-muted)' : 'var(--color-deep-burgundy)',
          cursor: quantity <= min ? 'not-allowed' : 'pointer'
        }}
      >
        <Minus size={isSm ? 12 : 14} />
      </button>

      <span
        style={{
          minWidth: isSm ? '24px' : '36px',
          textAlign: 'center',
          fontWeight: 600,
          fontSize: isSm ? 'var(--font-size-xs)' : 'var(--font-size-sm)',
          color: 'var(--color-deep-burgundy)',
          userSelect: 'none'
        }}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        style={{
          width: isSm ? '24px' : '30px',
          height: isSm ? '24px' : '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          color: quantity >= max ? 'var(--text-muted)' : 'var(--color-deep-burgundy)',
          cursor: quantity >= max ? 'not-allowed' : 'pointer'
        }}
      >
        <Plus size={isSm ? 12 : 14} />
      </button>
    </div>
  );
};
