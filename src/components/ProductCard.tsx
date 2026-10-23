import React from 'react';
import { Product } from '../types';
import { Star, Eye, ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, volume: string, price: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart
}) => {
  const defaultVolume = product.specifications.volumeOptions[0] || '10ml Roll-on';

  return (
    <div className="group bg-white border border-black flex flex-col justify-between transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {/* Product Image and Overlay Tags */}
      <div
        className="relative bg-neutral-100 aspect-square overflow-hidden cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="bg-black text-white text-[10px] tracking-widest uppercase font-bold px-2 py-0.5">
              Best Seller
            </span>
          )}
          {product.specifications.alcoholFree && (
            <span className="bg-white text-black border border-black text-[9px] tracking-wider uppercase font-semibold px-2 py-0.5">
              100% Alcohol-Free
            </span>
          )}
        </div>

        {/* Stock Status Tag */}
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-white text-black border border-black text-[9px] tracking-wider uppercase font-semibold px-1.5 py-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            In Stock
          </span>
        </div>

        {/* Hover Quick View Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="bg-white text-black border border-black px-4 py-2 text-xs tracking-widest uppercase font-bold hover:bg-black hover:text-white transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Inspired By Reference */}
          {product.inspiredBy && (
            <p className="text-[11px] font-mono tracking-wider text-neutral-600 uppercase mb-1 line-clamp-1">
              {product.inspiredBy}
            </p>
          )}

          {/* Product Title */}
          <h3
            onClick={() => onSelectProduct(product)}
            className="font-serif text-base font-bold text-black group-hover:underline cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          <p className="text-xs text-neutral-600 mt-0.5">
            {product.subtitle}
          </p>

          {/* Star Rating & Reviews */}
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="flex items-center text-black">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-black stroke-black'
                      : 'stroke-black fill-none'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-black">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-[11px] text-neutral-500">
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Scent Family / Olfactory Tags */}
          <div className="mt-2 text-[10px] uppercase tracking-wider text-neutral-500 line-clamp-1">
            {product.specifications.scentFamily}
          </div>
        </div>

        {/* Pricing & Add To Cart Bar */}
        <div className="mt-4 pt-3 border-t border-neutral-200">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xs text-neutral-500 tracking-wider uppercase block">From</span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold font-serif text-black">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-neutral-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-[10px] text-neutral-500 font-mono">NZD</span>
              </div>
            </div>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-neutral-600">
              Free NZ Delivery
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full border border-black text-black py-2 text-[11px] uppercase tracking-wider font-bold hover:bg-neutral-100 transition-colors cursor-pointer text-center"
            >
              Details
            </button>
            <button
              onClick={() => onAddToCart(product, defaultVolume, product.price)}
              className="w-full bg-black text-white py-2 text-[11px] uppercase tracking-wider font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
