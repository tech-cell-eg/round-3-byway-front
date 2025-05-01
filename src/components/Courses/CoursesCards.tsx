import { useTranslation } from 'react-i18next';
import { CourseCard } from '../CommonComponents/CourseCard';
import { ICourse } from '@/types/types';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // icons
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import SortedBy from '../CategoryPage/SortedBy';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ITranslatedCourse {
  title: string;
  description: string;
  rating?: number;
  category?: string;
  price?: string;
  lectures?: string;
  num_lessons?: string;
  level?: string;
  students?: string;
  num_syllabi?: number;
  hoursName?: string;
  reviews_count?: string;
  discount_price?: number;
  currency?: string;
  image?: string;
  instructor?: string;
  duration?: string;
}

export default function CoursesCards() {
  const { t } = useTranslation('Category/allCourses');

  const courses = t('courses', { returnObjects: true }) as Record<
    string,
    ITranslatedCourse
  >;

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
    <>
      <div className="md:px-7">
        <div className="flex w-full justify-between pt-14">
          <div className="w-2/3 md:w-1/2 lg:w-1/3">
            <div className="relative w-full">
              <Input
                type="email"
                placeholder={t('search')}
                className="text-content-dark border-border-light"
              />
              <Search className="absolute end-3 top-1/2 h-5 w-5 -translate-y-1/2 text-content-dark" />
            </div>
          </div>
          <div className="flex">
            <p className="text-content-primary pe-3">{t('sortBy')}</p>
            <span className="flex !rounded-md border !border-content-primary">
              <SortedBy />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 pt-4 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2">
          {paginatedCourses.map(([key, course], index) => {
            // Create courseData with default values and optional fields
            const courseData: ICourse = {
              id: index,
              title: course.title || 'عنوان الدورة',
              name: course.description || '',
              reviews_count:
                typeof course.reviews_count === 'string'
                  ? course.reviews_count
                  : String(course.reviews_count ?? '0'),
              rating: typeof course.rating === 'number' ? course.rating : 0,
              image: '',
            };

            return (
              <div key={key}>
                {/* Render CourseCard with percentage prop */}
                <CourseCard
                  key={key}
                  course={courseData}
                  percentage={70} // Pass a fixed percentage value
                />
              </div>
            );
          })}
        </div>

        {/* Pagination UI */}
        <Pagination className="mt-8 flex justify-center pb-10">
          <PaginationContent className="gap-2">
            {/* Previous Arrow */}
            <PaginationItem>
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="border border-gray-300 rounded-md p-2 hover:bg-muted"
              >
                <ChevronLeft size={18} />
              </button>
            </PaginationItem>

            {/* Page Numbers */}
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

            {/* Next Arrow */}
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
    </>
  );
}
