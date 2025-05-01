// import ProfileUser from '@/components/profile page/ProfileUser';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Search } from 'lucide-react';
// import SortBy from '@/components/profile page/SortBy';
// import { useTranslation } from 'react-i18next';

import { ChevronLeft, ChevronRight } from 'lucide-react'; // icons
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { useState } from 'react';
import TeacherCard from '@/components/profile page teachers/TeacherCard';

const UserprofileTeacher = () => {
  // const { t } = useTranslation(['userProfile/Filter']);

  const teachers = [
    {
      id: 1,
      name: 'Ronald Richards',
      title: 'UI/UX Designer',
      imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
      studentsCount: 1200,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Jane Doe',
      title: 'Frontend Developer',
      imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
      studentsCount: 980,
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Ahmed Ali',
      title: 'Backend Developer',
      imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
      studentsCount: 1100,
      rating: 4.6,
    },
    {
      id: 4,
      name: 'Emily Smith',
      title: 'Project Manager',
      imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
      studentsCount: 760,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Mohamed Salah',
      title: 'Data Analyst',
      imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
      studentsCount: 800,
      rating: 4.4,
    },
    {
      id: 6,
      name: 'Sara Lee',
      title: 'Mobile Developer',
      imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
      studentsCount: 750,
      rating: 4.6,
    },
    {
      id: 7,
      name: 'John Carter',
      title: 'DevOps Engineer',
      imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
      studentsCount: 950,
      rating: 4.7,
    },
    {
      id: 8,
      name: 'Fatma Noor',
      title: 'Product Owner',
      imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
      studentsCount: 700,
      rating: 4.3,
    },
  ];

  // Pagination setup
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // حساب بداية ونهاية العنصر
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // تحديد البيانات المقطعة من courseEntries
  const currentTeachers = teachers.slice(indexOfFirstItem, indexOfLastItem);

  // عدد الصفحات
  const totalPages = Math.ceil(teachers.length / itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="">
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold">
                    Teachers ({teachers.length})
                  </h1>
                </div>

                {/* <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="w-full sm:w-96">
                    <div className="relative w-full sm:w-64">
                      <Input
                        type="search"
                        placeholder={t('filter.search')}
                        className="pl-10 border-gray-300"
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <SortBy />
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-gray-300 bg-white rounded-2xl shadow-sm p-4 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
                    >
                      {t('filter.btn')}
                    </Button>
                  </div>
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {currentTeachers.map(teacher => (
                    <TeacherCard
                      key={teacher.id}
                      id={teacher.id}
                      name={teacher.name}
                      title={teacher.title}
                      imageUrl={teacher.imageUrl}
                      studentsCount={teacher.studentsCount}
                      rating={teacher.rating}
                    />
                  ))}
                </div>

                {/* Pagination UI */}
                <Pagination className="mt-8 flex justify-center pb-10">
                  <PaginationContent className="gap-2">
                    {/* Previous Arrow */}
                    <PaginationItem>
                      <button
                        onClick={() =>
                          setCurrentPage(prev => Math.max(prev - 1, 1))
                        }
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserprofileTeacher;
