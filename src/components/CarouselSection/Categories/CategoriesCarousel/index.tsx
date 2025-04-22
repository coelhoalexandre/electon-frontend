'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ICategory from '@/interfaces/ICategory';
import CarouselCard from './CarouselCard';

import 'swiper/css';
import 'swiper/css/navigation';

interface CategoriesCarouselProps {
  items: ICategory[];
}

export default function CategoriesCarousel({ items }: CategoriesCarouselProps) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={40}
      pagination={{ clickable: true }}
      navigation
      slidesPerView={'auto'}
      loop
      centeredSlides
      centeredSlidesBounds
      style={{ display: 'grid' }}
    >
      {items.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '380px',
            maxHeight: '150px',
          }}
        >
          <CarouselCard
            src={item.src}
            category={item.name}
            itemsQuant={item.totalItems}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
