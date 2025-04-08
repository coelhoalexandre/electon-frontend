import Icon, { IconProps } from '..';

export default function LocationIcon({
  alt = '',
  width = 24,
  height = 24,
}: Partial<Omit<IconProps, 'src'>>) {
  return <Icon src={'/location.svg'} alt={alt} width={width} height={height} />;
}
