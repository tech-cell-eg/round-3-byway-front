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

  const rating = course.reviews_average ?? 0;

  return (
    <div
      className={`relative p-3 flex flex-col border border-border-light rounded-2xl shadow-xl ${
        !course.category?.name ? 'w-0 h-0 invisible' : 'w-full'
      }`}
    >
      <img
        src={defulImg}
        alt="Course Image"
        className={`rounded-xl ${
          !course.category?.name
            ? 'w-0 h-0 invisible'
            : 'w-full h-[228px] object-contain'
        }`}
      />

      <div className="p-4 flex flex-col gap-1">
        {course.category?.name && (
          <h3 className="text-content-primary text-body-medium font-bold">
            {course.category.name}
          </h3>
        )}

        {course.description && (
          <p className="text-button-secondary text-body-small min-h-[48px] lg:min-h-0">
            {course.description}
          </p>
        )}

        {percentage !== undefined && (
          <div className="mt-2 md:mt-4 mb-3 w-full">
            <SliderDemo percentage={percentage} />
          </div>
        )}

        {(rating > 0 || course.reviews_count) && (
          <div className="flex max-lg:flex-wrap gap-x-2">
            {rating > 0 && (
              <div className="flex text-icon-filled-star pt-1">
                {renderStars(rating)}
              </div>
            )}
            {course.reviews_count && (
              <p className="text-large text-content-primary font-medium">
                ({course.reviews_count})
              </p>
            )}
          </div>
        )}

        {(course.hours ||
          course.hoursName ||
          course.lecturesName ||
          course.lectures ||
          course.level) && (
          <div className="flex max-lg:flex-wrap text-button-secondary text-body-small font-regular md:min-h-[48px] lg:min-h-0">
            {course.hours && <p className="pe-1">{course.hours}</p>}
            {course.hoursName && <p className="pe-1">{course.hoursName} |</p>}
            {course.lecturesName && (
              <p className="pe-1">{course.lecturesName}</p>
            )}
            {course.lectures && <p className="pe-1">{course.lectures} |</p>}
            {course.level && <p className="pe-1">{course.level}</p>}
          </div>
        )}

        {(course.numOfStu || course.students) && (
          <div className="flex pt-1 text-button-secondary text-body-small font-regular md:min-h-[48px] lg:min-h-0">
            {course.numOfStu && <p className="pe-1">{course.numOfStu}</p>}
            {course.students && <p>{course.students}</p>}
          </div>
        )}

        {course.price && (
          <p className="text-xl text-content-primary font-bold">
            {course.price}
            {course.has_discount && (
              <span className="text-placeholder line-through ms-2">
                {course.price}
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};
