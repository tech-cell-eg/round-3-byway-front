import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookForm/resolvers/zod';

const labelStyle =
  'text-body-medium text-content-primary font-normal mb-2 font-normal';

const borderStyle =
  'border border-border-light rounded-[8px] p-4 bg-surface-light-primary placeholder:text-placeholder placeholder:text-body-base';

const creditCardSchema = () =>
  z.object({
    cardName: z.string().min(2),
    cardNumber: z.string().min(2),
    expirationDate: z.string().min(2),
    cvv: z.string().min(2),
  });

export const CreditCard = () => {
  const schema = creditCardSchema();

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  return (
    <form className="bg-surface-light-secondary rounded-[8px] flex flex-col gap-4">
      <div>
        <p className={labelStyle}>Name of Card</p>
        <Input {...register('cardName')} type="text" className={borderStyle} />
        {errors.cardName && (
          <p className="text-error text-body-small mt-2">
            {errors.cardName.message}
          </p>
        )}
      </div>

      <div>
        <p className={labelStyle}>Card Number</p>
        <Input
          {...register('cardNumber')}
          type="text"
          className={borderStyle}
        />
        {errors.cardNumber && (
          <p className="text-error text-body-small mt-2">
            {errors.cardNumber.message}
          </p>
        )}
      </div>

      <div className="flex gap-4 justify-between">
        <div className="flex-1">
          <p className={labelStyle}>Expiration Date</p>
          <Input
            {...register('expirationDate')}
            type="text"
            className={`${borderStyle} w-full`}
          />
          {errors.expirationDate && (
            <p className="text-error text-body-small mt-2">
              {errors.expirationDate.message}
            </p>
          )}
        </div>

        <div className="flex-1">
          <p className={labelStyle}>CVC/CVV</p>
          <Input
            {...register('cvv')}
            type="text"
            className={`${borderStyle} w-full`}
          />
          {errors.cvv && (
            <p className="text-error text-body-small mt-2">
              {errors.cvv.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
};
