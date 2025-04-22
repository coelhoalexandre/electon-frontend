import { ReactNode } from 'react';
import FlexBox from '../FlexBox';

interface InputContainerProps {
  children: ReactNode;
}

export default function InputContainer({ children }: InputContainerProps) {
  return <FlexBox className='flex-col w-full'>{children}</FlexBox>;
}
