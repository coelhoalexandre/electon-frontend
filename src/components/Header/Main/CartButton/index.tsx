'use client';

import CartIcon from '@/components/Icon/CartIcon';
import FlexBox from '@/components/FlexBox';
import Text from '@/components/Text';
import Link from 'next/link';
import { useCartContext } from '@/context/CartContext';

export default function CartButton() {
  const { cartItems } = useCartContext();

  return (
    <Link href={'/cart'}>
      <FlexBox className='place-items-center gap-3'>
        <FlexBox className='place-items-center'>
          <CartIcon />
          <div className='flex items-center justify-center w-4 h-4 bg-secondary text-xs text-background rounded-full'>
            {cartItems.length}
          </div>
        </FlexBox>
        <Text variant={'background'} className='hidden xs:block'>
          Cart
        </Text>
      </FlexBox>
    </Link>
  );
}
