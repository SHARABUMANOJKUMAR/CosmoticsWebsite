import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Drawer } from '../ui/Drawer';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { QuantitySelector } from './QuantitySelector';

export const CartDrawer: React.FC = () => {
  const { cart, cartCount, cartTotal, isCartOpen, closeCart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [checkoutSimulated, setCheckoutSimulated] = useState(false);

  const FREE_SHIPPING_THRESHOLD = 1499;
  const progressPercent = Math.min(100, Math.round((cartTotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountNeeded = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  const handleSimulateCheckout = () => {
    setCheckoutSimulated(true);
    setTimeout(() => {
      setCheckoutSimulated(false);
      clearCart();
      closeCart();
    }, 2800);
  };

  return (
    <Drawer
      isOpen={isCartOpen}
      onClose={closeCart}
      title={`Your Beauty Bag (${cartCount})`}
      width="440px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Free Shipping Progress Indicator */}
        <div
          style={{
            backgroundColor: 'var(--color-warm-ivory)',
            padding: 'var(--spacing-3) var(--spacing-4)',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--spacing-4)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <Typography variant="caption" style={{ fontWeight: 600, color: 'var(--color-deep-burgundy)' }}>
              {amountNeeded > 0
                ? `Add ₹${amountNeeded.toLocaleString('en-IN')} more for FREE Pan-India Shipping`
                : '🎉 You have qualified for FREE Pan-India Delivery!'}
            </Typography>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-rose-gold)' }}>
              {progressPercent}%
            </span>
          </div>

          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'rgba(87, 44, 58, 0.1)',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                backgroundColor: 'var(--color-rose-gold)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        {cart.length === 0 ? (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 'var(--spacing-8) var(--spacing-4)'
            }}
          >
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
              <ShoppingBag size={28} />
            </div>
            <Typography variant="h3" style={{ fontSize: '1.4rem', marginBottom: 'var(--spacing-2)' }}>
              Your bag is empty
            </Typography>
            <Typography variant="body-sm" style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-6)' }}>
              Explore our Bengaluru atelier formulations to begin your bespoke skincare ritual.
            </Typography>
            <Button variant="primary" to="/shop" onClick={closeCart}>
              Discover Bestsellers
            </Button>
          </div>
        ) : (
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)',
              paddingRight: 'var(--spacing-1)'
            }}
          >
            {cart.map((item) => (
              <div
                key={item.product.id}
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-4)',
                  paddingBottom: 'var(--spacing-4)',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-warm-ivory)'
                  }}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={closeCart}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--color-deep-burgundy)',
                        lineHeight: 1.2
                      }}
                    >
                      {item.product.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label={`Remove ${item.product.name} from cart`}
                      style={{ color: 'var(--text-muted)', padding: '2px' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <Typography variant="caption" style={{ color: 'var(--text-muted)', marginTop: '2px' }}>
                    {item.product.category} • {item.product.sizeVolume}
                  </Typography>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 'var(--spacing-2)' }}>
                    <QuantitySelector
                      quantity={item.quantity}
                      size="sm"
                      onDecrease={() => updateQuantity(item.product.id, item.quantity - 1)}
                      onIncrease={() => updateQuantity(item.product.id, item.quantity + 1)}
                    />

                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-deep-burgundy)' }}>
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div
            style={{
              paddingTop: 'var(--spacing-4)',
              borderTop: '1px solid var(--border-subtle)',
              marginTop: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body" style={{ color: 'var(--text-secondary)' }}>
                Subtotal
              </Typography>
              <Typography variant="h3" style={{ fontSize: '1.35rem', color: 'var(--color-deep-burgundy)', margin: 0 }}>
                ₹{cartTotal.toLocaleString('en-IN')}
              </Typography>
            </div>

            <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
              Taxes calculated at checkout. Express dispatched from Bengaluru.
            </Typography>

            {checkoutSimulated ? (
              <div
                style={{
                  backgroundColor: '#E7F4EB',
                  border: '1px solid #7EC89B',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-3)',
                  textAlign: 'center',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#1E6B3E', fontWeight: 600, fontSize: '0.9rem' }}>
                  <CheckCircle size={18} /> Order Simulated Successfully!
                </div>
                <Typography variant="caption" style={{ color: '#2C5E3B', display: 'block', marginTop: '4px' }}>
                  This is a frontend demonstration. No live payment gateway or charge was incurred.
                </Typography>
              </div>
            ) : (
              <Button
                variant="primary"
                fullWidth
                size="lg"
                onClick={handleSimulateCheckout}
                style={{ gap: 'var(--spacing-2)' }}
              >
                Proceed to Checkout <ArrowRight size={18} />
              </Button>
            )}

            <Button
              variant="ghost"
              fullWidth
              size="sm"
              onClick={closeCart}
              style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}
            >
              Continue Browsing
            </Button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '4px' }}>
              <ShieldCheck size={14} color="var(--color-rose-gold)" />
              <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
                Safe & Cruelty-Free Guarantee • Bengaluru Atelier
              </Typography>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};
