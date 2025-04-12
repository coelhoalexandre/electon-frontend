import Box from '@/components/Box';
import LocationIcon from '@/components/Icon/LocationIcon';
import TrackIcon from '@/components/Icon/TrackIcon';
import Text from '@/components/Text';

export default function Informational() {
  return (
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
  );
}
