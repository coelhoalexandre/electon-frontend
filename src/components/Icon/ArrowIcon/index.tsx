import { type IconProps } from '..';

interface ArrowIconProps extends Partial<Omit<IconProps, 'src'>> {
  stroke?: '#292D32' | '#ffffff';
}
export default function ArrowIcon({
  width = 24,
  height = 24,
  stroke = '#292D32',
}: ArrowIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001'
        stroke={stroke}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
