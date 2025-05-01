import { Link } from 'react-router';
import Icon from '../Icon';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type Notification = {
  id: string;
  message: string;
  date: string;
  isRead: boolean;
};

const notifications: Notification[] = [
  {
    id: '1',
    message: 'Your course "React for Beginners" has been updated.',
    date: '2025-04-22T10:15:00Z',
    isRead: false,
  },
  {
    id: '2',
    message: 'New message from instructor John Smith.',
    date: '2025-04-21T17:30:00Z',
    isRead: false,
  },
  {
    id: '3',
    message: 'Your enrollment in "Advanced JavaScript Concepts" is confirmed.',
    date: '2025-04-20T08:45:00Z',
    isRead: true,
  },
  {
    id: '4',
    message: 'Reminder: Complete your profile to unlock full features.',
    date: '2025-04-19T14:00:00Z',
    isRead: false,
  },
  {
    id: '5',
    message: 'Your subscription will expire in 3 days.',
    date: '2025-04-18T09:20:00Z',
    isRead: true,
  },
];

function formatDateTime(isoString: string) {
  const date = new Date(isoString);

  const formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
}

function NotificationButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="font-normal text-body-small focus-visible:ring-0 shadow-none cursor-pointer"
        >
          <Icon name="bell" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-screen md:min-w-72 w-fit mt-dropdown p-0 bg-surface-light-primary border-none rounded-small shadow-panel">
        {notifications.map(notification => {
          const { date, time } = formatDateTime(notification.date);

          return (
            <DropdownMenuItem
              key={notification.id}
              className="flex w-full p-0 hover:bg-surface-highlight"
            >
              <Link
                to="/"
                className="flex items-center gap-4 w-full py-2 px-4 duration-medium"
              >
                <div className="w-full py-2 ps-2">
                  <h6 className="font-normal text-body-small">
                    {notification.message}
                  </h6>
                  <p className="text-body-micro text-gray-500">
                    {date} - {time}
                  </p>
                </div>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NotificationButton;
