import { Link } from 'react-router';

type CategoryItemProps = {
  index: number;
};

function CategoryItem({ index }: CategoryItemProps) {
  return (
    <li className="text-content-dark border-b border-gray-100 last:border-b-0">
      <Link
        to="/"
        className="flex text-center py-3 px-4 hover:ps-7 hover:bg-surface-highlight  duration-medium"
      >
        Category {index + 1}
      </Link>
    </li>
  );
}

export default CategoryItem;
