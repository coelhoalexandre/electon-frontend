import { ReactNode } from 'react';
import CartProvider from './CartContext/CartProvider';

export default function Providers({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
