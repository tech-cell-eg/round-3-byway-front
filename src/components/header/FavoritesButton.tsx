import Icon from '../Icon';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import FavoriteListItem from './FavoriteListItem';

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
        {favoriteCourses.map(course => (
          <FavoriteListItem key={course.id} favoriteCourse={course} />
        ))}

        <Dialog>
          <DialogTrigger className="w-full py-3 font-semibold text-content-dark hover:text-content-light active:text-content-light bg-surface-highlight hover:bg-accent-secondary active:bg-accent-primary cursor-pointer duration-short">
            View More
          </DialogTrigger>

          <DialogContent className="p-2 md:p-5 bg-surface-light-primary border-0">
            <DialogHeader>
              <DialogTitle className="flex justify-center items-center gap-3">
                <Icon name="heart" className="text-blue-300 fill-blue-300" />
                Favorite Courses
              </DialogTitle>
            </DialogHeader>

            <ul className="h-[240px] md:h-[300px] pt-2 border-t border-t-border-light overflow-y-scroll">
              {favoriteCourses.map(course => (
                <FavoriteListItem key={course.id} favoriteCourse={course} />
              ))}
            </ul>

            <Button className="py-5 text-content-dark hover:text-content-light active:text-content-light bg-surface-highlight hover:bg-accent-secondary active:bg-accent-primary shadow-none hover:shadow-sm active:shadow-none cursor-pointer">
              View More
            </Button>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FavoritesButton;
