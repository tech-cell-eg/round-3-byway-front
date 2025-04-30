import { TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Data {
  id: number;
  numOfSales: string;
  title: string;
}

export default function LifeTimeCourses() {
  const { t } = useTranslation('dashboard/HomeDash/home');

  const data: Data[] = [
    {
      id: 1,
      numOfSales: t('currencySymbol') + ' 1 ' + t('thou'),
      title: t('lifetimeCoursesCommission'),
    },
    {
      id: 2,
      numOfSales: t('currencySymbol') + ' 200.0 ' + t('thou'),
      title: t('lifetimeReceivedCommission'),
    },
    {
      id: 3,
      numOfSales: t('currencySymbol') + ' 400.00 ' + t('thou'),
      title: t('lifetimePendingCommission'),
    },
  ];

  return (
    <div className="w-full p-2 pt-0">
      {data.map(item => (
        <div
          key={item.id}
          className="w-full my-2 bg-white shadow-lg rounded-lg flex justify-center items-center gap-4 py-2"
        >
          <TrendingUp size={70} className="text-green-main font-thin" />
          <div>
            <h5 className="text-xl text-surface-dark-secondary font-bold pb-1">
              {item.numOfSales}
            </h5>
            <p className="text-content-dark w-full">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
