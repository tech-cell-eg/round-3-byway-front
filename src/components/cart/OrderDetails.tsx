import { Cartinfo } from '@/types/types';
import { CuponField } from './CuponField';

import PayButton from './PayButton';

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
  return (
    <div className="flex flex-col gap-5 min-w-[330px]">
      <h3 className="text-content-primary text-body-large font-semibold">
        Order Details
      </h3>

      {/* order info */}
      <div className="flex flex-col gap-5 bg-surface-light-secondary border border-border-light p-4 rounded-[8px]">
        {/* price */}
        <div className="flex justify-between">
          <p className="text-body-base text-content-primary">Price</p>
          <p className="text-body-medium text-content-primary font-semibold">
            {details.price}
          </p>
        </div>

        {/* discount */}
        <div className="flex justify-between">
          <p className="text-body-base text-content-primary">Discount</p>
          <p className="text-body-medium text-content-primary font-semibold">
            -{details.discount}
          </p>
        </div>

        {/* tax */}
        <div className="flex justify-between border-b pb-4 border-border-light">
          <p className="text-body-base text-content-primary">Tax</p>
          <p className="text-body-medium text-content-primary font-semibold">
            {details.tax}
          </p>
        </div>

        {/* coupon */}

        {checkout && <CuponField />}

        {/* total price */}
        <div className="flex justify-between ">
          <p className="text-body-large text-content-primary font-bold">
            Total
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
