import { Link } from 'react-router';
import Icon from '../Icon';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export type Course = {
  id: string;
  courseName: string;
  instructorName: string;
  image: string;
  rating: number;
};

const favoriteCourses: Course[] = [
  {
    id: '1',
    courseName: 'React for Beginners',
    instructorName: 'Jane Doe',
    image: '/images/courses/react-beginners.jpg',
    rating: 4.8,
  },
  {
    id: '2',
    courseName: 'Advanced JavaScript Concepts',
    instructorName: 'John Smith',
    image: '/images/courses/advanced-js.jpg',
    rating: 4.7,
  },
  {
    id: '3',
    courseName: 'UI/UX Design Principles',
    instructorName: 'Emily Johnson',
    image: '/images/courses/ui-ux.jpg',
    rating: 4.6,
  },
  {
    id: '4',
    courseName: 'Node.js & Express Bootcamp',
    instructorName: 'Michael Lee',
    image: '/images/courses/node-express.jpg',
    rating: 4.9,
  },
  {
    id: '5',
    courseName: 'Fullstack Web Development',
    instructorName: 'Sophia Kim',
    image: '/images/courses/fullstack.jpg',
    rating: 4.85,
  },
];

function FavoritesButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="font-normal text-body-small focus-visible:ring-0 shadow-none cursor-pointer"
        >
          <Icon name="heart" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-screen md:min-w-72 mt-dropdown p-0 bg-surface-light-primary border-none rounded-small shadow-panel">
        {favoriteCourses.map((course, index) => (
          <DropdownMenuItem
            key={index}
            className="hover:bg-surface-highlight cursor-pointer"
          >
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
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FavoritesButton;
