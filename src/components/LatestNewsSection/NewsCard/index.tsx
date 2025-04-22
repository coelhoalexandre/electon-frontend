import FlexBox from '@/components/FlexBox';
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
    <FlexBox className='flex-col gap-8 border-1 border-foreground-gray rounded-3xl px-4 py-10 max-w-[30rem] 2xl:max-w-[40.675rem] 2xl:flex-row'>
      <Image
        src={news.thumb}
        alt=''
        width={310}
        height={280}
        className='rounded-3xl w-full'
      />
      <FlexBox className='flex-col gap-3'>
        <Text
          as='span'
          variant='primary'
          weight={500}
          size={'xl'}
          className='border-1 border-foreground-gray rounded-3xl py-1 px-4 w-fit'
        >
          {dateString}
        </Text>
        <FlexBox className='flex-col gap-9'>
          <FlexBox className='flex-col gap-5'>
            <h3 className='font-semibold text-2xl text-primary'>
              {news.title}
            </h3>
            <Text variant='primary'>{news.description}</Text>
          </FlexBox>
          <Text variant='primary'>by {news.author}</Text>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
