import { fetchHighlights } from '@/common/fetchData';
import HighlightsCarousel from './HighlightsCarousel';

export default async function Highlights() {
  const highlightItems = await fetchHighlights();

  return (
    <section>
      <HighlightsCarousel items={highlightItems} />
    </section>
  );
}
