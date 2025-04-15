import submitEmail from '@/actions/submitEmail';
import SendIcon from '../Icon/SendIcon';
import HeadphoneIcon from '../Icon/HeadphoneIcon';
import Text from '../Text';

export default function NewsletterSection() {
  return (
    <section className='flex justify-around items-center w-full bg-background rounded-2xl py-10'>
      <h2 className='text-3xl text-primary font-bold'>Subscribe newsletter</h2>
      <form
        action={submitEmail}
        className='grid grid-cols-[1fr_auto] rounded-3xl py-5 px-6 bg-secondary w-1/4 max-w-96'
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
      <div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-x-5'>
        <span className='row-span-2'>
          <HeadphoneIcon />
        </span>
        <Text weight={600}>Call us 24/7:</Text>
        <Text weight={600}>(+62) 0123 567 789</Text>
      </div>
    </section>
  );
}
