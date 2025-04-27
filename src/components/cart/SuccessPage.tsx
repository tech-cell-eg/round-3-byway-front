import { Link } from 'react-router';
import Icon from '../Icon';
import { useTranslation } from 'react-i18next';

export const SuccessPage = () => {
  const { t } = useTranslation(['cart/payment']);
  return (
    <div className="flex flex-col gap-5 items-center text-center">
      <div className="size-[200px] bg-green-600 rounded-full flex items-center justify-center">
        <Icon name="check" className="text-white font-bold" size={104} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-content-primary text-[40px]">
          {t('success.title')}
        </h2>
        <p className="text-content-primary text-2xl font-semibold">
          {t('success.continue')}
        </p>
        <Link
          to="/courses"
          className="text-button-tertiary text-body-large
        font-semibold underline hover:no-underline w-fit mx-auto mt-4"
        >
          {t('success.link')}
        </Link>
      </div>
    </div>
  );
};
