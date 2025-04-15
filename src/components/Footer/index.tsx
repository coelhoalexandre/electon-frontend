import Image from 'next/image';
import Box from '../Box';
import NewsletterSection from '../NewsletterSection';
import Text from '../Text';
import GoogleIcon from '../Icon/GoogleIcon';
import FacebookIcon from '../Icon/FacebookIcon';
import WhatsAppIcon from '../Icon/WhatsAppIcon';

const footerNavigationList = [
  {
    title: 'Find product',
    list: [
      'Brownze arnold',
      'Chronograph blue',
      'Smart phones',
      'Automatic watch',
      'Hair straighteners',
    ],
  },
  {
    title: 'Get Help',
    list: [
      'About us',
      'Contact us',
      'Return policy',
      'Privacy Policy',
      'Payment policy',
    ],
  },
  {
    title: 'About Us',
    list: ['News', 'Service', 'Our policy', 'Customer care', "Faq's"],
  },
];

export default function Footer() {
  return (
    <footer className='flex flex-col gap-8 frame bg-tertiary py-10'>
      <NewsletterSection />
      <div className='grid grid-cols-[auto_1fr]'>
        <Box direction='column' gap={24}>
          <Box direction='column' gap={32}>
            <Image
              id='electon-logo_2'
              src={'/electon_logo_2.png'}
              alt=''
              width={140}
              height={39}
            />
            <Text variant='primary' size={'base'}>
              64 st james boulevard <br /> hoswick , ze2 7zj
            </Text>
            <hr className='h-[1px] border-foreground-gray' />
          </Box>
          <ul className='flex gap-10'>
            <li>
              <GoogleIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <WhatsAppIcon />
            </li>
          </ul>
        </Box>

        <Box align='space-around'>
          {footerNavigationList.map((navigation, index) => (
            <Box key={index} direction='column'>
              <h3 className='text-primary text-lg font-semibold'>
                {navigation.title}
              </h3>
              <ul className='flex flex-col gap-3 list-disc list-inside marker:text-foreground-gray'>
                {navigation.list.map((item, index) => (
                  <li key={index}>
                    <Text
                      variant='primary'
                      size={'base'}
                      className='inline -ml-2'
                    >
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </div>
    </footer>
  );
}
