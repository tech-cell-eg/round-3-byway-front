import { useTranslation } from 'react-i18next';
import { CourseCard } from '@/components/CommonComponents/CourseCard';
import { ICourse } from '@/types/types';
import { Link } from 'react-router';
import { useGetQuery } from '@/api/useGetQuery';

interface ApiResponse<T> {
  data: {
    courses: T;
  };
  status: number;
}

export default function TopCourses() {
  const { t } = useTranslation('home/topCourses');

  const {
    data: response,
    isLoading,
    isError,
  } = useGetQuery<ApiResponse<ICourse[]>>('/courses', '/courses?rating=3');
  if (isLoading) {
    return <div className="text-center py-8">جاري التحميل...</div>;
  }

  if (isError || !response?.data?.courses?.length) {
    return (
      <div className="text-center py-8 text-red-500">
        حدث خطأ في تحميل البيانات أو لا توجد دورات بتقييم مناسب.
      </div>
    );
  }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
          {response?.data?.courses?.map(course => {
            const courseData: ICourse = {
              id: course.id,
              title: course.title,
              name: t('description') + course.name,
              price: String(course.price),
              lectures: t('lecs'),
              num_lessons: String(course.num_lessons),
              duration: course.duration,
              level: course.level,
              students: t('students'),
              num_syllabi: course.num_syllabi,
              hoursName: t('hours'),
              reviews_count: t('rating'),
              rating: course.rating,
              currency: t('currency'),
              discount_price: course.discount_price,
              image: course.image,
            };
            return <CourseCard key={course.id} course={courseData} />;
          })}
        </div>
      </div>
    </>
  );
}
