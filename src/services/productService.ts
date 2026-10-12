import { SAMPLE_PRODUCTS } from '../data/products';
import type { Product, ProductCategory, SortOption } from '../types/product';

export interface ProductQueryParams {
  category?: ProductCategory;
  search?: string;
  sort?: SortOption;
}

export const productService = {
  async getAllProducts(params?: ProductQueryParams): Promise<Product[]> {
    // Simulated micro-delay for realistic async behavior without lag
    await new Promise((resolve) => setTimeout(resolve, 50));
    let items = [...SAMPLE_PRODUCTS];

    if (params?.category && params.category !== 'All') {
      items = items.filter((p) => p.category.toLowerCase() === params.category?.toLowerCase());
    }

    if (params?.search && params.search.trim() !== '') {
      const q = params.search.toLowerCase().trim();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (params?.sort) {
      switch (params.sort) {
        case 'price-low-high':
          items.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-low':
          items.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          items.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          items.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
          break;
        case 'featured':
        default:
          items.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
          break;
      }
    }

    return items;
  },

  async getProductById(id: string): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const found = SAMPLE_PRODUCTS.find((p) => p.id === id);
    return found || null;
  },

  async getFeaturedProducts(limit = 4): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return SAMPLE_PRODUCTS.slice(0, limit);
  },

  async getBestsellers(limit = 4): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return SAMPLE_PRODUCTS.filter((p) => p.isBestseller).slice(0, limit);
  },

  async getRelatedProducts(currentId: string, category: ProductCategory, limit = 4): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return SAMPLE_PRODUCTS
      .filter((p) => p.id !== currentId && (p.category === category || p.isBestseller))
      .slice(0, limit);
  }
};
