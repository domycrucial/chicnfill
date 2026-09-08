import React, { useState } from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { getDirectionsUrl } from '../../utils/formatters';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Bike, 
  Car, 
  Footprints, 
  Compass, 
  ExternalLink,
  ShieldCheck,
  Layers,
  Star,
  Share2,
  Copy,
  Check
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [copied, setCopied] = useState(false);

  // Google Maps embed URL centered precisely on Pangani St, Arusha CBD
  const googleMapSrc = mapType === 'satellite'
    ? 'https://maps.google.com/maps?q=-3.3725,36.6944+(CHIC-N-FILL+Arusha)&t=k&z=17&ie=UTF8&iwloc=B&output=embed'
    : 'https://maps.google.com/maps?q=-3.3725,36.6944+(CHIC-N-FILL+Arusha)&t=m&z=17&ie=UTF8&iwloc=B&output=embed';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'CHIC-N-FILL Arusha',
        text: 'Visit CHIC-N-FILL on Pangani Street, Arusha CBD for crispy chicken & stone-baked pizza!',
        url: getDirectionsUrl(),
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(getDirectionsUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="location" className="py-20 bg-[#111111] border-b border-[#222222] relative w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-3 border border-[#F4B41A]/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Arusha CBD Location</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            EXACT RESTAURANT LOCATION
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2.5">
            Located right in Arusha CBD on Pangani Street. Accessible by walking, motorcycle bodaboda, Bajaj, taxi, or kerbside pickup.
          </p>
        </div>

        {/* 2-Column Layout: Location Details & Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Location Information & Transportation Guide (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#181818] p-6 sm:p-8 rounded-3xl border border-[#2B2B2B] shadow-2xl">
            <div className="space-y-6">
              
              {/* Address Header Card */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4B41A] block mb-1">
                  Physical Address in Arusha CBD
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  {restaurantConfig.address}
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  Arusha CBD, Tanzania (Near Clock Tower & Central Market)
                </p>
                
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#222222] border border-[#333333] text-xs font-mono text-neutral-300">
                    <Compass className="w-3.5 h-3.5 text-[#F4B41A]" />
                    <span>Plus Code: <strong>{restaurantConfig.plusCode}</strong></span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Open Now until 9:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Opening Hours Info */}
              <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2E2E2E] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Clock className="w-4 h-4 text-[#F4B41A]" />
                    <span>Dine-In, Pickup & Delivery Hours</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider">7 Days</span>
                </div>
                <p className="text-xs text-neutral-300 font-medium">
                  {restaurantConfig.hours.daysDescription}
                </p>
                <div className="pt-2 border-t border-[#292929] flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Fast Bodaboda Delivery</span>
                  <span className="text-[#F4B41A] font-bold">15–25 mins avg</span>
                </div>
              </div>

              {/* Access Modes in CBD */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                  Getting Here (Arusha CBD Navigation)
                </span>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-neutral-300">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#202020] border border-[#2E2E2E]">
                    <Footprints className="w-4 h-4 text-[#F4B41A] shrink-0" />
                    <div>
                      <div className="font-bold text-white">Walking in CBD</div>
                      <div className="text-[10px] text-neutral-400">5 min from Clock Tower</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#202020] border border-[#2E2E2E]">
                    <Bike className="w-4 h-4 text-[#F4B41A] shrink-0" />
                    <div>
                      <div className="font-bold text-white">Bodaboda / Bajaj</div>
                      <div className="text-[10px] text-neutral-400">Pangani St drop-off</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#202020] border border-[#2E2E2E]">
                    <Car className="w-4 h-4 text-[#F4B41A] shrink-0" />
                    <div>
                      <div className="font-bold text-white">Taxi / Rideshare</div>
                      <div className="text-[10px] text-neutral-400">Pangani street frontage</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#202020] border border-[#2E2E2E]">
                    <ShieldCheck className="w-4 h-4 text-[#F4B41A] shrink-0" />
                    <div>
                      <div className="font-bold text-white">Kerbside Pickup</div>
                      <div className="text-[10px] text-neutral-400">Car window handoff</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-5 border-t border-[#282828] space-y-3">
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="location-get-directions-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#F4B41A] hover:bg-[#ffc933] text-black font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#F4B41A]/20 active:scale-[0.98] transition-all"
              >
                <Navigation className="w-4 h-4 text-black stroke-[3]" />
                <span>Open in Google Maps (Get Directions)</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${restaurantConfig.phoneRaw}`}
                  className="flex-1 py-3 px-3 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-white border border-[#333333] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F4B41A]" />
                  <span>Call {restaurantConfig.phoneDisplay}</span>
                </a>

                <button
                  onClick={handleShare}
                  className="py-3 px-3 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-neutral-300 hover:text-white border border-[#333333] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  title="Share restaurant location"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-[#F4B41A]" />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Well-Structured Google Map View (7 cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border-2 border-[#2F2F2F] bg-[#1A1A1A] shadow-2xl relative min-h-[440px]">
            
            {/* Real Google Maps Embed */}
            <iframe
              title="CHIC-N-FILL Exact Google Maps Location - Pangani Street, Arusha CBD"
              src={googleMapSrc}
              className="w-full h-full min-h-[460px] border-0"
              loading="lazy"
              allowFullScreen
            />

            {/* Overlaid Google Maps Style Info Card (Top Left) */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm p-4 rounded-2xl bg-[#141414]/95 backdrop-blur-md border border-[#333333] shadow-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-md">
                  <img src="/logo.svg" alt="CHIC-N-FILL Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-black text-sm text-white truncate">
                      CHIC-N-FILL
                    </h4>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-[#F4B41A] text-[9px] font-bold">
                      CBD
                    </span>
                  </div>
                  
                  {/* Google Star Rating */}
                  <div className="flex items-center gap-1.5 mt-0.5 text-xs text-neutral-300">
                    <span className="font-bold text-[#F4B41A]">4.4</span>
                    <div className="flex items-center text-[#F4B41A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#F4B41A]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-neutral-400 font-normal">(66 reviews)</span>
                  </div>
                  
                  <p className="text-[11px] text-neutral-400 mt-1 truncate">
                    Fast food restaurant & pizzeria • Pangani St
                  </p>
                </div>
              </div>

              {/* Quick Card Action Buttons */}
              <div className="mt-3 pt-3 border-t border-[#292929] flex items-center justify-between text-xs font-bold">
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F4B41A] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Directions</span>
                </a>

                <a
                  href="#reserve"
                  className="inline-flex items-center gap-1 text-white hover:text-[#F4B41A]"
                >
                  <span>Book Table</span>
                </a>

                <a
                  href={`tel:${restaurantConfig.phoneRaw}`}
                  className="inline-flex items-center gap-1 text-neutral-300 hover:text-white"
                >
                  <Phone className="w-3 h-3 text-[#F4B41A]" />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Map Controls Floating Bar (Bottom) */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
              
              {/* Map / Satellite Toggle Buttons */}
              <div className="inline-flex items-center p-1 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 shadow-lg text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setMapType('roadmap')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    mapType === 'roadmap'
                      ? 'bg-[#F4B41A] text-black shadow-sm'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Map View
                </button>
                <button
                  type="button"
                  onClick={() => setMapType('satellite')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    mapType === 'satellite'
                      ? 'bg-[#F4B41A] text-black shadow-sm'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Satellite
                </button>
              </div>

              {/* Direct Open in Google Maps */}
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black/85 hover:bg-black text-white text-xs font-bold backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:scale-105"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F4B41A]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
