import Text from '@/components/Text';
import NavigationItemDropdown from './NavigationItemDropdown';

export default function NavigationList() {
  return (
    <ul className='flex gap-7'>
      <NavigationItemDropdown item='Home' itemList={[]} />
      <NavigationItemDropdown item='Catalog' itemList={[]} />
      <Text as='span' weight='medium' size='base'>
        Blog
      </Text>
      <NavigationItemDropdown item='Pages' itemList={[]} />
      <Text as='span' weight='medium' size='base'>
        Pages
      </Text>
    </ul>
  );
}
