import CartListItem from './CartListItem';

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

function CartList() {
  return (
    <ul>
      {courses.map(course => (
        <CartListItem key={course.id} course={course} />
      ))}
    </ul>
  );
}

export default CartList;
