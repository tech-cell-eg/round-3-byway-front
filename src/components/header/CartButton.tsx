import Icon from '../Icon';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const courses = [
  {
    id: 1,
    courseName: 'Introduction to Web Development',
    instructorName: 'Alice Johnson',
    image: 'https://via.placeholder.com/150',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    duration: '6 weeks',
    level: 'Beginner',
  },
  {
    id: 2,
    courseName: 'Advanced React Techniques',
    instructorName: 'Mark Thompson',
    image: 'https://via.placeholder.com/150',
    description:
      'Dive deeper into React with hooks, context, and performance tips.',
    duration: '4 weeks',
    level: 'Advanced',
  },
  {
    id: 3,
    courseName: 'Data Structures in JavaScript',
    instructorName: 'Sandra Lee',
    image: 'https://via.placeholder.com/150',
    description:
      'Understand core data structures and algorithms using JavaScript.',
    duration: '5 weeks',
    level: 'Intermediate',
  },
  {
    id: 4,
    courseName: 'UI/UX Design Fundamentals',
    instructorName: 'David Kim',
    image: 'https://via.placeholder.com/150',
    description:
      'Explore the principles of user interface and user experience design.',
    duration: '3 weeks',
    level: 'Beginner',
  },
  {
    id: 5,
    courseName: 'Python for Data Analysis',
    instructorName: 'Emma Brown',
    image: 'https://via.placeholder.com/150',
    description: 'Use Python libraries like Pandas and NumPy to analyze data.',
    duration: '6 weeks',
    level: 'Intermediate',
  },
];

function CartButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-none shadow-none cursor-pointer"
        >
          <Icon name="cart" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-screen md:min-w-72 mt-dropdown p-0 bg-surface-light-primary border-none rounded-small shadow-panel">
        {courses.map(course => (
          <DropdownMenuItem
            key={course.id}
            className="group hover:bg-surface-highlight"
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
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CartButton;
