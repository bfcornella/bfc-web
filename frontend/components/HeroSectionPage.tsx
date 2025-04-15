import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeroSectionPage = ({
  title,
  subtitle,
  imgUrl = 'https://images.unsplash.com/photo-1658633099140-046b45ee7f38?q=80&w=2688&auto=format&fit=crop',
  slug,
}: {
  title: string;
  subtitle: string;
  imgUrl?: string;
  slug: string[];
}) => {
  const slugUrl = '/' + slug.join('/');

  return (
    <>
      <section>
        <nav className='h-[300px] relative'>
          {imgUrl && <img src={imgUrl} alt='Imagen' className='h-full w-full object-cover' />}
          <div className={`absolute inset-0 ${imgUrl ? 'bg-black/40' : ''}`}>
            <div className='max-w-7xl mx-auto px-4 pt-10 h-full flex items-center justify-center text-center'>
              <div className={`${imgUrl ? 'text-white' : 'text-gray-500'}`}>
                <h1 className='text-5xl font-bold mb-4'>{title}</h1>
                <p className='text-xl mb-8'>{subtitle}</p>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <div className='px-12 flex items-center gap-2 text-sm p-4' aria-label='Breadcrumb'>
        <Link
          href='/'
          className='flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors'
          aria-label='Go back'
        >
          <ArrowLeft className='h-4 w-4' />
        </Link>
        <div className='flex items-center gap-2'>
          <Link href='/' className='text-gray-500 hover:text-gray-700 transition-colors' aria-label='Home'>
            Inici
          </Link>
          <span key='breacumb' className='flex items-center gap-2'>
            {slug.map((s, i) => {
              if (i + 1 === slug.length) {
                return (
                  <span key={s}>
                    <span className='text-gray-300'>/</span>
                    <Link href={slugUrl} className='text-gray-500 hover:text-gray-700 transition-colors capitalize'>
                      <span className='text-gray-500'>{s}</span>
                    </Link>
                  </span>
                );
              } else {
                return (
                  <span key={s}>
                    <span className='text-gray-300'>/</span>
                    <span className='text-gray-500 capitalize'>{s}</span>
                  </span>
                );
              }
            })}
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroSectionPage;
