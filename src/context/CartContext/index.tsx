'use client';

import ICartItem from '@/interfaces/ICartItem';
import IProduct from '@/interfaces/IProduct';
import { createContext, useContext } from 'react';

interface CartContextValue {
  addItem: (product: IProduct) => void;
  removeItem: (cartItem: ICartItem) => void;
  incrementItem: (cartItem: ICartItem) => void;
  decrementItem: (cartItem: ICartItem) => void;
  removeAllItems: () => void;
  getCartItemSubtotal: (cartItem: ICartItem) => number;
  subtotal: number;
  cartItems: ICartItem[];
}

export const CartContext = createContext<CartContextValue>({
  addItem: () => {},
  removeItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  removeAllItems: () => {},
  getCartItemSubtotal: () => 0,
  subtotal: 0,
  cartItems: [],
});

export const useCartContext = () => useContext(CartContext);
