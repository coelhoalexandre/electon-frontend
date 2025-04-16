import { HTMLAttributes, ReactNode } from 'react';

type Sizes = 'sm' | 'base' | 'lg' | 'xl' | '2xl';
type Breakpoints = 'sm' | 'md' | 'lg';

interface TextProps {
  children: ReactNode;
  variant?: 'foreground' | 'background' | 'primary' | 'secondary';
  as?: 'p' | 'span';
  size?: Sizes | Record<Breakpoints, Sizes>;
  weight?: 400 | 500 | 600 | 700;
  align?: 'start' | 'center';
  className?: HTMLAttributes<'p'>['className'];
}

export default function Text({
  children,
  variant = 'foreground',
  as = 'p',
  size = 'sm',
  weight = 400,
  align = 'start',
  className = '',
}: TextProps) {
  const Element = as;

  return (
    <Element
      style={{
        ['--variant' as string]: `var(--${variant})`,
        ['--weight' as string]: weight,
        ['--size' as string]: `var(--text-${size})`,
        ['--leading' as string]: `--text-${size}--line-height`,
        textAlign: align,
      }}
      className={`text-(--variant) text-(size:--size) leading-(--leading)  font-(--weight) ${className}`}
    >
      {children}
    </Element>
  );
}
