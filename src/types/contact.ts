export type InquiryType =
  | 'General Inquiry'
  | 'Product Information'
  | 'Business Collaboration'
  | 'Other';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  inquiryType: InquiryType;
  message: string;
  privacyConsent: boolean;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  inquiryType?: string;
  message?: string;
  privacyConsent?: string;
}
