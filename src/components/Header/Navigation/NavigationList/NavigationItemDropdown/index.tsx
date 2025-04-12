import ArrowIcon from '@/components/Icon/ArrowIcon';
import Text from '@/components/Text';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';

interface NavigationItemDropdownProps {
  item: string;
  itemList: { content: string; href: string }[];
}

export default function NavigationItemDropdown({
  item,
  itemList,
}: NavigationItemDropdownProps) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <MenuButton className='flex justify-center items-center gap-x-4'>
        <Text as='span' size='base' weight='medium'>
          {item}
        </Text>
        <ArrowIcon />
      </MenuButton>
      <MenuItems
        transition
        className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'
      >
        <div className='py-1'>
          {itemList.map((item, index) => (
            <MenuItem key={index}>
              <Link
                href={item.href}
                className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'
              >
                {item.content}
              </Link>
            </MenuItem>
          ))}
        </div>
      </MenuItems>{' '}
    </Menu>
  );
}
