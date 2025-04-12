'use client';

import search from '@/actions/search';
import { useRef } from 'react';

export default function Search() {
  const searchRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSearchInFocus = () => searchRef.current?.focus();
  const focusOnInput = () => inputRef.current?.focus();

  return (
    <search
      ref={searchRef}
      className='rounded-2xl pl-6 w-[30.5vw] min-w-3xs h-14 bg-background focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-secondary'
      onFocus={console.log}
      onClick={focusOnInput}
    >
      <form
        action={search}
        className='relative flex items-center w-full h-full'
      >
        <input
          ref={inputRef}
          type='search'
          id='search'
          name='q'
          placeholder='Search any things'
          aria-label='Search any things'
          className='w-full placeholder:font-inherit placeholder:text-sm placeholder:text-foreground outline-0'
          onFocus={onSearchInFocus}
        />
        <button
          type='submit'
          className='absolute right-0 rounded-2xl w-3/10 min-w-[6.625rem] text-sm h-full bg-secondary text-background'
        >
          Search
        </button>
      </form>
    </search>
  );
}
