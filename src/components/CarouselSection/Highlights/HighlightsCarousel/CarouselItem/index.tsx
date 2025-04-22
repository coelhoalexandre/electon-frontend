import FlexBox from '@/components/FlexBox';
import ButtonLink from '@/components/ButtonRoot/ButtonLink';
import IProduct from '@/interfaces/IProduct';
import Image from 'next/image';
import Button from '@/components/ButtonRoot/Button';
import { useCartContext } from '@/context/CartContext';
import ManageCartItem from '@/utils/ManageCartItem';
import { useState } from 'react';

export default function CarouselItem({ product }: { product: IProduct }) {
  const cartContext = useCartContext();
  const manageCartItem = new ManageCartItem(cartContext);
  const [pending, setPending] = useState(false);

  return (
    <FlexBox className='justify-around items-center flex-col-reverse lg:items-start lg:flex-row'>
      <FlexBox className='flex-col gap-5 max-w-80'>
        <h3 className='text-primary text-5xl font-bold leading-19'>
          {product.name}
        </h3>
        <FlexBox className='justify-between w-full'>
          <Button
            className='py-5 px-8'
            onClick={manageCartItem.addCartItem.bind(
              null,
              product,
              setPending,
              1
            )}
            disabled={pending}
          >
            Shop now
          </Button>
          <ButtonLink
            href={`/product/${product.slug}`}
            variant='primary'
            filling='outline'
            className='flex justify-center items-center py-4 px-8'
          >
            View more
          </ButtonLink>
        </FlexBox>
      </FlexBox>
      <Image src={product.src} alt='' width={350} height={350} />
    </FlexBox>
  );
}
