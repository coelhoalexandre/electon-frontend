import reviews from '@/common/reviews';
import FlexBox from '../FlexBox';
import Image from 'next/image';
import Text from '../Text';

export default function ReviewsSection() {
  return (
    <section className='frame'>
      <ul className='flex flex-col gap-2.5 md:flex-row'>
        {reviews.map((review, index) => (
          <li
            key={index}
            className='p-4 border-1 border-foreground-gray rounded-3xl'
          >
            <FlexBox className='flex-col gap-6'>
              <FlexBox className='gap-9'>
                <Image
                  src={review.photo}
                  alt=''
                  width={80}
                  height={80}
                  className='rounded-full border-2 border-secondary border-dashed p-1.5'
                />
                <Text className='flex items-center'>{review.name}</Text>
              </FlexBox>
              <FlexBox className='rounded-2xl py-3 px-6 bg-tertiary'>
                <Text variant='primary'>{review.content}</Text>
              </FlexBox>
            </FlexBox>
          </li>
        ))}
      </ul>
    </section>
  );
}
