import { ReactNode } from 'react';

interface SectionTitle {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitle) {
  return (
    <h2 className='text-primary text-3xl font-semibold mb-12'>{children}</h2>
  );
}
