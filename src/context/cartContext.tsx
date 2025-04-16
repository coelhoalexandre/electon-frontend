'use client';

import ICartItem from '@/interfaces/ICartProduct';
import IProduct from '@/interfaces/IProduct';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';

interface CartContextValue {
  addCart: (product: IProduct) => void;
  cartItems: ICartItem[];
}

const CartContext = createContext<CartContextValue>({
  addCart: () => {},
  cartItems: [],
});

export const useCartContext = () => useContext(CartContext);

const cartReducer = (
  state: ICartItem[],
  { type, product }: { type: 'ADD_ITEM'; product: IProduct }
) => {
  switch (type) {
    case 'ADD_ITEM':
      const productIndex = state.findIndex(
        (cartProduct) => cartProduct.id === product.id
      );

      if (productIndex == -1)
        state.push({ quantity: 1, subtotal: product.price, ...product });
      else {
        const currentProduct = state[productIndex];
        currentProduct.quantity++;
        currentProduct.subtotal =
          currentProduct.price * currentProduct.quantity;
      }
  }
  return state;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, getStoredCartItems());

  function getStoredCartItems() {
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems !== null) {
        const cartItems: ICartItem[] = JSON.parse(storedCartItems);
        return cartItems;
      }
    }
    return [];
  }

  function addCart(product: IProduct) {
    dispatch({ type: 'ADD_ITEM', product });
  }

  useEffect(() => {
    console.log('test');
    if (cartItems !== null) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ addCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
