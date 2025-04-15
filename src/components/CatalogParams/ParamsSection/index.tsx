import Box from '@/components/Box';
import ParamsList from './ParamsList';
import { Suspense } from 'react';
import CatalogEndpoints from '@/types/CatalogEndpoints';

interface ParamsSectionProps {
  endpoint: CatalogEndpoints;
  title: string;
}

export default function ParamsSection({ endpoint, title }: ParamsSectionProps) {
  return (
    <section className='flex flex-col gap-3 border-b-1 border-foreground-gray pb-6'>
      <Box align='space-between'>
        <h3 className='text-base text-primary font-medium'>{title}</h3>
        <button className='text-base text-foreground-gray'>Reset</button>
      </Box>
      <Suspense fallback={'carregando...'}>
        <ParamsList endpoint={endpoint} />
      </Suspense>
    </section>
  );
}
