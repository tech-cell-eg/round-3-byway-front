import FavoritesButton from './FavoritesButton';
import NotificationButton from './NotificationButton';
import SideMenu from './SideMenu';

type UserActionsProps = {
  isLoggedIn: boolean;
};

function UserActions({ isLoggedIn }: UserActionsProps) {
  return (
    <div className="flex items-center gap-1">
      {isLoggedIn && (
        <>
          <FavoritesButton />
          <NotificationButton />
        </>
      )}

      <SideMenu isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default UserActions;
