import type { ProductCategory, SortOption } from '../../types/product';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';

export interface FilterSidebarProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  selectedSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
  inStockOnly: boolean;
  onToggleInStock: () => void;
  bestsellersOnly: boolean;
  onToggleBestsellers: () => void;
  organicOnly: boolean;
  onToggleOrganic: () => void;
  maxPrice: number;
  onMaxPriceChange: (val: number) => void;
  onResetFilters: () => void;
}

const CATEGORIES: ProductCategory[] = ['All', 'Skincare', 'Makeup', 'Lip Care', 'Face Care', 'Body Care'];

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
  inStockOnly,
  onToggleInStock,
  bestsellersOnly,
  onToggleBestsellers,
  organicOnly,
  onToggleOrganic,
  maxPrice,
  onMaxPriceChange,
  onResetFilters
}) => {
  return (
    <aside
      aria-label="Product catalogue filters"
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--spacing-6)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-6)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 'var(--spacing-3)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <SlidersHorizontal size={18} color="var(--color-deep-burgundy)" />
          <Typography variant="h4" style={{ fontSize: '1.1rem', margin: 0 }}>
            Filter & Refine
          </Typography>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onResetFilters}
          style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', color: 'var(--text-muted)' }}
          title="Reset all filters"
        >
          <RotateCcw size={12} /> Reset
        </Button>
      </div>

      {/* Sort Section */}
      <div>
        <Typography variant="caption" style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: 'var(--spacing-2)', display: 'block' }}>
          Sort Catalogue By
        </Typography>
        <select
          value={selectedSort}
          onChange={(e) => onSelectSort(e.target.value as SortOption)}
          className="form-select"
          aria-label="Sort products"
          style={{
            padding: '0.65rem 0.95rem',
            fontSize: 'var(--font-size-sm)',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <option value="featured">Featured / Curated</option>
          <option value="newest">New Arrivals First</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Category Selection */}
      <div>
        <Typography variant="caption" style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: 'var(--spacing-3)', display: 'block' }}>
          Categories
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.55rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isSelected ? 'var(--color-soft-blush)' : 'transparent',
                  color: isSelected ? 'var(--color-deep-burgundy)' : 'var(--text-secondary)',
                  fontWeight: isSelected ? 600 : 400,
                  fontSize: 'var(--font-size-sm)',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span>{cat}</span>
                {isSelected && (
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-rose-gold)' }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Maximum Price Filter */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-2)' }}>
          <Typography variant="caption" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
            Price Range
          </Typography>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-deep-burgundy)' }}>
            Up to ₹{maxPrice.toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min="800"
          max="3500"
          step="100"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          style={{
            width: '100%',
            accentColor: 'var(--color-deep-burgundy)',
            cursor: 'pointer'
          }}
          aria-label="Filter by maximum price"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginTop: '4px' }}>
          <span>₹800</span>
          <span>₹3,500</span>
        </div>
      </div>

      {/* Quick Filter Checkboxes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', paddingTop: 'var(--spacing-2)', borderTop: '1px solid var(--border-subtle)' }}>
        <Typography variant="caption" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
          Badges & Stock
        </Typography>

        <label className="form-checkbox-container">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={bestsellersOnly}
            onChange={onToggleBestsellers}
          />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            Bestsellers Only
          </span>
        </label>

        <label className="form-checkbox-container">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={organicOnly}
            onChange={onToggleOrganic}
          />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            100% Botanical / Organic
          </span>
        </label>

        <label className="form-checkbox-container">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={inStockOnly}
            onChange={onToggleInStock}
          />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            In Stock Only
          </span>
        </label>
      </div>
    </aside>
  );
};
