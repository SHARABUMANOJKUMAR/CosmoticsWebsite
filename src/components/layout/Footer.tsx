import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck, Sparkles, HeartHandshake, Leaf } from 'lucide-react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-deep-burgundy)',
        color: 'var(--color-warm-ivory)',
        paddingTop: 'var(--spacing-16)',
        paddingBottom: 'var(--spacing-8)',
        borderTop: '1px solid var(--border-subtle)',
        marginTop: 'auto'
      }}
    >
      <div className="site-container">
        {/* Value Proposition Highlights Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--spacing-6)',
            paddingBottom: 'var(--spacing-12)',
            borderBottom: '1px solid rgba(233, 215, 197, 0.15)',
            marginBottom: 'var(--spacing-12)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
            <div style={{ padding: '10px', backgroundColor: 'rgba(197, 139, 131, 0.2)', borderRadius: '50%' }}>
              <Leaf size={22} color="var(--color-rose-gold-light)" />
            </div>
            <div>
              <Typography variant="body" style={{ color: 'var(--color-warm-ivory)', fontWeight: 600, margin: 0 }}>
                100% Botanical Formulations
              </Typography>
              <Typography variant="body-sm" style={{ color: 'var(--color-champagne-beige)', margin: 0 }}>
                Clean, certified non-toxic extracts
              </Typography>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
            <div style={{ padding: '10px', backgroundColor: 'rgba(197, 139, 131, 0.2)', borderRadius: '50%' }}>
              <ShieldCheck size={22} color="var(--color-rose-gold-light)" />
            </div>
            <div>
              <Typography variant="body" style={{ color: 'var(--color-warm-ivory)', fontWeight: 600, margin: 0 }}>
                Dermatologically Tested
              </Typography>
              <Typography variant="body-sm" style={{ color: 'var(--color-champagne-beige)', margin: 0 }}>
                Clinical safety for sensitive skin
              </Typography>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
            <div style={{ padding: '10px', backgroundColor: 'rgba(197, 139, 131, 0.2)', borderRadius: '50%' }}>
              <HeartHandshake size={22} color="var(--color-rose-gold-light)" />
            </div>
            <div>
              <Typography variant="body" style={{ color: 'var(--color-warm-ivory)', fontWeight: 600, margin: 0 }}>
                Cruelty-Free Always
              </Typography>
              <Typography variant="body-sm" style={{ color: 'var(--color-champagne-beige)', margin: 0 }}>
                Ethical lab testing & zero animal cruelty
              </Typography>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
            <div style={{ padding: '10px', backgroundColor: 'rgba(197, 139, 131, 0.2)', borderRadius: '50%' }}>
              <Sparkles size={22} color="var(--color-rose-gold-light)" />
            </div>
            <div>
              <Typography variant="body" style={{ color: 'var(--color-warm-ivory)', fontWeight: 600, margin: 0 }}>
                Bengaluru Atelier Crafted
              </Typography>
              <Typography variant="body-sm" style={{ color: 'var(--color-champagne-beige)', margin: 0 }}>
                Small batches for optimal potency
              </Typography>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--spacing-10)',
            marginBottom: 'var(--spacing-12)'
          }}
        >
          {/* Column 1: Brand Atelier Overview */}
          <div>
            <Typography
              variant="h3"
              style={{
                color: 'var(--color-warm-ivory)',
                letterSpacing: '0.12em',
                marginBottom: 'var(--spacing-2)'
              }}
            >
              AURA BOTANICA
            </Typography>
            <Typography
              variant="caption"
              style={{
                color: 'var(--color-rose-gold-light)',
                letterSpacing: '0.2em',
                display: 'block',
                marginBottom: 'var(--spacing-4)'
              }}
            >
              BENGALURU • BOTANICAL LUXURY
            </Typography>
            <Typography
              variant="body-sm"
              style={{
                color: 'var(--color-champagne-beige)',
                lineHeight: 1.7,
                marginBottom: 'var(--spacing-6)'
              }}
            >
              Consciously curated skincare, opulent face nectars, and pure cosmetic formulations born at the intersection of classical Indian botany and modern cosmetic chemistry.
            </Typography>

            {/* Quick Action Badges */}
            <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
              <Button
                variant="outline-rose"
                size="sm"
                to="https://wa.me/918023456789"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--color-warm-ivory)',
                  borderColor: 'rgba(197, 139, 131, 0.4)',
                  fontSize: '0.8rem'
                }}
              >
                <MessageSquare size={14} color="#25D366" /> WhatsApp Concierge
              </Button>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div>
            <Typography
              variant="h4"
              style={{
                color: 'var(--color-warm-ivory)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                marginBottom: 'var(--spacing-4)'
              }}
            >
              Shop Collections
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <li>
                <Link to="/shop?category=Skincare" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Skincare Serums & Elixirs
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Makeup" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Celestial Makeup & Illuminators
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Lip Care" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Lip Conditioning & Velvet Lipsticks
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Face Care" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Face Care & Hydrosol Mists
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Body Care" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Mysore Sandalwood Body Nectars
                </Link>
              </li>
              <li>
                <Link to="/shop" style={{ color: 'var(--color-rose-gold-light)', fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand & Editorial */}
          <div>
            <Typography
              variant="h4"
              style={{
                color: 'var(--color-warm-ivory)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                marginBottom: 'var(--spacing-4)'
              }}
            >
              The Brand
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <li>
                <Link to="/about" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Our Story & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/journal" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Skincare & Beauty Journal
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Contact Our Concierge
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  Privacy & Data Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Bengaluru Atelier & Contact */}
          <div>
            <Typography
              variant="h4"
              style={{
                color: 'var(--color-warm-ivory)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                marginBottom: 'var(--spacing-4)'
              }}
            >
              Bengaluru Atelier
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-2)' }}>
                <MapPin size={18} color="var(--color-rose-gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <Typography variant="body-sm" style={{ color: 'var(--color-champagne-beige)', margin: 0 }}>
                  Aura Botanica Studio, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038, India
                </Typography>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                <Phone size={18} color="var(--color-rose-gold-light)" style={{ flexShrink: 0 }} />
                <a href="tel:+918023456789" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  +91 (080) 2345-6789
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                <Mail size={18} color="var(--color-rose-gold-light)" style={{ flexShrink: 0 }} />
                <a href="mailto:concierge@aurabotanica.in" style={{ color: 'var(--color-champagne-beige)', fontSize: 'var(--font-size-sm)' }}>
                  concierge@aurabotanica.in
                </a>
              </div>

              <Typography variant="caption" style={{ color: 'rgba(233, 215, 197, 0.7)', marginTop: 'var(--spacing-2)' }}>
                Concierge Hours: Mon – Sat, 10:00 AM – 7:00 PM IST
              </Typography>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div
          style={{
            paddingTop: 'var(--spacing-8)',
            borderTop: '1px solid rgba(233, 215, 197, 0.12)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--spacing-4)'
          }}
        >
          <Typography variant="caption" style={{ color: 'rgba(233, 215, 197, 0.65)' }}>
            © {new Date().getFullYear()} Aura Botanica Cosmetics Atelier Pvt. Ltd. Bengaluru, Karnataka. All rights reserved.
          </Typography>

          <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(233, 215, 197, 0.65)', fontSize: 'var(--font-size-xs)' }}>
              Privacy Policy
            </Link>
            <Link to="/faq" style={{ color: 'rgba(233, 215, 197, 0.65)', fontSize: 'var(--font-size-xs)' }}>
              Terms of Service (Demo)
            </Link>
            <span style={{ color: 'var(--color-rose-gold-light)', fontSize: 'var(--font-size-xs)' }}>
              Client Demo Preview
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
