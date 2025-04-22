import ICatalogParamItem from '@/interfaces/ICatalogParamItem';
import ICategory from '@/interfaces/ICategory';
import IFetchOptions from '@/interfaces/IFetchOptions';
import IProductFetchOptions from '@/interfaces/IProductFetchOptions';
import CatalogEndpoints from '@/types/CatalogEndpoints';
import FetchProducts from '@/types/FetchProducts';
import getAccessToken from './getAccessToken';
import IProduct from '@/interfaces/IProduct';

export const SERVER_URL = 'http://localhost:8080';

const fetchData = async (endpoint: string, fetchOptions?: IFetchOptions) => {
  try {
    const {
      queryStrings = [],
      path: optionPath,
      take,
      skip,
      method = 'GET',
      headers,
      body,
    } = fetchOptions || {};

    if (take) queryStrings.push(`take=${take}`);
    if (skip) queryStrings.push(`skip=${skip}`);

    const joinedQueryString = queryStrings.join('&');
    const queryString = joinedQueryString.length ? '?' + joinedQueryString : '';

    const path = optionPath
      ? typeof optionPath === 'string'
        ? `${optionPath}/`
        : `${optionPath.join('/')}/`
      : '';

    const response = await fetch(
      `${SERVER_URL}/${endpoint}/${path}${queryString}`,
      {
        cache: 'force-cache',
        method,
        headers,
        body: body && JSON.stringify(body),
      }
    );

    if (!response.ok) throw await response.json();

    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default fetchData;

const handleProductFetchOptions = (
  productFetchOptions?: IProductFetchOptions
) => {
  const options: Record<string, string[] | undefined> = {};
  if (!productFetchOptions) return options;

  let key: keyof IProductFetchOptions;
  for (key in productFetchOptions) {
    const currentProductFetchOptions = productFetchOptions[key];
    if (!currentProductFetchOptions) {
      options[key] = [];
      continue;
    }

    if (typeof currentProductFetchOptions === 'string')
      options[key] = currentProductFetchOptions.split(',');
    else options[key] = currentProductFetchOptions;
  }
  return options;
};

export const fetchProducts: FetchProducts = async (
  productFetchOptions,
  fetchOptions
) => {
  const {
    categories = [],
    tags = [],
    q = [],
  } = handleProductFetchOptions(productFetchOptions);
  fetchOptions = fetchOptions || {};

  const queryString = fetchOptions.queryStrings || [];

  if (categories.length) queryString.push(`categories=${categories.join(',')}`);
  if (tags.length) queryString.push(`tags=${tags.join(',')}`);
  if (q.length) queryString.push(`q=${q.join(',')}`);

  fetchOptions.queryStrings = queryString;

  return fetchData('product', fetchOptions);
};

export const fetchProduct = async (slug: string): Promise<IProduct | null> => {
  const product = await fetchData('product', { path: slug });

  if (product?.slug) return product;

  return null;
};

export const fetchHighlightsProducts = async () =>
  fetchProducts({ tags: ['highlight'] });

export const fetchPopularProducts: FetchProducts = async (
  productFetchOptions,
  fetchOptions
) => fetchProducts(productFetchOptions, { ...fetchOptions, path: 'popular' });

export const fetchCategories = async (): Promise<ICategory[] | undefined> =>
  fetchData('category');

export const fetchParamCategories = async (): Promise<ICatalogParamItem[]> => {
  const categories: ICatalogParamItem[] = (await fetchCategories()) || [];

  categories.unshift({
    slug: 'all-categories',
    name: 'All categories',
    id: 'all-categories-id-04130211',
    totalItems: categories
      .map((category) => category.totalItems)
      .reduce((acc, totalItems) => (acc += totalItems)),
  });

  return categories;
};

export const fetchCatalogParams = async (
  endpoint: CatalogEndpoints
): Promise<ICategory[]> => fetchData(endpoint);

export const fetchCartItems = async (): Promise<[] | undefined> => {
  const accessToken = await getAccessToken();

  if (!accessToken) return;

  return fetchData('user', {
    path: 'cart-items',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const fetchUser = async (): Promise<
  { username: string } | undefined
> => {
  const accessToken = await getAccessToken();

  if (!accessToken) return;

  return fetchData('auth', {
    path: 'profile',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

const manageCartItem = async ({
  method,
  path = [],
  body,
}: {
  method: IFetchOptions['method'];
  path?: string[];
  body?: IFetchOptions['body'];
}) => {
  const accessToken = await getAccessToken();

  const fetchOptions: IFetchOptions = {
    method,
    body,
  };
  fetchOptions.path = path;
  const headers: HeadersInit = { 'Content-Type': 'application/json' };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
    fetchOptions.path.unshift('auth');
  } else fetchOptions.path.unshift('no-auth');

  fetchOptions.headers = headers;

  return fetchData('cart-item', fetchOptions);
};

export const createCartItem = async (body: {
  productId: string;
  quantity?: number;
}) => manageCartItem({ method: 'POST', body });

export const updateCartItem = async (
  cartItemId: string,
  body: { quantity: number }
) => manageCartItem({ method: 'PATCH', body, path: [cartItemId] });

export const deleteCartItem = async (cartItemId: string) =>
  manageCartItem({ method: 'DELETE', path: [cartItemId] });

export const deleteAllCartItems = async () =>
  manageCartItem({ method: 'DELETE', path: ['all'] });
