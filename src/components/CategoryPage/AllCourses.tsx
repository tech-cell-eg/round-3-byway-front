import { useTranslation } from 'react-i18next';
import { CourseCard } from '../CommonComponents/CourseCard';
import SortedBy from './SortedBy';
import { ICourse } from '@/types/types';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // icons
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';

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

export default function AllCourses() {
  const { t } = useTranslation('Category/allCourses');

  const courses = t('courses', { returnObjects: true }) as Record<
    string,
    ITranslatedCourse
  >;

  const courseEntries = Object.entries(courses);

  // ⬇️ Pagination setup
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
      <div className="responsive-secondary-padding-y responsive-primary-padding-x">
        <div className="flex w-full justify-end pt-14">
          <span className="flex !rounded-xl">
            <SortedBy />
          </span>
        </div>

        <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2">
          {paginatedCourses.map(([key, course], index) => {
            const courseData: ICourse = {
              id2: startIndex + index + 1,
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

        {/* Pagination UI */}
        <Pagination className="mt-8 flex justify-center">
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
