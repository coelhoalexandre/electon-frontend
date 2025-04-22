import FlexBox from '@/components/FlexBox';
import LocationIcon from '@/components/Icon/LocationIcon';
import TrackIcon from '@/components/Icon/TrackIcon';
import Text from '@/components/Text';

export default function Informational() {
  return (
    <div className='frame grid grid-rows-2 gap-y-3 md:flex md:justify-between py-6'>
      <Text className='text-center'>
        Need help? Call us: <br className='block xs:hidden' />
        (+98) 0234 456 789
      </Text>

      <FlexBox className='justify-around gap-9'>
        <FlexBox className='gap-5'>
          <LocationIcon title='Our store' />
          <Text className='hidden xs:block'>Our store</Text>
        </FlexBox>
        <FlexBox className='gap-5'>
          <TrackIcon title='Track your order' />
          <Text className='hidden xs:block'>Track your order</Text>
        </FlexBox>
      </FlexBox>
    </div>
  );
}
