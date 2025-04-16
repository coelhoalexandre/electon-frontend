import { ComponentProps, HTMLAttributes, ReactNode } from 'react';

interface BoxProps extends ComponentProps<'div'> {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  direction?: 'row' | 'column';
  align?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'start center'
    | 'space-between center';
  gap?: 0 | 12 | 20 | 24 | 32 | 36 | 80;
}

export default function Box({
  children,
  className = '',
  align = 'start',
  direction = 'row',
  gap = 0,
  ...props
}: BoxProps) {
  const axis = align.split(' ');

  if (!axis[1]) axis[1] = axis[0];

  const [xAxis, yAxis] = axis;
  const { justify, items } = {
    justify: direction === 'row' ? xAxis : yAxis,
    items: direction === 'row' ? xAxis : yAxis,
  };

  return (
    <div
      style={{
        gap: `${gap}px`,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: items,
      }}
      className={`flex ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
