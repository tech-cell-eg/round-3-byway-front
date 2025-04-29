import React from 'react';
import { Link } from 'react-router';
import Icon from '../Icon';

type Course = {
  id: number;
  courseName: string;
  instructorName: string;
  image: string;
  description?: string;
  duration?: string;
  level?: string;
};

type CartListItemProps = {
  course: Course;
};

const CartListItem: React.FC<CartListItemProps> = ({ course }) => {
  return (
    <li className="group border-b border-b-border-light last:border-b-0">
      <Link
        to="/"
        className="flex items-center gap-4 py-2 px-4 hover:bg-surface-highlight focus:bg-surface-highlight active:bg-accent-primary duration-medium"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden">
          {/* <img
          src={course.image}
          alt="course image"
          className="w-full h-full object-cover"
          /> */}
          <div className="w-full h-full bg-blue-200 rounded-circle"></div>
        </div>

        <div>
          <h4 className="font-semibold text-body-small group-active:text-surface-light-primary">
            {course.courseName}
          </h4>
          <h6 className="text-body-micro text-gray-500 group-active:text-surface-light-primary">
            {course.instructorName}
          </h6>
        </div>

        <Icon
          name="arrow-right"
          size={16}
          className="my-auto ms-auto me-1 text-content-dark group-active:text-surface-light-primary opacity-0 group-hover:opacity-100 duration-short animate-horizontal-move"
        />
      </Link>
    </li>
  );
};

export default CartListItem;
