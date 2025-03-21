import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserRound } from 'lucide-react';

// Sample member data - in a real app this would likely come from an API
const members = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    avatar: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    avatar: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Product Manager',
    avatar: '/placeholder.svg',
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Lead Developer',
    avatar: '/placeholder.svg',
  },
];

const OrganigramaPage = () => {
  return (
    <div className='container mx-auto py-8'>
      <h1 className='mb-8 text-3xl font-bold'>Our Team</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {members.map((member) => (
          <Card key={member.id} className='overflow-hidden'>
            <CardHeader className='text-center'>
              <Avatar className='mx-auto h-24 w-24'>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>
                  <UserRound className='h-12 w-12' />
                </AvatarFallback>
              </Avatar>
              <CardTitle className='mt-4'>{member.name}</CardTitle>
            </CardHeader>
            <CardContent className='text-center text-muted-foreground'>{member.role}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrganigramaPage;
