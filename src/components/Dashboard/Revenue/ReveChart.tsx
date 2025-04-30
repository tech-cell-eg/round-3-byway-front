import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Define the type for the data
interface DataPoint {
  month: string;
  total: number;
}

interface Data {
  all: DataPoint[];
  lastMonth: DataPoint[];
  last3Months: DataPoint[];
  thisYear: DataPoint[];
}

// Define the data with the correct type
const data: Data = {
  all: [
    { month: 'Jan', total: 1000 },
    { month: 'Feb', total: 2000 },
    { month: 'Mar', total: 1800 },
    { month: 'Apr', total: 2400 },
    { month: 'May', total: 2200 },
    { month: 'Jun', total: 3000 },
    { month: 'Jul', total: 2700 },
    { month: 'Aug', total: 3500 },
    { month: 'Sep', total: 3200 },
    { month: 'Oct', total: 4000 },
    { month: 'Nov', total: 3700 },
    { month: 'Dec', total: 4500 },
  ],
  lastMonth: [
    { month: 'Oct', total: 4000 },
    { month: 'Nov', total: 3700 },
    { month: 'Dec', total: 4500 },
  ],
  last3Months: [
    { month: 'Oct', total: 4000 },
    { month: 'Nov', total: 3700 },
    { month: 'Dec', total: 4500 },
  ],
  thisYear: [
    { month: 'Jan', total: 1000 },
    { month: 'Feb', total: 2000 },
    { month: 'Mar', total: 3000 },
    { month: 'Apr', total: 4000 },
    { month: 'May', total: 3500 },
    { month: 'Jun', total: 5000 },
    { month: 'Jul', total: 4700 },
    { month: 'Aug', total: 5400 },
    { month: 'Sep', total: 6000 },
    { month: 'Oct', total: 6500 },
    { month: 'Nov', total: 7000 },
    { month: 'Dec', total: 7500 },
  ],
};

const ReveChart = () => {
  const { t } = useTranslation('dashboard/HomeDash/home');
  const [selectedPeriod, setSelectedPeriod] = useState<keyof Data>('all');
  const [isOpen, setIsOpen] = useState(false);

  const handlePeriodChange = (period: keyof Data) => {
    setSelectedPeriod(period);
    setIsOpen(false); // Close the period selection after choosing
  };

  return (
    <Card className="border-0 bg-transparent ps-0 ms-0 !shadow-none max-h-[230px] mt-2 mb-0 pb-0">
      <CardHeader className="flex-col items-start space-y-1 !shadow-0">
        <div className="flex items-center">
          <p className="text-lg font-semibold pe-2">{t('selectedPeriod')}</p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          <p className="text-lg font-semibold">{t('all')}</p>
        </div>
        {isOpen && (
          <div className="absolute z-50 bg-white !shadow-0 p-1 ps-0 rounded-md border-0 ">
            <button
              className="block text-gray-800 w-full text-sm p-1 ps-0 hover:bg-gray-100"
              onClick={() => handlePeriodChange('all')}
            >
              {t('all')}
            </button>
            <button
              className="block text-gray-800 w-full text-sm p-1 ps-0 hover:bg-gray-100"
              onClick={() => handlePeriodChange('lastMonth')}
            >
              {t('lastMonth')}
            </button>
            <button
              className="block text-gray-800 w-full text-sm p-1 ps-0 hover:bg-gray-100"
              onClick={() => handlePeriodChange('last3Months')}
            >
              {t('last3Months')}
            </button>
            <button
              className="block text-gray-800 w-full text-sm p-1 ps-0 hover:bg-gray-100"
              onClick={() => handlePeriodChange('thisYear')}
            >
              {t('thisYear')}
            </button>
          </div>
        )}
      </CardHeader>
      <CardContent className="h-[180px] mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data[selectedPeriod]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickFormatter={month => t(`months.${month}`)}
            />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ReveChart;
