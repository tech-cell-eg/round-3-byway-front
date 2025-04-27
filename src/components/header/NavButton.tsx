import { Link } from 'react-router';

type NavButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

function NavButton({ to, className = '', children }: NavButtonProps) {
  return (
    <Link
      to={to}
      className={`p-0 h-fit hover:bg-surface-highlight focus:bg-surface-highlight border border-dark shadow-none hover:shadow-lg active:shadow-none duration-short ${className}`}
    >
      {children}
    </Link>
  );
}

export default NavButton;
