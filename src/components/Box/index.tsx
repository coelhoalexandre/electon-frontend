import { HTMLAttributes, ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  classes?: HTMLAttributes<HTMLDivElement>['className'];
  orientation?: 'row' | 'col';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  width?: 'auto' | 'full';
}

export default function Box({
  children,
  classes = '',
  orientation = 'row',
  gap = 0,
  width = 'auto',
}: BoxProps) {
  return (
    <div
      className={`flex flex-${orientation} gap-${gap}  w-${width} ${classes}`}
    >
      {children}
    </div>
  );
}
