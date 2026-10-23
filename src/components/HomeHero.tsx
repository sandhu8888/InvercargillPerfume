import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Truck, ShieldCheck } from 'lucide-react';
import { PageRoute, ProductCategory } from '../types';

interface HomeHeroProps {
  onNavigateToProducts: (category?: ProductCategory) => void;
}

interface Slide {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  offerBadge: string;
  image: string;
  ctaText: string;
  category: ProductCategory;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    tag: '100% PURE PERFUME OILS',
    title: 'Pure Fragrance Concentrates. Zero Alcohol.',
    subtitle: 'Experience 18-24 hour longevity with skin-kind concentrated perfume oils hand-poured in Invercargill. Free delivery NZ wide with no minimum spend.',
    offerBadge: 'OFFER: FREE DELIVERY NZ WIDE — NO MIN SPEND',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1600&q=85',
    ctaText: 'Shop Now',
    category: 'fragrances'
  },
  {
    id: 2,
    tag: 'ICONIC DESIGNER ESSENCES',
    title: 'Brand-Inspired Luxury Without The Markup',
    subtitle: 'Meticulously crafted formulations inspired by the world’s most coveted niche fragrance houses: Baccarat 540, Aventus, Santal 33, and Tobacco Vanille.',
    offerBadge: 'NEW ARRIVALS: 10ML EXTRAIT ROLL-ONS FROM $39',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1600&q=85',
    ctaText: 'Shop Now',
    category: 'all'
  },
  {
    id: 3,
    tag: 'INVERCARGILL FLAGSHIP STORE',
    title: 'Shop 3/24 Leven Street, Invercargill',
    subtitle: 'Visit our Southland fragrance boutique for custom scent consultations and sampling, or enjoy swift tracked courier delivery direct to your door.',
    offerBadge: 'BOUTIQUE PICKUP & NEXT-DAY DISPATCH AVAILABLE',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1600&q=85',
    ctaText: 'Shop Now',
    category: 'men'
  },
  {
    id: 4,
    tag: 'HOME & DIFFUSER COLLECTION',
    title: 'Sanctuary Reed Diffuser & Room Oils',
    subtitle: 'Transform your interior with high-density pure botanical diffuser oils that gently diffuse for up to 6 months without synthetic alcohol evaporates.',
    offerBadge: 'PROMOTION: DISCOVER SANCTUARY HOME OILS',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1600&q=85',
    ctaText: 'Shop Now',
    category: 'home'
  }
];

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigateToProducts }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      className="relative bg-white border-b border-black overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px] items-stretch">
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-12 lg:py-16 z-10 border-b lg:border-b-0 lg:border-r border-black">
            {/* Offer Tag */}
            <div className="inline-flex items-center gap-2 border border-black px-3.5 py-1 text-[11px] tracking-[0.2em] uppercase font-bold text-black mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{slide.offerBadge}</span>
            </div>

            {/* Slide Category Tag */}
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-600 mb-2">
              {slide.tag}
            </p>

            {/* Slide Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15] mb-4">
              {slide.title}
            </h1>

            {/* Slide Subtitle */}
            <p className="text-sm sm:text-base text-neutral-700 font-sans leading-relaxed max-w-xl mb-8">
              {slide.subtitle}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigateToProducts(slide.category)}
                className="inline-flex items-center justify-center gap-3 bg-black text-white hover:bg-neutral-800 px-8 py-4 text-xs uppercase tracking-[0.25em] font-bold transition-all shadow-md group cursor-pointer"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigateToProducts('all')}
                className="inline-flex items-center justify-center gap-2 border border-black hover:bg-black hover:text-white px-6 py-4 text-xs uppercase tracking-[0.2em] font-bold transition-all cursor-pointer"
              >
                <span>View All Fragrances</span>
              </button>
            </div>

            {/* Core Trust Badges */}
            <div className="pt-10 mt-8 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 shrink-0" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">Free NZ Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">Alcohol-Free</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">Invercargill Store</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Container */}
          <div className="lg:col-span-5 relative bg-neutral-100 flex items-center justify-center overflow-hidden min-h-[340px] lg:min-h-auto">
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Slide Index Counter */}
            <div className="absolute bottom-6 right-6 bg-white border border-black px-3 py-1.5 text-xs font-mono font-bold tracking-widest uppercase">
              0{slide.id} / 0{HERO_SLIDES.length}
            </div>

            {/* Slide Navigation Buttons */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators Strip */}
      <div className="border-t border-black bg-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(index)}
                className={`h-1.5 transition-all cursor-pointer ${
                  currentSlideIndex === index ? 'w-12 bg-black' : 'w-4 bg-neutral-300 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-[11px] tracking-widest uppercase text-neutral-600 font-medium">
            <span className="font-bold text-black">ePerfumeStore</span> • Shop 3/24 Leven Street, Invercargill
          </div>
        </div>
      </div>
    </section>
  );
};
