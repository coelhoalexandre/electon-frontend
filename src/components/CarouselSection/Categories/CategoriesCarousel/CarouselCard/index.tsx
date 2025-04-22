import FlexBox from '@/components/FlexBox';
import Text from '@/components/Text';
import Image from 'next/image';

interface CarouselCardProps {
  src: string;
  category: string;
  itemsQuant: number;
}

export default function CarouselCard({
  src,
  category,
  itemsQuant,
}: CarouselCardProps) {
  return (
    <div className='grid grid-cols-[auto_1fr] grid-rows-1 gap-10 w-full h-full border-1 border-foreground-gray rounded-3xl p-3.5 box-border'>
      <Image
        src={src}
        alt=''
        width={100}
        height={100}
        className='h-full w-full'
      />
      <FlexBox className='flex-col justify-center items-center gap-3'>
        <Text variant='primary' size='xl' weight={600}>
          {category}
        </Text>
        <Text variant='primary' size='lg' weight={500}>
          ({itemsQuant} Items)
        </Text>
      </FlexBox>
    </div>
  );
}
