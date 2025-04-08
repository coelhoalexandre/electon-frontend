import Image from 'next/image';

export interface IconProps {
  src: string;
  alt: string;
  width: number | `${number}`;
  height: number | `${number}`;
}

export default function Icon({ src, alt, width, height }: IconProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
