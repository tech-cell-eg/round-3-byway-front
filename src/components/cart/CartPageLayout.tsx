import { useAppSelector } from '@/Redux/reduxHooks';
import { CartCourse, CartData } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CartProductCard } from './CartProductCard';
import { CheckOutUi } from './CheckOutUi';
import { OrderDetails } from './OrderDetails';
import { SuccessPage } from './SuccessPage';
import { useNavigate } from 'react-router';

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
  const [courses, setCourses] = useState<CartCourse[]>([]);
  const [checkout, setCheckout] = useState(false);
  const { t } = useTranslation(['cart/cart']);
  const [success, setSuccess] = useState(false);
  const user = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const userToken = user?.token;
  const isUserLoadingFromLocalStorage = user?.isLoading;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isUserLoadingFromLocalStorage && !userToken) {
      navigate('/login');
    }
  }, [userToken, navigate, isUserLoadingFromLocalStorage]);

  const fetchCart = async () => {
    // fetch cart from backend
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    console.log(response.data);

    return response.data;
  };

  const {
    data,
    isPending,
    error: cartError,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
    enabled: !!userToken,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 65,
    retry: 0,
  });

  if (isUserLoadingFromLocalStorage) {
    return <div>Loading user...</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (data) {
    console.log(data);
    setCourses(data.data);
  }

  if (cartError) {
    console.log(cartError);
  }

  const cartContent = !success ? (
    <>
      <h1 className="text-[32px] font-semibold">{t('pageTitle')}</h1>
      <section className="flex flex-wrap xl:flex-row w-full justify-between gap-5">
        <div className="flex flex-col gap-5">
          <p className="mt-7">
            {courses.length > 1
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
            <p className="mt-7 text-center text-content-secondary">
              {t(['emptyCart'])}
            </p>
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
