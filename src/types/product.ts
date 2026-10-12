export type ProductCategory = 'All' | 'Skincare' | 'Makeup' | 'Lip Care' | 'Face Care' | 'Body Care';

export type SortOption = 'featured' | 'price-low-high' | 'price-high-low' | 'rating' | 'newest';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  price: number;            // In INR (₹)
  originalPrice?: number;   // In INR (₹) for discount representation
  rating: number;           // 1.0 - 5.0
  reviewCount: number;
  image: string;
  additionalImages?: string[];
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isOrganic?: boolean;
  inStock: boolean;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: string[];
  ingredients: string[];
  howToUse: string[];
  sizeVolume: string;       // e.g. "30 ml / 1.0 fl oz"
  suitability: string;      // e.g. "Suitable for all skin types, including sensitive skin"
}
