import React, { useState, useMemo } from 'react';
import { menuItems } from '../../data/menu';
import { MenuCategory, MenuItem } from '../../types';
import { MenuCard } from './MenuCard';
import { Search, X, SlidersHorizontal, UtensilsCrossed, Package, Drumstick, Pizza, Flame } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [spicyOnly, setSpicyOnly] = useState(false);

  const categories: { key: MenuCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Items', count: menuItems.length },
    { key: 'packages', label: 'Combos & Packages', count: menuItems.filter((i) => i.category === 'packages').length },
    { key: 'chicken', label: 'Fried Chicken', count: menuItems.filter((i) => i.category === 'chicken').length },
    { key: 'pizza', label: 'Stone-Baked Pizza', count: menuItems.filter((i) => i.category === 'pizza').length },
    { key: 'fries-sides', label: 'Fries & Sides', count: menuItems.filter((i) => i.category === 'fries-sides').length },
    { key: 'sauces-dips', label: 'Sauces & Dips', count: menuItems.filter((i) => i.category === 'sauces-dips').length },
    { key: 'drinks', label: 'Drinks & Juices', count: menuItems.filter((i) => i.category === 'drinks').length },
  ];

  const filteredItems = useMemo(() => {
    return menuItems
      .filter((item) => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch =
          !searchQuery.trim() ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSpicy = !spicyOnly || !!item.isSpicy;

        return matchesCategory && matchesSearch && matchesSpicy;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      });
  }, [activeCategory, searchQuery, sortBy, spicyOnly]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#111111] border-b border-[#222222] w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-bold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Pangani Street Kitchen</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            EXPLORE THE FULL MENU
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Crispy double-dredged chicken, stone-oven pizzas, loaded family packages, and signature glazes prepared fresh daily in Arusha.
          </p>
        </div>

        {/* Controls Bar: Search + Category Pills + Filters */}
        <div className="space-y-4 mb-10">
          {/* Search Bar & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chicken, pizza, packages, fries..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#2D2D2D] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B41A] transition-colors"
                id="menu-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              {/* Spicy filter button */}
              <button
                type="button"
                onClick={() => setSpicyOnly(!spicyOnly)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                  spicyOnly
                    ? 'bg-rose-950/60 border-rose-600 text-rose-300'
                    : 'bg-[#1A1A1A] border-[#2D2D2D] text-neutral-400 hover:text-white'
                }`}
              >
                <span>🔥 Spicy</span>
              </button>

              {/* Sort selector */}
              <div className="flex items-center gap-1.5 bg-[#1A1A1A] border border-[#2D2D2D] rounded-xl px-3 py-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-semibold text-neutral-300 focus:outline-none py-1.5 cursor-pointer"
                  aria-label="Sort menu items"
                >
                  <option value="featured" className="bg-[#1E1E1E] text-white">Popular First</option>
                  <option value="price-asc" className="bg-[#1E1E1E] text-white">Price: Low to High</option>
                  <option value="price-desc" className="bg-[#1E1E1E] text-white">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Horizontal Scroll Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar w-full max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                id={`category-pill-${cat.key}`}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.key
                    ? 'bg-[#F4B41A] text-black shadow-md shadow-[#F4B41A]/20 scale-[1.02]'
                    : 'bg-[#1A1A1A] text-neutral-300 hover:text-white hover:bg-[#252525] border border-[#2C2C2C]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                    activeCategory === cat.key ? 'bg-black/20 text-black' : 'bg-[#282828] text-neutral-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 px-4 text-center rounded-3xl bg-[#161616] border border-[#262626] max-w-md mx-auto">
            <UtensilsCrossed className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <h3 className="font-heading font-extrabold text-lg text-white">No items found</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
              We couldn't find anything matching "{searchQuery}". Try searching for "pizza", "chicken", or "packages".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setSpicyOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-xs font-bold text-[#F4B41A] border border-[#333333] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
