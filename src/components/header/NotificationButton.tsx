import Icon from '../Icon';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import NotificationListItem from './NotificationListItem';

export type Notification = {
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
        <ul>
          {notifications.map(notification => {
            return (
              <NotificationListItem
                key={notification.id}
                notification={notification}
              />
            );
          })}
        </ul>

        <Dialog>
          <DialogTrigger className="w-full py-3 font-semibold text-content-dark hover:text-content-light active:text-content-light bg-surface-highlight hover:bg-accent-secondary active:bg-accent-primary border-t border-t-white cursor-pointer duration-short">
            View More
          </DialogTrigger>

          <DialogContent className="p-2 md:p-5 bg-surface-light-primary border-0">
            <DialogHeader>
              <DialogTitle className="flex justify-center items-center gap-3">
                <Icon name="bell" className="text-blue-300 fill-blue-300" />
                Notifications
              </DialogTitle>
            </DialogHeader>

            <ul className="h-[300px] pt-2 border-t border-t-border-light overflow-y-scroll">
              {notifications.map(notification => {
                return (
                  <NotificationListItem
                    key={notification.id}
                    notification={notification}
                  />
                );
              })}
            </ul>

            <Button className="py-5 text-content-dark hover:text-content-light active:text-content-light bg-surface-highlight hover:bg-accent-secondary active:bg-accent-primary shadow-none hover:shadow-sm active:shadow-none cursor-pointer">
              View More
            </Button>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NotificationButton;
