'use client';

import ICartItem from '@/interfaces/ICartProduct';
import IProduct from '@/interfaces/IProduct';
import { createContext, useContext } from 'react';

interface CartContextValue {
  addItem: (product: IProduct) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeAllItems: () => void;
  subtotal: number;
  cartItems: ICartItem[];
}

export const CartContext = createContext<CartContextValue>({
  addItem: () => {},
  removeItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  removeAllItems: () => {},
  subtotal: 0,
  cartItems: [],
});

export const useCartContext = () => useContext(CartContext);
