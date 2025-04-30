import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Star } from "lucide-react";
import { useTranslation } from 'react-i18next';

const reviewData = [
  { label: 'total', count: 1000, rating: null },
  { label: '1', count: 100, rating: 1.0, color: 'bg-red-home' },
  { label: '2', count: 100, rating: 2.0, color: 'bg-brawen-home' },
  { label: '3', count: 100, rating: 3.0, color: 'bg-yellow-home' },
  { label: '4', count: 100, rating: 4.0, color: 'bg-ment-home' },
  { label: '5', count: 100, rating: 5.0, color: 'bg-green-home' },
];

export default function ReviewsDash() {
  const { t } = useTranslation('dashboard/HomeDash/home');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-">
      {reviewData.map((item, index) => (
        <Card
          key={index}
          className="text-center w-fit  py-2 px-5 bg-white border-0 rounded-xl"
        >
          <CardContent className="py-1 ">
            <p className="text-sm text-muted-foreground">
              {item.rating ? t(`stars.${item.label}`) : t('total')}
            </p>
            <p className="text-2xl font-bold">{item.count}</p>
            {item.rating && (
              <Badge className={`mt-1 ${item.color} text-white`}>
                {item.rating.toFixed(1)}
              </Badge>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
