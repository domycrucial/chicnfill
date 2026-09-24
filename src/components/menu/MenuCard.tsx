import React from 'react';
import { MenuItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatPriceTSh } from '../../utils/formatters';
import { Plus, Flame, Clock } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addItem, setActiveDetailItem } = useCart();

  return (
    <article
      id={`menu-card-${item.id}`}
      className="group flex flex-col sm:flex-row bg-[#181818] rounded-2xl overflow-hidden border border-[#2B2B2B] hover:border-[#F4B41A]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
    >
      {/* Thumbnail */}
      <div 
        onClick={() => setActiveDetailItem(item)}
        className="relative w-full sm:w-48 sm:min-w-[190px] h-52 sm:h-auto overflow-hidden bg-[#111111] cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Popular / Spicy Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
          {item.isPopular && (
            <span className="bg-[#F4B41A] text-black text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-md">
              Popular
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-md flex items-center gap-0.5">
              <Flame className="w-2.5 h-2.5" />
              Spicy
            </span>
          )}
        </div>

        {item.prepTimeMinutes && (
          <div className="absolute bottom-2.5 right-2.5 bg-black/85 backdrop-blur-sm text-neutral-200 text-[10px] font-medium px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1 shadow-md">
            <Clock className="w-2.5 h-2.5 text-[#F4B41A]" />
            <span>{item.prepTimeMinutes}m</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3
              onClick={() => setActiveDetailItem(item)}
              className="font-heading font-black text-base sm:text-lg text-white hover:text-[#F4B41A] cursor-pointer transition-colors leading-tight"
            >
              {item.name}
            </h3>
          </div>

          {item.portionSize && (
            <span className="inline-block text-[11px] font-semibold text-neutral-400 mb-2">
              {item.portionSize}
            </span>
          )}

          <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-3">
            {item.description}
          </p>
        </div>

        {/* Footer info: price and customize/add button */}
        <div className="flex items-center justify-between pt-3 border-t border-[#262626] gap-3">
          <div>
            <span className="font-heading font-black text-base sm:text-lg text-[#F4B41A]">
              {formatPriceTSh(item.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveDetailItem(item)}
              className="text-xs font-semibold text-neutral-300 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              Details
            </button>

            <button
              type="button"
              onClick={() => addItem(item, 1)}
              id={`btn-add-${item.id}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F4B41A] hover:bg-[#ffc933] text-black font-black text-xs shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label={`Add ${item.name} to cart`}
            >
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
