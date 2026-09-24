import React from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { RestaurantStatusBadge } from './RestaurantStatusBadge';
import { Star, MapPin, Bike, ArrowDownRight, Sparkles, Phone, UtensilsCrossed } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden border-b border-[#222222]"
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
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed mb-6">
              Welcome to <strong className="text-white font-bold">CHIC-N-FILL</strong> on Pangani Street, Arusha.
              Home of golden crispy fried chicken, loaded chicken sandwiches, 10-piece drumsticks, stone-baked pizzas, aromatic biryani, and the legendary <strong className="text-[#F4B41A]">Kisinia Watu 6</strong> feast.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#at-a-glance"
                id="hero-at-a-glance-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold bg-[#F4B41A] text-black hover:bg-[#ffc933] shadow-xl shadow-[#F4B41A]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
              >
                <span>At a Glance Highlights</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#menu"
                id="hero-explore-menu-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#1C1C1C] text-neutral-200 hover:text-white hover:bg-[#252525] border border-[#333333] transition-all"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#F4B41A]" />
                <span>Explore Full Menu</span>
              </a>

              <a
                href="tel:+255745138774"
                id="hero-call-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#222222] hover:bg-[#2A2A2A] text-white border border-[#333333] transition-all"
              >
                <Phone className="w-4 h-4 text-[#F4B41A]" />
                <span>Call: 0745 138 774</span>
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
                  <div className="text-xs sm:text-sm font-extrabold text-white">Pangani St</div>
                  <span className="text-[11px] text-neutral-400 font-medium">Arusha, Tanzania</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1C1C1C] flex items-center justify-center border border-[#333333] shrink-0">
                  <Phone className="w-4 h-4 text-[#F4B41A]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">Direct Service</div>
                  <span className="text-[11px] text-[#F4B41A] font-bold">0745 138 774</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1C1C1C] flex items-center justify-center border border-[#333333] shrink-0">
                  <Bike className="w-4 h-4 text-[#F4B41A]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">Fast Delivery</div>
                  <span className="text-[11px] text-neutral-400 font-medium">Across Arusha</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Real Chicken & Feast Platter Presentation (0% cartoon) */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#2F2F2F] shadow-2xl bg-[#161616] group">
                <img
                  src="/images/kisinia-watu-6.jpg"
                  alt="CHIC-N-FILL Kisinia Watu 6 Feast on Pangani St Arusha"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Overlaid highlight caption on image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#121212]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F4B41A] block">
                      Authentic Arusha Kitchen
                    </span>
                    <h3 className="font-heading font-black text-sm sm:text-base text-white">
                      Kisinia Watu 6 Platter
                    </h3>
                    <p className="text-[11px] text-neutral-300">
                      Chicken, Pilau, Plantains, Sausage & Fries
                    </p>
                  </div>
                  <a
                    href="#kisinia"
                    className="p-2.5 rounded-xl bg-[#F4B41A] text-black hover:bg-[#ffca36] transition-colors shrink-0"
                    aria-label="View Kisinia details"
                  >
                    <ArrowDownRight className="w-5 h-5 stroke-[2.5]" />
                  </a>
                </div>

                {/* Floating badge top-left */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[#F4B41A] text-xs font-black shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 fill-[#F4B41A]" />
                  <span>Dine-In • Takeaway • Delivery</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
