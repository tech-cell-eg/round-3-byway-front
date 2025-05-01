import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { ChevronUp } from 'lucide-react';

export function RevenueCard() {
  const { t } = useTranslation('dashboard/Revenue/revenue');

  const stats = [
    {
      label: t('totalProfits'),
      value: '+$24,340',
      percentage: '12.5%',
    },
    {
      label: t('lastTransaction'),
      value: '+$98.76',
      percentage: '2.3%',
    },
    {
      label: t('debit'),
      value: '-$103.52',
      percentage: '1.8%',
    },
  ];

  return (
    <div className="bg-transparent">
      <div className="mb-2">
        <h2 className="text-lg font-semibold pt-2">{t('title')}</h2>
        <p className="text-sm text-muted-foreground pt-1">{t('subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-sm border-0 bg-white py-0 ">
            <CardContent className="p-4 flex flex-col items-start justify-between h-full">
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-semibold">{stat.value}</span>
                <Badge className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                  <ChevronUp className="w-3 h-3 text-gray-700" />
                  {stat.percentage}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
