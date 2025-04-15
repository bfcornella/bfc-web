import Link from 'next/link';
import { Twitter, Instagram, Youtube, Mail, Phone, Smartphone } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 text-center gap-8'>
          <div>
            <h3 className='font-bold text-lg mb-4'>Club</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/historia'>Història</Link>
              </li>
              <li>
                <Link href='/organigrama'>Organigrama</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>Segueix-nos</h3>
            <div className='flex space-x-4 justify-center align-middle'>
              <Link href='https://x.com/bfemenicornella?lang=es' target='_blank' className='hover:text-accent'>
                <Twitter className='h-6 w-6' />
              </Link>
              <Link href='https://www.instagram.com/bfcornella/' target='_blank' className='hover:text-accent'>
                <Instagram className='h-6 w-6' />
              </Link>
              <Link href='https://www.youtube.com/@basquetfemenicornella' target='_blank' className='hover:text-accent'>
                <Youtube className='h-6 w-6' />
              </Link>
            </div>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>Contacte</h3>
            <ul className='space-y-2'>
              <li className='flex justify-center items-center gap-3'>
                <Mail className='h-4 w-4' />
                <span>club@basquetfemenicornella.com</span>
              </li>
              <li className='flex justify-center items-center gap-3'>
                <Phone className='h-4 w-4' />
                <span>93 471 12 07</span>
              </li>
              <li className='flex justify-center items-center gap-3'>
                <Smartphone className='h-4 w-4' />
                <span>624 225 249</span>
              </li>
              <li className='flex justify-center items-center gap-3'>
                <Smartphone className='h-4 w-4' />
                <span>604 951 317</span>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className='font-bold text-lg mb-4'>Fans</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/membership'>Membership</Link>
              </li>
              <li>
                <Link href='/tickets'>Tickets</Link>
              </li>
              <li>
                <Link href='/shop'>Shop</Link>
              </li>
            </ul>
          </div> */}
        </div>
        <div className='text-xs flex justify-center items-center gap-2 pt-10'>
          <span>
            <a href='https://res.cloudinary.com/dz7qbaw3p/image/upload/v1744737446/documents/codi-etic.pdf'>
              Codi ètic
            </a>
          </span>
          <span>|</span>
          <span>
            <a href='https://res.cloudinary.com/dz7qbaw3p/image/upload/v1744737487/documents/reglament-intern.pdf'>
              Reglament intern
            </a>
          </span>
          <span>|</span>
          <span>
            <a href='https://res.cloudinary.com/dz7qbaw3p/image/upload/v1744737756/documents/protocol-proteccio.pdf'>
              Protocol protecció
            </a>
          </span>
        </div>
        <div className='mt-4 pt-8 border-t border-primary-foreground/10'>
          <p className='text-center text-sm'>
            Zioniks © {new Date().getFullYear()} BF Cornellà. Tots els drets reservats.
          </p>
        </div>
      </div>
    </footer>
  );
}
