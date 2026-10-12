import React from 'react';
import { Search, X } from 'lucide-react';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'Search by product name, ingredient, or ritual...'
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px'
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 'var(--spacing-4)',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--color-rose-gold)',
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none'
        }}
      >
        <Search size={18} />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
        style={{
          width: '100%',
          padding: '0.85rem 2.8rem 0.85rem 3rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-medium)',
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-deep-burgundy)',
          fontSize: 'var(--font-size-sm)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all var(--transition-fast)'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-rose-gold)';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(197, 139, 131, 0.2)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-medium)';
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        }}
      />

      {value && (
        <button
          type="button"
          onClick={() => {
            onChange('');
            if (onClear) onClear();
          }}
          aria-label="Clear search query"
          style={{
            position: 'absolute',
            right: 'var(--spacing-4)',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            padding: '2px'
          }}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
