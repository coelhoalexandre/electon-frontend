import { ReactNode } from 'react';
import Box from '../Box';

interface InputContainerProps {
  children: ReactNode;
}

export default function InputContainer({ children }: InputContainerProps) {
  return (
    <Box direction='column' className='w-full'>
      {children}
    </Box>
  );
}
