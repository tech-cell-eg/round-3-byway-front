import { useRef } from 'react';
import Icon from '../Icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../ui/carousel';
import { Quote } from 'lucide-react';

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

  const handlePrev = () => {
    carouselRef.current?.scrollPrev();
  };

  const handleNext = () => {
    carouselRef.current?.scrollNext();
  };

  return (
    <div className="items-center p-8 bg-[#F8FAFC]">
      {/* First Row */}
      <div className="flex justify-between items-center">
        <p className="text-left text-2xl font-bold">
          What Our Customer Say <br /> About Us
        </p>

        {/* Icons */}
        <div className="flex gap-5">
          <Icon
            name="chevron-left"
            size={35}
            className="bg-[#94A3B8] rounded-2xl text-white cursor-pointer"
            onClick={handlePrev}
          />
          <Icon
            name="chevron-right"
            size={35}
            className="bg-[#94A3B8] rounded-2xl text-white cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Second Row (Slides) */}
      <Carousel setApi={api => (carouselRef.current = api)}>
        <CarouselContent className="gap-4">
          {testimonials.map(item => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl shadow-sm p-6 bg-white mt-10 border border-[#E2E8F0]">
                <div className="flex flex-col gap-4">
                  <span className="text-3xl text-blue-500">
                    <Quote />
                  </span>
                  <p className="text-black">{item.text}</p>
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
    </div>
  );
};

export default TestimonialSection;
