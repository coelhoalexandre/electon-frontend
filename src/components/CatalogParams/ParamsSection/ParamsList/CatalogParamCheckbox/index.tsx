'use client';

import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface CatalogParamCheckboxProps {
  id: string;
  param: string;
}

export default function CatalogParamCheckbox({
  id,
  param,
}: CatalogParamCheckboxProps) {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const toggle = () => setChecked((checked) => !checked);

  useEffect(() => {
    console.log(id, param, params, searchParams);
  }, [checked, id, param, router, params, searchParams]);

  return (
    <div
      id={id}
      role='checkbox'
      aria-checked={checked}
      tabIndex={1}
      aria-labelledby=''
      onClick={toggle}
      className='w-[30px] h-[30px] flex justify-center items-center rounded-lg bg-tertiary aria-checked:bg-foreground text-background aria-checked:after:content-["L"] after:rotate-45 after:-scale-x-100'
    />
  );
}
