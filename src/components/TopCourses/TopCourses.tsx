import { useTranslation } from 'react-i18next';
import { CourseCard } from '@/components/CommonComponents/CourseCard';
import { ICourse } from '@/types/types';
import { Link } from 'react-router';
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

export default function TopCourses() {
  const { t } = useTranslation('home/topCourses');

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
            {t('topCourses')}
          </h3>
          <Link to={'/allCourses'}>
            <p className="cursor-pointer text-icon-accent">{t('seeMore')}</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {courseEntries.map(([key, course], index) => {
            const courseData: ICourse = {
              id2: index + 1,
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
              small_desc: '',
              sku: 'sku123',
              reviews_count: course.rating,
              reviews_average: 4.5,
              reviews: [],
              has_discount: false,
              discount: '',
              category: { id: 1, name: course.category || '' },
              images: [{ image: '/path/to/image.jpg' }],
            };

            return <CourseCard key={key} course={courseData} />;
          })}
        </div>
      </div>
    </>
  );
}
