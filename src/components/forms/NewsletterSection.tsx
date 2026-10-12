import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle } from 'lucide-react';
import { newsletterService, type NewsletterResult } from '../../services/newsletterService';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<NewsletterResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await newsletterService.subscribe(email);
    setIsSubmitting(false);
    setResult(res);
    if (res.success) {
      setEmail('');
    }
  };

  return (
    <section
      aria-label="Newsletter & Beauty Circle"
      style={{
        backgroundColor: 'var(--color-soft-blush)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--spacing-16) 0'
      }}
    >
      {/* Decorative background glow circles */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          backgroundColor: 'rgba(197, 139, 131, 0.18)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          backgroundColor: 'rgba(233, 215, 197, 0.35)',
          pointerEvents: 'none'
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-10) var(--spacing-8)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(197, 139, 131, 0.25)'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-1)',
              backgroundColor: 'var(--color-soft-blush)',
              color: 'var(--color-deep-burgundy)',
              padding: '4px 14px',
              borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--spacing-3)'
            }}
          >
            <Sparkles size={14} color="var(--color-rose-gold)" />
            <Typography variant="caption" style={{ fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>
              The Botanical Circle
            </Typography>
          </div>

          <Typography
            variant="h2"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.35rem)',
              color: 'var(--color-deep-burgundy)',
              marginBottom: 'var(--spacing-3)'
            }}
          >
            Unlock 10% Off Your First Ritual
          </Typography>

          <Typography
            variant="body"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--spacing-6)',
              lineHeight: 1.6
            }}
          >
            Join our private circle of beauty connoisseurs. Receive seasonal ingredient dispatches, early access to small-batch launches, and bespoke skincare routines from Bengaluru.
          </Typography>

          {result && result.success ? (
            <div
              style={{
                backgroundColor: '#F3F9F4',
                border: '1px solid #7EC89B',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-4)',
                textAlign: 'center',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#1B6A3B', fontWeight: 600 }}>
                <CheckCircle size={20} />
                <span>{result.message}</span>
              </div>
              <Typography variant="caption" style={{ color: '#2C5E3B', display: 'block', marginTop: '6px' }}>
                Use privilege promo code <strong>GLOW10</strong> during simulated checkout.
              </Typography>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 'var(--spacing-2)',
                  maxWidth: '500px',
                  margin: '0 auto',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: '1 1 240px', position: 'relative' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    aria-label="Email address for newsletter"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem 0.85rem 2.6rem',
                      borderRadius: 'var(--radius-full)',
                      border: result && !result.success ? '1px solid #C0392B' : '1px solid var(--border-medium)',
                      backgroundColor: 'var(--color-warm-ivory)',
                      color: 'var(--color-deep-burgundy)',
                      fontSize: 'var(--font-size-sm)'
                    }}
                  />
                  <Mail
                    size={16}
                    color="var(--color-rose-gold)"
                    style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  style={{ flexShrink: 0 }}
                >
                  Join Circle
                </Button>
              </div>

              {result && !result.success && (
                <Typography variant="caption" style={{ color: '#C0392B', display: 'block', marginTop: '8px' }}>
                  {result.message}
                </Typography>
              )}
            </form>
          )}

          <Typography
            variant="caption"
            style={{
              color: 'var(--text-muted)',
              display: 'block',
              marginTop: 'var(--spacing-4)',
              fontSize: '0.72rem'
            }}
          >
            No spam. We respect your sanctity. Unsubscribe whenever you wish. Demonstration mode.
          </Typography>
        </div>
      </div>
    </section>
  );
};
