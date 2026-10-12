import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ContactForm } from '../components/forms/ContactForm';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { MapPin, Phone, Mail, MessageSquare, Clock, Building } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="contact-page animate-fade-in">
      <PageHeader
        eyebrow="Bengaluru Beauty Concierge"
        title="We Would Love to Hear from You"
        description="Whether you have questions about bespoke product formulations, shade matching, or wholesale collaborations, our atelier team is here to assist."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <div className="site-container" style={{ paddingTop: 'var(--spacing-10)', paddingBottom: 'var(--spacing-20)' }}>
        {/* Two-Column Responsive Layout: Left Details + Right Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 380px) 1fr',
            gap: 'var(--spacing-12)',
            alignItems: 'start'
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Bengaluru Contact Information & Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
            <Card variant="bordered" padding="lg" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
              <Typography variant="eyebrow">
                Atelier Location
              </Typography>
              <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-4)' }}>
                Bengaluru Flagship Studio
              </Typography>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'flex-start' }}>
                  <div style={{ padding: '8px', backgroundColor: 'var(--color-white)', borderRadius: '50%', color: 'var(--color-rose-gold)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <Typography variant="body" style={{ fontWeight: 600, color: 'var(--color-deep-burgundy)', margin: 0 }}>
                      Physical Address
                    </Typography>
                    <Typography variant="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Aura Botanica Atelier<br />
                      No. 42, 100 Feet Road, HAL 2nd Stage,<br />
                      Indiranagar, Bengaluru, Karnataka — 560038, India
                    </Typography>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'flex-start' }}>
                  <div style={{ padding: '8px', backgroundColor: 'var(--color-white)', borderRadius: '50%', color: 'var(--color-rose-gold)' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <Typography variant="body" style={{ fontWeight: 600, color: 'var(--color-deep-burgundy)', margin: 0 }}>
                      Telephone Concierge
                    </Typography>
                    <a
                      href="tel:+918023456789"
                      style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-deep-burgundy)', fontWeight: 500 }}
                    >
                      +91 (080) 2345-6789
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'flex-start' }}>
                  <div style={{ padding: '8px', backgroundColor: 'var(--color-white)', borderRadius: '50%', color: 'var(--color-rose-gold)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <Typography variant="body" style={{ fontWeight: 600, color: 'var(--color-deep-burgundy)', margin: 0 }}>
                      Email Correspondence
                    </Typography>
                    <a
                      href="mailto:concierge@aurabotanica.in"
                      style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-deep-burgundy)', fontWeight: 500 }}
                    >
                      concierge@aurabotanica.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'flex-start' }}>
                  <div style={{ padding: '8px', backgroundColor: 'var(--color-white)', borderRadius: '50%', color: 'var(--color-rose-gold)' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <Typography variant="body" style={{ fontWeight: 600, color: 'var(--color-deep-burgundy)', margin: 0 }}>
                      Consultation Hours
                    </Typography>
                    <Typography variant="body-sm" style={{ color: 'var(--text-secondary)' }}>
                      Monday to Saturday<br />
                      10:00 AM – 7:00 PM IST
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>

            {/* Direct Connect Buttons: WhatsApp, Call, Email */}
            <Card variant="bordered" padding="md" style={{ backgroundColor: 'var(--color-white)' }}>
              <Typography variant="h4" style={{ fontSize: '1.05rem', color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
                Instant Concierge Channels
              </Typography>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                <Button
                  variant="outline-rose"
                  fullWidth
                  to="https://wa.me/918023456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ justifyContent: 'flex-start', paddingLeft: 'var(--spacing-4)' }}
                >
                  <MessageSquare size={16} color="#25D366" />
                  <span>Chat on WhatsApp (+91 80234 56789)</span>
                </Button>

                <Button
                  variant="outline"
                  fullWidth
                  to="tel:+918023456789"
                  style={{ justifyContent: 'flex-start', paddingLeft: 'var(--spacing-4)' }}
                >
                  <Phone size={16} />
                  <span>Call Atelier Support</span>
                </Button>

                <Button
                  variant="ghost"
                  fullWidth
                  to="mailto:concierge@aurabotanica.in"
                  style={{ justifyContent: 'flex-start', paddingLeft: 'var(--spacing-4)' }}
                >
                  <Mail size={16} />
                  <span>Direct Email Dispatch</span>
                </Button>
              </div>
            </Card>

            {/* Interactive Map Visual Placeholder */}
            <Card variant="bordered" style={{ overflow: 'hidden', backgroundColor: 'var(--color-white)' }}>
              <div
                style={{
                  height: '220px',
                  backgroundColor: 'var(--color-warm-ivory)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--spacing-4)',
                  textAlign: 'center',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {/* Stylized geometric grid representing Bengaluru Map Location */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.12,
                    backgroundImage: 'radial-gradient(var(--color-deep-burgundy) 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                />

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-deep-burgundy)',
                    color: 'var(--color-warm-ivory)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--spacing-2)',
                    boxShadow: 'var(--shadow-md)',
                    zIndex: 2
                  }}
                >
                  <Building size={22} color="var(--color-rose-gold-light)" />
                </div>

                <Typography variant="body" style={{ fontWeight: 700, color: 'var(--color-deep-burgundy)', zIndex: 2, margin: 0 }}>
                  Aura Botanica Atelier Studio
                </Typography>
                <Typography variant="caption" style={{ color: 'var(--text-muted)', zIndex: 2 }}>
                  Indiranagar, Bengaluru (Interactive Map Placeholder)
                </Typography>
              </div>
              <div style={{ padding: 'var(--spacing-3) var(--spacing-4)', backgroundColor: 'var(--color-white)' }}>
                <Typography variant="caption" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  * Configurable map frame ready for Google Maps Embed API integration once exact client coordinates are finalized.
                </Typography>
              </div>
            </Card>
          </div>

          {/* Right Column: The ONE Dedicated Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
