'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselItem from './CarouselItem';

import 'swiper/css';
import 'swiper/css/pagination';
import IProduct from '@/interfaces/IProduct';

interface HighlightsCarouselProps {
  items: IProduct[];
}

export default function HighlightsCarousel({ items }: HighlightsCarouselProps) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      pagination={{ clickable: true }}
      slidesPerView={1}
      centeredSlides
      loop
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <CarouselItem product={item}></CarouselItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
