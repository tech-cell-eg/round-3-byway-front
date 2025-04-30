import { useTranslation } from 'react-i18next';
import { CourseCard } from '@/components/CommonComponents/CourseCard';
import { ICourse } from '@/types/types';
import { useGetQuery } from '@/api/useGetQuery';

interface Course {
  id: number;
  title: string;
  image: string;
  instructor: string;
  rating: number;
  num_reviews: number;
  level: string;
  price: string;
  discount_price: string;
  duration: number; // in minutes
  num_syllabi: number;
  num_lessons: number;
}

interface CoursesResponse {
  courses: Course[];
  pagination: {
    pagination: {
      total: number;
      per_page: number;
      current_page: number;
      last_page: number;
      from: number;
      to: number;
    };
    links: {
      first: string;
      last: string;
      prev: string | null;
      next: string | null;
    };
  };
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export default function MoreCourses() {
  const { t } = useTranslation('coursePage/MoreCourses');

  const {
    data: response,
    isLoading,
    isError,
  } = useGetQuery<ApiResponse<CoursesResponse>>('more-courses', '/courses');

  const courses = response?.data.courses.slice(0, 4) || [];

  if (isLoading) return <div className="text-center py-8"> Loading...</div>;

  if (isError || courses.length === 0)
    return (
      <div className="text-center py-8 text-red-500">
        Failed to load courses
      </div>
    );

  return (
    <div className="responsive-primary-padding-x responsive-secondary-padding-y">
      <div className="px-5 pb-5 flex justify-between">
        <h3 className="font-bold text-2xl text-border-dark">
          {t('moreCourses')}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {courses.map(course => {
          const hasDiscount = course.discount_price !== '0.00';
          const courseData: ICourse = {
            id2: course.id,
            name: course.title,
            description: '',
            price: hasDiscount
              ? `${course.discount_price} $`
              : `${course.price} $`,
            lectures: `${course.num_lessons}`,
            lecturesName: course.num_lessons,
            hours: Math.floor(course.duration / 60),
            hoursName: `${Math.floor(course.duration / 60)} Total Hours`,
            level: course.level,
            students: course.num_reviews.toString(),
            numOfStu: course.num_reviews,
            purchased: 0,
            small_desc: '',
            sku: 'sku123',
            reviews_count: course.num_reviews.toString(),
            reviews_average: course.rating,
            reviews: [],
            has_discount: hasDiscount,
            discount: hasDiscount
              ? `${Math.round(
                  ((parseFloat(course.price) -
                    parseFloat(course.discount_price)) /
                    parseFloat(course.price)) *
                    100
                )}%`
              : '0%',
            category: { id: 1, name: '' },
            images: [{ image: course.image }],
          };

          return <CourseCard key={course.id} course={courseData} />;
        })}
      </div>
    </div>
  );
}
