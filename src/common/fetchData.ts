import ICategory from '@/interfaces/ICategory';
import IProduct from '@/interfaces/IProduct';

const fetchData = async (endpoint: string) => {
  const data = await fetch(`http://localhost:8080/${endpoint}`, {
    cache: 'force-cache',
  });
  return await data.json();
};

export default fetchData;

export const fetchCategories = async (): Promise<{
  list: ICategory[];
  totalItems: number;
}> => fetchData('categories');

export const fetchHighlights = async (): Promise<IProduct[]> =>
  fetchData('highlights');

export const fetchProducts = async (): Promise<{
  total: number;
  list: IProduct[];
}> => fetchData('products');
