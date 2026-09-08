import React, { useState, useMemo } from 'react';
import { galleryItems } from '../../data/gallery';
import { GalleryLightbox } from './GalleryLightbox';
import { 
  Camera, 
  ZoomIn, 
  Sparkles, 
  PartyPopper, 
  Flame, 
  Utensils, 
  Bike, 
  Instagram,
  ArrowRight
} from 'lucide-react';
import { restaurantConfig } from '../../data/restaurant';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'events' | 'dining' | 'kitchen' | 'packages'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all' as const, label: 'All Photos', icon: Sparkles },
    { key: 'events' as const, label: 'Celebrations', icon: PartyPopper },
    { key: 'dining' as const, label: 'Atmosphere', icon: Utensils },
    { key: 'kitchen' as const, label: 'Kitchen & Sizzle', icon: Flame },
    { key: 'packages' as const, label: 'Catering & Delivery', icon: Bike },
  ];

  const filteredGallery = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 bg-[#141414] border-b border-[#252525] relative w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-3 border border-[#F4B41A]/20">
              <Camera className="w-3.5 h-3.5" />
              <span>Events & Vibe</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              EVENTS & VIBE GALLERY
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
              Tap any photo to view full image details and story.
            </p>
          </div>

          {/* Instagram Follow Link */}
          <div className="flex items-center">
            <a
              href={restaurantConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 border border-[#fd1d1d]/40 text-neutral-200 hover:text-white text-xs font-bold transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4 text-[#fd1d1d]" />
              <span>Follow @chicnfill on Instagram</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8 w-full max-w-full">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F4B41A] text-black shadow-lg shadow-[#F4B41A]/20 scale-[1.02]'
                    : 'bg-[#1F1F1F] text-neutral-300 hover:text-white hover:bg-[#282828] border border-[#333333]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Pure Images Arrangement - Zero Text on Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {filteredGallery.map((item, index) => {
            // Bento layout: items 0 and 7 span 2 cols on tablet/desktop in 'all' view for a dynamic mosaic
            const isFeatured = activeCategory === 'all' && (index === 0 || index === 7);

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-[#2D2D2D] hover:border-[#F4B41A] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 ${
                  isFeatured ? 'col-span-2 aspect-16/10 sm:aspect-auto' : 'aspect-square sm:aspect-4/3'
                }`}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle dark overlay on hover with centered zoom icon - NO TEXT AT ALL */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-black/75 text-[#F4B41A] flex items-center justify-center backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shadow-xl">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal with Text Pop-up Down Below the Image */}
      <GalleryLightbox
        items={filteredGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
