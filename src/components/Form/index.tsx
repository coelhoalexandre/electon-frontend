import { ComponentProps, ReactNode } from 'react';

interface FormProps extends ComponentProps<'form'> {
  children: ReactNode;
}

export default function Form({
  children,
  action,
  className = '',
  ...props
}: FormProps) {
  return (
    <form
      action={action}
      method='POST'
      className={`flex flex-col gap-5 w-1/2 border-1 border-primary rounded-2xl p-5 ${className}`}
      {...props}
    >
      {children}
    </form>
  );
}
