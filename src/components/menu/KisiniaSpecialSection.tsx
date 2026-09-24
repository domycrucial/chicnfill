import React from 'react';
import { menuItems } from '../../data/menu';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { formatPriceTSh } from '../../utils/formatters';
import { Users, Flame, Plus, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

export const KisiniaSpecialSection: React.FC = () => {
  const { addItem, setActiveDetailItem } = useCart();
  const { showToast } = useToast();

  const kisiniaItem = menuItems.find((item) => item.id === 'cnf-kisinia-watu-6') || menuItems[0];

  const handleOrderKisinia = () => {
    addItem(kisiniaItem, 1, []);
    showToast('Added Kisinia Watu 6 (TSh 70,000) to order!', 'success');
  };

  const ingredients = [
    'Kuku wa Kitunguu (Caramelized Onion Chicken)',
    'Ndizi Mzuzu (Golden Fried Sweet Plantains)',
    'Chips Plain & Chips Masala',
    'Kuku Makange (Sizzling Spiced Chicken)',
    'Kuku Fries',
    'Wali Mweupe (Steamed Rice)',
    'Aromatic Pilau Rice',
    'Grilled Beef Sausage Slices',
    'Fresh Crisp Salad & Trio of Sauces',
  ];

  return (
    <section id="kisinia" className="py-14 md:py-20 bg-[#161616] border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden border border-[#2F2F2F] bg-[#1A1A1A] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Image Presentation: 4K Enhanced Kisinia Photo */}
            <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-16/10 lg:aspect-auto min-h-[340px] overflow-hidden bg-black">
              <img
                src="/images/kisinia-watu-6.jpg"
                alt="CHIC-N-FILL Kisinia Watu 6 Arusha Grand Feast"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1A1A1A]" />
              
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F4B41A] text-black font-heading font-black text-xs uppercase tracking-wider shadow-lg">
                  Arusha Signature Feasts
                </span>
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                  <Users className="w-3.5 h-3.5 text-[#F4B41A]" />
                  <span>Feeds 6 People</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4B41A] block">Signature Gathering Platter</span>
                <h3 className="font-heading font-black text-2xl text-white">KISINIA WATU 6</h3>
                <span className="font-heading font-black text-xl text-[#F4B41A]">{formatPriceTSh(kisiniaItem.price)}</span>
              </div>
            </div>

            {/* Platter Details & Direct Order Actions */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-2">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>The Ultimate Arusha Gathering Feast</span>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    KISINIA WATU 6
                  </h3>
                  <div className="text-2xl sm:text-3xl font-heading font-black text-[#F4B41A]">
                    {formatPriceTSh(kisiniaItem.price)}
                  </div>
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-5">
                  The most famous group tray in Arusha! Crafted for family gatherings, friends' celebrations, and game nights. Packed with savory chicken varieties, double fries, golden ndizi mzuzu, aromatic pilau, and crisp sides.
                </p>

                {/* Ingredients Grid */}
                <div className="p-4 rounded-2xl bg-[#141414] border border-[#2B2B2B]">
                  <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#F4B41A] mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Platter Inclusions (Everything on the Tray)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {ingredients.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B41A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Add to Cart & Phone Order */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleOrderKisinia}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#F4B41A] hover:bg-[#ffca36] text-black font-heading font-black text-sm transition-all shadow-xl shadow-[#F4B41A]/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Add Kisinia to Order</span>
                </button>

                <a
                  href="tel:+255745138774"
                  className="py-3.5 px-6 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-white border border-[#333333] text-xs font-bold transition-all flex items-center justify-center gap-2"
                  title="Call Restaurant Service"
                >
                  <Phone className="w-4 h-4 text-[#F4B41A]" />
                  <span>Call: 0745 138 774</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
