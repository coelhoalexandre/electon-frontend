import { ComponentProps } from 'react';

export default function Input({
  className = '',
  type = 'text',
  ...props
}: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={`w-full border-1 border-primary rounded-md p-2 text-base text-foreground ${className}`}
      {...props}
    />
  );
}
