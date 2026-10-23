import React from 'react';
import { PageRoute, ProductCategory } from '../types';
import { Droplet, Sparkles, ShieldCheck, Truck, MapPin, Heart, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute, category?: ProductCategory) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 block mb-2">
            Invercargill, Southland • Established in New Zealand
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-black leading-tight">
            Elegance In Every Drop
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-4 font-sans leading-relaxed">
            Welcome to ePerfumeStore. We are an artisanal fragrance house based at <strong>Shop 3/24 Leven Street, Invercargill</strong>, dedicated to redefining personal fragrance through pure concentrated perfume oils, 100% alcohol-free formulations, and luxury brand-inspired masterpieces.
          </p>
        </div>

        {/* Centered Brand Mark Feature */}
        <div className="border border-black p-8 sm:p-12 mb-16 bg-neutral-50 flex flex-col items-center text-center">
          <img
            src="/assets/aistudio/Firefly_Gemini_Flash_white_background_464260__1__221bda0c.png"
            alt="ePerfumeStore Elegance In Every Drop"
            className="h-28 sm:h-36 w-auto object-contain mb-6"
          />
          <h2 className="font-serif text-2xl font-bold uppercase tracking-wider max-w-xl">
            Pure Perfume Oils. Non-Alcoholic. Uncompromising Longevity.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 max-w-2xl mt-3 font-sans leading-relaxed">
            Every bottle we hand-pour in our Invercargill boutique represents a revolt against overpriced commercial perfumes that dilute mere drops of scent in 80% to 90% drying alcohol.
          </p>
        </div>

        {/* The 4 Core Brand Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border border-black p-8 bg-white space-y-4">
            <div className="w-12 h-12 border border-black flex items-center justify-center">
              <Droplet className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider">
              1. 100% Pure Concentrated Perfume Oils
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
              Unlike standard commercial Eau de Parfum which evaporates in thin air within 3 to 4 hours, our pure concentrated perfume oils absorb gracefully into your skin. Activated by your body heat, they project a mesmerizing, smooth sillage that endures for 18 to 24 hours.
            </p>
          </div>

          <div className="border border-black p-8 bg-white space-y-4">
            <div className="w-12 h-12 border border-black flex items-center justify-center">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider">
              2. Alcohol-Free & Skin-Kind Formulations
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
              Traditional perfumer alcohol dehydrates skin, causes redness, and can trigger contact dermatitis or migraines. Our 100% alcohol-free concentrates use nourishing carrier lipids that moisturize your pulse points while delivering pure aromatic intensity.
            </p>
          </div>

          <div className="border border-black p-8 bg-white space-y-4">
            <div className="w-12 h-12 border border-black flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider">
              3. Precision Brand-Inspired Fragrances
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
              We recreate the precise olfactory pyramids of iconic niche and designer creations—from Baccarat Rouge 540, Creed Aventus, and Santal 33 to Tobacco Vanille and Sauvage Elixir. Enjoy world-class luxury notes without the $400+ designer brand inflation.
            </p>
          </div>

          <div className="border border-black p-8 bg-white space-y-4">
            <div className="w-12 h-12 border border-black flex items-center justify-center">
              <Truck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider">
              4. Free Delivery NZ Wide • No Minimum Spend
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
              Whether you order a single 10ml concentrated roll-on to Bluff, Queenstown, or Auckland, shipping is on us. We pack every parcel with protective eco-friendly cushioning and dispatch promptly via tracked courier across New Zealand.
            </p>
          </div>
        </div>

        {/* The Invercargill Story */}
        <div className="border-2 border-black p-8 sm:p-12 mb-16 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500">
                Southland Heritage
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                Our Invercargill Flagship Store
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                Located at <strong>Shop 3/24 Leven Street, Invercargill 9810</strong>, our boutique serves as the physical heart of ePerfumeStore. Here, fragrance enthusiasts can experience our complete library of pure perfume oils, sample top notes on testing strips, and receive personalized scent layering consultations.
              </p>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                Can't make it to Southland? Our digital storefront brings the full boutique experience directly to your doorstep with interactive notes breakdown, verified Google reviews, and direct WhatsApp consultations.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                <span className="border border-black px-3 py-1 font-bold">Shop 3/24 Leven St</span>
                <span className="border border-black px-3 py-1 font-bold">Call: 021 958 113</span>
                <span className="border border-black px-3 py-1 font-bold">eperfumestorenz@gmail.com</span>
              </div>
            </div>

            <div className="lg:col-span-5 border border-black p-6 bg-neutral-50 space-y-4 text-center">
              <h4 className="font-serif text-lg font-bold uppercase tracking-wider">
                Our Quality Standards
              </h4>
              <ul className="text-xs space-y-2 text-left text-neutral-800">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span>35% - 40% Extrait Concentration in all pure oils</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span>Zero alcohol dilution or chemical burning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span>Medical-grade stainless steel roller balls</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span>Proudly New Zealand owned and operated</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Visit Or Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold uppercase tracking-wider">
            Ready To Discover Your Signature Oil?
          </h3>
          <p className="text-xs text-neutral-600 max-w-md mx-auto">
            Browse our curated collections for men, women, fragrances, and home diffuser oils.
          </p>
          <button
            onClick={() => onNavigate('products', 'all')}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-neutral-800 transition-colors cursor-pointer shadow-md"
          >
            <span>Explore Fragrance Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
