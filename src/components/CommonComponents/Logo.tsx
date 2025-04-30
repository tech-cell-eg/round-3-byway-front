import appName from '@/constants/appName';
import logoImage from '../../assets/logo.png';
import { Link } from 'react-router';

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center">
        <div className="w-[25px] h-[35px] lg:w-[30px] lg:h-[40px]">
          <img
            src={logoImage}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="hidden lg:block text-content-dark">{appName}</span>
      </div>
    </Link>
  );
}

export default Logo;
