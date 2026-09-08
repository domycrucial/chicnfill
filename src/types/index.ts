export type OrderType = 'delivery' | 'pickup' | 'dine-in';

export type PaymentMethod = 'cash' | 'mobile-money' | 'pay-on-pickup';

export type MenuCategory = 
  | 'all'
  | 'packages'
  | 'chicken'
  | 'pizza'
  | 'fries-sides'
  | 'sauces-dips'
  | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number; // in TSh
  pieceCount?: number;
  description: string;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isPackage?: boolean;
  packageIncludes?: string[];
  portionSize?: string;
  availableOptions?: {
    name: string;
    choices: { label: string; extraPrice?: number }[];
  }[];
  prepTimeMinutes?: number;
  caloriesEstimate?: string;
}

export interface CartItemOption {
  optionName: string;
  choiceLabel: string;
  extraPrice: number;
}

export interface CartItem {
  cartItemId: string; // unique item instance id
  item: MenuItem;
  quantity: number;
  selectedOptions: CartItemOption[];
  notes?: string;
}

export interface CustomerOrderDetails {
  customerName: string;
  phone: string;
  orderType: OrderType;
  deliveryAddress?: string;
  deliveryLandmark?: string;
  pickupTime?: string;
  tableNumber?: string;
  paymentMethod: PaymentMethod;
  orderNotes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  source: 'Google Review' | 'Verified Guest';
  verifiedCustomer?: boolean;
  highlightedItem?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'events' | 'dining' | 'kitchen' | 'packages';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  dateOrTag?: string;
  attendeesOrHighlight?: string;
}

export interface PromotionItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  priceText?: string;
  badge?: string;
  validUntil?: string;
  isAvailable: boolean;
  includes?: string[];
}

export interface RestaurantHours {
  openTime: string; // "10:00"
  closeTime: string; // "21:30"
  daysDescription: string; // "Monday – Sunday: 10:00 AM – 9:30 PM"
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  category: string;
  address: string;
  city: string;
  postalCode: string;
  plusCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  services: string[];
  transportOptions: string[];
  hours: RestaurantHours;
  announcement: {
    enabled: boolean;
    text: string;
    subtext?: string;
  };
  social: {
    instagram: string;
    tiktok: string;
    facebook: string;
  };
}
