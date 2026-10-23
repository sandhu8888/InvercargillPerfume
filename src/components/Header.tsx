import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { PageRoute, ProductCategory } from '../types';

interface HeaderProps {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  selectedCategory: ProductCategory;
  setSelectedCategory: (cat: ProductCategory) => void;
  cartCount: number;
  openCart: () => void;
  openSearch: () => void;
  wishlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  openCart,
  openSearch,
  wishlistCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageRoute, category?: ProductCategory) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-black">
      {/* Top Notification Announcement Bar */}
      <div className="bg-black text-white text-xs tracking-widest uppercase py-2 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] md:text-xs">
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Shop 3/24 Leven St, Invercargill
            </span>
            <span className="text-neutral-500">|</span>
            <a href="tel:021958113" className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3 h-3" />
              021 958 113
            </a>
          </div>

          <div className="mx-auto md:mx-0 font-semibold tracking-wider">
            FREE DELIVERY NZ WIDE — NO MINIMUM SPEND
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="mailto:eperfumestorenz@gmail.com" className="flex items-center gap-1.5 hover:underline">
              <Mail className="w-3 h-3" />
              eperfumestorenz@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Logo Section - Focused on Centered, Beautifully Scaled Logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left Action / Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black hover:bg-neutral-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex flex-col text-left">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-600">
                Invercargill Boutique
              </span>
              <span className="text-xs tracking-wider uppercase font-medium">
                100% Alcohol-Free Perfumes
              </span>
            </div>
          </div>

          {/* Centered Logo - Scaled and Centered Perfectly */}
          <div className="flex flex-col items-center justify-center text-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex flex-col items-center group cursor-pointer focus:outline-none"
              title="ePerfumeStore Invercargill"
            >
              <img
                src="/assets/aistudio/Firefly_Gemini_Flash_white_background_464260__1__221bda0c.png"
                alt="ePerfumeStore Logo - Elegance in Every Drop"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
          </div>

          {/* Right Action Icons (Search, Bag) */}
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <button
              onClick={openSearch}
              className="p-2 text-black hover:bg-neutral-100 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Search fragrances"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
              <span className="hidden sm:inline text-xs tracking-wider uppercase font-medium">Search</span>
            </button>

            <button
              onClick={openCart}
              className="relative p-2 text-black hover:bg-neutral-100 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <span className="hidden sm:inline text-xs tracking-wider uppercase font-medium">Bag</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 bg-black text-white text-[11px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:block border-t border-black bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 lg:gap-12 py-3 text-xs tracking-[0.2em] uppercase font-medium">
            <li>
              <button
                onClick={() => handleNavClick('home')}
                className={`py-1 transition-all relative ${
                  currentPage === 'home'
                    ? 'font-bold border-b-2 border-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Home
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={() => handleNavClick('products', 'all')}
                className={`py-1 transition-all flex items-center gap-1 ${
                  currentPage === 'products'
                    ? 'font-bold border-b-2 border-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Products
              </button>
              {/* Desktop Subcategory Dropdown Bar */}
              <div className="hidden group-hover:flex absolute left-1/2 -translate-x-1/2 top-full bg-white border border-black shadow-xl py-2 px-3 min-w-[200px] flex-col z-50">
                <button
                  onClick={() => handleNavClick('products', 'all')}
                  className="text-left px-3 py-1.5 text-[11px] tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
                >
                  All Products
                </button>
                <button
                  onClick={() => handleNavClick('products', 'men')}
                  className="text-left px-3 py-1.5 text-[11px] tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
                >
                  For Men
                </button>
                <button
                  onClick={() => handleNavClick('products', 'women')}
                  className="text-left px-3 py-1.5 text-[11px] tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
                >
                  For Women
                </button>
                <button
                  onClick={() => handleNavClick('products', 'home')}
                  className="text-left px-3 py-1.5 text-[11px] tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
                >
                  For Home
                </button>
                <button
                  onClick={() => handleNavClick('products', 'fragrances')}
                  className="text-left px-3 py-1.5 text-[11px] tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
                >
                  Fragrances
                </button>
              </div>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('about')}
                className={`py-1 transition-all ${
                  currentPage === 'about'
                    ? 'font-bold border-b-2 border-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className={`py-1 transition-all ${
                  currentPage === 'contact'
                    ? 'font-bold border-b-2 border-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('social')}
                className={`py-1 transition-all ${
                  currentPage === 'social'
                    ? 'font-bold border-b-2 border-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                Social Media
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-white h-full flex flex-col p-6 overflow-y-auto border-r border-black shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-black">
              <span className="font-serif text-sm tracking-widest font-bold uppercase">
                ePerfumeStore
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-black hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-6 flex flex-col gap-4 text-sm tracking-widest uppercase font-medium">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left py-2 border-b border-neutral-200 ${
                  currentPage === 'home' ? 'font-bold pl-2 border-l-2 border-l-black' : ''
                }`}
              >
                Home
              </button>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick('products', 'all')}
                  className={`text-left py-2 border-b border-neutral-200 flex justify-between items-center ${
                    currentPage === 'products' ? 'font-bold pl-2 border-l-2 border-l-black' : ''
                  }`}
                >
                  <span>Products</span>
                </button>
                <div className="pl-4 flex flex-col gap-2 text-xs tracking-wider text-neutral-600">
                  <button
                    onClick={() => handleNavClick('products', 'all')}
                    className="text-left py-1 hover:text-black"
                  >
                    • All Products
                  </button>
                  <button
                    onClick={() => handleNavClick('products', 'men')}
                    className="text-left py-1 hover:text-black"
                  >
                    • For Men
                  </button>
                  <button
                    onClick={() => handleNavClick('products', 'women')}
                    className="text-left py-1 hover:text-black"
                  >
                    • For Women
                  </button>
                  <button
                    onClick={() => handleNavClick('products', 'home')}
                    className="text-left py-1 hover:text-black"
                  >
                    • For Home
                  </button>
                  <button
                    onClick={() => handleNavClick('products', 'fragrances')}
                    className="text-left py-1 hover:text-black"
                  >
                    • Fragrances
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('about')}
                className={`text-left py-2 border-b border-neutral-200 ${
                  currentPage === 'about' ? 'font-bold pl-2 border-l-2 border-l-black' : ''
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left py-2 border-b border-neutral-200 ${
                  currentPage === 'contact' ? 'font-bold pl-2 border-l-2 border-l-black' : ''
                }`}
              >
                Contact Us
              </button>

              <button
                onClick={() => handleNavClick('social')}
                className={`text-left py-2 border-b border-neutral-200 ${
                  currentPage === 'social' ? 'font-bold pl-2 border-l-2 border-l-black' : ''
                }`}
              >
                Social Media
              </button>
            </div>

            <div className="mt-auto pt-6 border-t border-black text-xs space-y-2">
              <p className="font-semibold uppercase tracking-wider text-black">Invercargill Boutique</p>
              <p className="text-neutral-700">Shop 3/24 Leven Street, Invercargill 9810</p>
              <p className="text-neutral-700">021 958 113</p>
              <p className="text-neutral-700">eperfumestorenz@gmail.com</p>
              <div className="pt-2">
                <span className="inline-block bg-black text-white px-3 py-1 text-[10px] tracking-widest uppercase font-semibold">
                  Free Delivery NZ Wide
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
