import logout from '@/actions/logout';
import FlexBox from '@/components/FlexBox';
import UserIcon from '@/components/Icon/UserIcon';
import Text from '@/components/Text';
import { fetchUser } from '@/utils/fetchData';
import Link from 'next/link';

export default async function SignInButton() {
  const user = await fetchUser();
  return (
    <>
      {user ? (
        <button onClick={logout}>
          <FlexBox className='place-items-center gap-3'>
            <UserIcon title='User' />
            <Text variant={'background'}>Logout</Text>
          </FlexBox>
        </button>
      ) : (
        <Link href={'/signin'}>
          <FlexBox className='place-items-center gap-3'>
            <UserIcon title='User' />
            <Text variant={'background'}>Sign in</Text>
          </FlexBox>
        </Link>
      )}
    </>
  );
}
