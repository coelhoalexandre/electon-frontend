import { fetchProducts } from '@/utils/fetchData';
import ProductCard from '../ProductCard';

export default async function TopSellersSection() {
  const products = (await fetchProducts()) || [];

  return (
    <section className='frame'>
      <div className='grid grid-rows-2 gap-8 lg:grid-cols-[1fr_auto]'>
        <div className='row-span-2'>
          {products[0] && (
            <ProductCard
              direction='colRow'
              product={products[0]}
              isVisibleButtons
            />
          )}
        </div>
        {products[1] && (
          <div className='hidden w-auto xl:block'>
            <ProductCard
              direction='row'
              product={products[1]}
              isVisibleButtons
            />
          </div>
        )}
        {products[2] && (
          <div className='hidden w-auto xl:block'>
            <ProductCard
              direction='row'
              product={products[2]}
              isVisibleButtons
            />
          </div>
        )}
      </div>
    </section>
  );
}
