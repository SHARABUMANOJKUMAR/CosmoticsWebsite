import React, { useState } from 'react';
import type { ContactFormData, ContactFormErrors, InquiryType } from '../../types/contact';
import { contactService, type ContactSubmissionResult } from '../../services/contactService';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { CheckCircle, AlertCircle, Send, Info } from 'lucide-react';

const INITIAL_FORM: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  inquiryType: 'General Inquiry',
  message: '',
  privacyConsent: false
};

const INQUIRY_OPTIONS: InquiryType[] = [
  'General Inquiry',
  'Product Information',
  'Business Collaboration',
  'Other'
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ContactSubmissionResult | null>(null);

  const handleChange = (field: keyof ContactFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear individual field error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const res = await contactService.submitInquiry(formData);
    setIsSubmitting(false);

    if (res.success) {
      setResult(res);
      setFormData(INITIAL_FORM);
      setErrors({});
    } else {
      setResult(res);
      if (res.errors) {
        setErrors(res.errors);
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--spacing-8)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
        position: 'relative'
      }}
    >
      <div style={{ marginBottom: 'var(--spacing-6)' }}>
        <Typography variant="eyebrow">
          Bespoke Concierge Inquiry
        </Typography>
        <Typography variant="h2" style={{ fontSize: '1.85rem', color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-2)' }}>
          Send Our Bengaluru Atelier a Message
        </Typography>
        <Typography variant="body" style={{ color: 'var(--text-secondary)' }}>
          Whether you need personalized skincare regimen advice, product ingredient clarity, or business collaboration inquiries, our team is at your service.
        </Typography>
      </div>

      {result && result.success ? (
        <div
          role="status"
          aria-live="polite"
          style={{
            backgroundColor: '#F3F9F4',
            border: '1px solid #7EC89B',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-6)',
            textAlign: 'center',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: '#D1EAD8',
              color: '#1B6A3B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--spacing-4) auto'
            }}
          >
            <CheckCircle size={30} />
          </div>

          <Typography variant="h3" style={{ color: '#1B6A3B', fontSize: '1.4rem', marginBottom: 'var(--spacing-2)' }}>
            Inquiry Simulated Successfully!
          </Typography>

          <Typography variant="body" style={{ color: '#2C5E3B', maxWidth: '540px', margin: '0 auto var(--spacing-4) auto' }}>
            {result.message}
          </Typography>

          {result.referenceId && (
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px dashed #7EC89B',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                color: '#1B6A3B',
                marginBottom: 'var(--spacing-6)'
              }}
            >
              Reference Tracking ID: <strong>{result.referenceId}</strong>
            </div>
          )}

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              padding: 'var(--spacing-3)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              margin: '0 auto var(--spacing-6) auto'
            }}
          >
            <Info size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
            <strong>Frontend Limitation Notice:</strong> This project operates in demonstration mode. No emails have been transmitted or stored on an external server. Connect a production backend endpoint to <code>src/services/contactService.ts</code> when ready.
          </div>

          <Button
            variant="outline"
            size="md"
            onClick={() => setResult(null)}
          >
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {result && !result.success && (
            <div
              role="alert"
              style={{
                backgroundColor: '#FDF2F2',
                border: '1px solid #F09B9B',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                marginBottom: 'var(--spacing-6)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                color: '#B91C1C',
                fontSize: 'var(--font-size-sm)'
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>{result.message}</span>
            </div>
          )}

          {/* Row 1: Full Name & Email */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'var(--spacing-4)'
            }}
          >
            <Input
              label="Full Name"
              required
              id="contact-full-name"
              placeholder="e.g. Priya Sharma"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              error={errors.fullName}
            />

            <Input
              label="Email Address"
              required
              type="email"
              id="contact-email"
              placeholder="e.g. priya@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
            />
          </div>

          {/* Row 2: Phone & Subject */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'var(--spacing-4)'
            }}
          >
            <Input
              label="Phone Number (India)"
              required
              type="tel"
              id="contact-phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={errors.phone}
              helperText="10-digit Indian mobile number (+91 accepted)"
            />

            <Input
              label="Subject"
              required
              id="contact-subject"
              placeholder="e.g. Regime consultation for dry skin"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              error={errors.subject}
            />
          </div>

          {/* Row 3: Inquiry Type Selection */}
          <div className="form-group">
            <label htmlFor="contact-inquiry-type" className="form-label">
              Inquiry Type <span className="form-label-required">*</span>
            </label>
            <select
              id="contact-inquiry-type"
              className={`form-select ${errors.inquiryType ? 'has-error' : ''}`}
              value={formData.inquiryType}
              onChange={(e) => handleChange('inquiryType', e.target.value as InquiryType)}
              aria-invalid={Boolean(errors.inquiryType)}
            >
              {INQUIRY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.inquiryType && (
              <span className="form-error" role="alert">
                {errors.inquiryType}
              </span>
            )}
          </div>

          {/* Row 4: Message Textarea */}
          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Your Message <span className="form-label-required">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              className={`form-textarea ${errors.message ? 'has-error' : ''}`}
              placeholder="Tell us about your skincare goals, product questions, or collaboration details..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && (
              <span className="form-error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {/* Row 5: Consent Checkbox */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <label className="form-checkbox-container">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={formData.privacyConsent}
                onChange={(e) => handleChange('privacyConsent', e.target.checked)}
                id="contact-consent"
              />
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                I agree to the processing of my inquiry details by Aura Botanica in accordance with the{' '}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-rose-gold-dark)', textDecoration: 'underline' }}>
                  Privacy Notice
                </a>
                .
              </span>
            </label>
            {errors.privacyConsent && (
              <span className="form-error" style={{ marginTop: '4px' }} role="alert">
                {errors.privacyConsent}
              </span>
            )}
          </div>

          {/* Submit Action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--spacing-4)' }}>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              style={{ minWidth: '220px' }}
            >
              <Send size={16} /> Send Message to Atelier
            </Button>

            <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
              Estimated response time: Within 24 business hours
            </Typography>
          </div>
        </form>
      )}
    </div>
  );
};
