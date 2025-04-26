import { z } from 'zod';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Input } from '../ui/input';
import { CreditCard } from './payment/CreditCard';
import { Paypal } from './payment/Paypal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookForm/resolvers/zod';
import PaypalImg from '@/assets/images/checkout/paypal.png';
import VisaImg from '@/assets/images/checkout/visa.png';

const countryPaySchema = () =>
  z.object({
    country: z.string().min(2),
    state: z.string().min(2),
  });

export const Payment = () => {
  const schema = countryPaySchema();

  const { register } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  return (
    <div>
      <div className="border border-border-light p-4 rounded-[8px]">
        {/* country and state inputs */}
        <form className="flex gap-4 p-4 justify-between flex-col lg:flex-row">
          <div className="flex-1">
            <p className=" text-content-primary mb-2 font-semibold text-body-medium">
              Country
            </p>
            <Input
              {...register('country')}
              type="text"
              className="border border-border-light rounded-[8px] p-4 bg-surface-light-primary' w-full h-14"
              placeholder="Enter Country"
            />
          </div>

          <div className="flex-1">
            <p className=" text-content-primary mb-2 font-semibold text-body-medium">
              State/Union Territory
            </p>
            <Input
              {...register('state')}
              type="text"
              className="border border-border-light rounded-[8px] p-4 bg-surface-light-primary' w-full h-14"
              placeholder="Enter State"
            />
          </div>
        </form>

        <h3 className="text-content-primary text-body-medium font-semibold mb-4">
          Payment Methods
        </h3>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem
            value="item-1"
            className="bg-surface-light-secondary px-4 rounded-[8px] border-0"
          >
            <AccordionTrigger
              className="text-body-medium cursor-pointer"
              payment={true}
            >
              <p>Credit/Debit Card</p>
              <img src={VisaImg} className="w-20" alt="" />
            </AccordionTrigger>
            <AccordionContent>
              <CreditCard />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="bg-surface-light-secondary px-4 rounded-[8px] mt-4"
          >
            <AccordionTrigger
              className="text-body-medium cursor-pointer"
              payment={true}
            >
              <p>Paypal</p>
              <img src={PaypalImg} alt="" />
            </AccordionTrigger>
            <AccordionContent>
              <Paypal />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
