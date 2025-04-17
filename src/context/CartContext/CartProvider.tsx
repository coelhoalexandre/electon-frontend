import ICartItem from '@/interfaces/ICartProduct';
import { ReactNode, useEffect, useReducer, useState } from 'react';
import { CartContext } from '.';
import IProduct from '@/interfaces/IProduct';
import cartReducer from './cartReducer';

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
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) dispatch({ type: 'DECREMENT_ITEM', id });
    else dispatch({ type: 'REMOVE_ITEM', id });
  };

  const addItem = (product: IProduct) => {
    if (!cartItems.find((item) => item.id === product.id))
      dispatch({ type: 'ADD_ITEM', product });
    else incrementItem(product.id);
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const removeAllItems = () => {
    dispatch({ type: 'REMOVE_ALL_ITEMS' });
  };

  useEffect(() => {
    const updateSubtotal = () => {
      const itemSubtotals = cartItems.map((item) => item.subtotal);
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
