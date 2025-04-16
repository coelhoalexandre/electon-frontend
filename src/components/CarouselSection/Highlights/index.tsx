import { fetchHighlights } from '@/utils/fetchData';
import HighlightsCarousel from './HighlightsCarousel';

export default async function Highlights() {
  const highlightItems = await fetchHighlights();

  return (
    <section>
      <HighlightsCarousel items={highlightItems} />
    </section>
  );
}
