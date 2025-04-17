import ICartItem from '@/interfaces/ICartProduct';
import IProduct from '@/interfaces/IProduct';

type ActionTypes =
  | 'ADD_ITEM'
  | 'REMOVE_ITEM'
  | 'REMOVE_ALL_ITEMS'
  | 'INCREMENT_ITEM'
  | 'DECREMENT_ITEM';

interface Action {
  type: ActionTypes;
  id?: string;
  product?: IProduct;
}

const getProductIndex = (prevState: ICartItem[], id: string | undefined) => {
  const productIndex = prevState.findIndex(
    (cartProduct) => cartProduct.id === id
  );

  if (productIndex === -1) throw new Error('Product is not defined');

  return productIndex;
};

const changeQuantity = (
  signal = 1 | -1,
  prevState: ICartItem[],
  id: string | undefined
) => {
  const productIndex = getProductIndex(prevState, id);
  const currentProduct = prevState[productIndex];
  const newQuantity = currentProduct.quantity + signal;
  const newPrice = newQuantity * currentProduct.price;

  return [
    ...prevState.slice(0, productIndex),
    {
      ...currentProduct,
      quantity: newQuantity,
      subtotal: newPrice,
    },
    ...prevState.slice(productIndex + 1),
  ];
};

const actionTypes: Record<
  ActionTypes,
  (prevState: ICartItem[], action: Action) => ICartItem[]
> = {
  ADD_ITEM: (prevState, { product }) => {
    if (!product) throw new Error('Product is not defined');

    return [...prevState, { quantity: 1, subtotal: product.price, ...product }];
  },
  REMOVE_ITEM: (prevState, { id }) => {
    const productIndex = getProductIndex(prevState, id);

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
