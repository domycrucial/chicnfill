import { restaurantConfig } from '../data/restaurant';

export interface OpeningStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  isClosingSoon: boolean;
}

/**
 * Calculates live opening status based on configured restaurant hours (10:00 to 21:30 daily).
 * Considers local Tanzania time (East Africa Time UTC+3) or client local time.
 */
export function getLiveRestaurantStatus(): OpeningStatus {
  // Use current date
  const now = new Date();
  
  // Calculate current minutes from midnight
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMin] = restaurantConfig.hours.openTime.split(':').map(Number);
  const [closeHour, closeMin] = restaurantConfig.hours.closeTime.split(':').map(Number);

  const openMinutes = openHour * 60 + openMin; // 10:00 = 600
  const closeMinutes = closeHour * 60 + closeMin; // 21:30 = 1290

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  const minutesUntilClose = closeMinutes - currentMinutes;
  const isClosingSoon = isOpen && minutesUntilClose <= 45 && minutesUntilClose > 0;

  if (isOpen) {
    if (isClosingSoon) {
      return {
        isOpen: true,
        statusText: 'Closing Soon',
        subText: `Closes at 9:30 PM (in ${minutesUntilClose} min)`,
        isClosingSoon: true,
      };
    }
    return {
      isOpen: true,
      statusText: 'Open Now',
      subText: 'Closes at 9:30 PM today',
      isClosingSoon: false,
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Closed',
      subText: 'Opens daily at 10:00 AM',
      isClosingSoon: false,
    };
  }
}
