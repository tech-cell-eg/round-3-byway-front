import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import type { CarouselApi } from '../ui/carousel';
import TestSlides from './TestSlides';
import TestButtons from './TestButtons';
import type { Testimonial } from '@/types/types';

const TestimonialSection = () => {
  const { t } = useTranslation('home/testimonial');
  const carouselRef = useRef<CarouselApi | null>(null);

  const testimonials = t('testimonials', {
    returnObjects: true,
  }) as Testimonial[];

  const handlePrev = () => carouselRef.current?.scrollPrev();
  const handleNext = () => carouselRef.current?.scrollNext();

  return (
    <div className="items-center p-8 bg-[#F8FAFC]">
      <div className="flex justify-between items-center">
        <p className="text-left text-2xl font-bold">{t('testTitle')}</p>
        <TestButtons onPrev={handlePrev} onNext={handleNext} />
      </div>
      <TestSlides
        testimonials={testimonials}
        setCarouselRef={api => (carouselRef.current = api)}
      />
    </div>
  );
};

export default TestimonialSection;
