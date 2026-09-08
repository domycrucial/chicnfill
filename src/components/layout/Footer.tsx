import React from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { getDirectionsUrl, getQuickWhatsAppChatUrl } from '../../utils/formatters';
import { Logo } from '../ui/Logo';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Navigation, 
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0D0D0D] border-t border-[#222222] text-neutral-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#202020]">
          
          {/* Brand & Address Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="full" />

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Artisanal soy garlic and honey mustard crispy chicken, freshly baked stone-oven pizza slices, and family combo packages right in the center of Arusha.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#F4B41A] shrink-0" />
                <span>{restaurantConfig.address}, Tanzania</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Clock className="w-4 h-4 text-[#F4B41A] shrink-0" />
                <span>{restaurantConfig.hours.daysDescription}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Phone className="w-4 h-4 text-[#F4B41A] shrink-0" />
                <a href={`tel:${restaurantConfig.phoneRaw}`} className="hover:text-white transition-colors">
                  {restaurantConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Packages', href: '#packages' },
                { label: 'Menu', href: '#menu' },
                { label: 'Events', href: '#events' },
                { label: 'Events & Vibe', href: '#gallery' },
                { label: 'Reserve Table', href: '#reserve' },
                { label: 'About', href: '#about' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Location', href: '#location' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F4B41A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Accessibility (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
              Services & Access
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                <span>Dine-in (Cozy indoor setting)</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                <span>Kerbside Pickup (Fast handoff)</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                <span>Delivery (Fast Bodaboda in Arusha)</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-400 text-xs pt-1">
                <span>Access: Walking, Bodaboda, Bajaj, Taxi</span>
              </li>
            </ul>
          </div>

          {/* Direct Actions Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
              Connect & Order
            </h4>
            <p className="text-xs text-neutral-400">
              Ready for crispy chicken & hot pizza? Order via WhatsApp or call our kitchen team directly.
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={getQuickWhatsAppChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {restaurantConfig.phoneDisplay}</span>
              </a>

              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#1C1C1C] hover:bg-[#252525] text-white border border-[#333333] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <span>© 2026 CHIC-N-FILL. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1A1A1A] hover:bg-[#262626] text-neutral-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
