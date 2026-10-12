export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Skincare Routine' | 'Ingredient Spotlight' | 'Beauty Ritual' | 'Seasonal Care';
  readTime: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  tips: string[];
  recommendedProductIds?: string[];
}
