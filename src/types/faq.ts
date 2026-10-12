export type FAQCategory = 'Ordering & Delivery' | 'Product Formulation' | 'Skincare Routines' | 'Returns & Care';

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}
