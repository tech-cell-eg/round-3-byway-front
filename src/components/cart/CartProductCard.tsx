import { CartCourse } from '@/types/types';
import { Star } from 'lucide-react';
// import axios from 'axios';
type Props = {
  course: CartCourse;
  setCourses: React.Dispatch<React.SetStateAction<CartCourse[]>>;
};

export const CartProductCard = ({ course, setCourses }: Props) => {
  const handleRemove = (id: number) => {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
    // axios.delete(`/api/carts`, { data: [id] });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          fill={i < rating ? '#FFC62A' : '#D6D6D6'}
          stroke={i < rating ? '#FFC62A' : '#D6D6D6'}
          strokeWidth={1}
          className="border-0 text-icon-filled-star"
          size={15}
        />
      );
    }
    return stars;
  };
  return (
    <div className="p-4 pl-6 flex flex-col md:flex-row md:justify-between border border-border-light lg:min-w-[880px] gap-4 rounded-[8px]">
      <img
        src="https://github.com/shadcn.png"
        alt=""
        className="h-auto w-48 max-h-[100px]"
      />

      {/* info + price wrapper */}
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* info */}
        <div className="flex flex-col ml-0 md:ml-4 flex-grow justify-between">
          <h3 className="text-body-medium font-bold">{course.course_name}</h3>
          <p className="text-body-small font-normal text-content-secondary">
            By {course.instructor_name}
          </p>

          {/* course details */}
          <div className="flex gap-2 items-center flex-wrap">
            {/* stars */}
            <div className="flex gap-1 items-center text-icon-filled-star">
              <p className="text-body-base font-semibold">
                {course.rating.rating}
              </p>
              <span className="flex gap-1">
                {renderStars(course.rating.rating)}
              </span>
            </div>

            <p className="text-content-secondary text-body-small">
              ({course.rating.count} Rating)
            </p>
            <p className="text-content-primary text-body-small">
              {course.duration}, {course.lecture_count}, {course.level}
            </p>
          </div>

          {/* button */}
          <button
            className="text-start text-[#DC2626] cursor-pointer"
            onClick={() => handleRemove(course.id)}
          >
            Remove
          </button>
        </div>

        {/* Price */}
        <div className="text-end mt-4 md:mt-0 md:self-start min-w-fit">
          <h2 className="text-body-big font-bold">$100</h2>
        </div>
      </div>
    </div>
  );
};
