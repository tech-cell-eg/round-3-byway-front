import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const data = [
  { month: 'Jan', total: 100 },
  { month: 'Feb', total: 200 },
  { month: 'Mar', total: 300 },
  { month: 'Apr', total: 400 },
  { month: 'May', total: 400 },
  { month: 'Jun', total: 400 },
  { month: 'Jul', total: 500 },
  { month: 'Aug', total: 700 },
  { month: 'Sep', total: 650 },
  { month: 'Oct', total: 850 },
  { month: 'Nov', total: 900 },
  { month: 'Dec', total: 1000 },
];

const Chart = () => {
  const { t } = useTranslation('dashboard/HomeDash/home');

  return (
    <Card className="border-white bg-white max-h-[280px]">
      <CardHeader className="flex-col items-start space-y-1">
        <CardTitle className="text-base font-semibold">
          {t('yearSales')}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{t('unit')}</p>
      </CardHeader>
      <CardContent className="h-[240px] mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickFormatter={month => t(`months.${month}`)}
            />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#3b82f6"
              fill="url(#colorTotal)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
