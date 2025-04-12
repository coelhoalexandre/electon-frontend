import { HTMLAttributes, ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  classes?: HTMLAttributes<HTMLDivElement>['className'];
  orientation?: 'row' | 'col';
  align?: 'start' | 'center' | 'end';
  gap?: 0 | 12 | 20 | 24 | 32 | 36 | 80;
  width?: 'auto' | 'full';
}

export default function Box({
  children,
  classes = '',
  align = 'start',
  orientation = 'row',
  gap = 0,
  width = 'auto',
}: BoxProps) {
  const axis = align.split(' ');

  if (!axis[1]) axis[1] = axis[0];

  const [xAxis, yAxis] = axis;
  const contentAlignment = {
    justify: orientation === 'row' ? xAxis : yAxis,
    items: orientation === 'row' ? xAxis : yAxis,
  };

  const strGap = `gap-[${gap}px]`;
  return (
    <div
      className={`flex flex-${orientation} ${strGap} justify-${contentAlignment.justify} items-${contentAlignment.items} w-${width} ${classes}`}
    >
      {children}
    </div>
  );
}
