'use server';

import { cookies } from 'next/headers';

const getAccessToken = async () => {
  const cookiesStore = await cookies();
  const { value: accessToken } = cookiesStore.get('access_token') || {};
  return accessToken;
};

export default getAccessToken;
