import BannerSection from '@/components/BannnerSection';
import CatalogParams from '@/components/CatalogParams';
import ProductList from '@/components/ProductList';

export default function Catalog() {
  return (
    <main className='flex flex-col gap-12 mt-24'>
      <div className='frame grid grid-cols-[auto_1fr] gap-5'>
        <CatalogParams />
        <ProductList />
      </div>
      <BannerSection />
    </main>
  );
}
