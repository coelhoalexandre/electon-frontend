import { ComponentProps, ReactNode } from 'react';

interface BoxProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export default function FlexBox({
  children,
  className = '',
  ...props
}: BoxProps) {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
}
