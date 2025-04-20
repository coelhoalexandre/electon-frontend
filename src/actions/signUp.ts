'use server';

import { SERVER_URL } from '@/utils/fetchData';
import { redirect } from 'next/navigation';

const createUser = async (user: {
  email: string;
  username: string;
  password: string;
}): Promise<Record<string, string> | undefined> => {
  try {
    const response = await fetch(`${SERVER_URL}/user`, {
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

const signUp = async (formData: FormData) => {
  const email = formData.get('email');
  const username = formData.get('username');
  const password = formData.get('password');

  if (
    !(
      email &&
      typeof email === 'string' &&
      username &&
      typeof username === 'string' &&
      password &&
      typeof password === 'string'
    )
  ) {
    console.error('Some property is invalid');
    return;
  }

  const user = await createUser({ email, username, password });

  if (user) redirect('/signin');
};

export default signUp;
