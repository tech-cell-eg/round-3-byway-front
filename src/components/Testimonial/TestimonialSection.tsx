import { useRef } from 'react';
import type { CarouselApi } from '../ui/carousel';
import TestSlides from './TestSlides';
import TestButtons from './TestButtons';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
        I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
        I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
                I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 4,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
                I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 5,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
        I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 6,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
        I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 7,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
        I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 8,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
        I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 9,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
            I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 10,
    name: 'Jane Doe',
    title: 'Designer',
    text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, 
                I appreciate the up-to-date content and engaging multimedia."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const TestimonialSection = () => {
  const carouselRef = useRef<CarouselApi | null>(null);

  const handlePrev = () => carouselRef.current?.scrollPrev();
  const handleNext = () => carouselRef.current?.scrollNext();

  return (
    <div className="items-center p-8 bg-[#F8FAFC]">
      <div className="flex justify-between items-center">
        <p className="text-left text-2xl font-bold">
          What Our Customer Say <br /> About Us
        </p>
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
