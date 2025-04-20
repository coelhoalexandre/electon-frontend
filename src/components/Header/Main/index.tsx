import Box from '@/components/Box';
import HeartIcon from '@/components/Icon/HeartIcon';
import Search from '@/components/Search';
import Text from '@/components/Text';
import Image from 'next/image';
import Link from 'next/link';
import CartButton from './CartButton';
import SignInButton from './SignInButton';

export default function Main() {
  return (
    <div className='frame flex justify-between items-center py-6 bg-primary'>
      <Box align='center' gap={80}>
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
      </Box>
      <Box gap={32} align='center'>
        <SignInButton />

        <Box gap={12} align='center'>
          <Box align='center'>
            <HeartIcon />
            <div className='flex items-center justify-center w-4 h-4 bg-secondary text-xs text-background rounded-full'>
              0
            </div>
          </Box>
          <Text variant={'background'}>Favorites</Text>
        </Box>
        <CartButton />
      </Box>
    </div>
  );
}
