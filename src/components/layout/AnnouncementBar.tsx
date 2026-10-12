import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { Typography } from '../ui/Typography';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      style={{
        backgroundColor: 'var(--color-deep-burgundy)',
        color: 'var(--color-warm-ivory)',
        padding: '0.45rem var(--spacing-4)',
        fontSize: 'var(--font-size-xs)',
        position: 'relative',
        zIndex: 110,
        transition: 'all var(--transition-normal)'
      }}
    >
      <div
        className="site-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--spacing-2)',
          textAlign: 'center'
        }}
      >
        <Sparkles size={13} color="var(--color-rose-gold-light)" />
        <Typography
          variant="caption"
          style={{
            color: 'var(--color-warm-ivory)',
            letterSpacing: '0.08em',
            margin: 0,
            textTransform: 'none'
          }}
        >
          <strong>Bengaluru Atelier Special:</strong> Complimentary Pan-India delivery on orders above ₹1,499. Use code <strong>GLOW10</strong> for 10% off.
        </Typography>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss announcement"
          style={{
            position: 'absolute',
            right: 'var(--spacing-4)',
            color: 'var(--color-champagne-beige)',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            opacity: 0.8
          }}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
