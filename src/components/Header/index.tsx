import Image from 'next/image';
import Box from '../Box';
import LocationIcon from '../Icon/LocationIcon';
import TrackIcon from '../Icon/TrackIcon';
import Text from '../Text';
import Search from '../Search';
import CartIcon from '../Icon/CartIcon';
import HeartIcon from '../Icon/HeartIcon';
import UserIcon from '../Icon/UserIcon';

export default function Header() {
  return (
    <header>
      <div className='flex justify-between py-6 px-14'>
        <Text>Need help? Call us: (+98) 0234 456 789</Text>

        <Box gap={36}>
          <Box gap={20}>
            <LocationIcon />
            <Text>Our store</Text>
          </Box>
          <Box gap={20}>
            <TrackIcon />
            <Text>Track your order</Text>
          </Box>
        </Box>
      </div>
      <div className='flex justify-between items-center py-6 px-14 bg-primary'>
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
      <div></div>
    </header>
  );
}
