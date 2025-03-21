import HeroSectionPage from '@/components/HeroSectionPage';
import { fetchAPI } from '@/lib/api';
import { getStrapiMedia } from '@/lib/media';

const ClubPage = async () => {
  const historyCategory = await fetchAPI('/subcategories', {
    filters: { slug: 'history' },
    populate: '*',
  });
  const historyData = await fetchAPI('/history', { populate: '*' });
  const historyText = historyData.data.attributes.description_1.replace(/<[^>]+>/g, '');
  const historyText2 = historyData.data.attributes.description_2.replace(/<[^>]+>/g, '');
  return (
    <div>
      <HeroSectionPage
        title={historyCategory.data[0].attributes.name}
        subtitle={"Coneix l'història del club"}
        imgUrl={historyCategory.data[0].attributes.image.data.attributes.url}
        slug='historia'
      />
      <section className='min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto space-y-12'>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <p className='md:w-2/3 text-foreground leading-relaxed'>{historyText.slice(0, 650)}</p>
            <div className='md:w-1/3 shrink-0 flex items-center justify-center'>
              <img
                src={getStrapiMedia(historyData.data.attributes.photo_1)}
                alt=''
                className='rounded object-fit w-auto h-[300px]'
              />
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row-reverse items-center gap-6'>
            <p className='md:w-2/3 text-foreground leading-relaxed'>{historyText.slice(650, 1621)}</p>
            <div className='md:w-1/3 shrink-0 flex items-center justify-center'>
              <img
                src={getStrapiMedia(historyData.data.attributes.photo_2)}
                alt=''
                className='rounded object-fit h-[300px]'
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <p className='md:w-2/3 text-foreground leading-relaxed'>{historyText.slice(1621)}</p>
            <div className='md:w-1/3 shrink-0 flex items-center justify-center'>
              <img
                src={getStrapiMedia(historyData.data.attributes.photo_3)}
                alt=''
                className='rounded object-fit h-[300px]'
              />
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row-reverse items-center gap-6'>
            <p className='md:w-2/3 text-foreground leading-relaxed'>{historyText2.slice(0, 1124)}</p>
            <div className='md:w-1/3 shrink-0 flex items-center justify-center'>
              <img
                src={getStrapiMedia(historyData.data.attributes.photo_4)}
                alt=''
                className='rounded object-fit h-[300px]'
              />
            </div>
          </div>
          <p className='text-foreground leading-relaxed'>{historyText2.slice(1124)}</p>
        </div>
      </section>
    </div>
  );
};

export default ClubPage;
