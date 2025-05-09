import submitEmail from '@/actions/submitEmail';
import SendIcon from '../Icon/SendIcon';
import HeadphoneIcon from '../Icon/HeadphoneIcon';
import Text from '../Text';

export default function NewsletterSection() {
  return (
    <section className='grid grid-rows-3 place-items-center gap-4 w-full bg-background rounded-2xl py-10 lg:grid-rows-2 lg:grid-cols-2 xl:gap-0 2xl:grid-rows-1 2xl:grid-cols-3'>
      <h2 className='text-3xl text-center text-primary font-bold sm:text-left'>
        Subscribe <br className='block xs:hidden' /> newsletter
      </h2>
      <form
        action={submitEmail}
        className='grid grid-cols-[1fr_auto] rounded-3xl py-5 px-6 bg-secondary w-4/5 max-w-96 '
      >
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email address'
          className='text-background text-sm font-semibold placeholder:text-background placeholder:text-sm placeholder:font-semibold'
        />
        <button type='submit' aria-label='Submit email'>
          <SendIcon />
        </button>
      </form>
      <div className='grid grid-cols-[auto] grid-rows-[auto_auto] gap-x-5 xs:grid-cols-[auto_auto] lg:col-span-2 2xl:col-span-1'>
        <span className='hidden row-span-2 sm:inline'>
          <HeadphoneIcon />
        </span>
        <Text weight={600}>Call us 24/7:</Text>
        <Text weight={600}>(+62) 0123 567 789</Text>
      </div>
    </section>
  );
}
