import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Product } from '../types/product';
import { productService } from '../services/productService';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { QuantitySelector } from '../components/products/QuantitySelector';
import { ProductGrid } from '../components/products/ProductGrid';
import { LoadingState } from '../components/common/LoadingState';
import { EmptyState } from '../components/common/EmptyState';
import { QuickViewModal } from '../components/products/QuickViewModal';
import {
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Check,
  ChevronRight,
  Leaf
} from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'howToUse'>('benefits');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    productService.getProductById(id).then((found) => {
      setProduct(found);
      if (found) {
        setSelectedImage(found.image);
        productService.getRelatedProducts(found.id, found.category).then(setRelatedProducts);
      }
      setIsLoading(false);
      window.scrollTo(0, 0);
    });
  }, [id]);

  if (isLoading) {
    return <LoadingState message="Loading botanical formulation profile..." fullPage />;
  }

  if (!product) {
    return (
      <div className="site-container" style={{ padding: 'var(--spacing-20) var(--spacing-6)' }}>
        <EmptyState
          title="Product Not Found"
          description="The formulation you are searching for may have been archived or is temporarily out of stock."
          actionText="Return to Catalogue"
          actionTo="/shop"
        />
      </div>
    );
  }

  const isFavorite = isInWishlist(product.id);
  const gallery = [product.image, ...(product.additionalImages || [])];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 900);
  };

  return (
    <div className="product-details-page animate-fade-in" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: 'var(--color-warm-ivory)', borderBottom: '1px solid var(--border-subtle)', padding: 'var(--spacing-4) 0' }}>
        <div className="site-container">
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <ChevronRight size={12} color="var(--color-rose-gold)" />
            <Link to="/shop" style={{ color: 'var(--text-muted)' }}>Shop</Link>
            <ChevronRight size={12} color="var(--color-rose-gold)" />
            <Link to={`/shop?category=${encodeURIComponent(product.category)}`} style={{ color: 'var(--text-muted)' }}>
              {product.category}
            </Link>
            <ChevronRight size={12} color="var(--color-rose-gold)" />
            <span style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="site-container" style={{ paddingTop: 'var(--spacing-10)', paddingBottom: 'var(--spacing-20)' }}>
        {/* Main Product Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 'var(--spacing-12)',
            alignItems: 'start',
            marginBottom: 'var(--spacing-16)'
          }}
        >
          {/* Left: Image Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-white)',
                boxShadow: 'var(--shadow-md)',
                aspectRatio: '1/1',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <img
                src={selectedImage}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{ position: 'absolute', top: 'var(--spacing-4)', left: 'var(--spacing-4)', display: 'flex', gap: '6px' }}>
                {product.isBestseller && <Badge variant="bestseller">Bestseller</Badge>}
                {product.isNewArrival && <Badge variant="new">New</Badge>}
                {product.isOrganic && <Badge variant="organic">100% Botanical</Badge>}
              </div>

              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                aria-label={isFavorite ? 'Remove from wishlist' : 'Save to wishlist'}
                style={{
                  position: 'absolute',
                  top: 'var(--spacing-4)',
                  right: 'var(--spacing-4)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <Heart
                  size={20}
                  color="var(--color-deep-burgundy)"
                  fill={isFavorite ? 'var(--color-rose-gold)' : 'none'}
                />
              </button>
            </div>

            {/* Thumbnails Picker */}
            {gallery.length > 1 && (
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      border: selectedImage === img ? '2px solid var(--color-rose-gold)' : '1px solid var(--border-medium)',
                      padding: 0,
                      backgroundColor: 'var(--color-white)',
                      transition: 'border-color var(--transition-fast)'
                    }}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Buy Box & Product Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-2)' }}>
                <Typography variant="eyebrow" style={{ margin: 0 }}>
                  {product.category} • {product.sizeVolume}
                </Typography>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} fill="var(--color-rose-gold)" color="var(--color-rose-gold)" />
                  <Typography variant="caption" style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                    {product.rating}
                  </Typography>
                  <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
                    ({product.reviewCount} verified reviews)
                  </Typography>
                </div>
              </div>

              <Typography variant="h1" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', lineHeight: 1.15, color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-2)' }}>
                {product.name}
              </Typography>

              <Typography variant="body" style={{ color: 'var(--color-rose-gold-dark)', fontStyle: 'italic', marginBottom: 'var(--spacing-4)' }}>
                {product.tagline}
              </Typography>
            </div>

            {/* Pricing Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 'var(--spacing-3)',
                padding: 'var(--spacing-3) 0',
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-deep-burgundy)' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                Inclusive of all GST. Free delivery in India on orders &gt; ₹1,499.
              </span>
            </div>

            <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {product.fullDescription}
            </Typography>

            {/* Suitability Badge */}
            <div style={{ backgroundColor: 'var(--color-soft-blush)', padding: 'var(--spacing-3) var(--spacing-4)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Sparkles size={16} color="var(--color-rose-gold-dark)" />
              <Typography variant="body-sm" style={{ color: 'var(--color-deep-burgundy)', margin: 0 }}>
                <strong>Skin Suitability:</strong> {product.suitability}
              </Typography>
            </div>

            {/* Quantity and Add to Cart Section */}
            <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', marginTop: 'var(--spacing-2)' }}>
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                onIncrease={() => setQuantity((q) => q + 1)}
              />

              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                disabled={isAdded || !product.inStock}
                style={{ flex: 1 }}
              >
                {isAdded ? (
                  <>
                    <Check size={20} /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} /> Add to Cart — ₹{(product.price * quantity).toLocaleString('en-IN')}
                  </>
                )}
              </Button>
            </div>

            {/* Atelier Guarantees */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--spacing-2)',
                paddingTop: 'var(--spacing-6)',
                borderTop: '1px solid var(--border-subtle)',
                marginTop: 'var(--spacing-4)'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <Truck size={20} color="var(--color-rose-gold)" style={{ margin: '0 auto 4px auto' }} />
                <Typography variant="caption" style={{ fontWeight: 600, display: 'block' }}>
                  Bengaluru Dispatched
                </Typography>
                <Typography variant="caption" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                  1-2 day city express
                </Typography>
              </div>

              <div style={{ textAlign: 'center' }}>
                <ShieldCheck size={20} color="var(--color-rose-gold)" style={{ margin: '0 auto 4px auto' }} />
                <Typography variant="caption" style={{ fontWeight: 600, display: 'block' }}>
                  Dermatologist Approved
                </Typography>
                <Typography variant="caption" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                  Sensitive skin safe
                </Typography>
              </div>

              <div style={{ textAlign: 'center' }}>
                <RotateCcw size={20} color="var(--color-rose-gold)" style={{ margin: '0 auto 4px auto' }} />
                <Typography variant="caption" style={{ fontWeight: 600, display: 'block' }}>
                  Hassle-Free Care
                </Typography>
                <Typography variant="caption" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                  14-day exchange
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Benefits, Ingredients, How to Use */}
        <div style={{ marginTop: 'var(--spacing-12)', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-8)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--spacing-4)', marginBottom: 'var(--spacing-6)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('benefits')}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: activeTab === 'benefits' ? 700 : 500,
                color: activeTab === 'benefits' ? 'var(--color-deep-burgundy)' : 'var(--text-muted)',
                borderBottom: activeTab === 'benefits' ? '2px solid var(--color-rose-gold)' : '2px solid transparent',
                paddingBottom: '8px',
                transition: 'all var(--transition-fast)'
              }}
            >
              Key Benefits & Efficacy
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ingredients')}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: activeTab === 'ingredients' ? 700 : 500,
                color: activeTab === 'ingredients' ? 'var(--color-deep-burgundy)' : 'var(--text-muted)',
                borderBottom: activeTab === 'ingredients' ? '2px solid var(--color-rose-gold)' : '2px solid transparent',
                paddingBottom: '8px',
                transition: 'all var(--transition-fast)'
              }}
            >
              Botanical Ingredients
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('howToUse')}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: activeTab === 'howToUse' ? 700 : 500,
                color: activeTab === 'howToUse' ? 'var(--color-deep-burgundy)' : 'var(--text-muted)',
                borderBottom: activeTab === 'howToUse' ? '2px solid var(--color-rose-gold)' : '2px solid transparent',
                paddingBottom: '8px',
                transition: 'all var(--transition-fast)'
              }}
            >
              How to Incorporate into Ritual
            </button>
          </div>

          {activeTab === 'benefits' && (
            <div className="animate-fade-in">
              <Typography variant="body" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-4)' }}>
                Clinically and traditionally recognized benefits observed with consistent application:
              </Typography>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                {product.keyBenefits.map((benefit, i) => (
                  <li key={i} style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-base)', lineHeight: 1.6 }}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="animate-fade-in">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-3)' }}>
                <Leaf size={18} color="var(--color-rose-gold)" />
                <Typography variant="body" style={{ fontWeight: 600, color: 'var(--color-deep-burgundy)', margin: 0 }}>
                  Consciously Disclosed Full INCI Formulation List:
                </Typography>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-4)' }}>
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: 'var(--color-warm-ivory)',
                      border: '1px solid var(--border-medium)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-deep-burgundy)'
                    }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
              <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
                Formulated without parabens, synthetic sulfates (SLS/SLES), phthalates, mineral oils, or synthetic petrochemical dyes.
              </Typography>
            </div>
          )}

          {activeTab === 'howToUse' && (
            <div className="animate-fade-in">
              <Typography variant="body" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-4)' }}>
                Follow this simple step-by-step beauty protocol to optimize dermal absorption:
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                {product.howToUse.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-deep-burgundy)',
                        color: 'var(--color-warm-ivory)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        flexShrink: 0
                      }}
                    >
                      {i + 1}
                    </div>
                    <Typography variant="body" style={{ color: 'var(--text-primary)', lineHeight: 1.6, margin: 0 }}>
                      {step}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: 'var(--spacing-16)' }}>
            <div style={{ marginBottom: 'var(--spacing-8)' }}>
              <Typography variant="eyebrow">
                Harmonious Pairings
              </Typography>
              <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)' }}>
                Complete Your Ritual
              </Typography>
            </div>

            <ProductGrid
              products={relatedProducts}
              onQuickView={setQuickViewProduct}
              columns={4}
            />
          </div>
        )}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
