import CartButton from './CartButton';
import SettingsButton from './SettingsButton';

type HeaderActionsProps = {
  handleListToggle: (list: string) => void;
  isLoggedIn: boolean;
};

function UtilityActions({ handleListToggle, isLoggedIn }: HeaderActionsProps) {
  return (
    <>
      <CartButton handleListToggle={handleListToggle} />
      {!isLoggedIn && <SettingsButton handleListToggle={handleListToggle} />}
    </>
  );
}

export default UtilityActions;
