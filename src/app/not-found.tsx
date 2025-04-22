import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='frame flex flex-col justify-center items-center gap-5 mt-24'>
      <h2 className='text-2xl text-secondary font-bold'>
        404 - Page Not Found
      </h2>
      <Link href='/' className='text-primary hover:underline'>
        {'<'} Ir para página inicial
      </Link>
    </main>
  );
}
