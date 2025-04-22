import FlexBox from '@/components/FlexBox';
import HeartIcon from '@/components/Icon/HeartIcon';
import Search from '@/components/Search';
import Text from '@/components/Text';
import Image from 'next/image';
import Link from 'next/link';
import CartButton from './CartButton';
import SignInButton from './SignInButton';

export default function Main() {
  return (
    <div className='frame flex flex-col justify-between items-center gap-6 py-6 bg-primary lg:flex-row lg:gap-0'>
      <FlexBox className='place-items-center gap-6 flex-col sm:flex-row sm:gap-20'>
        <Link href={'/'}>
          <h1 aria-labelledby='electon-logo' className='h-fit'>
            <Image
              id='electon-logo'
              src={'/electon_logo.png'}
              alt=''
              width={140}
              height={39}
            />
          </h1>
        </Link>
        <Search />
      </FlexBox>
      <FlexBox className='place-items-center gap-8'>
        <SignInButton />

        <FlexBox className='place-items-center gap-4'>
          <FlexBox className='place-items-center'>
            <HeartIcon />
            <div className='flex items-center justify-center w-4 h-4 bg-secondary text-xs text-background rounded-full'>
              0
            </div>
          </FlexBox>
          <Text variant={'background'} className='hidden xs:block'>
            Favorites
          </Text>
        </FlexBox>

        <CartButton />
      </FlexBox>
    </div>
  );
}
