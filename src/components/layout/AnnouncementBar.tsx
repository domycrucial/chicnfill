import React, { useState } from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { getLiveRestaurantStatus } from '../../utils/openingHours';
import { Sparkles, Phone, X, Flame } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const status = getLiveRestaurantStatus();

  if (!isVisible || !restaurantConfig.announcement.enabled) return null;

  return (
    <div
      id="top-announcement-bar"
      className="bg-gradient-to-r from-[#1E1605] via-[#2A1F07] to-[#1E1605] border-b border-[#F4B41A]/30 text-xs py-2 px-4 transition-all duration-300 relative z-50 text-neutral-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Left / Center Announcement */}
        <div className="flex-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
          {/* Live indicator tag */}
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 border border-[#F4B41A]/40 text-[#F4B41A] text-[10px] font-bold">
            <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
            <span>{status.statusText}</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-white text-xs sm:text-sm">
            <Flame className="w-3.5 h-3.5 text-[#F4B41A] shrink-0 inline hidden sm:inline" />
            <span className="font-bold text-[#F4B41A]">{restaurantConfig.announcement.text}</span>
          </div>
        </div>

        {/* Right Phone Hotline & Close Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${restaurantConfig.phoneRaw}`}
            className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-neutral-300 hover:text-white bg-black/40 hover:bg-black/60 px-2.5 py-1 rounded-lg border border-white/10 transition-colors"
          >
            <Phone className="w-3 h-3 text-[#F4B41A]" />
            <span>{restaurantConfig.phoneDisplay}</span>
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="text-neutral-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
