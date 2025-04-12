import search from '@/actions/search';

export default function Search() {
  return (
    <search className='rounded-2xl pl-6 w-[30.5vw] min-w-3xs h-14 bg-background'>
      <form
        action={search}
        className='relative flex items-center w-full h-full'
      >
        <input
          type='search'
          id='search'
          name='q'
          placeholder='Search any things'
          aria-label='Search any things'
          className='w-1/2 placeholder:font-inherit placeholder:text-sm placeholder:text-foreground'
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
