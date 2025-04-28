import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../ui/carousel';
import Icon from '../Icon';
import { Testimonial } from '@/types/types';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
        {testimonials.map(item => {
          const getInitials = (name: string) => {
            const nameParts = name.split(' ');
            return nameParts
              .map(part => part.charAt(0).toUpperCase())
              .slice(0, 2)
              .join('');
          };

          return (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl shadow-sm p-6 bg-white mt-10 border border-[#E2E8F0]">
                <div className="flex flex-col gap-4">
                  <span className="text-3xl text-blue-500">
                    <Icon size={35} name="qoute" />
                  </span>
                  <p className="text-black">{item.paragraph}</p>

                  <div className="flex items-center gap-3 pt-4">
                    <Avatar className="bg-red-200">
                      {/* If Photo Exists It will appear */}
                      {item.image ? (
                        <AvatarImage src={item.image} />
                      ) : (
                        //  If Photo doesn't exist Two letters will appear
                        <AvatarFallback>
                          {getInitials(item.name)}
                        </AvatarFallback>
                      )}
                    </Avatar>

                    <div>
                      <p className="font-semibold text-black">{item.name}</p>
                      <p className="text-sm text-gray-700">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default TestSlides;
