import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { Search, X, Star, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(term);
      const matchInspired = p.inspiredBy?.toLowerCase().includes(term);
      const matchDesc = p.description.toLowerCase().includes(term);
      const matchTopNotes = p.specifications.topNotes.some((n) => n.toLowerCase().includes(term));
      const matchHeartNotes = p.specifications.heartNotes.some((n) => n.toLowerCase().includes(term));
      const matchBaseNotes = p.specifications.baseNotes.some((n) => n.toLowerCase().includes(term));
      const matchFamily = p.specifications.scentFamily.toLowerCase().includes(term);
      return matchName || matchInspired || matchDesc || matchTopNotes || matchHeartNotes || matchBaseNotes || matchFamily;
    });
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div className="bg-white border-2 border-black w-full max-w-2xl shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-lg font-bold uppercase tracking-wider mb-4">
          Search ePerfumeStore Fragrances
        </h3>

        {/* Input */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by perfume name, inspired designer (e.g. Baccarat, Aventus), or notes (e.g. vanilla, oud, citrus)..."
            className="w-full pl-10 pr-4 py-3 border border-black text-xs sm:text-sm focus:outline-none bg-neutral-50"
          />
        </div>

        {/* Popular Search Suggestions */}
        {!searchTerm && (
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              Popular Fragrance Searches:
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Baccarat 540', 'Creed Aventus', 'Santal 33', 'Tobacco Vanille', 'Pure Perfume Oil', 'Alcohol-Free', 'Home Diffuser'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="border border-neutral-300 hover:border-black px-3 py-1 text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {searchTerm && (
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              Found {filteredProducts.length} Results
            </p>

            <div className="max-h-80 overflow-y-auto divide-y divide-neutral-200">
              {filteredProducts.length === 0 ? (
                <div className="py-8 text-center text-xs text-neutral-500">
                  No fragrances matched "{searchTerm}". Try searching for another note or designer inspiration.
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="py-3 flex items-center justify-between hover:bg-neutral-50 p-2 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover border border-neutral-300 shrink-0"
                      />
                      <div>
                        {product.inspiredBy && (
                          <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                            {product.inspiredBy}
                          </span>
                        )}
                        <h4 className="font-serif text-sm font-bold text-black">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-neutral-600 mt-0.5">
                          <span>${product.price.toFixed(2)} NZD</span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5">
                            <Star className="w-3 h-3 fill-black stroke-black" />
                            {product.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
