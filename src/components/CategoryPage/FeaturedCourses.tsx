import { useTranslation } from 'react-i18next';
import { CourseCard } from '../CommonComponents/CourseCard';
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

export default function FeaturedCourses() {
  const { t } = useTranslation('Category/allCourses');

  const courses = t('courses', { returnObjects: true }) as Record<
    string,
    ITranslatedCourse
  >;

  const courseEntries = Object.entries(courses).slice(0, 4);

  return (
    <div className="responsive-secondary-padding-y responsive-primary-padding-x">
      <div className="px-5 pb-5">
        <h3 className="font-bold text-2xl text-border-dark">
          {t('featuredCourses')}
        </h3>
      </div>
      <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-2">
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
  );
}
