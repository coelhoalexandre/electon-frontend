'use client';

import CartIcon from '@/components/Icon/CartIcon';
import Box from '@/components/Box';
import Text from '@/components/Text';
import Link from 'next/link';
import { useEffect } from 'react';
import { useCartContext } from '@/context/CartContext';

export default function CartButton() {
  const { cartItems } = useCartContext();

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <Link href={'/cart'}>
      <Box gap={12} align='center'>
        <Box align='center'>
          <CartIcon />
          <div className='flex items-center justify-center w-4 h-4 bg-secondary text-xs text-background rounded-full'>
            {cartItems.length}
          </div>
        </Box>
        <Text variant={'background'}>Cart</Text>
      </Box>
    </Link>
  );
}
