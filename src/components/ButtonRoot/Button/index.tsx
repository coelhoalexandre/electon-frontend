import { ComponentProps } from 'react';
import { ButtonRootProps, getClassName, getStyle } from '../pattern';

type ButtonProps = ButtonRootProps & ComponentProps<'button'>;

export default function Button({
  type = 'button',
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
    <button type={type} style={style} className={className} {...props}>
      {children}
    </button>
  );
}
