import type { ContactFormData, ContactFormErrors } from '../types/contact';

// Indian phone regex: matches +91 9876543210, 09876543210, 9876543210, +91-98765-43210, etc.
const INDIAN_PHONE_REGEX = /^(?:(?:\+|0{0,2})91(\s*[-]\s*|\s+)?|[0]?)?[6789]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: ContactFormErrors;
}

export const contactService = {
  validateForm(data: ContactFormData): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
      errors.email = 'Please provide a valid email address (e.g., name@example.com).';
    }

    const cleanPhone = data.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errors.phone = 'Phone number is required for concierge assistance.';
    } else if (!INDIAN_PHONE_REGEX.test(cleanPhone)) {
      errors.phone = 'Please enter a valid 10-digit Indian phone number (e.g. +91 98765 43210).';
    }

    if (!data.subject || data.subject.trim().length < 3) {
      errors.subject = 'Please enter a subject topic for your message.';
    }

    if (!data.inquiryType) {
      errors.inquiryType = 'Please select an inquiry category.';
    }

    if (!data.message || data.message.trim().length < 15) {
      errors.message = 'Please provide details about your inquiry (minimum 15 characters).';
    }

    if (!data.privacyConsent) {
      errors.privacyConsent = 'You must consent to our privacy notice to submit this inquiry.';
    }

    return errors;
  },

  async submitInquiry(data: ContactFormData): Promise<ContactSubmissionResult> {
    const errors = this.validateForm(data);
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: 'Please resolve the highlighted errors in the form.',
        errors
      };
    }

    // Simulate network latency (800ms) for realistic experience
    await new Promise((resolve) => setTimeout(resolve, 800));

    const ref = `AURA-BLR-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

    return {
      success: true,
      message: 'Thank you for contacting Aura Botanica! Your message has been received by our Bengaluru concierge atelier. We will respond within 24 business hours.',
      referenceId: ref
    };
  }
};
