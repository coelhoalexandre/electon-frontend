'use client';

import FlexBox from '@/components/FlexBox';
import Button from '@/components/ButtonRoot/Button';
import CartButtonList from '@/components/CartButtonList';
import DeleteIcon from '@/components/Icon/DeleteIcon';
import Text from '@/components/Text';
import { useCartContext } from '@/context/CartContext';
import convertCurrency from '@/utils/convertCurrency';
import ManageCartItem from '@/utils/ManageCartItem';
import Image from 'next/image';
import { useState } from 'react';

const productPropertiesList = [
  'product',
  'price',
  'quantity',
  'subtotal',
] as const;

export default function Cart() {
  const cartContext = useCartContext();
  const manageCartItem = new ManageCartItem(cartContext);
  const [pending, setPending] = useState(false);
  return (
    <main className='frame grid grid-rows-3 gap-y-8 gap-x-5 mt-24 lg:grid-rows-[1fr_auto] lg:grid-cols-[1fr_auto]'>
      <section className='overflow-x-auto'>
        <table className='w-full min-w-4xl'>
          <thead className=''>
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
            {manageCartItem.cartItems.map((cartItem) => (
              <tr
                key={cartItem.id}
                className='relative border-b-1 border-foreground-gray'
              >
                <td scope='row' className='py-6' align='center'>
                  <FlexBox className='gap-5'>
                    <Image
                      src={cartItem.product.src}
                      alt=''
                      width={130}
                      height={130}
                    />
                    <FlexBox>
                      <h3 className='font-semibold text-xl text-primary'>
                        {cartItem.product.name}
                      </h3>
                    </FlexBox>
                  </FlexBox>
                </td>
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
                      onClick={manageCartItem.decrementCartItem.bind(
                        null,
                        cartItem,
                        setPending
                      )}
                      disabled={pending}
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
                      onClick={manageCartItem.incrementCartItem.bind(
                        null,
                        cartItem,
                        setPending
                      )}
                      disabled={pending}
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
                  ${' '}
                  {convertCurrency(
                    manageCartItem.getCartItemSubtotal(cartItem)
                  )}
                </td>

                <button
                  aria-label={`Remover o produto ${cartItem.product.name}`}
                  className='absolute right-0 top-1/2 -translate-y-1/2'
                  onClick={manageCartItem.removeCartItem.bind(
                    null,
                    cartItem.id,
                    setPending
                  )}
                  disabled={pending}
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
          <FlexBox className='flex-col py-5 px-11'>
            <FlexBox className='justify-between w-full pb-5'>
              <Text size={'xl'} weight={500}>
                Subtotal
              </Text>
              <Text size={'2xl'}>
                $ {convertCurrency(manageCartItem.subtotal)}
              </Text>
            </FlexBox>
            <FlexBox className='border-y-1 border-foreground-gray py-8 w-full'>
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
            </FlexBox>
            <FlexBox className='justify-between items-center w-full pt-7'>
              <Text size={'base'}>Total amount</Text>
              <Text size={'lg'}>
                $ {convertCurrency(manageCartItem.subtotal)}
              </Text>
            </FlexBox>

            <Button
              type='submit'
              variant='secondary'
              size='xl'
              radius='4xl'
              className='w-full mt-8 py-3'
            >
              Proceed to checkout
            </Button>
          </FlexBox>
        </form>
      </section>
      <section className=''>
        <CartButtonList />
      </section>
    </main>
  );
}
