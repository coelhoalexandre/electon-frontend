import ICategory from '@/interfaces/ICategory';
import ICatalogParam from '@/interfaces/ICatalogParam';
import IProduct from '@/interfaces/IProduct';
import CatalogEndpoints from '@/types/CatalogEndpoints';
import ICatalogParamItem from '@/interfaces/ICatalogParamItem';

const fetchData = async (endpoint: string) => {
  const data = await fetch(`http://localhost:8080/${endpoint}`, {
    cache: 'force-cache',
  });
  return await data.json();
};

export default fetchData;

export const fetchCategories = async (): Promise<ICatalogParam<ICategory>> =>
  fetchData('categories');

export const fetchHighlights = async (): Promise<IProduct[]> =>
  fetchData('highlights');

export const fetchProducts = async (): Promise<{
  total: number;
  list: IProduct[];
}> => fetchData('products');

export const fetchCatalogParams = async (
  endpoint: CatalogEndpoints
): Promise<ICatalogParam<ICatalogParamItem>> => fetchData(endpoint);
