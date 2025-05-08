import { Link } from 'react-router';
import { Notification } from './NotificationButton';

type NotificationListItemProps = {
  notification: Notification;
};

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

function NotificationListItem({ notification }: NotificationListItemProps) {
  const { date, time } = formatDateTime(notification.date);

  return (
    <li className="group shadow-sm mb-2  border-border-light overflow-hidden rounded-small duration-short">
      <Link
        to="/"
        className={`flex items-center gap-3 py-3 px-1 ${notification.isRead ? 'bg-surface-light-primary' : 'bg-blue-50'} hover:bg-accent-secondary duration-short`}
      >
        <div className="w-full py-2 ps-2">
          <h6 className="font-medium text-body-micro md:text-body-small group-hover:text-content-light">
            {notification.message}
          </h6>
          <p className="text-body-micro text-gray-500 group-hover:text-content-dark">
            {date} - {time}
          </p>
        </div>
        {!notification.isRead && (
          <span className="w-2 h-1.5 bg-accent-primary group-hover:bg-surface-light-primary rounded-circle"></span>
        )}
      </Link>
    </li>
  );
}

export default NotificationListItem;
