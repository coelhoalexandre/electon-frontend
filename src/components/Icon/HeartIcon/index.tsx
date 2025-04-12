import Icon, { IconProps } from '..';

export default function HeartIcon({
  alt = '',
  width = 24,
  height = 24,
}: Partial<Omit<IconProps, 'src'>>) {
  return <Icon src={'/heart.svg'} alt={alt} width={width} height={height} />;
}
