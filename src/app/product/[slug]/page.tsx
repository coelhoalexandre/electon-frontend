import ReviewStarIcon from '@/components/Icon/ReviewStarIcon';
import SuccessIcon from '@/components/Icon/SuccessIcon';
import InteractiveProductDivision from '@/components/InteractiveProductDivision';
import Text from '@/components/Text';
import convertCurrency from '@/utils/convertCurrency';
import { fetchProduct } from '@/utils/fetchData';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  if (!product) notFound();

  return (
    <main className='frame mt-24'>
      <section className='grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-2 lg:grid-rows-3'>
        <div className='border-1 border-foreground-gray p-8 rounded-3xl lg:row-span-2'>
          <Image
            src={product.src}
            alt={product.alt}
            width={650}
            height={560}
            className='h-full w-full max-w-650'
          />
        </div>
        <div className='flex flex-col gap-4 '>
          <h2 className='text-primary text-3xl font-medium'>{product.name}</h2>
          <Text size={'3xl'} weight={600}>
            $ {convertCurrency(product.price)}
          </Text>
          <div className='flex items-center gap-2.5'>
            <ul className='flex gap-2.5'>
              {[0, 1, 2, 3, 4].map((i) => {
                let isFilling = false;
                if (product.stars > i) isFilling = true;
                return (
                  <li key={i}>
                    <ReviewStarIcon isFilling={isFilling} />
                  </li>
                );
              })}
            </ul>
            <Text size={'sm'} weight={500}>
              No reviews
            </Text>
          </div>
          <div className='flex items-center gap-5'>
            <Text size={'lg'} weight={500}>
              Availability:
            </Text>
            {product.availability && (
              <p className='flex items-center gap-4 text-success text-lg font-medium'>
                <SuccessIcon />
                In stock
              </p>
            )}
            {!product.availability && (
              <p className='flex items-center gap-4 text-error text-lg font-medium'>
                <span className='text-2xl'>X</span>
                Out stock
              </p>
            )}
          </div>
          <Text className='text-base text-foreground-gray border-b-1 border-foreground-gray pb-5'>
            Hurry up! only {product.stockQuantity} product left in stock!
          </Text>
        </div>

        <InteractiveProductDivision product={product} />
      </section>
    </main>
  );
}
