'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface CatalogParamCheckboxProps {
  id: string;
  searchParamKey: string;
}

export default function CatalogParamCheckbox({
  id,
  searchParamKey,
}: CatalogParamCheckboxProps) {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggle = () => {
    if (checked) switchToFalse();
    else switchToTrue();
  };

  const switchToFalse = () => {
    setChecked(false);
    const queryString = createQueryString(searchParamKey, id, true);
    router.replace(`/catalog?${queryString}`);
  };

  const switchToTrue = () => {
    setChecked(true);
    const queryString = createQueryString(searchParamKey, id);
    router.replace(`/catalog?${queryString}`);
  };

  const createQueryString = useCallback(
    (name: string, value: string, isRemove?: boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      const defaultValue = params.get(name) || '';

      if (isRemove) {
        params.set(
          name,
          defaultValue
            .replace(value, '')
            .replace(/(?<=,),|^,/gm, '')
            .replace(/,$/, '')
        );
        if (!params.get(name)) params.delete(name);
        return params.toString();
      }

      params.set(name, defaultValue ? `${defaultValue},${value}` : value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const values = searchParams.get(searchParamKey)?.split(',');

    if (values?.includes(id)) setChecked(true);
  }, [id, searchParams, searchParamKey]);

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
