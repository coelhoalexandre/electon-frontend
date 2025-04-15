import { fetchCategories } from '@/common/fetchData';
import CategoriesCarousel from './CategoriesCarousel';

export default async function Categories() {
  const categories = await fetchCategories();
  return (
    <section>
      <CategoriesCarousel items={categories.list} />
    </section>
  );
}
