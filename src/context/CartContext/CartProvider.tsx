'use client';

import { ReactNode, useEffect, useReducer, useState } from 'react';
import { CartContext } from '.';
import IProduct from '@/interfaces/IProduct';
import cartReducer from './cartReducer';
import { fetchCartItems } from '@/utils/fetchData';
import useAddCartItem from '@/hooks/useAddCartItem';
import ICartItem from '@/interfaces/ICartItem';
// import useUpdateCartItem from '@/hooks/useUpdateCartItem';
// import useRemoveCartItem from '@/hooks/useRemoveCartItem';

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
  const addCartItem = useAddCartItem();
  // const updateCartItem = useUpdateCartItem();
  // const removeCartItem = useRemoveCartItem();
  const [cartItems, dispatch] = useReducer(cartReducer, getStoredCartItems());
  const [subtotal, setSubtotal] = useState(0);

  const incrementItem = (cartItem: ICartItem) => {
    if (cartItem.product.stockQuantity < cartItem.quantity + 1) {
      alert('The stock limit for the product has been reached.');
      return;
    }

    dispatch({ type: 'INCREMENT_ITEM', id: cartItem.id });

    updateCartItem(cartItem.id, cartItem.quantity + 1);
    try {
    } catch (error) {
      console.error(error);
      alert('Failed increment item');
      dispatch({ type: 'DECREMENT_ITEM', id: cartItem.id });
    }
  };

  const decrementItem = (cartItem: ICartItem) => {
    if (cartItem.quantity < 2) {
      dispatch({ type: 'REMOVE_ITEM', id: cartItem.id });
      return;
    }

    dispatch({ type: 'DECREMENT_ITEM', id: cartItem.id });

    updateCartItem(cartItem.id, cartItem.quantity - 1);
    try {
    } catch (error) {
      console.error(error);
      alert('Failed decrement item');
      dispatch({ type: 'INCREMENT_ITEM', id: cartItem.id });
    }
  };

  const addItem = (product: IProduct) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      incrementItem(existingCartItem);
      return;
    }

    const cartItem = addCartItem(product.id);

    if (!cartItem?.ok) return;

    dispatch({ type: 'ADD_ITEM', cartItem });
  };

  const removeItem = (cartItem: ICartItem) => {
    dispatch({ type: 'REMOVE_ITEM', id: cartItem.id });

    removeCartItem(cartItem.id);
    try {
    } catch (error) {
      console.error(error);
      dispatch({ type: 'ADD_ITEM', cartItem });
    }
  };

  const removeAllItems = () => {
    dispatch({ type: 'REMOVE_ALL_ITEMS' });
  };

  const getCartItemSubtotal = (cartItem: ICartItem) =>
    cartItem.product.price * cartItem.quantity;

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchCartItems();
      if (!data) return;
    };

    fetch();
  }, []);

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
