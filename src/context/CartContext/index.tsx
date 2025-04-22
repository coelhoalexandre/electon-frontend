'use client';

import ICartItem from '@/interfaces/ICartItem';
import { createContext, use } from 'react';

export interface ICartContextValue {
  addItem: (cartItem: ICartItem) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeAllItems: () => void;
  getCartItemSubtotal: (cartItem: ICartItem) => number;
  subtotal: number;
  cartItems: ICartItem[];
}

export const CartContext = createContext<ICartContextValue>({
  addItem: () => {},
  removeItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  removeAllItems: () => {},
  getCartItemSubtotal: () => 0,
  subtotal: 0,
  cartItems: [],
});

export const useCartContext = () => use(CartContext);
