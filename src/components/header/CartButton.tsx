import Icon from '../Icon';
import { Button } from '../ui/button';

type CartButtonProps = {
  handleListToggle: (list: string) => void;
};

function CartButton({ handleListToggle }: CartButtonProps) {
  const handleClick = () => {
    handleListToggle('cart-dropdown');
  };

  return (
    <Button onClick={handleClick} variant="icon">
      <Icon name="cart" />
    </Button>
  );
}

export default CartButton;
