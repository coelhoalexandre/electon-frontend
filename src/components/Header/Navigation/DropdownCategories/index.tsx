import { fetchCategories } from '@/utils/fetchData';
import ArrowIcon from '@/components/Icon/ArrowIcon';
import Text from '@/components/Text';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';

export default async function DropdownCategories() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <MenuButton className='flex h-full justify-center items-center gap-x-4 bg-secondary px-3.5 py-6 hover:bg-secondary-hover'>
        <Text as='span' variant='background' size='base' weight={500}>
          Browse categories
        </Text>
        <ArrowIcon stroke='#ffffff' />
      </MenuButton>

      <MenuItems
        transition
        className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'
      >
        <div className='py-1'>
          <MenuItem key={0}>
            <Link
              href={`/catalog/`}
              className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'
            >
              All categories
            </Link>
          </MenuItem>
          {((await fetchCategories()) || []).map(({ name, slug }, index) => (
            <MenuItem key={index}>
              <Link
                href={`/catalog/?categories=${slug}`}
                className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'
              >
                {name}
              </Link>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
