import Text from '@/components/Text';
import DropdownCategories from './DropdownCategories';
import NavigationList from './NavigationList';

export default function Navigation() {
  return (
    <div className='frame flex justify-between items-center bg-background-gray'>
      <div className='flex items-center gap-24'>
        <DropdownCategories />
        <NavigationList />
      </div>
      <Text variant='primary' weight='bold' size='base'>
        30 Days Free Return
      </Text>
    </div>
  );
}
