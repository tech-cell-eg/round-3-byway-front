import { useTranslation } from 'react-i18next';
import { CourseCard } from '../CommonComponents/CourseCard';
import SortedBy from './SortedBy';
import { ICourse } from '@/types/types';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { useScrollToTop } from '../CommonComponents/useScrollToTop';

export default function AllCourses() {
  const { t } = useTranslation('Category/allCourses');

  const courses = t('courses', { returnObjects: true }) as Record<
    string,
    Partial<ICourse>
  >;

  useScrollToTop();

  const courseEntries = Object.entries(courses);

  // Pagination setup
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courseEntries.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = courseEntries.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="md:px-7">
      <div className="flex w-full justify-end pt-14">
        <p className="text-content-primary pe-3">{t('sortBy')}</p>
        <span className="flex !rounded-lg border !border-content-primary">
          <SortedBy />
        </span>
      </div>

      <div className="grid grid-cols-1 pt-4 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2">
        {paginatedCourses.map(([key, course], index) => {
          const courseData: ICourse = {
            id: index,
            title: course.title || 'عنوان الدورة',
            name: course.name || '',
            price:
              typeof course.price === 'string'
                ? course.price
                : String(course.price ?? ''),
            lectures: course.lectures || '',
            num_lessons:
              typeof course.num_lessons === 'string'
                ? course.num_lessons
                : String(course.num_lessons ?? ''),
            level: course.level || '',
            students: course.students || '',
            num_syllabi:
              typeof course.num_syllabi === 'number' ? course.num_syllabi : 0,
            hoursName: course.hoursName || '',
            reviews_count:
              typeof course.reviews_count === 'string'
                ? course.reviews_count
                : String(course.reviews_count ?? '0'),
            rating: typeof course.rating === 'number' ? course.rating : 0,
            discount_price:
              typeof course.discount_price === 'number'
                ? course.discount_price
                : 0,
            currency: course.currency || '',
            image: course.image || '',
            instructor: course.instructor || '',
            duration: course.duration || '',
          };

          return <CourseCard key={key} course={courseData} />;
        })}
      </div>

      {/* Pagination */}
      <Pagination className="mt-8 flex justify-center pb-10">
        <PaginationContent className="gap-2">
          {/* Previous */}
          <PaginationItem>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="border border-gray-300 rounded-md p-2 hover:bg-muted"
            >
              <ChevronLeft size={18} />
            </button>
          </PaginationItem>

          {/* Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <button
                onClick={() => setCurrentPage(i + 1)}
                className={`border rounded-md px-3 py-1 
                  ${
                    currentPage === i + 1
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 text-gray-700 hover:bg-muted'
                  }`}
              >
                {i + 1}
              </button>
            </PaginationItem>
          ))}

          {/* Next */}
          <PaginationItem>
            <button
              onClick={() =>
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
              }
              className="border border-gray-300 rounded-md p-2 hover:bg-muted"
            >
              <ChevronRight size={18} />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
