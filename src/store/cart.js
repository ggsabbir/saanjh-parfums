import { useEffect, useState } from 'react';

const STORAGE_KEY = 'saanjh_cart';

const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

export function useCart() {
  const [items, setItems] = useState(readCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (variant) => {
    setItems((current) => {
      const existing = current.find((item) => item.variantId === variant.id);
      if (existing) {
        return current.map((item) => item.variantId === variant.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { variantId: variant.id, size: variant.size, price: variant.price, quantity: 1 }];
    });
  };

  const updateQuantity = (variantId, quantity) => {
    setItems((current) => current.map((item) => item.variantId === variantId ? { ...item, quantity } : item).filter((item) => item.quantity > 0));
  };

  const clear = () => setItems([]);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return { items, addItem, updateQuantity, clear, subtotal, count };
}