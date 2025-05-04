import Logo from '../CommonComponents/Logo';
import HeaderActions from './HeaderActions';
import Searchbar from './Searchbar';
import CategoriesButton from './CategoriesButton';
import TeachOnButton from './TeachOnButton';
import SideMenu from './SideMenu';

type HeaderProps = {
  isLoggedIn: boolean;
};

function Header({ isLoggedIn }: HeaderProps) {
  return (
    <header
      dir="ltr"
      className="sticky top-0 flex justify-between items-center gap-2 lg:gap-0 w-full h-[66px] py-3 responsive-primary-padding-x bg-surface-light-primary shadow-sm z-40 overflow-hidden"
    >
      <Logo />

      <div className="flex items-center gap-7 w-3/5">
        <CategoriesButton />
        <Searchbar />

        <div className="hidden lg:flex flex-1/4">
          <TeachOnButton />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <HeaderActions isLoggedIn={isLoggedIn} />

        {!isLoggedIn && <SideMenu />}
      </div>
    </header>
  );
}

export default Header;
