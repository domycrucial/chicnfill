import React from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { Instagram, Sparkles, ExternalLink, MessageCircle, Heart } from 'lucide-react';
import { getQuickWhatsAppChatUrl } from '../../utils/formatters';

export const SocialSection: React.FC = () => {
  const socialFeed = [
    {
      id: 'soc-1',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
      caption: 'Soy Garlic 16 pcs freshly glazed 🔥 #ChicNFill #ArushaFood',
      likes: '240',
    },
    {
      id: 'soc-2',
      image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80',
      caption: 'Honey Mustard crunch perfection in Arusha 🍗 #FriedChicken',
      likes: '185',
    },
    {
      id: 'soc-3',
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80&fit=crop',
      caption: 'Piping hot golden french fries tossed in peri-peri spice 🍟',
      likes: '312',
    },
    {
      id: 'soc-4',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      caption: 'Cozy vibes on Pangani Street, open daily until 9:30 PM ✨',
      likes: '198',
    },
  ];

  return (
    <section id="social" className="py-16 md:py-20 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B400]/15 text-[#F4B400] text-xs font-bold uppercase tracking-wider mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Connect on Social</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              FOLLOW THE CHIC N FILL EXPERIENCE
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-1 max-w-xl">
              Tag us in your food snaps in Arusha. Share your favorite crunch moments!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={restaurantConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C1C1C] hover:bg-[#252525] text-white border border-[#333333] text-xs font-bold transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#F4B400]" />
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={getQuickWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Channel</span>
            </a>
          </div>
        </div>

        {/* Social Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialFeed.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden bg-[#181818] border border-[#2A2A2A] aspect-square"
            >
              <img
                src={post.image}
                alt="CHIC N FILL social food moment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4">
                <div className="self-end flex items-center gap-1 text-white text-xs font-bold">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-white text-xs leading-snug line-clamp-2">
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
