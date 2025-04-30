import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import Lists from './Lists';

export default function CoursesDash() {
  const { t } = useTranslation('dashboard/HomeDash/home');

  return (
    <div className="ps-5">
      <div className="flex justify-between pt-5 ">
        <h2 className="font-bold text-2xl text-surface-dark-secondary ">
          {t('courses')}
        </h2>
        <Button
          className="bg-accent-primary hover:bg-white me-5
        border border-transparent hover:border-accent-primary hover:text-accent-primary text-white"
        >
          {t('addCourse')}
        </Button>
      </div>
      <div>
        <Lists />
      </div>
    </div>
  );
}
