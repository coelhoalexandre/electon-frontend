import { ComponentProps } from 'react';

interface LabelProps extends ComponentProps<'label'> {
  required?: boolean;
}

export default function Label({
  required,
  className = '',
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={`flex flex-col gap-1 text-lg text-primary ${className}`}
      {...props}
    >
      <span>
        {children}
        {required && <span className='text-error'>*</span>}
      </span>
    </label>
  );
}
