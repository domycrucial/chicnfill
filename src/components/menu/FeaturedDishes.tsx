import React from 'react';
import { menuItems } from '../../data/menu';
import { MenuItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatPriceTSh } from '../../utils/formatters';
import { Plus, Eye, Sparkles, Star, Clock } from 'lucide-react';

export const FeaturedDishes: React.FC = () => {
  const { addItem, setActiveDetailItem } = useCart();

  // Highlighted favorite items: Soy Garlic 16pcs, Mustard Honey, Crispy Fried Chicken, Golden French Fries
  const featuredIds = ['cnf-soy-garlic-16', 'cnf-mustard-honey-8', 'cnf-crispy-fried-chicken-4', 'cnf-french-fries-classic'];
  const favorites: MenuItem[] = featuredIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is MenuItem => item !== undefined);

  return (
    <section id="favorites" className="py-16 md:py-20 bg-[#141414] border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B400]/15 text-[#F4B400] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Recommendations</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              CUSTOMER FAVORITES
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1 max-w-xl">
              The dishes our guests come back for again and again. Cooked fresh, highly seasoned, and packed with flavor.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F4B400] hover:text-[#ffca36] transition-colors group"
          >
            <span>Browse All Menu Items</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map((dish) => (
            <article
              key={dish.id}
              id={`featured-dish-${dish.id}`}
              className="group flex flex-col bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2B2B2B] hover:border-[#F4B400]/50 hover:shadow-xl hover:shadow-black/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container with Zoom and Badges */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#111111]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Popular badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#F4B400] text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md">
                  <Star className="w-3 h-3 fill-black text-black" />
                  <span>Top Choice</span>
                </div>

                {/* Prep time badge */}
                {dish.prepTimeMinutes && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/75 backdrop-blur-sm text-neutral-300 text-[10px] font-semibold px-2 py-1 rounded-lg border border-white/10">
                    <Clock className="w-3 h-3 text-[#F4B400]" />
                    <span>~{dish.prepTimeMinutes}m</span>
                  </div>
                )}

                {/* Quick view trigger button overlay */}
                <button
                  onClick={() => setActiveDetailItem(dish)}
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 cursor-pointer"
                  aria-label={`Quick view ${dish.name}`}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 hover:scale-105 transition-transform">
                    <Eye className="w-4 h-4 text-[#F4B400]" />
                    <span>Quick View</span>
                  </span>
                </button>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-[#F4B400] transition-colors leading-snug">
                    {dish.name}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4 flex-1">
                  {dish.description}
                </p>

                {/* Price and Actions footer */}
                <div className="pt-3 border-t border-[#262626] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                      Price
                    </span>
                    <span className="font-heading font-black text-lg text-[#F4B400]">
                      {formatPriceTSh(dish.price)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setActiveDetailItem(dish)}
                      className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-[#252525] border border-[#333333] transition-colors"
                      title="View Details"
                      aria-label={`View details of ${dish.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => addItem(dish, 1)}
                      id={`add-featured-${dish.id}`}
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-[#F4B400] hover:bg-[#ffc933] text-black font-extrabold text-xs shadow-md shadow-[#F4B400]/20 active:scale-95 transition-all"
                      aria-label={`Add ${dish.name} to order`}
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
