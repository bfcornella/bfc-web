import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchAPI } from '@/lib/api';
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

const OrganigramaPage = async () => {
  const organization = await fetchAPI('/organization', { populate: '*' });
  // console.log(organization);
  const organizationMembers = organization.data.attributes.positions.data;
  // console.log('members', organizationMembers);
  return (
    <div className='container mx-auto py-12'>
      <h1 className='mb-8 text-2xl font-bold text-center'>ORGANIGRAMA</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-5'>
        {organizationMembers.map((member: any) => (
          <Card key={member.id} className='overflow-hidden'>
            <CardHeader className='text-center'>
              <Avatar className='mx-auto h-20 w-20'>
                <AvatarImage
                  src={
                    ['Judith', 'Belen', 'Angeles', 'Luisa', 'Isabel'].some((string) =>
                      member.attributes.name.includes(string)
                    )
                      ? '/assets/female_avatar.svg'
                      : '/assets/male_avatar.svg'
                  }
                  alt={member.attributes.name}
                />
                <AvatarFallback>
                  <UserRound className='h-12 w-12' />
                </AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardTitle className='text-center'>{member.attributes.name}</CardTitle>
            <CardContent className='text-center text-muted-foreground'>{member.attributes.position}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrganigramaPage;
