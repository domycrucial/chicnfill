import React, { useEffect, useCallback } from 'react';
import { GalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles, MapPin, Tag } from 'lucide-react';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isVisible = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isVisible || currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    },
    [isVisible, currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible || currentIndex === null) return null;

  const currentItem = items[currentIndex];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      id="gallery-lightbox-modal"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Top action bar: Counter & Close button */}
      <div className="fixed top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none max-w-5xl mx-auto">
        <div className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300">
          <span className="text-[#F4B41A] font-bold">{currentIndex + 1}</span> / {items.length}
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-black/80 text-white hover:bg-neutral-800 hover:text-[#F4B41A] transition-colors border border-white/10 shadow-lg"
          aria-label="Close image popup"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/80 text-white hover:bg-[#F4B41A] hover:text-black transition-all border border-white/10 shadow-xl"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/80 text-white hover:bg-[#F4B41A] hover:text-black transition-all border border-white/10 shadow-xl"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Content Container: Image on top, Text Down */}
      <div className="relative max-w-3xl w-full my-auto flex flex-col items-center pt-10 pb-6 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Main Image */}
        <div className="w-full flex justify-center bg-black/50 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[55vh] sm:max-h-[62vh] w-full object-contain"
          />
        </div>

        {/* Text Pop-up Card Down Below */}
        <div className="mt-3.5 w-full bg-[#181818] border border-[#2E2E2E] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl space-y-3">
          {/* Top metadata tags */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-black bg-[#F4B41A] px-2.5 py-0.5 rounded-md">
                <Tag className="w-3 h-3" />
                <span>{currentItem.categoryLabel}</span>
              </span>

              {currentItem.dateOrTag && (
                <span className="text-xs text-neutral-300 font-medium flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#242424] border border-[#333333]">
                  <Calendar className="w-3 h-3 text-[#F4B41A]" />
                  <span>{currentItem.dateOrTag}</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#F4B41A]" />
              <span>Pangani St, Arusha</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
            {currentItem.title}
          </h3>

          {/* Description text */}
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {currentItem.caption}
          </p>

          {/* Highlights / Features footer */}
          {currentItem.attendeesOrHighlight && (
            <div className="pt-3 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-[#F4B41A] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#F4B41A]" />
                <span>{currentItem.attendeesOrHighlight}</span>
              </span>

              <span className="text-[11px] text-neutral-500">
                CHIC-N-FILL Moments
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
