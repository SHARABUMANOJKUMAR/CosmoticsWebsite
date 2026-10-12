import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Check, ExternalLink } from 'lucide-react';
import type { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { Modal } from '../ui/Modal';
import { Typography } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { QuantitySelector } from './QuantitySelector';

export interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="840px">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-8)',
          alignItems: 'center'
        }}
      >
        {/* Left: Product Image */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-warm-ivory)',
            aspectRatio: '1/1'
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{ position: 'absolute', top: 'var(--spacing-3)', left: 'var(--spacing-3)' }}>
            {product.isBestseller && <Badge variant="bestseller">Bestseller</Badge>}
            {product.isNewArrival && <Badge variant="new">New</Badge>}
          </div>
        </div>

        {/* Right: Product Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="eyebrow" style={{ margin: 0 }}>
              {product.category}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={14} fill="var(--color-rose-gold)" color="var(--color-rose-gold)" />
              <Typography variant="caption" style={{ fontWeight: 600 }}>
                {product.rating} ({product.reviewCount} reviews)
              </Typography>
            </div>
          </div>

          <Typography variant="h2" style={{ fontSize: '1.75rem', lineHeight: 1.2 }}>
            {product.name}
          </Typography>

          <Typography variant="body-sm" style={{ color: 'var(--text-muted)' }}>
            {product.tagline}
          </Typography>

          {/* Pricing */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--spacing-3)', margin: 'var(--spacing-1) 0' }}>
            <span
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--color-deep-burgundy)',
                fontFamily: 'var(--font-sans)'
              }}
            >
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-rose-gold-dark)', fontWeight: 600 }}>
              Inclusive of all taxes
            </span>
          </div>

          <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {product.shortDescription}
          </Typography>

          {/* Key Benefits */}
          <div style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-md)' }}>
            <Typography variant="caption" style={{ fontWeight: 700, color: 'var(--color-deep-burgundy)', display: 'block', marginBottom: '6px' }}>
              Key Benefits
            </Typography>
            <ul style={{ paddingLeft: '18px', fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {product.keyBenefits.slice(0, 2).map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Quantity and Add to Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-2)' }}>
            <QuantitySelector
              quantity={quantity}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
              onIncrease={() => setQuantity((q) => q + 1)}
            />

            <Button
              variant="primary"
              fullWidth
              onClick={handleAddToCart}
              disabled={isAdded || !product.inStock}
              style={{ flex: 1 }}
            >
              {isAdded ? (
                <>
                  <Check size={18} /> Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag size={18} /> Add to Cart (₹{(product.price * quantity).toLocaleString('en-IN')})
                </>
              )}
            </Button>
          </div>

          {/* Link to Full Details Page */}
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2)' }}>
            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'var(--color-deep-burgundy)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              View Full Product Ritual & Ingredients <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};
