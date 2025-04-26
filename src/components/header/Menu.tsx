import { useTranslation } from 'react-i18next';
import Icon from '../Icon';
import GoToButton from './GoToButton';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { Button } from '../ui/button';

type MenuProps = {
  setMenuVisibility: (visible: boolean) => void;
};

function Menu({ setMenuVisibility }: MenuProps) {
  const { t } = useTranslation(['menu']);

  const handleMenuClose = () => {
    setMenuVisibility(false);
  };

  return (
    <nav
      role="menu"
      aria-label="User menu"
      className="fixed top-0 end-0 w-[60%] md:w-[50%] lg:w-[25%] h-dvh flex flex-col justify-between bg-white dark:bg-gray-800 rounded-s-3xl shadow-panel z-[90] overflow-hidden"
    >
      <div>
        <div className="flex justify-between items-center border-b border-border-light">
          <Button
            onClick={handleMenuClose}
            variant="icon"
            className="hover:rotate-90 duration-medium"
          >
            <Icon name="x" />
          </Button>
          <h3 className="px-4 py-3 font-semibold text-body-medium text-content-dark text-end">
            {t('userGreeting')} ابوحميد
          </h3>
        </div>

        <div className="">
          <GoToButton
            to="/account"
            role="menuitem"
            // value={t('account')}
            className="flex justify-center items-center gap-4 py-3 px-4 font-semibold text-center text-content-dark hover:text-content-light bg-sky-50 hover:bg-accent-secondary active:bg-accent-primary duration-short"
          >
            <span className="flex justify-between items-center gap-4">
              {t('account')}
              <Icon name="user" size={17} />
            </span>
          </GoToButton>
          <GoToButton
            to="/my-learning"
            role="menuitem"
            // value={t('myLearning')}
            className="flex justify-center items-center gap-4 py-3 px-4 font-semibold text-center text-content-dark hover:text-content-light bg-sky-50 hover:bg-accent-secondary active:bg-accent-primary duration-short"
          >
            <span className="flex justify-between-items-center gap-4">
              {t('myLearning')}
              <Icon name="book-open" size={17} />
            </span>
          </GoToButton>
          <GoToButton
            to="/instructor-dashboard"
            role="menuitem"
            value={t('dashboard')}
            className="flex justify-center items-center gap-4 py-3 px-4 font-semibold text-center text-content-dark hover:text-content-light bg-sky-50 hover:bg-accent-secondary active:bg-accent-primary duration-short"
          >
            <Icon name="dashboard" size={17} />
          </GoToButton>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3 py-2">
          <ThemeToggle />
          <hr className="w-full border-border-light" />
          <LanguageToggle />
        </div>

        <hr className="w-full border-border-light" />

        <button
          // onClick={handleLogout}
          role="menuitem"
          className="flex justify-center items-center gap-3 w-full py-2 font-semibold hover:text-content-light bg-red-50 hover:bg-red-500 cursor-pointer duration-medium"
        >
          {t('logout')}
          <Icon name="logout" size={16} />
        </button>
      </div>
    </nav>
  );
}

export default Menu;
