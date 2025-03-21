import Image from 'next/image';
import { fetchAPI } from '@/lib/api';
import NewsCarousel from '@/components/NewsCarousel';
import PartnersSection from '@/components/PartnersSection';

export default async function Home() {
  const categoryIni = await fetchAPI('/categories', {
    sort: 'id',
    filters: { slug: 'home' },
    populate: {
      articles: {
        sort: { createdAt: 'desc' },
        populate: '*',
      },
      subcategories: {
        populate: '*',
      },
      articleSalient: {
        populate: '*',
      },
    },
  });

  // const [articlesRes, categoriesRes, global] = await Promise.all([
  //   fetchAPI('/articles', { sort: { createdAt: 'desc' }, populate: ['cover', 'category'] }),
  //   fetchAPI('/categories', {
  //     sort: 'id',
  //     populate: {
  //       subcategories: {
  //         populate: '*',
  //       },
  //     },
  //   }),
  //   fetchAPI('/global', {
  //     populate: '*' /*{
  //       defaultSeo: { populate: "*" },
  //     }*/,
  //   }),
  // ]);

  return (
    <>
      {/* Hero Section with Cards */}
      <section className='relative'>
        {/* Hero Background */}
        <div className='h-[65vh] relative'>
          <Image
            src='https://res.cloudinary.com/dz7qbaw3p/image/upload/v1738582820/c0jn3pfo2maxbvbgtyfu.jpg'
            alt='Stadium'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/60'>
            <div className='max-w-7xl mx-auto px-4 h-3/4 flex items-center'>
              <div className='text-white'>
                <h1 className='text-5xl font-bold mb-4'>BF Cornella</h1>
                <p className='text-xl mb-8'>Esport, Valors i Familia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section - Positioned at the bottom of hero */}
        {categoryIni && <NewsCarousel news={categoryIni.data[0].attributes.articles.data} />}
        <PartnersSection />
        {/* <div className='relative -mt-[150px] pb-16 z-10'>
          <div className='max-w-7xl mx-auto px-4'>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className='w-full'
            >
              <CarouselContent className='-ml-2 md:-ml-4'>
                {categoryIni.data[0].attributes.articles.data.map((article) => (
                  <CarouselItem className='pl-2 md:pl-4 md:basis-1/3' key={article.attributes.id}>
                    <NewsCard
                      title={article.attributes.title}
                      imageUrl={article.attributes.cover.data.attributes.url}
                      date={article.attributes.publishedAt}
                      action='hola'
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='hidden md:flex' />
              <CarouselNext className='hidden md:flex' />
            </Carousel>
          </div>
        </div> */}
      </section>
    </>
  );
}
