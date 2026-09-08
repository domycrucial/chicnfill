import React from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { 
  PartyPopper, 
  Briefcase, 
  Flame, 
  Users, 
  Sparkles, 
  Check, 
  MessageCircle, 
  Phone,
  Clock,
  Pizza,
  Drumstick,
  ArrowRight
} from 'lucide-react';

export const EventsOrganizedSection: React.FC = () => {
  const eventTypes = [
    {
      id: 'event-birthdays',
      title: 'Birthday Celebrations & Friend Hangouts',
      tagline: 'Lively atmosphere, hot pizza slices & glazed chicken towers',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
      badge: 'Most Popular for Youth & Groups',
      capacity: '6 to 35 Guests',
      features: [
        'Reserved booth & dedicated celebratory table arrangement',
        'Custom chicken wing towers (Soy Garlic & Honey Mustard)',
        'Party stone-baked pizzas with requested toppings',
        'Bring-your-own birthday cake friendly with serving utensils',
      ],
      whatsappPrompt: 'Hi CHIC-N-FILL! I would like to inquire about hosting a Birthday Celebration / Group Gathering at your Pangani Street restaurant.'
    },
    {
      id: 'event-corporate',
      title: 'Corporate Luncheons & Office Catering',
      tagline: 'Punctual, hot individually packaged meals delivered to your desk',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      badge: 'Arusha Business Favorite',
      capacity: '10 to 100+ Meal Boxes',
      features: [
        'Individual boxed combo meals (Chicken + Fries + Drink + Wet Wipes)',
        'Strictly scheduled delivery across Arusha at exact meeting times',
        'Convenient mobile money payment & electronic invoices',
        'Reliable hot transport in insulated food carriers',
      ],
      whatsappPrompt: 'Hello CHIC-N-FILL! I would like to inquire about Corporate Catering / Office Boxed Lunches for our team in Arusha.'
    },
    {
      id: 'event-private',
      title: 'Weekend Socials & Game Day Feasts',
      tagline: 'Crispy sharing platters & ice-cold drinks for sports & celebrations',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      badge: 'Weekend Highlight',
      capacity: '8 to 40 Guests',
      features: [
        'Massive sharing platters of 32+ pcs crispy tenders and wings',
        'Full sauce bar (Mustard Honey, Garlic Mayo, Peri-Peri, Sweet Chili)',
        'Assorted stone-oven pizza boards served bubbling hot',
        'Chilled beverages & fresh passion/mango fruit juices',
      ],
      whatsappPrompt: 'Hello CHIC-N-FILL! I want to organize a Weekend Social / Game Day feast platter for our group.'
    }
  ];

  return (
    <section id="events" className="py-20 bg-[#161616] border-b border-[#252525] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-3 border border-[#F4B41A]/20">
            <PartyPopper className="w-3.5 h-3.5" />
            <span>Celebrate & Host</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            EVENTS ORGANIZED AT CHIC-N-FILL
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2.5">
            Spaces for every story. From birthday parties and weekend celebrations to office catering across Arusha, we turn gatherings into memorable feasts.
          </p>
        </div>

        {/* 3 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {eventTypes.map((event) => (
            <div
              key={event.id}
              className="bg-[#1D1D1D] rounded-3xl border border-[#2F2F2F] overflow-hidden flex flex-col justify-between shadow-xl hover:border-[#F4B41A]/50 transition-all duration-300 group"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-[#F4B41A] border border-white/10">
                    {event.badge}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-200">
                    <span className="flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      <Users className="w-3.5 h-3.5 text-[#F4B41A]" />
                      <span>{event.capacity}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-[#F4B41A]" />
                      <span>Custom Timing</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-[#F4B41A] transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      {event.tagline}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-[#292929]">
                    {event.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#F4B41A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Inquire CTA */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(event.whatsappPrompt)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#282828] group-hover:bg-[#F4B41A] group-hover:text-black text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire Event via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Catering & Event Guarantee Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#21170A] via-[#1E1E1E] to-[#21170A] border border-[#F4B41A]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] uppercase font-black tracking-widest text-[#F4B41A] block">
              Have a custom guest count or special dietary request?
            </span>
            <h4 className="font-heading font-black text-xl sm:text-2xl text-white">
              We Custom-Tailor Platters & Feast Packages!
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              From 5 to 150 guests, our kitchen team crafts custom chicken combos, stone-baked pizza trays, and chilled beverage assortments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#reserve"
              className="px-6 py-3.5 rounded-xl bg-[#F4B41A] hover:bg-[#ffc933] text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#F4B41A]/20 transition-all"
            >
              <span>Book Table Online</span>
            </a>
            <a
              href={`tel:${restaurantConfig.phoneRaw}`}
              className="px-5 py-3.5 rounded-xl bg-[#2A2A2A] hover:bg-[#333333] text-white border border-[#444444] text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B41A]" />
              <span>Call Host: {restaurantConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
