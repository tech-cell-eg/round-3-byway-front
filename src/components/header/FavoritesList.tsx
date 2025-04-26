import FavoritesListItem from './FavoritesListItem';

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

function FavoritesList() {
  return (
    <ul>
      {favoriteCourses.map(course => (
        <FavoritesListItem key={course.id} course={course} />
      ))}
    </ul>
  );
}

export default FavoritesList;
