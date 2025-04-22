'use server';

import { SERVER_URL } from '@/utils/fetchData';
import { cookies } from 'next/headers';

const logout = async () => {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get('access_token');

  if (!accessToken) return;

  await fetch(`${SERVER_URL}/auth/logout`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  cookiesStore.delete('access_token');
};

export default logout;
