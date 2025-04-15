import Box from '@/components/Box';
import Text from '@/components/Text';
import INews from '@/interfaces/INew';
import Image from 'next/image';

interface NewsCardProps {
  news: INews;
}

const month = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

export default function NewsCard({ news }: NewsCardProps) {
  const dateString =
    news.date.getDay() +
    ',' +
    month[news.date.getMonth()] +
    ',' +
    news.date.getFullYear();
  return (
    <Box
      gap={32}
      className='w-[40.625rem] border-1 border-foreground-gray rounded-3xl px-4 py-10'
    >
      <Image
        src={news.thumb}
        alt=''
        width={310}
        height={280}
        className='rounded-3xl'
      />
      <Box direction='column' gap={12}>
        <Text
          as='span'
          variant='primary'
          weight={500}
          size={'xl'}
          className='border-1 border-foreground-gray rounded-3xl py-1 px-4 w-fit'
        >
          {dateString}
        </Text>
        <Box direction='column' gap={36}>
          <Box direction='column' gap={20}>
            <h3 className='font-semibold text-2xl text-primary'>
              {news.title}
            </h3>
            <Text variant='primary'>{news.description}</Text>
          </Box>
          <Text variant='primary'>by {news.author}</Text>
        </Box>
      </Box>
    </Box>
  );
}
