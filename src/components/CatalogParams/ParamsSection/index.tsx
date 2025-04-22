import FlexBox from '@/components/FlexBox';
import { ReactNode, Suspense } from 'react';

interface ParamsSectionProps {
  title: string;
  children: ReactNode;
}

export default function ParamsSection({ title, children }: ParamsSectionProps) {
  return (
    <section className='flex flex-col gap-3 border-b-1 border-foreground-gray pb-6'>
      <FlexBox className='justify-between'>
        <h3 className='text-base text-primary font-medium'>{title}</h3>
        <button className='text-base text-foreground-gray'>Reset</button>
      </FlexBox>
      <Suspense fallback={'carregando...'}>{children}</Suspense>
    </section>
  );
}
