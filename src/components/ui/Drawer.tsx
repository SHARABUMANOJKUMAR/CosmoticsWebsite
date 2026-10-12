import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  width?: string;
  position?: 'right' | 'left';
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  width = '420px',
  position = 'right',
  children
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-drawer)',
        display: 'flex',
        justifyContent: position === 'right' ? 'flex-end' : 'flex-start',
        backgroundColor: 'var(--bg-overlay)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.25s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: width,
          height: '100%',
          backgroundColor: 'var(--bg-card)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          animation: `${position === 'right' ? 'slideInRight' : 'slideUp'} 0.3s cubic-bezier(0.16, 1, 0.3, 1)`
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--spacing-5) var(--spacing-6)',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-card-subtle)'
          }}
        >
          {title ? (
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--font-size-xl)',
                color: 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              {title}
            </h3>
          ) : <div />}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X size={20} />
          </Button>
        </div>
        <div style={{ flex: '1 1 auto', overflowY: 'auto', padding: 'var(--spacing-6)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
