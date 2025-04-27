import { Cartinfo } from '@/types/types';
import { CuponField } from './CuponField';

import PayButton from './PayButton';
import { useTranslation } from 'react-i18next';

type Props = {
  details: Cartinfo;
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
  checkout?: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OrderDetails = ({
  details,
  setCheckout,
  checkout,
  setSuccess,
}: Props) => {
  const { t } = useTranslation(['cart/cart']);

  return (
    <div className="flex flex-col gap-5 min-w-[330px]">
      <h3 className="text-content-primary text-body-large font-semibold">
        {t('info.otherDetails')}
      </h3>

      {/* order info */}
      <div className="flex flex-col gap-5 bg-surface-light-secondary border border-border-light p-4 rounded-[8px]">
        {/* price */}
        <div className="flex justify-between">
          <p className="text-body-base text-content-primary">
            {t('info.price')}
          </p>
          <p className="text-body-medium text-content-primary font-semibold">
            {details.price}
          </p>
        </div>

        {/* discount */}
        <div className="flex justify-between">
          <p className="text-body-base text-content-primary">
            {t('info.discount')}
          </p>
          <p className="text-body-medium text-content-primary font-semibold">
            -{details.discount}
          </p>
        </div>

        {/* tax */}
        <div className="flex justify-between border-b pb-4 border-border-light">
          <p className="text-body-base text-content-primary">{t('info.tax')}</p>
          <p className="text-body-medium text-content-primary font-semibold">
            {details.tax}
          </p>
        </div>

        {/* coupon */}

        {checkout && <CuponField />}

        {/* total price */}
        <div className="flex justify-between ">
          <p className="text-body-large text-content-primary font-bold">
            {t('info.grandTotal')}
          </p>
          <p className="text-body-large text-content-primary font-bold">
            {details.total}
          </p>
        </div>
      </div>
      <div className="px-4">
        <PayButton
          checkout={checkout}
          setCheckout={setCheckout}
          setSuccess={setSuccess}
        />
      </div>
    </div>
  );
};
