import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle, ShieldCheck, Truck, Lock, CreditCard, Building2, MapPin, Printer } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'shipping' | 'payment' | 'confirmed'>('details');

  // Customer Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    city: 'Invercargill',
    postcode: '9810',
    deliveryMethod: 'courier-free', // 'courier-free' | 'pickup-invercargill'
    paymentMethod: 'card', // 'card' | 'bank' | 'afterpay'
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '•••'
  });

  const [orderNumber, setOrderNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      setStep('shipping');
    } else if (step === 'shipping') {
      setStep('payment');
    } else if (step === 'payment') {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        const generatedId = `EP-${Math.floor(100000 + Math.random() * 900000)}`;
        setOrderNumber(generatedId);
        setStep('confirmed');
        onOrderCompleted();
      }, 1200);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white border-2 border-black w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-black flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold uppercase tracking-wider">
                {step === 'confirmed' ? 'Order Confirmed' : 'Secure NZ Checkout'}
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                256-Bit SSL Encrypted • ePerfumeStore NZ
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (when not confirmed) */}
        {step !== 'confirmed' && (
          <div className="grid grid-cols-3 border-b border-black text-center text-[10px] tracking-widest uppercase font-bold">
            <div className={`py-2 ${step === 'details' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'}`}>
              1. Address
            </div>
            <div className={`py-2 ${step === 'shipping' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'}`}>
              2. Delivery
            </div>
            <div className={`py-2 ${step === 'payment' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'}`}>
              3. Payment
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {step !== 'confirmed' ? (
            <form onSubmit={handleNextStep} className="space-y-6">
              {/* Step 1: Customer Contact & Address */}
              {step === 'details' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-sm font-bold uppercase tracking-wider pb-2 border-b border-neutral-200">
                    Customer & Delivery Address
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full border border-black p-2.5 text-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                        Email Address (for Order Updates) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.co.nz"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-black p-2.5 text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                        Phone Number (for Courier SMS) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="021 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-black p-2.5 text-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="12 Kelvin Street"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full border border-black p-2.5 text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                        Suburb
                      </label>
                      <input
                        type="text"
                        placeholder="Avenal"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="w-full border border-black p-2.5 text-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                        City / Town *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Invercargill"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full border border-black p-2.5 text-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="9810"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="w-full border border-black p-2.5 text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping Method */}
              {step === 'shipping' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-sm font-bold uppercase tracking-wider pb-2 border-b border-neutral-200">
                    Select Delivery Option
                  </h3>

                  <div className="space-y-3">
                    <label
                      className={`block p-4 border cursor-pointer transition-colors ${
                        formData.deliveryMethod === 'courier-free'
                          ? 'border-black bg-neutral-50 shadow-sm'
                          : 'border-neutral-300 hover:border-black'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="courier-free"
                          checked={formData.deliveryMethod === 'courier-free'}
                          onChange={() => setFormData({ ...formData, deliveryMethod: 'courier-free' })}
                          className="mt-1 accent-black"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-xs uppercase tracking-wider">
                              NZ Wide Express Courier (Tracked)
                            </span>
                            <span className="font-bold text-xs bg-black text-white px-2 py-0.5 uppercase tracking-wider">
                              FREE ($0.00)
                            </span>
                          </div>
                          <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                            No minimum spend. Delivered directly to your door anywhere in New Zealand via CourierPost / NZ Post. Dispatched from Invercargill within 24h.
                          </p>
                        </div>
                      </div>
                    </label>

                    <label
                      className={`block p-4 border cursor-pointer transition-colors ${
                        formData.deliveryMethod === 'pickup-invercargill'
                          ? 'border-black bg-neutral-50 shadow-sm'
                          : 'border-neutral-300 hover:border-black'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="pickup-invercargill"
                          checked={formData.deliveryMethod === 'pickup-invercargill'}
                          onChange={() => setFormData({ ...formData, deliveryMethod: 'pickup-invercargill' })}
                          className="mt-1 accent-black"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-xs uppercase tracking-wider">
                              In-Store Click & Collect (Invercargill)
                            </span>
                            <span className="font-bold text-xs bg-black text-white px-2 py-0.5 uppercase tracking-wider">
                              FREE ($0.00)
                            </span>
                          </div>
                          <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                            Collect in person at Shop 3/24 Leven Street, Invercargill 9810. Ready within 2 hours during store opening hours.
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Method */}
              {step === 'payment' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-sm font-bold uppercase tracking-wider pb-2 border-b border-neutral-200">
                    Payment Method
                  </h3>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-3 border text-center transition-all cursor-pointer ${
                        formData.paymentMethod === 'card'
                          ? 'border-black bg-black text-white font-bold'
                          : 'border-neutral-300 hover:border-black'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 mx-auto mb-1" />
                      <span className="text-[11px] uppercase tracking-wider block">Credit / Debit Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                      className={`p-3 border text-center transition-all cursor-pointer ${
                        formData.paymentMethod === 'bank'
                          ? 'border-black bg-black text-white font-bold'
                          : 'border-neutral-300 hover:border-black'
                      }`}
                    >
                      <Building2 className="w-4 h-4 mx-auto mb-1" />
                      <span className="text-[11px] uppercase tracking-wider block">NZ Bank / POLi</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'afterpay' })}
                      className={`p-3 border text-center transition-all cursor-pointer ${
                        formData.paymentMethod === 'afterpay'
                          ? 'border-black bg-black text-white font-bold'
                          : 'border-neutral-300 hover:border-black'
                      }`}
                    >
                      <span className="font-serif font-bold text-sm block">4x</span>
                      <span className="text-[11px] uppercase tracking-wider block">Afterpay NZ</span>
                    </button>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="p-4 border border-black space-y-3 bg-neutral-50">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          defaultValue="•••• •••• •••• 4242"
                          className="w-full border border-black p-2.5 text-xs bg-white font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            defaultValue="12/28"
                            className="w-full border border-black p-2.5 text-xs bg-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider mb-1">
                            Security CVC
                          </label>
                          <input
                            type="text"
                            defaultValue="888"
                            className="w-full border border-black p-2.5 text-xs bg-white font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'bank' && (
                    <div className="p-4 border border-black space-y-2 bg-neutral-50 text-xs">
                      <p className="font-bold uppercase tracking-wider">New Zealand Direct Bank Deposit:</p>
                      <p className="font-mono text-neutral-800">Account Name: ePerfumeStore NZ Ltd</p>
                      <p className="font-mono text-neutral-800">Account Number: 02-0924-0348211-000</p>
                      <p className="font-mono text-neutral-800">Bank: Bank of New Zealand (BNZ)</p>
                      <p className="text-[11px] text-neutral-600 mt-2">
                        Use your order number as payment reference. Orders dispatched upon receipt.
                      </p>
                    </div>
                  )}

                  {formData.paymentMethod === 'afterpay' && (
                    <div className="p-4 border border-black bg-neutral-50 text-xs space-y-1">
                      <p className="font-bold uppercase tracking-wider">Pay in 4 interest-free payments:</p>
                      <p className="font-mono text-neutral-800">
                        4 fortnightly payments of ${(subtotal / 4).toFixed(2)} NZD
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Order Summary Recap */}
              <div className="pt-4 border-t border-neutral-200">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-mono font-bold">${subtotal.toFixed(2)} NZD</span>
                </div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-neutral-600">NZ Wide Delivery</span>
                  <span className="font-bold text-black uppercase tracking-wider">FREE ($0.00)</span>
                </div>
                <div className="flex justify-between items-center text-base font-bold pt-2 border-t border-black">
                  <span className="font-serif">Total Due:</span>
                  <span className="font-serif text-lg">${subtotal.toFixed(2)} NZD</span>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-2">
                {step !== 'details' && (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === 'payment') setStep('shipping');
                      if (step === 'shipping') setStep('details');
                    }}
                    className="border border-black px-5 py-3 text-xs uppercase tracking-wider font-bold hover:bg-neutral-100 cursor-pointer"
                  >
                    Back
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="ml-auto bg-black text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Securing Order...</span>
                  ) : step === 'payment' ? (
                    <span>Complete Order (${subtotal.toFixed(2)} NZD)</span>
                  ) : (
                    <span>Continue to {step === 'details' ? 'Delivery' : 'Payment'}</span>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Order Confirmed View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 border-2 border-black mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10 stroke-[1.5]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono block mb-1">
                  Payment Successful & Verified
                </span>
                <h3 className="font-serif text-2xl font-bold tracking-tight">
                  Thank You For Your Order!
                </h3>
                <p className="text-sm font-mono font-bold mt-1 text-black">
                  Order Reference: {orderNumber}
                </p>
              </div>

              <div className="p-4 border border-black bg-neutral-50 text-left space-y-3 text-xs max-w-lg mx-auto">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500 uppercase tracking-wider">Dispatched From:</span>
                  <span className="font-semibold text-right">Shop 3/24 Leven St, Invercargill 9810</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500 uppercase tracking-wider">Recipient:</span>
                  <span className="font-semibold">{formData.fullName || 'Customer'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500 uppercase tracking-wider">Delivery Destination:</span>
                  <span className="font-semibold">{formData.address}, {formData.city}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500 uppercase tracking-wider">Shipping Status:</span>
                  <span className="font-bold text-black">FREE NZ WIDE COURIER</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-bold">
                  <span>Total Amount Paid:</span>
                  <span className="font-mono">${subtotal.toFixed(2)} NZD</span>
                </div>
              </div>

              <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                A confirmation receipt and tracking link have been dispatched to{' '}
                <strong className="text-black">{formData.email || 'your email'}</strong>. For any inquiries, contact our Invercargill team at{' '}
                <a href="mailto:eperfumestorenz@gmail.com" className="underline font-bold text-black">
                  eperfumestorenz@gmail.com
                </a>{' '}
                or call{' '}
                <a href="tel:021958113" className="underline font-bold text-black">
                  021 958 113
                </a>.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={handlePrint}
                  className="border border-black px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-neutral-100 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-black text-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
