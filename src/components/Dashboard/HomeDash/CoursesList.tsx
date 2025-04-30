import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export default function CoursesList() {
  const { t } = useTranslation();
  const courses = [
    {
      title: 'Beginner’s Guide to Design',
      price: '$50.00',
      chapters: 13,
      orders: 254,
      certificates: 25,
      reviews: 25,
      shelf: 500,
      tag: 'Free',
    },
    {
      title: 'Beginner’s Guide to Design',
      price: '$50.00',
      chapters: 13,
      orders: 254,
      certificates: 25,
      reviews: 25,
      shelf: 500,
      tag: 'Free',
    },
    {
      title: 'Beginner’s Guide to Design',
      price: '$50.00',
      chapters: 13,
      orders: 254,
      certificates: 25,
      reviews: 25,
      shelf: 500,
      tag: 'Free',
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {courses.map((course, idx) => (
          <Card
            key={idx}
            className="bg-white border-0 rounded-lg shadow-lg w-fit px-6 py-2"
          >
            <CardContent className=" ">
              <h3 className="text-base font-semibold py-3">{course.title}</h3>
              <hr className="text-border-light mb-3" />
              <div className="flex text-start justify-between text-sm font-semibold">
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.price}</p>
                  <p className="text-content-dark text-sm py-2 ">
                    {t('price')}
                  </p>
                </div>
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.chapters}</p>
                  <p className="text-content-dark text-sm py-2 ">
                    {t('chapters')}
                  </p>
                </div>
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.orders}</p>
                  <p className="text-content-dark text-sm py-2 ">
                    {t('orders')}
                  </p>
                </div>
              </div>
              <div className="flex text-start justify-between text-sm font-semibold">
                <div className="pe-10">
                  <p className="surface-dark-secondary">
                    {course.certificates}
                  </p>
                  <p className="text-content-dark text-sm py-2 ">
                    {t('certificates')}
                  </p>
                </div>
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.reviews}</p>
                  <p className="text-content-dark text-sm">{t('reviews')}</p>
                </div>
                <div className="pe-10">
                  <p className="surface-dark-secondary">{course.shelf}</p>
                  <p className="text-content-dark text-sm">{t('shelf')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
