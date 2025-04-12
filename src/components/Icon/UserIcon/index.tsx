import Icon, { IconProps } from '..';

export default function UserIcon({
  alt = '',
  width = 24,
  height = 24,
}: Partial<Omit<IconProps, 'src'>>) {
  return <Icon src={'/user.svg'} alt={alt} width={width} height={height} />;
}
