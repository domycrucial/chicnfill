import React, { useState } from 'react';
import { getQuickWhatsAppChatUrl } from '../../utils/formatters';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3 pointer-events-auto"
    >
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-2">
          <span>Order or Chat via WhatsApp?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5"
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
  );
};
