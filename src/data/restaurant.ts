import { RestaurantConfig } from '../types';

export const restaurantConfig: RestaurantConfig = {
  name: 'CHIC-N-FILL',
  tagline: 'Crispy Fried Chicken, Stone-Baked Pizza & Sharing Feasts',
  category: 'Fast Food Restaurant & Pizzeria',
  address: 'Pangani St',
  city: 'Arusha',
  postalCode: '23102',
  plusCode: 'JHGH+6M Arusha, Tanzania',
  coordinates: {
    lat: -3.3725,
    lng: 36.6944,
  },
  phoneDisplay: '0745 138 774',
  phoneRaw: '+255745138774',
  whatsappNumber: '255745138774',
  priceRange: 'TSh 1,500 – 70,000 per person',
  rating: 4.4,
  reviewCount: 66,
  services: ['Dine-in', 'Kerbside pickup', 'Delivery'],
  features: [
    'Credit cards accepted',
    'Delivery',
    'Wi-Fi',
    'Takeaway',
    'Booking',
    'Wheelchair accessible',
  ],
  transportOptions: [
    'Walking from town center',
    'Motorcycle / Bodaboda',
    'Taxi / Ride-hailing drop-off',
    'Street parking along Pangani St',
  ],
  hours: {
    openTime: '10:00',
    closeTime: '21:30',
    daysDescription: 'Daily: 10:00 AM – 9:30 PM (Fri/Sat till late)',
  },
  announcement: {
    enabled: true,
    text: '🔥 Tuesday Special: 4pcs Drumsticks + Regular Fries with sauce for TSh 13,000!',
    subtext: 'Dine-in, takeaway, or call 0745 138 774',
  },
  social: {
    instagram: 'https://instagram.com/chicnfill',
    tiktok: 'https://tiktok.com/@chicnfill',
    facebook: 'https://facebook.com/chicnfill',
  },
};
