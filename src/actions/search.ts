'use server';

import { redirect } from 'next/navigation';

export default async function search(formData: FormData) {
  console.log(formData);
  const query = formData.get('q');

  if (!query) return;

  redirect(`/catalog?q=${query}`);
}
