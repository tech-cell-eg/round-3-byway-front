import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../ui/carousel';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/types/types';
import { useTranslation } from 'react-i18next';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  setCarouselRef: (api: CarouselApi) => void;
}

const TestSlides = ({
  testimonials,
  setCarouselRef,
}: TestimonialsCarouselProps) => {
  const { i18n } = useTranslation('home/testimonial');
  const isRTL = i18n.language === 'ar';

  return (
    <Carousel setApi={setCarouselRef}>
      <CarouselContent
        className={`gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
      >
        {testimonials.map(item => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="rounded-2xl shadow-sm p-6 bg-white mt-10 border border-[#E2E8F0]">
              <div className="flex flex-col gap-4">
                <span className="text-3xl text-blue-500">
                  <Quote />
                </span>
                <p className="text-black">{item.paragraph}</p>
                <div className="flex items-center gap-3 pt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-black">{item.name}</p>
                    <p className="text-sm text-gray-700">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestSlides;
