import React from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { Instagram, Sparkles, ExternalLink, MessageCircle, Heart, Phone } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const socialFeed = [
    {
      id: 'soc-1',
      image: '/images/kisinia-watu-6.jpg',
      caption: 'The legendary Kisinia Watu 6 feast tray! Order on Pangani St 🍗🍟 #ChicNFill #Arusha',
      likes: '480',
    },
    {
      id: 'soc-2',
      image: '/images/chicnfill-meals.jpg',
      caption: 'Crispy fried chicken & golden boat fries served fresh daily 🍗 #ArushaFoodie',
      likes: '352',
    },
    {
      id: 'soc-3',
      image: '/images/chicnfill-interior.jpg',
      caption: 'Signature angel wings & yellow booths at Pangani Street! ✨ #ChicNFillArusha',
      likes: '425',
    },
    {
      id: 'soc-4',
      image: '/images/chicnfill-mince-pizza.jpg',
      caption: '12" stone-oven mince pizza bubbling with cheese 🍕 Call 0745 138 774 to order!',
      likes: '298',
    },
  ];

  return (
    <section id="social" className="py-14 md:py-20 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram @chicnfill • Arusha</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              CONNECT ON SOCIAL
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1 max-w-xl">
              Tag us in your food snaps in Arusha. Follow <strong className="text-white">@chicnfill</strong> for daily kitchen specials and party feasts!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://instagram.com/chicnfill"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C1C1C] hover:bg-[#252525] text-white border border-[#333333] text-xs font-bold transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#F4B41A]" />
              <span>@chicnfill on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 ml-0.5" />
            </a>

            <a
              href="tel:+255745138774"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-white border border-[#333333] text-xs font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F4B41A]" />
              <span>0745 138 774</span>
            </a>
          </div>
        </div>

        {/* Real Instagram Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socialFeed.map((post) => (
            <div
              key={post.id}
              className="group rounded-2xl bg-[#181818] border border-[#2B2B2B] overflow-hidden hover:border-[#F4B41A]/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-900">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <span className="flex items-center gap-1.5 text-white font-bold text-xs bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-md">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-[#F4B41A] text-xs font-bold">
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@chicnfill</span>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
