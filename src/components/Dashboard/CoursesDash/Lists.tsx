import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';

export default function Lists() {
  const { t } = useTranslation('dashboard/HomeDash/home');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const courses = [
    {
      title: 'Beginner’s Guide to Design',
      price: '$50.00',
      chapters: 13,
      orders: 254,
      certificates: 25,
      reviews: 25,
      shelf: 500,
      tag: 'Free',
    },
    {
      title: 'Advanced UX/UI Design',
      price: '$100.00',
      chapters: 20,
      orders: 300,
      certificates: 40,
      reviews: 60,
      shelf: 600,
      tag: 'Paid',
    },
    {
      title: 'Intro to Web Development',
      price: '$75.00',
      chapters: 18,
      orders: 200,
      certificates: 35,
      reviews: 40,
      shelf: 450,
      tag: 'Free',
    },
    {
      title: 'React for Beginners',
      price: '$90.00',
      chapters: 15,
      orders: 150,
      certificates: 30,
      reviews: 20,
      shelf: 300,
      tag: 'Free',
    },
    {
      title: 'Mastering Tailwind CSS',
      price: '$60.00',
      chapters: 12,
      orders: 180,
      certificates: 22,
      reviews: 18,
      shelf: 350,
      tag: 'Free',
    },
  ];

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const currentCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 ">
        {currentCourses.map((course, idx) => (
          <Card
            key={idx}
            className="bg-white border-0 rounded-lg shadow-lg w-fit px-6 py-2"
          >
            <CardContent>
              <h3 className="text-base font-semibold py-3">{course.title}</h3>
              <hr className="text-border-light mb-3" />
              <div className="flex text-start justify-between text-sm font-semibold">
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.price}</p>
                  <p className="text-content-dark text-sm py-2">{t('price')}</p>
                </div>
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.chapters}</p>
                  <p className="text-content-dark text-sm py-2">
                    {t('chapters')}
                  </p>
                </div>
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.orders}</p>
                  <p className="text-content-dark text-sm py-2">
                    {t('orders')}
                  </p>
                </div>
              </div>
              <div className="flex text-start justify-between text-sm font-semibold">
                <div className="pe-10">
                  <p className="surface-dark-secondary">
                    {course.certificates}
                  </p>
                  <p className="text-content-dark text-sm py-2">
                    {t('certificates')}
                  </p>
                </div>
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.reviews}</p>
                  <p className="text-content-dark text-sm">{t('reviews')}</p>
                </div>
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.shelf}</p>
                  <p className="text-content-dark text-sm">{t('shelf')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={handlePrev}
                className={
                  currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  {index + 1}
                </button>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={handleNext}
                className={
                  currentPage === totalPages
                    ? 'pointer-events-none opacity-50'
                    : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
