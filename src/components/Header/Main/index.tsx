import Box from '@/components/Box';
import CartIcon from '@/components/Icon/CartIcon';
import HeartIcon from '@/components/Icon/HeartIcon';
import UserIcon from '@/components/Icon/UserIcon';
import Search from '@/components/Search';
import Text from '@/components/Text';
import Image from 'next/image';

export default function Main() {
  return (
    <div className='frame flex justify-between items-center py-6 bg-primary'>
      <Box align='center' gap={80}>
        <h1 aria-labelledby='electon-logo'>
          <Image
            id='electon-logo'
            src={'/electon_logo.png'}
            alt=''
            width={140}
            height={39}
          />
        </h1>
        <Search />
      </Box>
      <Box gap={32} align='center'>
        <Box gap={12} align='center'>
          <UserIcon />
          <Text variant={'background'}>Sign in</Text>
        </Box>
        <Box gap={12} align='center'>
          <Box align='center'>
            <HeartIcon />
            <div className='flex items-center justify-center w-4 h-4 bg-secondary text-xs text-background rounded-full'>
              0
            </div>
          </Box>
          <Text variant={'background'}>Favorites</Text>
        </Box>
        <Box gap={12} align='center'>
          <Box align='center'>
            <CartIcon />
            <div className='flex items-center justify-center w-4 h-4 bg-secondary text-xs text-background rounded-full'>
              0
            </div>
          </Box>
          <Text variant={'background'}>Cart</Text>
        </Box>
      </Box>
    </div>
  );
}
