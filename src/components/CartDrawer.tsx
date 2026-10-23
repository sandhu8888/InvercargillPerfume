import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white h-full flex flex-col border-l-2 border-black shadow-2xl relative">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-serif text-lg font-bold uppercase tracking-wider">
              Your Fragrance Bag
            </h2>
            <span className="text-xs font-mono font-bold bg-black text-white px-2 py-0.5">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-100 transition-colors border border-black cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free NZ Wide Delivery Notice Banner */}
        <div className="bg-neutral-100 border-b border-black py-2.5 px-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-black">
          <Truck className="w-4 h-4 shrink-0" />
          <span>Free Delivery NZ Wide • No Minimum Spend</span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <ShoppingBag className="w-12 h-12 stroke-[1] mx-auto text-neutral-400" />
              <h3 className="font-serif text-base uppercase tracking-wider font-bold">
                Your Bag Is Currently Empty
              </h3>
              <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                Explore our pure perfume oils and luxury brand-inspired fragrance extraits.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedVolume}-${index}`}
                className="border border-black p-3.5 flex gap-3.5 bg-white relative"
              >
                {/* Product Image */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover border border-neutral-200 shrink-0"
                />

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {item.product.inspiredBy && (
                      <span className="text-[10px] text-neutral-500 font-mono uppercase block line-clamp-1">
                        {item.product.inspiredBy}
                      </span>
                    )}
                    <h4 className="font-serif text-sm font-bold text-black leading-snug">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-neutral-600 mt-0.5">
                      {item.selectedVolume}
                    </p>
                  </div>

                  {/* Quantity & Price Row */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-100">
                    <div className="flex items-center border border-black">
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs hover:bg-neutral-100 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-mono font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs hover:bg-neutral-100 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-sm font-bold text-black">
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                      <span className="text-[10px] text-neutral-500 block font-mono">NZD</span>
                    </div>
                  </div>
                </div>

                {/* Remove Item Button */}
                <button
                  onClick={() => onRemoveItem(index)}
                  className="absolute top-2 right-2 text-neutral-400 hover:text-black p-1 transition-colors cursor-pointer"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Trigger */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-6 border-t-2 border-black bg-white space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal (GST Included)</span>
                <span className="font-mono">${subtotal.toFixed(2)} NZD</span>
              </div>
              <div className="flex justify-between text-black font-semibold">
                <span>Shipping (NZ Wide Courier)</span>
                <span className="uppercase tracking-wider font-bold">FREE ($0.00)</span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2 border-t border-neutral-200">
                <span className="font-serif">Total</span>
                <span className="font-serif text-lg font-bold">${subtotal.toFixed(2)} NZD</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-neutral-600 pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Dispatched from Shop 3/24 Leven St, Invercargill</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full bg-black text-white py-4 px-6 text-xs uppercase tracking-[0.25em] font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-md"
            >
              <span>Proceed to Secure Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
