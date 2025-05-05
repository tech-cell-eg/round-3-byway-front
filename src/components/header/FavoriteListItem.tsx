import { Link } from 'react-router';
import Icon from '../Icon';
import { Course } from './FavoritesButton';

type FavoriteListItemProp = {
  favoriteCourse: Course;
};
function FavoriteListItem({ favoriteCourse }: FavoriteListItemProp) {
  return (
    <li className="hover:bg-surface-highlight list-none cursor-pointer">
      <Link
        to="/"
        className="flex items-center gap-4 py-2 px-4 focus:bg-surface-highlight active:bg-accent-primary duration-medium"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden">
          {/* <img
          src={course.image}
          alt="course image"
          className="w-full h-full object-cover"
          /> */}
          <div className="w-full h-full bg-blue-200"></div>
        </div>

        <div>
          <h4 className="font-medium text-body-micro md:text-body-small group-active:text-surface-light-primary">
            {favoriteCourse.courseName}
          </h4>
          <h6 className="text-body-micro text-gray-500 group-active:text-surface-light-primary">
            {favoriteCourse.instructorName}
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
}

export default FavoriteListItem;
