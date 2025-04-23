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
        className="w-full h-[228px] object-contain rounded-xl"
      />

      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-content-primary text-body-medium  font-bold">
          {course.category.name}
        </h3>
        <p className="text-button-secondary text-body-small  min-h-[48px] lg:min-h-0">
          {course.description}
        </p>
        <div className="flex gap-2 ">
          <div className="flex text-icon-filled-star pt-1">
            {renderStars(course.reviews_average)}
          </div>
          <p className="text-large text-content-primary font-medium">
            ({course.reviews_count})
          </p>
        </div>
        <div className="flex max-md:flex-wrap text-button-secondary text-body-small font-regular min-h-[48px]  lg:min-h-0">
          <p className="pe-1">{course.hours}</p>
          <p className="pe-1">{course.hoursName} |</p>
          <p className="pe-1">{course.lecturesName}</p>
          <p className="pe-1">{course.lectures} |</p>
          <p className="pe-1">({course.level})</p>
        </div>
        <div className="flex pt-1 text-button-secondary text-body-small font-regular min-h-[48px]  lg:min-h-0">
          <p className="pe-1">{course.numOfStu}</p>
          <p className="">{course.students}</p>
        </div>
        <p className="text-large text-content-primary font-medium">
          {course.price}
          {course.has_discount && (
            <span className="text-placeholder text-sm line-through ms-2">
              {course.price}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
