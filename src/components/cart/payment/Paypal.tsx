import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookForm/resolvers/zod';
import { useForm } from 'react-hook-form';

const paypalSchema = () =>
  z.object({
    email: z.string().email({ message: 'Invalid email address' }),
  });

export const Paypal = () => {
  const schema = paypalSchema();

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  return (
    <form className="bg-surface-light-secondary rounded-[8px] flex flex-col gap-4">
      <p className="text-body-medium text-content-primary font-normal">
        PayPal Email
      </p>
      <Input
        {...register('email')}
        type="text"
        className="border border-border-light rounded-[8px] p-4 bg-surface-light-primary placeholder:text-placeholder placeholder:text-body-base"
        placeholder="Enter your email"
      />
      {errors.email && (
        <p className="text-error text-body-medium mt-2">
          {errors.email.message}
        </p>
      )}
    </form>
  );
};
