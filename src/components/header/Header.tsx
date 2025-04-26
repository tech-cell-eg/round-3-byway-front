import Logo from '../CommonComponents/Logo';
import HeaderActions from './HeaderActions';
import Searchbar from './Searchbar';
import CategoriesButton from './CategoriesButton';
import CategoriesList from './CategoriesList';
import { useState } from 'react';
import TeachOnButton from './TeachOnButton';
import CartDropdown from './CartDropdown';
import SettingsPanel from './SettingsPanel';
import FavoritesDropdown from './FavoritesDropdown';
import NotificationsDropdown from './NotificationsDropdown';

type HeaderProps = {
  handleMenuVisibility: () => void;
};

type VisibilityMap = {
  [key: string]: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ handleMenuVisibility }: HeaderProps) {
  const [isLoggedIn] = useState<boolean>(false);
  const [showCategoriesList, setShowCategoriesList] = useState<boolean>(false);
  const [showCartDropdown, setShowCartDropdown] = useState<boolean>(false);
  const [settingPanel, setSettingPanel] = useState<boolean>(false);
  const [favoritesList, setFavoritesList] = useState<boolean>(false);
  const [notificationsList, setNotificationsList] = useState<boolean>(false);

  const handleListToggle = (list: string): void => {
    const visibilityMap: VisibilityMap = {
      'category-dropdown': setShowCategoriesList,
      'cart-dropdown': setShowCartDropdown,
      'settings-panel': setSettingPanel,
      'favorites-list': setFavoritesList,
      'notification-list': setNotificationsList,
    };

    Object.entries(visibilityMap).forEach(([key, setter]) => {
      setter(key === list ? prev => !prev : false);
    });
  };

  return (
    <header
      dir="ltr"
      className="sticky top-0 flex justify-between items-center h-[66px] py-3 responsive-primary-padding-x bg-surface-light-primary shadow-sm z-40"
    >
      <Logo />

      <CategoriesButton handleListToggle={handleListToggle} />

      <Searchbar />

      <TeachOnButton />

      <HeaderActions
        handleListToggle={handleListToggle}
        isLoggedIn={isLoggedIn}
        handleMenuVisibility={handleMenuVisibility}
      />

      {showCategoriesList && <CategoriesList />}
      {showCartDropdown && <CartDropdown />}
      {settingPanel && <SettingsPanel />}
      {favoritesList && <FavoritesDropdown />}
      {notificationsList && <NotificationsDropdown />}
    </header>
  );
}

export default Header;
