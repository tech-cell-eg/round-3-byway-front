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

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

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
        {courses.map((course, index) => {
          const courseData: ICourse = {
            id: index,
            name: course.title,
            description: '',
            price: course.discount_price || course.price,
            lectures: String(course.num_lessons),
            lecturesName: course.num_syllabi,
            hours: Math.round(course.duration / 60),
            hoursName: `${Math.round(course.duration / 60)}h`,
            level: course.level,
            students: '0',
            numOfStu: 0,
            purchased: 0,
            reviews_count: String(course.num_reviews),
            rating: course.rating,
            image: course.image,
          };

          return <CourseCard key={course.id} course={courseData} />;
        })}
      </div>
    </div>
  );
}
