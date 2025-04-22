import { fetchProducts } from '@/utils/fetchData';
import ProductCard from '../ProductCard';
import SearchParams from '@/types/SearchParams';
import FetchProducts from '@/types/FetchProducts';

interface ProductListProps {
  fetchFn?: FetchProducts;
  take?: number;
  searchParamsPromise?: SearchParams;
}

export default async function ProductList({
  fetchFn = fetchProducts,
  take,
  searchParamsPromise,
}: ProductListProps) {
  const searchParams = (await searchParamsPromise) ?? {};

  const products = (await fetchFn(searchParams, { take })) || [];

  return (
    <ul className='grid grid-cols-[repeat(auto-fill,_minmax(200px,19.375rem))] justify-between gap-5'>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} hasHover />
        </li>
      ))}
    </ul>
  );
}
