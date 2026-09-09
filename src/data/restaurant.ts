import { RestaurantConfig } from '../types';

export const restaurantConfig: RestaurantConfig = {
  name: 'CHIC-N-FILL',
  tagline: 'CRISPY CHICKEN • STONE-BAKED PIZZA • BOLD FLAVORS',
  category: 'Fast Food Restaurant & Pizzeria',
  address: 'Pangani St, Arusha 23102',
  city: 'Arusha',
  postalCode: '23102',
  plusCode: 'JMHQ+G8 Arusha',
  coordinates: {
    lat: -3.3725,
    lng: 36.6944,
  },
  phoneDisplay: '0659 263 416',
  phoneRaw: '+255659263416',
  whatsappNumber: '255659263416',
  priceRange: 'TSh 3,000 – 65,000 per person',
  rating: 4.4,
  reviewCount: 66,
  services: ['Dine-in', 'Kerbside pickup', 'Delivery'],
  transportOptions: [
    'Walking from town center',
    'Motorcycle / Bodaboda',
    'Bajaj',
    'Taxi / Rideshare',
    'Private transport',
  ],
  hours: {
    openTime: '10:00',
    closeTime: '21:30',
    daysDescription: 'Monday – Sunday: 10:00 AM – 9:30 PM',
  },
  announcement: {
    enabled: true,
    text: 'Fresh Chicken & Hot Slices Daily! 🍗🍕',
    subtext: 'Pangani St, Arusha • Fast Delivery & Kerbside Pickup',
  },
  social: {
    instagram: 'https://instagram.com/chicnfill',
    tiktok: 'https://tiktok.com/@chicnfill',
    facebook: 'https://facebook.com/chicnfill',
  },
};
