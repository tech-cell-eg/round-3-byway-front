import { useTranslation } from 'react-i18next';
import Icon from '../Icon';
import GoToButton from './GoToButton';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { Button } from '../ui/button';
import appName from '@/constants/appName';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconName } from '../Icon';

type MenuProps = {
  isLoggedIn?: boolean;
  setMenuVisibility?: (visible: boolean) => void;
};

type NavButton = {
  id: number;
  to: string;
  translation: string;
  iconName?: IconName;
  isUserLoggedIn: boolean;
};

const navButtons: NavButton[] = [
  {
    id: 1,
    to: '/',
    translation: 'account',
    iconName: 'user',
    isUserLoggedIn: true,
  },
  {
    id: 2,
    to: '/',
    translation: 'myLearning',
    iconName: 'book-open',
    isUserLoggedIn: true,
  },
  {
    id: 3,
    to: '/',
    translation: 'dashboard',
    iconName: 'dashboard',
    isUserLoggedIn: true,
  },
  {
    id: 4,
    to: '/',
    translation: 'header:loginButton',
    isUserLoggedIn: false,
  },
  {
    id: 5,
    to: '/',
    translation: 'header:signupButton',
    isUserLoggedIn: false,
  },
];

function SideMenu({ isLoggedIn }: MenuProps) {
  const { t } = useTranslation(['menu', 'header']);

  return (
    <Sheet>
      <SheetTrigger asChild>
        {isLoggedIn ? (
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <Button
            variant="outline"
            className="lg:hidden border-none shadow-none cursor-pointer"
          >
            <Icon name="menu" />
          </Button>
        )}
      </SheetTrigger>

      <SheetContent className="gap-0 bg-surface-light-primary border-none">
        <SheetHeader className="mr-auto">
          <SheetTitle>{t('menu:userGreeting')} User</SheetTitle>
        </SheetHeader>

        {/* Nav Buttons */}
        <nav>
          {isLoggedIn ? (
            <div className="flex flex-col p-0 gap-0 m-0">
              {navButtons
                .filter(button => button.isUserLoggedIn)
                .map(button => (
                  <GoToButton
                    key={button.id}
                    to={button.to}
                    dir="ltr"
                    role="menuitem"
                    // value={t('account')}
                    className="flex justify-center items-center gap-4 py-3 px-4 font-semibold text-center text-content-dark hover:text-content-light bg-sky-50 hover:bg-accent-secondary active:bg-accent-primary duration-short"
                  >
                    <span className="flex justify-between items-center gap-4">
                      {t(`${button.translation}`)}
                      {button.iconName && (
                        <Icon name={button.iconName} size={17} />
                      )}
                    </span>
                  </GoToButton>
                ))}
            </div>
          ) : (
            <>
              {navButtons
                .filter(button => !button.isUserLoggedIn)
                .map(button => (
                  <GoToButton
                    key={button.id}
                    to={button.to}
                    dir="ltr"
                    role="menuitem"
                    className="flex justify-center items-center gap-4 py-3 px-4 font-semibold text-center text-content-dark hover:text-content-light bg-sky-50 hover:bg-accent-secondary active:bg-accent-primary duration-short"
                  >
                    <span className="flex justify-between items-center gap-4">
                      {t(`${button.translation}`)}
                    </span>
                  </GoToButton>
                ))}
            </>
          )}
        </nav>

        <SheetFooter className="p-0">
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-3 py-2">
              <ThemeToggle />
              <hr className="w-full border-border-light" />
              <LanguageToggle />
            </div>

            <hr className="w-full border-border-light" />

            <GoToButton
              to="/"
              dir="rtl"
              role="menuitem"
              // value={t('account')}
              className="flex justify-center items-center gap-4 w-full py-3 px-4 font-semibold text-center text-content-dark hover:text-content-light bg-sky-50 hover:bg-accent-secondary active:bg-accent-primary duration-short"
            >
              <span className="flex justify-between items-center gap-4">
                {t('header:becomeInstructorButton')} {appName}
              </span>
            </GoToButton>

            <button
              // onClick={handleLogout}
              dir="ltr"
              role="menuitem"
              className="flex justify-center items-center gap-3 w-full py-3 font-semibold hover:text-content-light bg-red-50 hover:bg-red-500 cursor-pointer duration-medium"
            >
              {t('logout')}
              <Icon name="logout" size={16} />
            </button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SideMenu;
