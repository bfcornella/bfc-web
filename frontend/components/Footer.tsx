import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 text-center gap-8'>
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
          {/* <div>
            <h3 className='font-bold text-lg mb-4'>Teams</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/first-team'>First Team</Link>
              </li>
              <li>
                <Link href='/academy'>Academy</Link>
              </li>
              <li>
                <Link href='/women'>Women Team</Link>
              </li>
            </ul>
          </div> */}
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
        </div>
        <div className='mt-8 pt-8 border-t border-primary-foreground/10'>
          <p className='text-center text-sm'>
            Zioniks © {new Date().getFullYear()} BF Cornellà. Tots els drets reservats.
          </p>
        </div>
      </div>
    </footer>
  );
}
