import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

function GuestActions() {
  return (
    <div className="hidden lg:flex lg:justify-between lg:gap-4">
      <LoginButton />

      <SignupButton />
    </div>
  );
}

export default GuestActions;
