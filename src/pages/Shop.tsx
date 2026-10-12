import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product, ProductCategory, SortOption } from '../types/product';
import { productService } from '../services/productService';
import { useWishlist } from '../context/WishlistContext';
import { PageHeader } from '../components/layout/PageHeader';
import { ProductGrid } from '../components/products/ProductGrid';
import { SearchBar } from '../components/products/SearchBar';
import { FilterSidebar } from '../components/products/FilterSidebar';
import { QuickViewModal } from '../components/products/QuickViewModal';
import { LoadingState } from '../components/common/LoadingState';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { SlidersHorizontal, Heart } from 'lucide-react';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist } = useWishlist();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Filter States
  const urlCategory = (searchParams.get('category') as ProductCategory) || 'All';
  const urlFilter = searchParams.get('filter');

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(urlCategory);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedSort, setSelectedSort] = useState<SortOption>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(3500);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [bestsellersOnly, setBestsellersOnly] = useState(false);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [wishlistOnly, setWishlistOnly] = useState(urlFilter === 'wishlist');

  // Sync category param
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  useEffect(() => {
    if (urlFilter === 'wishlist') {
      setWishlistOnly(true);
    }
  }, [urlFilter]);

  // Load products from service
  useEffect(() => {
    setIsLoading(true);
    productService.getAllProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const handleCategoryChange = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    setWishlistOnly(false);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    searchParams.delete('filter');
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedSort('featured');
    setMaxPrice(3500);
    setInStockOnly(false);
    setBestsellersOnly(false);
    setOrganicOnly(false);
    setWishlistOnly(false);
    setSearchParams({});
  };

  // Filter & Sort computation
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Wishlist filter
    if (wishlistOnly) {
      result = result.filter((p) => wishlist.includes(p.id));
    }

    // Category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.keyBenefits.some((b) => b.toLowerCase().includes(q)) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(q))
      );
    }

    // Max price
    result = result.filter((p) => p.price <= maxPrice);

    // Badges
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }
    if (bestsellersOnly) {
      result = result.filter((p) => p.isBestseller);
    }
    if (organicOnly) {
      result = result.filter((p) => p.isOrganic);
    }

    // Sorting
    switch (selectedSort) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
    }

    return result;
  }, [
    products,
    wishlistOnly,
    wishlist,
    selectedCategory,
    searchQuery,
    maxPrice,
    inStockOnly,
    bestsellersOnly,
    organicOnly,
    selectedSort
  ]);

  return (
    <div className="shop-page animate-fade-in">
      <PageHeader
        eyebrow="Aura Botanica Catalogue"
        title={wishlistOnly ? 'Your Saved Wishlist' : 'Luxury Botanical Collection'}
        description={
          wishlistOnly
            ? 'Review your personally saved formulations. Ready to begin your radiant skincare ritual.'
            : 'Pure botanical face nectars, rose-infused lip elixirs, and radiant skin makeup crafted in Bengaluru.'
        }
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Shop', path: '/shop' },
          ...(wishlistOnly ? [{ label: 'Wishlist' }] : selectedCategory !== 'All' ? [{ label: selectedCategory }] : [])
        ]}
      />

      <div className="site-container" style={{ paddingTop: 'var(--spacing-10)', paddingBottom: 'var(--spacing-16)' }}>
        {/* Top Control Bar: Search + Filter Toggle + Count */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--spacing-4)',
            marginBottom: 'var(--spacing-8)',
            flexWrap: 'wrap'
          }}
        >
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
            <Button
              variant={wishlistOnly ? 'secondary' : 'outline'}
              size="sm"
              onClick={() => {
                setWishlistOnly(!wishlistOnly);
                if (!wishlistOnly) {
                  searchParams.set('filter', 'wishlist');
                } else {
                  searchParams.delete('filter');
                }
                setSearchParams(searchParams);
              }}
            >
              <Heart size={15} fill={wishlistOnly ? 'currentColor' : 'none'} />
              <span>Wishlist ({wishlist.length})</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="mobile-filter-btn"
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              style={{ display: 'none' }}
            >
              <SlidersHorizontal size={15} /> Filters
            </Button>

            <Typography variant="body-sm" style={{ color: 'var(--text-muted)' }}>
              Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'ritual' : 'rituals'}
            </Typography>
          </div>
        </div>

        {/* Category Pills on Top for Fast Navigation */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-2)',
            overflowX: 'auto',
            paddingBottom: 'var(--spacing-4)',
            marginBottom: 'var(--spacing-8)',
            scrollbarWidth: 'none'
          }}
        >
          {(['All', 'Skincare', 'Makeup', 'Lip Care', 'Face Care', 'Body Care'] as ProductCategory[]).map((cat) => {
            const isSelected = !wishlistOnly && selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  backgroundColor: isSelected ? 'var(--color-deep-burgundy)' : 'var(--color-white)',
                  color: isSelected ? 'var(--color-warm-ivory)' : 'var(--color-deep-burgundy)',
                  border: isSelected ? '1px solid var(--color-deep-burgundy)' : '1px solid var(--border-medium)',
                  boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Main Content Layout: Sidebar + Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '270px 1fr',
            gap: 'var(--spacing-8)',
            alignItems: 'start'
          }}
          className="shop-layout-grid"
        >
          {/* Desktop Filter Sidebar */}
          <div className="desktop-sidebar-container">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
              selectedSort={selectedSort}
              onSelectSort={setSelectedSort}
              inStockOnly={inStockOnly}
              onToggleInStock={() => setInStockOnly(!inStockOnly)}
              bestsellersOnly={bestsellersOnly}
              onToggleBestsellers={() => setBestsellersOnly(!bestsellersOnly)}
              organicOnly={organicOnly}
              onToggleOrganic={() => setOrganicOnly(!organicOnly)}
              maxPrice={maxPrice}
              onMaxPriceChange={setMaxPrice}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Product Results Grid */}
          <div>
            {isLoading ? (
              <LoadingState message="Fetching client beauty formulations..." />
            ) : (
              <ProductGrid
                products={filteredProducts}
                onQuickView={setQuickViewProduct}
                columns={3}
                emptyTitle={wishlistOnly ? 'Your Wishlist is Empty' : 'No Formulations Found'}
                emptyDescription={
                  wishlistOnly
                    ? 'Explore our catalogue and click the heart icon on any product to save it here.'
                    : 'We could not find any items matching your selected criteria. Try adjusting the price range or filters.'
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Mobile Filters Drawer Style */}
      <style>{`
        @media (max-width: 900px) {
          .shop-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .desktop-sidebar-container {
            display: ${isMobileFiltersOpen ? 'block' : 'none'} !important;
            margin-bottom: var(--spacing-6);
          }
          .mobile-filter-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  );
};
