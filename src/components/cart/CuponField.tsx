import { Input } from '../ui/input';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// form validation
const cuponSchema = () =>
  z.object({
    // cuponCode: z.string().min(2, t('signUpForm:errors.cuponCode')),
    cuponCode: z.string().min(2),
  });

export const CuponField = () => {
  const schema = cuponSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: { cuponCode: string }) => {
    console.log(data);
  };

  return (
    <div>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="relative"
      >
        <Input
          type="text"
          placeholder="Cupon Code"
          {...register('cuponCode')}
          className="w-full rounded-md h-9 bg-input text-input placeholder:text-input/70"
        />
        {errors.cuponCode && (
          <p className="text-red-500 text-xs mt-1">
            {errors.cuponCode.message}
          </p>
        )}
        <button
          type="submit"
          className="absolute right-0 top-0 h-9 px-2 bg-button-tertiary text-button-primary rounded-r-md"
        >
          Apply
        </button>
      </form>
    </div>
  );
};
