import { Link } from 'react-router'; // updated import for react-router-dom

type GoToButtonProps = {
  to: string;
  role?: string;
  value?: string;
  className: string;
  children?: React.ReactNode;
};

function GoToButton({ to, role, value, className, children }: GoToButtonProps) {
  return (
    <Link to={to} role={role} className={className}>
      {value}
      {children}
    </Link>
  );
}

export default GoToButton;
