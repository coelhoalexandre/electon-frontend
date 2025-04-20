import BannerSection from '@/components/BannnerSection';
import CatalogParams from '@/components/CatalogParams';
import ProductList from '@/components/ProductList';
import SearchParams from '@/types/SearchParams';
import { Suspense } from 'react';

interface CatalogProps {
  searchParams: SearchParams;
}

export default function Catalog({ searchParams }: CatalogProps) {
  return (
    <main className='flex flex-col gap-12 mt-24'>
      <div className='frame grid grid-cols-[auto_1fr] gap-5'>
        <CatalogParams />
        <Suspense fallback={'...carregando'}>
          <ProductList take={12} searchParamsPromise={searchParams} />
        </Suspense>
      </div>
      <BannerSection />
    </main>
  );
}
