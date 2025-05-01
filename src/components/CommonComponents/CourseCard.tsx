import { ICourse } from '@/types/types';
import defulImg from '@/assets/1404cd23c41a9abe4a27d97b90bf3e50.jfif';
import { Star } from 'lucide-react';
import { SliderDemo } from '../Courses/Slider';

interface CourseCardProps {
  course: ICourse;
  percentage?: number;
}

export const CourseCard = ({ course, percentage }: CourseCardProps) => {
  // Check if course data exists
  if (!course || Object.keys(course).length === 0) {
    return null; // Or return a placeholder/message if preferred
  }
  console.log(course);
  const renderStars = (rating: number) => {
    if (!rating) return null;

    return (
      <div className="flex gap-1 justify-end mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            fill={i < rating ? '#FFC62A' : '#D6D6D6'}
            stroke={i < rating ? '#FFC62A' : '#D6D6D6'}
            className="w-4 h-4"
          />
        ))}
      </div>
    );
  };

  const rating = course.rating ?? 0;

  return (
    <div
      className={`relative p-3 flex flex-col border border-border-light rounded-2xl shadow-xl ${
        !course.title ? 'w-0 h-0 invisible' : 'w-full'
      }`}
    >
      <img
        src={course.image || defulImg}
        alt={course.title || 'Course Image'}
        className={`rounded-xl ${!course?.title ? 'w-0 h-0 invisible' : 'w-full h-[228px] object-contain'}`}
        onError={e => ((e.target as HTMLImageElement).src = defulImg)}
      />

      <div className="p-4 flex flex-col gap-1">
        {course.title && (
          <h3 className="text-content-primary text-body-medium font-bold">
            {course.title}
          </h3>
        )}

        {course.name && (
          <p className="text-button-secondary text-body-small min-h-[48px] lg:min-h-0">
            {course.name}
          </p>
        )}

        {percentage !== undefined && (
          <div className="mt-2 md:mt-4 mb-3 w-full">
            <SliderDemo percentage={percentage} />
          </div>
        )}

        {(rating > 0 || course.reviews_count) && (
          <div className="flex max-lg:flex-wrap gap-x-2">
            {course.rating > 0 && (
              <div className="flex text-icon-filled-star pt-1">
                {renderStars(course.rating)}
              </div>
            )}
            {course.reviews_count && (
              <p className="text-large text-content-primary font-medium">
                ({course.rating}
                {course.reviews_count})
              </p>
            )}
          </div>
        )}

        {(course.duration ||
          course.hoursName ||
          course.num_lessons ||
          course.lectures ||
          course.level) && (
          <div className="flex max-lg:flex-wrap text-button-secondary text-body-small font-regular md:min-h-[48px] lg:min-h-0">
            {course.duration && <p className="pe-1">{course.duration}</p>}
            {course.hoursName && <p className="pe-1">{course.hoursName} |</p>}
            {course.num_lessons && <p className="pe-1">{course.num_lessons}</p>}
            {course.lectures && <p className="pe-1">{course.lectures} |</p>}
            {course.level && <p className="pe-1">{course.level}</p>}
          </div>
        )}

        {(course.num_syllabi || course.students) && (
          <div className="flex pt-1 text-button-secondary text-body-small font-regular md:min-h-[48px] lg:min-h-0">
            {course.num_syllabi && <p className="pe-1">{course.num_syllabi}</p>}
            {course.students && <p>{course.students}</p>}
          </div>
        )}

        {course?.price && (
          <p className="text-xl font-bold">
            {course?.discount_price && course.discount_price > 0 && (
              <span className="text-content-primary">
                {course.discount_price} {course.currency || ''}
              </span>
            )}
            <span
              className={`${
                course?.discount_price && course.discount_price > 0
                  ? 'text-placeholder line-through ps-5'
                  : 'text-content-primary'
              }`}
            >
              {course.price} {course.currency || ''}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
