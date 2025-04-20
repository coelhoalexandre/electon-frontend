'use client';

import { createCartItem } from '@/utils/fetchData';
import { use } from 'react';

const fakePromise = new Promise((resolve, reject) => reject()).catch(
  () => 'error'
);

const useAddCartItem = () => (productId: string) => {
  const cartITem = use(fakePromise);
  console.log(cartITem);
  return cartITem;
};
export default useAddCartItem;
