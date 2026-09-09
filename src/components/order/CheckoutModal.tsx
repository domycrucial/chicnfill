import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CustomerOrderDetails, PaymentMethod } from '../../types';
import { restaurantConfig } from '../../data/restaurant';
import { formatPriceTSh, generateWhatsAppOrderUrl } from '../../utils/formatters';
import { 
  X, 
  Bike, 
  ShoppingBag, 
  Utensils, 
  MessageCircle, 
  Phone, 
  CreditCard, 
  Banknote, 
  Smartphone, 
  CheckCircle2, 
  AlertCircle,
  MapPin,
  Clock
} from 'lucide-react';

interface CheckoutModalProps {
  onOrderSuccess: (details: CustomerOrderDetails, orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ onOrderSuccess }) => {
  const { 
    items, 
    subtotal, 
    orderType, 
    setOrderType, 
    isCheckoutOpen, 
    setIsCheckoutOpen,
    clearCart
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryLandmark, setDeliveryLandmark] = useState('');
  const [pickupTime, setPickupTime] = useState('As soon as ready (approx 15-20 min)');
  const [tableNumber, setTableNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mobile-money');
  const [orderNotes, setOrderNotes] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!customerName.trim()) {
      newErrors.customerName = 'Please enter your full name';
    }
    if (!phone.trim() || phone.trim().length < 9) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 0659 263 416)';
    }
    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Please enter your delivery street or area in Arusha';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    const details: CustomerOrderDetails = {
      customerName,
      phone,
      orderType,
      deliveryAddress,
      deliveryLandmark,
      pickupTime,
      tableNumber,
      paymentMethod,
      orderNotes,
    };

    const orderId = `CNF-${Math.floor(1000 + Math.random() * 9000)}`;
    const url = generateWhatsAppOrderUrl(items, details, subtotal);

    // Open WhatsApp
    window.open(url, '_blank');

    setIsSubmitting(true);
    setTimeout(() => {
      clearCart();
      setIsCheckoutOpen(false);
      onOrderSuccess(details, orderId);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div
      id="checkout-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="relative w-full max-w-xl bg-[#181818] border border-[#333333] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 border-b border-[#262626] bg-[#1C1C1C] flex items-center justify-between">
          <div>
            <h2 id="checkout-modal-title" className="font-heading font-black text-xl text-white">
              Complete Your Order
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              CHIC N FILL • Pangani St, Arusha ({items.length} items • {formatPriceTSh(subtotal)})
            </p>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-[#262626]"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmitWhatsApp} className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Order Type Toggle */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              1. Service Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { type: 'delivery' as const, label: 'Delivery', icon: Bike, desc: 'To your location' },
                { type: 'pickup' as const, label: 'Pickup', icon: ShoppingBag, desc: 'Pangani St' },
                { type: 'dine-in' as const, label: 'Dine-In', icon: Utensils, desc: 'Table seating' },
              ].map((opt) => {
                const Icon = opt.icon;
                const active = orderType === opt.type;
                return (
                  <button
                    type="button"
                    key={opt.type}
                    onClick={() => setOrderType(opt.type)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      active
                        ? 'bg-[#F4B400]/15 border-[#F4B400] text-white'
                        : 'bg-[#222222] border-[#333333] text-neutral-400 hover:border-neutral-500'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${active ? 'text-[#F4B400]' : 'text-neutral-400'}`} />
                    <span className="text-xs font-bold text-white">{opt.label}</span>
                    <span className="text-[10px] text-neutral-400">{opt.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 pt-4 border-t border-[#262626]">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              2. Customer Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g., Baraka Mushi"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#222222] border border-[#333333] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B400]"
                />
                {errors.customerName && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.customerName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1">
                  Phone Number <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g., 0659 263 416"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#222222] border border-[#333333] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B400]"
                />
                {errors.phone && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Specific Order Type Fields */}
          {orderType === 'delivery' && (
            <div className="space-y-3 pt-4 border-t border-[#262626] bg-[#1D1D1D] p-4 rounded-2xl border border-[#2E2E2E]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F4B400]">
                <MapPin className="w-4 h-4" />
                <span>Arusha Delivery Address</span>
              </div>
              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1">
                  Street / Area in Arusha <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="e.g., Pangani St, Clock Tower Area, Sakina, Njiro, Kaloleni"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#252525] border border-[#3A3A3A] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B400]"
                />
                {errors.deliveryAddress && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.deliveryAddress}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1">
                  Nearby Landmark / House Directions (Optional)
                </label>
                <input
                  type="text"
                  value={deliveryLandmark}
                  onChange={(e) => setDeliveryLandmark(e.target.value)}
                  placeholder="e.g., Near Arusha Hotel / Opposite Bank branch / Blue gate"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#252525] border border-[#3A3A3A] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B400]"
                />
              </div>
            </div>
          )}

          {orderType === 'pickup' && (
            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F4B400]">
                <MapPin className="w-4 h-4" />
                <span>Pickup Location</span>
              </div>
              <p className="text-xs text-neutral-300">
                Pick up your order directly from the counter at <strong className="text-white">CHIC N FILL, Pangani St, Arusha 23102</strong>.
              </p>
              <div>
                <label className="text-[11px] text-neutral-400 block mt-2 mb-1">Estimated Pickup Time</label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#252525] border border-[#383838] text-xs text-white"
                >
                  <option value="As soon as ready (approx 15-20 min)">As soon as ready (approx 15–20 min)</option>
                  <option value="In 30 minutes">In 30 minutes</option>
                  <option value="In 45 minutes">In 45 minutes</option>
                  <option value="In 1 hour">In 1 hour</option>
                </select>
              </div>
            </div>
          )}

          {orderType === 'dine-in' && (
            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F4B400]">
                <Utensils className="w-4 h-4" />
                <span>Dine-In Table Seating</span>
              </div>
              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1">
                  Table Number (Optional if already seated)
                </label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="e.g., Table 4 or 'Walking in now'"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#252525] border border-[#3A3A3A] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B400]"
                />
              </div>
            </div>
          )}

          {/* Payment Method Section (Clear, transparent, no fake cards) */}
          <div className="space-y-3 pt-4 border-t border-[#262626]">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              3. Payment Method (Pay Upon Arrival / Delivery)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'mobile-money' as const, label: 'Mobile Money', icon: Smartphone, sub: 'M-Pesa / Tigo / Airtel' },
                { id: 'cash' as const, label: 'Cash', icon: Banknote, sub: 'On Delivery / Counter' },
                { id: 'pay-on-pickup' as const, label: 'Pay on Pickup', icon: CreditCard, sub: 'At counter' },
              ].map((m) => {
                const Icon = m.icon;
                const selected = paymentMethod === m.id;
                return (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between gap-1 transition-all ${
                      selected
                        ? 'bg-[#F4B400]/10 border-[#F4B400] text-white'
                        : 'bg-[#222222] border-[#333333] text-neutral-400 hover:border-neutral-500'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${selected ? 'text-[#F4B400]' : 'text-neutral-400'}`} />
                    <span className="text-xs font-bold text-white leading-tight">{m.label}</span>
                    <span className="text-[10px] text-neutral-400">{m.sub}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-neutral-400 italic">
              Note: Payment is settled directly upon delivery or pickup via Mobile Money or Cash.
            </p>
          </div>

          {/* Order Notes */}
          <div className="space-y-2 pt-2 border-t border-[#262626]">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              Additional Order Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              placeholder="e.g., Extra napkins, call when rider arrives at the gate..."
              className="w-full px-3.5 py-2 rounded-xl bg-[#222222] border border-[#333333] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B400]"
            />
          </div>
        </form>

        {/* Modal Footer with Actions */}
        <div className="p-5 bg-[#141414] border-t border-[#282828] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left w-full sm:w-auto">
            <span className="text-xs text-neutral-400 block">Total to Pay:</span>
            <span className="font-heading font-black text-xl text-[#F4B400]">
              {formatPriceTSh(subtotal)}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsCheckoutOpen(false)}
              className="px-4 py-3 rounded-xl bg-[#222222] hover:bg-[#282828] text-neutral-300 text-xs font-bold transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => handleSubmitWhatsApp()}
              id="submit-whatsapp-order-btn"
              disabled={isSubmitting}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-black text-sm shadow-xl shadow-[#25D366]/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black text-black" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
