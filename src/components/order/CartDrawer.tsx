import React from 'react';
import { useCart } from '../../context/CartContext';
import { formatPriceTSh } from '../../utils/formatters';
import { restaurantConfig } from '../../data/restaurant';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Bike, 
  ShoppingBag as PickupIcon, 
  Utensils, 
  Sparkles 
} from 'lucide-react';
import { OrderType } from '../../types';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    setIsCheckoutOpen,
    updateQuantity, 
    removeItem, 
    clearCart, 
    subtotal, 
    orderType, 
    setOrderType 
  } = useCart();

  if (!isCartOpen) return null;

  const orderTypeOptions: { key: OrderType; label: string; icon: any }[] = [
    { key: 'delivery', label: 'Delivery', icon: Bike },
    { key: 'pickup', label: 'Pickup', icon: PickupIcon },
    { key: 'dine-in', label: 'Dine-In', icon: Utensils },
  ];

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        id="cart-drawer"
        className="w-full max-w-md bg-[#161616] border-l border-[#2B2B2B] h-full flex flex-col text-white shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#262626] flex items-center justify-between bg-[#1A1A1A]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#F4B400] flex items-center justify-center text-black font-black">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-lg leading-tight">Your Order</h2>
              <span className="text-xs text-neutral-400">
                {items.length} {items.length === 1 ? 'item' : 'items'} in order
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-neutral-400 hover:text-rose-400 px-2 py-1 rounded transition-colors"
                title="Clear entire cart"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-[#222222] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Order Type Selector Switch */}
        <div className="p-4 bg-[#141414] border-b border-[#262626]">
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#1E1E1E] rounded-xl border border-[#2D2D2D]">
            {orderTypeOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = orderType === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => setOrderType(opt.key)}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#F4B400] text-black shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick context note for selected order type */}
          <div className="mt-2.5 text-[11px] text-neutral-400 text-center">
            {orderType === 'delivery' && (
              <span>🛵 Fast delivery in Arusha via Bodaboda/Courier</span>
            )}
            {orderType === 'pickup' && (
              <span>🛍️ Pick up counter: Pangani St, Arusha 23102</span>
            )}
            {orderType === 'dine-in' && (
              <span>🍽️ Table dining in our cozy Arusha dining area</span>
            )}
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-neutral-500">
              <ShoppingBag className="w-16 h-16 stroke-1 mb-3 text-neutral-600" />
              <h3 className="font-heading font-bold text-lg text-white">Your cart is empty</h3>
              <p className="text-xs text-neutral-400 max-w-[220px] mt-1 mb-6">
                Explore our crispy fried chicken, soy garlic favorites, and sides.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  const elem = document.getElementById('menu');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-[#F4B400] text-black font-extrabold text-xs shadow-md shadow-[#F4B400]/20"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((ci) => {
              const optionsExtra = ci.selectedOptions.reduce((sum, opt) => sum + opt.extraPrice, 0);
              const itemTotal = (ci.item.price + optionsExtra) * ci.quantity;

              return (
                <div
                  key={ci.cartItemId}
                  className="p-3.5 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B] flex flex-col gap-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <img
                      src={ci.item.image}
                      alt={ci.item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/5"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-sm text-white truncate">
                        {ci.item.name}
                      </h4>
                      <div className="text-xs font-black text-[#F4B400] mt-0.5">
                        {formatPriceTSh(ci.item.price + optionsExtra)}
                      </div>

                      {ci.selectedOptions.length > 0 && (
                        <div className="mt-1 space-y-0.5">
                          {ci.selectedOptions.map((opt, i) => (
                            <div key={i} className="text-[10px] text-neutral-400">
                              + {opt.optionName}: <span className="text-neutral-300">{opt.choiceLabel}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {ci.notes && (
                        <p className="text-[10px] text-amber-300/80 italic mt-1 truncate">
                          "{ci.notes}"
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(ci.cartItemId)}
                      className="text-neutral-500 hover:text-rose-400 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity adjustment & item total */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#262626]">
                    <div className="flex items-center bg-[#222222] border border-[#333333] rounded-lg p-0.5">
                      <button
                        onClick={() => updateQuantity(ci.cartItemId, -1)}
                        className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-white">
                        {ci.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(ci.cartItemId, 1)}
                        className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-heading font-black text-sm text-white">
                      {formatPriceTSh(itemTotal)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Subtotal & Checkout Trigger */}
        {items.length > 0 && (
          <div className="p-5 bg-[#141414] border-t border-[#282828] space-y-4">
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-semibold">{formatPriceTSh(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>
                  {orderType === 'delivery'
                    ? 'Est. Arusha Delivery'
                    : orderType === 'pickup'
                    ? 'Pickup Fee'
                    : 'Dine-In Service'}
                </span>
                <span className="text-neutral-300">
                  {orderType === 'delivery' ? 'Calculated on location' : 'Free'}
                </span>
              </div>
              <div className="pt-2 border-t border-[#282828] flex justify-between text-base font-black text-white">
                <span>Total Estimated</span>
                <span className="text-[#F4B400] text-lg font-heading">{formatPriceTSh(subtotal)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              id="proceed-to-checkout-btn"
              className="w-full py-4 px-5 rounded-xl bg-[#F4B400] hover:bg-[#ffc933] text-black font-extrabold text-sm flex items-center justify-between shadow-xl shadow-[#F4B400]/20 active:scale-[0.98] transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
