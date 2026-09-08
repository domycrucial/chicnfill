import React from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { RestaurantStatusBadge } from './RestaurantStatusBadge';
import { Star, MapPin, Bike, Drumstick, ArrowDownRight, Sparkles, MessageCircle, Phone, Pizza, Package } from 'lucide-react';
import { getQuickWhatsAppChatUrl } from '../../utils/formatters';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden border-b border-[#222222]"
    >
      {/* Background ambient gold aura */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F4B41A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#E59A0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live status badge */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
              <RestaurantStatusBadge />
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-tight leading-[1.08] mb-4">
              CRISPY CHICKEN.{' '}
              <span className="text-[#F4B41A] inline-block">HOT PIZZA.</span>{' '}
              <br className="hidden sm:inline" />
              BOLD ARUSHA FLAVOR.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8">
              Welcome to <strong className="text-white font-bold">CHIC-N-FILL</strong> on Pangani Street.
              Famous for our artisanal <strong className="text-[#F4B41A]">Soy Garlic</strong> and <strong className="text-[#F4B41A]">Mustard Honey</strong> chicken glazes, freshly baked stone-oven pizzas, and loaded family combo packages delivered hot across Arusha.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#packages"
                id="hero-explore-packages-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold bg-[#F4B41A] text-black hover:bg-[#ffc933] shadow-xl shadow-[#F4B41A]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
              >
                <Package className="w-4 h-4" />
                <span>Explore Signature Packages</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#menu"
                id="hero-explore-menu-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#1C1C1C] text-neutral-200 hover:text-white hover:bg-[#252525] border border-[#333333] transition-all"
              >
                <span>Full Menu</span>
              </a>

              <a
                href={getQuickWhatsAppChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-order-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Trust Metadata Chips */}
            <div className="pt-6 border-t border-[#262626] w-full grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1C1C1C] flex items-center justify-center border border-[#333333] shrink-0">
                  <Star className="w-4 h-4 fill-[#F4B41A] text-[#F4B41A]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">
                    {restaurantConfig.rating} / 5 Stars
                  </div>
                  <span className="text-[11px] text-neutral-400 font-medium">66 Google Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1C1C1C] flex items-center justify-center border border-[#333333] shrink-0">
                  <MapPin className="w-4 h-4 text-[#F4B41A]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">Arusha City</div>
                  <span className="text-[11px] text-neutral-400 font-medium">Pangani St</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1C1C1C] flex items-center justify-center border border-[#333333] shrink-0">
                  <Drumstick className="w-4 h-4 text-[#F4B41A]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">Crispy Chicken</div>
                  <span className="text-[11px] text-neutral-400 font-medium">Soy Garlic & Honey</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1C1C1C] flex items-center justify-center border border-[#333333] shrink-0">
                  <Pizza className="w-4 h-4 text-[#F4B41A]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">Stone-Baked Pizza</div>
                  <span className="text-[11px] text-neutral-400 font-medium">Slices & Large</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main appetizing chicken & pizza collage presentation */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#2F2F2F] shadow-2xl bg-[#161616] group">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80"
                  alt="CHIC-N-FILL Chicken & Stone-Baked Pizza Feast in Arusha"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Overlaid highlight caption on image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#121212]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F4B41A] block">
                      Instagram Favorite Combo
                    </span>
                    <h3 className="font-heading font-extrabold text-white text-base sm:text-lg leading-tight">
                      Chic-N-Pizza Mega Family Feast
                    </h3>
                    <p className="text-[11px] text-neutral-300">16 pcs Chicken + Large Pizza + 2 Fries + 1.5L Drink</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-heading font-black text-base sm:text-lg text-[#F4B41A]">
                      TSh 58,000
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating official logo badge */}
              <div className="absolute -top-5 -left-4 sm:-left-6 p-2.5 rounded-2xl bg-white text-black shadow-2xl border border-neutral-200 hidden sm:flex items-center gap-2">
                <img src="/logo.svg" alt="CHIC-N-FILL" className="w-10 h-10 object-contain" />
                <div className="pr-1 text-left">
                  <div className="text-[10px] font-black uppercase tracking-wider text-black">Official Menu</div>
                  <div className="text-[9px] text-neutral-600">Arusha Original</div>
                </div>
              </div>

              {/* Floating feature card: Arusha Delivery */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-[#1C1C1C]/95 border border-[#333333] shadow-xl backdrop-blur-md flex items-center gap-2.5 max-w-[210px] hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Bike className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Fast Hot Delivery</div>
                  <div className="text-[10px] text-neutral-400">Bodaboda & Kerbside</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
