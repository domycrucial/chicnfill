import React from 'react';
import { promotionsData } from '../../data/promotions';
import { Tag, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { menuItems } from '../../data/menu';

export const PromotionsSection: React.FC = () => {
  const { addItem, setActiveDetailItem } = useCart();

  return (
    <section id="specials" className="py-16 md:py-20 bg-[#161616] border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B400]/15 text-[#F4B400] text-xs font-bold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Menu Specials & Bundles</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              FEATURED COMBOS & SPECIALS
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1 max-w-xl">
              Configurable sharing packages and lunch combinations designed for value and bold satisfaction.
            </p>
          </div>
        </div>

        {/* Promotion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotionsData.map((promo) => (
            <div
              key={promo.id}
              className="p-6 rounded-3xl bg-[#1D1D1D] border border-[#2D2D2D] hover:border-[#F4B400]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#F4B400] bg-[#F4B400]/10 px-2.5 py-1 rounded-lg">
                    {promo.tag}
                  </span>
                  {promo.badge && (
                    <span className="text-[10px] font-bold text-neutral-400 border border-[#333333] px-2 py-0.5 rounded-md">
                      {promo.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#F4B400] transition-colors">
                  {promo.title}
                </h3>

                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {promo.description}
                </p>

                {promo.validUntil && (
                  <span className="text-[11px] text-neutral-500 mt-3 block font-medium">
                    ⏰ {promo.validUntil}
                  </span>
                )}
              </div>

              <div className="pt-5 mt-5 border-t border-[#282828] flex items-center justify-between">
                <div>
                  <span className="font-heading font-black text-base text-[#F4B400]">
                    {promo.priceText}
                  </span>
                </div>

                <a
                  href="#menu"
                  className="inline-flex items-center gap-1 text-xs font-bold text-neutral-300 group-hover:text-white group-hover:translate-x-1 transition-all"
                >
                  <span>Order Bundle</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F4B400]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
