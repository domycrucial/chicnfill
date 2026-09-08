import React from 'react';
import { menuItems } from '../../data/menu';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { formatPriceTSh } from '../../utils/formatters';
import { Package, Check, Sparkles, Plus, Users, Clock, ArrowRight } from 'lucide-react';

export const PackagesSection: React.FC = () => {
  const { addItem, setActiveDetailItem } = useCart();
  const { showToast } = useToast();

  const packages = menuItems.filter((item) => item.category === 'packages');

  const handleQuickAdd = (pkg: typeof menuItems[0]) => {
    // If it has available options (glaze/drinks), open the detail modal to customize
    if (pkg.availableOptions && pkg.availableOptions.length > 0) {
      setActiveDetailItem(pkg);
    } else {
      addItem(pkg, 1, []);
      showToast(`Added ${pkg.name} to order!`, 'success');
    }
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#141414] border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-bold uppercase tracking-wider mb-2">
              <Package className="w-3.5 h-3.5" />
              <span>Instagram Favorites & Party Deals</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              SIGNATURE PACKAGES & COMBOS
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
              Curated bundles inspired by our most popular orders in Arusha. Packed with crispy fried chicken, stone-baked pizzas, fries, signature dips, and chilled drinks.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 font-semibold bg-[#1C1C1C] px-3.5 py-2 rounded-xl border border-[#2D2D2D]">
            <Sparkles className="w-4 h-4 text-[#F4B41A]" />
            <span>Best Value For Sharing & Gatherings</span>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className="rounded-3xl bg-[#1A1A1A] border border-[#2B2B2B] overflow-hidden hover:border-[#F4B41A]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Image Presentation */}
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Portion & Popularity Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {pkg.portionSize && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-black/80 text-white backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                        <Users className="w-3 h-3 text-[#F4B41A]" />
                        <span>{pkg.portionSize}</span>
                      </span>
                    )}

                    {pkg.isPopular && (
                      <span className="text-[10px] font-black uppercase tracking-wider bg-[#F4B41A] text-black px-2 py-0.5 rounded-md shadow-md">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Price Tag on bottom right of image */}
                  <div className="absolute bottom-3 right-3">
                    <span className="font-heading font-black text-lg text-white bg-black/85 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20">
                      {formatPriceTSh(pkg.price)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#F4B41A] transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Package Includes List */}
                  {pkg.packageIncludes && (
                    <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#2E2E2E] space-y-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4B41A] block">
                        Package Includes:
                      </span>
                      <ul className="space-y-1.5 text-xs text-neutral-200">
                        {pkg.packageIncludes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => handleQuickAdd(pkg)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#F4B41A] hover:bg-[#ffc933] text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#F4B41A]/20 transition-all duration-150 active:scale-95"
                >
                  <Plus className="w-4 h-4 text-black stroke-[3]" />
                  <span>{pkg.availableOptions ? 'Customize & Order' : 'Add to Order'}</span>
                </button>

                <button
                  onClick={() => setActiveDetailItem(pkg)}
                  className="p-3 rounded-xl bg-[#242424] hover:bg-[#2C2C2C] text-neutral-300 hover:text-white border border-[#333333] transition-colors"
                  aria-label={`View details of ${pkg.name}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
