import { useTranslation } from 'react-i18next';
import CoursesCarousel from '@/components/InstructorPage/CoursesCarousel';
import { useRef } from 'react';
import { type CarouselApi } from '../ui/carousel';
import { type CourseEntry } from '@/components/InstructorPage/CoursesCarousel';

interface ITranslatedCourse {
  title: string;
  description: string;
  price: string;
  lecs: string;
  hours: string;
  rating: string;
  level: string;
  students: string;
  category: string;
}

export default function InsTopCourses() {
  const { t } = useTranslation('home/topCourses');
  const carouselRef = useRef<CarouselApi | null>(null);

  const courses = t('courses', { returnObjects: true }) as Record<
    string,
    ITranslatedCourse
  >;

  const courseEntries = Object.entries(courses)
    .slice(0, 4)
    .map(([key, course]) => {
      const courseEntry: CourseEntry = {
        title: course.title,
        description: course.description,
        price: parseFloat(course.price),
        lecs: parseInt(course.lecs, 10),
        hours: course.hours,
        rating: parseFloat(course.rating),
        level: course.level,
        students: parseInt(course.students, 10),
        category: course.category,
      };
      return [key, courseEntry] as [string, CourseEntry];
    });

  return (
    <div className="responsive-primary-padding-x responsive-secondary-padding-y">
      <div className="px-5 pb-5 flex justify-between">
        <h3
          className="font-bold text-2xl text-border-dark"
          dangerouslySetInnerHTML={{
            __html: t(
              'More Courses by <span class="text-[#2d69eb]">Ronald Richards</span>'
            ),
          }}
        />
      </div>

      <div className="mt-6">
        <CoursesCarousel
          courseEntries={courseEntries}
          setCarouselRef={api => (carouselRef.current = api)}
        />
      </div>
    </div>
  );
}
