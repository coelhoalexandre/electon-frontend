import ProductList from '../ProductList';
import SectionTitle from '../SectionTitle';

export default function PopularSection() {
  return (
    <section className='frame flex flex-col'>
      <SectionTitle>Popular Products</SectionTitle>
      <ProductList />
    </section>
  );
}
