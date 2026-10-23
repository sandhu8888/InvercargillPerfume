import React from 'react';
import { PageRoute, ProductCategory } from '../types';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Truck, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute, category?: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white text-black border-t-2 border-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Value Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-black text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 border border-black flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold">Free Delivery NZ Wide</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Zero minimum spend required. Fast courier dispatch across North & South Island.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 border border-black flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold">100% Pure Perfume Oils</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Alcohol-free, skin-kind concentrates. Formulated for intense 14-24hr longevity.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 border border-black flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold">Invercargill Boutique</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Shop 3/24 Leven Street. Genuine New Zealand owned boutique perfumery.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-b border-black">
          {/* Brand & Centered Logo Accent */}
          <div className="space-y-4">
            <img
              src="/assets/aistudio/Firefly_Gemini_Flash_white_background_464260__1__221bda0c.png"
              alt="ePerfumeStore Logo"
              className="h-20 w-auto object-contain"
            />
            <p className="text-xs text-neutral-700 leading-relaxed font-sans">
              ePerfumeStore specializes in pure perfume oils, non-alcoholic fragrances, and world-class brand-inspired luxury scents with an uncompromising commitment to longevity and skin health.
            </p>
            <div className="pt-2">
              <span className="inline-block border border-black px-3 py-1 text-[10px] tracking-widest uppercase font-bold">
                Elegance In Every Drop
              </span>
            </div>
          </div>

          {/* Fragrance Collections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b border-black mb-4">
              Fragrance Collections
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('products', 'all')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'men')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  For Men
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'women')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  For Women
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'home')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  For Home (Reed & Room Oils)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'fragrances')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  Pure Perfume Oils & Extrait
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b border-black mb-4">
              Explore & Connect
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  About Our Perfumery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  Contact Us & Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('social')}
                  className="hover:underline hover:font-semibold text-neutral-800"
                >
                  Social Media Hub
                </button>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=24+Leven+Street+Invercargill+9810+New+Zealand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:font-semibold text-neutral-800 inline-block"
                >
                  Google Maps Location & Reviews ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Store Location & Contacts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b border-black mb-4">
              Invercargill Boutique
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Shop 3/24 Leven Street<br />
                  Invercargill 9810, Southland, New Zealand
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:021958113" className="hover:underline font-medium">
                  021 958 113
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:eperfumestorenz@gmail.com" className="hover:underline font-medium">
                  eperfumestorenz@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-neutral-600">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Fri: 10:00 AM – 5:30 PM</p>
                  <p>Saturday: 10:00 AM – 5:00 PM</p>
                  <p>Sunday: 11:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Shipping Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-600 gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} ePerfumeStore. All Rights Reserved. Pure Perfume Oils & Non-Alcoholic Fragrances.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] uppercase tracking-wider">
            <span>Free Delivery NZ Wide</span>
            <span>•</span>
            <span>Shop 3/24 Leven St, Invercargill</span>
            <span>•</span>
            <span>Secure NZ Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
