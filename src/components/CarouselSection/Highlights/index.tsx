import { fetchHighlightsProducts } from '@/utils/fetchData';
import HighlightsCarousel from './HighlightsCarousel';

export default async function Highlights() {
  const highlightItems = (await fetchHighlightsProducts()) || [];

  return (
    <section>
      <HighlightsCarousel items={highlightItems} />
    </section>
  );
}
