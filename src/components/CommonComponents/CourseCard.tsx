import { ICourse } from '@/types/types';
import defulImg from '@/assets/1404cd23c41a9abe4a27d97b90bf3e50.jfif';
import { Star } from 'lucide-react';

interface CourseCardProps {
  course: ICourse;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const renderStars = (rating: number) => {
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

  return (
    <div className="relative p-3 flex flex-col border  border-border-light rounded-2xl shadow-xl ">
      <img
        src={defulImg}
        alt="Course Image"
        className="w-full h-[228px] object-contain rounded-2xl"
      />

      {/* معلومات الدورة */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-content-primary text-body-medium  font-bold">
          {course.category.name}
        </h3>
        <p className="text-content-secondary text-body-small font-medium min-h-[48px] lg:min-h-0">
          {course.name}
        </p>
        <div className="flex gap-2">
          <div className="flex text-filled-star">
            {renderStars(course.reviews_average)}
          </div>
          (<p>{course.reviews_count}</p>)
        </div>
        <div className="flex text-content-base text-body-small font-regular min-h-[48px]  lg:min-h-0">
          <p>{course.hours}</p>
          <p>{course.hoursName}</p>
          <p>{course.lectures}</p>
          <p>{course.lecturesName}</p>
        </div>
        <p className="text-large font-medium">
          {course.price}
          {course.has_discount && (
            <span className="text-content-dim text-sm line-through ms-2">
              {course.price}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
