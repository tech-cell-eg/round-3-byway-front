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
  title: string;
  description: string;
  price: number;
  lecs: number;
  level: string;
  students: number;
  rating: number;
  hours: string;
  category?: string;
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
              id2: index + 1,
              name: course.title,
              description: course.description,
              price: String(course.price),
              lectures: String(course.lecs),
              lecturesName: 10,
              hours: 10,
              level: course.level,
              students: String(course.students),
              numOfStu: 100,
              hoursName: course.hours,
              purchased: 100,
              small_desc: '',
              sku: 'sku123',
              reviews_count: String(course.rating),
              reviews_average: 4.5,
              reviews: [],
              has_discount: false,
              discount: '',
              category: { id: 1, name: course.category || '' },
              images: [{ image: '/path/to/image.jpg' }],
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
