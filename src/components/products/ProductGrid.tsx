import type { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { EmptyState } from '../common/EmptyState';
import { ShoppingBag } from 'lucide-react';

export interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
  emptyTitle?: string;
  emptyDescription?: string;
  columns?: 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onQuickView,
  emptyTitle = 'No Products Found',
  emptyDescription = 'Try adjusting your search query or selecting a different category filter.',
  columns = 4
}) => {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={ShoppingBag}
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  const gridTemplate = columns === 3
    ? 'repeat(auto-fill, minmax(280px, 1fr))'
    : 'repeat(auto-fill, minmax(260px, 1fr))';

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: gridTemplate,
        gap: 'var(--spacing-6)'
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
};
