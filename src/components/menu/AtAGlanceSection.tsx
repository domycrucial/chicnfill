import React from 'react';
import { menuItems } from '../../data/menu';
import { restaurantConfig } from '../../data/restaurant';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { formatPriceTSh } from '../../utils/formatters';
import { 
  CreditCard, 
  Bike, 
  Wifi, 
  ShoppingBag, 
  CalendarCheck, 
  Accessibility, 
  Phone, 
  MessageCircle, 
  Plus, 
  Sparkles, 
  ArrowRight,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const AtAGlanceSection: React.FC = () => {
  const { addItem, setActiveDetailItem } = useCart();
  const { showToast } = useToast();

  // The 4 highlighted cards requested in "At a Glance":
  // ChicFill Single, Chic Fill Sandwich, Chic Fill Drumstick 10pcs, and Kisinia Watu 6
  const highlightIds = [
    'cnf-chicken-single',
    'cnf-sandwich-regular',
    'cnf-drumstick-10',
    'cnf-kisinia-watu-6',
  ];

  const highlightItems = highlightIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is typeof menuItems[0] => Boolean(item));

  const handleQuickAdd = (item: typeof menuItems[0]) => {
    if (item.availableOptions && item.availableOptions.length > 0) {
      setActiveDetailItem(item);
    } else {
      addItem(item, 1, []);
      showToast(`Added ${item.name} to order!`, 'success');
    }
  };

  const featureIcons = [
    { label: 'Credit cards accepted', icon: CreditCard },
    { label: 'Delivery', icon: Bike },
    { label: 'Wi-Fi', icon: Wifi },
    { label: 'Takeaway', icon: ShoppingBag },
    { label: 'Booking', icon: CalendarCheck },
    { label: 'Wheelchair accessible', icon: Accessibility },
  ];

  return (
    <section id="at-a-glance" className="py-12 md:py-16 bg-[#141414] border-b border-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chic-N-Fill Arusha Highlights</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              AT A GLANCE
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1 max-w-xl">
              Signature fried chicken, loaded burgers, juicy drumsticks, and the legendary Kisinia feast served daily on Pangani Street.
            </p>
          </div>

          {/* Quick Direct Call & WhatsApp Hotlines */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+255745138774"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] border border-[#333333] text-white text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#F4B41A]" />
              <span>Call: 0745 138 774</span>
            </a>
            <a
              href="https://wa.me/255659263416"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-black transition-all shadow-md shadow-[#25D366]/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black text-black" />
              <span>WhatsApp: 0659 263 416</span>
            </a>
          </div>
        </div>

        {/* Restaurant Amenities & Features Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#F4B41A] mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Restaurant Amenities & Service Features</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {featureIcons.map((feature) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#222222] border border-[#333333] text-neutral-200 text-xs font-semibold"
                >
                  <IconComp className="w-4 h-4 text-[#F4B41A] shrink-0" />
                  <span className="leading-tight">{feature.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Food Photography Showcase + Top Dishes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Real Photo Banner Card from restaurantguru link */}
          <div className="lg:col-span-4 rounded-3xl overflow-hidden bg-[#1A1A1A] border border-[#2F2F2F] flex flex-col justify-between group shadow-xl">
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-64 overflow-hidden bg-black">
              <img
                src="/images/chicnfill-meals.jpg"
                alt="CHIC-N-FILL real meals and feast spread"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 left-3 bg-[#F4B41A] text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                Verified Arusha Kitchen
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-xs font-bold block text-neutral-200">Real Guest Experience</span>
                <span className="font-heading font-black text-sm text-[#F4B41A]">Fresh Chicken, Slices & Feasts</span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs text-neutral-300 leading-relaxed">
                Step inside our vibrant modern diner on Pangani Street, Arusha. Hot crispy chicken drumsticks, 12" stone-baked pizzas, loaded boat fries, and family feast trays crafted fresh to order.
              </p>

              <div className="pt-3 border-t border-[#2A2A2A] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-neutral-400 block">Location:</span>
                  <span className="text-xs font-bold text-white">Pangani St, Arusha</span>
                </div>
                <a
                  href="#menu"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#F4B41A] hover:text-[#ffca36] transition-colors"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Highlight Cards Grid: ChicFill Single, Sandwich, Drumstick 10pcs, Kisinia Watu 6 */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlightItems.map((dish) => (
              <div
                key={dish.id}
                id={`at-a-glance-item-${dish.id}`}
                className="rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B] hover:border-[#F4B41A]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg hover:-translate-y-0.5"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-black text-[#F4B41A] border border-white/10">
                    {formatPriceTSh(dish.price)}
                  </div>
                  {dish.portionSize && (
                    <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[11px] px-2.5 py-0.5 rounded-lg border border-white/10">
                      {dish.portionSize}
                    </div>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-heading font-black text-lg text-white group-hover:text-[#F4B41A] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-1 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#262626]">
                    <button
                      type="button"
                      onClick={() => setActiveDetailItem(dish)}
                      className="px-3 py-2 rounded-xl bg-[#242424] hover:bg-[#2C2C2C] text-neutral-300 text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickAdd(dish)}
                      className="flex-1 px-3 py-2 rounded-xl bg-[#F4B41A] hover:bg-[#ffca36] text-black text-xs font-black transition-all inline-flex items-center justify-center gap-1.5 shadow-md shadow-[#F4B41A]/20 active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
