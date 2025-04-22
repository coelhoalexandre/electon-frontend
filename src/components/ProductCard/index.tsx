'use client';

import Image from 'next/image';
import FlexBox from '../FlexBox';
import IProduct from '@/interfaces/IProduct';
import Text from '../Text';
import CommonStarIcon from '../Icon/CommonStarIcon';
import { useState } from 'react';
import Button from '../ButtonRoot/Button';
import CartIcon from '../Icon/CartIcon';
import ButtonLink from '../ButtonRoot/ButtonLink';
import EyeIcon from '../Icon/EyeIcon';
import { useCartContext } from '@/context/CartContext';
import convertCurrency from '@/utils/convertCurrency';
import ManageCartItem from '@/utils/ManageCartItem';

interface ProductCardProps {
  product: IProduct;
  direction?: 'row' | 'col' | 'colRow';
  hasHover?: boolean;
  isVisibleButtons?: boolean;
  isNotVisibleImage?: boolean;
}

const gridClass = {
  row: 'grid-cols-[2fr_auto] items-center gap-12',
  col: 'grid-rows-[1fr_auto]',
  colRow:
    'grid-rows-[1fr_auto] sm:grid-rows-1  sm:grid-cols-[2fr_1fr] sm:items-center sm:gap-12',
} as const;

export default function ProductCard({
  product,
  direction = 'col',
  hasHover = false,
  isVisibleButtons = false,
  isNotVisibleImage = false,
}: ProductCardProps) {
  const cartContext = useCartContext();
  const manageCartItem = new ManageCartItem(cartContext);
  const [pending, setPending] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  return (
    <div
      onMouseEnter={hasHover ? onMouseEnter : () => {}}
      onMouseLeave={hasHover ? onMouseLeave : () => {}}
      className={`grid ${gridClass[direction]} w-auto h-full border-1 border-foreground-gray rounded-2xl px-3 py-6`}
    >
      <Image
        src={product.src}
        alt={product.alt}
        width={180}
        height={180}
        hidden={isNotVisibleImage}
        className='justify-self-center self-center min-w-44 w-3/5 max-w-80'
      />

      <div>
        <FlexBox hidden={isHover} className='flex-col gap-3'>
          <h3 className='font-medium text-lg text-primary'>{product.name}</h3>
          <Text weight={600} size={'lg'}>
            ${convertCurrency(product.price)}
          </Text>
          <ul className='flex gap-2.5'>
            {[0, 1, 2, 3, 4].map((i) => {
              let isFilling = false;
              if (product.stars > i) isFilling = true;
              return (
                <li key={i}>
                  <CommonStarIcon isFilling={isFilling} />
                </li>
              );
            })}
          </ul>{' '}
        </FlexBox>
        <div
          hidden={!(isVisibleButtons || isHover)}
          className='grid grid-cols-[1fr_auto] h-fit gap-5 pt-8'
        >
          <Button
            variant='tertiary-dark'
            className='flex justify-between items-center gap-10 py-4 px-6 text-foreground'
            onClick={manageCartItem.addCartItem.bind(
              null,
              product,
              setPending,
              1
            )}
            disabled={pending}
          >
            Add cart{' '}
            <div className='hidden xs:flex justify-center items-center bg-secondary rounded-full w-[30px] h-[30px]'>
              <CartIcon height={17} width={17} />
            </div>
          </Button>
          <ButtonLink
            href={`/product/${product.slug}`}
            variant='tertiary-dark'
            className='flex justify-center items-center px-6 py-4'
          >
            <EyeIcon />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
