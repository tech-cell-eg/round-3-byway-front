import appName from '@/components/constants/appName';
import logoImage from '../../assets/logo.png';
import { Link } from 'react-router';

function Logo() {
  return (
    <Link to="/dashboard">
      <div className="flex items-center">
        <div className="w-ft">
          <img src={logoImage} alt="logo" className="w-full object-cover" />
        </div>
        <span className="text-content-dark">{appName}</span>
      </div>
    </Link>
  );
}

export default Logo;
