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
  ArrowUp,
  Instagram,
  Facebook
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
              Crispy fried chicken, stone-baked pizzas, loaded burgers, and our famous Kisinia Watu 6 sharing feast right in the heart of Arusha.
            </p>

            {/* Social Media Channels in Footer */}
            <div className="pt-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-400 block mb-2.5">
                Official Social Media
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/chicnfill"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CHIC-N-FILL on Instagram"
                  className="w-10 h-10 rounded-xl bg-[#1C1C1C] hover:bg-[#F4B41A] text-neutral-300 hover:text-black border border-[#333333] hover:border-[#F4B41A] flex items-center justify-center transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://facebook.com/chicnfill"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CHIC-N-FILL on Facebook"
                  className="w-10 h-10 rounded-xl bg-[#1C1C1C] hover:bg-[#F4B41A] text-neutral-300 hover:text-black border border-[#333333] hover:border-[#F4B41A] flex items-center justify-center transition-all duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href={getQuickWhatsAppChatUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CHIC-N-FILL WhatsApp"
                  className="w-10 h-10 rounded-xl bg-[#1C1C1C] hover:bg-[#25D366] text-neutral-300 hover:text-black border border-[#333333] hover:border-[#25D366] flex items-center justify-center transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>

                <a
                  href={`tel:${restaurantConfig.phoneRaw}`}
                  aria-label="Call CHIC-N-FILL"
                  className="w-10 h-10 rounded-xl bg-[#1C1C1C] hover:bg-[#F4B41A] text-neutral-300 hover:text-black border border-[#333333] hover:border-[#F4B41A] flex items-center justify-center transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#F4B41A] shrink-0" />
                <span>Pangani St, Arusha, Tanzania</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Clock className="w-4 h-4 text-[#F4B41A] shrink-0" />
                <span>Daily 10:00 AM – 9:30 PM (Fri/Sat till late)</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Phone className="w-4 h-4 text-[#F4B41A] shrink-0" />
                <a href={`tel:${restaurantConfig.phoneRaw}`} className="hover:text-white transition-colors font-bold text-[#F4B41A]">
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
                { label: 'At a Glance', href: '#at-a-glance' },
                { label: 'Full Menu', href: '#menu' },
                { label: 'Kisinia Feast', href: '#kisinia' },
                { label: 'Atmosphere & Gallery', href: '#gallery' },
                { label: 'About Us', href: '#about' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Location & Map', href: '#location' },
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
                <span>Credit cards accepted</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                <span>Dine-in (Comfortable indoor booths)</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                <span>Takeaway & Kerbside pickup</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                <span>Fast city delivery across Arusha</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                <span>Free customer Wi-Fi</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B41A]" />
                <span>Wheelchair accessible</span>
              </li>
            </ul>
          </div>

          {/* Direct Actions Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
              Service Hotline
            </h4>
            <p className="text-xs text-neutral-300">
              Ready for crispy chicken, hot pizza, or Kisinia feast? Call our kitchen team directly.
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${restaurantConfig.phoneRaw}`}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F4B41A] hover:bg-[#ffc933] text-black text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {restaurantConfig.phoneDisplay}</span>
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
            <span>© 2026 CHIC-N-FILL Arusha. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-neutral-400">Pangani Street • Arusha, Tanzania</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1A1A1A] hover:bg-[#262626] text-neutral-400 hover:text-white transition-colors cursor-pointer"
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
