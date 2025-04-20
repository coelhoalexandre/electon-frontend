import IProduct from './IProduct';

export default interface ICartItem {
  id: string;
  userId?: string | null;
  productId: string;
  product: IProduct;
  quantity: number;
}
