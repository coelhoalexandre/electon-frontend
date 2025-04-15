import { ComponentProps } from 'react';
import { ButtonRootProps, getClassName, getStyle } from '../pattern';
import Link from 'next/link';

type ButtonProps = ButtonRootProps & ComponentProps<'a'>;

export default function ButtonLink({
  href = '#',
  variant = 'secondary',
  filling = 'filled',
  size = 'base',
  borderWidth = 1,
  className: classes = '',
  children,
  ...props
}: ButtonProps) {
  const style = getStyle({ variant, borderWidth, size });
  const className = getClassName({ classes, filling });

  return (
    <Link href={href} style={style} className={className} {...props}>
      {children}
    </Link>
  );
}
