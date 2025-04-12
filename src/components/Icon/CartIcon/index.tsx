import Icon, { IconProps } from '..';

export default function CartIcon({
  alt = '',
  width = 24,
  height = 24,
}: Partial<Omit<IconProps, 'src'>>) {
  return <Icon src={'/cart.svg'} alt={alt} width={width} height={height} />;
}
