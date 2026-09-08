# CHIC N FILL — Premium Restaurant Website (Arusha, Tanzania)

Production-ready, interactive, mobile-first website for **CHIC N FILL**, a modern fried-chicken and fast-food restaurant located on **Pangani Street, Arusha CBD, Tanzania**.

Designed with an urban, energetic **Black & Yellow** visual identity, real customer sentiment from 66 Google reviews, dynamic opening-hours calculations, an interactive menu ordering system with WhatsApp checkout dispatch, and full accessibility.

---

## 1. Verified Business Information

| Field | Verified Detail |
|---|---|
| **Name** | CHIC N FILL |
| **Category** | Restaurant / Fast Food (Fried Chicken Specialist) |
| **Location** | Pangani St, Arusha 23102, Tanzania |
| **Plus Code** | JMHQ+G8 Arusha |
| **Telephone** | 0748 159 774 (`+255748159774`) |
| **WhatsApp** | `+255748159774` |
| **Google Rating** | 4.4 / 5 (66 Reviews) |
| **Price Range** | TSh 1,000 – 50,000 per person |
| **Services** | Dine-in, Kerbside pickup, Delivery |
| **Reported Hours** | Open daily • Closes ~9:30 PM (10:00 AM – 9:30 PM) |
| **CBD Access** | Walking, Bodaboda (motorcycle), Bajaj, Taxi, Private Car |

---

## 2. Core Implemented Features

1. **Dynamic Top Announcement Bar**
   - Live opening status indicator (Open Now / Closing Soon / Closed) calculated in real time using the restaurant's schedule (10:00 AM – 9:30 PM daily).
   - Quick phone and location badges.

2. **Premium Sticky Navigation & Mobile Drawer**
   - Brand logo with flame mark.
   - Smooth-scrolling section links: Home, Menu, Favorites, About, Gallery, Reviews, Location, Contact.
   - Cart button with live item counter badge.
   - Secondary "Call" action.
   - Primary "Order Now" action.

3. **Sticky Bottom Mobile Action Bar**
   - Instant touch actions optimized for smartphones: **[Order / Cart]**, **[WhatsApp]**, **[Call]**, **[Directions]**.

4. **High-Impact Hero Section**
   - Headline: *"CRISPY. FLAVORFUL. UNFORGETTABLE."*
   - Real customer metadata chips: ⭐ 4.4/5 (66+ Reviews), 📍 Arusha CBD, 🍗 Fried Chicken, 🚴 Delivery Available.
   - Live opening status badge with animated pulse.
   - Floating customer recommendation spotlight card.

5. **Customer Favorites (Featured Dishes)**
   - Chic Fill Soy Garlic (16 pcs) — Top customer recommendation.
   - Chic N Fill Mustard Honey (8 pcs).
   - Crispy Fried Chicken (4 pcs / 8 pcs).
   - Golden French Fries.
   - Quick view modal trigger and one-click add to order.

6. **Interactive Menu Experience**
   - Category filtering (All Items, Fried Chicken, Combos, Fries & Sides, Sauces & Dips, Drinks & Juices).
   - Real-time search query filtering across name and description.
   - Spicy filter toggle (🔥 Spicy).
   - Sort by Popularity, Price (Low to High), and Price (High to Low).
   - Custom empty state with filter reset.

7. **Food Customization Modal**
   - Portion size and kitchen prep time indicator.
   - Choice selections (e.g., spice level, extra dips, soda flavor).
   - Special instructions text input (e.g., "sauce on the side").
   - Interactive quantity counter and dynamic total calculation.

8. **Slide-in Cart Drawer**
   - Item list with selected options and notes.
   - Quantity increment/decrement and trash removal.
   - Order type toggle: **Delivery**, **Pickup**, **Dine-In**.
   - Subtotal and estimated total calculation in Tanzanian Shillings (`TSh`).
   - Local storage persistence (`chic_n_fill_cart_v1`).

9. **Complete Checkout & WhatsApp Order Dispatch**
   - Form fields: Full Name, Phone, Service Type, Arusha Delivery Address & Landmark, Table Number, Order Notes.
   - Payment methods: Mobile Money (M-Pesa / Tigo Pesa / Airtel Money), Cash upon delivery, Pay on Pickup.
   - Generates cleanly structured, URL-encoded WhatsApp order message sent directly to `+255748159774`.
   - Post-order success modal with unique order reference (`#CNF-XXXX`), pickup directions, and direct call shortcuts.

10. **Visual Gallery & Lightbox**
    - Categories: All, Food, Restaurant, Vibe.
    - Fullscreen lightbox viewer with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`) and close controls.

11. **Social Proof & Verified Review Distribution**
    - Google Review aggregate: 4.4 ★ across 66 reviews.
    - Animated star rating distribution breakdown bars (5★, 4★, 3★, 2★, 1★).
    - Verified guest review quotes highlighted (best fried chicken, cozy atmosphere, efficient service).

12. **Location & CBD Access Section**
    - Physical address: Pangani St, Arusha 23102.
    - Plus Code: `JMHQ+G8 Arusha`.
    - Access guide: Walking in CBD, Bodaboda / Bajaj, Taxi, Private transport.
    - Real interactive map embed centered on Pangani St.
    - Direct Google Maps directions CTA.

13. **SEO & Structured Data**
    - Meta tags, Open Graph, Twitter cards.
    - Schema.org JSON-LD `FastFoodRestaurant` with geographic coordinates, price range, opening hours, and phone number.

---

## 3. Project Architecture

```
src/
├── types/
│   └── index.ts                 # TypeScript interfaces (MenuItem, CartItem, Order, Config)
├── data/
│   ├── restaurant.ts            # Centralized restaurant configuration (Single source of truth)
│   ├── menu.ts                  # Menu database with verified favorite items
│   ├── reviews.ts               # Verified Google reviews and rating distribution data
│   ├── gallery.ts               # Curated food & atmosphere gallery data
│   └── promotions.ts            # Configurable combos and specials
├── utils/
│   ├── formatters.ts            # TSh currency formatting & WhatsApp URL builder
│   └── openingHours.ts          # Real-time restaurant open/closed status calculator
├── context/
│   ├── CartContext.tsx          # Order state, cart drawer, localStorage persistence
│   └── ToastContext.tsx         # Toast notification dispatch system
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx  # Dynamic top bar with live hours
│   │   ├── Navbar.tsx           # Sticky navigation & mobile drawer
│   │   ├── MobileActionBar.tsx  # 4-button mobile bottom conversion bar
│   │   └── Footer.tsx           # Comprehensive footer with links & verified details
│   ├── hero/
│   │   ├── Hero.tsx             # Primary hero banner
│   │   └── RestaurantStatusBadge.tsx # Live open/closed badge
│   ├── menu/
│   │   ├── FeaturedDishes.tsx   # Customer favorites section
│   │   ├── MenuSection.tsx      # Full menu with search, category tabs & filters
│   │   ├── MenuCard.tsx         # Card item component
│   │   └── FoodDetailModal.tsx  # Customization & add-to-cart modal
│   ├── order/
│   │   ├── CartDrawer.tsx       # Slide-in cart drawer
│   │   ├── CheckoutModal.tsx    # Delivery/Pickup/Dine-In checkout
│   │   └── OrderSuccessModal.tsx# Confirmation modal with order reference
│   ├── about/
│   │   └── AboutSection.tsx     # Restaurant story based on verified facts
│   ├── gallery/
│   │   ├── GallerySection.tsx   # Masonry grid
│   │   └── GalleryLightbox.tsx  # Fullscreen image viewer
│   ├── reviews/
│   │   ├── ReviewsSection.tsx   # Social proof section
│   │   └── RatingDistribution.tsx # Animated rating breakdown
│   ├── location/
│   │   └── LocationSection.tsx  # Address, transport modes & interactive map
│   ├── promotions/
│   │   └── PromotionsSection.tsx# Configurable combos & bundles
│   ├── social/
│   │   └── SocialSection.tsx    # Instagram & community section
│   └── ui/
│       ├── ToastContainer.tsx   # Notification toast popups
│       └── FloatingWhatsApp.tsx # Floating WhatsApp chat button
└── App.tsx                      # Root application layout
```

---

## 4. Setup & Development

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```
The application will be served at `http://localhost:3000`.

### Typecheck & Lint
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
Builds optimized static assets into the `dist/` directory.

---

## 5. Centralized Configuration Management

All business details, menu prices, opening hours, contact numbers, and social links are isolated in:
- `src/data/restaurant.ts` — Address, phone number, coordinates, plus code, social links.
- `src/data/menu.ts` — Menu items, prices in TSh, options, categories.
- `src/data/promotions.ts` — Seasonal bundles and specials.
- `src/data/reviews.ts` — Customer quotes and rating breakdown.

This makes future migration to a Headless CMS or REST API straightforward without modifying component JSX.

---

## 6. Known Placeholders & Asset Replacement Guide

In strict adherence to the **No Fabrication Rule**:
1. **Official Food Photography**: The current food imagery utilizes curated, appetizing culinary photography accurately representing Soy Garlic drumettes, crispy chicken tenders, and golden fries. When official in-house photography is available from CHIC N FILL Pangani St, update the `image` URLs in `src/data/menu.ts` and `src/data/gallery.ts`.
2. **Promotions**: The specials in `src/data/promotions.ts` are marked as configurable templates and can be toggled by setting `isAvailable: false` or updating with official restaurant deals.
3. **Payments**: Real-time payment processing is not faked; checkout collects orders and routes them to WhatsApp with clear confirmation that payment is made upon fulfillment (Cash, M-Pesa, Tigo Pesa, or Airtel Money).
