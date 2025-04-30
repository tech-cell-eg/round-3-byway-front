import { useState } from 'react';
import { Iinstructor } from '@/types/types';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Props {
  course: Iinstructor;
}

export const InstructorCard = ({ course }: Props) => {
  const [imgError, setImgError] = useState(false);

  // Render a star icon based on rating
  const renderStars = (rating: number) => (
    <Star
      fill={rating > 0 ? '#FFC62A' : '#D6D6D6'}
      stroke={rating > 0 ? '#FFC62A' : '#D6D6D6'}
      className="w-4 h-4"
    />
  );

  // Get initials from instructor name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(n => n[0]?.toUpperCase())
      .join('');
  };

  return (
    <div className="p-4 border border-border-light rounded-2xl shadow-lg flex flex-col items-center text-center">
      {/* Avatar with fallback initials */}
      <Avatar className="bg-gray-300 w-20 h-20 mb-2">
        {course.instructorImage && !imgError ? (
          <AvatarImage
            src={course.instructorImage}
            alt={course.instructorName}
            onError={() => setImgError(true)}
          />
        ) : (
          <AvatarFallback>{getInitials(course.instructorName)}</AvatarFallback>
        )}
      </Avatar>

      {/* Instructor name */}
      <h3 className="text-lg font-semibold text-content-primary">
        {course.instructorName}
      </h3>

      {/* Course description */}
      <p className="text-sm text-content-secondary">{course.description}</p>

      <hr className="w-full border-t border-border-light my-4" />

      {/* Rating and students count */}
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
