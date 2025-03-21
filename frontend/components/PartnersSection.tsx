import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const partnersImageUrl = [
  { id: 1, url: '/assets/tram_logo.png' },
  { id: 2, url: '/assets/montserrat_logo.jpg' },
  { id: 3, url: '/assets/megagame_logo.png' },
];

const PartnersSection = () => {
  return (
    <div className='container mx-auto px-4 mb-20'>
      <h2 className='mb-12 text-center text-3xl font-bold'>Els nostres col·laboradors</h2>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className='mx-auto w-full max-w-5xl'
      >
        <CarouselContent>
          {partnersImageUrl.map((partner) => (
            <CarouselItem key={partner.id} className='md:basis-1/2 lg:basis-1/3'>
              <div className='py-1 px-10'>
                <div className='overflow-hidden'>
                  <img src={partner.url} alt={`Col·laborador`} className='h-32 w-full object-contain aspect-video' />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PartnersSection;
