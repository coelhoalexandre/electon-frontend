import DeliveryIcon from '../Icon/DeliveryIcon';
import CrownIcon from '../Icon/CrownIcon';
import ShieldIcon from '../Icon/ShieldIcon';
import BenefitItem from './BenefitItem';

export default function BenefitsSection() {
  return (
    <section className='frame w-full '>
      <ul className='flex flex-col gap-10 justify-around py-10 bg-tertiary rounded-2xl md:flex-row md:gap-0'>
        <BenefitItem
          Icon={DeliveryIcon}
          title='Free delivery'
          description='on order above $50,00'
        />
        <BenefitItem
          Icon={CrownIcon}
          title='Best quality'
          description='best quality in low price'
        />
        <BenefitItem
          Icon={ShieldIcon}
          title='1 year warranty'
          description='Avaliable warranty'
        />
      </ul>
    </section>
  );
}
