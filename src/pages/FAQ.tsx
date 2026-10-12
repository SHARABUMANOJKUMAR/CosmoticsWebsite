import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { SAMPLE_FAQS } from '../data/faqs';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { MessageCircle, Mail } from 'lucide-react';

export const FAQ: React.FC = () => {
  return (
    <div className="faq-page animate-fade-in">
      <PageHeader
        eyebrow="Help & Knowledge Base"
        title="Frequently Asked Questions"
        description="Clear answers regarding our botanical formulations, ordering from Bengaluru, and personalized skincare protocols."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'FAQ' }
        ]}
      />

      <div className="site-container" style={{ paddingTop: 'var(--spacing-10)', paddingBottom: 'var(--spacing-20)' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <FAQAccordion items={SAMPLE_FAQS} showCategoryTabs={true} />

          {/* Still Need Assistance Banner */}
          <div
            style={{
              marginTop: 'var(--spacing-16)',
              backgroundColor: 'var(--color-warm-ivory)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-8)',
              border: '1px solid var(--border-medium)',
              textAlign: 'center'
            }}
          >
            <Typography variant="eyebrow">
              Direct Concierge Support
            </Typography>
            <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-2)' }}>
              Still have a question about your skin ritual?
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto var(--spacing-6) auto' }}>
              Our Bengaluru beauty specialists are delighted to offer bespoke consultations regarding skin suitability, routines, and custom gifting.
            </Typography>

            <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" to="/contact">
                <Mail size={16} /> Contact Us
              </Button>
              <Button
                variant="outline-rose"
                to="https://wa.me/918023456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} color="#25D366" /> Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
