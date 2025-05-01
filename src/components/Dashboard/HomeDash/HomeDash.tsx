import LifeTimeCourses from './LifeTimeCourses';
import LifeTimeSales from './LifeTimeSales';
import { useTranslation } from 'react-i18next';
import ReviewsDash from './ReviewsDash';
import CoursesList from './CoursesList';
import { Button } from '@/components/ui/button';

export default function HomeDash() {
  const { t } = useTranslation('dashboard/HomeDash/home');

  return (
    <div className="bg-bg-main h-full w-full px-0 mx-0 py-3 ps-5">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-surface-dark-secondary ">
          {t('dashboard')}
        </h2>
        <Button
          className="bg-accent-primary hover:bg-white me-5
        border border-transparent hover:border-accent-primary hover:text-accent-primary text-white"
        >
          {t('addCourse')}
        </Button>
      </div>
      <div className="flex max-md:flex-wrap w-full  ">
        <div className="w-full md:w-2/5 ">
          <LifeTimeCourses />
        </div>
        <div className="w-full md:w-3/5">
          <LifeTimeSales />
        </div>
      </div>
      <div className="">
        <h2 className="font-bold text-xl pb-4 text-surface-dark-secondary">
          {t('reviews')}
        </h2>
        <ReviewsDash />
      </div>
      <div>
        <h2 className="text-xl font-bold pb-2 pt-5">{t('courses')}</h2>
        <CoursesList />
      </div>
    </div>
  );
}
