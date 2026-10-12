import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SAMPLE_ARTICLES } from '../data/articles';
import type { JournalArticle } from '../types/journal';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { Clock, Calendar, ArrowRight, Sparkles, User } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';

export const Journal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const categories = ['All', 'Skincare Routine', 'Ingredient Spotlight', 'Beauty Ritual', 'Seasonal Care'];

  const filteredArticles = selectedCategory === 'All'
    ? SAMPLE_ARTICLES
    : SAMPLE_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="journal-page animate-fade-in">
      <PageHeader
        eyebrow="The Skincare & Beauty Journal"
        title="Notes on Rituals, Botanicals & Skin Health"
        description="Thoughtful editorial guides, ingredient deep-dives, and seasonal self-care protocols curated by our beauty specialists."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Journal' }
        ]}
      />

      <div className="site-container" style={{ paddingTop: 'var(--spacing-10)', paddingBottom: 'var(--spacing-20)' }}>
        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-2)',
            flexWrap: 'wrap',
            marginBottom: 'var(--spacing-12)'
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  backgroundColor: isSelected ? 'var(--color-deep-burgundy)' : 'var(--color-white)',
                  color: isSelected ? 'var(--color-warm-ivory)' : 'var(--color-deep-burgundy)',
                  border: isSelected ? '1px solid var(--color-deep-burgundy)' : '1px solid var(--border-medium)',
                  boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--spacing-8)'
          }}
        >
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-white)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
              }}
              className="article-card"
            >
              {/* Cover Image */}
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-smooth)'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: 'var(--spacing-3)',
                    left: 'var(--spacing-3)',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(4px)',
                    color: 'var(--color-deep-burgundy)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  {article.category}
                </span>
              </div>

              {/* Card Meta & Body */}
              <div style={{ padding: 'var(--spacing-6)', flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)', color: 'var(--text-muted)', fontSize: 'var(--font-size-xs)', marginBottom: 'var(--spacing-3)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} /> {article.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {article.readTime}
                  </span>
                </div>

                <Typography
                  variant="h3"
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--color-deep-burgundy)',
                    lineHeight: 1.25,
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  {article.title}
                </Typography>

                <Typography
                  variant="body-sm"
                  style={{
                    color: 'var(--color-rose-gold-dark)',
                    fontStyle: 'italic',
                    marginBottom: 'var(--spacing-3)'
                  }}
                >
                  {article.subtitle}
                </Typography>

                <Typography
                  variant="body"
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-6)',
                    flex: '1 1 auto'
                  }}
                >
                  {article.excerpt}
                </Typography>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--spacing-4)' }}>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                    By {article.author}
                  </span>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveArticle(article)}
                    style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600, padding: 0 }}
                  >
                    Read Guide <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <Modal
        isOpen={Boolean(activeArticle)}
        onClose={() => setActiveArticle(null)}
        maxWidth="840px"
      >
        {activeArticle && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center', flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: 'var(--color-soft-blush)',
                  color: 'var(--color-deep-burgundy)',
                  padding: '3px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600
                }}
              >
                {activeArticle.category}
              </span>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                {activeArticle.date} • {activeArticle.readTime}
              </span>
            </div>

            <Typography variant="h2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', color: 'var(--color-deep-burgundy)', lineHeight: 1.2 }}>
              {activeArticle.title}
            </Typography>

            <Typography variant="body" style={{ color: 'var(--color-rose-gold-dark)', fontStyle: 'italic', fontSize: '1.1rem' }}>
              {activeArticle.subtitle}
            </Typography>

            {/* Author Credit */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
              <User size={15} />
              <span>Written by <strong>{activeArticle.author}</strong></span>
            </div>

            {/* Hero Image */}
            <div style={{ width: '100%', height: '340px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: 'var(--spacing-2) 0' }}>
              <img src={activeArticle.image} alt={activeArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Full Body Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-2)' }}>
              {activeArticle.content.map((p, idx) => (
                <Typography key={idx} variant="body-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {p}
                </Typography>
              ))}
            </div>

            {/* Practical Takeaway Tips */}
            {activeArticle.tips && activeArticle.tips.length > 0 && (
              <div
                style={{
                  backgroundColor: 'var(--color-warm-ivory)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-6)',
                  margin: 'var(--spacing-4) 0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-3)' }}>
                  <Sparkles size={18} color="var(--color-rose-gold)" />
                  <Typography variant="h4" style={{ margin: 0, fontSize: '1.15rem', color: 'var(--color-deep-burgundy)' }}>
                    Atelier Takeaway Tips
                  </Typography>
                </div>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  {activeArticle.tips.map((tip, i) => (
                    <li key={i} style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6 }}>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Paired Formulations */}
            {activeArticle.recommendedProductIds && activeArticle.recommendedProductIds.length > 0 && (
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--spacing-6)', marginTop: 'var(--spacing-4)' }}>
                <Typography variant="h4" style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-3)', color: 'var(--color-deep-burgundy)' }}>
                  Formulations Mentioned in this Guide
                </Typography>
                <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
                  {activeArticle.recommendedProductIds.map((pId) => {
                    const prod = SAMPLE_PRODUCTS.find((p) => p.id === pId);
                    if (!prod) return null;
                    return (
                      <Link
                        key={prod.id}
                        to={`/product/${prod.id}`}
                        onClick={() => setActiveArticle(null)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-3)',
                          backgroundColor: 'var(--color-white)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: 'var(--spacing-2) var(--spacing-3)',
                          boxShadow: 'var(--shadow-sm)'
                        }}
                      >
                        <img src={prod.image} alt={prod.name} style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-xs)', objectFit: 'cover' }} />
                        <div>
                          <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-deep-burgundy)', display: 'block' }}>
                            {prod.name}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-rose-gold)' }}>
                            ₹{prod.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            <div style={{ textAlign: 'right', marginTop: 'var(--spacing-4)' }}>
              <Button variant="primary" onClick={() => setActiveArticle(null)}>
                Close Guide
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
