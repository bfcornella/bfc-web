'use client';

import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

const NewsCard = ({
  title,
  imageUrl,
  date,
  action,
}: {
  title: string;
  imageUrl: string;
  date: string;
  action: () => void;
}) => {
  const consLog = () => {
    console.log(action);
  };
  return (
    <Card className='overflow-hidden group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-0'>
      <div className='relative h-[300px]'>
        <Image
          src={imageUrl}
          alt='Match Celebration'
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent'>
          <CardContent className='absolute bottom-0 p-6 text-white'>
            <p className='text-sm font-medium mb-2'>{date}</p>
            <h3 className='text-2xl font-bold mb-3 line-clamp-1'>{title}</h3>
            <Button
              variant='outline'
              className='text-primary border-white hover:bg-foreground hover:text-primary-foreground'
              onClick={consLog}
            >
              Leer Más
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
