import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/Redux/reduxHooks';
import { setPaypalEmail } from '@/Redux/slices/payment/paypalSlice';
import { zodResolver } from '@hookForm/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const paypalSchema = () =>
  z.object({
    email: z.string().email({ message: 'Invalid email address' }),
  });

export const Paypal = () => {
  const dispatch = useAppDispatch();

  const schema = paypalSchema();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: { email: string }) => {
    dispatch(setPaypalEmail(data.email));
  };

  const handleBlur = () => {
    const currentEmail = getValues('email');

    if (currentEmail == '') {
      dispatch(setPaypalEmail(''));
    } else {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="bg-surface-light-secondary rounded-[8px] flex flex-col gap-4">
      <p className="text-body-medium text-content-primary font-normal">
        PayPal Email
      </p>
      <Input
        {...register('email', {
          onBlur: handleBlur,
        })}
        type="text"
        className="border border-border-light rounded-[8px] p-4 bg-surface-light-primary placeholder:text-placeholder placeholder:text-body-base"
        placeholder="Enter your email"
      />
      {errors.email && (
        <p className="text-error text-body-medium mt-2">
          {errors.email.message}
        </p>
      )}
    </div>
  );
};
