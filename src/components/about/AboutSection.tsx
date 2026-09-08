import React from 'react';
import { Drumstick, Sparkles, MapPin, Bike, Users, Clock, Pizza } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#141414] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Atmosphere (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About CHIC-N-FILL</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              GOOD FOOD. BOLD FLAVOR.{' '}
              <span className="text-[#F4B41A]">ARUSHA ENERGY.</span>
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Located right on <strong className="text-white font-bold">Pangani Street in the heart of Arusha</strong>, CHIC-N-FILL was established around a simple passion: serving exceptionally crispy fried chicken with bold glazes, alongside bubbling stone-baked pizza slices and loaded family combo boxes.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Whether you are craving our signature <strong className="text-neutral-200">Soy Garlic chicken</strong>, our sweet-and-tangy <strong className="text-neutral-200">Mustard Honey</strong> wings, hot loaded pepperoni pizza, or golden french fries, we prepare each order fresh for quality you can taste.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
                <div className="w-9 h-9 rounded-xl bg-[#F4B41A]/15 flex items-center justify-center text-[#F4B41A] mb-2.5">
                  <Drumstick className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white">Crispy Fried Chicken</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Double-dredged golden crunch with customer-favorite homemade glazes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
                <div className="w-9 h-9 rounded-xl bg-[#F4B41A]/15 flex items-center justify-center text-[#F4B41A] mb-2.5">
                  <Pizza className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white">Stone-Baked Pizza</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Charred thin crust, bubbling mozzarella, and loaded savory toppings.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
                <div className="w-9 h-9 rounded-xl bg-[#F4B41A]/15 flex items-center justify-center text-[#F4B41A] mb-2.5">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white">Cozy Atmosphere</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Comfortable, modern urban space to dine in with friends, colleagues, and family.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
                <div className="w-9 h-9 rounded-xl bg-[#F4B41A]/15 flex items-center justify-center text-[#F4B41A] mb-2.5">
                  <Bike className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white">Takeaway & Fast Delivery</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Kerbside pickup and delivery available across Arusha directly through WhatsApp or phone.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <Clock className="w-4 h-4 text-[#F4B41A]" />
              <span>Open 7 days a week: 10:00 AM – 9:30 PM</span>
            </div>
          </div>

          {/* Right Column: Visual Collage & Brand Logo Display (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#333333] shadow-2xl bg-[#1A1A1A]">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="CHIC-N-FILL cozy dining area in Arusha"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Brand Logo Floating Badge */}
              <div className="absolute top-5 left-5 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/20 flex items-center gap-3">
                <img src="/logo.svg" alt="CHIC-N-FILL Logo" className="w-12 h-12 object-contain" />
                <div>
                  <span className="font-heading font-black text-sm text-black block leading-none">
                    CHIC-N-FILL
                  </span>
                  <span className="text-[10px] text-neutral-600 font-bold">
                    Pangani St, Arusha
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Verified Guest Sentiment</span>
                </div>
                <p className="text-xs text-neutral-300">
                  "Chic N Fill has the best fried chicken in town! The place is very cozy. Their service is fantastic, and the prices are reasonable."
                </p>
                <span className="text-[10px] text-neutral-400 mt-1 block">
                  — 4.4 ★ across 66 Verified Reviews
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
