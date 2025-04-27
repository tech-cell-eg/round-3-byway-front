import { Input } from '@/components/ui/input';
import { useForm, FieldName } from 'react-hook-form'; // Import FieldName
import z from 'zod';
import { zodResolver } from '@hookForm/resolvers/zod';
import { useAppDispatch } from '@/Redux/reduxHooks';
import {
  setCardName,
  setCardNumber,
  setExpirationDate,
  setCvv,
} from '@/Redux/slices/payment/creditCardSlice';

const labelStyle =
  'text-body-medium text-content-primary font-normal mb-2 font-normal';

const borderStyle =
  'border border-border-light rounded-[8px] p-4 bg-surface-light-primary placeholder:text-placeholder placeholder:text-body-base';

const creditCardSchema = z.object({
  cardName: z.string().min(2).optional(),
  cardNumber: z.string().min(19).optional(),
  expirationDate: z.string().min(2).optional(),
  cvv: z.string().min(3).max(4).optional(),
});

type CreditCardFormData = z.infer<typeof creditCardSchema>;

export const CreditCard = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<CreditCardFormData>({
    resolver: zodResolver(creditCardSchema),
    mode: 'onChange',
  });

  // Updated handleFieldBlur
  const handleFieldBlur = (fieldName: FieldName<CreditCardFormData>) => {
    const value = getValues(fieldName);

    // Only dispatch if the value exists and is not empty/whitespace
    if (value && typeof value === 'string' && value.trim() !== '') {
      switch (fieldName) {
        case 'cardName':
          dispatch(setCardName(value));
          break;
        case 'cardNumber':
          // Always dispatch the raw, unformatted number
          dispatch(setCardNumber(value.replace(/\s+/g, '')));
          break;
        case 'expirationDate':
          dispatch(setExpirationDate(value));
          break;
        case 'cvv':
          dispatch(setCvv(value));
          break;
        default:
          break;
      }
    } else if (
      value === '' ||
      (typeof value === 'string' && value.trim() === '')
    ) {
      // Clear the redux state if the field is cleared
      switch (fieldName) {
        case 'cardName':
          dispatch(setCardName(''));
          break;
        case 'cardNumber':
          dispatch(setCardNumber(''));
          break;
        case 'expirationDate':
          dispatch(setExpirationDate(''));
          break;
        case 'cvv':
          dispatch(setCvv(''));
          break;
        default:
          break;
      }
    }
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const truncated = cleaned.substring(0, 16);
    return truncated.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpirationDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 3) {
      return `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
    }
    return cleaned;
  };

  return (
    <div className="bg-surface-light-secondary rounded-[8px] flex flex-col gap-4 p-4">
      <div>
        <p className={labelStyle}>Name on Card</p>{' '}
        <Input
          {...register('cardName', {
            onBlur: () => handleFieldBlur('cardName'),
          })}
          type="text"
          className={borderStyle}
          placeholder="John Doe"
        />
        {errors.cardName && (
          <p className="text-error text-body-small mt-2">
            {errors.cardName.message}
          </p>
        )}
      </div>
      <div>
        <p className={labelStyle}>Card Number</p>
        <Input
          {...register('cardNumber', {
            onBlur: () => handleFieldBlur('cardNumber'),
            onChange: event => {
              const formattedValue = formatCardNumber(event.target.value);
              event.target.value = formattedValue;
            },
          })}
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          maxLength={19}
          className={borderStyle}
          placeholder="0000 0000 0000 0000"
        />
        {errors.cardNumber && (
          <p className="text-error text-body-small mt-2">
            {errors.cardNumber.message}
          </p>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex-1">
          <p className={labelStyle}>Expiration Date</p>
          <Input
            {...register('expirationDate', {
              onBlur: () => handleFieldBlur('expirationDate'),
              onChange: event => {
                event.target.value = formatExpirationDate(event.target.value);
              },
            })}
            type="text"
            inputMode="numeric"
            maxLength={5}
            autoComplete="cc-exp"
            className={`${borderStyle} w-full`}
            placeholder="MM/YY"
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
            {...register('cvv', {
              onBlur: () => handleFieldBlur('cvv'),
            })}
            type="text"
            inputMode="numeric"
            maxLength={4}
            autoComplete="cc-csc"
            className={`${borderStyle} w-full`}
            placeholder="123"
          />
          {errors.cvv && (
            <p className="text-error text-body-small mt-2">
              {errors.cvv.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
