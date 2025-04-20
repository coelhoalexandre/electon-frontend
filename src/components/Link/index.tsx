import Link, { LinkProps } from 'next/link';
import Typography, { ITypography, ITypographyElement } from '../Typography';
import { HTMLAttributes, ReactNode } from 'react';

interface TypographyLinkProps extends LinkProps {
  children: ReactNode;
  typography?: ITypography;
  className?: HTMLAttributes<'a'>['className'];
}

export default function TypographyLink({
  children,
  typography,
  className = '',
  ...props
}: TypographyLinkProps) {
  const Element: ITypographyElement = ({
    style,
    className: typographyClassName,
  }) => (
    <Link
      {...props}
      style={style}
      className={`${typographyClassName} ${className}`}
    >
      {children}
    </Link>
  );

  return <Typography Element={Element} {...typography}></Typography>;
}
