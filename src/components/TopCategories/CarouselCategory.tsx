import { useRef } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import CardCategories from './CardCategories';
import Icon, { IconName } from '../Icon';

const CarouselCategory = () => {
  const categories = [
    { id: 1, title: 'Design', description: '8 Courses', icon: 'telescope' },
    { id: 2, title: 'Development', description: '10 Courses', icon: 'code' },
    { id: 3, title: 'Marketing', description: '12 Courses', icon: 'briefcase' },
    { id: 4, title: 'Business', description: '15 Courses', icon: 'physics' },
    { id: 5, title: 'Design', description: '8 Courses', icon: 'telescope' },
    { id: 6, title: 'Development', description: '10 Courses', icon: 'code' },
    { id: 7, title: 'Marketing', description: '12 Courses', icon: 'briefcase' },
    { id: 8, title: 'Business', description: '15 Courses', icon: 'physics' },
    { id: 9, title: 'Marketing', description: '12 Courses', icon: 'briefcase' },
    { id: 10, title: 'Development', description: '10 Courses', icon: 'code' },
  ];

  const carouselRef = useRef<CarouselApi | null>(null);

  const handlePrev = () => {
    carouselRef.current?.scrollPrev();
  };

  const handleNext = () => {
    carouselRef.current?.scrollNext();
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-xl md:text-2xl text-content-primary font-medium">
            Top Categories
          </p>

          {/* Icons */}
          <div className="flex gap-5 ">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-200 rounded-medium"
            >
              <Icon name="chevron-left" size={24} className="text-gray-600 " />
            </button>

            <button
              onClick={handleNext}
              className="p-2 bg-gray-200 rounded-medium"
            >
              <Icon name="chevron-right" size={24} className="text-gray-600 " />
            </button>
          </div>
        </div>

        <Carousel
          setApi={api => (carouselRef.current = api)}
          className="mt-2 mb-5"
          opts={{
            slidesToScroll: 2,
            align: 'start',
            containScroll: 'trimSnaps',
          }}
        >
          <CarouselContent className="gap-3 sm:gap-4">
            {categories.map(item => (
              <CarouselItem
                key={item.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-4"
              >
                <CardCategories
                  id={item.id}
                  name={item.icon as IconName}
                  title={item.title}
                  description={item.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselCategory;
