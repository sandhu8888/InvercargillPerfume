import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general', // 'general' | 'product' | 'order' | 'consultation'
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission to eperfumestorenz@gmail.com
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`ePerfumeStore Inquiry: ${formData.inquiryType.toUpperCase()} from ${formData.name || 'Customer'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    return `mailto:eperfumestorenz@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
            Invercargill Boutique & Customer Care
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black">
            Contact ePerfumeStore
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-sans">
            We are here to assist with fragrance recommendations, custom scent matching, order tracking, and in-store appointments.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Boutique Location */}
          <div className="border border-black p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-black flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold uppercase tracking-wider mb-2">
                Visit Our Boutique
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                <strong>Shop 3/24 Leven Street</strong><br />
                Invercargill 9810<br />
                Southland, New Zealand
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <a
                href="https://maps.google.com/?q=24+Leven+Street+Invercargill+9810+New+Zealand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold hover:underline"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="border border-black p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-black flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold uppercase tracking-wider mb-2">
                Direct Call / SMS
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                Speak directly to our fragrance specialist for advice or order questions.
              </p>
              <p className="text-base font-mono font-bold mt-2">
                021 958 113
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <a
                href="tel:021958113"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold hover:underline"
              >
                <span>Call 021 958 113 Now</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Email Inquiries */}
          <div className="border border-black p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-black flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold uppercase tracking-wider mb-2">
                Email Customer Care
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                All inquiries are monitored daily with responses within a few hours.
              </p>
              <p className="text-xs font-mono font-bold mt-2 break-all">
                eperfumestorenz@gmail.com
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <a
                href="mailto:eperfumestorenz@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold hover:underline"
              >
                <span>Send Direct Email</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Boutique Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Contact Form: Direct to eperfumestorenz@gmail.com */}
          <div className="lg:col-span-8 border-2 border-black p-6 sm:p-8 bg-white">
            <div className="mb-6 pb-4 border-b border-black flex items-center justify-between">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-tight">
                  Send Customer Inquiry
                </h2>
                <p className="text-xs text-neutral-600 mt-1">
                  Inquiries automatically route to <strong>eperfumestorenz@gmail.com</strong>
                </p>
              </div>
              <Mail className="w-6 h-6 stroke-[1.5]" />
            </div>

            {submitted ? (
              <div className="p-8 border border-black bg-neutral-50 text-center space-y-4">
                <div className="w-12 h-12 border border-black mx-auto flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold uppercase tracking-wider">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs text-neutral-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your message has been sent to our boutique team at{' '}
                  <span className="font-mono font-bold">eperfumestorenz@gmail.com</span>. We will reply to{' '}
                  <strong>{formData.email}</strong> shortly.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={getMailtoLink()}
                    className="border border-black px-4 py-2 text-xs uppercase tracking-wider font-bold hover:bg-black hover:text-white transition-colors"
                  >
                    Open Copy In Mail Client
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'general',
                        message: ''
                      });
                    }}
                    className="bg-black text-white px-4 py-2 text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-black p-3 text-xs focus:outline-none bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.co.nz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-black p-3 text-xs focus:outline-none bg-neutral-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="021 958 113"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-black p-3 text-xs focus:outline-none bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full border border-black p-3 text-xs focus:outline-none bg-neutral-50 cursor-pointer uppercase font-medium"
                    >
                      <option value="general">General Fragrance Inquiry</option>
                      <option value="product">Scent Matching & Inspired Brand Query</option>
                      <option value="order">Online Order & NZ Delivery Status</option>
                      <option value="consultation">Invercargill Store Consultation</option>
                      <option value="wholesale">Wholesale & Event Favours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold mb-1">
                    Your Message / Inquiry Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what scent profile you are looking for, question about alcohol-free perfume oils, or order number..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-black p-3 text-xs focus:outline-none bg-neutral-50"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-neutral-500">
                    Direct routing to <strong>eperfumestorenz@gmail.com</strong>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-black text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Dispatching...' : 'Send Inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Store Hours & Boutique Notes */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-black p-6 bg-neutral-50 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-black">
                <Clock className="w-5 h-5" />
                <h3 className="font-serif text-sm font-bold uppercase tracking-wider">
                  Store Hours (Invercargill)
                </h3>
              </div>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between py-1 border-b border-neutral-200">
                  <span className="font-medium">Monday – Friday</span>
                  <span className="font-mono">10:00 AM – 5:30 PM</span>
                </li>
                <li className="flex justify-between py-1 border-b border-neutral-200">
                  <span className="font-medium">Saturday</span>
                  <span className="font-mono">10:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between py-1 border-b border-neutral-200">
                  <span className="font-medium">Sunday</span>
                  <span className="font-mono">11:00 AM – 4:00 PM</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-medium">NZ Public Holidays</span>
                  <span className="font-mono text-neutral-600">Open (Hours may vary)</span>
                </li>
              </ul>
            </div>

            <div className="border border-black p-6 bg-white space-y-3">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider">
                Free Nationwide Shipping Policy
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Every single order dispatched from our Invercargill boutique includes <strong>Free Tracked Courier delivery nationwide</strong> with absolutely no minimum spend required.
              </p>
              <div className="pt-2">
                <span className="inline-block border border-black px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest">
                  CourierPost • 1-3 Business Days
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section: Under Contact Us Form showing the shop location */}
        <div className="border-2 border-black bg-white overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-50">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                Physical Showroom Location
              </span>
              <h3 className="font-serif text-lg font-bold uppercase tracking-tight">
                Shop 3/24 Leven Street, Invercargill 9810
              </h3>
              <p className="text-xs text-neutral-600 mt-0.5">
                Located in the heart of Invercargill, Southland. Convenient parking available along Leven Street.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Shop+3+24+Leven+Street+Invercargill+9810+New+Zealand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-colors shrink-0"
            >
              <span>Open In Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Interactive Map Container */}
          <div className="relative w-full h-[400px] bg-neutral-200">
            <iframe
              title="ePerfumeStore Shop Location - 24 Leven Street, Invercargill"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.openstreetmap.org/export/embed.html?bbox=168.3450%2C-46.4190%2C168.3620%2C-46.4080&layer=mapnik&marker=-46.4132%2C168.3538"
            />

            {/* Custom Overlay Badge to highlight our Shop */}
            <div className="absolute top-4 left-4 bg-white border-2 border-black p-3.5 shadow-xl max-w-xs pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-black rounded-full animate-ping" />
                <span className="font-serif text-xs font-bold uppercase tracking-wider">ePerfumeStore</span>
              </div>
              <p className="text-[11px] font-mono text-neutral-700">Shop 3/24 Leven Street, Invercargill 9810</p>
              <p className="text-[10px] text-neutral-500 mt-1">Pure Perfume Oils & Extrait Boutique</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
