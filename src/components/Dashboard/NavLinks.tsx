import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const location = useLocation();

  const links = [
    { name: 'Commission', path: '#' },
    { name: 'Reviews', path: '/dashboard/reviews' },
    { name: 'Chapters', path: '/dashboard/sections' },
    { name: 'Promotion', path: '#' },
    { name: 'Detail', path: '#' },
    { name: 'Settings', path: '#' },
  ];

  return (
    <div className="flex gap-6 py-4 mt-5 border-b border-gray-300">
      {links.map(link => {
        const isActive = location.pathname === link.path;

        return (
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm font-medium transition-all border-b-2 ${
              isActive
                ? 'text-blue-600 border-blue-600 '
                : 'text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-500'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
