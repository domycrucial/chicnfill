import React from 'react';
import { CustomerOrderDetails } from '../../types';
import { restaurantConfig } from '../../data/restaurant';
import { CheckCircle2, MessageCircle, Phone, Navigation, X, Clock, MapPin } from 'lucide-react';
import { getDirectionsUrl } from '../../utils/formatters';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: CustomerOrderDetails | null;
  orderId: string;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  orderDetails,
  orderId,
}) => {
  if (!isOpen || !orderDetails) return null;

  return (
    <div
      id="order-success-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-[#181818] border border-[#333333] rounded-3xl p-6 shadow-2xl text-center space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#222222] text-neutral-400 hover:text-white"
          aria-label="Close confirmation"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F4B400] block mb-1">
            Order Dispatched to WhatsApp
          </span>
          <h3 className="font-heading font-black text-2xl text-white">
            Asante Sana, {orderDetails.customerName}!
          </h3>
          <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
            Your order reference is <strong className="text-white font-mono bg-[#252525] px-2 py-0.5 rounded border border-white/10">#{orderId}</strong>.
            The kitchen team at Pangani Street has received your message.
          </p>
        </div>

        {/* Details Summary Card */}
        <div className="p-4 rounded-2xl bg-[#202020] border border-[#2E2E2E] text-left space-y-2 text-xs">
          <div className="flex items-center justify-between text-neutral-300">
            <span className="font-semibold text-white">Order Type:</span>
            <span className="capitalize font-bold text-[#F4B400]">{orderDetails.orderType}</span>
          </div>

          {orderDetails.orderType === 'delivery' && (
            <div className="flex items-start justify-between text-neutral-300 gap-2">
              <span className="text-neutral-400 shrink-0">Delivery Address:</span>
              <span className="text-right text-white font-medium">{orderDetails.deliveryAddress}</span>
            </div>
          )}

          {orderDetails.orderType === 'pickup' && (
            <div className="flex items-start justify-between text-neutral-300 gap-2">
              <span className="text-neutral-400 shrink-0">Pickup Point:</span>
              <span className="text-right text-white font-medium">Pangani St, Arusha 23102</span>
            </div>
          )}

          <div className="flex items-center justify-between text-neutral-300">
            <span className="text-neutral-400">Estimated Prep Time:</span>
            <span className="text-white font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F4B400]" /> 15–20 minutes
            </span>
          </div>
        </div>

        {/* Quick Follow-up Buttons */}
        <div className="space-y-2.5 pt-2">
          <a
            href={`tel:${restaurantConfig.phoneRaw}`}
            className="w-full py-3 px-4 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-white border border-[#333333] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#F4B400]" />
            <span>Call Restaurant ({restaurantConfig.phoneDisplay})</span>
          </a>

          {orderDetails.orderType === 'pickup' && (
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-white border border-[#333333] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4 text-sky-400" />
              <span>Get Directions to Pangani St</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-[#F4B400] text-black text-xs font-extrabold shadow-md shadow-[#F4B400]/20 hover:bg-[#ffc933] transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
