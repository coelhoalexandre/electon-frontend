import { fetchProducts } from '@/utils/fetchData';
import ProductCard from '../ProductCard';

export default async function TopSellersSection() {
  const products = (await fetchProducts()) || [];

  return (
    <section className='frame'>
      <div className='grid grid-cols-[1fr_auto] grid-rows-2 gap-8'>
        <div className='row-span-2'>
          {products[0] && (
            <ProductCard
              direction='row'
              product={products[0]}
              isVisibleButtons
            />
          )}
        </div>
        {products[1] && (
          <ProductCard direction='row' product={products[1]} isVisibleButtons />
        )}
        {products[2] && (
          <ProductCard direction='row' product={products[2]} isVisibleButtons />
        )}
      </div>
    </section>
  );
}
