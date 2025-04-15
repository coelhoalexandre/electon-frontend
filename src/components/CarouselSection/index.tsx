import Categories from './Categories';
import Highlights from './Highlights';

export default function CarouselSection() {
  return (
    <section className='flex flex-col gap-14 frame py-12'>
      <Highlights />
      <Categories />
    </section>
  );
}
