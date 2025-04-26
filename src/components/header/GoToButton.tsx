import { Link } from 'react-router'; // updated import for react-router-dom

type GoToButtonProps = {
  to: string;
  dir?: string;
  role?: string;
  value?: string;
  className: string;
  children?: React.ReactNode;
};

function GoToButton({
  to,
  dir,
  role,
  value,
  className,
  children,
}: GoToButtonProps) {
  return (
    <Link to={to} dir={dir} role={role} className={className}>
      {value}
      {children}
    </Link>
  );
}

export default GoToButton;
