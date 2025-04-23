import { Iinstructor } from '@/types/types';
import defulImg from '@/assets/ab3038f8d90aa12ffe88c04090262b02.png';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface Props {
  course: Iinstructor;
}

export const InstructorCard = ({ course }: Props) => {
  const [imgError, setImgError] = useState(false);

  const renderStars = (rating: number) => (
    <Star
      fill={rating > 0 ? '#FFC62A' : '#D6D6D6'}
      stroke={rating > 0 ? '#FFC62A' : '#D6D6D6'}
      className="w-4 h-4"
    />
  );

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(n => n[0]?.toUpperCase())
      .join('');
  };

  return (
    <div className="p-4 border border-border-light rounded-2xl shadow-lg flex flex-col items-center text-center">
      {imgError || !course.instructorImage ? (
        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white mb-2">
          {getInitials(course.instructorName)}
        </div>
      ) : (
        <img
          src={course.instructorImage || defulImg}
          alt="Instructor"
          className="w-20 h-20 rounded-full object-cover mb-2"
          onError={() => setImgError(true)}
        />
      )}

      <h3 className="text-lg font-semibold text-content-primary">
        {course.instructorName}
      </h3>
      <p className="text-sm text-content-secondary">{course.instructorTitle}</p>

      <hr className="w-full border-t border-border-light my-4" />

      <div className="flex items-center justify-between gap-2 w-full text-sm text-button-secondary">
        <div className="flex items-center gap-1">
          {renderStars(course.reviews_average)}
          <span className="text-surface-dark-secondary font-medium">
            {course.reviews_average}
          </span>
        </div>
        <span className="text-content-secondary font-semibold">
          {course.numOfStu} {course.students}
        </span>
      </div>
    </div>
  );
};
