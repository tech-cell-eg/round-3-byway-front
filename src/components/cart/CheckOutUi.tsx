import { CartData } from '@/types/types';
import { OrderDetails } from './OrderDetails';
import { Payment } from './Payment';

const dummyData: CartData = {
  cartinfo: {
    count_courses: 3,
    price: '$149.97',
    discount: '$70.00',
    tax: '$12.00',
    total: '$91.97',
  },
  courses: [
    {
      id: 1,
      course_name: 'Mastering TypeScript',
      instructor_name: 'Jane Doe',
      rating: {
        count: 2150,
        rating: 4.7,
      },
      duration: '12h 30m',
      image: 'https://example.com/images/typescript.jpg',
      lecture_count: 85,
      level: 'Intermediate',
      price: {
        current: 29.99,
        initial: 49.99,
        discount: '40%',
      },
    },
    {
      id: 2,
      course_name: 'Intro to Python Programming',
      instructor_name: 'John Smith',
      rating: {
        count: 3890,
        rating: 4.5,
      },
      duration: '9h 45m',
      image: 'https://example.com/images/python.jpg',
      lecture_count: 72,
      level: 'Beginner',
      price: {
        current: 19.99,
        initial: 39.99,
        discount: '50%',
      },
    },
    {
      id: 3,
      course_name: 'Advanced React Techniques',
      instructor_name: 'Emily Clark',
      rating: {
        count: 1420,
        rating: 4.8,
      },
      duration: '15h 10m',
      image: 'https://example.com/images/react.jpg',
      lecture_count: 98,
      level: 'Advanced',
      price: {
        current: 42.99,
        initial: 59.99,
        discount: '28%',
      },
    },
  ],
};

export const CheckOutUi = () => {
  return (
    <div>
      <h1 className="text-[32px] font-semibold mb-5">Checkout Page</h1>

      <div className="flex flex-col lg:flex-row gap-5 justify-between">
        <div className="flex-1">
          <Payment />
        </div>
        <OrderDetails details={dummyData.cartinfo} setCheckout={() => {}} />
      </div>
    </div>
  );
};
