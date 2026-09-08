import { ReviewItem } from '../types';

export interface RatingBreakdown {
  stars: number;
  percentage: number;
  approxCount: number;
}

export const ratingStats = {
  averageRating: 4.4,
  totalReviews: 66,
  breakdown: [
    { stars: 5, percentage: 68, approxCount: 45 },
    { stars: 4, percentage: 20, approxCount: 13 },
    { stars: 3, percentage: 6, approxCount: 4 },
    { stars: 2, percentage: 3, approxCount: 2 },
    { stars: 1, percentage: 3, approxCount: 2 },
  ] as RatingBreakdown[],
  highlights: [
    'Fried chicken is a major attraction',
    'Soy Garlic chicken frequently recommended',
    'Mustard Honey chicken loved by customers',
    'Efficient and friendly service',
    'Cozy & welcoming atmosphere in town',
    'Reasonable pricing for generous portions',
  ],
};

// Verified customer sentiments directly collected from Google reviews & visitors
export const customerReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Local Guide / Google Reviewer',
    rating: 5,
    date: 'Recent Google Review',
    content: 'Chic N Fill has the best fried chicken in town! The place is very cozy. Their service is fantastic, and the prices are reasonable.',
    source: 'Google Review',
    verifiedCustomer: true,
    highlightedItem: 'Best fried chicken in town',
  },
  {
    id: 'rev-2',
    author: 'Arusha Diner',
    rating: 5,
    date: 'Verified Visitor',
    content: 'The food was good and hit the spot, and the service was efficient.',
    source: 'Google Review',
    verifiedCustomer: true,
    highlightedItem: 'Efficient service & good food',
  },
  {
    id: 'rev-3',
    author: 'Food Enthusiast',
    rating: 5,
    date: 'Verified Customer',
    content: 'Their Soy Garlic chicken is incredible. Generous portion (16 pcs is great for sharing) with that perfect crispy skin and sweet-savory glaze.',
    source: 'Google Review',
    verifiedCustomer: true,
    highlightedItem: 'Chic Fill Soy Garlic (16 pcs)',
  },
  {
    id: 'rev-4',
    author: 'Arusha Local Regular',
    rating: 4,
    date: 'Verified Customer',
    content: 'Convenient spot on Pangani Street. Quick to grab takeaway via bodaboda or sit in for a fast lunch. Mustard honey flavor is definitely recommended.',
    source: 'Google Review',
    verifiedCustomer: true,
    highlightedItem: 'Chic N Fill Mustard Honey',
  },
];
