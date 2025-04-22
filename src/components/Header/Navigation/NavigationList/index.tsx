import Text from '@/components/Text';
import NavigationItemDropdown from './NavigationItemDropdown';

export default function NavigationList() {
  return (
    <ul className='hidden lg:flex gap-7'>
      <li>
        <NavigationItemDropdown item='Home' itemList={[]} />
      </li>
      <li>
        <NavigationItemDropdown item='Catalog' itemList={[]} />
      </li>
      <li>
        <Text as='span' weight={500} size='base'>
          Blog
        </Text>
      </li>
      <li>
        <NavigationItemDropdown item='Pages' itemList={[]} />
      </li>
      <li>
        <Text as='span' weight={500} size='base'>
          About us
        </Text>
      </li>
    </ul>
  );
}
