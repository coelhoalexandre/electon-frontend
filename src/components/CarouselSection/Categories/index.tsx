import { fetchCategories } from '@/utils/fetchData';
import CategoriesCarousel from './CategoriesCarousel';

export default async function Categories() {
  const categories = await fetchCategories();
  const filteredList = categories.list.filter((item) => item.isVisible);
  return (
    <section>
      <CategoriesCarousel items={filteredList} />
    </section>
  );
}
