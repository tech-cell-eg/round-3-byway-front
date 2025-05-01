import { forwardRef } from 'react';
import Icon from '../Icon';

type UserButtonProps = React.ComponentPropsWithoutRef<'button'>;

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ onClick, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={e => {
          console.log('UserButton has been clicked');
          onClick?.(e);
        }}
        type="button"
        className={`flex justify-center items-center w-10 h-10 rounded-full cursor-pointer
        bg-[radial-gradient(ellipse_at_50%_75%,_theme(colors.sky.200),_theme(colors.blue.400),_theme(colors.violet.600)_90%)]
        ${className}`}
        {...props}
      >
        <Icon name="user" size={20} className="text-white" />
      </button>
    );
  }
);

UserButton.displayName = 'UserButton';
export default UserButton;
