import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { AlertTriangle } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-page animate-fade-in">
      <PageHeader
        eyebrow="Legal & Governance"
        title="Privacy & Data Notice"
        description="Our commitment to safeguarding your personal information, transparency in data collection, and local browser storage practices."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Privacy Policy' }
        ]}
      />

      <div className="site-container" style={{ paddingTop: 'var(--spacing-10)', paddingBottom: 'var(--spacing-20)' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          {/* Important Client Notice Banner */}
          <div
            style={{
              backgroundColor: 'var(--color-warm-ivory)',
              border: '1px solid var(--color-rose-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-5) var(--spacing-6)',
              display: 'flex',
              gap: 'var(--spacing-4)',
              alignItems: 'flex-start'
            }}
          >
            <AlertTriangle size={24} color="var(--color-rose-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <Typography variant="body" style={{ fontWeight: 700, color: 'var(--color-deep-burgundy)', margin: 0 }}>
                Client Customization Notice
              </Typography>
              <Typography variant="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '4px' }}>
                This privacy document serves as a structured baseline for the client's digital presentation in Bengaluru, Karnataka. Sections marked with brackets require review by the client’s legal counsel prior to formal commercial deployment under the Digital Personal Data Protection Act (DPDPA), 2023.
              </Typography>
            </div>
          </div>

          {/* Section 1: Introduction */}
          <Card variant="bordered" padding="lg" style={{ backgroundColor: 'var(--color-white)' }}>
            <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              1. Introduction & Atelier Scope
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--spacing-3)' }}>
              Aura Botanica Cosmetics Atelier ("we," "our," or "us"), based in Indiranagar, Bengaluru, Karnataka, India, respects the privacy of our website visitors and clients. This Privacy Policy details how information is handled when you browse our digital storefront, interact with product catalogs, or submit inquiries through our online concierge.
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              By accessing this website, you acknowledge the terms outlined herein. If you have any inquiries regarding data practices, you may contact our Bengaluru atelier directly at <a href="mailto:privacy@aurabotanica.in" style={{ color: 'var(--color-rose-gold-dark)', textDecoration: 'underline' }}>privacy@aurabotanica.in</a>.
            </Typography>
          </Card>

          {/* Section 2: Data Collection & Frontend Limitations */}
          <Card variant="bordered" padding="lg" style={{ backgroundColor: 'var(--color-white)' }}>
            <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              2. Information We Process & Demonstration Scope
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--spacing-3)' }}>
              <strong>Frontend-Only Demonstration Architecture:</strong> In its current preview iteration, this website functions exclusively on the client-side without permanent database persistence or external tracking pixels.
            </Typography>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6 }}>
              <li>
                <strong>Contact Form Data:</strong> When submitting the concierge inquiry form (full name, email, phone number, subject, and message), data is processed locally in temporary browser memory to simulate request submission and validate format criteria. No personal data is transmitted to an active server.
              </li>
              <li>
                <strong>Newsletter Subscription:</strong> Simulated subscriptions validate email structure and generate a demo welcome code without storing addresses in commercial marketing lists.
              </li>
            </ul>
          </Card>

          {/* Section 3: Browser Local Storage */}
          <Card variant="bordered" padding="lg" style={{ backgroundColor: 'var(--color-white)' }}>
            <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              3. Browser Storage (LocalStorage) Usage
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--spacing-3)' }}>
              To provide a seamless browsing experience without requiring user authentication, this website utilizes standard browser <code>localStorage</code> solely for:
            </Typography>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, marginBottom: 'var(--spacing-3)' }}>
              <li>
                <code>aura_botanica_cart_v1</code>: Retains selected products and quantities in your beauty bag so items are preserved across page refreshes.
              </li>
              <li>
                <code>aura_botanica_wishlist_v1</code>: Retains your bookmarked product IDs.
              </li>
            </ul>
            <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <strong>Notice:</strong> No passwords, payment cards, or sensitive identity information are ever stored in browser storage. You can clear this data at any time by clearing your browser cache and cookies.
            </Typography>
          </Card>

          {/* Section 4: Security & Compliance */}
          <Card variant="bordered" padding="lg" style={{ backgroundColor: 'var(--color-white)' }}>
            <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              4. Future Backend Integration & Payment Security
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--spacing-3)' }}>
              Upon production deployment, all customer transactions and payment handling will be routed through RBI-compliant, PCI-DSS Level 1 certified payment gateways (such as Razorpay, Cashfree, or Stripe India). Aura Botanica will never directly store or process credit/debit card numbers or UPI PINs on its own servers.
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              [Editable Placeholder: Insert client’s registered company legal entity name, CIN, GSTIN, and appointed Grievance Officer details prior to commercial launch].
            </Typography>
          </Card>

          {/* Section 5: Grievance Officer & Contact */}
          <Card variant="bordered" padding="lg" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
            <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              5. Grievance Redressal (Bengaluru Jurisdiction)
            </Typography>
            <Typography variant="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--spacing-4)' }}>
              In compliance with the Information Technology Act, 2000 and rules made thereunder, questions or grievances may be directed to:
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: 'var(--font-size-sm)', color: 'var(--color-deep-burgundy)' }}>
              <div><strong>Grievance Officer:</strong> [Client Appointed Representative]</div>
              <div><strong>Atelier Address:</strong> 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038, India</div>
              <div><strong>Direct Email:</strong> <a href="mailto:grievance@aurabotanica.in" style={{ color: 'var(--color-rose-gold-dark)' }}>grievance@aurabotanica.in</a></div>
              <div><strong>Last Updated:</strong> October 2026</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
