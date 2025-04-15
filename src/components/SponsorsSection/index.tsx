import Image from 'next/image';

const sponsorsQuant = [1, 2, 3, 4, 5];

export default function SponsorsSection() {
  return (
    <section className='frame w-full'>
      <ul className='flex justify-evenly py-12 bg-tertiary'>
        {sponsorsQuant.map((i) => (
          <li key={i}>
            <Image src={`/brand-${i}.png`} alt='' height={40} width={200} />
          </li>
        ))}
      </ul>
    </section>
  );
}
