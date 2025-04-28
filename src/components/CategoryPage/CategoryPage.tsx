import AllCourses from './AllCourses';
import Filter from './Filter';
import { useTranslation } from 'react-i18next';
import PopularMentors from './PopularMentors';
import FeaturedCourses from './FeaturedCourses';
import { useScrollToTop } from '../CommonComponents/useScrollToTop';

export default function CategoryPage() {
  const { t } = useTranslation('Category/mainPage');

  useScrollToTop();

  return (
    <>
      <div className=" responsive-primary-padding-y">
        <h2 className="font-bold text-2xl responsive-primary-padding-x text-surface-dark-secondary">
          {t('courses')}
        </h2>
        <div className="flex max-md:flex-wrap  w-full">
          <div className="pe-10 w-full md:w-1/4">
            <Filter />
          </div>
          <div className="w-full md:w-3/4">
            <AllCourses />
          </div>
        </div>
        <PopularMentors />
        <FeaturedCourses />
      </div>
    </>
  );
}
