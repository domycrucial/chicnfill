import { CartItem, CustomerOrderDetails } from '../types';
import { restaurantConfig } from '../data/restaurant';

/**
 * Formats a number to Tanzanian Shillings format: e.g. TSh 38,000
 */
export function formatPriceTSh(amount: number): string {
  const formatted = new Intl.NumberFormat('en-TZ').format(amount);
  return `TSh ${formatted}`;
}

/**
 * Generates an encoded WhatsApp order URL with clean structured order summary
 */
export function generateWhatsAppOrderUrl(
  items: CartItem[],
  orderDetails: CustomerOrderDetails,
  totalAmount: number
): string {
  const itemsText = items
    .map((ci, index) => {
      let line = `${index + 1}. *${ci.item.name}* x${ci.quantity} — ${formatPriceTSh(
        (ci.item.price + ci.selectedOptions.reduce((acc, opt) => acc + opt.extraPrice, 0)) * ci.quantity
      )}`;
      if (ci.selectedOptions.length > 0) {
        line += `\n   ↳ ${ci.selectedOptions.map((o) => `${o.optionName}: ${o.choiceLabel}`).join(', ')}`;
      }
      if (ci.notes) {
        line += `\n   ↳ Note: "${ci.notes}"`;
      }
      return line;
    })
    .join('\n\n');

  let typeSpecificInfo = '';
  if (orderDetails.orderType === 'delivery') {
    typeSpecificInfo = `*Order Type:* 🛵 Delivery\n*Delivery Location:* ${orderDetails.deliveryAddress || 'Arusha'}${
      orderDetails.deliveryLandmark ? `\n*Landmark / Directions:* ${orderDetails.deliveryLandmark}` : ''
    }`;
  } else if (orderDetails.orderType === 'pickup') {
    typeSpecificInfo = `*Order Type:* 🛍️ Kerbside Pickup\n*Pickup Point:* CHIC N FILL, Pangani St, Arusha\n*Preferred Time:* ${orderDetails.pickupTime || 'As soon as ready'}`;
  } else {
    typeSpecificInfo = `*Order Type:* 🍽️ Dine-In\n*Table Number:* ${orderDetails.tableNumber || 'Walking in'}`;
  }

  const paymentLabel = 
    orderDetails.paymentMethod === 'mobile-money'
      ? 'Mobile Money (M-Pesa / Tigo Pesa / Airtel Money)'
      : orderDetails.paymentMethod === 'cash'
      ? 'Cash upon Delivery/Arrival'
      : 'Pay on Pickup at Counter';

  const rawMessage = [
    `🍗 *NEW ORDER — CHIC-N-FILL*`,
    `📍 Pangani St, Arusha 23102`,
    `--------------------------------`,
    `*Customer Name:* ${orderDetails.customerName}`,
    `*Phone:* ${orderDetails.phone}`,
    typeSpecificInfo,
    `*Payment Method:* ${paymentLabel}`,
    orderDetails.orderNotes ? `*Special Notes:* ${orderDetails.orderNotes}` : '',
    `--------------------------------`,
    `*ORDER ITEMS:*`,
    itemsText,
    `--------------------------------`,
    `*ESTIMATED TOTAL:* *${formatPriceTSh(totalAmount)}*`,
    `--------------------------------`,
    `Please confirm receipt and estimated prep time. Asante sana!`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;
}

/**
 * Quick WhatsApp greeting message URL for general inquiries
 */
export function getQuickWhatsAppChatUrl(customMessage?: string): string {
  const text = customMessage || `Habari CHIC N FILL! I would like to inquire about your menu and placing an order on Pangani St, Arusha.`;
  return `https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Google Maps directions URL for Pangani St, Arusha
 */
export function getDirectionsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'CHIC N FILL, Pangani St, Arusha, Tanzania'
  )}`;
}
