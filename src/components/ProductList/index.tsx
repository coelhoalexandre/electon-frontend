import { fetchProducts } from '@/utils/fetchData';
import ProductCard from '../ProductCard';

export default async function ProductList() {
  const products = await fetchProducts();

  return (
    <ul className='grid grid-cols-[repeat(auto-fill,_minmax(200px,19.375rem))] justify-between gap-5'>
      {products.list.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} hasHover />
        </li>
      ))}
    </ul>
  );
}
