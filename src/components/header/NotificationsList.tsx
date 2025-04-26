import NotificationListItem from './NotificationListItem';

type NotificationType = 'info' | 'message' | 'success' | 'reminder' | 'warning';

type Notification = {
  id: string;
  message: string;
  date: string; // ISO string
  isRead: boolean;
  type: NotificationType;
};

const notifications: Notification[] = [
  {
    id: '1',
    message: 'Your course "React for Beginners" has been updated.',
    date: '2025-04-22T10:15:00Z',
    isRead: false,
    type: 'info',
  },
  {
    id: '2',
    message: 'New message from instructor John Smith.',
    date: '2025-04-21T17:30:00Z',
    isRead: false,
    type: 'message',
  },
  {
    id: '3',
    message: 'Your enrollment in "Advanced JavaScript Concepts" is confirmed.',
    date: '2025-04-20T08:45:00Z',
    isRead: true,
    type: 'success',
  },
  {
    id: '4',
    message: 'Reminder: Complete your profile to unlock full features.',
    date: '2025-04-19T14:00:00Z',
    isRead: false,
    type: 'reminder',
  },
  {
    id: '5',
    message: 'Your subscription will expire in 3 days.',
    date: '2025-04-18T09:20:00Z',
    isRead: true,
    type: 'warning',
  },
];

function NotificationsList() {
  return (
    <ul>
      {notifications.map(notification => (
        <NotificationListItem
          key={notification.id}
          notification={notification}
        />
      ))}
    </ul>
  );
}

export default NotificationsList;
