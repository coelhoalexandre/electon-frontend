'use client';

import Image from 'next/image';
import Box from '../Box';
import IProduct from '@/interfaces/IProduct';
import Text from '../Text';
import StarIcon from '../Icon/StarIcon';
import { useState } from 'react';
import Button from '../ButtonRoot/Button';
import CartIcon from '../Icon/CartIcon';
import ButtonLink from '../ButtonRoot/ButtonLink';
import EyeIcon from '../Icon/EyeIcon';
import { useCartContext } from '@/context/cartContext';

interface ProductCardProps {
  product: IProduct;
  direction?: 'row' | 'col';
  hasHover?: boolean;
  isVisibleButtons?: boolean;
}

const gridClass = {
  row: 'grid-cols-[2fr_1fr] items-center gap-12',
  col: 'grid-rows-[1fr_auto]',
} as const;

export default function ProductCard({
  product,
  direction = 'col',
  hasHover = false,
  isVisibleButtons = false,
}: ProductCardProps) {
  const { addCart } = useCartContext();
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  return (
    <div
      onMouseEnter={hasHover ? onMouseEnter : () => {}}
      onMouseLeave={hasHover ? onMouseLeave : () => {}}
      className={`grid ${gridClass[direction]} h-full border-1 border-foreground-gray rounded-2xl px-3 py-6`}
    >
      <Image
        src={product.src}
        alt={product.alt}
        width={180}
        height={180}
        className='justify-self-center self-center'
      />

      <div>
        <Box hidden={isHover} direction='column' gap={12}>
          <h3 className='font-medium text-lg text-primary'>{product.name}</h3>
          <Text weight={600} size={'lg'}>
            $
            {product.price.toLocaleString('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
          <ul className='flex gap-2.5'>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
          </ul>{' '}
        </Box>
        <div
          hidden={!(isVisibleButtons || isHover)}
          className='grid grid-cols-[1fr_auto] h-fit gap-5 pt-8'
        >
          <Button
            variant='tertiary-dark'
            className='flex justify-between items-center gap-10 py-4 px-6 text-foreground'
            onClick={() => addCart(product)}
          >
            Add cart{' '}
            <div className='flex justify-center items-center bg-secondary rounded-full w-[30px] h-[30px]'>
              <CartIcon height={17} width={17} />
            </div>
          </Button>
          <ButtonLink
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
