import IFetchOptions from '@/interfaces/IFetchOptions';
import IProduct from '@/interfaces/IProduct';
import IProductFetchOptions from '@/interfaces/IProductFetchOptions';

type FetchProducts = (
  productFetchOptions?: IProductFetchOptions,
  fetchOptions?: IFetchOptions
) => Promise<IProduct[] | undefined>;

export default FetchProducts;
