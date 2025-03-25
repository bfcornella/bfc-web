import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Menu,
  ChevronDown,
  Home,
  Settings,
  Users,
  BookOpen,
  MessageSquare,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface NavItem {
  title: string;
  //   icon: React.ReactNode;
  href: string;
  children?: { title: string; href: string }[];
}

const navItems: NavItem[] = [
  { title: 'INICI', href: '/' },
  {
    title: 'CLUB',
    // icon: <BookOpen className='h-4 w-4' />,
    href: '/club',
    children: [
      { title: 'Història', href: '/club/historia' },
      { title: 'Organigrama', href: '/club/organigrama' },
    ],
  },
  //   {
  //     title: 'Community',
  //     // icon: <Users className='h-4 w-4' />,
  //     href: '/community',
  //     children: [
  //       { title: 'Forums', href: '/forums' },
  //       { title: 'Discord', href: '/discord' },
  //       { title: 'Events', href: '/events' },
  //     ],
  //   },
  //   { title: 'Support', href: '/support' },
  //   { title: 'Settings', href: '/settings' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((current) =>
      current.includes(title) ? current.filter((item) => item !== title) : [...current, title]
    );
  };

  //   const handleNavigation = (href: string) => {
  //     router.push(href);
  //     setOpen(false);
  //   };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' className='md:hidden'>
          <Menu className='h-6 w-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0 h-dvh'>
        <SheetTitle className='flex items-center gap-2 px-5 pt-4'>
          <img src='/assets/logo.png' alt='BFC Logo' className={`w-5 h-5 object-contain`} />
          BF Cornellà
        </SheetTitle>
        {/* <ScrollArea className='h-full px-2'> */}
        {/* <div className='flex flex-col h-full justify-between pb-[35%]'> */}
        <div className='space-y-4 py-4'>
          <div className='space-y-1'>
            {navItems.map((item) =>
              item.children ? (
                <Collapsible
                  key={item.title}
                  open={openItems.includes(item.title)}
                  onOpenChange={() => toggleItem(item.title)}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' className='w-full justify-between'>
                      <span className='flex items-center'>
                        {/* {item.icon} */}
                        <span className='ml-2'>{item.title}</span>
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          openItems.includes(item.title) ? 'rotate-180' : ''
                        )}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className='space-y-1'>
                    {item.children.map((child) => (
                      <Button
                        key={child.title}
                        variant='ghost'
                        className='w-full justify-start text-left pl-8'
                        onClick={() => setOpen(false)}
                      >
                        <Link href={child.href}>{child.title}</Link>
                      </Button>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Button
                  key={item.title}
                  variant='ghost'
                  className='w-full justify-start'
                  onClick={() => setOpen(false)}
                >
                  {/* {item.icon} */}
                  <Link href={item.href} className='ml-2'>
                    {item.title}
                  </Link>
                </Button>
              )
            )}
          </div>
        </div>
        <div className='flex flex-col px-5 absolute bottom-5 w-full'>
          <div className='flex items-center justify-center py-5'>
            <Button className='bg-transparent border border-[#c80815] text-[#c80815] hover:border-foreground hover:text-white hover:bg-foreground'>
              <Link href='https://app.basquetfemenicornella.com'>APLICACIÓ</Link>
            </Button>
          </div>
          {/* <div className='flex space-x-4 text-sm justify-center'>
            <Link href='https://www.instagram.com/bfcornella/' target='_blank'>
              <Instagram size={17} />
            </Link>
            <Link href='https://x.com/bfemenicornella?lang=es' target='_blank'>
              <Twitter size={17} />
            </Link>
            <Link href='https://www.youtube.com/@basquetfemenicornella' target='_blank'>
              <Youtube size={17} />
            </Link>
          </div> */}
        </div>
        {/* </div> */}
        {/* </ScrollArea> */}
      </SheetContent>
    </Sheet>
  );
}
