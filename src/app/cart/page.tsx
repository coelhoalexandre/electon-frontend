'use client';

import Box from '@/components/Box';
import Button from '@/components/ButtonRoot/Button';
import CartButtonList from '@/components/CartButtonList';
import DeleteIcon from '@/components/Icon/DeleteIcon';
import Text from '@/components/Text';
import { useCartContext } from '@/context/CartContext';
import convertCurrency from '@/utils/convertCurrency';
import Image from 'next/image';

const productPropertiesList = [
  'product',
  'price',
  'quantity',
  'subtotal',
] as const;

export default function Cart() {
  const {
    cartItems,
    subtotal,
    getCartItemSubtotal,
    incrementItem,
    decrementItem,
    removeItem,
  } = useCartContext();

  return (
    <main className='frame grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] gap-y-8 gap-x-5'>
      <section>
        <table className='w-full'>
          <thead>
            <tr className='bg-tertiary py-3 px-8'>
              {productPropertiesList.map((property, index) => (
                <th
                  key={index}
                  className='font-medium text-xl text-foreground capitalize'
                  scope='col'
                  align={index ? 'center' : 'left'}
                  style={{
                    paddingLeft: index ? 0 : '36px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                  }}
                >
                  {property}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=''>
            {cartItems.map((cartItem) => (
              <tr
                key={cartItem.id}
                className='relative border-b-1 border-foreground-gray'
              >
                <th scope='row' className='py-6'>
                  <Box gap={20} className=''>
                    <Image
                      src={cartItem.product.src}
                      alt=''
                      width={130}
                      height={130}
                    />
                    <Box>
                      <h3 className='font-semibold text-xl text-primary'>
                        {cartItem.product.name}
                      </h3>
                    </Box>
                  </Box>
                </th>
                <td
                  align='center'
                  className='font-medium text-2xl text-foreground'
                >
                  $ {convertCurrency(cartItem.product.price)}
                </td>
                <td align='center'>
                  <div className='grid grid-cols-[auto_1fr_auto] bg-background-gray max-w-32'>
                    <button
                      className='flex h-full'
                      onClick={() => decrementItem(cartItem)}
                    >
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
                      className='flex justify-center items-center border-1 border-foreground-gray w-full'
                    >
                      {cartItem.quantity}
                    </Text>
                    <button
                      className='flex h-full'
                      onClick={() => incrementItem(cartItem)}
                    >
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
                </td>
                <td
                  align='center'
                  className='font-medium text-2xl text-foreground'
                >
                  $ {convertCurrency(getCartItemSubtotal(cartItem))}
                </td>

                <button
                  aria-label={`Remover o produto ${cartItem.product.name}`}
                  className='absolute right-0 top-1/2 -translate-y-1/2'
                  onClick={() => removeItem(cartItem)}
                >
                  <DeleteIcon />
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className='row-span-2 border-1 border-foreground-gray'>
        <h3 className='font-medium text-xl text-foreground text-center w-full bg-tertiary py-3'>
          Cart total
        </h3>
        <form action=''>
          <Box direction='column' className='py-5 px-11'>
            <Box align='space-between' className='w-full pb-5'>
              <Text size={'xl'} weight={500}>
                Subtotal
              </Text>
              <Text size={'2xl'}>$ {convertCurrency(subtotal)}</Text>
            </Box>
            <Box className='border-y-1 border-foreground-gray py-8 w-full'>
              <form
                action=''
                className='grid grid-cols-[1fr_auto] border-1 border-foreground-gray rounded-3xl py-5 px-3 w-full'
              >
                <input
                  type='text'
                  placeholder='Enter coupon code'
                  className='text-base font-medium placeholder:text-base placeholder:font-medium placeholder:text-foreground'
                />
                <button
                  type='submit'
                  className='font-medium text-sm text-primary'
                >
                  Apply
                </button>
              </form>
            </Box>
            <Box align='space-between center' className='w-full pt-7'>
              <Text size={'base'}>Total amount</Text>
              <Text size={'lg'}>$ {convertCurrency(subtotal)}</Text>
            </Box>

            <Button
              type='submit'
              variant='secondary'
              size='xl'
              radius='4xl'
              className='w-full mt-8 py-3'
            >
              Proceed to ckeckout
            </Button>
          </Box>
        </form>
      </section>
      <section className=''>
        <CartButtonList />
      </section>
    </main>
  );
}
