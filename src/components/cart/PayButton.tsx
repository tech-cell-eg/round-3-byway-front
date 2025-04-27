import { useAppSelector } from '@/Redux/reduxHooks';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
  checkout?: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const PayButton = ({ checkout, setCheckout, setSuccess }: Props) => {
  const [payUnlock, setPayUnlock] = useState(false);
  const { t } = useTranslation(['cart/cart']);

  const { cardName, cardNumber, expirationDate, cvv } = useAppSelector(
    state => state.creditCard
  );

  const payPalEmail = useAppSelector(state => state.paypal.email);

  useEffect(() => {
    if (payPalEmail) {
      setPayUnlock(true);
    } else if (cardName && cardNumber && expirationDate && cvv) {
      setPayUnlock(true);
    } else {
      setPayUnlock(false);
    }
  }, [cardName, cardNumber, expirationDate, cvv, payPalEmail]);

  const payment = async () => {
    const headers = {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${authToken}`,
    };

    if (payPalEmail) {
      try {
        // await axios.post(
        //   '/api/checkout',
        //   { email: payPalEmail },
        //   {
        //     headers,
        //   }
        // );
        console.log(headers);
        console.log('payPalEmail', payPalEmail);
        setCheckout(false);
        setSuccess(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // await axios.post(
        //   '/api/checkout',
        //   {
        //     cardName,
        //     cardNumber,
        //     expirationDate,
        //     cvv,
        //   },
        //   { headers: headers }
        console.log(headers);
        console.log(
          JSON.stringify({
            cardName,
            cardNumber,
            expirationDate,
            cvv,
          })
        );
        setCheckout(false);
        setSuccess(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      {checkout ? (
        <button
          className="bg-button-tertiary text-button-primary rounded-[8px] py-3 text-body-small cursor-pointer w-full"
          onClick={() => setCheckout(true)}
        >
          {t('info.proceedToCheckout')}
        </button>
      ) : (
        <button
          className="bg-button-tertiary text-button-primary rounded-[8px] py-3 text-body-small cursor-pointer disabled:bg-button-disabled disabled:text-button-secondary disabled:cursor-not-allowed w-full"
          disabled={!payUnlock}
          onClick={payment}
        >
          {t('info.pay')}
        </button>
      )}
    </div>
  );
};

export default PayButton;
