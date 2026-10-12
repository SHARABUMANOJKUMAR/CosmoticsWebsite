import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Typography } from '../ui/Typography';

export interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <Link
      to={`/shop?category=${encodeURIComponent(id)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        height: '380px',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'var(--spacing-6)',
        textDecoration: 'none',
        boxShadow: isHovered ? 'var(--shadow-xl)' : 'var(--shadow-md)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all var(--transition-normal)'
      }}
    >
      {/* Background Image */}
      <img
        src={imgSrc}
        alt={name}
        onError={() => setImgSrc('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform var(--transition-smooth)',
          zIndex: 1
        }}
      />

      {/* Dark & Rose Gradient Overlay for contrast and readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(87, 44, 58, 0.05) 0%, rgba(87, 44, 58, 0.45) 50%, rgba(63, 29, 40, 0.92) 100%)',
          zIndex: 2,
          transition: 'background var(--transition-normal)'
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          color: 'var(--color-warm-ivory)'
        }}
      >
        <Typography
          variant="eyebrow"
          style={{
            color: 'var(--color-rose-gold-light)',
            marginBottom: 'var(--spacing-1)'
          }}
        >
          Curated Ritual
        </Typography>

        <Typography
          variant="h3"
          style={{
            color: 'var(--color-white)',
            fontSize: '1.65rem',
            marginBottom: 'var(--spacing-2)'
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body-sm"
          style={{
            color: 'var(--color-champagne-beige-light)',
            marginBottom: 'var(--spacing-4)',
            lineHeight: 1.4,
            opacity: 0.95
          }}
        >
          {description}
        </Typography>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 600,
            color: 'var(--color-warm-ivory)',
            letterSpacing: '0.04em'
          }}
        >
          <span>Explore Collection</span>
          <ArrowRight
            size={16}
            style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform var(--transition-fast)'
            }}
          />
        </div>
      </div>
    </Link>
  );
};
