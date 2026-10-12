import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, Star, Quote } from 'lucide-react';
import type { Product } from '../types/product';
import { productService } from '../services/productService';
import { CATEGORIES } from '../data/products';
import { SAMPLE_ARTICLES } from '../data/articles';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProductCard } from '../components/products/ProductCard';
import { CategoryCard } from '../components/products/CategoryCard';
import { QuickViewModal } from '../components/products/QuickViewModal';
import { NewsletterSection } from '../components/forms/NewsletterSection';

export const Home: React.FC = () => {
  const [bestsellers, setBestsellers] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    productService.getBestsellers(4).then(setBestsellers);
    productService.getFeaturedProducts(4).then(setFeaturedProducts);
  }, []);

  const brandBenefits = [
    {
      icon: Award,
      title: 'Purity & Quality',
      description: 'Potent wild-crafted botanical extracts sustainably gathered and formulated without filler synthetics.'
    },
    {
      icon: Heart,
      title: 'Conscious Care',
      description: 'Dermatologically evaluated, hypoallergenic, and certified cruelty-free for sensitive Indian skin.'
    },
    {
      icon: Sparkles,
      title: 'Radiant Confidence',
      description: 'Designed to elevate your daily self-care ritual, unveiling natural luminosity from within.'
    },
    {
      icon: ShieldCheck,
      title: 'Everyday Beauty',
      description: 'Lightweight textures and high-performance hydration crafted for modern urban environments.'
    }
  ];

  const sampleTestimonials = [
    {
      quote: "The Rose Gold Radiance Serum is extraordinary. After long office days in Bengaluru's AC microclimate, my skin feels restored and naturally luminous.",
      author: 'Ananya Deshmukh',
      location: 'Bengaluru, Karnataka',
      rating: 5,
      productName: 'Rose Gold Radiance Serum'
    },
    {
      quote: "The Velvet Petal Lipstick feels weightless like a cloud. It didn't feather or dry out even during an 8-hour festive family dinner.",
      author: 'Rhea Swaminathan',
      location: 'Indiranagar, Bengaluru',
      rating: 5,
      productName: 'Velvet Petal Satin Matte Lipstick'
    },
    {
      quote: "The Mysore Sandalwood body nectar smells like pure royalty. Fast absorption with zero stickiness. Truly world-class quality.",
      author: 'Kavita Menon',
      location: 'Whitefield, Bengaluru',
      rating: 5,
      productName: 'Sandalwood & Cardamom Body Nectar'
    }
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* 1. Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '86vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--color-warm-ivory)',
          overflow: 'hidden',
          padding: 'var(--spacing-16) 0'
        }}
      >
        {/* Editorial Background Image with Smooth Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '56%',
            height: '100%',
            zIndex: 1
          }}
          className="hero-image-container"
        >
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85"
            alt="Luminous luxury beauty flat-lay and skincare ritual"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 35%'
            }}
          />
          {/* Subtle gradient feathering into background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #FFF9F2 0%, rgba(255, 249, 242, 0.4) 40%, rgba(255, 249, 242, 0) 100%)'
            }}
          />
        </div>

        <div className="site-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                backgroundColor: 'var(--color-soft-blush)',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                marginBottom: 'var(--spacing-4)',
                border: '1px solid rgba(197, 139, 131, 0.3)'
              }}
            >
              <Sparkles size={14} color="var(--color-rose-gold-dark)" />
              <Typography
                variant="eyebrow"
                style={{
                  margin: 0,
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em'
                }}
              >
                Bengaluru Botanical Atelier
              </Typography>
            </div>

            <Typography
              variant="display"
              style={{
                color: 'var(--color-deep-burgundy)',
                marginBottom: 'var(--spacing-4)',
                lineHeight: 1.08
              }}
            >
              Reveal Your Natural Glow
            </Typography>

            <Typography
              variant="body-lg"
              style={{
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-8)',
                maxWidth: '540px',
                lineHeight: 1.7
              }}
            >
              Immerse yourself in clean skincare formulations born at the intersection of classical Indian botany and modern cosmetic science. Crafted in small batches in Bengaluru for unparalleled freshness, purity, and luminous beauty.
            </Typography>

            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-4)',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
            >
              <Button
                variant="primary"
                size="lg"
                to="/shop"
                rightIcon={<ArrowRight size={18} />}
              >
                Explore Collection
              </Button>

              <Button
                variant="outline"
                size="lg"
                to="/about"
              >
                Discover Our Story
              </Button>
            </div>

            {/* Micro Highlights */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-6)',
                marginTop: 'var(--spacing-10)',
                paddingTop: 'var(--spacing-6)',
                borderTop: '1px solid var(--border-subtle)',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <Typography variant="h3" style={{ fontSize: '1.5rem', color: 'var(--color-deep-burgundy)', margin: 0 }}>
                  100%
                </Typography>
                <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
                  Botanical Actives
                </Typography>
              </div>

              <div>
                <Typography variant="h3" style={{ fontSize: '1.5rem', color: 'var(--color-deep-burgundy)', margin: 0 }}>
                  0%
                </Typography>
                <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
                  Harmful Toxins
                </Typography>
              </div>

              <div>
                <Typography variant="h3" style={{ fontSize: '1.5rem', color: 'var(--color-deep-burgundy)', margin: 0 }}>
                  Bengaluru
                </Typography>
                <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
                  Fresh Batch Atelier
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Formulations Carousel / Grid */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--spacing-10)', flexWrap: 'wrap', gap: 'var(--spacing-4)' }}>
            <div>
              <Typography variant="eyebrow">
                Signature Spotlight
              </Typography>
              <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)', margin: 0 }}>
                Featured Formulations
              </Typography>
            </div>
            <Button variant="outline-rose" to="/shop">
              Explore All <ArrowRight size={16} />
            </Button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 'var(--spacing-6)'
            }}
          >
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Shop By Category Section */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--spacing-12) auto' }}>
            <Typography variant="eyebrow">
              Curated Formulations
            </Typography>
            <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              Shop By Category
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)' }}>
              Targeted treatments designed to nurture, hydrate, and illuminate every step of your daily beauty routine.
            </Typography>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: 'var(--spacing-6)'
            }}
          >
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                name={cat.name}
                description={cat.description}
                image={cat.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Section */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-soft-blush)' }}>
        <div className="site-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-10)',
              flexWrap: 'wrap',
              gap: 'var(--spacing-4)'
            }}
          >
            <div>
              <Typography variant="eyebrow">
                Beloved Favorites
              </Typography>
              <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)', margin: 0 }}>
                Most-Cherished Bestsellers
              </Typography>
            </div>

            <Button variant="outline" to="/shop?sort=rating">
              View All Bestsellers <ArrowRight size={16} />
            </Button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 'var(--spacing-6)'
            }}
          >
            {bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Benefits / Pillars */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--spacing-12) auto' }}>
            <Typography variant="eyebrow">
              The Aura Botanica Standard
            </Typography>
            <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              Pure Ingredients. Tangible Glow.
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)' }}>
              Every bottle is a pledge to uncompromising quality, skin barrier kindness, and ethical beauty practices.
            </Typography>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--spacing-8)'
            }}
          >
            {brandBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Card
                  key={i}
                  variant="bordered"
                  padding="lg"
                  style={{
                    backgroundColor: 'var(--color-warm-ivory)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--spacing-3)'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-deep-burgundy)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <Icon size={26} color="var(--color-rose-gold)" />
                  </div>

                  <Typography variant="h3" style={{ fontSize: '1.35rem', color: 'var(--color-deep-burgundy)', margin: 0 }}>
                    {b.title}
                  </Typography>

                  <Typography variant="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {b.description}
                  </Typography>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Promotional Banner for New Arrivals */}
      <section
        style={{
          position: 'relative',
          padding: 'var(--spacing-16) 0',
          backgroundColor: 'var(--color-deep-burgundy)',
          color: 'var(--color-warm-ivory)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            opacity: 0.35,
            pointerEvents: 'none'
          }}
          className="promo-image-bg"
        >
          <img
            src="https://images.unsplash.com/photo-1608248597359-5f21e51381e4?auto=format&fit=crop&w=1200&q=80"
            alt="Botanical skincare extraction"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '620px' }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(197, 139, 131, 0.25)',
                color: 'var(--color-rose-gold-light)',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-4)'
              }}
            >
              New Arrival • Autumn Collection
            </span>

            <Typography
              variant="h1"
              style={{
                color: 'var(--color-warm-ivory)',
                marginBottom: 'var(--spacing-4)',
                fontSize: 'clamp(2rem, 3.8vw, 2.85rem)'
              }}
            >
              Sandalwood & Cardamom Nourishing Body Nectar
            </Typography>

            <Typography
              variant="body-lg"
              style={{
                color: 'var(--color-champagne-beige)',
                marginBottom: 'var(--spacing-8)',
                lineHeight: 1.7
              }}
            >
              Infused with sustainably wild-crafted Mysore sandalwood (Chandan) and warm cardamom notes. This silken dry body oil absorbs instantly, cloaking limbs in delicate velvet moisture.
            </Typography>

            <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="secondary"
                size="lg"
                to="/product/aura-005"
              >
                Experience the Nectar (₹1,950)
              </Button>
              <Button
                variant="outline-rose"
                size="lg"
                to="/shop"
                style={{ color: 'var(--color-warm-ivory)' }}
              >
                Browse All New Releases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials (Identified Sample Content) */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--spacing-12) auto' }}>
            <Typography variant="eyebrow">
              Voices of Devotion
            </Typography>
            <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              Praised by Skincare Purists
            </Typography>
            <Typography variant="body-sm" style={{ color: 'var(--text-muted)' }}>
              Sample customer experiences curated for client demonstration
            </Typography>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-8)'
            }}
          >
            {sampleTestimonials.map((t, idx) => (
              <Card
                key={idx}
                variant="bordered"
                padding="lg"
                style={{
                  backgroundColor: 'var(--color-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{ color: 'var(--color-rose-gold)', marginBottom: 'var(--spacing-3)' }}>
                  <Quote size={28} />
                </div>

                <div style={{ display: 'flex', gap: '2px', marginBottom: 'var(--spacing-3)' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="var(--color-rose-gold)" color="var(--color-rose-gold)" />
                  ))}
                </div>

                <Typography
                  variant="body"
                  style={{
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-6)',
                    flex: '1 1 auto'
                  }}
                >
                  "{t.quote}"
                </Typography>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--spacing-3)' }}>
                  <Typography variant="body" style={{ fontWeight: 600, color: 'var(--color-deep-burgundy)', margin: 0 }}>
                    {t.author}
                  </Typography>
                  <Typography variant="caption" style={{ color: 'var(--text-muted)', display: 'block' }}>
                    {t.location} • Verified Ritual User
                  </Typography>
                  <Typography variant="caption" style={{ color: 'var(--color-rose-gold-dark)', display: 'block', marginTop: '2px' }}>
                    Used: {t.productName}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Beauty Tips & Skincare Journal Preview */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="site-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 'var(--spacing-10)',
              flexWrap: 'wrap',
              gap: 'var(--spacing-4)'
            }}
          >
            <div>
              <Typography variant="eyebrow">
                The Skincare Journal
              </Typography>
              <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)', margin: 0 }}>
                Beauty Notes & Rituals
              </Typography>
            </div>

            <Button variant="outline" to="/journal">
              Read Entire Journal <ArrowRight size={16} />
            </Button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--spacing-8)'
            }}
          >
            {SAMPLE_ARTICLES.slice(0, 3).map((art) => (
              <Card
                key={art.id}
                variant="bordered"
                style={{
                  backgroundColor: 'var(--color-warm-ivory)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={art.image}
                    alt={art.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-normal)'
                    }}
                  />
                </div>
                <div style={{ padding: 'var(--spacing-6)', flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-2)' }}>
                    <Typography variant="caption" style={{ color: 'var(--color-rose-gold-dark)', fontWeight: 600 }}>
                      {art.category}
                    </Typography>
                    <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
                      {art.readTime}
                    </Typography>
                  </div>

                  <Typography
                    variant="h3"
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--color-deep-burgundy)',
                      marginBottom: 'var(--spacing-2)',
                      lineHeight: 1.3
                    }}
                  >
                    <Link to={`/journal#${art.slug}`} style={{ color: 'inherit' }}>
                      {art.title}
                    </Link>
                  </Typography>

                  <Typography
                    variant="body-sm"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 'var(--spacing-4)',
                      flex: '1 1 auto'
                    }}
                  >
                    {art.excerpt}
                  </Typography>

                  <Link
                    to={`/journal#${art.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 600,
                      color: 'var(--color-deep-burgundy)'
                    }}
                  >
                    Read Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Section */}
      <NewsletterSection />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />

      <style>{`
        @media (max-width: 900px) {
          .hero-image-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
