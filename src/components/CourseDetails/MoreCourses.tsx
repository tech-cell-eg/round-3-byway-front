import { useTranslation } from 'react-i18next';
import { CourseCard } from '@/components/CommonComponents/CourseCard';
import { ICourse } from '@/types/types';

interface ITranslatedCourse {
  title: string;
  description: string;
  price: string;
  lecs: string;
  hours: string;
  rating: string;
  level: string;
  students: string;
  category: string;
}

export default function MoreCourses() {
  const { t } = useTranslation('coursePage/MoreCourses');

  const courses = t('courses', { returnObjects: true }) as Record<
    string,
    ITranslatedCourse
  >;

  const courseEntries = Object.entries(courses).slice(0, 4);

  return (
    <>
      <div className="responsive-primary-padding-x responsive-secondary-padding-y">
        <div className="px-5 pb-5 flex justify-between">
          <h3 className="font-bold text-2xl  text-border-dark">
            {t('moreCourses')}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {courseEntries.map(([key, course], index) => {
            const courseData: ICourse = {
              id: index,
              name: course.title,
              description: course.description,
              price: course.price,
              lectures: course.lecs,
              lecturesName: 10,
              hours: 10,
              level: course.level,
              students: course.students,
              numOfStu: 100,
              hoursName: course.hours,
              purchased: 100,
              reviews_count: course.rating,
              rating: 4.5,
              image: '',
            };

            return <CourseCard key={key} course={courseData} />;
          })}
        </div>
      </div>
    </>
  );
}
