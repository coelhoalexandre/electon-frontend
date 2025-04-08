import Icon, { IconProps } from '..';

export default function TrackIcon({
  alt = '',
  width = 24,
  height = 24,
}: Partial<Omit<IconProps, 'src'>>) {
  return <Icon src={'/track.svg'} alt={alt} width={width} height={height} />;
}
