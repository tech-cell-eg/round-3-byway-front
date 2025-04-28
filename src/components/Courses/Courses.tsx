import { useTranslation } from 'react-i18next';
import CoursesCards from './CoursesCards';
import { useScrollToTop } from '../CommonComponents/useScrollToTop';

export default function Courses() {
  const { t } = useTranslation('Category/mainPage');

  useScrollToTop();

  return (
    <>
      <div className=" responsive-primary-padding-y">
        <div className="flex gap-0 text-surface-dark-secondary">
          <h2 className="font-bold text-2xl pe-0 me-0 lg:ps-7 ">
            {t('courses')}
            <span className="font-normal text-md">(12)</span>
          </h2>
        </div>
        <div className="flex max-md:flex-wrap  w-full">
          <div className="w-full">
            <CoursesCards />
          </div>
        </div>
      </div>
    </>
  );
}
