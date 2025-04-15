import BannerSection from '@/components/BannnerSection';
import BenefitsSection from '@/components/BenefitsSection';
import CarouselSection from '@/components/CarouselSection';
import LatestNewsSection from '@/components/LatestNewsSection';
import PopularSection from '@/components/PopularSection';
import ReviewsSection from '@/components/ReviewsSection';
import SponsorsSection from '@/components/SponsorsSection';
import TopSellersSection from '@/components/TopSellersSection';

export default function Home() {
  return (
    <>
      <main className='flex flex-col gap-14'>
        <CarouselSection />
        <PopularSection />
        <BannerSection />
        <TopSellersSection />
        <BenefitsSection />
        <ReviewsSection />
        <SponsorsSection />
        <LatestNewsSection />
      </main>
    </>
  );
}
