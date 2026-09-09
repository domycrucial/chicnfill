import React, { useState, useEffect } from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { useCart } from '../../context/CartContext';
import { Logo } from '../ui/Logo';
import { 
  ShoppingBag, 
  Phone, 
  Menu as MenuIcon, 
  X, 
  ChevronRight,
  MessageCircle,
  Navigation,
  Sparkles
} from 'lucide-react';
import { getDirectionsUrl } from '../../utils/formatters';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Packages', href: '#packages' },
    { label: 'Menu', href: '#menu' },
    { label: 'Events', href: '#events' },
    { label: 'Events & Vibe', href: '#gallery' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/95 backdrop-blur-md shadow-xl border-b border-[#252525]'
            : 'bg-[#111111] border-b border-[#222222]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo with Official Vector Marks */}
          <a
            href="#home"
            className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B41A] rounded-xl shrink-0"
            aria-label="CHIC-N-FILL Homepage"
          >
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation Links - Single Row, Centered Baseline */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap px-3 py-2 text-xs xl:text-[13px] font-bold uppercase tracking-wider text-neutral-300 hover:text-[#F4B41A] rounded-lg hover:bg-white/5 transition-all duration-150 inline-flex items-center leading-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons - Standardized Height & Strict Centering */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Phone Call Button (Desktop/Tablet) */}
            <a
              href={`tel:${restaurantConfig.phoneRaw}`}
              id="navbar-call-btn"
              className="hidden sm:inline-flex h-10 items-center gap-1.5 px-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#1C1C1C] text-neutral-200 hover:text-white hover:bg-[#262626] border border-[#333333] transition-all leading-none"
              aria-label="Call CHIC-N-FILL on 0659 263 416"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B41A]" />
              <span>{restaurantConfig.phoneDisplay}</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              id="navbar-cart-btn"
              className="relative h-10 inline-flex items-center gap-2 px-3 sm:px-3.5 rounded-xl bg-[#1C1C1C] hover:bg-[#252525] border border-[#333333] text-white font-bold transition-all hover:border-[#F4B41A]/60 leading-none text-xs sm:text-sm"
              aria-label={`Open Cart with ${totalItemsCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#F4B41A]" />
              <span>Cart</span>
              {totalItemsCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[18px] h-4.5 px-1 text-[10px] font-black text-black bg-[#F4B41A] rounded-full shadow-sm">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Primary CTA - Order Now (Visible on tablet/desktop, placed inside menu toggle on mobile) */}
            <a
              href="#menu"
              id="navbar-order-now-btn"
              className="hidden md:inline-flex h-10 items-center justify-center px-4 sm:px-5 rounded-xl text-xs sm:text-sm font-black bg-[#F4B41A] text-black hover:bg-[#ffc933] shadow-md shadow-[#F4B41A]/20 transition-all leading-none whitespace-nowrap"
            >
              Order Now
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-xl text-neutral-300 hover:text-white hover:bg-[#222222] border border-[#333333] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#111111]/98 backdrop-blur-xl animate-in fade-in duration-200"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#252525]">
            <Logo variant="full" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-neutral-400 hover:text-white bg-[#1E1E1E] border border-[#333333]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
            {/* Primary Order Now Button - Inside Mobile Nav Menu Toggle */}
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              id="mobile-drawer-order-now-btn"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl text-base font-black bg-[#F4B41A] text-black shadow-lg shadow-[#F4B41A]/25 active:scale-[0.98] transition-all"
            >
              <ShoppingBag className="w-5 h-5 text-black" />
              <span>Order Now</span>
            </a>

            <div className="space-y-1.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-bold text-neutral-200 hover:text-black hover:bg-[#F4B41A] transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#252525] space-y-2.5">
              <a
                href={`tel:${restaurantConfig.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-[#1F1F1F] text-white border border-[#333333]"
              >
                <Phone className="w-4 h-4 text-[#F4B41A]" />
                <span>Call {restaurantConfig.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${restaurantConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {restaurantConfig.phoneDisplay}</span>
              </a>

              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-[#1A1A1A] text-neutral-300 border border-[#333333]"
              >
                <Navigation className="w-4 h-4 text-[#F4B41A]" />
                <span>Directions to Pangani St</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
