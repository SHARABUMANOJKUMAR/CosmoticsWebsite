import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

export interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [imgSrc, setImgSrc] = useState(product.image);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <Card
      variant="bordered"
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
      }}
    >
      {/* Product Image Container */}
      <div
        style={{
          position: 'relative',
          paddingTop: '115%', // 4:3 aspect ratio
          overflow: 'hidden',
          backgroundColor: 'var(--color-warm-ivory)',
          borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0'
        }}
      >
        <Link to={`/product/${product.id}`} tabIndex={-1} aria-hidden="true">
          <img
            src={imgSrc}
            alt={product.name}
            loading="lazy"
            onError={() => {
              // Graceful beauty image fallback
              setImgSrc('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80');
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform var(--transition-smooth)'
            }}
          />
        </Link>

        {/* Badges on Top Left */}
        <div
          style={{
            position: 'absolute',
            top: 'var(--spacing-3)',
            left: 'var(--spacing-3)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-1)',
            zIndex: 2
          }}
        >
          {product.isBestseller && <Badge variant="bestseller">Bestseller</Badge>}
          {product.isNewArrival && <Badge variant="new">New Arrival</Badge>}
          {product.isOrganic && <Badge variant="organic">100% Botanical</Badge>}
        </div>

        {/* Wishlist Button on Top Right */}
        <button
          onClick={handleToggleWishlist}
          aria-label={isFavorite ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          style={{
            position: 'absolute',
            top: 'var(--spacing-3)',
            right: 'var(--spacing-3)',
            zIndex: 2,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)',
            transition: 'transform var(--transition-fast)'
          }}
        >
          <Heart
            size={18}
            color="var(--color-deep-burgundy)"
            fill={isFavorite ? 'var(--color-rose-gold)' : 'none'}
          />
        </button>

        {/* Quick View Hover Action Button */}
        {onQuickView && (
          <div
            style={{
              position: 'absolute',
              bottom: 'var(--spacing-3)',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              padding: '0 var(--spacing-3)',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'all var(--transition-normal)',
              zIndex: 3
            }}
          >
            <Button
              variant="white"
              size="sm"
              onClick={handleQuickView}
              style={{
                fontSize: '0.8rem',
                width: '90%',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <Eye size={15} /> Quick View
            </Button>
          </div>
        )}
      </div>

      {/* Card Information */}
      <div
        style={{
          padding: 'var(--spacing-4)',
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-1)' }}>
          <Typography variant="caption" style={{ color: 'var(--color-rose-gold-dark)', fontWeight: 600 }}>
            {product.category}
          </Typography>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Star size={13} fill="var(--color-rose-gold)" color="var(--color-rose-gold)" />
            <Typography variant="caption" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              {product.rating}
            </Typography>
            <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
              ({product.reviewCount})
            </Typography>
          </div>
        </div>

        {/* Title */}
        <Typography
          variant="h3"
          as="h3"
          style={{
            fontSize: '1.15rem',
            lineHeight: 1.3,
            marginBottom: 'var(--spacing-1)',
            minHeight: '2.6rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          <Link
            to={`/product/${product.id}`}
            style={{ color: 'var(--color-deep-burgundy)' }}
          >
            {product.name}
          </Link>
        </Typography>

        {/* Tagline / Subtitle */}
        <Typography
          variant="body-sm"
          style={{
            color: 'var(--text-muted)',
            marginBottom: 'var(--spacing-3)',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontSize: '0.8rem'
          }}
        >
          {product.tagline}
        </Typography>

        {/* Price & Add to Cart button */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 'var(--spacing-2)',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--spacing-2)' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: 'var(--color-deep-burgundy)'
              }}
            >
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'line-through'
                }}
              >
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            isLoading={isAdding}
            aria-label={`Add ${product.name} to cart`}
            style={{
              padding: '0.45rem 0.85rem',
              fontSize: '0.78rem',
              borderColor: 'var(--color-deep-burgundy)'
            }}
          >
            <ShoppingBag size={14} /> Add
          </Button>
        </div>
      </div>
    </Card>
  );
};
