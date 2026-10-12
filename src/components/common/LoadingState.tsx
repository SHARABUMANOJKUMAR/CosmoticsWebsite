import React from 'react';
import { Typography } from '../ui/Typography';

export interface LoadingStateProps {
  message?: string;
  fullPage?: boolean;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Curating botanical formulations...',
  fullPage = false
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: fullPage ? 'var(--spacing-24) var(--spacing-6)' : 'var(--spacing-12) var(--spacing-6)',
        width: '100%',
        minHeight: fullPage ? '50vh' : '240px'
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '3px solid var(--color-soft-blush)',
          borderTopColor: 'var(--color-rose-gold)',
          borderRightColor: 'var(--color-deep-burgundy)',
          animation: 'spin 0.8s linear infinite',
          marginBottom: 'var(--spacing-4)'
        }}
      />
      <Typography variant="body" style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
        {message}
      </Typography>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
