import { HTMLAttributes, ReactNode } from 'react';
import Typography, { ITypography, ITypographyElement } from '../Typography';

export interface TextProps extends ITypography {
  as?: 'p' | 'span';
  children: ReactNode;
  className?: HTMLAttributes<'p'>['className'];
}

export default function Text({
  as = 'p',
  children,
  className = '',
  ...props
}: TextProps) {
  const TextElement = as;
  const Element: ITypographyElement = ({
    style,
    className: typographyClassName,
  }) => (
    <TextElement style={style} className={typographyClassName + className}>
      {children}
    </TextElement>
  );

  return <Typography Element={Element} {...props} />;
}
