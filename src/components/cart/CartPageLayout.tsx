import { CartProductCard } from './CartProductCard';
import { CartCourse, CartData } from '@/types/types';
import { OrderDetails } from './OrderDetails';
import { useEffect, useState } from 'react';
import { CheckOutUi } from './CheckOutUi';
import { useTranslation } from 'react-i18next';
import { SuccessPage } from './SuccessPage';

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

export const CartPageLayout = () => {
  const [courses, setCourses] = useState<CartCourse[]>(dummyData.courses);
  const [checkout, setCheckout] = useState(false);
  const [success, setSuccess] = useState(false);

  const { t } = useTranslation(['cart/cart']);

  useEffect(() => {
    console.log(`Checkout: ${checkout}, Success: ${success}`);
  }, [checkout, success]);

  const cartContent = !success ? (
    <>
      <h1 className="text-[32px] font-semibold">{t('pageTitle')}</h1>
      <section className="flex flex-wrap xl:flex-row w-full justify-between gap-5">
        <div className="flex flex-col gap-5">
          <p className="mt-7">
            {dummyData.cartinfo.count_courses > 1
              ? `${courses.length} ${t('coursesInCart')}`
              : `${courses.length} ${t('singleCourse')}`}
          </p>
          {courses.length > 0 ? (
            courses.map((course: CartCourse) => (
              <CartProductCard
                key={course.id}
                course={course}
                setCourses={setCourses}
              />
            ))
          ) : (
            <p className="mt-7">{t(['emptyCart'])}</p>
          )}
        </div>
        <OrderDetails
          details={dummyData.cartinfo}
          setCheckout={setCheckout}
          checkout
          setSuccess={setSuccess}
        />
      </section>
    </>
  ) : (
    <SuccessPage />
  );

  return (
    <div className="responsive-primary-padding-x responsive-primary-padding-y">
      {/* SHOPPING CART */}
      {checkout ? (
        <CheckOutUi setCheckout={setCheckout} setSuccess={setSuccess} />
      ) : (
        cartContent
      )}
    </div>
  );
};
