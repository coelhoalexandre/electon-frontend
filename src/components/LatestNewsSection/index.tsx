import Link from 'next/link';
import FlexBox from '../FlexBox';
import SectionTitle from '../SectionTitle';
import NewsCard from './NewsCard';

export default function LatestNewsSection() {
  return (
    <section className='frame'>
      <FlexBox className='justify-between'>
        <SectionTitle>Latest News</SectionTitle>
        <Link href={'#'} className='font-medium text-xl text-primary'>
          View all
        </Link>
      </FlexBox>
      <ul className='flex flex-wrap justify-between gap-5'>
        <li>
          <NewsCard
            news={{
              date: new Date('2021-10-22'),
              author: 'spacing tech',
              title: 'Who avoids a pain that produces?',
              description:
                'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
              thumb: '/blog01.jpeg',
            }}
          />
        </li>
        <li>
          <NewsCard
            news={{
              date: new Date('2021-10-22'),
              author: 'spacing tech',
              title: 'Who avoids a pain that produces?',
              description:
                'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
              thumb: '/blog02.jpeg',
            }}
          />
        </li>
      </ul>
    </section>
  );
}
