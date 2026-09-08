import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CartItemOption } from '../../types';
import { formatPriceTSh } from '../../utils/formatters';
import { X, Plus, Minus, Check, Flame, Clock, Sparkles } from 'lucide-react';

export const FoodDetailModal: React.FC = () => {
  const { activeDetailItem, setActiveDetailItem, addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<CartItemOption[]>([]);
  const [specialNotes, setSpecialNotes] = useState('');

  if (!activeDetailItem) return null;

  const handleOptionChange = (optionName: string, choiceLabel: string, extraPrice = 0) => {
    setSelectedOptions((prev) => {
      // Remove other choice for this option name if single choice
      const filtered = prev.filter((o) => o.optionName !== optionName);
      if (choiceLabel === 'None' || choiceLabel === 'No Extra Dip') {
        return filtered;
      }
      return [...filtered, { optionName, choiceLabel, extraPrice }];
    });
  };

  const isOptionSelected = (optionName: string, choiceLabel: string) => {
    return selectedOptions.some(
      (o) => o.optionName === optionName && o.choiceLabel === choiceLabel
    );
  };

  const optionsExtraTotal = selectedOptions.reduce((sum, opt) => sum + opt.extraPrice, 0);
  const itemUnitPrice = activeDetailItem.price + optionsExtraTotal;
  const itemFinalTotal = itemUnitPrice * quantity;

  const handleAddToCart = () => {
    addItem(activeDetailItem, quantity, selectedOptions, specialNotes);
    setActiveDetailItem(null);
    setQuantity(1);
    setSelectedOptions([]);
    setSpecialNotes('');
  };

  return (
    <div
      id="food-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-food-title"
    >
      <div className="relative w-full max-w-lg bg-[#181818] border border-[#333333] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => setActiveDetailItem(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-colors border border-white/10"
          aria-label="Close food details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 bg-neutral-900">
          <img
            src={activeDetailItem.image}
            alt={activeDetailItem.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent pointer-events-none" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {activeDetailItem.isPopular && (
              <span className="bg-[#F4B400] text-black text-xs font-black uppercase px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-black text-black" />
                Signature
              </span>
            )}
            {activeDetailItem.isSpicy && (
              <span className="bg-rose-600 text-white text-xs font-bold uppercase px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                <Flame className="w-3 h-3" />
                Spicy
              </span>
            )}
          </div>

          {activeDetailItem.portionSize && (
            <div className="absolute bottom-3 left-4 bg-black/75 backdrop-blur-md text-[#F4B400] text-xs font-bold px-3 py-1 rounded-lg border border-[#F4B400]/20">
              {activeDetailItem.portionSize}
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h2 id="modal-food-title" className="font-heading font-black text-2xl text-white">
                {activeDetailItem.name}
              </h2>
              <span className="font-heading font-black text-xl text-[#F4B400] shrink-0">
                {formatPriceTSh(itemUnitPrice)}
              </span>
            </div>

            <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
              {activeDetailItem.description}
            </p>

            {activeDetailItem.prepTimeMinutes && (
              <div className="flex items-center gap-2 text-xs text-neutral-400 mt-3">
                <Clock className="w-3.5 h-3.5 text-[#F4B400]" />
                <span>Estimated kitchen prep time: ~{activeDetailItem.prepTimeMinutes} minutes</span>
              </div>
            )}
          </div>

          {/* Options & Add-ons */}
          {activeDetailItem.availableOptions && activeDetailItem.availableOptions.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[#262626]">
              {activeDetailItem.availableOptions.map((optGroup) => (
                <div key={optGroup.name} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    {optGroup.name}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {optGroup.choices.map((choice) => {
                      const selected = isOptionSelected(optGroup.name, choice.label);
                      return (
                        <button
                          type="button"
                          key={choice.label}
                          onClick={() => handleOptionChange(optGroup.name, choice.label, choice.extraPrice || 0)}
                          className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                            selected
                              ? 'bg-[#F4B400]/10 border-[#F4B400] text-white'
                              : 'bg-[#222222] border-[#333333] text-neutral-300 hover:border-neutral-500'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                                selected ? 'bg-[#F4B400] border-[#F4B400]' : 'border-neutral-500'
                              }`}
                            >
                              {selected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                            </div>
                            <span>{choice.label}</span>
                          </div>
                          {choice.extraPrice ? (
                            <span className="text-[#F4B400] font-bold">
                              +{formatPriceTSh(choice.extraPrice)}
                            </span>
                          ) : (
                            <span className="text-neutral-500 text-[10px]">Free</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Special Instructions Input */}
          <div className="space-y-2 pt-2 border-t border-[#262626]">
            <label htmlFor="food-notes" className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              Special Instructions (Optional)
            </label>
            <input
              type="text"
              id="food-notes"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="e.g., Sauce on the side, extra crispy, less salt..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#222222] border border-[#333333] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B400]"
            />
          </div>
        </div>

        {/* Modal Footer (Quantity Selector + Add to Cart Button) */}
        <div className="p-4 sm:p-6 bg-[#141414] border-t border-[#282828] flex items-center justify-between gap-4">
          <div className="flex items-center bg-[#222222] border border-[#333333] rounded-xl p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-9 flex items-center justify-center text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 active:scale-90 transition-all"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-9 text-center font-heading font-black text-base text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 flex items-center justify-center text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 active:scale-90 transition-all"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            id="modal-add-to-cart-btn"
            className="flex-1 py-3.5 px-5 rounded-xl bg-[#F4B400] hover:bg-[#ffc933] text-black font-extrabold text-sm sm:text-base flex items-center justify-between shadow-lg shadow-[#F4B400]/20 active:scale-[0.98] transition-all"
          >
            <span>Add to Order</span>
            <span className="font-black">{formatPriceTSh(itemFinalTotal)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
