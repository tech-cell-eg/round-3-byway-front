import Icon from '../Icon';
import { Button } from '../ui/button';

type FavoritesButtonProps = {
  handleListToggle: (panelName: string) => void;
};

function FavoritesButton({ handleListToggle }: FavoritesButtonProps) {
  const handleClick = () => {
    handleListToggle('favorites-list');
  };

  return (
    <Button onClick={handleClick} variant="icon">
      <Icon name="heart" />
    </Button>
  );
}

export default FavoritesButton;
