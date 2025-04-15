'use client';

import Box from '../Box';
import ButtonLink from '../ButtonRoot/ButtonLink';
import Text from '../Text';

export default function BannerSection() {
  return (
    <section className='frame w-full box-border'>
      <div className='flex items-center relative bg-[url(/banner.jpeg)] bg-cover bg-no-repeat bg-left h-[410px] rounded-3xl'>
        <div className='flex flex-col justify-center items-center gap-9 absolute right-1/15'>
          <ButtonLink size='sm' className='py-3 px-6'>
            New laptop
          </ButtonLink>

          <Box direction='column' align='center' gap={12}>
            <h2 className='font-bold text-5xl text-tertiary-dark'>
              Sale up to 50% off
            </h2>
            <Text variant='background' weight={500} size={'lg'} align='center'>
              12 inch hd display
            </Text>
          </Box>

          <ButtonLink size='sm' className='py-3 px-6'>
            Shop now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
