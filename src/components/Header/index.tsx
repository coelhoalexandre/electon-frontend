import Box from '../Box';
import LocationIcon from '../Icon/LocationIcon';
import TrackIcon from '../Icon/TrackIcon';
import Text from '../Text';

export default function Header() {
  return (
    <header>
      <div className='flex justify-between py-6 px-14'>
        <Text>Need help? Call us: (+98) 0234 456 789</Text>

        <Box gap={9}>
          <Box gap={5}>
            <LocationIcon />
            <Text>Our store</Text>
          </Box>
          <Box gap={5}>
            <TrackIcon />
            <Text>Track your order</Text>
          </Box>
        </Box>
      </div>
      <div></div>
      <div></div>
    </header>
  );
}
