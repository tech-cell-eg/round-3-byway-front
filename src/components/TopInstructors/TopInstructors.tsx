import { useTranslation } from 'react-i18next';
import { Iinstructor } from '@/types/types';
import { InstructorCard } from '../CommonComponents/InstructorCard';
import { useGetQuery } from '@/api/useGetQuery';

interface ApiInstructor {
  instructor_id: number;
  name: string;
  title: string;
  total_reviews: number;
  coursesCount: number;
  image: string;
  total_students: string;
}

export default function TopInstructors() {
  const { t } = useTranslation('home/topInstructors');

  interface ApiResponse<T> {
    data: T;
    status: number;
  }

  const {
    data: response,
    isLoading,
    isError,
  } = useGetQuery<ApiResponse<ApiInstructor[]>>(
    '/instructors/top',
    '/instructors/top'
  );

  if (isLoading) return <div className="text-center py-8">جاري التحميل...</div>;

  if (isError || !response?.data)
    return (
      <div className="text-center py-8 text-red-500">
        حدث خطأ في تحميل البيانات
      </div>
    );

  return (
    <div className="responsive-primary-padding-x w-full responsive-secondary-padding-y">
      <div className="px-5 pb-5">
        <h3 className="font-bold text-2xl text-border-dark">
          {t('topInstructors')}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
        {response?.data.map((instructor: ApiInstructor) => {
          const instructorData: Iinstructor = {
            instructor_id: instructor.instructor_id,
            name: instructor.name,
            title: instructor.title,
            total_reviews: instructor.total_reviews,
            image: instructor.image,
            students: t('students'),
            total_students: instructor.total_students,
          };
          return (
            <InstructorCard
              key={instructor.instructor_id}
              course={instructorData}
            />
          );
        })}
      </div>
    </div>
  );
}
