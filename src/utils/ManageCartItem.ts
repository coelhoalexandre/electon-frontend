import { ICartContextValue } from '@/context/CartContext';
import ICartItem from '@/interfaces/ICartItem';
import IProduct from '@/interfaces/IProduct';
import {
  createCartItem,
  deleteAllCartItems,
  deleteCartItem,
  updateCartItem,
} from './fetchData';
import { Dispatch, SetStateAction } from 'react';
import getAccessToken from './getAccessToken';

export default class ManageCartItem implements Readonly<ICartContextValue> {
  readonly addItem;
  readonly removeItem;
  readonly incrementItem;
  readonly decrementItem;
  readonly removeAllItems;
  readonly getCartItemSubtotal;
  readonly subtotal;
  readonly cartItems;

  constructor(cartContext: ICartContextValue) {
    this.addItem = cartContext.addItem;
    this.removeItem = cartContext.removeItem;
    this.incrementItem = cartContext.incrementItem;
    this.decrementItem = cartContext.decrementItem;
    this.removeAllItems = cartContext.removeAllItems;
    this.getCartItemSubtotal = cartContext.getCartItemSubtotal;
    this.subtotal = cartContext.subtotal;
    this.cartItems = cartContext.cartItems;
  }

  public addCartItem = async (
    product: IProduct,
    setPending: Dispatch<SetStateAction<boolean>>,
    quantity: number = 1
  ) => {
    setPending(true);
    const existingCartItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      this.incrementCartItem(existingCartItem, setPending);
      setPending(false);
      return;
    }

    const cartItem = await createCartItem({
      productId: product.id,
      quantity,
    });

    this.addItem(cartItem);
    setPending(false);
  };

  public incrementCartItem = async (
    cartItem: ICartItem,
    setPending: Dispatch<SetStateAction<boolean>>
  ) => {
    setPending(true);
    if (cartItem.quantity + 1 > cartItem.product.stockQuantity) {
      alert('Stock limit');
      setPending(false);
      return;
    }

    const result = await updateCartItem(cartItem.id, {
      quantity: cartItem.quantity + 1,
    });

    if (result instanceof Error) {
      setPending(false);
      return;
    }

    this.incrementItem(cartItem.id);
    setPending(false);
  };

  public decrementCartItem = async (
    cartItem: ICartItem,
    setPending: Dispatch<SetStateAction<boolean>>
  ) => {
    setPending(true);
    if (cartItem.quantity - 1 <= 0) {
      this.removeCartItem(cartItem.id, setPending);
      return;
    }

    const result = await updateCartItem(cartItem.id, {
      quantity: cartItem.quantity - 1,
    });

    if (result instanceof Error) {
      setPending(false);
      return;
    }

    this.decrementItem(cartItem.id);
    setPending(false);
  };

  public removeCartItem = async (
    id: string,
    setPending: Dispatch<SetStateAction<boolean>>
  ) => {
    setPending(true);
    const result = await deleteCartItem(id);

    if (result instanceof Error) {
      setPending(false);
      return;
    }

    this.removeItem(id);
    setPending(false);
  };

  public removeAllCartItems = async (
    setPending: Dispatch<SetStateAction<boolean>>
  ) => {
    setPending(true);
    const accessToken = await getAccessToken();

    if (!accessToken) {
      alert('You must be logged in');
      return;
    }

    const result = await deleteAllCartItems();

    if (result instanceof Error) {
      setPending(false);
      return;
    }

    this.removeAllItems();
    setPending(false);
  };
}
