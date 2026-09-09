import React, { useState, useEffect } from 'react';
import { getQuickWhatsAppChatUrl } from '../../utils/formatters';
import { MessageCircle, X, ArrowUp } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal the hanging scroll-to-top button once the user scrolls down
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="floating-actions-container"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Hanging Scroll To Top Arrow Button */}
      <div
        className={`transition-all duration-300 transform ${
          showScrollTop
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          id="floating-back-to-top-btn"
          aria-label="Scroll back to top"
          title="Scroll to top"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A1A1A]/95 backdrop-blur-md text-[#F4B41A] hover:bg-[#F4B41A] hover:text-black border border-[#333333] hover:border-[#F4B41A] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer mr-0.5 sm:mr-1"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
          <span className="sr-only">Back to top</span>
        </button>
      </div>

      {/* WhatsApp Quick Action Button + Tooltip */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Tooltip on desktop */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-2">
            <span>Order via WhatsApp: <strong>0659 263 416</strong></span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-white ml-1 p-0.5 cursor-pointer"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Floating Button */}
        <a
          href={getQuickWhatsAppChatUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-black hover:bg-[#20ba59] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Order or Chat via WhatsApp with CHIC-N-FILL"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F4B41A] rounded-full border-2 border-[#111111]" />
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-black text-black" />
        </a>
      </div>
    </div>
  );
};
