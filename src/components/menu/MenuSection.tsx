import React, { useState, useMemo } from 'react';
import { menuItems } from '../../data/menu';
import { MenuCategory, MenuItem } from '../../types';
import { MenuCard } from './MenuCard';
import { Search, X, SlidersHorizontal, UtensilsCrossed, ChevronDown, ChevronUp, Sparkles, Filter } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [spicyOnly, setSpicyOnly] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Initial number of items displayed to keep the page clean and prevent endless scrolling
  const INITIAL_LIMIT = 6;

  const categories: { key: MenuCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Items', count: menuItems.length },
    { key: 'chicken', label: 'Chicken', count: menuItems.filter((i) => i.category === 'chicken').length },
    { key: 'sandwiches', label: 'Sandwiches', count: menuItems.filter((i) => i.category === 'sandwiches').length },
    { key: 'drumsticks', label: 'Drumsticks', count: menuItems.filter((i) => i.category === 'drumsticks').length },
    { key: 'fries', label: 'Fries', count: menuItems.filter((i) => i.category === 'fries').length },
    { key: 'pizza', label: 'Pizza', count: menuItems.filter((i) => i.category === 'pizza').length },
    { key: 'biryani', label: 'Biryani', count: menuItems.filter((i) => i.category === 'biryani').length },
    { key: 'kisinia', label: 'Kisinia Feast', count: menuItems.filter((i) => i.category === 'kisinia').length },
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

  // When searching or filtering by a specific category, show all matching items.
  // Otherwise, respect the isExpanded toggle to prevent infinite scrolling fatigue.
  const displayedItems = useMemo(() => {
    if (activeCategory !== 'all' || searchQuery.trim().length > 0 || isExpanded) {
      return filteredItems;
    }
    return filteredItems.slice(0, INITIAL_LIMIT);
  }, [filteredItems, activeCategory, searchQuery, isExpanded]);

  const hasHiddenItems = activeCategory === 'all' && !searchQuery.trim() && filteredItems.length > INITIAL_LIMIT;

  const handleCategorySelect = (key: MenuCategory) => {
    setActiveCategory(key);
    // Reset expansion when switching categories
    setIsExpanded(false);
  };

  return (
    <section id="menu" className="py-14 md:py-20 bg-[#111111] border-b border-[#222222] w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-2">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Pangani Street Kitchen</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            OUR COMPLETE MENU
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Authentic fried chicken, double sandwiches, golden drumsticks, boat box fries, 12" mince pizza, rich biryani, and tropical juices.
          </p>
        </div>

        {/* Controls Bar: Search + Category Pills + Filters */}
        <div className="space-y-4 mb-8">
          {/* Search Bar & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chicken, sandwich, drumstick, pizza, biryani..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#2F2F2F] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#F4B41A] transition-colors"
                aria-label="Search dishes"
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

            {/* Filter controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <div className="relative flex items-center">
                <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400 absolute left-3 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="pl-8 pr-7 py-2 rounded-xl bg-[#1A1A1A] border border-[#2F2F2F] text-xs font-semibold text-neutral-200 focus:outline-none focus:border-[#F4B41A] appearance-none cursor-pointer"
                  aria-label="Sort dishes"
                >
                  <option value="featured">Popularity</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setSpicyOnly(!spicyOnly)}
                className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  spicyOnly
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                    : 'bg-[#1A1A1A] border-[#2F2F2F] text-neutral-400 hover:text-white'
                }`}
                aria-pressed={spicyOnly}
              >
                <span>🔥 Spicy</span>
              </button>
            </div>
          </div>

          {/* Category Horizontal Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar w-full max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategorySelect(cat.key)}
                  id={`category-pill-${cat.key}`}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-[#F4B41A] text-black shadow-lg shadow-[#F4B41A]/20 scale-102'
                      : 'bg-[#1A1A1A] hover:bg-[#252525] text-neutral-300 border border-[#2B2B2B]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive ? 'bg-black text-[#F4B41A]' : 'bg-[#292929] text-neutral-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info Counter */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-6">
          <div>
            Showing <strong className="text-white">{displayedItems.length}</strong> of{' '}
            <strong className="text-white">{filteredItems.length}</strong> dishes
            {activeCategory !== 'all' && <span> in {categories.find((c) => c.key === activeCategory)?.label}</span>}
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#F4B41A] hover:underline cursor-pointer"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Dishes Grid */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((dish) => (
              <MenuCard key={dish.id} item={dish} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#161616] rounded-3xl border border-[#262626] p-8 max-w-lg mx-auto">
            <UtensilsCrossed className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <h3 className="font-heading font-black text-xl text-white">No dishes matched</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Try searching with another keyword or explore all items in our categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSpicyOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#F4B41A] text-black text-xs font-bold hover:bg-[#ffca36] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* "Explore More / Show Less" Button to Prevent Endless Scrolling */}
        {hasHiddenItems && (
          <div className="mt-10 text-center">
            <button
              type="button"
              id="toggle-explore-full-menu-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1E1E1E] hover:bg-[#F4B41A] text-[#F4B41A] hover:text-black border border-[#3A3A3A] hover:border-[#F4B41A] text-sm font-black transition-all duration-300 shadow-xl group cursor-pointer active:scale-95"
            >
              {isExpanded ? (
                <>
                  <span>Show Fewer Dishes</span>
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  <span>Explore Full Menu ({filteredItems.length} Dishes)</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
            <p className="text-[11px] text-neutral-500 mt-2">
              {isExpanded ? 'Showing all menu items' : 'Click to explore all pizzas, biryanis, sandwiches & sides'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
