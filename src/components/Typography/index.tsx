import { CSSProperties, JSX } from 'react';

type Sizes = 'sm' | 'base' | 'lg' | 'xl' | '2xl';
type Breakpoints = 'sm' | 'md' | 'lg';

export interface ITypography {
  variant?: 'foreground' | 'background' | 'primary' | 'secondary';
  size?: Sizes | Record<Breakpoints, Sizes>;
  weight?: 400 | 500 | 600 | 700;
  align?: 'start' | 'center';
}

export type ITypographyElement = ({
  style,
  className,
}: {
  style?: CSSProperties | undefined;
  className?: string | undefined;
}) => JSX.Element;

interface TypographyProps extends ITypography {
  Element: ITypographyElement;
}

export default function Typography({
  Element,
  variant,
  weight,
  size,
  align,
}: TypographyProps) {
  return (
    <Element
      style={{
        ['--variant' as string]: `var(--${variant})`,
        ['--weight' as string]: weight,
        ['--size' as string]: `var(--text-${size})`,
        ['--leading' as string]: `--text-${size}--line-height`,
        textAlign: align,
      }}
      className='text-(--variant) text-(size:--size) leading-(--leading) font-(--weight) '
    />
  );
}
