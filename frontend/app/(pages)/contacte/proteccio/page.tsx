'use client';
import React from 'react';
import HeroSectionPage from '@/components/HeroSectionPage';

const Proteccio = () => {
  return (
    <div>
      <HeroSectionPage
        title="Protocol per a la protecció d'infants i adolescents"
        subtitle='Que has de fer'
        slug={['contacte', 'proteccio']}
      />
      <article className='pb-40 bg-background py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto space-y-12'>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            A continuació tens el enllaç al nostre{' '}
            <a
              target='_blank'
              href='https://res.cloudinary.com/dz7qbaw3p/image/upload/v1744737756/documents/protocol-proteccio.pdf'
              className='text-red-700 underline hover:text-gray-400'
            >
              protocol de protecció
            </a>{' '}
            on trobaràs tota l'informació necessaria, també t'expliquem quin procediment seguir quan vulguis comunicar
          </p>
          <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>Procediment a seguir</h3>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            <li>
              Descarrega el formulari al següen enllaç:{' '}
              <a
                target='_blank'
                href='https://res.cloudinary.com/dz7qbaw3p/image/upload/v1744737892/documents/formulari-proteccio.pdf'
                className='text-red-700 underline hover:text-gray-400'
              >
                formulari protecció
              </a>
            </li>
            <li>Omple i signa degudament al formulari</li>
            <li>
              Envía el formulario a la direcció de correu electronic:{' '}
              {/* <a
                href='mailto:proteccio@basquetfemenicornella.com'
                className='text-red-700 underline hover:text-gray-400'
              > */}
              proteccio@basquetfemenicornella.com
              {/* </a> */}
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Proteccio;
