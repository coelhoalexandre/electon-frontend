'use client';

import { useCartContext } from '@/context/CartContext';
import Button from '../ButtonRoot/Button';
import ManageCartItem from '@/utils/ManageCartItem';
import { useState } from 'react';

export default function CartButtonList() {
  const cartContext = useCartContext();
  const manageCartItem = new ManageCartItem(cartContext);
  const [pending, setPending] = useState(false);
  return (
    <ul className='flex flex-wrap gap-4 justify-between'>
      <li>
        <Button
          variant='secondary'
          size='2xl'
          radius='4xl'
          className='py-5 px-9'
          onClick={() => alert('Sem implementação')}
        >
          Continue shopping
        </Button>
      </li>
      <li>
        <button
          className='bg-background border-1 border-foreground-gray rounded-4xl py-5 px-9 text-2xl text-foreground-gray font-semibold'
          onClick={() => alert('Sem implementação')}
        >
          Update cart
        </button>
      </li>
      <li>
        <button
          className='bg-background border-1 border-error rounded-4xl py-5 px-9 text-2xl text-error font-semibold'
          onClick={manageCartItem.removeAllCartItems.bind(null, setPending)}
          disabled={pending}
        >
          Clear cart
        </button>
      </li>
    </ul>
  );
}
