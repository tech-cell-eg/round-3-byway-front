import Icon from '../Icon';
import { Button } from '../ui/button';

type SettingsButtonProps = {
  handleListToggle: (list: string) => void;
};

function SettingsButton({ handleListToggle }: SettingsButtonProps) {
  const handleClick = () => {
    handleListToggle('settings-panel');
  };

  return (
    <Button onClick={handleClick} variant="icon">
      <Icon name="gear" />
    </Button>
  );
}

export default SettingsButton;
