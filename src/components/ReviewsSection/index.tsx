import reviews from '@/common/reviews';
import Box from '../Box';
import Image from 'next/image';
import Text from '../Text';

export default function ReviewsSection() {
  return (
    <section className='frame'>
      <ul className='flex gap-2.5'>
        {reviews.map((review, index) => (
          <li
            key={index}
            className='p-4 border-1 border-foreground-gray rounded-3xl'
          >
            <Box direction='column' gap={24}>
              <Box gap={36}>
                <Image
                  src={review.photo}
                  alt=''
                  width={80}
                  height={80}
                  className='rounded-full border-2 border-secondary border-dashed p-1.5'
                />
                <Text className='flex items-center'>{review.name}</Text>
              </Box>
              <Box className='rounded-2xl py-3 px-6 bg-tertiary'>
                <Text variant='primary'>{review.content}</Text>
              </Box>
            </Box>
          </li>
        ))}
      </ul>
    </section>
  );
}
