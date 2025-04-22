'use client';

import { ReactNode, useEffect, useReducer, useState } from 'react';
import { CartContext } from '.';
import cartReducer from './cartReducer';
import ICartItem from '@/interfaces/ICartItem';

const getStoredCartItems = () => {
  if (typeof window !== 'undefined') {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems !== null) {
      const cartItems: ICartItem[] = JSON.parse(storedCartItems);
      return cartItems;
    }
  }
  return [];
};

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, getStoredCartItems());
  const [subtotal, setSubtotal] = useState(0);

  const incrementItem = (id: string) => {
    dispatch({ type: 'INCREMENT_ITEM', id });
  };

  const decrementItem = (id: string) => {
    dispatch({ type: 'DECREMENT_ITEM', id });
  };

  const addItem = (cartItem: ICartItem) => {
    dispatch({ type: 'ADD_ITEM', cartItem });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const removeAllItems = () => {
    dispatch({ type: 'REMOVE_ALL_ITEMS' });
  };

  const getCartItemSubtotal = (cartItem: ICartItem) =>
    cartItem.product?.price * cartItem.quantity;

  useEffect(() => {
    const updateSubtotal = () => {
      const itemSubtotals = cartItems.map((item) => getCartItemSubtotal(item));
      const subtotal = itemSubtotals.reduce(
        (acc, itemSubtotal) => (acc += itemSubtotal),
        0
      );
      setSubtotal(subtotal);
    };

    if (cartItems !== null) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      updateSubtotal();
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        subtotal,
        getCartItemSubtotal,
        addItem,
        removeItem,
        decrementItem,
        incrementItem,
        removeAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
