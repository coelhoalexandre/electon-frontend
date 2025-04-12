import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'foreground' | 'background' | 'primary' | 'secondary';
}

export default function Text({ children, variant = 'foreground' }: TextProps) {
  return (
    <p className={`flex font-normal text-${variant} text-sm`}>{children}</p>
  );
}
