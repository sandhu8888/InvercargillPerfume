import React from 'react';
import { HomeHero } from '../components/HomeHero';
import { ProductCard } from '../components/ProductCard';
import { Product, PageRoute, ProductCategory } from '../types';
import { STORE_GOOGLE_REVIEWS } from '../data/reviews';
import { Star, Truck, Sparkles, ShieldCheck, MapPin, ArrowRight, CheckCircle2, ChevronRight, Droplet } from 'lucide-react';

interface HomePageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, volume: string, price: number) => void;
  onNavigate: (page: PageRoute, category?: ProductCategory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onNavigate
}) => {
  const featuredProducts = products.filter((p) => p.isPopular || p.isBestSeller).slice(0, 6);

  return (
    <div className="bg-white">
      {/* 1. Hero Rotator with 4 slides & Shop Now CTA */}
      <HomeHero onNavigateToProducts={(category) => onNavigate('products', category)} />

      {/* 2. Key Pillars Strip */}
      <section className="border-b border-black py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 p-3 border border-neutral-200">
              <Truck className="w-6 h-6 stroke-[1.5] shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider">Free NZ Delivery</h4>
                <p className="text-[11px] text-neutral-600">No minimum spend required</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border border-neutral-200">
              <Droplet className="w-6 h-6 stroke-[1.5] shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider">100% Pure Perfume Oils</h4>
                <p className="text-[11px] text-neutral-600">0% Alcohol • 18-24hr Longevity</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border border-neutral-200">
              <Sparkles className="w-6 h-6 stroke-[1.5] shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider">Brand Inspired</h4>
                <p className="text-[11px] text-neutral-600">Luxury niche olfactory profiles</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border border-neutral-200">
              <MapPin className="w-6 h-6 stroke-[1.5] shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider">Invercargill Boutique</h4>
                <p className="text-[11px] text-neutral-600">Shop 3/24 Leven Street</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Explorations */}
      <section className="py-16 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-black">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
                Curated Collections
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                Shop By Fragrance Category
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products', 'all')}
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:underline cursor-pointer"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1: For Men */}
            <div
              onClick={() => onNavigate('products', 'men')}
              className="group border border-black p-6 flex flex-col justify-between cursor-pointer hover:bg-neutral-50 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                  Collection 01
                </span>
                <h3 className="font-serif text-xl font-bold uppercase mt-1 mb-2">
                  For Men
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Rich woody notes, smoky birch, warm tobacco, and magnetic aromatic spices in pure oil form.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span>View Collection</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Category 2: For Women */}
            <div
              onClick={() => onNavigate('products', 'women')}
              className="group border border-black p-6 flex flex-col justify-between cursor-pointer hover:bg-neutral-50 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                  Collection 02
                </span>
                <h3 className="font-serif text-xl font-bold uppercase mt-1 mb-2">
                  For Women
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Ethereal florals, velvety Damascus roses, solar ambers, and decadent non-alcoholic vanilla extracts.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span>View Collection</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Category 3: Fragrances / Extrait Oils */}
            <div
              onClick={() => onNavigate('products', 'fragrances')}
              className="group border border-black p-6 flex flex-col justify-between cursor-pointer hover:bg-neutral-50 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                  Collection 03
                </span>
                <h3 className="font-serif text-xl font-bold uppercase mt-1 mb-2">
                  Fragrances & Oils
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Pure concentrated perfume oils and artisanal alcohol-free extrait creations inspired by niche masters.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span>View Collection</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Category 4: For Home */}
            <div
              onClick={() => onNavigate('products', 'home')}
              className="group border border-black p-6 flex flex-col justify-between cursor-pointer hover:bg-neutral-50 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                  Collection 04
                </span>
                <h3 className="font-serif text-xl font-bold uppercase mt-1 mb-2">
                  For Home
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  High-density reed diffuser oils and atmospheric room scents to envelop your sanctuary in luxury.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span>View Collection</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Fragrances - Responsive Grid */}
      <section className="py-16 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
              Top Rated In New Zealand
            </span>
            <h2 className="font-serif text-3xl font-bold uppercase tracking-tight">
              Best Sellers & Trending Fragrances
            </h2>
            <p className="text-xs text-neutral-600 mt-2 font-sans">
              Hand-poured pure perfume oils and alcohol-free extraits with unmatched longevity. Enjoy free delivery NZ wide.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={(p, vol, price) => onAddToCart(p, vol, price)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('products', 'all')}
              className="bg-black text-white hover:bg-neutral-800 px-8 py-4 text-xs uppercase tracking-[0.25em] font-bold transition-all cursor-pointer inline-flex items-center gap-3 shadow-md"
            >
              <span>Explore All Fragrances</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. The Science: Why Pure Perfume Oils & Non-Alcoholic Formulas? */}
      <section className="py-16 border-b border-black bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500">
                The ePerfumeStore Difference
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                Why Pure Perfume Oils Outperform Traditional Alcohol Sprays
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                Commercial retail perfumes typically consist of <strong>80% to 90% perfumer alcohol</strong> (ethanol) and only 10-15% actual perfume essence. Alcohol evaporates rapidly into thin air, leaving you needing to reapply every 3 hours while drying out your skin.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-black" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">18-24 Hour Skin Sillage</h4>
                    <p className="text-xs text-neutral-600">
                      Our concentrated perfume oils bind directly with your skin lipids, releasing scent slowly as your body warms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-black" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">Zero Alcohol Harshness & Safe for Sensitive Skin</h4>
                    <p className="text-xs text-neutral-600">
                      No burning, redness, or allergic itching. Gentle, pure botanical formulations suitable for daily wear.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-black" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">Exceptional Value For Money</h4>
                    <p className="text-xs text-neutral-600">
                      A single 10ml concentrated oil roll-on delivers the equivalent longevity of a 100ml standard commercial eau de parfum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="border border-black px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  Read Our Perfumery Story
                </button>
              </div>
            </div>

            {/* Visual Box */}
            <div className="border-2 border-black p-8 bg-white space-y-6">
              <div className="text-center pb-6 border-b border-black">
                <img
                  src="/assets/aistudio/Firefly_Gemini_Flash_white_background_464260__1__221bda0c.png"
                  alt="ePerfumeStore Invercargill"
                  className="h-24 mx-auto object-contain mb-3"
                />
                <p className="text-xs uppercase tracking-widest font-mono text-neutral-600">
                  Shop 3/24 Leven Street, Invercargill 9810
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 border border-black bg-neutral-50">
                  <span className="font-serif text-3xl font-bold block">100%</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600">
                    Alcohol-Free Options
                  </span>
                </div>
                <div className="p-4 border border-black bg-neutral-50">
                  <span className="font-serif text-3xl font-bold block">$0</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600">
                    Delivery Fee NZ Wide
                  </span>
                </div>
                <div className="p-4 border border-black bg-neutral-50">
                  <span className="font-serif text-3xl font-bold block">35%+</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600">
                    Oil Concentration
                  </span>
                </div>
                <div className="p-4 border border-black bg-neutral-50">
                  <span className="font-serif text-3xl font-bold block">5.0 ★</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-600">
                    Google Reviews Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer & Google Reviews Section */}
      <section className="py-16 border-b border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 border border-black px-3 py-1 text-[11px] font-mono tracking-widest uppercase font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-black stroke-black" />
              <span>Google Reviews • 5.0 Star Rating</span>
            </div>
            <h2 className="font-serif text-3xl font-bold uppercase tracking-tight">
              Loved By Fragrance Connoisseurs Across NZ
            </h2>
            <p className="text-xs text-neutral-600 mt-2">
              Read real feedback from in-store boutique visitors in Invercargill and online customers across New Zealand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORE_GOOGLE_REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="border border-black p-6 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-black">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black stroke-black" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider border border-black px-1.5 py-0.5 font-bold font-mono">
                      Google Review
                    </span>
                  </div>

                  <p className="text-xs text-neutral-800 leading-relaxed font-sans mb-6">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <div>
                    <h5 className="font-bold text-black">{review.author}</h5>
                    <span className="text-[11px] text-neutral-500 font-mono">{review.city}</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('social')}
              className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-neutral-600 transition-colors cursor-pointer"
            >
              View More Reviews On Our Social Media & Google Business Page →
            </button>
          </div>
        </div>
      </section>

      {/* 7. Invercargill Showroom Invitation Banner */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-400">
                Invercargill Fragrance Showroom
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Experience Elegance In Person At 24 Leven Street
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans max-w-2xl">
                Located at Shop 3/24 Leven Street, Invercargill 9810. Sample our pure perfume oils, discover inspired olfactory comparisons, and find your signature scent. We also pack and dispatch online orders daily with free tracked delivery nationwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono">
                <span>Phone: 021 958 113</span>
                <span>•</span>
                <span>Email: eperfumestorenz@gmail.com</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-white text-black py-4 px-6 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition-colors text-center cursor-pointer"
              >
                Get Directions & Map
              </button>
              <button
                onClick={() => onNavigate('products', 'all')}
                className="w-full border border-white text-white py-4 px-6 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors text-center cursor-pointer"
              >
                Order Online (Free NZ Delivery)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
