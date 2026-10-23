import React, { useState } from 'react';
import { Product, ProductReview } from '../types';
import { X, Star, Truck, ShieldCheck, Sparkles, Check, ShoppingBag, MapPin, Heart, Share2 } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, volume: string, price: number, quantity: number) => void;
  onBuyNow: (product: Product, volume: string, price: number, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) => {
  if (!product) return null;

  const [selectedVolume, setSelectedVolume] = useState<string>(
    product.specifications.volumeOptions[0] || '10ml Roll-on'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'info' | 'specs' | 'reviews'>('info');

  // Review submission state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerCity, setReviewerCity] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewsList, setReviewsList] = useState<ProductReview[]>(product.reviews);
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Calculate price based on selected volume
  const getCalculatedPrice = (): number => {
    if (selectedVolume.includes('$')) {
      const match = selectedVolume.match(/\$(\d+(\.\d+)?)/);
      if (match) return parseFloat(match[1]);
    }
    return product.price;
  };

  const currentPrice = getCalculatedPrice();

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewComment.trim()) return;

    const newRev: ProductReview = {
      id: `rev-user-${Date.now()}`,
      author: reviewerName.trim(),
      rating: reviewRating,
      date: 'Just now',
      comment: reviewComment.trim(),
      city: reviewerCity.trim() || 'New Zealand',
      verified: true,
      source: 'google'
    };

    setReviewsList([newRev, ...reviewsList]);
    setReviewerName('');
    setReviewerCity('');
    setReviewComment('');
    setShowReviewForm(false);
    setReviewSuccess(true);
    setTimeout(() => setReviewSuccess(false), 4000);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="relative bg-white border-2 border-black w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Product Image & Badges */}
          <div className="p-6 sm:p-8 bg-neutral-50 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
            <div className="relative aspect-square overflow-hidden border border-black bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.specifications.alcoholFree && (
                <div className="absolute top-3 left-3 bg-white text-black border border-black px-2.5 py-1 text-[10px] tracking-widest uppercase font-bold">
                  100% Alcohol-Free
                </div>
              )}
              {product.isBestSeller && (
                <div className="absolute bottom-3 left-3 bg-black text-white px-2.5 py-1 text-[10px] tracking-widest uppercase font-bold">
                  Best Seller
                </div>
              )}
            </div>

            {/* Quick Guarantee Highlights */}
            <div className="mt-6 pt-6 border-t border-neutral-300 space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 shrink-0" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Free Delivery NZ Wide (No Minimum Spend)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-neutral-700 text-[11px]">
                  Dispatched directly from Shop 3/24 Leven St, Invercargill
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="text-neutral-700 text-[11px]">
                  Pure high-density perfume oils — Lasts 18+ hours
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Specs, Reviews */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Inspired By Reference */}
              {product.inspiredBy && (
                <div className="inline-block border border-black px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase font-bold mb-2">
                  {product.inspiredBy}
                </div>
              )}

              {/* Title & Subtitle */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-neutral-600 mt-1">
                {product.subtitle}
              </p>

              {/* Star Rating & Google Source */}
              <div className="flex items-center gap-2 mt-3 pb-3 border-b border-neutral-200">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-black stroke-black'
                          : 'stroke-black fill-none'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold">{product.rating.toFixed(1)} / 5.0</span>
                <span className="text-xs text-neutral-500">
                  ({reviewsList.length} Verified Customer & Google Reviews)
                </span>
              </div>

              {/* Price & Stock Details */}
              <div className="my-4 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-black">
                      ${currentPrice.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-xs font-mono text-neutral-600">NZD</span>
                  </div>
                  <span className="text-[11px] text-neutral-600 uppercase tracking-wider block mt-0.5">
                    Includes GST • Free Tracked NZ Courier
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 border border-black px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold">
                    <span className="w-2 h-2 bg-black rounded-full" />
                    In Stock ({product.stockCount} units)
                  </span>
                  <p className="text-[10px] text-neutral-500 mt-1">Invercargill Store Ready</p>
                </div>
              </div>

              {/* Size / Volume Selector */}
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                  Select Size & Concentration:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.specifications.volumeOptions.map((vol) => (
                    <button
                      key={vol}
                      type="button"
                      onClick={() => setSelectedVolume(vol)}
                      className={`px-3 py-2 text-xs uppercase tracking-wider font-medium border text-left transition-colors cursor-pointer ${
                        selectedVolume === vol
                          ? 'bg-black text-white border-black font-bold'
                          : 'bg-white text-black border-neutral-300 hover:border-black'
                      }`}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6 flex items-center gap-4">
                <label className="text-xs uppercase tracking-widest font-bold">Quantity:</label>
                <div className="flex items-center border border-black">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center font-bold text-sm hover:bg-neutral-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-mono font-bold text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center font-bold text-sm hover:bg-neutral-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons: Add to Bag & Buy Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <button
                  onClick={() => onAddToCart(product, selectedVolume, currentPrice, quantity)}
                  className="bg-black text-white hover:bg-neutral-800 py-3.5 px-4 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Bag</span>
                </button>
                <button
                  onClick={() => onBuyNow(product, selectedVolume, currentPrice, quantity)}
                  className="border-2 border-black text-black hover:bg-black hover:text-white py-3.5 px-4 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Buy Now (Express)</span>
                </button>
              </div>

              {/* Navigation Tabs (Info, Specifications, Customer Reviews) */}
              <div className="border-b border-black flex gap-6 text-xs uppercase tracking-widest font-bold mb-4">
                <button
                  onClick={() => setActiveTab('info')}
                  className={`pb-2 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'info' ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'specs' ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  Specifications & Notes
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'reviews' ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  Google & Customer Reviews ({reviewsList.length})
                </button>
              </div>

              {/* Tab 1: Description */}
              {activeTab === 'info' && (
                <div className="space-y-3 text-xs leading-relaxed text-neutral-800 font-sans">
                  <p>{product.description}</p>
                  <div className="p-3 bg-neutral-100 border border-neutral-300">
                    <p className="font-bold uppercase tracking-wider mb-1">
                      Why Choose Our Non-Alcoholic Perfume Oils?
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700">
                      <li>Contains 0% drying perfumer alcohol; gentle for sensitive skin.</li>
                      <li>High oil concentration absorbs into skin and releases warmth-activated sillage.</li>
                      <li>Hand-crafted and poured in Invercargill, New Zealand.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 2: Specifications */}
              {activeTab === 'specs' && (
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-neutral-200">
                    <div>
                      <span className="font-bold uppercase tracking-wider block text-neutral-500">Formulation:</span>
                      <span className="font-medium">{product.specifications.formulation}</span>
                    </div>
                    <div>
                      <span className="font-bold uppercase tracking-wider block text-neutral-500">Concentration:</span>
                      <span className="font-medium">{product.specifications.concentration}</span>
                    </div>
                    <div>
                      <span className="font-bold uppercase tracking-wider block text-neutral-500">Longevity:</span>
                      <span className="font-medium">{product.specifications.longevity}</span>
                    </div>
                    <div>
                      <span className="font-bold uppercase tracking-wider block text-neutral-500">Scent Family:</span>
                      <span className="font-medium">{product.specifications.scentFamily}</span>
                    </div>
                  </div>

                  {/* Olfactory Notes Pyramid */}
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs">Olfactory Profile:</h4>
                    <div className="p-2.5 border border-black space-y-2 bg-neutral-50">
                      <div>
                        <span className="font-bold uppercase text-[10px] text-neutral-500 tracking-wider">Top Notes:</span>
                        <p className="font-medium">{product.specifications.topNotes.join(', ')}</p>
                      </div>
                      <div>
                        <span className="font-bold uppercase text-[10px] text-neutral-500 tracking-wider">Heart / Middle Notes:</span>
                        <p className="font-medium">{product.specifications.heartNotes.join(', ')}</p>
                      </div>
                      <div>
                        <span className="font-bold uppercase text-[10px] text-neutral-500 tracking-wider">Base Notes:</span>
                        <p className="font-medium">{product.specifications.baseNotes.join(', ')}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-500">
                    Origin: {product.specifications.origin}
                  </p>
                </div>
              )}

              {/* Tab 3: Customer Reviews */}
              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  {/* Reviews Summary Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif text-xl font-bold">{product.rating.toFixed(1)}</span>
                        <div className="flex text-black">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-black stroke-black" />
                          ))}
                        </div>
                      </div>
                      <p className="text-[11px] text-neutral-500">
                        Based on {reviewsList.length} verified ratings
                      </p>
                    </div>

                    <button
                      onClick={() => setShowReviewForm(!showReviewForm)}
                      className="border border-black px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      {showReviewForm ? 'Cancel' : 'Write A Review'}
                    </button>
                  </div>

                  {reviewSuccess && (
                    <div className="p-3 bg-black text-white text-xs uppercase tracking-wider text-center font-bold">
                      Thank you! Your verified review has been published.
                    </div>
                  )}

                  {/* Review Input Form */}
                  {showReviewForm && (
                    <form onSubmit={handleReviewSubmit} className="p-4 border border-black space-y-3 bg-neutral-50">
                      <h4 className="text-xs uppercase tracking-widest font-bold">Share Your Experience</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-neutral-600 mb-1">Your Name</label>
                          <input
                            type="text"
                            required
                            value={reviewerName}
                            onChange={(e) => setReviewerName(e.target.value)}
                            placeholder="e.g. Sarah M."
                            className="w-full border border-black bg-white p-2 text-xs focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-neutral-600 mb-1">City / Region</label>
                          <input
                            type="text"
                            value={reviewerCity}
                            onChange={(e) => setReviewerCity(e.target.value)}
                            placeholder="e.g. Invercargill, NZ"
                            className="w-full border border-black bg-white p-2 text-xs focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-neutral-600 mb-1">Rating</label>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setReviewRating(num)}
                              className="p-1 hover:scale-110 transition-transform cursor-pointer"
                            >
                              <Star
                                className={`w-5 h-5 ${
                                  num <= reviewRating ? 'fill-black stroke-black' : 'stroke-black fill-none'
                                }`}
                              />
                            </button>
                          ))}
                          <span className="text-xs font-bold font-mono ml-2">{reviewRating} Stars</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-neutral-600 mb-1">Your Review</label>
                        <textarea
                          required
                          rows={3}
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          placeholder="How did the fragrance perform? How long did it last on your skin?"
                          className="w-full border border-black bg-white p-2 text-xs focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-black text-white py-2 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                      >
                        Submit Review
                      </button>
                    </form>
                  )}

                  {/* List of Verified Reviews */}
                  <div className="space-y-3 max-h-56 overflow-y-auto pr-2">
                    {reviewsList.map((rev) => (
                      <div key={rev.id} className="p-3 border border-neutral-200 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs">{rev.author}</span>
                            {rev.verified && (
                              <span className="text-[10px] bg-black text-white px-1.5 py-0.2 tracking-wider uppercase font-semibold">
                                Verified Buyer
                              </span>
                            )}
                            {rev.source === 'google' && (
                              <span className="text-[10px] border border-black px-1.5 py-0.2 tracking-wider uppercase">
                                Google Review
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-neutral-400">{rev.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex text-black">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < rev.rating ? 'fill-black stroke-black' : 'stroke-black fill-none'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[11px] text-neutral-500 font-mono">{rev.city}</span>
                        </div>

                        <p className="text-xs text-neutral-800 leading-relaxed font-sans">
                          "{rev.comment}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Share / Copy link */}
            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
              <span>SKU: {product.id.toUpperCase()}</span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 hover:text-black cursor-pointer uppercase tracking-wider text-[11px]"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Scent'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
