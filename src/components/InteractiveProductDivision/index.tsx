'use client';

import IProduct from '@/interfaces/IProduct';
import Text from '../Text';
import { useState } from 'react';
import Button from '../ButtonRoot/Button';
import { useCartContext } from '@/context/CartContext';
import ManageCartItem from '@/utils/ManageCartItem';

export default function InteractiveProductDivision({
  product,
}: {
  product: IProduct;
}) {
  const cartContext = useCartContext();
  const manageCartItem = new ManageCartItem(cartContext);
  const [pending, setPending] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const increment = () => {
    const currentQuantity = quantity + 1;
    if (currentQuantity <= product.stockQuantity) setQuantity(currentQuantity);
  };

  const decrement = () => {
    const currentQuantity = quantity - 1;
    if (currentQuantity >= 1) setQuantity(currentQuantity);
  };

  return (
    <div className='flex flex-col gap-8'>
      <span>
        <Text className='font-medium text-lg'>Color:</Text>
        <ul role='radiogroup'>
          {product.colors.map((color, index) => (
            <div
              role='radio'
              key={index}
              style={{ ['--color' as string]: color }}
              className='rounded-full bg-(--color) aria-checked:outline-1 outline-foreground-gray'
              onClick={() => setSelectedColor(color)}
              aria-checked={selectedColor === color}
            ></div>
          ))}
        </ul>
      </span>
      <span className='flex items-center gap-5'>
        <Text className='font-medium text-lg'>Quantity:</Text>
        <div className='grid grid-cols-[auto_1fr_auto] bg-background-gray max-w-32'>
          <button className='flex h-full' onClick={decrement}>
            <Text
              as='span'
              weight={500}
              size={'lg'}
              className='px-3 border-1 border-foreground-gray'
            >
              -
            </Text>
          </button>
          <Text
            as='span'
            weight={500}
            size={'lg'}
            className='flex justify-center items-center border-1 border-foreground-gray w-16'
          >
            {quantity}
          </Text>
          <button className='flex h-full' onClick={increment}>
            <Text
              as='span'
              weight={500}
              size={'lg'}
              className='px-3 border-1 border-foreground-gray'
            >
              +
            </Text>
          </button>
        </div>
      </span>
      <span className='flex flex-wrap w-full gap-8'>
        <Button
          className='py-5 px-14 w-full xs:w-auto'
          onClick={manageCartItem.addCartItem.bind(
            null,
            product,
            setPending,
            quantity
          )}
          disabled={pending}
          radius='4xl'
        >
          Add cart
        </Button>
        <Button className='py-5 px-14 w-full xs:w-auto' radius='4xl'>
          Buy it now
        </Button>
      </span>
    </div>
  );
}
