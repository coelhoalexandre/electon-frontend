'use server';

import { SERVER_URL } from '@/utils/fetchData';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const login = async (user: {
  email: string;
  password: string;
}): Promise<{ access_token: string } | undefined> => {
  try {
    const response = await fetch(`${SERVER_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const signIn = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  if (
    !(
      email &&
      typeof email === 'string' &&
      password &&
      typeof password === 'string'
    )
  ) {
    console.error('Some property is invalid');
    return;
  }

  const { access_token: accessToken } =
    (await login({ email, password })) || {};

  if (accessToken) {
    const cookieStore = await cookies();
    cookieStore.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 3600,
    });
    redirect('/');
  } else console.error('Invalid user');
};

export default signIn;
