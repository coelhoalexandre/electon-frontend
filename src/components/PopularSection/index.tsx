import { fetchPopularProducts } from '@/utils/fetchData';
import ProductList from '../ProductList';
import SectionTitle from '../SectionTitle';

export default function PopularSection() {
  return (
    <section className='frame flex flex-col'>
      <SectionTitle>Popular Products</SectionTitle>
      <ProductList fetchFn={fetchPopularProducts} take={8} />
    </section>
  );
}
