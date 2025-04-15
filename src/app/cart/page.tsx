const productPropertiesList = [
  'product',
  'price',
  'quantity',
  'subtotal',
] as const;

export default function Cart() {
  const products: {
    id: string;
    product: { src: string; name: string };
    price: number;
    quantity: number;
    subtotal: number;
  }[] = [];
  return (
    <main className='frame grid grid-cols-[1fr_auto] grid-rows-[1fr_auto]'>
      <section>
        <table>
          <thead className='bg-tertiary py-3'>
            <tr>
              {productPropertiesList.map((property, index) => (
                <th
                  key={index}
                  className='font-medium text-xl text-foreground capitalize'
                >
                  {property}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=''>
            {products.map((product) => (
              <tr key={product.id}>
                <th>
                  <div></div>
                </th>
                <th>
                  $ {product.price.toLocaleString('pt-BR', { currency: 'BRL' })}
                </th>
                <th>
                  <div>
                    <span>-</span>
                    <span>{product.quantity}</span>
                    <span>+</span>
                  </div>
                </th>
                <th>
                  ${' '}
                  {product.subtotal.toLocaleString('pt-BR', {
                    currency: 'BRL',
                  })}
                </th>
                <button></button>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <ul></ul>
      </section>
      <section></section>
    </main>
  );
}
