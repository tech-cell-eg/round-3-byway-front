import GuestActions from './GuestActions';
import SearchButton from './SearchButton';
import UserActions from './UserActions';
import UtilityActions from './UtilityActions';

type HeaderActionsProps = {
  isLoggedIn: boolean;
};

function HeaderActions({ isLoggedIn }: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-1 lg:gap-2 text-body-small text-content-dark">
      <SearchButton />

      <UtilityActions isLoggedIn={isLoggedIn} />

      {isLoggedIn && <UserActions isLoggedIn={isLoggedIn} />}

      {!isLoggedIn && <GuestActions />}
    </div>
  );
}

export default HeaderActions;
