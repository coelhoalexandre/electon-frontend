'use client';

import { useCartContext } from '@/context/CartContext';
import Button from '../ButtonRoot/Button';

export default function CartButtonList() {
  const { removeAllItems } = useCartContext();
  return (
    <ul className='flex gap-4 justify-between'>
      <li>
        <Button
          variant='secondary'
          size='2xl'
          radius='4xl'
          className='py-5 px-9'
        >
          Continue shopping
        </Button>
      </li>
      <li>
        <button className='bg-background border-1 border-foreground-gray rounded-4xl py-5 px-9 text-2xl text-foreground-gray font-semibold'>
          Update cart
        </button>
      </li>
      <li>
        <button
          className='bg-background border-1 border-error rounded-4xl py-5 px-9 text-2xl text-error font-semibold'
          onClick={() => removeAllItems()}
        >
          Clear cart
        </button>
      </li>
    </ul>
  );
}
