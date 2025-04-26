import FavoritesButton from './FavoritesButton';
import NotificationButton from './NotificationButton';
import UserButton from './UserButton';

type UserActionsProps = {
  handleListToggle: (list: string) => void;
  handleMenuVisibility: () => void;
};

function UserActions({
  handleListToggle,
  handleMenuVisibility,
}: UserActionsProps) {
  return (
    <div className="flex items-center gap-1">
      <FavoritesButton handleListToggle={handleListToggle} />

      <NotificationButton handleListToggle={handleListToggle} />

      <UserButton handleMenuVisibility={handleMenuVisibility} />
    </div>
  );
}

export default UserActions;
