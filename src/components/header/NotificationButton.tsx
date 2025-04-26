import Icon from '../Icon';
import { Button } from '../ui/button';

type NotificationButtonProps = {
  handleListToggle: (panelName: string) => void;
};

function NotificationButton({ handleListToggle }: NotificationButtonProps) {
  const handleClick = () => {
    handleListToggle('notification-list');
  };

  return (
    <Button onClick={handleClick} variant="icon">
      <Icon name="bell" />
    </Button>
  );
}

export default NotificationButton;
