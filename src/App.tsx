import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { PRODUCTS } from './data/products';
import { Product, PageRoute, ProductCategory, CartItem } from './types';
import { Check, ShoppingBag, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('eperfume_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toast notification for Add to Bag
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('eperfume_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToCart = (product: Product, volume: string, price: number, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedVolume === volume
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            product,
            selectedVolume: volume,
            quantity,
            unitPrice: price
          }
        ];
      }
    });

    showToast(`Added ${quantity}x "${product.name}" (${volume}) to bag.`);
  };

  const handleBuyNow = (product: Product, volume: string, price: number, quantity: number = 1) => {
    handleAddToCart(product, volume, price, quantity);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  const navigateTo = (page: PageRoute, category?: ProductCategory) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-4 py-3 border border-white shadow-2xl flex items-center gap-3 text-xs uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-200">
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span className="font-medium">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="underline font-bold ml-2 hover:text-neutral-300 cursor-pointer"
          >
            View Bag
          </button>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 hover:text-neutral-400 cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        openSearch={() => setIsSearchOpen(true)}
        wishlistCount={0}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            products={PRODUCTS}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p, vol, price) => handleAddToCart(p, vol, price)}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p, vol, price) => handleAddToCart(p, vol, price)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'social' && (
          <SocialMediaPage />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />
    </div>
  );
}
