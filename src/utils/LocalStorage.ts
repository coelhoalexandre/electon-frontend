import ICartProduct from '@/interfaces/ICartProduct';

export default class LocalStorage {
  public static setItem<T>(key: string, item: T) {
    if (typeof window !== 'undefined')
      localStorage.setItem(key, JSON.stringify(item));
  }

  public static getItem<T>(key: string): T | null {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);

      if (!item) return null;

      return JSON.parse(item);
    }

    return null;
  }

  public static setProduct(product: ICartProduct) {
    const products = LocalStorage.getAllProducts() || [];

    products.push(product);

    LocalStorage.setItem('products', products);
  }

  public static getAllProducts(): ICartProduct[] | null {
    const products = LocalStorage.getItem<ICartProduct[]>('products');

    return products;
  }
}
