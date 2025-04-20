import Box from '@/components/Box';
import UserIcon from '@/components/Icon/UserIcon';
import Text from '@/components/Text';
import { fetchUser } from '@/utils/fetchData';
import Link from 'next/link';

export default async function SignInButton() {
  const user = await fetchUser();
  return (
    <>
      {user ? (
        <Box gap={12} align='center'>
          <UserIcon />
          <Text variant={'background'}>{user.username}</Text>
        </Box>
      ) : (
        <Link href={'/signin'}>
          <Box gap={12} align='center'>
            <UserIcon />
            <Text variant={'background'}>Sign in</Text>
          </Box>
        </Link>
      )}
    </>
  );
}
