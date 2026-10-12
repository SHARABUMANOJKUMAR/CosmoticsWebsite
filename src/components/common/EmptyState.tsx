import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionText?: string;
  actionTo?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  actionText,
  actionTo,
  onAction
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--spacing-16) var(--spacing-6)',
        backgroundColor: 'var(--bg-card-subtle)',
        borderRadius: 'var(--radius-xl)',
        border: '1px dashed var(--border-medium)',
        margin: 'var(--spacing-6) 0'
      }}
    >
      {Icon && (
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-soft-blush)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-4)',
            color: 'var(--color-rose-gold)'
          }}
        >
          <Icon size={28} />
        </div>
      )}

      <Typography
        variant="h3"
        style={{
          color: 'var(--color-deep-burgundy)',
          marginBottom: 'var(--spacing-2)'
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body"
          style={{
            color: 'var(--text-muted)',
            maxWidth: '480px',
            marginBottom: actionText ? 'var(--spacing-6)' : 0
          }}
        >
          {description}
        </Typography>
      )}

      {actionText && (
        <Button
          variant="primary"
          to={actionTo}
          onClick={onAction}
        >
          {actionText}
        </Button>
      )}
    </div>
  );
};
