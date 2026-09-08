import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CartItem, MenuItem, OrderType, CartItemOption } from '../types';
import { useToast } from './ToastContext';

interface CartContextType {
  items: CartItem[];
  orderType: OrderType;
  setOrderType: (type: OrderType) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  activeDetailItem: MenuItem | null;
  setActiveDetailItem: (item: MenuItem | null) => void;
  addItem: (item: MenuItem, quantity?: number, options?: CartItemOption[], notes?: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  subtotal: number;
  totalItemsCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'chic_n_fill_cart_v1';
const ORDER_TYPE_KEY = 'chic_n_fill_order_type_v1';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showToast } = useToast();

  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // LocalStorage unavailable
    }
    return [];
  });

  const [orderType, setOrderTypeState] = useState<OrderType>(() => {
    try {
      const stored = localStorage.getItem(ORDER_TYPE_KEY);
      if (stored === 'delivery' || stored === 'pickup' || stored === 'dine-in') {
        return stored;
      }
    } catch {
      // ignore
    }
    return 'delivery';
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeDetailItem, setActiveDetailItem] = useState<MenuItem | null>(null);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const setOrderType = useCallback((type: OrderType) => {
    setOrderTypeState(type);
    try {
      localStorage.setItem(ORDER_TYPE_KEY, type);
    } catch {
      // ignore
    }
  }, []);

  const addItem = useCallback(
    (item: MenuItem, quantity: number = 1, options: CartItemOption[] = [], notes: string = '') => {
      // Check if identical item with exact same options and notes already exists
      setItems((prev) => {
        const optionsHash = JSON.stringify(options.sort((a, b) => a.optionName.localeCompare(b.optionName)));
        const existingIndex = prev.findIndex(
          (ci) =>
            ci.item.id === item.id &&
            ci.notes === notes &&
            JSON.stringify(ci.selectedOptions.sort((a, b) => a.optionName.localeCompare(b.optionName))) === optionsHash
        );

        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          return updated;
        }

        const newCartItem: CartItem = {
          cartItemId: `${item.id}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          item,
          quantity,
          selectedOptions: options,
          notes,
        };
        return [...prev, newCartItem];
      });

      showToast(
        `Added to Order! 🍗`,
        `${quantity}x ${item.name}`,
        'success'
      );
    },
    [showToast]
  );

  const updateQuantity = useCallback((cartItemId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.cartItemId === cartItemId) {
            const nextQty = ci.quantity + delta;
            return nextQty > 0 ? { ...ci, quantity: nextQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null);
    });
  }, []);

  const removeItem = useCallback((cartItemId: string) => {
    setItems((prev) => prev.filter((ci) => ci.cartItemId !== cartItemId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const subtotal = items.reduce((sum, ci) => {
    const optionsTotal = ci.selectedOptions.reduce((acc, opt) => acc + opt.extraPrice, 0);
    return sum + (ci.item.price + optionsTotal) * ci.quantity;
  }, 0);

  const totalItemsCount = items.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        orderType,
        setOrderType,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        activeDetailItem,
        setActiveDetailItem,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        subtotal,
        totalItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
