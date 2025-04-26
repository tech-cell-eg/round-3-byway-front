import GuestActions from './GuestActions';
import UserActions from './UserActions';
import UtilityActions from './UtilityActions';

type HeaderActionsProps = {
  handleListToggle: (list: string) => void;
  isLoggedIn: boolean;
  handleMenuVisibility: () => void;
};

function HeaderActions({
  handleListToggle,
  isLoggedIn,
  handleMenuVisibility,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2 text-body-small text-content-dark">
      <UtilityActions
        handleListToggle={handleListToggle}
        isLoggedIn={isLoggedIn}
      />
      {isLoggedIn ? (
        <UserActions
          handleListToggle={handleListToggle}
          handleMenuVisibility={handleMenuVisibility}
        />
      ) : (
        <GuestActions />
      )}
    </div>
  );
}

export default HeaderActions;
