import { PromotionItem } from '../types';

export const promotionsData: PromotionItem[] = [
  {
    id: 'promo-family-pack',
    tag: 'Signature Sharing Bundle',
    title: '16 Pcs Soy Garlic Family Feast',
    description: 'Get our famed 16 pcs Soy Garlic chicken paired with 2 large fries and cold drinks at a bundled value price.',
    priceText: 'Special Bundle TSh 49,000',
    badge: 'Popular Combo',
    validUntil: 'Available Daily (Until 9:30 PM)',
    isAvailable: true,
  },
  {
    id: 'promo-lunch-deal',
    tag: 'Express Lunch Rush',
    title: 'Solo Crunch Box Lunch Special',
    description: '3 pieces crispy chicken + regular fries + choice of chilled soda. Freshly prepared in under 12 minutes for Arusha workers & students.',
    priceText: 'TSh 19,000',
    badge: 'Quick Service',
    validUntil: 'Monday – Friday',
    isAvailable: true,
  },
  {
    id: 'promo-weekend-wings',
    tag: 'Weekend Special',
    title: 'Mustard Honey & Peri-Peri Duo',
    description: 'Pair 8 pcs Mustard Honey chicken with our signature peri-peri spiced fries for the ultimate sweet-and-spicy weekend dinner.',
    priceText: 'TSh 29,000',
    badge: 'Weekend Highlight',
    validUntil: 'Saturday & Sunday',
    isAvailable: true,
  },
];
