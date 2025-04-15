import Box from '@/components/Box';
import ButtonLink from '@/components/ButtonRoot/ButtonLink';
import IProduct from '@/interfaces/IProduct';
import Image from 'next/image';

export default function CarouselItem({
  name,
  src,
}: Pick<IProduct, 'name' | 'src'>) {
  return (
    <Box align='space-around'>
      <Box direction='column' gap={20} className='max-w-80'>
        <h3 className='text-primary text-5xl font-bold leading-19'>{name}</h3>
        <Box align='space-between' className='w-full'>
          <ButtonLink href='#' className='py-5 px-8'>
            Shop now
          </ButtonLink>
          <ButtonLink
            href='#'
            variant='primary'
            filling='outline'
            className='flex justify-center items-center py-4 px-8'
          >
            View more
          </ButtonLink>
        </Box>
      </Box>
      <Image src={src} alt='' width={350} height={350} />
    </Box>
  );
}
