import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { Sparkles, ArrowRight } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div
      className="not-found-page animate-fade-in"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--spacing-16) var(--spacing-6)',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div style={{ maxWidth: '580px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            backgroundColor: 'var(--color-soft-blush)',
            padding: '4px 14px',
            borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--spacing-4)'
          }}
        >
          <Sparkles size={14} color="var(--color-rose-gold)" />
          <Typography variant="caption" style={{ fontWeight: 700, margin: 0 }}>
            Error 404 • Page Not Found
          </Typography>
        </div>

        <Typography
          variant="display"
          style={{
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            color: 'var(--color-deep-burgundy)',
            marginBottom: 'var(--spacing-2)',
            lineHeight: 1.1
          }}
        >
          An Elusive Path
        </Typography>

        <Typography
          variant="body-lg"
          style={{
            color: 'var(--text-secondary)',
            marginBottom: 'var(--spacing-8)',
            lineHeight: 1.6
          }}
        >
          The page or formulation you are seeking might have been moved, renamed, or is temporarily undergoing reformulation at our atelier.
        </Typography>

        <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" to="/">
            Return to Homepage
          </Button>
          <Button variant="outline" size="lg" to="/shop">
            Explore Shop <ArrowRight size={16} />
          </Button>
        </div>

        <div style={{ marginTop: 'var(--spacing-10)', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--spacing-6)' }}>
          <Typography variant="caption" style={{ color: 'var(--text-muted)', display: 'block', marginBottom: 'var(--spacing-2)' }}>
            Popular Destinations
          </Typography>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop?category=Skincare" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-deep-burgundy)', textDecoration: 'underline' }}>
              Skincare Serums
            </Link>
            <Link to="/journal" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-deep-burgundy)', textDecoration: 'underline' }}>
              Beauty Journal
            </Link>
            <Link to="/about" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-deep-burgundy)', textDecoration: 'underline' }}>
              Our Story
            </Link>
            <Link to="/contact" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-deep-burgundy)', textDecoration: 'underline' }}>
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
