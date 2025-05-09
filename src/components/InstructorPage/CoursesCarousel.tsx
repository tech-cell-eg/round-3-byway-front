import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../ui/carousel';
import { CourseCard } from '@/components/CommonComponents/CourseCard';
import { ICourse } from '@/types/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export interface CourseEntry {
  id: number;
  title?: string;
  description?: string;
  price?: number | string;
  lecs?: number | string;
  level?: string;
  students?: number | string;
  rating?: number | string;
  hours?: string;
  image?: string;
}

interface CoursesCarouselProps {
  courseEntries: [string, CourseEntry][];
  setCarouselRef: (api: CarouselApi) => void;
}

const CoursesCarousel = ({
  courseEntries,
  setCarouselRef,
}: CoursesCarouselProps) => {
  const carouselRef = useRef<CarouselApi | null>(null);

  const handlePrev = () => {
    carouselRef.current?.scrollPrev();
  };

  const handleNext = () => {
    carouselRef.current?.scrollNext();
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="absolute -top-16 right-0 flex gap-2">
        <button onClick={handlePrev} className="bg-gray-300 p-2 rounded-full">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className="bg-gray-300 p-2 rounded-full">
          <ChevronRight />
        </button>
      </div>

      <Carousel
        setApi={api => {
          setCarouselRef(api);
          carouselRef.current = api;
        }}
      >
        <CarouselContent className="gap-4">
          {courseEntries.map(([key, course], index) => {
            const courseData: ICourse = {
              id: index,
              title: course.title || '',
              description: course.description || '',
              price:
                typeof course.price === 'string'
                  ? course.price
                  : String(course.price ?? ''),
              lectures:
                typeof course.lecs === 'string'
                  ? course.lecs
                  : String(course.lecs ?? ''),
              lecturesName: 10,
              hours: 10,
              level: course.level || '',
              students:
                typeof course.students === 'string'
                  ? course.students
                  : String(course.students ?? ''),
              numOfStu: 100,
              hoursName: course.hours || '',
              purchased: 100,
              reviews_count:
                typeof course.rating === 'string'
                  ? course.rating
                  : String(course.rating ?? '0'),
              rating: 4.5,
              image: '',
            };

            return (
              <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                <CourseCard course={courseData} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CoursesCarousel;
