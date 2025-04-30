import CartButton from './CartButton';
import SettingsButton from './SettingsButton';

type HeaderActionsProps = {
  isLoggedIn: boolean;
};

function UtilityActions({ isLoggedIn }: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-1">
      <CartButton />
      {!isLoggedIn && (
        <div className="hidden lg:block">
          <SettingsButton />
        </div>
      )}
    </div>
  );
}

export default UtilityActions;
