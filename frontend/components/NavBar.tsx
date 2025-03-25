'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu, Instagram, Youtube, Twitter } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { Collapsible } from './ui/collapsible';
import { MobileNav } from './MobileNav';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm' : 'bg-background'
      )}
    >
      {/* Top Bar */}
      <div className='bg-primary text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-8'>
            <div className='flex items-center space-x-4 text-sm'>
              <Link href='https://www.instagram.com/bfcornella/' target='_blank'>
                <Instagram size={17} />
              </Link>
              <Link href='https://x.com/bfemenicornella?lang=es' target='_blank'>
                <Twitter size={17} />
              </Link>
              <Link href='https://www.youtube.com/@basquetfemenicornella' target='_blank'>
                <Youtube size={17} />
              </Link>
            </div>
            <div className='flex items-center space-x-4'>
              <Link href='https://www.basquetcatala.cat/club/192' className='flex items-center space-x-1 text-xs'>
                <img src='/assets/fcbq_blanc_logo.png' className='size-[17px]' />
                <span>Federació Catalana Bàsquet</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className='border-b'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-20 relative'>
            <MobileNav />
            {/* Mobile Menu */}
            {/* <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent side='left'>
                <nav className='flex flex-col gap-4'>
                  <Link href='/' className='text-lg font-bold'>
                    Inici
                  </Link>
                  <Link href='/club/historia' className='text-lg'>
                    Historia
                  </Link>
                  <Link href='/club/organigrama' className='text-lg'>
                    Organigrama
                  </Link>
                  <Link href='/tickets' className='text-lg'>
                    FCBQ
                  </Link>
                  <Link href='/shop' className='text-lg'>
                    APP
                  </Link>
                </nav>
              </SheetContent>
            </Sheet> */}

            {/* Left Navigation */}
            <NavigationMenu className={cn('hidden md:flex')}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='uppercase'>CLUB</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4'>
                      <ListItem href='/club/historia' title='História'>
                        Com va començar tot?
                      </ListItem>
                      <ListItem href='/club/organigrama' title='Organigrama'>
                        Coneix la junta directiva del club
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className='uppercase'>Equips</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4'>
                      <ListItem href='/team/players' title='Cistella Petita'>
                        El futur del club
                      </ListItem>
                      <ListItem href='/team/staff' title='Cistella Gran'>
                        El present del club
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className='uppercase'>Noticies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4'>
                      <ListItem href='/matches/fixtures' title='Últimes noticies'>
                        Posa&apos;t al dia de les últimes notícies
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Center Logo */}
            <Link href='/' className='absolute left-1/2 transform -translate-x-1/2'>
              <Image src='/assets/logo.png' alt='Logo BFC' width={42} height={42} />
            </Link>

            {/* Right Navigation */}
            <NavigationMenu className='hidden md:flex'>
              <NavigationMenuList>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className='uppercase'>Partits</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4'>
                      <ListItem href='/matches/fixtures' title='Pròxims partits i horaris'>
                        Vine a animar als equips
                      </ListItem>
                      <ListItem href='/matches/results' title='Últims resultats'>
                        Es
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className='uppercase'>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4'>
                      <ListItem href='/shop/kits' title='Official Kits'>
                        Home, away, and third kits
                      </ListItem>
                      <ListItem href='/shop/merchandise' title='Merchandise'>
                        Official club merchandise and accessories
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link href='https://app.basquetfemenicornella.com' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        `${navigationMenuTriggerStyle()}  border border-[#c80815] text-[#c80815] hover:border-foreground hover:text-white hover:bg-foreground`
                      )}
                    >
                      APLICACIÓ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
