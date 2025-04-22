import ICartItem from '@/interfaces/ICartItem';

type ActionTypes =
  | 'ADD_ITEM'
  | 'REMOVE_ITEM'
  | 'REMOVE_ALL_ITEMS'
  | 'INCREMENT_ITEM'
  | 'DECREMENT_ITEM';

interface Action {
  type: ActionTypes;
  id?: string;
  cartItem?: ICartItem;
}

const getCartItemIndex = (prevState: ICartItem[], id: string | undefined) => {
  const cartItemIndex = prevState.findIndex(
    (cartProduct) => cartProduct.id === id
  );

  if (cartItemIndex === -1) throw new Error('Cart Item is not defined');

  return cartItemIndex;
};

const changeQuantity = (
  signal = 1 | -1,
  prevState: ICartItem[],
  id: string | undefined
) => {
  const cartItemIndex = getCartItemIndex(prevState, id);
  const currentProduct = prevState[cartItemIndex];
  const newQuantity = currentProduct.quantity + signal;

  return [
    ...prevState.slice(0, cartItemIndex),
    {
      ...currentProduct,
      quantity: newQuantity,
    },
    ...prevState.slice(cartItemIndex + 1),
  ];
};

const actionTypes: Record<
  ActionTypes,
  (prevState: ICartItem[], action: Action) => ICartItem[]
> = {
  ADD_ITEM: (prevState, { cartItem }) => {
    if (!cartItem) throw new Error('Cart Item is not defined');

    return [...prevState, cartItem];
  },
  REMOVE_ITEM: (prevState, { id }) => {
    const productIndex = getCartItemIndex(prevState, id);

    return [
      ...prevState.slice(0, productIndex),
      ...prevState.slice(productIndex + 1),
    ];
  },
  REMOVE_ALL_ITEMS: () => [],
  INCREMENT_ITEM: (prevState, { id }) => changeQuantity(1, prevState, id),
  DECREMENT_ITEM: (prevState, { id }) => changeQuantity(-1, prevState, id),
};

const cartReducer = (prevState: ICartItem[], action: Action): ICartItem[] => {
  const actionFn = actionTypes[action.type];

  if (typeof actionFn === 'function') return actionFn(prevState, action);

  throw new Error('Action Function is not defined');
};

export default cartReducer;
