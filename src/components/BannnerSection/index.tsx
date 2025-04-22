'use client';

import FlexBox from '../FlexBox';
import ButtonLink from '../ButtonRoot/ButtonLink';
import Text from '../Text';

export default function BannerSection() {
  return (
    <section className='frame w-full box-border'>
      <div className='flex justify-center items-center relative bg-black md:bg-[url(/banner.jpeg)] bg-cover bg-no-repeat bg-left h-[410px] rounded-3xl'>
        <div className='flex flex-col justify-center items-center gap-9 right-1/15 md:absolute'>
          <ButtonLink size='sm' className='py-3 px-6'>
            New laptop
          </ButtonLink>

          <FlexBox className='flex-col justify-center items-center gap-3'>
            <h2 className='font-bold text-4xl text-center text-tertiary-dark md:text-5xl'>
              Sale up to 50% off
            </h2>
            <Text variant='background' weight={500} size={'lg'} align='center'>
              12 inch hd display
            </Text>
          </FlexBox>

          <ButtonLink size='sm' className='py-3 px-6'>
            Shop now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
