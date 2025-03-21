'use client';

import { useEffect, useState } from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import NewsCard from './NewsCard';

const NewsCarousel = ({ news }: { news: any }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className='relative -mt-[200px] pb-10 z-10'>
      <div className='max-w-7xl mx-auto px-4'>
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className='w-full'
          key='news_carousel'
        >
          <CarouselContent className='-ml-2 md:-ml-4' key='news_carousel_content'>
            {news.map((article) => (
              <CarouselItem className='pl-2 md:pl-4 md:basis-1/3' key={article.attributes.id}>
                <NewsCard
                  title={article.attributes.title}
                  key={article.attributes.title}
                  imageUrl={article.attributes.cover.data.attributes.url}
                  date={article.attributes.publishedAt}
                  action={() => {}}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex -left-12 lg:-left-16' />
          <CarouselNext className='hidden md:flex -right-12 lg:-right-16' />
          <div className='py-6 flex justify-center gap-2'>
            {news.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-primary w-8' : 'bg-primary/20'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NewsCarousel;
