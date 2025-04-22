import signUp from '@/actions/signUp';
import FlexBox from '@/components/FlexBox';
import Button from '@/components/ButtonRoot/Button';
import Form from '@/components/Form';
import Input from '@/components/Input';
import InputContainer from '@/components/InputContainer';
import Label from '@/components/Label';
import TypographyLink from '@/components/Link';

export default function SignUp() {
  return (
    <main className='frame flex justify-center items-center pt-24'>
      <Form action={signUp}>
        <h2 className='mt-3 border-b-1 border-primary pb-3 text-4xl text-primary text-center font-bold'>
          Sign Up
        </h2>
        <InputContainer>
          <Label required>Email:</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Type in you email...'
          ></Input>
        </InputContainer>
        <InputContainer>
          <Label required>Username:</Label>
          <Input
            type='username'
            id='username'
            name='username'
            placeholder='Type in you username...'
          ></Input>
        </InputContainer>

        <FlexBox className='gap-5'>
          <InputContainer>
            <Label required>Password:</Label>
            <Input
              type='password'
              id='password'
              name='password'
              placeholder='Type in you password...'
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label required>Confirm Password:</Label>
            <Input
              type='password'
              id='confirm-password'
              name='confirm-password'
              placeholder='Confirm your password...'
            ></Input>
          </InputContainer>
        </FlexBox>

        <FlexBox className='justify-end'>
          <TypographyLink
            href={'/signin'}
            typography={{ size: 'sm', variant: 'primary' }}
            className='hover:underline'
          >
            Would you like to sign in?
          </TypographyLink>
        </FlexBox>

        <Button type='submit' size='2xl' radius='4xl' className='py-2'>
          Register
        </Button>
      </Form>
    </main>
  );
}
