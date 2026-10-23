import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product, ProductCategory, SortOption } from '../types';
import { CATEGORIES_CONFIG } from '../data/products';
import { Search, SlidersHorizontal, ArrowUpDown, X, Check, Sparkles } from 'lucide-react';

interface ProductsPageProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, volume: string, price: number) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [alcoholFreeOnly, setAlcoholFreeOnly] = useState(false);
  const [pureOilOnly, setPureOilOnly] = useState(false);
  const [brandInspiredOnly, setBrandInspiredOnly] = useState(false);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter((product) => {
        // 1. Category Filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // 2. Search Query Filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchInspired = product.inspiredBy?.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchNotes = [
            ...product.specifications.topNotes,
            ...product.specifications.heartNotes,
            ...product.specifications.baseNotes
          ].some((n) => n.toLowerCase().includes(q));
          if (!matchName && !matchInspired && !matchDesc && !matchNotes) {
            return false;
          }
        }

        // 3. Alcohol-free filter
        if (alcoholFreeOnly && !product.specifications.alcoholFree) {
          return false;
        }

        // 4. Pure Oil filter
        if (pureOilOnly && product.type !== 'oil') {
          return false;
        }

        // 5. Brand inspired filter
        if (brandInspiredOnly && !product.inspiredBy) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.reviewCount - a.reviewCount;
        }
        if (sortBy === 'price-asc') {
          return a.price - b.price;
        }
        if (sortBy === 'price-desc') {
          return b.price - a.price;
        }
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy, alcoholFreeOnly, pureOilOnly, brandInspiredOnly]);

  const resetFilters = () => {
    setSearchQuery('');
    setAlcoholFreeOnly(false);
    setPureOilOnly(false);
    setBrandInspiredOnly(false);
    setSortBy('popular');
    onSelectCategory('all');
  };

  return (
    <div className="bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
            Free Delivery NZ Wide • Hand-Poured in Invercargill
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black">
            Fragrance Collections
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-sans">
            Pure concentrated perfume oils, 100% alcohol-free extraits, and brand-inspired creations crafted for lasting sillage and skin-kind luxury.
          </p>
        </div>

        {/* Category Navigation Tabs (All Products, For Men, For Women, For Home, Fragrances) */}
        <div className="border-b-2 border-black mb-8 overflow-x-auto">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-6 min-w-max pb-1">
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as ProductCategory)}
                className={`py-3 px-4 text-xs uppercase tracking-[0.2em] font-bold transition-all relative cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-2 text-[10px] font-mono ${selectedCategory === cat.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar & Filter Controls Toolbar */}
        <div className="bg-neutral-50 border border-black p-4 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Quick Search Bar */}
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fragrances, inspired brand (e.g. Baccarat, Aventus), or notes..."
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-black text-xs placeholder:text-neutral-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorting Dropdown (Best/Popular, Lowest Price, Highest Price, Rating) */}
            <div className="md:col-span-5 flex items-center justify-end gap-3">
              <span className="text-xs uppercase tracking-wider font-bold shrink-0 flex items-center gap-1.5">
                <ArrowUpDown className="w-3.5 h-3.5" />
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort fragrances"
                className="w-full sm:w-auto bg-white border border-black px-3 py-2 text-xs uppercase tracking-wider font-semibold focus:outline-none cursor-pointer"
              >
                <option value="popular">Best / Popular</option>
                <option value="price-asc">Lowest Price (Low to High)</option>
                <option value="price-desc">Highest Price (High to Low)</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-200 text-xs">
            <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-500 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" /> Filters:
            </span>

            <button
              onClick={() => setAlcoholFreeOnly(!alcoholFreeOnly)}
              className={`px-3 py-1 text-xs uppercase tracking-wider border cursor-pointer transition-colors ${
                alcoholFreeOnly ? 'bg-black text-white border-black font-bold' : 'bg-white border-neutral-300 hover:border-black'
              }`}
            >
              100% Alcohol-Free
            </button>

            <button
              onClick={() => setPureOilOnly(!pureOilOnly)}
              className={`px-3 py-1 text-xs uppercase tracking-wider border cursor-pointer transition-colors ${
                pureOilOnly ? 'bg-black text-white border-black font-bold' : 'bg-white border-neutral-300 hover:border-black'
              }`}
            >
              Pure Perfume Oils
            </button>

            <button
              onClick={() => setBrandInspiredOnly(!brandInspiredOnly)}
              className={`px-3 py-1 text-xs uppercase tracking-wider border cursor-pointer transition-colors ${
                brandInspiredOnly ? 'bg-black text-white border-black font-bold' : 'bg-white border-neutral-300 hover:border-black'
              }`}
            >
              Brand Inspired
            </button>

            {(searchQuery || alcoholFreeOnly || pureOilOnly || brandInspiredOnly || selectedCategory !== 'all') && (
              <button
                onClick={resetFilters}
                className="ml-auto text-xs uppercase tracking-wider font-bold underline hover:text-neutral-500 cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Counter Strip */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-600 font-mono">
          <span>
            Showing <strong>{filteredAndSortedProducts.length}</strong> fragrances
          </span>
          <span className="uppercase text-[11px] font-semibold text-black tracking-wider">
            All Orders Include Free NZ Wide Courier
          </span>
        </div>

        {/* Responsive Grid Layout */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="border border-black p-12 text-center space-y-4 my-8">
            <h3 className="font-serif text-lg font-bold uppercase tracking-wider">
              No Fragrances Match Your Filters
            </h3>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto">
              We couldn't find any fragrances matching your criteria. Try adjusting your search query or reset filters.
            </p>
            <button
              onClick={resetFilters}
              className="bg-black text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={(p, vol, price) => onAddToCart(p, vol, price)}
              />
            ))}
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-8 border border-black bg-neutral-50 text-center space-y-2">
          <h3 className="font-serif text-xl font-bold uppercase tracking-wider">
            Need a Custom Fragrance Recommendation?
          </h3>
          <p className="text-xs text-neutral-600 max-w-lg mx-auto font-sans leading-relaxed">
            Visit our Invercargill boutique at Shop 3/24 Leven Street or call our perfumer directly at{' '}
            <a href="tel:021958113" className="underline font-bold text-black">
              021 958 113
            </a>. We help you find the perfect perfume oil match.
          </p>
        </div>
      </div>
    </div>
  );
};
