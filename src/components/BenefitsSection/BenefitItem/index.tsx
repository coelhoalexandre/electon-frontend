import Text from '@/components/Text';
import { JSX } from 'react';

interface BenefitItemProps {
  Icon: () => JSX.Element;
  title: string;
  description: string;
}

export default function BenefitItem({
  Icon,
  title,
  description,
}: BenefitItemProps) {
  return (
    <li className='grid grid-cols-[auto_1fr] grid-rows-2 gap-x-8 gap-y-2'>
      <div className='row-span-2'>
        <Icon />
      </div>
      <h3 className='font-semibold text-2xl text-primary'>{title}</h3>
      <Text size={'lg'} variant='primary'>
        {description}
      </Text>
    </li>
  );
}
