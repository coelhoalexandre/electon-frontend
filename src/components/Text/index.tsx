import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'foreground' | 'background' | 'primary' | 'secondary';
  as?: 'p' | 'span';
  size?: 'sm' | 'base';
  weight?: 'normal' | 'medium' | 'bold';
}

export default function Text({
  children,
  variant = 'foreground',
  as = 'p',
  size = 'sm',
  weight = 'normal',
}: TextProps) {
  const Element = as;
  return (
    <Element className={`flex text-${variant} text-${size} font-${weight}`}>
      {children}
    </Element>
  );
}
