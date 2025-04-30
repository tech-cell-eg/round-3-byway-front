import { useTranslation } from 'react-i18next';
import { RevenueCard } from './RevenueCard';
import ReveChart from './ReveChart';
import Transaction from './Trasaction';

export default function Revenue() {
  const { t } = useTranslation('dashboard/Revenue/revenue');

  return (
    <div className="bg-bg-main h-full w-full px-0 mx-0 py-3 ps-5">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-surface-dark-secondary ">
          {t('revenue')}
        </h2>
      </div>
      <div>
        <RevenueCard />
        <ReveChart />
        <Transaction />
      </div>
    </div>
  );
}
